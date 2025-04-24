import { Link } from "wouter";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: string;
  image: string;
  features: string[];
  color: "blue" | "gold";
}

const ServiceCard = ({
  title,
  description,
  icon,
  image,
  features,
  color
}: ServiceCardProps) => {
  const isBlue = color === "blue";
  
  return (
    <div className="group highlight-card rounded-2xl overflow-hidden bg-gradient-to-br from-brand-darker to-[#182b3e] border border-gray-800 shadow-xl transition-all duration-300 hover:border-brand-secondary/30">
      {/* Service image */}
      <div className="relative h-56 overflow-hidden">
        <img 
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-darker to-transparent opacity-90"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className={`p-3 rounded-full ${
            isBlue 
              ? "bg-brand-secondary/20 backdrop-blur-lg border border-brand-secondary/30 shadow-glow-blue" 
              : "bg-brand-primary/20 backdrop-blur-lg border border-brand-primary/30 shadow-glow-gold"
          }`}>
            <i className={`fas ${icon} text-2xl text-white`}></i>
          </div>
        </div>
      </div>
      
      {/* Service content */}
      <div className="p-8">
        <h3 className={`text-xl font-semibold mb-4 text-white group-hover:${
          isBlue ? "text-brand-secondary" : "text-brand-primary"
        } transition-colors duration-300`}>
          {title}
        </h3>
        <p className="text-brand-gray mb-6">
          {description}
        </p>
        
        {/* Features list */}
        <ul className="space-y-2 mb-8">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start space-x-2">
              <span className={isBlue ? "text-brand-secondary mt-1" : "text-brand-primary mt-1"}>
                <i className="fas fa-check"></i>
              </span>
              <span className="text-brand-gray group-hover:text-white transition-colors duration-300">
                {feature}
              </span>
            </li>
          ))}
        </ul>
        
        <Link 
          href="/servicos" 
          className={`inline-block w-full py-3 px-6 text-center font-medium ${
            isBlue 
              ? "bg-brand-secondary text-white shadow-brand-secondary/20 hover:shadow-brand-secondary/40 hover:bg-brand-secondary-light" 
              : "bg-brand-primary text-brand-dark shadow-brand-primary/20 hover:shadow-brand-primary/40 hover:bg-brand-primary-light"
          } rounded-full shadow-lg transition-all duration-300`}
        >
          Saiba mais
          <i className="fas fa-arrow-right ml-2"></i>
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;
