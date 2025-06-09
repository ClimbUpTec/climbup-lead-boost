
import { Section } from "./Section";
import { CTAButton } from "./CTAButton";
import { TrendingUp } from "lucide-react";

export const CaseStudy = () => {
  return (
    <Section className="bg-climb-orange">
      <div className="text-center">
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-3xl mx-auto">
          <TrendingUp className="w-16 h-16 text-climb-orange mb-6 mx-auto" />
          <h2 className="font-inter text-3xl font-bold text-climb-gunmetal mb-6">
            Resultados reais e imediatos
          </h2>
          <div className="flex items-center justify-center mb-6">
            <img 
              src="/lovable-uploads/73afbd0d-90b0-4b2f-8db5-030b81ce577d.png" 
              alt="Comfy Pizza Napoletana Logo" 
              className="w-32 h-32 object-contain"
            />
          </div>
          <p className="font-inter text-xl text-climb-eerie mb-8">
            A <strong>Comfy Pizza Napoletana</strong> foi de{" "}
            <span className="text-climb-orange font-bold">R$40 mil para R$90 mil/mês</span>{" "}
            em menos de 3 meses com esse método.
          </p>
          <CTAButton>
            QUERO VENDER MAIS
          </CTAButton>
        </div>
      </div>
    </Section>
  );
};
