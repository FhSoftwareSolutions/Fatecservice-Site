import { Link } from "wouter";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

// Tipo para as notícias
interface Noticia {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  image: string;
  category: string;
  featured: boolean;
  source?: string;
}

// Hook para filtrar notícias
function useFilteredNews(categoryFilter: string = "") {
  // Buscar notícias em destaque
  const featuredNewsQuery = useQuery({
    queryKey: ["/api/news", "featured"],
    queryFn: async () => {
      const response = await fetch("/api/news?featured=true");
      if (!response.ok) {
        throw new Error("Falha ao carregar notícias em destaque");
      }
      const data = await response.json();
      return data.data as Noticia[];
    }
  });
  
  // Buscar notícias recentes (não em destaque)
  const recentNewsQuery = useQuery({
    queryKey: ["/api/news", "all"],
    queryFn: async () => {
      const response = await fetch("/api/news");
      if (!response.ok) {
        throw new Error("Falha ao carregar notícias recentes");
      }
      const data = await response.json();
      return data.data as Noticia[];
    }
  });
  
  // Filtrar por categoria se necessário
  const filteredRecent = recentNewsQuery.data
    ? categoryFilter 
      ? recentNewsQuery.data.filter(n => 
          n.category.toLowerCase() === categoryFilter.toLowerCase())
      : recentNewsQuery.data
    : [];
  
  return {
    featured: featuredNewsQuery.data || [],
    recent: filteredRecent,
    isLoading: featuredNewsQuery.isLoading || recentNewsQuery.isLoading,
    isError: featuredNewsQuery.isError || recentNewsQuery.isError
  };
}

