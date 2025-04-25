const Sobre = () => {
  return (
    <>
      {/* Page Header */}
      <section className="pt-32 pb-20 px-6 bg-gradient-to-b from-brand-dark to-[#192e46] relative overflow-hidden">
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-grid-pattern"></div>
        
        <div className="container mx-auto text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Sobre <span className="text-brand-primary">Nós</span></h1>
          <p className="text-brand-gray text-lg mb-8 max-w-3xl mx-auto">
            Conheça a história, os valores e a equipe por trás da FH Software Solutions
          </p>
          <div className="w-20 h-1 bg-brand-secondary mx-auto"></div>
        </div>
      </section>

      {/* Nossa História */}
      <section className="py-20 px-6 relative">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl font-bold mb-6">Nossa <span className="text-brand-primary">História</span></h2>
              <div className="w-20 h-1 bg-brand-secondary mb-8"></div>
              
              <div className="space-y-6 text-brand-gray">
                <p>
                  A FH Software Solutions é uma empresa criada a partir de um grupo de amigos de faculdade do Big Data na Fatec Sunji Nishimura e surgiu a partir da ideia de criar soluções tecnologicas e serviços em 2025.
                </p>
                <p>
                  Nosso objetivo é oferecer serviços de desenvolvimento web, automação de fluxos, desenvolvimento low-code, IoT e análise de dados, integrando tecnologias modernas com soluções práticas e eficientes.
                </p>
                <p>
                  Contamos com uma equipe especializada de 6 profissionais dedicados, trabalhando de forma colaborativa para transformar ideias em soluções digitais inovadoras que impulsionam o crescimento dos nossos clientes.
                </p>
              </div>
              
              <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-[#182b3e] p-6 rounded-xl text-center hover-lift">
                  <div className="text-4xl font-bold text-brand-primary mb-2">10+</div>
                  <div className="text-brand-gray">Projetos planejados</div>
                </div>
                
                <div className="bg-[#182b3e] p-6 rounded-xl text-center hover-lift">
                  <div className="text-4xl font-bold text-brand-primary mb-2">6</div>
                  <div className="text-brand-gray">Especialistas</div>
                </div>
                
                <div className="bg-[#182b3e] p-6 rounded-xl text-center hover-lift">
                  <div className="text-4xl font-bold text-brand-primary mb-2">4</div>
                  <div className="text-brand-gray">Áreas de atuação</div>
                </div>
              </div>
            </div>
            
            <div className="order-1 lg:order-2 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-glow-blue animate-float">
                <div className="absolute inset-0 bg-gradient-to-tr from-brand-secondary/20 to-transparent mix-blend-overlay rounded-2xl"></div>
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c" 
                  alt="Equipe FH Software Solutions" 
                  className="w-full rounded-2xl"
                />
              </div>
              
              <div className="absolute -bottom-6 -right-6 p-6 bg-brand-darker/90 backdrop-blur-lg rounded-2xl border border-brand-primary/20 shadow-lg">
                <div className="text-gradient text-lg font-bold">Inovação & Tecnologia</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Missão, Visão e Valores */}
      <section className="py-20 px-6 bg-gradient-to-b from-brand-dark to-brand-darker relative">
        <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-transparent to-brand-dark"></div>
        
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-6">Missão, Visão e <span className="text-brand-primary">Valores</span></h2>
            <p className="text-brand-gray max-w-2xl mx-auto">
              Os princípios cristãos que guiam nosso trabalho e nossa relação com clientes e parceiros
            </p>
            <div className="w-20 h-1 bg-brand-secondary mx-auto mt-6"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Missão */}
            <div className="bg-[#182b3e] rounded-xl p-8 shadow-lg highlight-card">
              <div className="w-16 h-16 bg-brand-dark rounded-full flex items-center justify-center mb-6">
                <i className="fas fa-rocket text-brand-secondary text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold mb-4">Missão</h3>
              <p className="text-brand-gray">
                Desenvolver soluções tecnológicas que transformem positivamente a vida das pessoas, servindo com excelência, integridade e respeito ao próximo, refletindo o amor e a dedicação que nos foram ensinados pelos valores cristãos.
              </p>
            </div>
            
            {/* Visão */}
            <div className="bg-[#182b3e] rounded-xl p-8 shadow-lg highlight-card">
              <div className="w-16 h-16 bg-brand-dark rounded-full flex items-center justify-center mb-6">
                <i className="fas fa-eye text-brand-primary text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold mb-4">Visão</h3>
              <p className="text-brand-gray">
                Ser reconhecida como uma empresa que integra excelência técnica e valores cristãos na criação de soluções digitais, contribuindo para um mundo mais justo e acessível através da tecnologia e inspirando outros a seguirem o mesmo caminho.
              </p>
            </div>
            
            {/* Valores */}
            <div className="bg-[#182b3e] rounded-xl p-8 shadow-lg highlight-card">
              <div className="w-16 h-16 bg-brand-dark rounded-full flex items-center justify-center mb-6">
                <i className="fas fa-heart text-brand-secondary text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold mb-4">Valores</h3>
              <ul className="text-brand-gray space-y-2">
                <li className="flex items-start">
                  <i className="fas fa-check text-brand-primary mt-1 mr-2"></i>
                  <span>Integridade e transparência em todas as ações</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check text-brand-primary mt-1 mr-2"></i>
                  <span>Amor e respeito ao próximo em cada interação</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check text-brand-primary mt-1 mr-2"></i>
                  <span>Excelência como forma de honrar nossos talentos</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check text-brand-primary mt-1 mr-2"></i>
                  <span>Serviço humilde e dedicado aos clientes</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check text-brand-primary mt-1 mr-2"></i>
                  <span>Responsabilidade e compromisso com cada projeto</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Nossa Equipe */}
      <section className="py-20 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-6">Nossa <span className="text-brand-primary">Equipe</span></h2>
            <p className="text-brand-gray max-w-2xl mx-auto">
              Conheça os profissionais apaixonados por tecnologia que fazem parte da FH Software Solutions
            </p>
            <div className="w-20 h-1 bg-brand-secondary mx-auto mt-6"></div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Membro 1 */}
            <div className="bg-[#182b3e] rounded-xl overflow-hidden shadow-lg hover-lift group">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a" 
                  alt="Mateus Robers Amaral" 
                  className="w-full h-64 object-cover object-center group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#182b3e] to-transparent opacity-80"></div>
              </div>
              <div className="p-6 relative -mt-16">
                <h3 className="text-xl font-bold">Mateus Robers Amaral</h3>
                <p className="text-brand-primary mb-4">Desenvolvedor Web/Full-Stack</p>
                <p className="text-brand-gray text-sm mb-4">
                  Especialista em desenvolvimento web e soluções low-code com foco em usabilidade e experiência do usuário.
                </p>
                <div className="flex space-x-2">
                  <a href="#" className="text-brand-gray hover:text-brand-secondary transition-colors">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                  <a href="#" className="text-brand-gray hover:text-brand-secondary transition-colors">
                    <i className="fab fa-github"></i>
                  </a>
                </div>
              </div>
            </div>
            
            {/* Membro 2 */}
            <div className="bg-[#182b3e] rounded-xl overflow-hidden shadow-lg hover-lift group">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d" 
                  alt="Jonah Nishimura Kunihiro" 
                  className="w-full h-64 object-cover object-center group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#182b3e] to-transparent opacity-80"></div>
              </div>
              <div className="p-6 relative -mt-16">
                <h3 className="text-xl font-bold">Jonah Nishimura Kunihiro</h3>
                <p className="text-brand-primary mb-4">Automatic Workflows/Low-code</p>
                <p className="text-brand-gray text-sm mb-4">
                  Especialista em automação de processos e desenvolvimento de fluxos usando ferramentas low-code.
                </p>
                <div className="flex space-x-2">
                  <a href="#" className="text-brand-gray hover:text-brand-secondary transition-colors">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                  <a href="#" className="text-brand-gray hover:text-brand-secondary transition-colors">
                    <i className="fab fa-github"></i>
                  </a>
                </div>
              </div>
            </div>
            
            {/* Membro 3 */}
            <div className="bg-[#182b3e] rounded-xl overflow-hidden shadow-lg hover-lift group">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e" 
                  alt="Luis Otavio Jassi Rodrigues" 
                  className="w-full h-64 object-cover object-center group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#182b3e] to-transparent opacity-80"></div>
              </div>
              <div className="p-6 relative -mt-16">
                <h3 className="text-xl font-bold">Luis Otavio Jassi Rodrigues</h3>
                <p className="text-brand-primary mb-4">Especialista em IoT</p>
                <p className="text-brand-gray text-sm mb-4">
                  Especialista em soluções de Internet das Coisas, conectividade e automação de dispositivos.
                </p>
                <div className="flex space-x-2">
                  <a href="#" className="text-brand-gray hover:text-brand-secondary transition-colors">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                  <a href="#" className="text-brand-gray hover:text-brand-secondary transition-colors">
                    <i className="fab fa-github"></i>
                  </a>
                </div>
              </div>
            </div>
            
            {/* Membro 4 */}
            <div className="bg-[#182b3e] rounded-xl overflow-hidden shadow-lg hover-lift group">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7" 
                  alt="Lucas Santos Gonçalves" 
                  className="w-full h-64 object-cover object-center group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#182b3e] to-transparent opacity-80"></div>
              </div>
              <div className="p-6 relative -mt-16">
                <h3 className="text-xl font-bold">Lucas Santos Gonçalves</h3>
                <p className="text-brand-primary mb-4">Desenvolvedor Front-end</p>
                <p className="text-brand-gray text-sm mb-4">
                  Especialista em desenvolvimento front-end e automação de fluxos com foco em experiência do usuário.
                </p>
                <div className="flex space-x-2">
                  <a href="#" className="text-brand-gray hover:text-brand-secondary transition-colors">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                  <a href="#" className="text-brand-gray hover:text-brand-secondary transition-colors">
                    <i className="fab fa-github"></i>
                  </a>
                </div>
              </div>
            </div>
            
            {/* Membro 5 */}
            <div className="bg-[#182b3e] rounded-xl overflow-hidden shadow-lg hover-lift group">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1580489944761-15a19d654956" 
                  alt="João Vinnycius Matos Monteiro" 
                  className="w-full h-64 object-cover object-center group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#182b3e] to-transparent opacity-80"></div>
              </div>
              <div className="p-6 relative -mt-16">
                <h3 className="text-xl font-bold">João Vinnycius Matos Monteiro</h3>
                <p className="text-brand-primary mb-4">Prompt Engineer/Data Analytics</p>
                <p className="text-brand-gray text-sm mb-4">
                  Especialista em engenharia de prompts, Vibe-code e análise de dados para soluções inovadoras.
                </p>
                <div className="flex space-x-2">
                  <a href="#" className="text-brand-gray hover:text-brand-secondary transition-colors">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                  <a href="#" className="text-brand-gray hover:text-brand-secondary transition-colors">
                    <i className="fab fa-github"></i>
                  </a>
                </div>
              </div>
            </div>
            
            {/* Membro 6 */}
            <div className="bg-[#182b3e] rounded-xl overflow-hidden shadow-lg hover-lift group">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04" 
                  alt="Gustavo Seidi Hono" 
                  className="w-full h-64 object-cover object-center group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#182b3e] to-transparent opacity-80"></div>
              </div>
              <div className="p-6 relative -mt-16">
                <h3 className="text-xl font-bold">Gustavo Seidi Hono</h3>
                <p className="text-brand-primary mb-4">Desenvolvedor Front-end</p>
                <p className="text-brand-gray text-sm mb-4">
                  Especialista em desenvolvimento de interfaces e experiências de usuário com foco em usabilidade e design.
                </p>
                <div className="flex space-x-2">
                  <a href="#" className="text-brand-gray hover:text-brand-secondary transition-colors">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                  <a href="#" className="text-brand-gray hover:text-brand-secondary transition-colors">
                    <i className="fab fa-github"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <a href="/contato" className="inline-flex items-center px-8 py-4 bg-brand-primary text-brand-dark font-semibold rounded-full shadow-lg shadow-brand-primary/30 hover:bg-brand-primary-light hover:shadow-brand-primary/50 transition-all duration-300 btn-animate relative">
              <span className="relative z-10">Faça parte da nossa equipe</span>
              <i className="fas fa-arrow-right ml-2"></i>
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Sobre;
