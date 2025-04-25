import type { Express, Request, Response } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

export async function registerRoutes(app: Express): Promise<Server> {
  // API endpoints
  app.get("/api/health", (req: Request, res: Response) => {
    res.json({ status: "ok", message: "Server is running" });
  });

  // Contact form submission
  app.post("/api/contact", (req: Request, res: Response) => {
    try {
      const { name, email, phone, projectType, message } = req.body;
      
      // Validate required fields
      if (!name || !email || !message || !projectType) {
        return res.status(400).json({ 
          status: "error", 
          message: "Campos obrigatórios não preenchidos" 
        });
      }

      // In a real application, you would save this to a database
      // and/or send an email notification
      console.log("Contact form submission:", req.body);
      
      // Simulate delay for demo purposes
      setTimeout(() => {
        res.json({ 
          status: "success", 
          message: "Mensagem enviada com sucesso" 
        });
      }, 500);
    } catch (error) {
      console.error("Error processing contact form:", error);
      res.status(500).json({ 
        status: "error", 
        message: "Erro ao processar formulário de contato" 
      });
    }
  });

  // Newsletter subscription
  app.post("/api/newsletter", (req: Request, res: Response) => {
    try {
      const { email } = req.body;
      
      // Validate email
      if (!email) {
        return res.status(400).json({ 
          status: "error", 
          message: "Email é obrigatório" 
        });
      }

      // In a real application, you would save this to a database
      console.log("Newsletter subscription:", email);
      
      res.json({ 
        status: "success", 
        message: "Inscrição realizada com sucesso" 
      });
    } catch (error) {
      console.error("Error processing newsletter subscription:", error);
      res.status(500).json({ 
        status: "error", 
        message: "Erro ao processar inscrição na newsletter" 
      });
    }
  });

  // Get testimonials
  app.get("/api/testimonials", (req: Request, res: Response) => {
    try {
      // In a real application, this would come from a database
      const testimonials = [
        {
          id: 1,
          company: "Empresa Tech Solutions",
          author: "João Silva, CEO",
          content: "A parceria com a FH Software Solutions foi fundamental para o sucesso do nosso projeto. A equipe entregou um sistema perfeito, dentro do prazo e do orçamento previsto.",
          rating: 5
        },
        {
          id: 2,
          company: "E-commerce Outlet",
          author: "Maria Oliveira, Diretora",
          content: "Nossa plataforma de e-commerce desenvolvida pela FH Software Solutions superou todas as expectativas. As vendas aumentaram em 200% após o lançamento do novo site.",
          rating: 5
        },
        {
          id: 3,
          company: "Serviços Financeiros MB",
          author: "Carlos Santos, CTO",
          content: "O aplicativo desenvolvido pela FH Software Solutions para nossa empresa de serviços financeiros revolucionou a forma como interagimos com nossos clientes.",
          rating: 4.5
        }
      ];
      
      res.json({ 
        status: "success", 
        data: testimonials 
      });
    } catch (error) {
      console.error("Error fetching testimonials:", error);
      res.status(500).json({ 
        status: "error", 
        message: "Erro ao buscar depoimentos" 
      });
    }
  });

  // Get services
  app.get("/api/services", (req: Request, res: Response) => {
    try {
      // In a real application, this would come from a database
      const services = [
        {
          id: 1,
          title: "Desenvolvimento Web",
          description: "Criamos sites responsivos, aplicações web e e-commerces personalizados com as tecnologias mais modernas do mercado.",
          icon: "fa-laptop",
          image: "https://images.unsplash.com/photo-1476357471311-43c0db9fb2b4",
          features: [
            "Sites institucionais e landing pages",
            "E-commerce com integração de pagamentos",
            "Dashboards e painéis administrativos"
          ],
          color: "blue"
        },
        {
          id: 2,
          title: "Desenvolvimento Mobile",
          description: "Desenvolvemos aplicativos mobile nativos e híbridos para iOS e Android que impulsionam o seu negócio e expandem seu alcance.",
          icon: "fa-mobile-alt",
          image: "https://images.unsplash.com/photo-1618761714954-0b8cd0026356",
          features: [
            "Aplicativos nativos para Android e iOS",
            "Aplicativos híbridos multiplataforma",
            "Integração com APIs e serviços externos"
          ],
          color: "gold"
        },
        {
          id: 3,
          title: "Integrações e APIs",
          description: "Conectamos sistemas, aplicativos e plataformas para automatizar processos e unificar dados em um único ecossistema digital.",
          icon: "fa-plug",
          image: "https://images.unsplash.com/photo-1576568699714-a3f4950805d5",
          features: [
            "Desenvolvimento de APIs RESTful",
            "Integração com sistemas de pagamento",
            "Automação de processos e workflows"
          ],
          color: "blue"
        }
      ];
      
      res.json({ 
        status: "success", 
        data: services 
      });
    } catch (error) {
      console.error("Error fetching services:", error);
      res.status(500).json({ 
        status: "error", 
        message: "Erro ao buscar serviços" 
      });
    }
  });

  // Get projects
  app.get("/api/projects", (req: Request, res: Response) => {
    try {
      // In a real application, this would come from a database
      const projects = [
        {
          id: 1,
          title: "Portal E-commerce Fashion Outlet",
          category: "Desenvolvimento Web",
          description: "Plataforma completa de e-commerce com integração de pagamentos, gestão de estoque e painel administrativo personalizado.",
          image: "https://images.unsplash.com/photo-1491897554428-130a60dd4757",
          tags: ["React", "Node.js", "MongoDB", "Stripe API"]
        },
        {
          id: 2,
          title: "Aplicativo de Delivery FoodExpress",
          category: "Desenvolvimento Mobile",
          description: "Aplicativo móvel para pedidos de comida com rastreamento em tempo real, pagamento integrado e sistema de avaliações.",
          image: "https://images.unsplash.com/photo-1565299507177-b0ac66763828",
          tags: ["React Native", "Firebase", "Google Maps API", "Redux"]
        },
        {
          id: 3,
          title: "Sistema de Gestão Financeira FinControl",
          category: "Desenvolvimento Web",
          description: "Plataforma web para controle financeiro empresarial com dashboards personalizados, relatórios e previsões.",
          image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3",
          tags: ["Angular", "TypeScript", "Chart.js", "Node.js"]
        }
      ];
      
      const { limit } = req.query;
      let result = projects;
      
      if (limit && !isNaN(Number(limit))) {
        result = projects.slice(0, Number(limit));
      }
      
      res.json({ 
        status: "success", 
        data: result 
      });
    } catch (error) {
      console.error("Error fetching projects:", error);
      res.status(500).json({ 
        status: "error", 
        message: "Erro ao buscar projetos" 
      });
    }
  });

  // Get news
  app.get("/api/news", async (req: Request, res: Response) => {
    try {
      const { featured, limit } = req.query;
      let newsItems;
      
      if (featured === 'true') {
        // Buscar notícias em destaque
        newsItems = await storage.getFeaturedNews(
          limit ? parseInt(limit as string) : undefined
        );
      } else {
        // Buscar todas as notícias com limite opcional
        const limitNum = limit ? parseInt(limit as string) : undefined;
        newsItems = await storage.getLatestNews(limitNum);
      }
      
      // Formatar para front-end
      const formattedNews = newsItems.map(item => ({
        id: item.id,
        title: item.title,
        excerpt: item.summary,
        date: item.published_at.toLocaleDateString('pt-BR', {
          day: 'numeric',
          month: 'long',
          year: 'numeric'
        }),
        image: item.image_url && !item.image_url.includes('svg+xml') ? item.image_url : 'https://images.unsplash.com/photo-1523961131990-5ea7c61b2107',
        category: item.category,
        featured: item.featured,
        source: item.source_name
      }));
      
      res.json({ 
        status: "success", 
        data: formattedNews 
      });
    } catch (error) {
      console.error("Error fetching news:", error);
      res.status(500).json({ 
        status: "error", 
        message: "Erro ao buscar notícias" 
      });
    }
  });

  // Get single news article
  app.get("/api/news/:id", async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const newsItem = await storage.getNewsById(parseInt(id));
      
      if (!newsItem) {
        return res.status(404).json({ 
          status: "error", 
          message: "Notícia não encontrada" 
        });
      }
      
      // Formatar para front-end
      const formattedNews = {
        id: newsItem.id,
        title: newsItem.title,
        content: newsItem.content,
        date: newsItem.published_at.toLocaleDateString('pt-BR', {
          day: 'numeric',
          month: 'long',
          year: 'numeric'
        }),
        image: newsItem.image_url && !newsItem.image_url.includes('svg+xml') ? newsItem.image_url : 'https://images.unsplash.com/photo-1523961131990-5ea7c61b2107',
        category: newsItem.category,
        author: newsItem.source_name,
        featured: newsItem.featured,
        source_url: newsItem.source_url
      };
      
      res.json({ 
        status: "success", 
        data: formattedNews 
      });
    } catch (error) {
      console.error("Error fetching news item:", error);
      res.status(500).json({ 
        status: "error", 
        message: "Erro ao buscar notícia" 
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
