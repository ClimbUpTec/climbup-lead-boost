
import { Section } from "./Section";
import { CTAButton } from "./CTAButton";
import { Smartphone, Eye, MessageCircle } from "lucide-react";

export const WhatsAppAdvantages = () => {
  return (
    <Section>
      <div className="text-center mb-12">
        <h2 className="font-satoshi text-4xl md:text-5xl font-bold text-climb-gunmetal mb-12">
          Por que o WhatsApp é o melhor canal para vender?
        </h2>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mb-12">
        <div className="bg-white p-8 rounded-lg shadow-lg border-l-4 border-climb-orange text-center">
          <Smartphone className="w-16 h-16 text-climb-orange mb-6 mx-auto" />
          <h3 className="font-satoshi font-bold text-xl text-climb-gunmetal mb-4">
            Seu cliente está lá
          </h3>
          <div className="text-4xl font-bold text-climb-orange mb-4">96%</div>
          <p className="font-open-sans text-climb-eerie mb-4">
            dos brasileiros usam WhatsApp todos os dias
          </p>
          <p className="font-open-sans text-sm text-climb-eerie">
            📌 Fonte: Opinion Box
          </p>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-lg border-l-4 border-climb-orange text-center">
          <Eye className="w-16 h-16 text-climb-orange mb-6 mx-auto" />
          <h3 className="font-satoshi font-bold text-xl text-climb-gunmetal mb-4">
            Altíssima taxa de leitura
          </h3>
          <div className="text-4xl font-bold text-climb-orange mb-4">90%</div>
          <p className="font-open-sans text-climb-eerie mb-4">
            das mensagens são lidas em até 5 minutos
          </p>
          <p className="font-open-sans text-sm text-climb-eerie">
            📌 Fonte: Mobile Time
          </p>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-lg border-l-4 border-climb-orange text-center">
          <MessageCircle className="w-16 h-16 text-climb-orange mb-6 mx-auto" />
          <h3 className="font-satoshi font-bold text-xl text-climb-gunmetal mb-4">
            Conversa direta e pessoal
          </h3>
          <div className="text-2xl font-bold text-climb-orange mb-4">1x1</div>
          <p className="font-open-sans text-climb-eerie mb-4">
            gera confiança e aumenta a conversão
          </p>
          <p className="font-open-sans text-sm text-climb-eerie">
            📌 Fonte: Zendesk
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