const Noticias = () => {
  const [categoryFilter, setCategoryFilter] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const { featured, recent, isLoading, isError } = useFilteredNews(categoryFilter);
  
  // Função para filtrar notícias pela barra de busca
  const filteredRecent = recent.filter(noticia => 
    searchQuery === "" || 
    noticia.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    noticia.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
  );
  
  // Definir categorias disponíveis a partir das notícias carregadas
  const allCategories = Array.from(
    new Set([
      ...featured.map(n => n.category),
      ...recent.map(n => n.category)
    ])
  ).filter(Boolean);
  
  return (
    <>
      {/* Page Header */}
      <section className="pt-32 pb-20 px-6 bg-gradient-to-b from-brand-dark to-[#192e46] relative overflow-hidden">
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-grid-pattern"></div>
        
        <div className="container mx-auto text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Blog e <span className="text-brand-primary">Notícias</span></h1>
          <p className="text-brand-gray text-lg mb-8 max-w-3xl mx-auto">
            Acompanhe as últimas novidades, tendências e insights sobre tecnologia, desenvolvimento de software e inovação digital
          </p>
          <div className="w-20 h-1 bg-brand-secondary mx-auto"></div>
        </div>
      </section>

      {/* Filter and Search */}
      <section className="py-12 px-6 border-b border-gray-800">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex flex-wrap justify-center gap-4">
              <button 
                onClick={() => setCategoryFilter("")}
                className={`px-6 py-2 text-white rounded-full transition-colors duration-300 border ${
                  categoryFilter === "" 
                    ? "bg-brand-dark border-brand-secondary" 
                    : "bg-transparent border-gray-700 hover:border-brand-secondary hover:bg-brand-dark"
                }`}
              >
                Todos
              </button>
              {allCategories.map(category => (
                <button 
                  key={category}
                  onClick={() => setCategoryFilter(category)}
                  className={`px-6 py-2 text-white rounded-full transition-colors duration-300 border ${
                    categoryFilter === category 
                      ? "bg-brand-dark border-brand-secondary" 
                      : "bg-transparent border-gray-700 hover:border-brand-secondary hover:bg-brand-dark"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
            
            <div className="w-full md:w-auto">
              <div className="relative">
                <input 
                  type="text" 
                  placeholder="Buscar notícias..." 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-5 py-3 pr-12 bg-[#182b3e] text-white rounded-full border border-gray-700 focus:outline-none focus:border-brand-secondary transition-colors duration-300"
                />
                <button className="absolute right-4 top-1/2 transform -translate-y-1/2 text-brand-gray hover:text-brand-secondary transition-colors duration-300">
                  <i className="fas fa-search"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured News */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <h2 className="text-2xl font-bold mb-10 flex items-center">
            <span className="w-8 h-1 bg-brand-primary mr-4"></span>
            Notícias em Destaque
          </h2>
          
          {isLoading ? (
            <div className="flex justify-center items-center py-20">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-brand-primary"></div>
            </div>
          ) : isError ? (
            <div className="p-8 text-center">
              <p className="text-red-500 font-medium">Erro ao carregar notícias. Tente novamente mais tarde.</p>
            </div>
          ) : featured.length === 0 ? (
            <div className="p-8 text-center">
              <p className="text-brand-gray">Nenhuma notícia em destaque disponível no momento.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
              {featured.map((noticia) => (
                <div 
                  key={noticia.id} 
                  className="featured-news bg-[#182b3e] rounded-xl overflow-hidden shadow-lg highlight-card hover-lift group"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 h-full">
                    <div className="relative overflow-hidden h-64 md:h-full">
                      <img 
                        src={noticia.image} 
                        alt={noticia.title} 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-[#182b3e] to-transparent opacity-40"></div>
                    </div>
                    
                    <div className="p-8 flex flex-col justify-between">
                      <div>
                        <div className="flex justify-between items-center mb-4">
                          <span className="px-4 py-1 bg-brand-primary text-brand-dark text-sm font-medium rounded-full">
                            {noticia.category}
                          </span>
                          <span className="text-brand-gray text-sm">{noticia.date}</span>
                        </div>
                        
                        <h3 className="text-xl font-bold mb-4 group-hover:text-brand-secondary transition-colors duration-300">
                          {noticia.title}
                        </h3>
                        
                        <p className="text-brand-gray mb-6">
                          {noticia.excerpt}
                        </p>
                      </div>
                      
                      <Link 
                        href={`/noticias/${noticia.id}`}
                        className="inline-flex items-center text-brand-primary hover:text-brand-primary-light transition-colors duration-300 font-medium group"
                      >
                        Ler mais
                        <i className="fas fa-arrow-right ml-2 group-hover:translate-x-1 transition-transform duration-300"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Recent News Grid */}
      <section className="py-16 px-6 bg-gradient-to-b from-brand-dark to-brand-darker">
        <div className="container mx-auto">
          <h2 className="text-2xl font-bold mb-10 flex items-center">
            <span className="w-8 h-1 bg-brand-secondary mr-4"></span>
            Notícias Recentes
          </h2>
          
          {isLoading ? (
            <div className="flex justify-center items-center py-20">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-brand-secondary"></div>
            </div>
          ) : isError ? (
            <div className="p-8 text-center">
              <p className="text-red-500 font-medium">Erro ao carregar notícias. Tente novamente mais tarde.</p>
            </div>
          ) : filteredRecent.length === 0 ? (
            <div className="p-8 text-center">
              <p className="text-brand-gray">
                {searchQuery || categoryFilter 
                  ? "Nenhuma notícia corresponde aos critérios de busca."
                  : "Nenhuma notícia disponível no momento."}
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredRecent.map((noticia) => (
                <div 
                  key={noticia.id} 
                  className="bg-[#182b3e] rounded-xl overflow-hidden shadow-lg news-card group"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={noticia.image} 
                      alt={noticia.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#182b3e] to-transparent opacity-60"></div>
                    <div className="absolute top-4 left-4">
                      <span className="px-4 py-1 bg-brand-secondary text-white text-sm font-medium rounded-full">
                        {noticia.category}
                      </span>
                    </div>
                    {noticia.source && (
                      <div className="absolute bottom-4 right-4">
                        <span className="px-3 py-1 bg-black/50 text-white text-xs rounded-full backdrop-blur-sm">
                          {noticia.source}
                        </span>
                      </div>
                    )}
                  </div>
                  
                  <div className="p-6">
                    <div className="text-brand-gray text-sm mb-3">{noticia.date}</div>
                    
                    <h3 className="text-xl font-bold mb-4 group-hover:text-brand-primary transition-colors duration-300">
                      {noticia.title}
                    </h3>
                    
                    <p className="text-brand-gray mb-6 line-clamp-3">
                      {noticia.excerpt}
                    </p>
                    
                    <Link 
                      href={`/noticias/${noticia.id}`}
                      className="inline-flex items-center text-brand-secondary hover:text-brand-secondary-light transition-colors duration-300 text-sm font-medium group"
                    >
                      Ler mais
                      <i className="fas fa-arrow-right ml-2 group-hover:translate-x-1 transition-transform duration-300"></i>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}
          
          {/* Pagination - somente mostrar se houver mais de 9 itens */}
          {filteredRecent.length > 9 && (
            <div className="flex justify-center mt-16">
              <div className="flex space-x-2">
                <button className="w-10 h-10 rounded-full bg-brand-dark text-white flex items-center justify-center hover:bg-brand-secondary transition-colors duration-300">
                  <i className="fas fa-chevron-left"></i>
                </button>
                <button className="w-10 h-10 rounded-full bg-brand-secondary text-white flex items-center justify-center">1</button>
                <button className="w-10 h-10 rounded-full bg-brand-dark text-white flex items-center justify-center hover:bg-brand-secondary transition-colors duration-300">2</button>
                <button className="w-10 h-10 rounded-full bg-brand-dark text-white flex items-center justify-center hover:bg-brand-secondary transition-colors duration-300">3</button>
                <button className="w-10 h-10 rounded-full bg-brand-dark text-white flex items-center justify-center hover:bg-brand-secondary transition-colors duration-300">
                  <i className="fas fa-chevron-right"></i>
                </button>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-24 px-6 relative overflow-hidden">
        {/* Background with gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-brand-secondary/60 to-brand-primary/60"></div>
        
        <div className="container mx-auto relative z-10">
          <div className="max-w-3xl mx-auto bg-[#182b3e]/90 backdrop-blur-sm p-10 rounded-2xl shadow-xl border border-white/10">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">Inscreva-se em nossa <span className="text-brand-primary">Newsletter</span></h2>
              <p className="text-brand-gray">
                Receba as últimas notícias, artigos e novidades diretamente no seu e-mail. Não compartilhamos seus dados com terceiros.
              </p>
            </div>
            
            <form className="flex flex-col sm:flex-row gap-4">
              <input 
                type="email" 
                placeholder="Seu melhor e-mail" 
                className="flex-1 px-6 py-4 bg-brand-dark text-white rounded-full focus:outline-none focus:ring-2 focus:ring-brand-primary border border-gray-700"
                required
              />
              <button 
                type="submit" 
                className="px-8 py-4 bg-brand-primary text-brand-dark font-semibold rounded-full hover:bg-brand-primary-light transition-colors duration-300 btn-animate relative"
              >
                <span className="relative z-10">Inscrever-se</span>
                <i className="fas fa-paper-plane ml-2"></i>
              </button>
            </form>
            
            <div className="mt-6 text-center text-sm text-brand-gray">
              Ao se inscrever, você concorda com nossa <a href="#" className="text-brand-primary hover:underline">Política de Privacidade</a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Noticias;
