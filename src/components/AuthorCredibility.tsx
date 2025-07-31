import { Award, TrendingUp, Users } from "lucide-react";

const AuthorCredibility = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-8">
            Esse conteúdo só é possível porque foi criado por quem 
            <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
              viveu os dois lados da mesa
            </span> — o do comprador e o do vendedor!
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8 items-center">
            <div className="lg:col-span-2">
              <div className="bg-card rounded-lg p-8 border border-border shadow-card">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center text-white text-2xl font-bold">
                    FP
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-card-foreground">
                      Francis Poloni
                    </h3>
                    <p className="text-primary text-lg font-medium">
                      Consultor Buy-Side e Sell-Side
                    </p>
                  </div>
                </div>
                
                <p className="text-card-foreground/80 leading-relaxed">
                  Atua desde 2018 no setor de integração fotovoltaica e consultoria em investimento onde 
                  assessorou tanto no lado do comprador (Buy-Side) quanto no lado do vendedor (Sell-Side), 
                  ajudando na tomada de decisões inteligentes e seguras.
                </p>
                
                <div className="grid md:grid-cols-3 gap-4 mt-6">
                  <div className="text-center p-4 bg-primary/10 rounded-lg">
                    <Award className="w-8 h-8 text-primary mx-auto mb-2" />
                    <div className="text-2xl font-bold text-primary">6+</div>
                    <p className="text-sm text-card-foreground/70">Anos de experiência</p>
                  </div>
                  <div className="text-center p-4 bg-primary/10 rounded-lg">
                    <TrendingUp className="w-8 h-8 text-primary mx-auto mb-2" />
                    <div className="text-2xl font-bold text-primary">100+</div>
                    <p className="text-sm text-card-foreground/70">Projetos assessorados</p>
                  </div>
                  <div className="text-center p-4 bg-primary/10 rounded-lg">
                    <Users className="w-8 h-8 text-primary mx-auto mb-2" />
                    <div className="text-2xl font-bold text-primary">2</div>
                    <p className="text-sm text-card-foreground/70">Lados da mesa</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-1">
              <div className="bg-primary/10 rounded-lg p-6 border border-primary/30">
                <h4 className="text-xl font-bold text-primary mb-4">
                  Experiência Única
                </h4>
                <ul className="space-y-3 text-foreground/80">
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span>Consultor Buy-Side especializado</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span>Consultor Sell-Side experiente</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span>Visão 360° do mercado solar</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span>Estratégias comprovadas</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AuthorCredibility;