import { Link } from "wouter";
import TestimonialCard from "@/components/ui/testimonial-card";
import ServiceCard from "@/components/ui/service-card";
import IconButton from "@/components/ui/icon-button";
import { services, testimonials } from "@/lib/utils";

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 lg:pt-40 pb-20 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-brand-darker via-brand-dark to-[#192e46]"></div>
        <div className="absolute top-20 right-20 w-40 h-40 bg-brand-secondary/10 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-60 h-60 bg-brand-primary/10 rounded-full filter blur-3xl"></div>
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-grid-pattern"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Content Area */}
            <div className="lg:w-1/2 space-y-8">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                Transformamos <span className="text-brand-primary">ideias</span> em 
                <span className="text-brand-secondary"> soluções digitais</span> personalizadas
              </h1>
              
              <p className="text-brand-gray text-lg sm:text-xl max-w-2xl">
                Desenvolvemos softwares que impulsionam o seu negócio com tecnologias de ponta e foco na experiência do usuário.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 pt-4">
                <IconButton 
                  icon="fa-chevron-right" 
                  text="Solicitar Orçamento" 
                  variant="primary" 
                  href="/contato"
                />
                
                <IconButton 
                  icon="fa-eye" 
                  text="Ver Projetos" 
                  variant="outline" 
                  href="/projetos"
                />
              </div>
              
              {/* Trust badges */}
              <div className="pt-8">
                <p className="text-sm text-brand-gray mb-4">Tecnologias que utilizamos:</p>
                <div className="flex flex-wrap gap-6 items-center">
                  <div className="text-brand-gray/70 hover:text-white transition-colors duration-300">
                    <i className="fab fa-react text-3xl"></i>
                  </div>
                  <div className="text-brand-gray/70 hover:text-white transition-colors duration-300">
                    <i className="fab fa-angular text-3xl"></i>
                  </div>
                  <div className="text-brand-gray/70 hover:text-white transition-colors duration-300">
                    <i className="fab fa-vuejs text-3xl"></i>
                  </div>
                  <div className="text-brand-gray/70 hover:text-white transition-colors duration-300">
                    <i className="fab fa-node-js text-3xl"></i>
                  </div>
                  <div className="text-brand-gray/70 hover:text-white transition-colors duration-300">
                    <i className="fab fa-aws text-3xl"></i>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Hero Image */}
            <div className="lg:w-1/2 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-glow-blue animate-float">
                <div className="absolute inset-0 bg-gradient-to-tr from-brand-secondary/20 to-transparent mix-blend-overlay rounded-2xl"></div>
                <img 
                  src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d" 
                  alt="Desenvolvimento de software" 
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
              
              {/* Floating elements */}
              <div className="absolute -top-8 -right-8 p-6 bg-brand-darker/90 backdrop-blur-lg rounded-2xl border border-brand-secondary/20 shadow-lg animate-pulse-slow">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-brand-secondary flex items-center justify-center text-brand-dark">
                    <i className="fas fa-check"></i>
                  </div>
                  <div>
                    <p className="text-sm font-medium">5+ anos</p>
                    <p className="text-xs text-brand-gray">de experiência</p>
                  </div>
                </div>
              </div>
              
              <div className="absolute -bottom-6 -left-6 p-6 bg-brand-darker/90 backdrop-blur-lg rounded-2xl border border-brand-primary/20 shadow-lg animate-pulse-slow">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-brand-primary flex items-center justify-center text-brand-dark">
                    <i className="fas fa-star"></i>
                  </div>
                  <div>
                    <p className="text-sm font-medium">100+</p>
                    <p className="text-xs text-brand-gray">projetos entregues</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-[#192e46] to-transparent"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              O que nossos <span className="text-brand-primary">clientes</span> dizem
            </h2>
            <div className="w-24 h-1.5 bg-brand-secondary mx-auto rounded-full"></div>
          </div>
          
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <TestimonialCard
                  key={index}
                  company={testimonial.company}
                  author={testimonial.author}
                  content={testimonial.content}
                  rating={testimonial.rating}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 relative">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-brand-dark to-brand-darker"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Nossos <span className="text-brand-primary">Serviços</span>
            </h2>
            <p className="text-brand-gray max-w-2xl mx-auto">
              Oferecemos soluções personalizadas para transformar suas ideias em realidade, utilizando as tecnologias mais modernas do mercado.
            </p>
            <div className="w-24 h-1.5 bg-brand-secondary mx-auto mt-6 rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                description={service.description}
                icon={service.icon}
                image={service.image}
                features={service.features}
                color={service.color}
              />
            ))}
          </div>
          
          {/* View all services button */}
          <div className="text-center mt-12">
            <Link 
              href="/servicos" 
              className="inline-flex items-center font-medium text-brand-secondary hover:text-brand-secondary-light transition-colors duration-300 group"
            >
              <span>Ver todos os serviços</span>
              <i className="fas fa-long-arrow-alt-right ml-2 group-hover:translate-x-1 transition-transform duration-300"></i>
            </Link>
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
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white/5 rounded-full"></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Pronto para transformar suas ideias em realidade?
            </h2>
            
            <p className="text-white/90 text-lg mb-10 max-w-2xl mx-auto">
              Entre em contato conosco hoje mesmo para discutir seu projeto e descobrir como podemos ajudar a impulsionar seu negócio com soluções de software personalizadas.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <IconButton 
                icon="fa-comment-alt" 
                text="Fale com um especialista" 
                variant="outline" 
                href="/contato"
                iconPosition="left"
                className="bg-brand-dark hover:bg-brand-darker border-0"
              />
              
              <a 
                href="tel:+551130004000" 
                className="inline-flex items-center justify-center px-8 py-4 bg-white/20 backdrop-blur-sm text-white font-semibold rounded-full hover:bg-white/30 transition-all duration-300"
              >
                <i className="fas fa-phone-alt mr-2"></i>
                <span>(11) 3000-4000</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
