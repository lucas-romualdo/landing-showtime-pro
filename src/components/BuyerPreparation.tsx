import { CheckCircle } from "lucide-react";

const BuyerPreparation = () => {
  const buyerSkills = [
    {
      skill: "Conceitos essenciais para uma compra técnica e segura",
      result: "Capacidade de analisar propostas com critérios técnicos"
    },
    {
      skill: "Reconhecimento de marcas e distribuidores de alta confiança",
      result: "Avaliação precisa da reputação e do suporte pós-venda"
    },
    {
      skill: "Critérios para selecionar empresas sérias e competentes",
      result: "Tomada de decisão com segurança e embasamento técnico"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            E se você ainda duvida do que está em jogo, veja o que seus clientes aprenderão em breve
          </h2>
          <p className="text-xl text-foreground/80 mb-8">
            Você está preparado para continuar vendendo para esse novo perfil de comprador?
          </p>
        </div>

        <div className="max-w-6xl mx-auto mb-16">
          <div className="grid grid-cols-2 gap-4 mb-8">
            <div className="text-center">
              <h4 className="text-lg font-semibold text-primary mb-2">
                O QUE O COMPRADOR VAI DOMINAR
              </h4>
            </div>
            <div className="text-center">
              <h4 className="text-lg font-semibold text-primary mb-2">
                PRINCIPAIS FOCO E HABILIDADES
              </h4>
            </div>
          </div>

          {buyerSkills.map((skill, index) => (
            <div key={index} className="grid grid-cols-2 gap-4 p-4 bg-card rounded-lg border border-border mb-4">
              <div className="text-card-foreground">
                {skill.skill}
              </div>
              <div className="flex items-start gap-2 text-card-foreground">
                <CheckCircle className="w-5 h-5 text-green-500 mt-1 flex-shrink-0" />
                <span>{skill.result}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BuyerPreparation;