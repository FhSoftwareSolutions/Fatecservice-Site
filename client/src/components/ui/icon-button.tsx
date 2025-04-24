import { cn } from "@/lib/utils";

interface IconButtonProps {
  icon: string;
  text: string;
  variant?: "primary" | "secondary" | "outline";
  href?: string;
  onClick?: () => void;
  className?: string;
  iconPosition?: "left" | "right";
}

const IconButton = ({
  icon,
  text,
  variant = "primary",
  href,
  onClick,
  className,
  iconPosition = "right"
}: IconButtonProps) => {
  const buttonClasses = cn(
    "inline-flex items-center justify-center px-8 py-4 font-semibold rounded-full transition-all duration-300 text-center group",
    {
      "bg-brand-primary text-brand-dark shadow-lg shadow-brand-primary/30 hover:bg-brand-primary-light hover:shadow-brand-primary/50": variant === "primary",
      "bg-brand-secondary text-white shadow-lg shadow-brand-secondary/30 hover:bg-brand-secondary-light hover:shadow-brand-secondary/50": variant === "secondary",
      "bg-transparent border-2 border-white text-white hover:bg-white/10 hover:border-brand-secondary": variant === "outline"
    },
    className
  );

  const content = (
    <>
      {iconPosition === "left" && <i className={`fas ${icon} mr-2 group-hover:translate-x-0 transition-transform duration-300`}></i>}
      <span>{text}</span>
      {iconPosition === "right" && <i className={`fas ${icon} ml-2 group-hover:translate-x-1 transition-transform duration-300`}></i>}
    </>
  );

  if (href) {
    return (
      <a href={href} className={buttonClasses}>
        {content}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={buttonClasses}>
      {content}
    </button>
  );
};

export default IconButton;
