
import { Section } from "./Section";
import { BarChart3, MessageSquare, Users } from "lucide-react";

export const CompanyInfo = () => {
  return (
    <Section>
      <div className="text-center mb-12">
        <div className="flex items-center justify-center mb-6">
          <img 
            src="/lovable-uploads/05d6dd8c-90aa-4b38-baae-a15e97483f08.png" 
            alt="Climb Up Icon" 
            className="h-12 w-12 mr-4"
          />
          <h2 className="font-satoshi text-4xl md:text-5xl font-bold text-climb-gunmetal">
            Conheça a <span className="text-climb-orange">Climb Up</span>
          </h2>
        </div>
        
        <p className="font-source-sans text-xl text-climb-eerie mb-8">
          📊 Transformamos seu WhatsApp em um canal de vendas escalável:
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-climb-orange text-center">
          <Users className="w-12 h-12 text-climb-orange mb-4 mx-auto" />
          <div className="text-3xl font-bold text-climb-gunmetal mb-2">+200</div>
          <p className="font-source-sans text-climb-eerie">empresas ativas</p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-climb-orange text-center">
          <MessageSquare className="w-12 h-12 text-climb-orange mb-4 mx-auto" />
          <div className="text-3xl font-bold text-climb-gunmetal mb-2">+2M</div>
          <p className="font-source-sans text-climb-eerie">mensagens/mês</p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-climb-orange text-center">
          <BarChart3 className="w-12 h-12 text-climb-orange mb-4 mx-auto" />
          <div className="text-3xl font-bold text-climb-gunmetal mb-2">+200k</div>
          <p className="font-source-sans text-climb-eerie">interações reais/mês</p>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-climb-orange text-center">
          <MessageSquare className="w-12 h-12 text-climb-orange mb-4 mx-auto" />
          <div className="text-3xl font-bold text-climb-gunmetal mb-2">100%</div>
          <p className="font-source-sans text-climb-eerie">suporte humano</p>
        </div>
      </div>
    </Section>
  );
};
