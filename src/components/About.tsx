import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Zap, Globe, Rocket, Brain } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Inovação",
      description: "Descubra as últimas tendências e tecnologias emergentes que estão moldando o futuro."
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Networking",
      description: "Conecte-se com profissionais, empreendedores e líderes de pensamento da indústria."
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: "Startups",
      description: "Conheça startups revolucionárias e oportunidades de investimento únicas."
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Conhecimento",
      description: "Aprenda com especialistas através de workshops, palestras e discussões profundas."
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <Badge variant="outline" className="mb-4">
            Sobre o Evento
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Onde o Futuro da <span className="text-primary">Tecnologia</span> Acontece
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            TechFuture 2024 é mais do que um evento - é uma experiência transformadora que reúne 
            mentes brilhantes, inovações disruptivas e oportunidades únicas em um só lugar.
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
          <h3 className="text-3xl font-bold mb-4">Por que participar?</h3>
          <div className="grid md:grid-cols-3 gap-8 mt-8">
            <div>
              <div className="text-4xl font-bold text-primary mb-2">50+</div>
              <p className="text-muted-foreground">Palestras e Workshops</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">30+</div>
              <p className="text-muted-foreground">Speakers Renomados</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">5000+</div>
              <p className="text-muted-foreground">Participantes Esperados</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;