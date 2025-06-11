
import { Section } from "./Section";

export const SolutionFlow = () => {
  return (
    <Section>
      <div className="text-center mb-12">
        <h2 className="font-open-sans text-4xl md:text-5xl font-bold text-climb-gunmetal mb-6">
          Agora veja a <span className="text-climb-orange">Climb Up</span> em ação
        </h2>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mb-12">
        {/* Card 1 */}
        <div className="bg-white p-6 rounded-lg shadow-lg text-center">
          <div className="w-16 h-16 mx-auto mb-4 bg-climb-orange rounded-full flex items-center justify-center">
            <img 
              src="/lovable-uploads/cc3eec4f-1f32-4460-bfa8-092576463d6d.png" 
              alt="Ads Icon" 
              className="w-10 h-10"
            />
          </div>
          <h3 className="font-inter text-xl font-bold text-climb-gunmetal mb-3">
            BASE INATIVA
          </h3>
          <p className="font-inter text-climb-eerie">
            Tráfego pago 1000 leads
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-white p-6 rounded-lg shadow-lg text-center">
          <div className="w-16 h-16 mx-auto mb-4 bg-climb-orange rounded-full flex items-center justify-center">
            <img 
              src="/lovable-uploads/fabe5300-6ee1-49fa-a124-8dafb2a80b55.png" 
              alt="Climb Up Icon" 
              className="w-10 h-10"
            />
          </div>
          <h3 className="font-inter text-xl font-bold text-climb-gunmetal mb-3">
            REIMPACTO CLIMB UP
          </h3>
          <p className="font-inter text-climb-eerie">
            Enviamos campanhas e ofertas direcionadas
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-white p-6 rounded-lg shadow-lg text-center">
          <div className="w-16 h-16 mx-auto mb-4 bg-climb-orange rounded-full flex items-center justify-center">
            <img 
              src="/lovable-uploads/6cdbb77a-b1f3-4c80-b6fb-096f2884c305.png" 
              alt="Money Icon" 
              className="w-10 h-10"
            />
          </div>
          <h3 className="font-inter text-xl font-bold text-climb-gunmetal mb-3">
            RESULTADO
          </h3>
          <p className="font-inter text-climb-eerie">
            Mais vendas com os mesmos leads
          </p>
        </div>
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
