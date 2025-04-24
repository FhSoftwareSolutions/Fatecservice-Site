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
                  A FH Software Solutions nasceu em 2018 da visão de dois programadores apaixonados por tecnologia, Felipe Almeida e Henrique Costa, que acreditavam que o desenvolvimento de software poderia ser mais ágil, transparente e focado em resultados.
                </p>
                <p>
                  Começamos como uma pequena consultoria de desenvolvimento web, atendendo a empresas locais em São Paulo. Com o passar dos anos, expandimos nossa atuação para o desenvolvimento mobile, integrações de sistemas e consultoria em tecnologia.
                </p>
                <p>
                  Hoje, contamos com uma equipe multidisciplinar de mais de 30 profissionais dedicados a transformar ideias em soluções digitais inovadoras que impulsionam o crescimento dos nossos clientes.
                </p>
              </div>
              
              <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-[#182b3e] p-6 rounded-xl text-center hover-lift">
                  <div className="text-4xl font-bold text-brand-primary mb-2">5+</div>
                  <div className="text-brand-gray">Anos de experiência</div>
                </div>
                
                <div className="bg-[#182b3e] p-6 rounded-xl text-center hover-lift">
                  <div className="text-4xl font-bold text-brand-primary mb-2">100+</div>
                  <div className="text-brand-gray">Projetos entregues</div>
                </div>
                
                <div className="bg-[#182b3e] p-6 rounded-xl text-center hover-lift">
                  <div className="text-4xl font-bold text-brand-primary mb-2">50+</div>
                  <div className="text-brand-gray">Clientes satisfeitos</div>
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
              Os princípios que guiam nosso trabalho e nossa relação com clientes e parceiros
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
                Desenvolver soluções tecnológicas inovadoras que transformem e simplifiquem a maneira como as empresas e pessoas interagem no mundo digital, gerando valor real para nossos clientes.
              </p>
            </div>
            
            {/* Visão */}
            <div className="bg-[#182b3e] rounded-xl p-8 shadow-lg highlight-card">
              <div className="w-16 h-16 bg-brand-dark rounded-full flex items-center justify-center mb-6">
                <i className="fas fa-eye text-brand-primary text-2xl"></i>
              </div>
              <h3 className="text-xl font-bold mb-4">Visão</h3>
              <p className="text-brand-gray">
                Ser reconhecida como uma referência nacional em desenvolvimento de software, conhecida pela excelência técnica, inovação contínua e capacidade de entregar soluções que superam as expectativas dos clientes.
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
                  <span>Inovação e excelência técnica</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check text-brand-primary mt-1 mr-2"></i>
                  <span>Transparência e honestidade</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check text-brand-primary mt-1 mr-2"></i>
                  <span>Foco no cliente e em resultados</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check text-brand-primary mt-1 mr-2"></i>
                  <span>Colaboração e trabalho em equipe</span>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-check text-brand-primary mt-1 mr-2"></i>
                  <span>Aprendizado contínuo</span>
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
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Membro 1 */}
            <div className="bg-[#182b3e] rounded-xl overflow-hidden shadow-lg hover-lift group">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1560250097-0b93528c311a" 
                  alt="Felipe Almeida - CEO" 
                  className="w-full h-64 object-cover object-center group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#182b3e] to-transparent opacity-80"></div>
              </div>
              <div className="p-6 relative -mt-16">
                <h3 className="text-xl font-bold">Felipe Almeida</h3>
                <p className="text-brand-primary mb-4">CEO & Co-Fundador</p>
                <p className="text-brand-gray text-sm mb-4">
                  Especialista em estratégia digital e desenvolvimento web com mais de 10 anos de experiência.
                </p>
                <div className="flex space-x-2">
                  <a href="#" className="text-brand-gray hover:text-brand-secondary transition-colors">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                  <a href="#" className="text-brand-gray hover:text-brand-secondary transition-colors">
                    <i className="fab fa-twitter"></i>
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
                  alt="Henrique Costa - CTO" 
                  className="w-full h-64 object-cover object-center group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#182b3e] to-transparent opacity-80"></div>
              </div>
              <div className="p-6 relative -mt-16">
                <h3 className="text-xl font-bold">Henrique Costa</h3>
                <p className="text-brand-primary mb-4">CTO & Co-Fundador</p>
                <p className="text-brand-gray text-sm mb-4">
                  Desenvolvedor full-stack com experiência em arquitetura de software e soluções escaláveis.
                </p>
                <div className="flex space-x-2">
                  <a href="#" className="text-brand-gray hover:text-brand-secondary transition-colors">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                  <a href="#" className="text-brand-gray hover:text-brand-secondary transition-colors">
                    <i className="fab fa-twitter"></i>
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
                  alt="Mariana Santos - UX/UI Designer" 
                  className="w-full h-64 object-cover object-center group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#182b3e] to-transparent opacity-80"></div>
              </div>
              <div className="p-6 relative -mt-16">
                <h3 className="text-xl font-bold">Mariana Santos</h3>
                <p className="text-brand-primary mb-4">UX/UI Designer</p>
                <p className="text-brand-gray text-sm mb-4">
                  Designer especializada em experiência do usuário, interfaces intuitivas e design de produto.
                </p>
                <div className="flex space-x-2">
                  <a href="#" className="text-brand-gray hover:text-brand-secondary transition-colors">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                  <a href="#" className="text-brand-gray hover:text-brand-secondary transition-colors">
                    <i className="fab fa-twitter"></i>
                  </a>
                  <a href="#" className="text-brand-gray hover:text-brand-secondary transition-colors">
                    <i className="fab fa-dribbble"></i>
                  </a>
                </div>
              </div>
            </div>
            
            {/* Membro 4 */}
            <div className="bg-[#182b3e] rounded-xl overflow-hidden shadow-lg hover-lift group">
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7" 
                  alt="Lucas Oliveira - Mobile Developer" 
                  className="w-full h-64 object-cover object-center group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#182b3e] to-transparent opacity-80"></div>
              </div>
              <div className="p-6 relative -mt-16">
                <h3 className="text-xl font-bold">Lucas Oliveira</h3>
                <p className="text-brand-primary mb-4">Mobile Developer</p>
                <p className="text-brand-gray text-sm mb-4">
                  Desenvolvedor mobile com foco em React Native, Flutter e experiência em APIs RESTful.
                </p>
                <div className="flex space-x-2">
                  <a href="#" className="text-brand-gray hover:text-brand-secondary transition-colors">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                  <a href="#" className="text-brand-gray hover:text-brand-secondary transition-colors">
                    <i className="fab fa-twitter"></i>
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
