
import { cn } from "@/lib/utils";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  background?: "white" | "light" | "dark";
}

export const Section = ({ children, className, background = "white" }: SectionProps) => {
  const backgroundClasses = {
    white: "bg-climb-white",
    light: "bg-climb-platinum",
    dark: "bg-climb-gunmetal"
  };

  return (
    <section className={cn("py-16 px-4", backgroundClasses[background], className)}>
      <div className="max-w-6xl mx-auto">
        {children}
      </div>
    </section>
  );
};
