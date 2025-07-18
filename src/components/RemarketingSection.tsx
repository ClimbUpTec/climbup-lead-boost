
import { Section } from "./Section";
import { CTAButton } from "./CTAButton";
import { RefreshCcw, TrendingDown, Zap } from "lucide-react";

export const RemarketingSection = () => {
  return (
    <Section>
      <div className="text-center mb-12">
        <h2 className="font-satoshi text-4xl md:text-5xl font-bold text-climb-gunmetal mb-8">
          Vendendo mais com <span className="text-climb-orange">REMARKETING</span> através do WhatsApp API
        </h2>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mb-12">
        {/* Card 1 - O ciclo que trava */}
        <div className="bg-white p-8 rounded-lg shadow-lg border-l-4 border-red-500">
          <TrendingDown className="w-12 h-12 text-red-500 mb-6 mx-auto" />
          <h3 className="font-satoshi font-bold text-xl text-climb-gunmetal text-center mb-4">
            1. O ciclo que trava seu crescimento
          </h3>
          <div className="space-y-3">
            <p className="font-open-sans text-climb-eerie">
              • O cliente vai na sua loja 1x e nunca mais volta
            </p>
            <p className="font-open-sans text-climb-eerie">
              • Você investe, gera leads e fala com eles 1 ou 2 vezes...
            </p>
            <p className="font-open-sans text-climb-eerie">
              • Alguns compram, outros não, essa base é esquecida.
            </p>
            <p className="font-open-sans text-red-600 font-semibold">
              📉 Sem automação, isso vira venda perdida.
            </p>
          </div>
        </div>

        {/* Card 2 - Como a Climb Up muda */}
        <div className="bg-white p-8 rounded-lg shadow-lg border-l-4 border-climb-orange">
          <Zap className="w-12 h-12 text-climb-orange mb-6 mx-auto" />
          <h3 className="font-satoshi font-bold text-xl text-climb-gunmetal text-center mb-4">
            2. Como a Climb Up muda o jogo
          </h3>
          <div className="space-y-3">
            <p className="font-open-sans text-climb-eerie">
              • Reativa toda a base no WhatsApp
            </p>
            <p className="font-open-sans text-climb-eerie">
              • Recupera leads inativos
            </p>
            <p className="font-open-sans text-climb-eerie">
              • Estimula recompra de clientes
            </p>
            <p className="font-open-sans text-climb-eerie">
              • Supervisiona vendedores e equipes
            </p>
            <p className="font-open-sans text-climb-eerie">
              • Automatiza processos
            </p>
            <p className="font-open-sans text-climb-orange font-semibold">
              ⚙️ Sem esforço extra do seu time
            </p>
          </div>
        </div>

        {/* Card 3 - O impacto real */}
        <div className="bg-white p-8 rounded-lg shadow-lg border-l-4 border-green-500">
          <RefreshCcw className="w-12 h-12 text-green-500 mb-6 mx-auto" />
          <h3 className="font-satoshi font-bold text-xl text-climb-gunmetal text-center mb-4">
            3. O impacto real
          </h3>
          <div className="space-y-3">
            <p className="font-open-sans text-climb-eerie">
              • Leads esquecidos viram clientes
            </p>
            <p className="font-open-sans text-climb-eerie">
              • Clientes pontuais viram compradores fiéis
            </p>
            <p className="font-open-sans text-climb-eerie">
              • Equipe focada e organizada
            </p>
            <p className="font-open-sans text-climb-eerie">
              • Vendas no automático
            </p>
            <p className="font-open-sans text-green-600 font-semibold">
              💰 200% mais vendas com a mesma base em menos de 30 dias
            </p>
          </div>
        </div>
      </div>

      <div className="text-center">
        <CTAButton message="Quero vender no WhatsApp">
          QUERO VENDER NO WHATSAPP
        </CTAButton>
      </div>
    </Section>
  );
};
