
import { Section } from "./Section";
import { BarChart3, Users } from "lucide-react";

export const ProblemSection = () => {
  return (
    <Section background="light">
      <div className="text-center mb-12">
        <h2 className="font-satoshi text-4xl md:text-5xl font-bold text-climb-gunmetal mb-6">
          Com a Climb Up você vende mais com os{" "}
          <span className="text-climb-orange">mesmos leads</span>
        </h2>
        
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-4xl mx-auto">
          <div className="flex items-center justify-center mb-6">
            <BarChart3 className="w-12 h-12 text-climb-orange mr-4" />
            <div className="text-left">
              <p className="font-source-sans text-lg text-climb-eerie">
                <strong>Estudos mostram</strong> que um lead só se converte entre o <strong className="text-climb-orange">3º e o 13º contato</strong>.
              </p>
              <p className="font-source-sans text-lg text-climb-eerie mt-2">
                Na prática, a maioria das empresas tenta no máximo 2 vezes — e <strong>perde vendas todos os dias</strong>.
              </p>
            </div>
          </div>
          
          <div className="border-t pt-4">
            <p className="font-source-sans text-sm text-climb-eerie">
              📝 Fonte: Salesforce Research / LinkedIn B2B Reports
            </p>
          </div>
        </div>
      </div>

      <div className="mb-12">
        <h3 className="font-satoshi text-3xl font-bold text-climb-gunmetal text-center mb-8">
          E o que normalmente acontece?
        </h3>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            "O atendente manda o preço e o cliente some",
            "O cliente compra uma vez, mas nunca mais volta", 
            "O vendedor esquece o follow-up ou só tenta 1 ou 2 vezes",
            "A equipe foca nos leads novos e abandona os antigos",
            "O empresário faz tudo no manual e não consegue escalar"
          ].map((problem, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex items-start">
                <span className="text-red-500 text-2xl mr-3">❌</span>
                <p className="font-source-sans text-climb-eerie">{problem}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};
