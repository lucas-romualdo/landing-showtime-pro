import { Button } from "@/components/ui/button";
import { CheckCircle, TrendingUp, Users, Award } from "lucide-react";

const Results = () => {
  const benefits = [
    {
      skill: "Compreender profundamente as dores, objeções e motivações do cliente",
      result: "Apresentações mais persuasivas e personalizadas"
    },
    {
      skill: "Adotar uma postura mais consultiva, transparente e centrada na realidade do cliente",
      result: "Mais confiança, conexão e autoridade no processo de venda"
    },
    {
      skill: "Demonstrar com clareza o valor técnico e econômico da solução",
      result: "Aumento da taxa de conversão e menor dependência de desconto"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-8">
            Mas o que essa imersão representa na prática para o seu 
            <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
              dia a dia como vendedor?
            </span>
          </h2>
          <p className="text-xl text-foreground/80 mb-8">
            Veja os resultados concretos que você pode alcançar ao aplicar o Manual Solar Buy-Side no seu processo de venda.
          </p>
          
          <Button variant="hero" size="lg" className="text-lg px-8 py-6 mb-12">
            QUERO ME DIFERENCIAR!
          </Button>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <div className="bg-primary/10 rounded-lg p-8 border border-primary/30">
              <h3 className="text-2xl font-bold text-foreground mb-6">
                O Manual de Compra Profissional Solar Buy-Side
              </h3>
              <p className="text-foreground/80 leading-relaxed mb-6">
                é uma leitura essencial para profissionais do setor de vendas (Sell-Side) que desejam se destacar 
                em um mercado ultracompetitivo.
              </p>
              <p className="text-foreground/80 leading-relaxed mb-6">
                Ao proporcionar uma imersão na jornada de compra sob a ótica do comprador, este manual oferece uma 
                compreensão estratégica dos critérios, motivações e desafios enfrentados pelo lado comprador (Buy-Side).
              </p>
              <p className="text-foreground/80 leading-relaxed">
                Ao dominar o conceito Buy-Side, vendedores estarão aptos a lapidar sua abordagem comercial, entregar 
                valor real, distanciar-se da briga por preço e elevar sua credibilidade no relacionamento com os clientes.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="text-center">
                <h4 className="text-lg font-semibold text-primary mb-2">
                  O QUE VOCÊ, VENDEDOR, VAI DOMINAR
                </h4>
              </div>
              <div className="text-center">
                <h4 className="text-lg font-semibold text-primary mb-2">
                  QUAIS SERÃO OS RESULTADOS
                </h4>
              </div>
            </div>

            {benefits.map((benefit, index) => (
              <div key={index} className="grid grid-cols-2 gap-4 p-4 bg-card rounded-lg border border-border">
                <div className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <p className="text-sm text-card-foreground">{benefit.skill}</p>
                </div>
                <div className="flex items-start gap-2">
                  <span className="text-green-500 mt-1 flex-shrink-0">✅</span>
                  <p className="text-sm text-card-foreground font-medium">{benefit.result}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center bg-primary/10 rounded-lg p-8 border border-primary/30">
          <p className="text-lg text-foreground mb-4">
            A experiência de Rodrigo é apenas um exemplo do poder deste Manual. Ele é uma ponte entre o comprador 
            bem informado e o vendedor preparado — impulsionando negociações justas e satisfatórias.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Results;