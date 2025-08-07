import { Award, Users, Briefcase } from "lucide-react";
import francisImage from "@/assets/Francis Poloni LP PRO.jpg";

const AuthorCredibility = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Esse conteúdo só é possível porque foi criado por quem viveu os 
            <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
              dois lados da mesa — o do comprador e o do vendedor!
            </span>
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-center">
              <img 
                src={francisImage} 
                alt="Francis Poloni - Consultor Buy-Side e Sell-Side" 
                className="w-full max-w-sm mx-auto rounded-lg shadow-lg mb-6"
              />
            </div>
            
            <div>
              <h3 className="text-2xl font-bold mb-4 text-foreground">
                Francis Poloni - Consultor Buy-Side e Sell-Side
              </h3>
              <p className="text-lg text-foreground/80 mb-8">
                Atua desde 2018 no setor de integração fotovoltaica e consultoria em investimento onde assessorou tanto no lado do comprador (Buy-Side) quanto no lado do vendedor (Sell-Side), ajudando na tomada de decisões inteligentes e seguras.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="text-center">
              <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-primary" />
              </div>
              <h4 className="text-xl font-bold mb-2">6+</h4>
              <p className="text-foreground/80">Anos de experiência</p>
            </div>
            
            <div className="text-center">
              <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Briefcase className="w-8 h-8 text-primary" />
              </div>
              <h4 className="text-xl font-bold mb-2">100+</h4>
              <p className="text-foreground/80">Projetos assessorados</p>
            </div>
            
            <div className="text-center">
              <div className="bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <h4 className="text-xl font-bold mb-2">2</h4>
              <p className="text-foreground/80">Lados da mesa</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AuthorCredibility;