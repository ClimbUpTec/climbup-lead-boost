
import { Section } from "./Section";
import { CTAButton } from "./CTAButton";
import { Quote } from "lucide-react";

export const Testimonials = () => {
  const testimonials = [
    {
      company: "🧡 Comfy Pizza Napoletana",
      text: "Saltamos de R$40k pra R$90k/mês só reativando a base de clientes antigos"
    },
    {
      company: "🛠 Alligator Parts",
      text: "Com organização e reengajamento, multiplicamos o faturamento em 4x, a Climb Up trouxe o crescimento que sonhávamos."
    },
    {
      company: "🌱 Litifica",
      text: "Economizamos tempo e transformamos o WhatsApp em nosso principal canal de vendas"
    },
    {
      company: "🍔 Pernalonga Burger",
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
            <h3 className="font-satoshi font-bold text-lg text-climb-gunmetal mb-4">
              {testimonial.company}
            </h3>
            <p className="font-source-sans text-climb-eerie italic">
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
