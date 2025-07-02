
import { Section } from "./Section";
import { CTAButton } from "./CTAButton";

export const VideoDemo = () => {
  return (
    <Section background="light">
      <div className="text-center">
        <h2 className="font-satoshi text-4xl md:text-5xl font-bold text-climb-gunmetal mb-8">
          📹 Veja uma <span className="text-climb-orange">campanha de remarketing via WhatsApp na prática</span>
        </h2>
        
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-4xl mx-auto mb-8">
          <div className="aspect-video mb-6">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/r_qdgC6XHWA"
              title="Veja uma campanha acontecendo"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="rounded-lg"
            ></iframe>
          </div>
          <p className="font-inter text-lg text-climb-eerie mb-6">
            🎥 Veja como é simples fazer campanhas no WhatsApp e transformar leads em vendas no mesmo dia.
          </p>
        </div>

        <CTAButton>
          QUERO FAZER MINHA PRIMEIRA CAMPANHA
        </CTAButton>
      </div>
    </Section>
  );
};
