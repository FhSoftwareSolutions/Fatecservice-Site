import { useQuery } from "@tanstack/react-query";
import { Link, useParams, useLocation } from "wouter";
import { useEffect } from "react";

interface NewsDetail {
  id: number;
  title: string;
  content: string;
  date: string;
  image: string;
  category: string;
  author: string;
  featured: boolean;
  source_url?: string;
}

const NoticiaDetalhe = () => {
  const params = useParams<{ id: string }>();
  const [location, setLocation] = useLocation();
  const id = params.id;

  if (!id || isNaN(Number(id))) {
    setLocation("/noticias");
    return null;
  }

  const { data, isLoading, isError } = useQuery({
    queryKey: ["/api/news", id],
    queryFn: async () => {
      const response = await fetch(`/api/news/${id}`);
      if (!response.ok) {
        throw new Error("Falha ao carregar detalhes da notícia");
      }
      const data = await response.json();
      return data.data as NewsDetail;
    }
  });

  // Scroll para o topo quando a página for carregada
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen pt-32 pb-20 px-6 bg-brand-dark flex justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-brand-primary mt-20"></div>
      </div>
    );
  }

  if (isError || !data) {
    return (
      <div className="min-h-screen pt-32 pb-20 px-6 bg-brand-dark">
        <div className="container mx-auto text-center">
          <h1 className="text-3xl font-bold mb-6 text-red-500">Erro ao carregar notícia</h1>
          <p className="text-brand-gray mb-8">Não foi possível carregar os detalhes desta notícia.</p>
          <Link href="/noticias" className="px-6 py-3 bg-brand-primary text-brand-dark font-medium rounded-full hover:bg-brand-primary-light transition-colors duration-300">
            Voltar para notícias
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Page Header */}
      <section className="pt-32 pb-20 px-6 bg-gradient-to-b from-brand-dark to-[#192e46] relative overflow-hidden">
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-grid-pattern"></div>
        
        <div className="container mx-auto text-center relative z-10">
          <Link 
            href="/noticias" 
            className="inline-flex items-center text-brand-gray hover:text-brand-primary transition-colors duration-300 mb-8 group"
          >
            <i className="fas fa-arrow-left mr-2 group-hover:-translate-x-1 transition-transform duration-300"></i>
            Voltar para notícias
          </Link>
          
          <div className="flex flex-wrap justify-center gap-3 mb-6">
            <span className="px-4 py-1 bg-brand-primary text-brand-dark text-sm font-medium rounded-full">
              {data.category}
            </span>
            {data.featured && (
              <span className="px-4 py-1 bg-brand-secondary text-white text-sm font-medium rounded-full">
                Em destaque
              </span>
            )}
          </div>
          
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 max-w-4xl mx-auto">
            {data.title}
          </h1>
          
          <div className="flex items-center justify-center text-brand-gray text-sm md:text-base gap-4 md:gap-6 flex-wrap">
            <span className="flex items-center">
              <i className="far fa-calendar-alt mr-2"></i> {data.date}
            </span>
            <span className="flex items-center">
              <i className="far fa-user mr-2"></i> {data.author}
            </span>
          </div>
        </div>
      </section>
      
      {/* Article Content */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-8">
              {/* Hero Image */}
              <div className="rounded-xl overflow-hidden mb-10 shadow-xl">
                <img 
                  src={data.image || 'https://images.unsplash.com/photo-1579567761406-4684ee0c75b6?q=80&w=1287&auto=format&fit=crop'} 
                  alt={data.title} 
                  className="w-full h-auto object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.onerror = null;
                    target.src = 'https://images.unsplash.com/photo-1579567761406-4684ee0c75b6?q=80&w=1287&auto=format&fit=crop';
                  }}
                />
              </div>
              
              {/* Article Text */}
              <div className="prose prose-lg prose-invert max-w-none">
                <div dangerouslySetInnerHTML={{ 
                  __html: data.content
                    .split('\n').map(paragraph => 
                      paragraph.trim() ? `<p>${paragraph}</p>` : ''
                    ).join('') 
                }} />
                
                {data.source_url && (
                  <div className="mt-8 p-4 rounded-lg bg-brand-darker border border-gray-700">
                    <p className="text-brand-gray text-sm mb-2">Fonte original:</p>
                    <a 
                      href={data.source_url} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-brand-primary hover:text-brand-primary-light transition-colors duration-300"
                    >
                      {data.source_url}
                      <i className="fas fa-external-link-alt ml-2"></i>
                    </a>
                  </div>
                )}
              </div>
              
              {/* Share Links */}
              <div className="mt-12 border-t border-gray-800 pt-8">
                <h4 className="text-xl font-bold mb-4">Compartilhar</h4>
                <div className="flex space-x-4">
                  <button className="w-10 h-10 rounded-full bg-[#4267B2] text-white flex items-center justify-center hover:bg-opacity-80 transition-colors duration-300">
                    <i className="fab fa-facebook-f"></i>
                  </button>
                  <button className="w-10 h-10 rounded-full bg-[#1DA1F2] text-white flex items-center justify-center hover:bg-opacity-80 transition-colors duration-300">
                    <i className="fab fa-twitter"></i>
                  </button>
                  <button className="w-10 h-10 rounded-full bg-[#25D366] text-white flex items-center justify-center hover:bg-opacity-80 transition-colors duration-300">
                    <i className="fab fa-whatsapp"></i>
                  </button>
                  <button className="w-10 h-10 rounded-full bg-[#0077B5] text-white flex items-center justify-center hover:bg-opacity-80 transition-colors duration-300">
                    <i className="fab fa-linkedin-in"></i>
                  </button>
                </div>
              </div>
            </div>
            
            {/* Sidebar */}
            <div className="lg:col-span-4">
              <div className="sticky top-32">
                <div className="bg-[#182b3e] rounded-xl overflow-hidden shadow-lg p-6 mb-8">
                  <h3 className="text-xl font-bold mb-6 pb-4 border-b border-gray-800">
                    Precisa de uma solução personalizada?
                  </h3>
                  <p className="text-brand-gray mb-6">
                    Nossa equipe está pronta para desenvolver a solução ideal para o seu projeto, com tecnologia avançada e atendimento personalizado.
                  </p>
                  <Link 
                    href="/contato" 
                    className="inline-flex items-center text-brand-primary hover:text-brand-primary-light transition-colors duration-300 font-medium"
                  >
                    Fale conosco
                    <i className="fas fa-arrow-right ml-2"></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Related Articles - omitido para simplicidade */}
    </>
  );
};

export default NoticiaDetalhe;