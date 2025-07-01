
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
    },
    {
      question: "Posso criar minhas campanhas sozinho?",
      answer: "Sim! A Climb Up tem um layout simplificado, permitindo que mesmo sem nenhum conhecimento prévio você possa sozinho cadastrar e disparar suas primeiras campanhas em segundos, além disso nosso time oferece treinamento e suporte humanizado e gratuito."
    },
    {
      question: "Tem custo pra enviar mensagens?",
      answer: "Sim, atualmente a Meta cobra por modelo de mensagem enviado através da API Oficial do WhatsApp. O valor para envio de mensagens é de $0,0625* para conversas de marketing e $0,008* para conversas de utilidade."
    },
    {
      question: "Terei resultado desde a primeira campanha?",
      answer: "Sim, nossos clientes fecham vendas desde a primeira campanha."
    },
    {
      question: "Posso começar a fazer campanhas imediatamente?",
      answer: "Caso você já possua um número de API sim, imediatamente. Caso você não possua, após a confirmação de pagamento, a equipe da Climb Up fará a criação do seu número de API, verificação do seu portfólio empresarial e implantação do número na plataforma, esse processo pode levar de 30min a 07 dias úteis, dependendo de como suas contas Meta estiverem, após esse processo você poderá usufruir por completo das funcionalidades contratadas."
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
