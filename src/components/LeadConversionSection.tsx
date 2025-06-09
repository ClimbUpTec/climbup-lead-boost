
import { Section } from "./Section";
import { CTAButton } from "./CTAButton";
import { BarChart3, Utensils, DollarSign } from "lucide-react";

export const LeadConversionSection = () => {
  return (
    <Section background="light">
      <div className="text-center mb-12">
        <h2 className="font-inter text-4xl md:text-5xl font-bold text-climb-gunmetal mb-8">
          Com a Climb Up você vende mais com <span className="text-climb-orange">os mesmos leads</span>
        </h2>
        
        <div className="grid lg:grid-cols-2 gap-8 items-center max-w-6xl mx-auto mb-8">
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <div className="space-y-6 mb-6">
              <div className="flex items-start gap-4">
                <BarChart3 className="w-8 h-8 text-climb-orange mt-1 flex-shrink-0" />
                <p className="font-inter text-lg text-climb-eerie">
                  Estudos mostram que um lead só vira cliente entre o <strong>3º e o 13º contato</strong> em vendas complexas.
                </p>
              </div>
              
              <div className="flex items-start gap-4">
                <Utensils className="w-8 h-8 text-climb-orange mt-1 flex-shrink-0" />
                <p className="font-inter text-lg text-climb-eerie">
                  Em delivery e restaurantes, clientes recorrentes representam até <strong>70% das vendas</strong>.
                </p>
              </div>
              
              <div className="flex items-start gap-4">
                <DollarSign className="w-8 h-8 text-climb-orange mt-1 flex-shrink-0" />
                <p className="font-inter text-lg text-climb-eerie">
                  E reter um cliente pode ser até <strong>5x mais barato</strong> do que conquistar um novo.
                </p>
              </div>
            </div>
            
            <p className="font-inter text-lg text-climb-orange font-semibold mb-6">
              Quem reimpacta, vende mais — e vende de novo.
            </p>
            <p className="font-inter text-sm text-gray-600">
              📝 Fonte: Salesforce Research / LinkedIn B2B Reports / Harvard Business Review / National Restaurant Association (EUA) / Invesp
            </p>
          </div>
          
          <div className="flex justify-center">
            <div className="relative">
              {/* Moldura de alguém segurando o celular */}
              <div className="w-80 h-[600px] bg-gradient-to-b from-gray-100 to-gray-200 rounded-3xl p-6 shadow-2xl">
                <div className="w-full h-full relative">
                  {/* Mão segurando o celular */}
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-32 h-16 bg-gradient-to-t from-amber-100 to-amber-50 rounded-t-full"></div>
                  
                  {/* Mockup do celular */}
                  <div className="w-64 h-[520px] bg-black rounded-[2.5rem] p-2 shadow-2xl mx-auto">
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
