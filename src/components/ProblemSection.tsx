
import { Section } from "./Section";
import { X } from "lucide-react";

export const ProblemSection = () => {
  const problems = [
    "O atendente manda o preço e o cliente some",
    "O cliente compra uma vez, mas nunca mais volta", 
    "O vendedor esquece o follow-up ou só tenta 1 ou 2 vezes",
    "A equipe foca nos leads novos e abandona os antigos",
    "O empresário faz tudo no manual e não consegue escalar",
    "O carrinho é abandonado e ninguém tenta recuperar a venda"
  ];

  return (
    <Section background="light">
      <div className="text-center mb-12">
        <h2 className="font-satoshi text-4xl md:text-5xl font-bold text-climb-gunmetal mb-8">
          Com a <span className="text-climb-orange">Climb Up</span> você vende mais com os mesmos leads
        </h2>
        
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-4xl mx-auto mb-12">
          <p className="font-open-sans text-xl text-climb-eerie mb-4">
            📊 Estudos mostram que um lead só se converte entre o 3º e o 13º contato.
          </p>
          <p className="font-open-sans text-xl text-climb-eerie mb-4">
            Na prática, a maioria das empresas tenta no máximo 2 vezes — e perde vendas todos os dias.
          </p>
          <p className="font-open-sans text-sm text-climb-eerie">
            📝 Fonte: Salesforce Research / LinkedIn B2B Reports
          </p>
        </div>

        <h3 className="font-satoshi text-3xl font-bold text-climb-gunmetal mb-8">
          E o que normalmente acontece?
        </h3>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {problems.map((problem, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-red-500">
            <div className="flex items-start">
              <X className="w-6 h-6 text-red-500 mr-3 mt-1 flex-shrink-0" />
              <p className="font-open-sans text-climb-eerie">{problem}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};
