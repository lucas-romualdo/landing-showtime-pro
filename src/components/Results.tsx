import { Button } from "@/components/ui/button";
import { CheckCircle, TrendingUp, Users, Award } from "lucide-react";
import rodrigoImage from "@/assets/Integrador Rodrigo SP.png"; // Certifique-se que a imagem está no local correto

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

        <div className="max-w-4xl mx-auto mb-16">
          <div className="bg-card rounded-lg border border-border overflow-hidden">
            {/* Table Header */}
            <div className="grid grid-cols-2 bg-primary text-primary-foreground">
              <div className="p-4 text-center font-bold text-lg border-r border-primary-foreground/20">
                O QUE VOCÊ, VENDEDOR, VAI DOMINAR
              </div>
              <div className="p-4 text-center font-bold text-lg">
                QUAIS SERÃO OS RESULTADOS
              </div>
            </div>
            
            {/* Table Rows */}
            {benefits.map((benefit, index) => (
              <div key={index} className="grid grid-cols-2 border-b border-border last:border-b-0">
                <div className="p-4 border-r border-border text-card-foreground">
                  {benefit.skill}
                </div>
                <div className="p-4 flex items-start gap-2 text-card-foreground">
                  <span className="text-green-500 mt-1 flex-shrink-0">✅</span>
                  <span>{benefit.result}</span>
                </div>
              </div>
            ))}
          </div>
      	</div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="text-center">
            <img 
              src={rodrigoImage} 
              alt="Rodrigo, integrador de São Paulo"
              className="w-full max-w-sm mx-auto rounded-lg shadow-lg mb-6"
            />
          </div>
          
          <div className="bg-card rounded-lg p-6 border border-border">
            <p className="text-lg font-semibold mb-4 text-card-foreground">
              Os benefícios são claros, e a prática comprova. Veja a experiência de Rodrigo, integrador de SP:
            </p>
            
            <blockquote className="text-card-foreground/80 italic mb-4 border-l-4 border-primary pl-4">
              "Minha maior dor era a concorrência acirrada e a baixa conversão. O Manual Buy-Side foi um divisor de águas: em um mês, fechei 5 sistemas a mais!"
            </blockquote>
            
            <p className="text-card-foreground font-medium">
              Faça como ele: Imersão no Manual de Compra Solar Buy-Side: pensa como seu cliente e torne-se um Vendedor de Alta Performance!
            </p>
          </div>
        </div>

        <div className="text-center bg-primary/10 rounded-lg p-8 border border-primary/30 mt-12">
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