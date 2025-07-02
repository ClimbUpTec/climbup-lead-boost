
import { CTAButton } from "./CTAButton";
import { MessageSquare, TrendingUp, Target } from "lucide-react";

export const Hero = () => {
  return (
    <div className="bg-gradient-to-br from-climb-white to-gray-50 min-h-screen flex items-center">
      <div className="max-w-6xl mx-auto px-4 py-20">
        <div className="text-center animate-fade-in-up">
          {/* Logo da Climb Up */}
          <div className="mb-8">
            <img 
              src="/lovable-uploads/f5e07684-5855-45ed-a9eb-1e77f3f975b6.png" 
              alt="Climb Up Logo" 
              className="h-16 mx-auto mb-6"
            />
          </div>

          <h1 className="font-inter text-5xl md:text-7xl font-bold text-climb-gunmetal mb-6">
            Transforme o WhatsApp da sua empresa em uma{" "}
            <span className="text-climb-orange">máquina de vendas</span>
          </h1>
          
          <p className="font-inter text-xl md:text-2xl text-climb-eerie mb-8 max-w-4xl mx-auto">
            Venda <strong className="text-climb-orange">200% mais</strong> com campanhas via WhatsApp — simples, rápido e comprovado.
          </p>

          <div className="flex flex-col lg:flex-row items-center gap-8 mb-12 max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 flex-1">
              <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-climb-orange">
                <TrendingUp className="w-8 h-8 text-climb-orange mb-4 mx-auto" />
                <h3 className="font-inter font-bold text-climb-gunmetal mb-2">3x mais conversão</h3>
                <p className="font-inter text-climb-eerie">que outros canais</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-climb-orange">
                <Target className="w-8 h-8 text-climb-orange mb-4 mx-auto" />
                <h3 className="font-inter font-bold text-climb-gunmetal mb-2">17x ROAS</h3>
                <p className="font-inter text-climb-eerie">17x o valor investido em vendas</p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-climb-orange">
                <MessageSquare className="w-8 h-8 text-climb-orange mb-4 mx-auto" />
                <h3 className="font-inter font-bold text-climb-gunmetal mb-2">1/25 vendas</h3>
                <p className="font-inter text-climb-eerie">A cada 25 reaproveitados 1 venda</p>
              </div>
            </div>
            
            <div className="flex-shrink-0 lg:w-80">
              <img 
                src="/lovable-uploads/42e902c7-a68d-4b64-8ff4-25f230a9d79b.png" 
                alt="Exemplo de campanha WhatsApp" 
                className="w-full max-w-sm mx-auto rounded-lg shadow-lg"
              />
            </div>
          </div>

          <CTAButton className="text-xl px-12 py-6">
            QUERO VENDER MAIS
          </CTAButton>
        </div>
      </div>
    </div>
  );
};
