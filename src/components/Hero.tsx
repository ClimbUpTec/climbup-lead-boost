
import { CTAButton } from "./CTAButton";
import { MessageSquare, TrendingUp, Target } from "lucide-react";

export const Hero = () => {
  return (
    <div className="bg-gradient-to-br from-climb-white to-climb-platinum min-h-screen flex items-center">
      <div className="max-w-6xl mx-auto px-4 py-20">
        <div className="text-center animate-fade-in-up">
          <h1 className="font-satoshi text-5xl md:text-7xl font-bold text-climb-gunmetal mb-6">
            Transforme o WhatsApp da sua empresa em uma{" "}
            <span className="text-climb-orange">máquina de vendas</span>
          </h1>
          
          <p className="font-source-sans text-xl md:text-2xl text-climb-eerie mb-8 max-w-4xl mx-auto">
            Venda até <strong className="text-climb-orange">300% mais</strong> com campanhas via WhatsApp — simples, rápido e comprovado.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-12 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-climb-orange">
              <TrendingUp className="w-8 h-8 text-climb-orange mb-4 mx-auto" />
              <h3 className="font-satoshi font-bold text-climb-gunmetal mb-2">3x mais conversão</h3>
              <p className="font-source-sans text-climb-eerie">que outros canais</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-climb-orange">
              <Target className="w-8 h-8 text-climb-orange mb-4 mx-auto" />
              <h3 className="font-satoshi font-bold text-climb-gunmetal mb-2">17x ROAS</h3>
              <p className="font-source-sans text-climb-eerie">comprovado</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-climb-orange">
              <MessageSquare className="w-8 h-8 text-climb-orange mb-4 mx-auto" />
              <h3 className="font-satoshi font-bold text-climb-gunmetal mb-2">1 cliente a cada</h3>
              <p className="font-source-sans text-climb-eerie">25 contatos reaproveitados</p>
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
