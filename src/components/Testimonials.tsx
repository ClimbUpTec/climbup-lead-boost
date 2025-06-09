
import { Section } from "./Section";
import { CTAButton } from "./CTAButton";
import { Quote } from "lucide-react";

export const Testimonials = () => {
  const testimonials = [
    {
      company: "Comfy Pizza Napoletana",
      logo: "/lovable-uploads/73afbd0d-90b0-4b2f-8db5-030b81ce577d.png",
      text: "Saltamos de R$40k pra R$90k/mês só reativando a base de clientes antigos"
    },
    {
      company: "Alligator Parts",
      logo: "/lovable-uploads/7df3e0b8-b1fd-49f5-8ab4-9ac07a50af01.png",
      text: "Com organização e reengajamento, multiplicamos o faturamento em 4x, a Climb Up trouxe o crescimento que sonhávamos."
    },
    {
      company: "Litifica",
      logo: "/lovable-uploads/319d086f-519a-4e93-854e-dbaba530df08.png",
      text: "Economizamos tempo e transformamos o WhatsApp em nosso principal canal de vendas"
    },
    {
      company: "Pernalonga Burger",
      logo: "/lovable-uploads/a3e7054f-230c-4ab9-af8c-670ad40c9f52.png",
      text: "Com uma lista esquecida, faturamos 17x o valor investido. Salvou o negócio."
    }
  ];

  return (
    <Section background="light">
      <div className="text-center mb-12">
        <h2 className="font-satoshi text-4xl md:text-5xl font-bold text-climb-gunmetal mb-8">
          O que nossos <span className="text-climb-orange">clientes dizem</span>
        </h2>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mb-12">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="bg-white p-8 rounded-lg shadow-lg">
            <Quote className="w-12 h-12 text-climb-orange mb-4" />
            <div className="flex items-center justify-center mb-6">
              <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                <img 
                  src={testimonial.logo} 
                  alt={`${testimonial.company} Logo`} 
                  className="w-16 h-16 object-contain"
                />
              </div>
            </div>
            <h3 className="font-satoshi font-bold text-lg text-climb-gunmetal mb-4 text-center">
              {testimonial.company}
            </h3>
            <p className="font-inter text-climb-eerie italic text-center">
              "{testimonial.text}"
            </p>
          </div>
        ))}
      </div>

      <div className="text-center">
        <CTAButton>
          EU QUERO TER ESSES RESULTADOS
        </CTAButton>
      </div>
    </Section>
  );
};
