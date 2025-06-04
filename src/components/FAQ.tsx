
import { Section } from "./Section";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export const FAQ = () => {
  const faqs = [
    {
      question: "Meu número pode ser bloqueado?",
      answer: "Com a API Oficial, seus disparos são realizados de forma autorizada, estruturada e em conformidade com as regras da Meta, o que garante altas taxas de entrega e muito mais segurança em comparação com envios manuais ou ferramentas não oficiais. A API é o único canal aprovado pela Meta para envios em massa, por isso não sofre bloqueios por volume de mensagens, diferente do WhatsApp convencional e Business, que não suportam automações ou grandes quantidades de envio. Seguindo as políticas corretamente, controlamos a qualidade do número, utilizamos segmentações inteligentes e garantimos o envio apenas para clientes com opt-in, o que reduz drasticamente os riscos de bloqueio."
    },
    {
      question: "Preciso instalar algum programa?",
      answer: "Não é necessário instalar nada! A Climb Up funciona 100% na nuvem através do seu navegador. Você pode acessar de qualquer lugar, a qualquer hora. Contamos também com aplicativo para que você possa acessar do seu celular em qualquer lugar."
    },
    {
      question: "É só para WhatsApp?",
      answer: "Não! Além do WhatsApp, nossa plataforma integra com Instagram, Facebook Messenger e outros canais. Você gerencia tudo em um só lugar de forma unificada."
    }
  ];

  return (
    <Section background="light">
      <div className="text-center mb-12">
        <h2 className="font-open-sans text-4xl md:text-5xl font-bold text-climb-gunmetal mb-8">
          Perguntas <span className="text-climb-orange">Frequentes</span>
        </h2>
      </div>

      <div className="max-w-3xl mx-auto">
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="bg-white rounded-lg shadow-lg border-none">
              <AccordionTrigger className="font-open-sans font-bold text-climb-gunmetal px-6 py-4 hover:no-underline">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="font-open-sans text-climb-eerie px-6 pb-4">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </Section>
  );
};
