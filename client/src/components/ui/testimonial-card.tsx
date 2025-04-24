import { getStarsArray } from "@/lib/utils";

interface TestimonialCardProps {
  company: string;
  author: string;
  content: string;
  rating: number;
}

const TestimonialCard = ({
  company,
  author,
  content,
  rating
}: TestimonialCardProps) => {
  const stars = getStarsArray(rating);
  
  return (
    <div className="highlight-card group p-8 rounded-2xl transition-all duration-500 bg-gradient-to-br from-brand-darker to-[#182b3e] border border-gray-800 hover:border-brand-secondary/30 shadow-xl">
      {/* Testimonial header */}
      <div className="flex items-start mb-6">
        <div className="text-brand-primary text-4xl mr-4 group-hover:scale-110 transition-transform duration-300">
          <i className="fas fa-quote-left"></i>
        </div>
        <div className="flex-1">
          <div className="text-brand-secondary font-semibold mb-1 group-hover:text-brand-primary transition-colors duration-300">
            {company}
          </div>
          <div className="text-sm text-brand-gray">
            {author}
          </div>
        </div>
      </div>
      
      {/* Testimonial content */}
      <p className="text-brand-gray mb-6 group-hover:text-white transition-colors duration-300">
        {content}
      </p>
      
      {/* Rating */}
      <div className="flex text-brand-primary space-x-1">
        {stars.map((star, i) => (
          <i 
            key={`star-${i}`} 
            className={
              star.type === 'full' ? 'fas fa-star' :
              star.type === 'half' ? 'fas fa-star-half-alt' :
              'far fa-star'
            }
          ></i>
        ))}
      </div>
    </div>
  );
};

export default TestimonialCard;
