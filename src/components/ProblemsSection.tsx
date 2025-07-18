
import { Section } from "./Section";
import { CTAButton } from "./CTAButton";
import { TrendingDown } from "lucide-react";

export const ProblemsSection = () => {
  const problems = [
    "O atendente manda o preço e o cliente some",
    "O cliente compra uma vez, mas nunca mais volta", 
    "O vendedor esquece o follow-up ou só tenta 1 ou 2 vezes",
    "A equipe foca nos leads novos e abandona os antigos",
    "O empresário faz tudo no manual e não consegue escalar",
    "O carrinho é abandonado e ninguém tenta recuperar a venda"
  ];

  return (
    <Section>
      <div className="mb-12">
        <h3 className="font-inter text-3xl font-bold text-climb-gunmetal text-center mb-8">
          E o que normalmente acontece?
        </h3>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {problems.map((problem, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-red-500">
              <div className="flex items-start">
                <TrendingDown className="w-6 h-6 text-red-500 mr-3 mt-1 flex-shrink-0" />
                <p className="font-inter text-climb-eerie">{problem}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="text-center">
        <CTAButton message="Quero reaproveitar meus clientes">
          QUERO RESOLVER ISSO AGORA
        </CTAButton>
      </div>
    </Section>
  );
};
