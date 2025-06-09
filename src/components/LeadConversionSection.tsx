
import { Section } from "./Section";
import { CTAButton } from "./CTAButton";
import { BarChart3, Users, TrendingDown } from "lucide-react";

export const LeadConversionSection = () => {
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
        <h2 className="font-inter text-4xl md:text-5xl font-bold text-climb-gunmetal mb-8">
          Com a Climb Up você vende mais com <span className="text-climb-orange">os mesmos leads</span>
        </h2>
        
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-4xl mx-auto mb-8">
          <BarChart3 className="w-16 h-16 text-climb-orange mb-6 mx-auto" />
          <p className="font-inter text-xl text-climb-eerie mb-6">
            📊 Estudos mostram que um lead só se converte entre o <strong>3º e o 13º contato</strong>.
          </p>
          <p className="font-inter text-lg text-climb-eerie mb-6">
            Na prática, a maioria das empresas tenta no máximo 2 vezes — e <strong className="text-red-600">perde vendas todos os dias</strong>.
          </p>
          <p className="font-inter text-sm text-gray-600">
            📝 Fonte: Salesforce Research / LinkedIn B2B Reports
          </p>
        </div>
      </div>

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
        <CTAButton>
          QUERO RESOLVER ISSO AGORA
        </CTAButton>
      </div>
    </Section>
  );
};
