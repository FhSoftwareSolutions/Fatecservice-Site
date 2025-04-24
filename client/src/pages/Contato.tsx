import { useState } from "react";

const Contato = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    message: '',
    terms: false
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormData({
      ...formData,
      [name]: checked
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log("Form submitted:", formData);
    alert("Mensagem enviada com sucesso! Entraremos em contato em breve.");
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      projectType: '',
      message: '',
      terms: false
    });
  };

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
            {/* Formulário de Contato */}
            <div className="bg-[#182b3e] rounded-xl shadow-lg p-8 highlight-card">
              <h2 className="text-2xl font-bold mb-6">Envie sua <span className="text-brand-primary">mensagem</span></h2>
              <p className="text-brand-gray mb-8">Preencha o formulário abaixo e nossa equipe entrará em contato o mais breve possível.</p>
              
              <form id="contact-form" className="space-y-6" onSubmit={handleSubmit}>
                {/* Nome */}
                <div>
                  <label htmlFor="name" className="block text-white mb-2">Nome completo *</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    required 
                    className="w-full py-3 px-4 bg-brand-dark text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-secondary" 
                    placeholder="Seu nome completo"
                    value={formData.name}
                    onChange={handleChange}
                  />
                </div>
                
                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-white mb-2">E-mail *</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    required 
                    className="w-full py-3 px-4 bg-brand-dark text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-secondary" 
                    placeholder="Seu e-mail"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
                
                {/* Telefone */}
                <div>
                  <label htmlFor="phone" className="block text-white mb-2">Telefone</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    name="phone" 
                    className="w-full py-3 px-4 bg-brand-dark text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-secondary" 
                    placeholder="(XX) XXXXX-XXXX"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                </div>
                
                {/* Tipo de Projeto */}
                <div>
                  <label htmlFor="projectType" className="block text-white mb-2">Tipo de projeto *</label>
                  <select 
                    id="projectType" 
                    name="projectType" 
                    required 
                    className="w-full py-3 px-4 bg-brand-dark text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-secondary"
                    value={formData.projectType}
                    onChange={handleChange}
                  >
                    <option value="" disabled>Selecione uma opção</option>
                    <option value="web">Desenvolvimento Web</option>
                    <option value="mobile">Desenvolvimento Mobile</option>
                    <option value="api">Integrações e APIs</option>
                    <option value="consulting">Consultoria em TI</option>
                    <option value="other">Outro</option>
                  </select>
                </div>
                
                {/* Mensagem */}
                <div>
                  <label htmlFor="message" className="block text-white mb-2">Mensagem *</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    required 
                    rows={5} 
                    className="w-full py-3 px-4 bg-brand-dark text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-secondary" 
                    placeholder="Descreva seu projeto ou dúvida"
                    value={formData.message}
                    onChange={handleChange}
                  ></textarea>
                </div>
                
                {/* Termos e condições */}
                <div className="flex items-start">
                  <input 
                    type="checkbox" 
                    id="terms" 
                    name="terms" 
                    required 
                    className="mt-1 mr-3"
                    checked={formData.terms}
                    onChange={handleCheckboxChange}
                  />
                  <label htmlFor="terms" className="text-brand-gray text-sm">
                    Concordo com a <a href="#" className="text-brand-secondary hover:text-brand-primary transition">Política de Privacidade</a> e autorizo o contato da FH Software Solutions *
                  </label>
                </div>
                
                {/* Botão de envio */}
                <div>
                  <button 
                    type="submit" 
                    className="w-full bg-brand-primary text-brand-dark font-bold py-3 px-6 rounded-lg hover:bg-brand-primary-light transition btn-animate relative"
                  >
                    <span className="relative z-10">Enviar Mensagem</span>
                  </button>
                </div>
                
                <p className="text-brand-gray text-sm">* Campos obrigatórios</p>
              </form>
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
