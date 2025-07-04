
import { Section } from "./Section";
import { CTAButton } from "./CTAButton";
import { Quote } from "lucide-react";

export const Testimonials = () => {
  const testimonials = [
    {
      company: "Comfy Pizza Napoletana",
      logo: "/lovable-uploads/3b13e5a8-924f-433a-9022-9303247a6b91.png",
      ownerPhoto: "/lovable-uploads/26e07aac-a641-4d44-a226-04be9fedd06e.png",
      text: "Saltamos de R$40k pra R$90k/mês só reativando a base de clientes antigos"
    },
    {
      company: "Alligator Parts",
      logo: "/lovable-uploads/66b2a5bf-a0db-46d8-a3b8-bd3434268ba1.png",
      ownerPhoto: "/lovable-uploads/09cbe9be-462c-4d10-81d7-51dbff0125fe.png",
      text: "Mais de 250 pedidos com uma única campanha, não conseguimos dar conta de atender, não sabíamos do potencial de vendas que tinhamos em mãos sem explorar."
    },
    {
      company: "Litifica",
      logo: "/lovable-uploads/966ba412-fc12-4acd-9682-47c1cc118643.png",
      ownerPhoto: "/lovable-uploads/5d59e715-212d-4c54-8724-5af78a1dc9c7.png",
      text: "Economizamos tempo e transformamos o WhatsApp em nosso principal canal de vendas"
    },
    {
      company: "Pernalonga Burger",
      logo: "/lovable-uploads/af847627-6ac9-42b2-89c4-02a9035fb84f.png",
      ownerPhoto: "/lovable-uploads/672094e1-e1bf-4808-85a2-b839e877a36f.png",
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
            
            {/* Mockup redondo com foto do proprietário e logo */}
            <div className="flex items-center justify-center mb-6">
              <div className="relative">
                <div className="w-20 h-20 rounded-full bg-gray-50 p-1 border-2 border-gray-200 shadow-lg">
                  <img 
                    src={testimonial.ownerPhoto} 
                    alt={`Proprietário da ${testimonial.company}`} 
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>
                {/* Logo da empresa no canto */}
                <div className="absolute -bottom-1 -right-1 w-8 h-8 bg-white rounded-full p-1 shadow-md border border-gray-200">
                  <img 
                    src={testimonial.logo} 
                    alt={`${testimonial.company} Logo`} 
                    className="w-full h-full object-contain"
                  />
                </div>
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
