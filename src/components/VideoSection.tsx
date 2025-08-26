import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";

const VideoSection = () => {
  return (
    <section className="section-alternate">
      <div className="container-custom px-4">
        <div className="text-center max-w-4xl mx-auto">
          <div className="bg-card/50 rounded-lg p-8 mb-8 border border-border">
            <div className="w-full max-w-md mx-auto mb-6">
              <div className="aspect-video bg-secondary rounded-lg flex items-center justify-center border border-border">
                <Play className="w-16 h-16 text-primary" />
              </div>
            </div>
            
            <p className="text-lg text-foreground mb-6">
              Para realmente sair na frente, é importante entender exatamente o que o Manual de Compra Profissional Solar Buy-Side ensinará ao seu cliente e por que o comprador pode dominar o jogo!
            </p>
            
            <p className="text-lg text-foreground mb-8">
              Descubra agora e veja como você pode usar esse conhecimento a seu favor:
            </p>
            
            <ul className="text-left max-w-2xl mx-auto mb-8 space-y-4">
              <li className="flex items-start gap-3 text-lg">
                <span className="text-primary font-bold">⚠️</span>
                <span>Os 3 grandes RISCOS ao comprar um sistema Solar.</span>
              </li>
              <li className="flex items-start gap-3 text-lg">
                <span className="text-green-500 font-bold">✅</span>
                <span>A importância de se tornar um comprador informado.</span>
              </li>
              <li className="flex items-start gap-3 text-lg">
                <span className="text-green-500 font-bold">✅</span>
                <span>A força de uma jornada de compra bem planejada.</span>
              </li>
            </ul>
            
            <Button className="cta-button">
              🎥 Assista (3min)
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;