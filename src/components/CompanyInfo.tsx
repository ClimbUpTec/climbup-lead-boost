
import { Section } from "./Section";

export const CompanyInfo = () => {
  return (
    <Section background="light">
      <div className="text-center">
        <h2 className="font-open-sans text-4xl md:text-5xl font-bold text-climb-gunmetal mb-6">
          Quem Somos
        </h2>
        
        <p className="font-open-sans text-xl text-climb-eerie mb-12">
          A Climb Up transformamos seu WhatsApp em canal de vendas escalável.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-5xl font-bold text-climb-orange mb-2">+200</div>
            <p className="font-open-sans text-climb-eerie">empresas ativas</p>
          </div>
          
          <div className="text-center">
            <div className="text-5xl font-bold text-climb-orange mb-2">+2Mi</div>
            <p className="font-open-sans text-climb-eerie">mensagens/mês</p>
          </div>
          
          <div className="text-center">
            <div className="text-5xl font-bold text-climb-orange mb-2">+200k</div>
            <p className="font-open-sans text-climb-eerie">interações reais/mês</p>
          </div>
          
          <div className="text-center">
            <div className="text-5xl font-bold text-climb-orange mb-2">100%</div>
            <p className="font-open-sans text-climb-eerie">suporte humano</p>
          </div>
        </div>
      </div>
    </Section>
  );
};
