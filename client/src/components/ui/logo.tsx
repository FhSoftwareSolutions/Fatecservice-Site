import { Link } from "wouter";

const Logo = () => {
  return (
    <div className="flex-shrink-0">
      <Link 
        href="/" 
        className="flex items-center gap-1 group transition-all duration-300"
      >
        <span className="text-brand-primary font-bold text-2xl md:text-3xl">FH</span>
        <span className="text-brand-secondary font-bold text-2xl md:text-3xl">Software</span>
        <span className="text-white font-bold text-2xl md:text-3xl group-hover:text-brand-primary transition-colors duration-300">Solutions</span>
      </Link>
    </div>
  );
};

export default Logo;
