import { Button } from "@/components/ui/button";

const FinalOffer = () => {
  return (
    <section className="py-20 bg-primary/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Por isso, não perca tempo nem posição no mercado. 
            <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
              Veja tudo que você recebe nesta oferta profissional:
            </span>
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-card rounded-lg p-8 border border-border shadow-lg">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-4 text-primary">
                💥 Oferta exclusiva para Profissional
              </h3>
            </div>

            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3">
                <span className="text-green-500">🔓</span>
                <span className="text-lg">Acesso imediato ao Manual Solar Buy-Side</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-green-500">📘</span>
                <span className="text-lg">130 páginas técnicas + 160 tópicos interativos</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-green-500">🎯</span>
                <span className="text-lg">Método de jornada de compra completo em 4 fases</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-green-500">🎁</span>
                <span className="text-lg">Anexos técnicos exclusivos</span>
              </div>
            </div>
            
            <div className="bg-primary/10 rounded-lg p-6 mb-8 text-center border border-primary/30">
              <p className="text-lg font-semibold text-foreground">
                Apenas 1.000 unidades na Pré-venda Profissional garantem essa oferta especial!
              </p>
            </div>

            <div className="text-center">
              <Button size="lg" className="text-lg px-8 py-6 mb-4">
                APROVEITE ESSA OFERTA ESPECIAL!
              </Button>
              <p className="text-sm text-foreground/60 font-medium">
                COMPRA AGORA
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalOffer;