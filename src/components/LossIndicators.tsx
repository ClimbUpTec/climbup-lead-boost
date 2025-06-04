
import { Section } from "./Section";
import { AlertTriangle } from "lucide-react";

export const LossIndicators = () => {
  const indicators = [
    "Sua base de leads está parada",
    "Você investe em tráfego, mas não reaproveita os leads", 
    "Faz tudo no manual e não consegue escalar",
    "Vende uma vez, mas não tem recompra",
    "Só atrai novos, mas não nutre os antigos",
    "Usa ferramentas baratinhas que vivem sendo bloqueadas"
  ];

  return (
    <Section background="dark">
      <div className="text-center mb-12">
        <h2 className="font-satoshi text-4xl md:text-5xl font-bold text-white mb-8">
          Você está <span className="text-climb-orange">perdendo vendas</span> se...
        </h2>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {indicators.map((indicator, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
            <div className="flex items-start">
              <AlertTriangle className="w-6 h-6 text-red-500 mr-3 mt-1 flex-shrink-0" />
              <p className="font-open-sans text-climb-eerie">{indicator}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};
