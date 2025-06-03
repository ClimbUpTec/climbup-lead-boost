
import { Section } from "./Section";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export const FAQ = () => {
  const faqs = [
    {
      question: "Meu número pode ser bloqueado?",
      answer: "Não! Utilizamos a API oficial da Meta, que garante que seu número nunca seja bloqueado. Diferente das ferramentas não oficiais, nossa plataforma é totalmente segura e aprovada pelo WhatsApp."
    },
    {
      question: "Preciso instalar algum programa?",
      answer: "Não é necessário instalar nada! A Climb Up funciona 100% na nuvem através do seu navegador. Você pode acessar de qualquer lugar, a qualquer hora."
    },
    {
      question: "É só para WhatsApp?",
      answer: "Não! Além do WhatsApp, nossa plataforma integra com Instagram, Facebook Messenger e outros canais. Você gerencia tudo em um só lugar de forma unificada."
    }
  ];

  return (
    <Section background="light">
      <div className="text-center mb-12">
        <h2 className="font-satoshi text-4xl md:text-5xl font-bold text-climb-gunmetal mb-8">
          Perguntas <span className="text-climb-orange">Frequentes</span>
        </h2>
      </div>

      <div className="max-w-3xl mx-auto">
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="bg-white rounded-lg shadow-lg border-none">
              <AccordionTrigger className="font-satoshi font-bold text-climb-gunmetal px-6 py-4 hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="font-source-sans text-climb-eerie px-6 pb-4">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </Section>
  );
};
