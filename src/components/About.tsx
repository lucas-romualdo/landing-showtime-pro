import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Users, Briefcase, TrendingUp, Building } from "lucide-react";

const About = () => {
  // Substituindo os 'features' pelos benefícios e público-alvo do manual
  const features = [
    {
      icon: <Building className="w-8 h-8" />,
      title: "Empresas de Integração",
      description: "Venda mais valor, fuja da guerra de preços e feche mais projetos com confiança."
    },
    {
      icon: <Briefcase className="w-8 h-8" />,
      title: "Representantes Comerciais",
      description: "Maximize sua taxa de conversão e fortaleça seu posicionamento de preço no mercado."
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Empreendedores Iniciantes",
      description: "Comece com o pé direito e construa um negócio sólido e lucrativo desde o primeiro passo."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Fabricantes e Distribuidores",
      description: "Compreenda a jornada do cliente final e garanta a preferência pela sua marca."
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <Badge variant="outline" className="mb-4">
            Conhecimento Estratégico
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Entenda a Mente do seu <span className="text-primary">Cliente</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            [cite_start]O Manual Solar Buy-Side é uma imersão completa na perspectiva do comprador [cite: 53][cite_start], a ferramenta definitiva para profissionais que desejam se destacar em um mercado ultracompetitivo[cite: 60].
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="p-6 hover:shadow-glow transition-all duration-300 animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="text-primary mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </Card>
          ))}
        </div>

        <div className="mt-16 bg-gradient-secondary rounded-2xl p-8 md:p-12 text-center">
          <h3 className="text-3xl font-bold mb-4">O Manual em Números</h3>
          <div className="grid md:grid-cols-3 gap-8 mt-8">
            <div>
              <div className="text-4xl font-bold text-primary mb-2">130+</div>
              [cite_start]<p className="text-muted-foreground">Páginas de conteúdo técnico e estratégico [cite: 79]</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">160+</div>
              [cite_start]<p className="text-muted-foreground">Tópicos organizados para consulta rápida [cite: 80]</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">75+</div>
              [cite_start]<p className="text-muted-foreground">Compradores que já usaram e aprovaram [cite: 114]</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;