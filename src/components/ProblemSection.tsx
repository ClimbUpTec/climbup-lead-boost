
import { Section } from "./Section";
import { CTAButton } from "./CTAButton";
import { ArrowRight, Target, Zap, DollarSign } from "lucide-react";

export const ProblemSection = () => {
  return (
    <Section>
      <div className="text-center mb-12">
        <h2 className="font-satoshi text-4xl md:text-5xl font-bold text-climb-gunmetal mb-6">
          O <span className="text-climb-orange">Método Climb Up</span> em 3 etapas
        </h2>
        <p className="font-inter text-xl text-climb-eerie max-w-3xl mx-auto">
          Transforme leads perdidos em vendas reais com nosso método comprovado
        </p>
      </div>

      <div className="flex flex-col lg:flex-row items-center justify-center gap-8 mb-12">
        {/* Card 1 - Canais de aquisição */}
        <div className="bg-white p-8 rounded-lg shadow-lg border-l-4 border-climb-orange max-w-sm">
          <Target className="w-12 h-12 text-climb-orange mb-6 mx-auto" />
          <h3 className="font-satoshi font-bold text-2xl text-climb-gunmetal text-center mb-4">
            Canais de aquisição
          </h3>
          <div className="text-center space-y-2">
            <p className="font-inter text-climb-eerie">Base gerada: <strong>100 leads</strong></p>
            <p className="font-inter text-climb-eerie"><strong>10 Vendas</strong></p>
            <p className="font-inter text-red-600 font-semibold"><strong>90 Vendas perdidas</strong></p>
          </div>
        </div>

        {/* Seta 1 */}
        <div className="hidden lg:block">
          <ArrowRight className="w-8 h-8 text-climb-orange" />
        </div>
        <div className="lg:hidden">
          <ArrowRight className="w-8 h-8 text-climb-orange rotate-90" />
        </div>

        {/* Card 2 - Climb Up em ação */}
        <div className="bg-white p-8 rounded-lg shadow-lg border-l-4 border-climb-orange max-w-sm">
          <Zap className="w-12 h-12 text-climb-orange mb-6 mx-auto" />
          <h3 className="font-satoshi font-bold text-2xl text-climb-gunmetal text-center mb-4">
            Climb Up em ação
          </h3>
          <div className="text-center">
            <p className="font-inter text-climb-eerie">
              Remarketing para a base gerada com campanhas automáticas no WhatsApp
            </p>
          </div>
        </div>

        {/* Seta 2 */}
        <div className="hidden lg:block">
          <ArrowRight className="w-8 h-8 text-climb-orange" />
        </div>
        <div className="lg:hidden">
          <ArrowRight className="w-8 h-8 text-climb-orange rotate-90" />
        </div>

        {/* Card 3 - Resultado R$ */}
        <div className="bg-white p-8 rounded-lg shadow-lg border-l-4 border-green-500 max-w-sm">
          <DollarSign className="w-12 h-12 text-green-500 mb-6 mx-auto" />
          <h3 className="font-satoshi font-bold text-2xl text-climb-gunmetal text-center mb-4">
            Resultado R$
          </h3>
          <div className="text-center">
            <p className="font-inter text-green-600 font-bold text-xl">
              + 30 novas vendas
            </p>
          </div>
        </div>
      </div>

      <div className="text-center">
        <CTAButton>
          QUERO ESSE MÉTODO
        </CTAButton>
      </div>
    </Section>
  );
};
