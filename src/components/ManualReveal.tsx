import { Button } from "@/components/ui/button";
import { Shield, AlertTriangle, TrendingUp, PlayCircle } from "lucide-react";

const ManualReveal = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-lg text-foreground/80 mb-8 max-w-4xl mx-auto">
            Para realmente sair na frente, é importante entender exatamente o que o Manual de Compra 
            Profissional Solar Buy-Side ensinará ao seu cliente e por que o comprador pode dominar o jogo!
          </p>
          
          <h2 className="text-3xl md:text-5xl font-bold mb-8 text-center">
            Descubra agora e veja como você pode usar esse conhecimento a seu favor:
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-card rounded-lg p-6 border border-border shadow-card hover:shadow-glow transition-all duration-300">
            <div className="flex items-start gap-3 mb-4">
              <span className="text-2xl">✅</span>
              <h3 className="text-xl font-semibold text-card-foreground">
                Os 3 grandes RISCOS
              </h3>
            </div>
            <p className="text-card-foreground/80">
              ao comprar um sistema Solar.
            </p>
          </div>

          <div className="bg-card rounded-lg p-6 border border-border shadow-card hover:shadow-glow transition-all duration-300">
            <div className="flex items-start gap-3 mb-4">
              <span className="text-2xl">✅</span>
              <h3 className="text-xl font-semibold text-card-foreground">
                A importância
              </h3>
            </div>
            <p className="text-card-foreground/80">
              de se tornar um comprador informado.
            </p>
          </div>

          <div className="bg-card rounded-lg p-6 border border-border shadow-card hover:shadow-glow transition-all duration-300">
            <div className="flex items-start gap-3 mb-4">
              <span className="text-2xl">✅</span>
              <h3 className="text-xl font-semibold text-card-foreground">
                A força
              </h3>
            </div>
            <p className="text-card-foreground/80">
              de uma jornada de compra bem planejada.
            </p>
          </div>
        </div>

        <div className="text-center">
          <div className="bg-primary/10 rounded-lg p-6 inline-flex items-center gap-4 border border-primary/30">
            <span className="text-2xl">🎥</span>
            <span className="text-lg font-medium text-foreground">
              Assista (3min)
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ManualReveal;