import { Link } from "wouter";
import Logo from "../ui/logo";
import { useState } from "react";

const Footer = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Newsletter subscription logic would go here
    setEmail("");
    alert("Inscrição realizada com sucesso!");
  };

  return (
    <footer className="bg-brand-darker pt-20 pb-10 border-t border-gray-800/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <div className="mb-6">
              <Logo />
            </div>
            
            <p className="text-brand-gray mb-8 font-inter">
              Desenvolvendo soluções digitais personalizadas que impulsionam o seu negócio com qualidade e inovação.
            </p>
            
            <div className="flex space-x-4">
              <a 
                href="#" 
                aria-label="Facebook" 
                className="w-10 h-10 rounded-full flex items-center justify-center bg-brand-dark hover:bg-brand-secondary text-white transition-all duration-300"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <a 
                href="#" 
                aria-label="Instagram" 
                className="w-10 h-10 rounded-full flex items-center justify-center bg-brand-dark hover:bg-brand-secondary text-white transition-all duration-300"
              >
                <i className="fab fa-instagram"></i>
              </a>
              <a 
                href="#" 
                aria-label="LinkedIn" 
                className="w-10 h-10 rounded-full flex items-center justify-center bg-brand-dark hover:bg-brand-secondary text-white transition-all duration-300"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a 
                href="#" 
                aria-label="Twitter" 
                className="w-10 h-10 rounded-full flex items-center justify-center bg-brand-dark hover:bg-brand-secondary text-white transition-all duration-300"
              >
                <i className="fab fa-twitter"></i>
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Links Rápidos</h3>
            <ul className="space-y-3">
              <li>
                <Link 
                  href="/" 
                  className="text-brand-gray hover:text-brand-primary inline-flex items-center group"
                >
                  <i className="fas fa-chevron-right text-xs mr-2 text-brand-secondary group-hover:translate-x-1 transition-transform duration-300"></i>
                  <span>Home</span>
                </Link>
              </li>
              <li>
                <Link 
                  href="/sobre" 
                  className="text-brand-gray hover:text-brand-primary inline-flex items-center group"
                >
                  <i className="fas fa-chevron-right text-xs mr-2 text-brand-secondary group-hover:translate-x-1 transition-transform duration-300"></i>
                  <span>Sobre</span>
                </Link>
              </li>
              <li>
                <Link 
                  href="/servicos" 
                  className="text-brand-gray hover:text-brand-primary inline-flex items-center group"
                >
                  <i className="fas fa-chevron-right text-xs mr-2 text-brand-secondary group-hover:translate-x-1 transition-transform duration-300"></i>
                  <span>Serviços</span>
                </Link>
              </li>
              <li>
                <Link 
                  href="/projetos" 
                  className="text-brand-gray hover:text-brand-primary inline-flex items-center group"
                >
                  <i className="fas fa-chevron-right text-xs mr-2 text-brand-secondary group-hover:translate-x-1 transition-transform duration-300"></i>
                  <span>Projetos</span>
                </Link>
              </li>
              <li>
                <Link 
                  href="/noticias" 
                  className="text-brand-gray hover:text-brand-primary inline-flex items-center group"
                >
                  <i className="fas fa-chevron-right text-xs mr-2 text-brand-secondary group-hover:translate-x-1 transition-transform duration-300"></i>
                  <span>Notícias</span>
                </Link>
              </li>
              <li>
                <Link 
                  href="/contato" 
                  className="text-brand-gray hover:text-brand-primary inline-flex items-center group"
                >
                  <i className="fas fa-chevron-right text-xs mr-2 text-brand-secondary group-hover:translate-x-1 transition-transform duration-300"></i>
                  <span>Contato</span>
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Nossos Serviços</h3>
            <ul className="space-y-3">
              <li>
                <Link 
                  href="/servicos" 
                  className="text-brand-gray hover:text-brand-primary inline-flex items-center group"
                >
                  <i className="fas fa-chevron-right text-xs mr-2 text-brand-secondary group-hover:translate-x-1 transition-transform duration-300"></i>
                  <span>Desenvolvimento Web</span>
                </Link>
              </li>
              <li>
                <Link 
                  href="/servicos" 
                  className="text-brand-gray hover:text-brand-primary inline-flex items-center group"
                >
                  <i className="fas fa-chevron-right text-xs mr-2 text-brand-secondary group-hover:translate-x-1 transition-transform duration-300"></i>
                  <span>Desenvolvimento Mobile</span>
                </Link>
              </li>
              <li>
                <Link 
                  href="/servicos" 
                  className="text-brand-gray hover:text-brand-primary inline-flex items-center group"
                >
                  <i className="fas fa-chevron-right text-xs mr-2 text-brand-secondary group-hover:translate-x-1 transition-transform duration-300"></i>
                  <span>Integrações e APIs</span>
                </Link>
              </li>
              <li>
                <Link 
                  href="/servicos" 
                  className="text-brand-gray hover:text-brand-primary inline-flex items-center group"
                >
                  <i className="fas fa-chevron-right text-xs mr-2 text-brand-secondary group-hover:translate-x-1 transition-transform duration-300"></i>
                  <span>Consultoria em TI</span>
                </Link>
              </li>
              <li>
                <Link 
                  href="/servicos" 
                  className="text-brand-gray hover:text-brand-primary inline-flex items-center group"
                >
                  <i className="fas fa-chevron-right text-xs mr-2 text-brand-secondary group-hover:translate-x-1 transition-transform duration-300"></i>
                  <span>UX/UI Design</span>
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Informações de Contato</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="mt-1 mr-3 text-brand-secondary">
                  <i className="fas fa-map-marker-alt"></i>
                </div>
                <span className="text-brand-gray">
                  Av. Paulista, 1000, 15º andar<br />
                  Bela Vista, São Paulo/SP
                </span>
              </li>
              <li className="flex items-start">
                <div className="mt-1 mr-3 text-brand-secondary">
                  <i className="fas fa-phone-alt"></i>
                </div>
                <span className="text-brand-gray">
                  (11) 3000-4000<br />
                  (11) 98765-4321 (WhatsApp)
                </span>
              </li>
              <li className="flex items-start">
                <div className="mt-1 mr-3 text-brand-secondary">
                  <i className="fas fa-envelope"></i>
                </div>
                <span className="text-brand-gray">
                  contato@fhsoftware.com.br<br />
                  suporte@fhsoftware.com.br
                </span>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Newsletter */}
        <div className="border-t border-gray-800/50 pt-10 pb-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-lg font-semibold mb-2">Assine nossa Newsletter</h3>
              <p className="text-brand-gray">Receba novidades, dicas e ofertas exclusivas diretamente no seu email.</p>
            </div>
            <div>
              <form className="flex flex-col sm:flex-row gap-3" onSubmit={handleSubmit}>
                <input 
                  type="email" 
                  placeholder="Seu e-mail" 
                  className="flex-1 px-4 py-3 bg-brand-dark text-white rounded-full focus:outline-none focus:ring-2 focus:ring-brand-secondary border border-gray-700"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <button 
                  type="submit" 
                  className="px-6 py-3 bg-brand-secondary text-white font-medium rounded-full hover:bg-brand-secondary-light transition-colors duration-300"
                >
                  Inscrever-se
                </button>
              </form>
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-gray-800/50 pt-8 text-center text-brand-gray text-sm">
          <p>&copy; {new Date().getFullYear()} FH Software Solutions. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
