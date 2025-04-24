import { services } from "@/lib/utils";
import IconButton from "@/components/ui/icon-button";

const Servicos = () => {
  return (
    <>
      {/* Page Header */}
      <section className="pt-32 pb-20 px-6 bg-gradient-to-b from-brand-dark to-[#192e46] relative overflow-hidden">
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-grid-pattern"></div>
        
        <div className="container mx-auto text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Nossos <span className="text-brand-primary">Serviços</span></h1>
          <p className="text-brand-gray text-lg mb-8 max-w-3xl mx-auto">
            Oferecemos soluções personalizadas para transformar suas ideias em realidade digital, utilizando as tecnologias mais modernas do mercado.
          </p>
          <div className="w-20 h-1 bg-brand-secondary mx-auto"></div>
        </div>
      </section>

      {/* Serviços Principais */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          {services.map((service, index) => (
            <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20 ${
              index % 2 === 1 ? 'lg:flex-row-reverse' : ''
            }`}>
              <div className={index % 2 === 1 ? 'lg:order-2' : 'lg:order-1'}>
                <h2 className="text-3xl font-bold mb-6">
                  {service.title}
                </h2>
                <div className="w-20 h-1 bg-brand-secondary mb-8"></div>
                
                <p className="text-brand-gray mb-6">
                  {service.description}
                </p>
                
                <div className="bg-[#182b3e] rounded-xl p-6 mb-8">
                  <h3 className="text-xl font-semibold mb-4">Recursos e benefícios</h3>
                  <ul className="space-y-4">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <div className="w-6 h-6 rounded-full bg-brand-dark flex items-center justify-center mr-3 mt-0.5">
                          <i className={`fas fa-check text-${service.color === 'blue' ? 'brand-secondary' : 'brand-primary'} text-sm`}></i>
                        </div>
                        <div className="flex-1">
                          <p className="text-white">{feature}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <IconButton 
                  icon="fa-comment-alt" 
                  text="Solicitar orçamento" 
                  variant={service.color === 'blue' ? 'secondary' : 'primary'} 
                  href="/contato"
                  iconPosition="left"
                />
              </div>
              
              <div className={index % 2 === 1 ? 'lg:order-1' : 'lg:order-2'}>
                <div className="relative rounded-2xl overflow-hidden shadow-lg animate-float">
                  <div className={`absolute inset-0 bg-gradient-to-tr from-${
                    service.color === 'blue' ? 'brand-secondary' : 'brand-primary'
                  }/20 to-transparent mix-blend-overlay rounded-2xl`}></div>
                  <img 
                    src={service.image} 
                    alt={service.title} 
                    className="w-full rounded-2xl"
                  />
                  
                  <div className={`absolute top-4 left-4 p-4 bg-brand-darker/80 backdrop-blur-lg rounded-full shadow-${
                    service.color === 'blue' ? 'glow-blue' : 'glow-gold'
                  }`}>
                    <i className={`fas ${service.icon} text-${
                      service.color === 'blue' ? 'brand-secondary' : 'brand-primary'
                    } text-xl`}></i>
                  </div>
                </div>
              </div>
            </div>
          ))}
          
          {/* Outros serviços */}
          <div className="mt-32">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-6">Outros <span className="text-brand-primary">Serviços</span></h2>
              <p className="text-brand-gray max-w-2xl mx-auto">
                Além dos principais serviços, oferecemos uma ampla gama de soluções personalizadas para atender às necessidades específicas do seu negócio.
              </p>
              <div className="w-20 h-1 bg-brand-secondary mx-auto mt-6"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Consultoria em TI */}
              <div className="bg-[#182b3e] rounded-xl p-8 shadow-lg highlight-card">
                <div className="w-16 h-16 bg-brand-dark rounded-full flex items-center justify-center mb-6">
                  <i className="fas fa-laptop-code text-brand-secondary text-2xl"></i>
                </div>
                <h3 className="text-xl font-bold mb-4">Consultoria em TI</h3>
                <p className="text-brand-gray mb-6">
                  Oferecemos consultoria estratégica em tecnologia para ajudar sua empresa a tomar decisões baseadas em dados e tendências do mercado.
                </p>
                <ul className="space-y-2 mb-8">
                  <li className="flex items-start">
                    <i className="fas fa-check text-brand-secondary mt-1 mr-2"></i>
                    <span className="text-brand-gray">Análise de infraestrutura</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check text-brand-secondary mt-1 mr-2"></i>
                    <span className="text-brand-gray">Planejamento tecnológico</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check text-brand-secondary mt-1 mr-2"></i>
                    <span className="text-brand-gray">Otimização de processos</span>
                  </li>
                </ul>
              </div>
              
              {/* UX/UI Design */}
              <div className="bg-[#182b3e] rounded-xl p-8 shadow-lg highlight-card">
                <div className="w-16 h-16 bg-brand-dark rounded-full flex items-center justify-center mb-6">
                  <i className="fas fa-pencil-ruler text-brand-primary text-2xl"></i>
                </div>
                <h3 className="text-xl font-bold mb-4">UX/UI Design</h3>
                <p className="text-brand-gray mb-6">
                  Criamos experiências de usuário intuitivas e interfaces visualmente atrativas que elevam a percepção da sua marca.
                </p>
                <ul className="space-y-2 mb-8">
                  <li className="flex items-start">
                    <i className="fas fa-check text-brand-primary mt-1 mr-2"></i>
                    <span className="text-brand-gray">Pesquisa de usuários</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check text-brand-primary mt-1 mr-2"></i>
                    <span className="text-brand-gray">Prototipagem e wireframes</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check text-brand-primary mt-1 mr-2"></i>
                    <span className="text-brand-gray">Design de interfaces</span>
                  </li>
                </ul>
              </div>
              
              {/* Manutenção e Suporte */}
              <div className="bg-[#182b3e] rounded-xl p-8 shadow-lg highlight-card">
                <div className="w-16 h-16 bg-brand-dark rounded-full flex items-center justify-center mb-6">
                  <i className="fas fa-tools text-brand-secondary text-2xl"></i>
                </div>
                <h3 className="text-xl font-bold mb-4">Manutenção e Suporte</h3>
                <p className="text-brand-gray mb-6">
                  Oferecemos serviços contínuos de manutenção e suporte para garantir que suas aplicações funcionem perfeitamente.
                </p>
                <ul className="space-y-2 mb-8">
                  <li className="flex items-start">
                    <i className="fas fa-check text-brand-secondary mt-1 mr-2"></i>
                    <span className="text-brand-gray">Suporte técnico</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check text-brand-secondary mt-1 mr-2"></i>
                    <span className="text-brand-gray">Atualizações de segurança</span>
                  </li>
                  <li className="flex items-start">
                    <i className="fas fa-check text-brand-secondary mt-1 mr-2"></i>
                    <span className="text-brand-gray">Monitoramento de performance</span>
                  </li>
                </ul>
              </div>
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
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-white/5 rounded-full"></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Pronto para transformar sua ideia em realidade?
            </h2>
            
            <p className="text-white/90 text-lg mb-10 max-w-2xl mx-auto">
              Fale conosco hoje mesmo para discutir seu projeto e descobrir como podemos ajudar a impulsionar seu negócio com soluções personalizadas.
            </p>
            
            <IconButton 
              icon="fa-comment-alt" 
              text="Solicitar orçamento gratuito" 
              variant="outline" 
              href="/contato"
              iconPosition="left"
              className="bg-brand-dark hover:bg-brand-darker border-0"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Servicos;
