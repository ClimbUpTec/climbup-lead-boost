
import { Section } from "./Section";
import { CTAButton } from "./CTAButton";
import { TrendingDown, TrendingUp, Users, MousePointer, MessageSquare } from "lucide-react";

export const SolutionFlow = () => {
  return (
    <Section>
      <div className="text-center mb-12">
        <h2 className="font-inter text-4xl md:text-5xl font-bold text-climb-gunmetal mb-6">
          Você está perdendo vendas <span className="text-climb-orange">todos os dias sem saber</span>
        </h2>
      </div>

      <div className="grid lg:grid-cols-2 gap-12 mb-12">
        {/* Funil Esquerdo - Sem Climb Up */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h3 className="font-inter text-2xl font-bold text-gray-600 text-center mb-8">
            Sem Climb Up
          </h3>
          
          {/* Etapa 1 */}
          <div className="flex flex-col items-center mb-6">
            <div className="w-20 h-20 bg-gray-400 rounded-full flex items-center justify-center mb-4">
              <MousePointer className="w-10 h-10 text-white" />
            </div>
            <div className="bg-gray-100 p-4 rounded-lg text-center w-full">
              <h4 className="font-inter font-bold text-gray-700 mb-2">Tráfego pago</h4>
              <p className="font-inter text-gray-600">1000 leads chegando</p>
            </div>
            <TrendingDown className="w-8 h-8 text-gray-400 my-4" />
          </div>

          {/* Etapa 2 */}
          <div className="flex flex-col items-center mb-6">
            <div className="w-16 h-16 bg-gray-400 rounded-full flex items-center justify-center mb-4">
              <Users className="w-8 h-8 text-white" />
            </div>
            <div className="bg-gray-100 p-4 rounded-lg text-center w-full">
              <h4 className="font-inter font-bold text-gray-700 mb-2">Conversão de 2%</h4>
              <p className="font-inter text-gray-600">Gera 20 vendas</p>
            </div>
            <TrendingDown className="w-8 h-8 text-gray-400 my-4" />
          </div>

          {/* Etapa 3 */}
          <div className="flex flex-col items-center mb-6">
            <div className="w-12 h-12 bg-gray-400 rounded-full flex items-center justify-center mb-4">
              <span className="text-white font-bold">0</span>
            </div>
            <div className="bg-gray-100 p-4 rounded-lg text-center w-full">
              <h4 className="font-inter font-bold text-gray-700 mb-2">Base inativa</h4>
              <p className="font-inter text-gray-600">0 vendas</p>
            </div>
          </div>

          {/* Total */}
          <div className="bg-gray-200 p-4 rounded-lg text-center mt-6">
            <p className="font-inter font-bold text-gray-700 text-lg">
              Total: 20 vendas com 1000 leads
            </p>
          </div>
        </div>

        {/* Funil Direito - Com Climb Up */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h3 className="font-inter text-2xl font-bold text-climb-orange text-center mb-8">
            Com Climb Up
          </h3>
          
          {/* Etapa 1 */}
          <div className="flex flex-col items-center mb-6">
            <div className="w-20 h-20 bg-climb-orange rounded-full flex items-center justify-center mb-4">
              <MousePointer className="w-10 h-10 text-white" />
            </div>
            <div className="bg-orange-50 p-4 rounded-lg text-center w-full border-l-4 border-climb-orange">
              <h4 className="font-inter font-bold text-climb-gunmetal mb-2">Tráfego pago</h4>
              <p className="font-inter text-climb-eerie">1000 leads chegando</p>
            </div>
            <TrendingUp className="w-8 h-8 text-climb-orange my-4" />
          </div>

          {/* Etapa 2 */}
          <div className="flex flex-col items-center mb-6">
            <div className="w-16 h-16 bg-climb-orange rounded-full flex items-center justify-center mb-4">
              <Users className="w-8 h-8 text-white" />
            </div>
            <div className="bg-orange-50 p-4 rounded-lg text-center w-full border-l-4 border-climb-orange">
              <h4 className="font-inter font-bold text-climb-gunmetal mb-2">Conversão de 2%</h4>
              <p className="font-inter text-climb-eerie">20 vendas</p>
            </div>
            <TrendingUp className="w-8 h-8 text-climb-orange my-4" />
          </div>

          {/* Etapa 3 */}
          <div className="flex flex-col items-center mb-6">
            <div className="w-12 h-12 bg-climb-orange rounded-full flex items-center justify-center mb-4">
              <MessageSquare className="w-6 h-6 text-white" />
            </div>
            <div className="bg-orange-50 p-4 rounded-lg text-center w-full border-l-4 border-climb-orange">
              <h4 className="font-inter font-bold text-climb-gunmetal mb-2">Climb Up reimpacta via WhatsApp (+4%)</h4>
              <p className="font-inter text-climb-eerie">Gera +40 vendas</p>
            </div>
          </div>

          {/* Total */}
          <div className="bg-climb-orange p-4 rounded-lg text-center mt-6">
            <p className="font-inter font-bold text-white text-lg">
              Total: 60 vendas com os mesmos 1000 leads
            </p>
          </div>
        </div>
      </div>

      {/* Parágrafo explicativo */}
      <div className="bg-gray-50 p-8 rounded-lg mb-8 max-w-4xl mx-auto">
        <p className="font-inter text-lg text-climb-eerie text-center leading-relaxed">
          Com os canais de tráfego e atendimento convencionais, você faria em média 20 vendas. 
          Utilizando a Climb Up com campanhas automáticas no WhatsApp, esse número sobe para{" "}
          <strong className="text-climb-orange text-xl">60 vendas</strong> — com os mesmos 1000 leads.
        </p>
      </div>

      <div className="text-center">
        <CTAButton>
          QUERO VENDER MAIS
        </CTAButton>
      </div>
    </Section>
  );
};
