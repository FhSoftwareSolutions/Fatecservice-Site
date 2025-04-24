import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import Logo from "../ui/logo";

interface NavbarProps {
  scrolled: boolean;
}

const Navbar = ({ scrolled }: NavbarProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [location] = useLocation();

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  // Close mobile menu on location change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-brand-darker shadow-xl" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="py-4 flex items-center justify-between">
          {/* Logo */}
          <Logo />
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <ul className="flex items-center space-x-8">
              <li>
                <Link 
                  href="/" 
                  className={`nav-link py-2 font-medium transition-colors duration-300 ${
                    location === "/" ? "text-brand-primary" : "text-white hover:text-brand-primary-light"
                  }`}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  href="/sobre" 
                  className={`nav-link py-2 font-medium transition-colors duration-300 ${
                    location === "/sobre" ? "text-brand-primary" : "text-white hover:text-brand-primary-light"
                  }`}
                >
                  Sobre
                </Link>
              </li>
              <li>
                <Link 
                  href="/servicos" 
                  className={`nav-link py-2 font-medium transition-colors duration-300 ${
                    location === "/servicos" ? "text-brand-primary" : "text-white hover:text-brand-primary-light"
                  }`}
                >
                  Serviços
                </Link>
              </li>
              <li>
                <Link 
                  href="/projetos" 
                  className={`nav-link py-2 font-medium transition-colors duration-300 ${
                    location === "/projetos" ? "text-brand-primary" : "text-white hover:text-brand-primary-light"
                  }`}
                >
                  Projetos
                </Link>
              </li>
              <li>
                <Link 
                  href="/noticias" 
                  className={`nav-link py-2 font-medium transition-colors duration-300 ${
                    location === "/noticias" ? "text-brand-primary" : "text-white hover:text-brand-primary-light"
                  }`}
                >
                  Notícias
                </Link>
              </li>
              <li>
                <Link 
                  href="/contato" 
                  className="ml-4 inline-flex items-center px-6 py-2.5 bg-brand-secondary text-white font-medium rounded-full shadow-lg shadow-brand-secondary/30 hover:bg-brand-secondary-light hover:shadow-brand-secondary/50 transition-all duration-300"
                >
                  Contato
                  <i className="fas fa-arrow-right ml-2"></i>
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              onClick={toggleMobileMenu}
              className="text-white p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-primary hover:bg-brand-darker transition-all duration-300"
              aria-label="Toggle mobile menu"
            >
              <i className={`fas ${mobileMenuOpen ? 'fa-times' : 'fa-bars'} text-xl`}></i>
            </button>
          </div>
        </nav>
        
        {/* Mobile Menu */}
        <div 
          className={`md:hidden ${mobileMenuOpen ? 'block' : 'hidden'} bg-gradient-to-b from-brand-dark to-brand-darker rounded-2xl shadow-xl p-5 mt-2 border border-gray-800 transition-all duration-300`}
        >
          <ul className="space-y-4">
            <li>
              <Link 
                href="/" 
                className={`block ${location === "/" ? "text-brand-primary" : "text-white hover:text-brand-primary"} hover:translate-x-1 transition-all duration-300 py-2 font-medium`}
              >
                Home
              </Link>
            </li>
            <li>
              <Link 
                href="/sobre" 
                className={`block ${location === "/sobre" ? "text-brand-primary" : "text-white hover:text-brand-primary"} hover:translate-x-1 transition-all duration-300 py-2 font-medium`}
              >
                Sobre
              </Link>
            </li>
            <li>
              <Link 
                href="/servicos" 
                className={`block ${location === "/servicos" ? "text-brand-primary" : "text-white hover:text-brand-primary"} hover:translate-x-1 transition-all duration-300 py-2 font-medium`}
              >
                Serviços
              </Link>
            </li>
            <li>
              <Link 
                href="/projetos" 
                className={`block ${location === "/projetos" ? "text-brand-primary" : "text-white hover:text-brand-primary"} hover:translate-x-1 transition-all duration-300 py-2 font-medium`}
              >
                Projetos
              </Link>
            </li>
            <li>
              <Link 
                href="/noticias" 
                className={`block ${location === "/noticias" ? "text-brand-primary" : "text-white hover:text-brand-primary"} hover:translate-x-1 transition-all duration-300 py-2 font-medium`}
              >
                Notícias
              </Link>
            </li>
            <li className="pt-2">
              <Link 
                href="/contato" 
                className="block w-full text-center px-6 py-3 bg-brand-secondary text-white font-medium rounded-full shadow-lg shadow-brand-secondary/30 hover:bg-brand-secondary-light hover:shadow-brand-secondary/50 transition-all duration-300"
              >
                Contato <i className="fas fa-arrow-right ml-2"></i>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
