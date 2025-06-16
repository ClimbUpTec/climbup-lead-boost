
import { Section } from "./Section";

export const StatisticsSection = () => {
  return (
    <Section>
      <div className="grid md:grid-cols-3 gap-8 mb-12">
        {/* Quadro 1 */}
        <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-climb-orange">
          <div className="text-center">
            <p className="font-inter text-lg font-bold text-climb-gunmetal mb-4">
              "É até 10x mais barato manter um cliente do que conquistar um novo"
            </p>
            <p className="font-inter text-sm text-climb-eerie leading-relaxed">
              Invesp afirma que adquirir um novo cliente custa de 5x a 10x mais do que manter um atual.
            </p>
            <p className="font-inter text-sm text-climb-eerie leading-relaxed mt-2">
              Bain & Company reforça: fidelizar é mais rentável do que atrair.
            </p>
            <p className="font-inter text-xs text-gray-500 mt-4 italic">
              Fonte: Invesp / Bain & Company
            </p>
          </div>
        </div>

        {/* Quadro 2 */}
        <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-climb-orange">
          <div className="text-center">
            <p className="font-inter text-lg font-bold text-climb-gunmetal mb-4">
              "Clientes recorrentes representam 60% a 70% das vendas em restaurantes e delivery"
            </p>
            <p className="font-inter text-sm text-climb-eerie leading-relaxed">
              Segundo a Harvard Business School, aumentar a taxa de retenção em 5% pode elevar os lucros de 25% a 95%.
            </p>
            <p className="font-inter text-sm text-climb-eerie leading-relaxed mt-2">
              A National Restaurant Association mostra que clientes fiéis consomem mais vezes e com ticket médio maior.
            </p>
            <p className="font-inter text-xs text-gray-500 mt-4 italic">
              Fonte: Harvard Business Review / National Restaurant Association (EUA)
            </p>
          </div>
        </div>

        {/* Quadro 3 */}
        <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-climb-orange">
          <div className="text-center">
            <p className="font-inter text-lg font-bold text-climb-gunmetal mb-4">
              "Um lead só vira cliente entre o 3º e o 13º contato"
            </p>
            <p className="font-inter text-sm text-climb-eerie leading-relaxed">
              Salesforce Research afirma que 80% das vendas exigem de 5 a 12 follow-ups.
            </p>
            <p className="font-inter text-sm text-climb-eerie leading-relaxed mt-2">
              LinkedIn B2B Reports complementa que a maioria dos vendedores desiste após o 1º ou 2º contato.
            </p>
            <p className="font-inter text-xs text-gray-500 mt-4 italic">
              Fonte: Salesforce
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
};
