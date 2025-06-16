
import { Section } from "./Section";
import { CTAButton } from "./CTAButton";
import { CheckCircle } from "lucide-react";

export const APIConfiguration = () => {
  const features = [
    "Criação de Business Manager na Meta",
    "Verificação e cadastro de Portfólio Empresarial",
    "Criação da conta WABA e validação do número",
    "Conexão pronta com Climb Up",
    "Suporte técnico completo"
  ];

  return (
    <Section background="dark">
      <div className="text-center mb-12">
        <h2 className="font-satoshi text-4xl md:text-5xl font-bold text-white mb-6">
          E mais... <span className="text-climb-orange">Configuração Completa da API</span>
        </h2>
        
        <p className="font-open-sans text-xl text-white mb-12">
          Criação de contas Meta e configuração completa da API oficial feita totalmente por nós. Você não precisa se preocupar com nada técnico.
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 mb-12">
        {features.map((feature, index) => (
          <div key={index} className="bg-climb-gunmetal p-6 rounded-lg text-center border border-climb-platinum">
            <CheckCircle className="w-12 h-12 text-climb-orange mb-4 mx-auto" />
            <p className="font-open-sans text-white text-sm">{feature}</p>
          </div>
        ))}
      </div>

      <div className="text-center">
        <CTAButton>
          VENDER SEM DOR DE CABEÇA
        </CTAButton>
      </div>
    </Section>
  );
};
