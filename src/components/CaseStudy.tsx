
import { Section } from "./Section";
import { CTAButton } from "./CTAButton";
import { TrendingUp } from "lucide-react";

export const CaseStudy = () => {
  return (
    <Section background="dark">
      <div className="text-center">
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-3xl mx-auto">
          <TrendingUp className="w-16 h-16 text-climb-orange mb-6 mx-auto" />
          <h2 className="font-satoshi text-3xl font-bold text-climb-gunmetal mb-6">
            Resultados imediatos
          </h2>
          <p className="font-open-sans text-xl text-climb-eerie mb-8">
            📈 <strong>O Felipe da Comfy Pizza Napoletana</strong> foi de{" "}
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
