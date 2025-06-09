
import { Section } from "./Section";
import { CTAButton } from "./CTAButton";
import { TrendingUp } from "lucide-react";

export const CaseStudy = () => {
  return (
    <Section className="bg-climb-orange">
      <div className="text-center">
        <div className="max-w-3xl mx-auto">
          <TrendingUp className="w-16 h-16 text-white mb-6 mx-auto" />
          <h2 className="font-inter text-3xl font-bold text-white mb-6">
            Resultados reais e imediatos
          </h2>
          <div className="flex items-center justify-center mb-6 relative">
            {/* Mockup redondo com foto do proprietário */}
            <div className="relative">
              <div className="w-64 h-64 rounded-full bg-white p-4 shadow-2xl border-4 border-white">
                <img 
                  src="/lovable-uploads/26e07aac-a641-4d44-a226-04be9fedd06e.png" 
                  alt="Proprietário da Comfy Pizza Napoletana" 
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              {/* Logo da empresa no canto */}
              <div className="absolute -bottom-2 -right-2 w-16 h-16 bg-white rounded-full p-2 shadow-lg border-2 border-white">
                <img 
                  src="/lovable-uploads/3b13e5a8-924f-433a-9022-9303247a6b91.png" 
                  alt="Comfy Pizza Napoletana Logo" 
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>
          <p className="font-inter text-xl text-white mb-8">
            A <strong>Comfy Pizza Napoletana</strong> foi de{" "}
            <span className="text-white font-bold underline">R$40 mil para R$90 mil/mês</span>{" "}
            em menos de 3 meses com esse método.
          </p>
          <CTAButton variant="secondary" className="bg-white hover:bg-gray-100 text-climb-orange">
            QUERO VENDER MAIS
          </CTAButton>
        </div>
      </div>
    </Section>
  );
};
