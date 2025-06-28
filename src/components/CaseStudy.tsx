
import { Section } from "./Section";
import { CTAButton } from "./CTAButton";

export const CaseStudy = () => {
  return (
    <Section background="light">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Texto */}
        <div>
          <h2 className="font-satoshi text-4xl md:text-5xl font-bold text-climb-gunmetal mb-8">
            Resultados reais e imediatos
          </h2>
          
          <div className="space-y-6 mb-8">
            <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-climb-orange">
              <h3 className="font-satoshi font-bold text-2xl text-climb-gunmetal mb-2">Comfy Pizza</h3>
              <p className="font-open-sans text-climb-eerie mb-4">
                Reativou 10.000 clientes inativos em apenas 30 dias usando campanhas automáticas no WhatsApp.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <p className="font-satoshi font-bold text-3xl text-climb-orange">400%</p>
                  <p className="font-open-sans text-climb-eerie">Aumento nas vendas</p>
                </div>
                <div className="text-center">
                  <p className="font-satoshi font-bold text-3xl text-climb-orange">17x</p>
                  <p className="font-open-sans text-climb-eerie">Retorno sobre investimento</p>
                </div>
              </div>
            </div>
          </div>

          <CTAButton>
            QUERO RESULTADOS ASSIM
          </CTAButton>
        </div>

        {/* Mockup do celular */}
        <div className="flex justify-center">
          <div className="relative">
            <img 
              src="/lovable-uploads/8f79a595-3ad6-4fd2-a1e5-e39aa9824577.png" 
              alt="WhatsApp Campaign Example" 
              className="max-w-full h-auto rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </div>
    </Section>
  );
};
