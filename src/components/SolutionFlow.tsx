
import { Section } from "./Section";
import { CTAButton } from "./CTAButton";
import { ArrowRight } from "lucide-react";

export const SolutionFlow = () => {
  return (
    <Section>
      <div className="text-center mb-12">
        <h2 className="font-inter text-4xl md:text-5xl font-bold text-climb-gunmetal mb-6">
          Você está perdendo vendas <span className="text-climb-orange">todos os dias sem saber.</span>
        </h2>
      </div>

      <div className="grid lg:grid-cols-2 gap-8 mb-12 items-start">
        {/* Funil Esquerdo - Sem Climb Up */}
        <div className="flex flex-col items-center">
          <h3 className="font-inter text-3xl font-bold text-gray-700 text-center mb-8">
            Sem Climb Up
          </h3>
          
          {/* Funil Visual */}
          <div className="relative">
            {/* Etapa 1 - Topo do funil */}
            <div className="w-80 h-24 bg-gradient-to-b from-gray-300 to-gray-400 flex items-center justify-center text-center" style={{clipPath: 'polygon(10% 0%, 90% 0%, 80% 100%, 20% 100%)'}}>
              <div>
                <p className="font-inter font-bold text-gray-800 text-lg">Tráfego pago</p>
                <p className="font-inter text-gray-700">1000 LEADS</p>
              </div>
            </div>
            
            {/* Seta */}
            <div className="flex justify-center my-4">
              <ArrowRight className="w-8 h-8 text-gray-400 rotate-90" />
            </div>
            
            {/* Etapa 2 - Meio do funil */}
            <div className="w-64 h-24 bg-gradient-to-b from-gray-400 to-gray-500 flex items-center justify-center text-center mx-auto" style={{clipPath: 'polygon(15% 0%, 85% 0%, 75% 100%, 25% 100%)'}}>
              <div>
                <p className="font-inter font-bold text-gray-800 text-lg">Conversão de 2%</p>
                <p className="font-inter text-gray-700">20 VENDAS</p>
              </div>
            </div>
            
            {/* Seta */}
            <div className="flex justify-center my-4">
              <ArrowRight className="w-8 h-8 text-gray-400 rotate-90" />
            </div>
            
            {/* Etapa 3 - Base do funil aumentada */}
            <div className="w-56 h-32 bg-gradient-to-b from-gray-500 to-gray-600 flex items-center justify-center text-center mx-auto" style={{clipPath: 'polygon(18% 0%, 82% 0%, 75% 100%, 25% 100%)'}}>
              <div>
                <p className="font-inter font-bold text-white text-lg">Base inativa</p>
                <p className="font-inter text-gray-200">0 VENDAS</p>
              </div>
            </div>
          </div>

          {/* Total */}
          <div className="bg-gray-500 text-white p-6 rounded-lg mt-6 text-center w-[320px]">
            <p className="font-inter font-bold text-xl">
              Total: 20 vendas<br />com 1000 leads
            </p>
          </div>
        </div>

        {/* Funil Direito - Com Climb Up */}
        <div className="flex flex-col items-center">
          <h3 className="font-inter text-3xl font-bold text-center mb-8">
            <span className="text-climb-orange">Com</span> Climb Up
          </h3>
          
          {/* Funil Visual */}
          <div className="relative">
            {/* Etapa 1 - Topo do funil */}
            <div className="w-80 h-24 bg-gradient-to-b from-orange-200 to-orange-300 flex items-center justify-center text-center" style={{clipPath: 'polygon(10% 0%, 90% 0%, 80% 100%, 20% 100%)'}}>
              <div>
                <p className="font-inter font-bold text-gray-800 text-lg">Tráfego pago</p>
                <p className="font-inter text-gray-700">1000 LEADS</p>
              </div>
            </div>
            
            {/* Seta */}
            <div className="flex justify-center my-4">
              <ArrowRight className="w-8 h-8 text-climb-orange rotate-90" />
            </div>
            
            {/* Etapa 2 - Meio do funil */}
            <div className="w-64 h-24 bg-gradient-to-b from-orange-300 to-orange-400 flex items-center justify-center text-center mx-auto" style={{clipPath: 'polygon(15% 0%, 85% 0%, 75% 100%, 25% 100%)'}}>
              <div>
                <p className="font-inter font-bold text-gray-800 text-lg">Conversão de 2%</p>
                <p className="font-inter text-gray-700">20 VENDAS</p>
              </div>
            </div>
            
            {/* Seta */}
            <div className="flex justify-center my-4">
              <ArrowRight className="w-8 h-8 text-climb-orange rotate-90" />
            </div>
            
            {/* Etapa 3 - Base do funil com Climb Up aumentada */}
            <div className="w-56 h-32 bg-gradient-to-b from-climb-orange to-climb-orange-dark flex items-center justify-center text-center mx-auto" style={{clipPath: 'polygon(18% 0%, 82% 0%, 75% 100%, 25% 100%)'}}>
              <div>
                <p className="font-inter font-bold text-white text-sm">Base inativa +</p>
                <p className="font-inter font-bold text-white text-sm">Climb Up 4% =</p>
                <p className="font-inter font-bold text-white text-sm">+40 VENDAS</p>
              </div>
            </div>
          </div>

          {/* Total */}
          <div className="bg-climb-orange text-white p-6 rounded-lg mt-6 text-center w-[320px]">
            <p className="font-inter font-bold text-xl">
              Total: 60 vendas<br />com os mesmos 1000 leads
            </p>
          </div>
        </div>
      </div>

      {/* Parágrafo explicativo */}
      <div className="bg-gray-50 p-8 rounded-lg mb-8 max-w-4xl mx-auto">
        <p className="font-inter text-lg text-climb-eerie text-center leading-relaxed">
          Com os canais de tráfego e atendimento convencionais, você faria em média 20 vendas. 
          Utilizando a Climb Up com campanhas automáticas no WhatsApp, esse número sobe para{" "}
          <strong className="text-climb-orange text-2xl font-bold">60 vendas</strong> — com os mesmos 1000 leads.
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
