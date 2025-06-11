
import { Section } from "./Section";
import { Users } from "lucide-react";

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
            <Users className="w-10 h-10 text-white" />
          </div>
          <h3 className="font-inter text-xl font-bold text-climb-gunmetal mb-3">
            BASE INATIVA = 1000 leads
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
              alt="WhatsApp Icon" 
              className="w-10 h-10"
            />
          </div>
          <h3 className="font-inter text-xl font-bold text-climb-gunmetal mb-3">
            CLIMB UP EM AÇÃO
          </h3>
          <p className="font-inter text-climb-eerie">
            Enviamos campanhas e ofertas direcionadas
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-white p-6 rounded-lg shadow-lg text-center">
          <div className="w-16 h-16 mx-auto mb-4 bg-climb-orange rounded-full flex items-center justify-center">
            <img 
              src="/lovable-uploads/ec47ee5f-c060-4bf4-be14-bcebbeed41e4.png" 
              alt="Climb Up Icon" 
              className="w-10 h-10"
            />
          </div>
          <h3 className="font-inter text-xl font-bold text-climb-gunmetal mb-3">
            R$ RESULTADO
          </h3>
          <p className="font-inter text-climb-eerie">
            +40 novas vendas
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
