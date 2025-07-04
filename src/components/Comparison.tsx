
import { Section } from "./Section";
import { Check, X } from "lucide-react";

export const Comparison = () => {
  const comparisons = [
    { feature: "API oficial da Meta", climbUp: true, competitors: false },
    { feature: "Sem bloqueios", climbUp: true, competitors: false },
    { feature: "Suporte humanizado", climbUp: true, competitors: false },
    { feature: "Treinamento incluso", climbUp: true, competitors: false },
    { feature: "Interface simples", climbUp: true, competitors: false },
    { feature: "Resultados rápidos", climbUp: true, competitors: false }
  ];

  return (
    <Section>
      <div className="text-center mb-12">
        <h2 className="font-satoshi text-4xl md:text-5xl font-bold text-climb-gunmetal mb-8 flex items-center justify-center gap-4">
          <img src="/lovable-uploads/02436edb-8867-441b-88b4-b2a14f9e8231.png" alt="Climb Up" className="h-20" />
          vs Concorrentes
        </h2>
      </div>

      <div className="bg-white rounded-lg shadow-lg overflow-hidden max-w-4xl mx-auto">
        <div className="grid grid-cols-3 bg-climb-gunmetal text-white">
          <div className="p-4 font-satoshi font-bold text-center">Funcionalidade</div>
          <div className="p-4 font-satoshi font-bold text-center bg-climb-orange">Climb Up ✅</div>
          <div className="p-4 font-satoshi font-bold text-center">Concorrentes ❌</div>
        </div>
        
        {comparisons.map((item, index) => (
          <div key={index} className={`grid grid-cols-3 ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}>
            <div className="p-4 font-source-sans text-climb-eerie border-r">{item.feature}</div>
            <div className="p-4 text-center border-r bg-green-50">
              {item.climbUp ? (
                <Check className="w-6 h-6 text-green-500 mx-auto" />
              ) : (
                <X className="w-6 h-6 text-red-500 mx-auto" />
              )}
            </div>
            <div className="p-4 text-center bg-red-50">
              {!item.competitors ? (
                <X className="w-6 h-6 text-red-500 mx-auto" />
              ) : (
                <Check className="w-6 h-6 text-green-500 mx-auto" />
              )}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};
