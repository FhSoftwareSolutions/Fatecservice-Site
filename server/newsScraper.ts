import axios from 'axios';
import * as cheerio from 'cheerio';
import { storage } from './storage';
import { log } from './vite';
import { InsertNews } from '@shared/schema';
import cron from 'node-cron';

// Fontes de notícias em português
const sources = [
  {
    name: 'Tecnoblog',
    url: 'https://tecnoblog.net/',
    articleSelector: 'article.bloco',
    titleSelector: 'h2',
    summarySelector: 'div.texto',
    imageSelector: 'img',
    linkSelector: 'a',
    baseUrl: 'https://tecnoblog.net',
  },
  {
    name: 'Canaltech',
    url: 'https://canaltech.com.br/ultimas/',
    articleSelector: 'article.timeline__article',
    titleSelector: 'h3',
    summarySelector: 'p',
    imageSelector: 'img',
    linkSelector: 'a',
    baseUrl: '',
  },
];

// Função para scraping de uma fonte específica
async function scrapeSource(source: typeof sources[0]): Promise<InsertNews[]> {
  try {
    log(`Iniciando scraping de ${source.name}`, 'scraper');
    const response = await axios.get(source.url);
    const $ = cheerio.load(response.data);
    const newsItems: InsertNews[] = [];

    $(source.articleSelector).slice(0, 10).each((_, element) => {
      const titleElement = $(element).find(source.titleSelector);
      const title = titleElement.text().trim();
      
      const summaryElement = $(element).find(source.summarySelector);
      const summary = summaryElement.text().trim() || 'Clique para ler mais sobre esta notícia.';
      
      const imageElement = $(element).find(source.imageSelector);
      const image_url = imageElement.attr('src') || imageElement.attr('data-src') || '';
      
      const linkElement = $(element).find(source.linkSelector).first();
      let source_url = linkElement.attr('href') || '';
      
      // Adiciona a URL base se o link for relativo
      if (source_url && !source_url.startsWith('http') && source.baseUrl) {
        source_url = `${source.baseUrl}${source_url}`;
      }
      
      if (title && source_url) {
        newsItems.push({
          title,
          summary,
          content: summary, // Inicialmente igual ao resumo
          image_url,
          source_url,
          source_name: source.name,
          published_at: new Date(),
          category: 'technology',
          featured: false,
        });
      }
    });

    log(`Obtidas ${newsItems.length} notícias de ${source.name}`, 'scraper');
    return newsItems;
  } catch (error) {
    log(`Erro ao raspar ${source.name}: ${error}`, 'scraper');
    return [];
  }
}

// Função para obter o conteúdo completo de uma notícia
async function getFullContent(url: string): Promise<string> {
  try {
    const response = await axios.get(url);
    const $ = cheerio.load(response.data);
    
    // Tentativa genérica de encontrar o conteúdo principal
    // Isso pode precisar ser adaptado por fonte
    const content = $('article, .article-content, .post-content, .entry-content, main')
      .text()
      .trim();
    
    return content || 'Conteúdo não disponível. Clique no link para ler o artigo completo.';
  } catch (error) {
    log(`Erro ao obter conteúdo completo: ${error}`, 'scraper');
    return 'Conteúdo não disponível. Clique no link para ler o artigo completo.';
  }
}

// Função principal para realizar o scraping de todas as fontes
export async function scrapeAllSources(): Promise<void> {
  log('Iniciando scraping de todas as fontes', 'scraper');
  
  for (const source of sources) {
    const newsItems = await scrapeSource(source);
    
    // Salvar no banco de dados
    for (const item of newsItems) {
      try {
        // Verificar se a notícia já existe para evitar duplicatas (pelo título/url)
        const existingNews = await checkIfNewsExists(item.title, item.source_url);
        
        if (!existingNews) {
          // Obter conteúdo completo para algumas notícias (limitado para não sobrecarregar)
          if (Math.random() < 0.3) { // 30% de chance para limitar requisições
            item.content = await getFullContent(item.source_url);
          }
          
          // Selecionar aleatoriamente algumas notícias como destaque
          item.featured = Math.random() < 0.2; // 20% de chance de ser destaque
          
          await storage.createNews(item);
          log(`Nova notícia salva: ${item.title}`, 'scraper');
        }
      } catch (err) {
        log(`Erro ao salvar notícia: ${err}`, 'scraper');
      }
    }
  }
  
  log('Scraping de notícias concluído', 'scraper');
}

// Verificar se uma notícia já existe no banco de dados
async function checkIfNewsExists(title: string, source_url: string): Promise<boolean> {
  // Como não temos um método específico para isso, vamos buscar todas as notícias
  // Em um sistema real, seria melhor ter um método específico no storage para isso
  const allNews = await storage.getNews(100);
  return allNews.some(news => 
    news.title.toLowerCase() === title.toLowerCase() || 
    news.source_url === source_url
  );
}

// Iniciar tarefa cron para executar o scraping periodicamente
export function initNewsScraper(): void {
  // Executar imediatamente na inicialização
  scrapeAllSources();
  
  // Agendar para executar a cada 3 horas
  cron.schedule('0 */3 * * *', () => {
    log('Executando scraping agendado', 'scraper');
    scrapeAllSources();
  });
  
  log('Agendador de scraping de notícias iniciado', 'scraper');
}