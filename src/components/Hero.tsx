
import { CTAButton } from "./CTAButton";
import { MessageSquare, TrendingUp, Target } from "lucide-react";

export const Hero = () => {
  return (
    <div className="bg-gradient-to-br from-climb-white to-gray-50 min-h-screen flex items-center">
      <div className="max-w-6xl mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Conteúdo principal */}
          <div className="text-center lg:text-left animate-fade-in-up">
            {/* Logo da Climb Up */}
            <div className="mb-8">
              <img 
                src="/lovable-uploads/f5e07684-5855-45ed-a9eb-1e77f3f975b6.png" 
                alt="Climb Up Logo" 
                className="h-16 mx-auto lg:mx-0 mb-6"
              />
            </div>

            <h1 className="font-inter text-4xl md:text-6xl lg:text-5xl font-bold text-climb-gunmetal mb-6">
              Transforme o WhatsApp da sua empresa em uma{" "}
              <span className="text-climb-orange">máquina de vendas</span>
            </h1>
            
            <p className="font-inter text-xl md:text-2xl text-climb-eerie mb-8">
              Venda <strong className="text-climb-orange">200% mais</strong> com campanhas via WhatsApp — simples, rápido e comprovado.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white p-4 rounded-lg shadow-lg border-l-4 border-climb-orange">
                <TrendingUp className="w-6 h-6 text-climb-orange mb-2 mx-auto lg:mx-0" />
                <h3 className="font-inter font-bold text-climb-gunmetal mb-1 text-sm">3x mais conversão</h3>
                <p className="font-inter text-climb-eerie text-xs">que outros canais</p>
              </div>
              
              <div className="bg-white p-4 rounded-lg shadow-lg border-l-4 border-climb-orange">
                <Target className="w-6 h-6 text-climb-orange mb-2 mx-auto lg:mx-0" />
                <h3 className="font-inter font-bold text-climb-gunmetal mb-1 text-sm">17x ROAS</h3>
                <p className="font-inter text-climb-eerie text-xs">17x o valor investido em vendas</p>
              </div>
              
              <div className="bg-white p-4 rounded-lg shadow-lg border-l-4 border-climb-orange">
                <MessageSquare className="w-6 h-6 text-climb-orange mb-2 mx-auto lg:mx-0" />
                <h3 className="font-inter font-bold text-climb-gunmetal mb-1 text-sm">1/25 vendas</h3>
                <p className="font-inter text-climb-eerie text-xs">A cada 25 reaproveitados 1 venda</p>
              </div>
            </div>

            <CTAButton className="text-xl px-12 py-6">
              QUERO VENDER MAIS
            </CTAButton>
          </div>

          {/* Imagem de exemplo da campanha */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <img 
                src="/lovable-uploads/11d0f0bb-2e64-40cf-b7e8-274a166aee6a.png" 
                alt="Exemplo de campanha no WhatsApp mostrando oferta de pizza com cupom de desconto" 
                className="max-w-sm w-full h-auto rounded-2xl shadow-2xl"
              />
              <div className="absolute -top-4 -right-4 bg-climb-orange text-white px-4 py-2 rounded-full text-sm font-bold">
                Exemplo Real
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
