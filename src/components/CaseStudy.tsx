
import { Section } from "./Section";
import { CTAButton } from "./CTAButton";

export const CaseStudy = () => {
  return (
    <Section className="bg-climb-orange py-16">
      <div className="max-w-4xl mx-auto text-center">
        {/* Ícone de crescimento */}
        <div className="mb-8">
          <svg className="w-16 h-16 mx-auto text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z"/>
          </svg>
        </div>

        <div className="flex flex-col lg:flex-row items-start gap-8 mb-8">
          <div className="flex-1">
            <h2 className="font-satoshi text-4xl md:text-5xl font-bold text-white mb-12">
              Resultados reais e imediatos
            </h2>
            
            {/* Foto do cliente */}
            <div className="mb-8">
              <div className="relative inline-block">
                <img 
                  src="/lovable-uploads/e75fb14f-3e39-423c-b99e-34d501584fa5.png" 
                  alt="Cliente Comfy Pizza" 
                  className="w-32 h-32 rounded-full object-cover border-4 border-white shadow-lg mx-auto"
                />
                {/* Logo da Comfy no canto */}
                <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg">
                  <img 
                    src="/lovable-uploads/5cebdcf1-97be-4ad3-aecc-a32de28cf90f.png" 
                    alt="Comfy Pizza Logo" 
                    className="w-8 h-8 object-contain"
                  />
                </div>
              </div>
            </div>

            {/* Texto principal */}
            <p className="font-open-sans text-xl md:text-2xl text-white mb-8 font-medium">
              A <span className="font-bold">Comfy Pizza Napoletana</span> foi de{" "}
              <span className="font-bold underline decoration-white decoration-2">R$40 mil/mês</span>{" "}
              para{" "}
              <span className="font-bold underline decoration-white decoration-2">R$90 mil/mês</span>{" "}
              em menos de 3 meses com esse método.
            </p>
          </div>
        </div>

        <CTAButton className="bg-white text-climb-orange hover:bg-gray-100 font-bold text-lg px-8 py-4" message="Quero vender mais no WhatsApp com a Climb Up">
          QUERO VENDER MAIS
        </CTAButton>
      </div>
    </Section>
  );
};
