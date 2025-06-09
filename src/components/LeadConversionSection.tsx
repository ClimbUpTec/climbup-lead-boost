
import { Section } from "./Section";
import { CTAButton } from "./CTAButton";
import { BarChart3, Users, TrendingDown } from "lucide-react";

export const LeadConversionSection = () => {
  const problems = [
    "O atendente manda o preço e o cliente some",
    "O cliente compra uma vez, mas nunca mais volta", 
    "O vendedor esquece o follow-up ou só tenta 1 ou 2 vezes",
    "A equipe foca nos leads novos e abandona os antigos",
    "O empresário faz tudo no manual e não consegue escalar",
    "O carrinho é abandonado e ninguém tenta recuperar a venda"
  ];

  return (
    <Section background="light">
      <div className="text-center mb-12">
        <h2 className="font-inter text-4xl md:text-5xl font-bold text-climb-gunmetal mb-8">
          Com a Climb Up você vende mais com <span className="text-climb-orange">os mesmos leads</span>
        </h2>
        
        <div className="grid lg:grid-cols-2 gap-8 items-center max-w-6xl mx-auto mb-8">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <BarChart3 className="w-16 h-16 text-climb-orange mb-6 mx-auto" />
            <p className="font-inter text-lg text-climb-eerie mb-4">
              📊 Estudos mostram que um lead só vira cliente entre o <strong>3º e o 13º contato</strong> em vendas complexas.
            </p>
            <p className="font-inter text-lg text-climb-eerie mb-4">
              Em delivery e restaurantes, clientes recorrentes representam até <strong>70% das vendas</strong>.
            </p>
            <p className="font-inter text-lg text-climb-eerie mb-4">
              E reter um cliente pode ser até <strong>5x mais barato</strong> do que conquistar um novo.
            </p>
            <p className="font-inter text-lg text-climb-orange font-semibold mb-6">
              Quem reimpacta, vende mais — e vende de novo.
            </p>
            <p className="font-inter text-sm text-gray-600">
              📝 Fonte: Salesforce Research / LinkedIn B2B Reports / Harvard Business Review / National Restaurant Association (EUA) / Invesp
            </p>
          </div>
          
          <div className="flex justify-center">
            <div className="relative">
              {/* Mockup do celular */}
              <div className="w-64 h-[520px] bg-black rounded-[2.5rem] p-2 shadow-2xl">
                <div className="w-full h-full bg-white rounded-[2rem] overflow-hidden">
                  <img 
                    src="/lovable-uploads/6cdbb77a-b1f3-4c80-b6fb-096f2884c305.png" 
                    alt="Exemplo de mensagem WhatsApp" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mb-12">
        <h3 className="font-inter text-3xl font-bold text-climb-gunmetal text-center mb-8">
          E o que normalmente acontece?
        </h3>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {problems.map((problem, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-red-500">
              <div className="flex items-start">
                <TrendingDown className="w-6 h-6 text-red-500 mr-3 mt-1 flex-shrink-0" />
                <p className="font-inter text-climb-eerie">{problem}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="text-center">
        <CTAButton>
          QUERO RESOLVER ISSO AGORA
        </CTAButton>
      </div>
    </Section>
  );
};
