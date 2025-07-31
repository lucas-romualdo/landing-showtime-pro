import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check, Star } from "lucide-react";

const Pricing = () => {
  const plans = [
    {
      name: "Estudante",
      price: "R$ 197",
      originalPrice: "R$ 397",
      description: "Perfeito para estudantes e iniciantes na carreira tech",
      popular: false,
      features: [
        "Acesso a todas as palestras",
        "Material digital completo",
        "Certificado de participação",
        "Acesso ao networking básico",
        "Coffee breaks inclusos"
      ],
      buttonText: "Escolher Plano"
    },
    {
      name: "Profissional",
      price: "R$ 497",
      originalPrice: "R$ 797",
      description: "Ideal para profissionais que querem se destacar no mercado",
      popular: true,
      features: [
        "Tudo do plano Estudante",
        "Acesso VIP aos workshops",
        "Sessões de mentoria 1:1",
        "Acesso exclusivo ao app do evento",
        "Almoços premium inclusos",
        "Kit de brindes exclusivo",
        "Acesso gravações por 6 meses"
      ],
      buttonText: "Mais Popular"
    },
    {
      name: "Enterprise",
      price: "R$ 1.297",
      originalPrice: "R$ 1.897",
      description: "Para líderes e empresas que buscam inovação",
      popular: false,
      features: [
        "Tudo do plano Profissional",
        "Acesso às salas executivas",
        "Reuniões privadas com speakers",
        "Relatório personalizado de insights",
        "Consultoria pós-evento (2h)",
        "Branding da empresa no evento",
        "Convites para eventos exclusivos"
      ],
      buttonText: "Escolher Plano"
    }
  ];

  return (
    <section className="py-20 bg-gradient-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <Badge variant="outline" className="mb-4">
            Ingressos
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Escolha Seu <span className="text-primary">Plano</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Invista no seu futuro profissional. Aproveite os preços promocionais válidos 
            apenas até o final do mês!
          </p>
          <Badge className="bg-red-600 text-white">
            🔥 Oferta Limitada - 50% OFF
          </Badge>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card 
              key={index} 
              className={`p-8 hover:shadow-glow transition-all duration-300 animate-scale-in relative ${
                plan.popular ? 'ring-2 ring-primary shadow-glow' : ''
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-primary text-primary-foreground px-6 py-2">
                    <Star className="w-4 h-4 mr-1" />
                    Mais Popular
                  </Badge>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-muted-foreground mb-4">{plan.description}</p>
                
                <div className="mb-4">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-muted-foreground line-through ml-2">{plan.originalPrice}</span>
                </div>
                
                <Button 
                  variant={plan.popular ? "hero" : "default"} 
                  className="w-full mb-6"
                  size="lg"
                >
                  {plan.buttonText}
                </Button>
              </div>

              <ul className="space-y-3">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Dúvidas sobre os planos? Entre em contato conosco!
          </p>
          <Button variant="outline">
            Falar com Especialista
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;