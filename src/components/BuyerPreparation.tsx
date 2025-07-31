import { Button } from "@/components/ui/button";
import { Brain, Award, Shield } from "lucide-react";

const BuyerPreparation = () => {
  const buyerSkills = [
    {
      skill: "Conceitos essenciais para uma compra técnica e segura",
      focus: "Capacidade de analisar propostas com critérios técnicos"
    },
    {
      skill: "Reconhecimento de marcas e distribuidores de alta confiança", 
      focus: "Avaliação precisa da reputação e do suporte pós-venda"
    },
    {
      skill: "Critérios para selecionar empresas sérias e competentes",
      focus: "Tomada de decisão com segurança e embasamento técnico"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-8">
            E se você ainda duvida do que está em jogo, veja o que seus 
            <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
              clientes aprenderão em breve
            </span>
          </h2>
          <p className="text-xl text-foreground/80 mb-8">
            Você está preparado para continuar vendendo para esse novo perfil de comprador?
          </p>
        </div>

        <div className="max-w-6xl mx-auto mb-12">
          <div className="grid grid-cols-2 gap-4 mb-8">
            <div className="text-center p-4 bg-primary/10 rounded-lg border border-primary/30">
              <h3 className="text-lg font-semibold text-primary">
                O QUE O COMPRADOR VAI DOMINAR
              </h3>
            </div>
            <div className="text-center p-4 bg-primary/10 rounded-lg border border-primary/30">
              <h3 className="text-lg font-semibold text-primary">
                PRINCIPAIS FOCO E HABILIDADES
              </h3>
            </div>
          </div>

          <div className="space-y-4">
            {buyerSkills.map((item, index) => {
              const icons = [Brain, Award, Shield];
              const IconComponent = icons[index];
              
              return (
                <div key={index} className="grid grid-cols-2 gap-4 p-6 bg-card rounded-lg border border-border shadow-card hover:shadow-glow transition-all duration-300">
                  <div className="flex items-start gap-3">
                    <IconComponent className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                    <p className="text-card-foreground">{item.skill}</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-primary/20 rounded-full flex items-center justify-center mt-1 flex-shrink-0">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                    </div>
                    <p className="text-card-foreground font-medium">{item.focus}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="text-center">
          <Button variant="hero" size="lg" className="text-lg px-8 py-6">
            QUERO SAIR NA FRENTE AGORA!
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BuyerPreparation;