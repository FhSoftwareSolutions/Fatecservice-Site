const Contato = () => {

  return (
    <>
      {/* Page Header */}
      <section className="pt-32 pb-20 px-6 bg-gradient-to-b from-brand-dark to-[#192e46] relative overflow-hidden">
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-grid-pattern"></div>
        
        <div className="container mx-auto text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Entre em <span className="text-brand-primary">Contato</span></h1>
          <p className="text-brand-gray text-lg mb-8 max-w-3xl mx-auto">Estamos prontos para transformar suas ideias em soluções digitais inovadoras. Entre em contato conosco e descubra como podemos ajudar a impulsionar seu negócio.</p>
          <div className="w-20 h-1 bg-brand-secondary mx-auto"></div>
        </div>
      </section>

      {/* Conteúdo Principal */}
      <section className="py-16 px-6">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Entre em Contato */}
            <div className="bg-[#182b3e] rounded-xl shadow-lg p-8 highlight-card">
              <h2 className="text-2xl font-bold mb-6">Fale <span className="text-brand-primary">Conosco</span></h2>
              <p className="text-brand-gray mb-8">Escolha uma das opções abaixo para entrar em contato. Estamos prontos para atender e transformar suas ideias em soluções digitais.</p>
              
              <div className="space-y-8">
                {/* WhatsApp */}
                <a 
                  href="https://wa.me/5511987654321" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center p-6 bg-gradient-to-r from-[#25D366]/20 to-[#25D366]/5 rounded-xl hover:scale-105 transition-transform duration-300 border border-[#25D366]/30"
                >
                  <div className="w-16 h-16 rounded-full bg-[#25D366] flex items-center justify-center mr-6 shadow-lg shadow-[#25D366]/20">
                    <i className="fab fa-whatsapp text-white text-3xl"></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-1">WhatsApp</h3>
                    <p className="text-brand-gray">Atendimento rápido e direto</p>
                    <p className="text-[#25D366] font-medium mt-2">Clique para conversar</p>
                  </div>
                </a>
                
                {/* Instagram */}
                <a 
                  href="https://instagram.com/fhsoftware" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center p-6 bg-gradient-to-r from-[#E1306C]/20 to-[#E1306C]/5 rounded-xl hover:scale-105 transition-transform duration-300 border border-[#E1306C]/30"
                >
                  <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-[#FCAF45] via-[#E1306C] to-[#833AB4] flex items-center justify-center mr-6 shadow-lg shadow-[#E1306C]/20">
                    <i className="fab fa-instagram text-white text-3xl"></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-1">Instagram</h3>
                    <p className="text-brand-gray">Acompanhe nosso trabalho</p>
                    <p className="text-[#E1306C] font-medium mt-2">@fhsoftware</p>
                  </div>
                </a>
                
                {/* Email */}
                <a 
                  href="mailto:contato@fhsoftware.com.br" 
                  className="flex items-center p-6 bg-gradient-to-r from-[#4285F4]/20 to-[#4285F4]/5 rounded-xl hover:scale-105 transition-transform duration-300 border border-[#4285F4]/30"
                >
                  <div className="w-16 h-16 rounded-full bg-[#4285F4] flex items-center justify-center mr-6 shadow-lg shadow-[#4285F4]/20">
                    <i className="fas fa-envelope text-white text-2xl"></i>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-1">E-mail</h3>
                    <p className="text-brand-gray">Mensagens e orçamentos</p>
                    <p className="text-[#4285F4] font-medium mt-2">contato@fhsoftware.com.br</p>
                  </div>
                </a>
              </div>
            </div>
            
            {/* Informações de Contato */}
            <div>
              {/* Informações Diretas */}
              <div className="bg-[#182b3e] rounded-xl shadow-lg p-8 mb-8 highlight-card">
                <h2 className="text-2xl font-bold mb-6">Informações de <span className="text-brand-primary">Contato</span></h2>
                <ul className="space-y-6">
                  <li className="flex items-start hover-lift">
                    <div className="w-12 h-12 rounded-full bg-brand-dark flex items-center justify-center mr-4">
                      <i className="fas fa-map-marker-alt text-brand-secondary"></i>
                    </div>
                    <div>
                      <h3 className="font-bold mb-1">Endereço</h3>
                      <p className="text-brand-gray">Av. Paulista, 1000, 15º andar</p>
                      <p className="text-brand-gray">Bela Vista, São Paulo/SP - CEP 01310-100</p>
                    </div>
                  </li>
                  
                  <li className="flex items-start hover-lift">
                    <div className="w-12 h-12 rounded-full bg-brand-dark flex items-center justify-center mr-4">
                      <i className="fas fa-phone text-brand-secondary"></i>
                    </div>
                    <div>
                      <h3 className="font-bold mb-1">Telefone</h3>
                      <p className="text-brand-gray">(11) 3000-4000</p>
                      <p className="text-brand-gray">(11) 98765-4321 (WhatsApp)</p>
                    </div>
                  </li>
                  
                  <li className="flex items-start hover-lift">
                    <div className="w-12 h-12 rounded-full bg-brand-dark flex items-center justify-center mr-4">
                      <i className="fas fa-envelope text-brand-secondary"></i>
                    </div>
                    <div>
                      <h3 className="font-bold mb-1">E-mail</h3>
                      <p className="text-brand-gray">contato@fhsoftware.com.br</p>
                      <p className="text-brand-gray">suporte@fhsoftware.com.br</p>
                    </div>
                  </li>
                  
                  <li className="flex items-start hover-lift">
                    <div className="w-12 h-12 rounded-full bg-brand-dark flex items-center justify-center mr-4">
                      <i className="fas fa-clock text-brand-secondary"></i>
                    </div>
                    <div>
                      <h3 className="font-bold mb-1">Horário de Funcionamento</h3>
                      <p className="text-brand-gray">Segunda a Sexta: 9h às 18h</p>
                      <p className="text-brand-gray">Sábados e Domingos: Fechado</p>
                    </div>
                  </li>
                </ul>
              </div>
              
              {/* Redes Sociais */}
              <div className="bg-[#182b3e] rounded-xl shadow-lg p-8 mb-8 highlight-card">
                <h2 className="text-2xl font-bold mb-6">Siga-nos nas <span className="text-brand-primary">Redes Sociais</span></h2>
                <div className="flex space-x-4">
                  <a href="#" aria-label="LinkedIn" className="w-12 h-12 rounded-full bg-brand-dark flex items-center justify-center hover:bg-brand-secondary transition hover-grow">
                    <i className="fab fa-linkedin-in text-white"></i>
                  </a>
                  <a href="#" aria-label="Facebook" className="w-12 h-12 rounded-full bg-brand-dark flex items-center justify-center hover:bg-brand-secondary transition hover-grow">
                    <i className="fab fa-facebook-f text-white"></i>
                  </a>
                  <a href="#" aria-label="Instagram" className="w-12 h-12 rounded-full bg-brand-dark flex items-center justify-center hover:bg-brand-secondary transition hover-grow">
                    <i className="fab fa-instagram text-white"></i>
                  </a>
                  <a href="#" aria-label="Twitter" className="w-12 h-12 rounded-full bg-brand-dark flex items-center justify-center hover:bg-brand-secondary transition hover-grow">
                    <i className="fab fa-twitter text-white"></i>
                  </a>
                </div>
              </div>
              
              {/* Google Map */}
              <div className="bg-[#182b3e] rounded-xl shadow-lg overflow-hidden highlight-card">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.0976958805636!2d-46.65499492652817!3d-23.565421978766582!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce59c688dc15e9%3A0x7ce294b6e24d9868!2sAv.%20Paulista%2C%201000%20-%20Bela%20Vista%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2001310-100!5e0!3m2!1spt-BR!2sbr!4v1684274139858!5m2!1spt-BR!2sbr" 
                  className="w-full h-80" 
                  style={{border: 0}} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Localização do escritório da FH Software Solutions"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contato;
