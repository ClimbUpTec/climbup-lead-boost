
import { Section } from "./Section";
import { CTAButton } from "./CTAButton";
import { Users, Eye, MessageCircle } from "lucide-react";

export const WhatsAppAdvantages = () => {
  return (
    <Section background="light">
      <div className="text-center mb-12">
        <h2 className="font-satoshi text-4xl md:text-5xl font-bold text-climb-gunmetal mb-8">
          Por que o WhatsApp é o melhor canal para vender?
        </h2>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mb-12">
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <Users className="w-16 h-16 text-climb-orange mb-6 mx-auto" />
          <h3 className="font-satoshi font-bold text-xl text-climb-gunmetal mb-4 text-center">
            Seu cliente está lá
          </h3>
          <p className="font-source-sans text-lg text-climb-eerie text-center mb-4">
            ✅ <strong>96% dos brasileiros</strong> usam WhatsApp todos os dias
          </p>
          <p className="font-source-sans text-sm text-climb-eerie text-center">
            📌 Fonte: Opinion Box, 2023
          </p>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-lg">
          <Eye className="w-16 h-16 text-climb-orange mb-6 mx-auto" />
          <h3 className="font-satoshi font-bold text-xl text-climb-gunmetal mb-4 text-center">
            Altíssima taxa de leitura
          </h3>
          <p className="font-source-sans text-lg text-climb-eerie text-center mb-4">
            ✅ <strong>90% das mensagens</strong> são lidas em até 5 minutos
          </p>
          <p className="font-source-sans text-sm text-climb-eerie text-center">
            📌 Fonte: Mobile Time, 2023
          </p>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-lg">
          <MessageCircle className="w-16 h-16 text-climb-orange mb-6 mx-auto" />
          <h3 className="font-satoshi font-bold text-xl text-climb-gunmetal mb-4 text-center">
            Conversa direta e pessoal
          </h3>
          <p className="font-source-sans text-lg text-climb-eerie text-center mb-4">
            ✅ É <strong>1x1</strong>, gera confiança e aumenta a conversão
          </p>
          <p className="font-source-sans text-sm text-climb-eerie text-center">
            📌 Fonte: Zendesk, 2022
          </p>
        </div>
      </div>

      <div className="text-center">
        <CTAButton>
          QUERO VENDER NO WHATSAPP
        </CTAButton>
      </div>
    </Section>
  );
};
