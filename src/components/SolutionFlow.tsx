
import { Section } from "./Section";
import { ArrowRight } from "lucide-react";

export const SolutionFlow = () => {
  return (
    <Section>
      <div className="text-center mb-12">
        <h2 className="font-satoshi text-4xl md:text-5xl font-bold text-climb-gunmetal mb-6">
          Agora veja a <span className="text-climb-orange">Climb Up</span> em ação
        </h2>
      </div>

      <div className="flex flex-col lg:flex-row items-center justify-between max-w-5xl mx-auto gap-8">
        {/* Etapa 1 */}
        <div className="bg-climb-gunmetal p-8 rounded-lg shadow-lg flex-1">
          <div className="flex items-center justify-center mb-4">
            <img 
              src="/lovable-uploads/5a03da4f-477e-45fa-8c7b-0dff221bcc4d.png" 
              alt="ADS Icon" 
              className="w-16 h-16"
            />
          </div>
          <h3 className="font-satoshi font-bold text-xl text-white text-center mb-4">
            Canais de aquisição
          </h3>
          <div className="text-center text-white">
            <div className="text-lg font-bold mb-2">Base gerada: 100 Leads</div>
            <div className="text-sm">↳ 10 Vendas</div>
            <div className="text-red-300 text-sm">↳ 90 Vendas perdidas (Leads abandonados)</div>
          </div>
        </div>

        {/* Seta */}
        <ArrowRight className="w-8 h-8 text-climb-orange hidden lg:block" />
        <div className="lg:hidden w-full h-px bg-climb-orange"></div>

        {/* Etapa 2 */}
        <div className="bg-white border-2 border-climb-platinum p-8 rounded-lg shadow-lg flex-1">
          <div className="flex items-center justify-center mb-4">
            <img 
              src="/lovable-uploads/4bdafa93-f59e-4049-8483-781d4d494b1d.png" 
              alt="Climb Up Logo" 
              className="w-12 h-12"
            />
          </div>
          <h3 className="font-satoshi font-bold text-xl text-climb-gunmetal text-center mb-4">
            Climb Up em ação
          </h3>
          <div className="text-center text-climb-gunmetal">
            <div className="text-sm mb-2">
              <strong>Remarketing inteligente para base</strong>
            </div>
            <div className="text-sm">
              Impacte centenas de leads através de campanhas no <strong>WhatsApp</strong>
            </div>
          </div>
        </div>

        {/* Seta */}
        <ArrowRight className="w-8 h-8 text-climb-orange hidden lg:block" />
        <div className="lg:hidden w-full h-px bg-climb-orange"></div>

        {/* Etapa 3 */}
        <div className="bg-climb-gunmetal p-8 rounded-lg shadow-lg flex-1">
          <div className="flex items-center justify-center mb-4">
            <img 
              src="/lovable-uploads/22e1c39b-e5be-4d91-8c50-169634ca9cb9.png" 
              alt="Success Icon" 
              className="w-12 h-12 invert"
            />
          </div>
          <h3 className="font-satoshi font-bold text-xl text-climb-orange text-center mb-4">
            Resultado R$
          </h3>
          <div className="text-center">
            <div className="text-2xl font-bold text-climb-orange mb-2">+30 novas vendas</div>
          </div>
        </div>
      </div>
    </Section>
  );
};
