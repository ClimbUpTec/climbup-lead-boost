import { Section } from "./Section";
export const StatisticsSection = () => {
  return <Section>
      <div className="text-center mb-12">
        <h2 className="font-inter text-4xl md:text-5xl font-bold text-climb-gunmetal mb-8">
          Porque reaproveitar minha base?
        </h2>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mb-12">
        {/* Quadro 1 */}
        <div className="bg-white p-6 rounded-lg shadow-lg border-l-4 border-climb-orange">
          <div className="text-center">
            <p className="font-inter text-lg font-bold text-climb-gunmetal mb-4">&quot;É até 25x mais barato vender para o mesmo cliente do que conquistar um novo&quot;</p>
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
            <p className="font-inter text-xs text-gray-500 mt-4 italic">
              Fonte: Salesforce
            </p>
          </div>
        </div>
      </div>
    </Section>;
};