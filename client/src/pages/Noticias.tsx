import { Link } from "wouter";

const noticias = [
  {
    id: 1,
    title: "FH Software Solutions é reconhecida como uma das empresas mais inovadoras do setor de TI",
    excerpt: "Nossa empresa recebeu o prêmio de inovação em desenvolvimento de software pela terceira vez consecutiva, destacando nosso compromisso com a excelência e inovação contínua.",
    date: "15 de Maio de 2024",
    image: "https://images.unsplash.com/photo-1523961131990-5ea7c61b2107",
    category: "Reconhecimento",
    featured: true
  },
  {
    id: 2,
    title: "Como a Inteligência Artificial está transformando o desenvolvimento de software em 2024",
    excerpt: "Descubra como estamos integrando tecnologias de IA em nossos projetos para oferecer soluções mais inteligentes e eficientes para nossos clientes.",
    date: "03 de Abril de 2024",
    image: "https://images.unsplash.com/photo-1593642634367-d91a135587b5",
    category: "Tecnologia"
  },
  {
    id: 3,
    title: "Tendências de desenvolvimento mobile para ficar de olho neste ano",
    excerpt: "Conheça as tecnologias e metodologias que estão definindo o futuro do desenvolvimento de aplicativos móveis e como podem beneficiar seu negócio.",
    date: "26 de Março de 2024",
    image: "https://images.unsplash.com/photo-1526498460520-4c246339dccb",
    category: "Mobile"
  },
  {
    id: 4,
    title: "FH Software Solutions anuncia parceria estratégica com gigante do e-commerce",
    excerpt: "Nossa empresa firmou uma parceria estratégica para fornecer soluções de software personalizadas para uma das maiores empresas de e-commerce do Brasil.",
    date: "18 de Março de 2024",
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf",
    category: "Parceria"
  },
  {
    id: 5,
    title: "A importância da experiência do usuário no desenvolvimento de software",
    excerpt: "Entenda por que investir em UX/UI pode ser o diferencial competitivo que seu projeto precisa e como implementamos essas práticas em nossos produtos.",
    date: "05 de Março de 2024",
    image: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c",
    category: "UX/UI Design"
  },
  {
    id: 6,
    title: "FH Software Solutions expande operações com novo escritório em Campinas",
    excerpt: "Para atender à crescente demanda por nossos serviços, inauguramos um novo escritório em Campinas, ampliando nossa capacidade de atendimento no interior de São Paulo.",
    date: "20 de Fevereiro de 2024",
    image: "https://images.unsplash.com/photo-1577412647305-991150c7d163",
    category: "Expansão"
  }
];

const Noticias = () => {
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
              <button className="px-6 py-2 bg-brand-dark hover:bg-brand-secondary text-white rounded-full transition-colors duration-300 border border-brand-secondary">
                Todos
              </button>
              <button className="px-6 py-2 bg-transparent hover:bg-brand-dark text-white rounded-full transition-colors duration-300 border border-gray-700 hover:border-brand-secondary">
                Tecnologia
              </button>
              <button className="px-6 py-2 bg-transparent hover:bg-brand-dark text-white rounded-full transition-colors duration-300 border border-gray-700 hover:border-brand-secondary">
                Inovação
              </button>
              <button className="px-6 py-2 bg-transparent hover:bg-brand-dark text-white rounded-full transition-colors duration-300 border border-gray-700 hover:border-brand-secondary">
                Cases
              </button>
            </div>
            
            <div className="w-full md:w-auto">
              <div className="relative">
                <input 
                  type="text" 
                  placeholder="Buscar notícias..." 
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
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {noticias.filter(noticia => noticia.featured).map((noticia) => (
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
        </div>
      </section>

      {/* Recent News Grid */}
      <section className="py-16 px-6 bg-gradient-to-b from-brand-dark to-brand-darker">
        <div className="container mx-auto">
          <h2 className="text-2xl font-bold mb-10 flex items-center">
            <span className="w-8 h-1 bg-brand-secondary mr-4"></span>
            Notícias Recentes
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {noticias.filter(noticia => !noticia.featured).map((noticia) => (
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
          
          {/* Pagination */}
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
