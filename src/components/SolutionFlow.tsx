
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
            <div className="bg-black text-white px-4 py-2 rounded-lg flex items-center">
              <span className="text-lg font-bold mr-2">ADS</span>
              <div className="w-6 h-6 border-2 border-white rounded-full flex items-center justify-center">
                <div className="w-2 h-2 bg-white rounded-full"></div>
              </div>
            </div>
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
          <div className="w-12 h-12 mb-4 mx-auto bg-climb-orange rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-lg">C</span>
          </div>
          <h3 className="font-satoshi font-bold text-xl text-climb-gunmetal text-center mb-4">
            Climb Up em ação
          </h3>
          <div className="text-center text-climb-gunmetal">
            <div className="text-sm mb-2">
              <strong>Remarketing</strong> para a mesma base com campanhas automáticas no <strong>WhatsApp</strong>
            </div>
          </div>
        </div>

        {/* Seta */}
        <ArrowRight className="w-8 h-8 text-climb-orange hidden lg:block" />
        <div className="lg:hidden w-full h-px bg-climb-orange"></div>

        {/* Etapa 3 */}
        <div className="bg-climb-gunmetal p-8 rounded-lg shadow-lg flex-1">
          <div className="flex items-center justify-center mb-4">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
              <span className="text-climb-gunmetal text-2xl font-bold">$</span>
            </div>
          </div>
          <h3 className="font-satoshi font-bold text-xl text-white text-center mb-4">
            Resultado R$
          </h3>
          <div className="text-center">
            <div className="text-2xl font-bold text-white mb-2">+30 novas vendas</div>
          </div>
        </div>
      </div>
    </Section>
  );
};
