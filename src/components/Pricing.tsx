import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check, ShieldCheck } from "lucide-react";

const Pricing = () => {
  // As informações do plano foram extraídas do Bloco 7 e 11 do documento.
  const plan = {
    name: "Acesso Profissional",
    price: "R$ 597",
    installments: "ou 12x de R$ 61,75",
    description: "Acesso vitalício ao manual completo e todos os anexos.",
    features: [
      "Acesso imediato ao Manual Solar Buy-Side",
      "130 páginas técnicas + 160 tópicos interativos",
      "Método de jornada de compra completo em 4 fases",
      "Anexos técnicos exclusivos",
      "Garantia Risco Zero de 7 dias"
    ],
    buttonText: "QUERO SAIR NA FRENTE AGORA!"
  };

  return (
    <section className="py-20 bg-gradient-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <Badge variant="outline" className="mb-4">
            Oferta Exclusiva
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Sua Oportunidade de Sair na <span className="text-primary">Frente</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Esta oferta exclusiva para profissionais é por tempo limitado! Esteja preparado antes que seus clientes e concorrentes saibam mais do que você.
          </p>
          <Badge className="bg-red-600 text-white">
            🔥 Pré-venda para Profissionais
          </Badge>
        </div>

        <div className="max-w-md mx-auto">
          <Card 
            className="p-8 hover:shadow-glow transition-all duration-300 animate-scale-in relative ring-2 ring-primary shadow-glow"
          >
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <p className="text-muted-foreground mb-4">{plan.description}</p>
              
              <div className="mb-4">
                <span className="text-4xl font-bold">{plan.price}</span>
                <p className="text-muted-foreground font-semibold">{plan.installments}</p>
              </div>
              
              <Button 
                variant="hero"
                className="w-full mb-6"
                size="lg"
              >
                {plan.buttonText}
              </Button>
            </div>

            <ul className="space-y-3 mb-8">
              {plan.features.map((feature, featureIndex) => (
                <li key={featureIndex} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm">{feature}</span>
                </li>
              ))}
            </ul>

            <div className="text-center">
              <div className="flex items-center justify-center gap-2 mb-2">
                <ShieldCheck className="w-5 h-5 text-green-500" />
                <span className="font-bold text-lg">GARANTIA RISCO ZERO!</span>
              </div>
              <p className="text-xs text-muted-foreground">
                Compra Segura | Satisfação Garantida | Privacidade Protegida
              </p>
              <p className="text-xs text-muted-foreground mt-2">
                💳 Visa, MasterCard, Pix e Boleto
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Pricing;