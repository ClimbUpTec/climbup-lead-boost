
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface CTAButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary";
}

export const CTAButton = ({ children, className, onClick, variant = "primary" }: CTAButtonProps) => {
  const baseClasses = "text-lg font-bold px-8 py-4 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg";
  
  const variantClasses = {
    primary: "bg-climb-orange hover:bg-climb-orange-wheel text-white",
    secondary: "bg-climb-gunmetal hover:bg-climb-eerie text-white"
  };

  const handleClick = () => {
    if (onClick) {
      onClick();
    } else {
      const message = encodeURIComponent("Quero vender mais com campanhas no WhatsApp");
      const whatsappUrl = `https://wa.me/5551981985539?text=${message}`;
      window.open(whatsappUrl, '_blank');
    }
  };

  return (
    <Button 
      className={cn(baseClasses, variantClasses[variant], className)}
      onClick={handleClick}
    >
      {children}
    </Button>
  );
};
