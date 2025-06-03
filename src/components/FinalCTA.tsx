
import { Section } from "./Section";
import { CTAButton } from "./CTAButton";
import { Check } from "lucide-react";

export const FinalCTA = () => {
  const features = [
    "API oficial da Meta (sem bloqueios)",
    "Campanhas no WhatsApp com segmentação", 
    "Multicanal e multiusuário",
    "CRM com funil e histórico",
    "Chatbot com IA e automações",
    "Pagamentos via WhatsApp",
    "Rastreamento de leads",
    "Suporte + treinamento + configuração completa"
  ];

  return (
    <Section background="dark">
      <div className="text-center mb-12">
        <h2 className="font-satoshi text-4xl md:text-5xl font-bold text-white mb-8">
          Sem fidelidade. Sem burocracia. <span className="text-climb-orange">Suporte de verdade</span>.
        </h2>
      </div>

      <div className="grid md:grid-cols-2 gap-4 mb-12 max-w-4xl mx-auto">
        {features.map((feature, index) => (
          <div key={index} className="bg-white p-4 rounded-lg shadow-lg flex items-center">
            <Check className="w-6 h-6 text-green-500 mr-3 flex-shrink-0" />
            <span className="font-source-sans text-climb-eerie">{feature}</span>
          </div>
        ))}
      </div>

      <div className="text-center">
        <CTAButton className="text-2xl px-16 py-6">
          QUERO COMEÇAR AGORA
        </CTAButton>
      </div>
    </Section>
  );
};
