
import { Section } from "./Section";
import { CTAButton } from "./CTAButton";
import { Play } from "lucide-react";

export const VideoDemo = () => {
  return (
    <Section background="light">
      <div className="text-center">
        <h2 className="font-satoshi text-4xl md:text-5xl font-bold text-climb-gunmetal mb-8">
          📹 Veja uma <span className="text-climb-orange">campanha acontecendo</span>
        </h2>
        
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-4xl mx-auto mb-8">
          <div className="bg-climb-gunmetal rounded-lg aspect-video flex items-center justify-center mb-6">
            <Play className="w-24 h-24 text-white" />
          </div>
          <p className="font-inter text-lg text-climb-eerie mb-6">
            🎥 Veja como é simples fazer campanhas no WhatsApp e transformar leads em vendas no mesmo dia.
          </p>
          <p className="font-inter text-sm text-climb-eerie mb-6">
            (Vídeo de demonstração 30–60s)
          </p>
        </div>

        <CTAButton>
          QUERO FAZER MINHA PRIMEIRA CAMPANHA
        </CTAButton>
      </div>
    </Section>
  );
};
