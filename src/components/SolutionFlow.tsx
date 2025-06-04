
import { Section } from "./Section";

export const SolutionFlow = () => {
  return (
    <Section>
      <div className="text-center mb-12">
        <h2 className="font-open-sans text-4xl md:text-5xl font-bold text-climb-gunmetal mb-6">
          Agora veja a <span className="text-climb-orange">Climb Up</span> em ação
        </h2>
      </div>

      <div className="flex justify-center">
        <img 
          src="/lovable-uploads/fe192e99-97d3-4439-8303-49db8e821a61.png" 
          alt="Fluxo Climb Up em ação" 
          className="max-w-full h-auto"
        />
      </div>
    </Section>
  );
};
