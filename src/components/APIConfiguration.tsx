
import { Section } from "./Section";
import { CTAButton } from "./CTAButton";
import { CheckCircle, Settings } from "lucide-react";

export const APIConfiguration = () => {
  const features = [
    "Cadastro da empresa na Meta",
    "Criação da conta oficial de WhatsApp",
    "Validação do número",
    "Integração com a Climb Up",
    "Suporte técnico + orientação estratégica"
  ];

  return (
    <Section background="light">
      <div className="text-center mb-12">
        <h2 className="font-satoshi text-4xl md:text-5xl font-bold text-climb-gunmetal mb-8">
          E mais: <span className="text-climb-orange">Configuração completa</span> da API oficial
        </h2>
      </div>

      <div className="bg-white p-8 rounded-lg shadow-lg max-w-4xl mx-auto">
        <Settings className="w-16 h-16 text-climb-orange mb-6 mx-auto" />
        
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center">
              <CheckCircle className="w-6 h-6 text-climb-orange mr-3 flex-shrink-0" />
              <p className="font-source-sans text-lg text-climb-eerie">{feature}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <CTAButton>
            VENDER SEM DOR DE CABEÇA
          </CTAButton>
        </div>
      </div>
    </Section>
  );
};
