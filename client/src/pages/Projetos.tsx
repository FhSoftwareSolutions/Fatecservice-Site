import { Link } from "wouter";

const projetos = [
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
  },
  {
    id: 4,
    title: "App de Agendamento MedConsult",
    category: "Desenvolvimento Mobile",
    description: "Aplicativo para agendamento de consultas médicas com notificações, histórico e integração com prontuário eletrônico.",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef",
    tags: ["Flutter", "Firebase", "REST API", "Google Calendar"]
  },
  {
    id: 5,
    title: "Plataforma EAD LearnHub",
    category: "Desenvolvimento Web",
    description: "Sistema completo de ensino à distância com aulas em vídeo, exercícios interativos e certificação automática.",
    image: "https://images.unsplash.com/photo-1573496773905-f5b17e717f05",
    tags: ["Vue.js", "Laravel", "MySQL", "AWS S3"]
  },
  {
    id: 6,
    title: "Dashboard IoT SmartFactory",
    category: "Integrações e APIs",
    description: "Painel de monitoramento para indústria 4.0 com integração de sensores IoT, análise de dados e alertas automáticos.",
    image: "https://images.unsplash.com/photo-1571786256017-aee7a0c009b6",
    tags: ["React", "Node.js", "WebSockets", "MQTT"]
  }
];

const Projetos = () => {
  return (
    <>
      {/* Page Header */}
      <section className="pt-32 pb-20 px-6 bg-gradient-to-b from-brand-dark to-[#192e46] relative overflow-hidden">
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-grid-pattern"></div>
        
        <div className="container mx-auto text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Nossos <span className="text-brand-primary">Projetos</span></h1>
          <p className="text-brand-gray text-lg mb-8 max-w-3xl mx-auto">
            Conheça alguns dos projetos desenvolvidos pela nossa equipe de especialistas
          </p>
          <div className="w-20 h-1 bg-brand-secondary mx-auto"></div>
        </div>
      </section>

      {/* Filtro de Projetos */}
      <section className="py-12 px-6 border-b border-gray-800">
        <div className="container mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            <button className="px-6 py-2 bg-brand-dark hover:bg-brand-secondary text-white rounded-full transition-colors duration-300 border border-brand-secondary">
              Todos
            </button>
            <button className="px-6 py-2 bg-transparent hover:bg-brand-dark text-white rounded-full transition-colors duration-300 border border-gray-700 hover:border-brand-secondary">
              Desenvolvimento Web
            </button>
            <button className="px-6 py-2 bg-transparent hover:bg-brand-dark text-white rounded-full transition-colors duration-300 border border-gray-700 hover:border-brand-secondary">
              Desenvolvimento Mobile
            </button>
            <button className="px-6 py-2 bg-transparent hover:bg-brand-dark text-white rounded-full transition-colors duration-300 border border-gray-700 hover:border-brand-secondary">
              Integrações e APIs
            </button>
          </div>
        </div>
      </section>

      {/* Projetos Grid */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projetos.map((projeto) => (
              <div 
                key={projeto.id} 
                className="group bg-[#182b3e] rounded-xl overflow-hidden shadow-lg highlight-card service-card"
              >
                {/* Projeto Image */}
                <div className="relative h-56 overflow-hidden">
                  <img 
                    src={projeto.image} 
                    alt={projeto.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#182b3e] to-transparent opacity-80"></div>
                  <div className="absolute top-4 left-4">
                    <span className="px-4 py-1 bg-brand-primary text-brand-dark text-sm font-medium rounded-full">
                      {projeto.category}
                    </span>
                  </div>
                </div>
                
                {/* Projeto Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 group-hover:text-brand-secondary transition-colors duration-300">
                    {projeto.title}
                  </h3>
                  
                  <p className="text-brand-gray mb-6 text-sm">
                    {projeto.description}
                  </p>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {projeto.tags.map((tag, index) => (
                      <span 
                        key={index} 
                        className="px-3 py-1 bg-brand-dark text-brand-secondary text-xs rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <Link 
                    href={`/projetos/${projeto.id}`}
                    className="inline-flex items-center text-brand-primary hover:text-brand-primary-light transition-colors duration-300 text-sm font-medium group"
                  >
                    Ver detalhes
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

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        {/* Background with gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-brand-secondary/90 to-brand-primary/90"></div>
        
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full"></div>
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-white/10 rounded-full"></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Quer ser o próximo caso de sucesso?
            </h2>
            
            <p className="text-white/90 text-lg mb-10 max-w-2xl mx-auto">
              Estamos prontos para transformar suas ideias em soluções digitais de sucesso. Entre em contato conosco e vamos começar a planejar seu projeto.
            </p>
            
            <Link 
              href="/contato" 
              className="inline-flex items-center justify-center px-8 py-4 bg-brand-dark text-white font-semibold rounded-full shadow-lg hover:bg-brand-darker transition-all duration-300"
            >
              <i className="fas fa-rocket mr-2"></i>
              <span>Iniciar meu projeto</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Projetos;
