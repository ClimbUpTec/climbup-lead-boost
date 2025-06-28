
import { Section } from "./Section";
import { CTAButton } from "./CTAButton";

export const CaseStudy = () => {
  return (
    <Section background="light">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="font-satoshi text-4xl md:text-5xl font-bold text-climb-gunmetal mb-8">
          Resultados reais e imediatos
        </h2>
        
        <div className="bg-white p-8 rounded-lg shadow-lg border-l-4 border-climb-orange mb-8">
          <h3 className="font-satoshi font-bold text-2xl text-climb-gunmetal mb-4">Comfy Pizza</h3>
          <p className="font-open-sans text-climb-eerie mb-6">
            Reativou 10.000 clientes inativos em apenas 30 dias usando campanhas automáticas no WhatsApp.
          </p>
          <div className="grid grid-cols-2 gap-8">
            <div className="text-center">
              <p className="font-satoshi font-bold text-4xl text-climb-orange">400%</p>
              <p className="font-open-sans text-climb-eerie">Aumento nas vendas</p>
            </div>
            <div className="text-center">
              <p className="font-satoshi font-bold text-4xl text-climb-orange">17x</p>
              <p className="font-open-sans text-climb-eerie">Retorno sobre investimento</p>
            </div>
          </div>
        </div>

        <CTAButton>
          QUERO RESULTADOS ASSIM
        </CTAButton>
      </div>
    </Section>
  );
};
