
import { Section } from "./Section";
import { CTAButton } from "./CTAButton";
import { Check } from "lucide-react";

export const Pricing = () => {
  const plans = [
    {
      name: "Essential",
      price: "R$499,90",
      target: "Microempresas",
      features: ["2 usuários", "1 WhatsApp", "CRM", "Campanhas manuais"]
    },
    {
      name: "Pro",
      price: "R$699,90", 
      target: "Pequenas equipes",
      features: ["4 usuários", "Campanhas automáticas", "CRM", "WhatsApp API", "Instagram/Facebook"]
    },
    {
      name: "Plus+",
      price: "R$1.299,90",
      target: "Times de vendas ativos", 
      features: ["8 usuários", "2 WhatsApps", "API/Webhooks"]
    },
    {
      name: "Advanced",
      price: "R$1.999,90",
      target: "Equipes comerciais estruturadas",
      features: ["16 usuários", "4 WhatsApps", "Automações ilimitadas"]
    }
  ];

  return (
    <Section>
      <div className="text-center mb-12">
        <h2 className="font-satoshi text-4xl md:text-5xl font-bold text-climb-gunmetal mb-4">
          Planos e preços
        </h2>
        <p className="font-source-sans text-xl text-climb-eerie">
          Comece com a Climb Up a partir de <span className="text-climb-orange font-bold">R$499,90/mês</span>
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {plans.map((plan, index) => (
          <div key={index} className={`bg-white p-6 rounded-lg shadow-lg ${index === 1 ? 'border-2 border-climb-orange' : ''}`}>
            <h3 className="font-satoshi font-bold text-xl text-climb-gunmetal mb-2">{plan.name}</h3>
            <div className="text-3xl font-bold text-climb-orange mb-2">{plan.price}</div>
            <p className="font-source-sans text-sm text-climb-eerie mb-4">{plan.target}</p>
            <div className="space-y-2">
              {plan.features.map((feature, featureIndex) => (
                <div key={featureIndex} className="flex items-center">
                  <Check className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                  <span className="font-source-sans text-sm text-climb-eerie">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="bg-climb-orange text-white p-6 rounded-lg text-center mb-8">
        <p className="font-source-sans text-lg">
          🛠️ <strong>Implantação técnica da API oficial da Meta</strong> incluída em planos especiais
        </p>
      </div>

      <div className="text-center">
        <CTAButton>
          ESCOLHER MEU PLANO
        </CTAButton>
      </div>
    </Section>
  );
};
