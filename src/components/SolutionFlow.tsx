
import { Section } from "./Section";
import { ArrowRight, Users, Zap, DollarSign } from "lucide-react";

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
        <div className="bg-white p-8 rounded-lg shadow-lg border-l-4 border-climb-gunmetal flex-1">
          <Users className="w-12 h-12 text-climb-gunmetal mb-4 mx-auto" />
          <h3 className="font-satoshi font-bold text-xl text-climb-gunmetal text-center mb-4">
            Canais de aquisição
          </h3>
          <div className="text-center">
            <div className="text-3xl font-bold text-climb-gunmetal mb-2">100 leads</div>
            <div className="text-climb-orange font-bold">• 10 Vendas</div>
            <div className="text-red-500">• 90 Vendas perdidas</div>
            <div className="text-sm text-climb-eerie">(leads esquecidos)</div>
          </div>
        </div>

        {/* Seta */}
        <ArrowRight className="w-8 h-8 text-climb-orange hidden lg:block" />
        <div className="lg:hidden w-full h-px bg-climb-orange"></div>

        {/* Etapa 2 */}
        <div className="bg-climb-orange p-8 rounded-lg shadow-lg flex-1">
          <Zap className="w-12 h-12 text-white mb-4 mx-auto" />
          <h3 className="font-satoshi font-bold text-xl text-white text-center mb-4">
            Climb Up em ação
          </h3>
          <div className="text-center text-white">
            <div className="font-bold mb-2">Remarketing para a mesma base</div>
            <div className="font-bold">Campanhas automáticas no WhatsApp</div>
          </div>
        </div>

        {/* Seta */}
        <ArrowRight className="w-8 h-8 text-climb-orange hidden lg:block" />
        <div className="lg:hidden w-full h-px bg-climb-orange"></div>

        {/* Etapa 3 */}
        <div className="bg-white p-8 rounded-lg shadow-lg border-l-4 border-climb-orange flex-1">
          <DollarSign className="w-12 h-12 text-climb-orange mb-4 mx-auto" />
          <h3 className="font-satoshi font-bold text-xl text-climb-gunmetal text-center mb-4">
            Resultado R$
          </h3>
          <div className="text-center">
            <div className="text-3xl font-bold text-climb-orange mb-2">+30 novas vendas</div>
            <div className="text-sm text-climb-eerie">
              Leads recuperados + recompra de clientes ativos
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};
