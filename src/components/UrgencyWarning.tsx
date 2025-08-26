import { Button } from "@/components/ui/button";
import { AlertTriangle, Clock } from "lucide-react";

const UrgencyWarning = () => {
  return (
    <section className="py-20 bg-destructive/5">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-destructive/10 border border-destructive/30 rounded-lg p-8 text-center">
            <div className="flex items-center justify-center gap-3 mb-6">
              <AlertTriangle className="w-8 h-8 text-destructive" />
              <h2 className="text-2xl md:text-3xl font-bold text-destructive">
              	Atenção: essa oportunidade de sair na frente não durará para sempre.
              </h2>
            </div>
            
            <p className="text-lg text-foreground mb-6">
            	Esteja preparado antes que seus clientes e concorrentes saibam mais do que você:
            </p>
            
            <div className="bg-destructive/5 rounded-lg p-6 border border-destructive/20">
            	<p className="text-foreground leading-relaxed">
            	  Esta oferta exclusiva para profissionais é por tempo limitado! Após o período esgotado de pré-venda 
            	  para profissionais do setor solar, o manual será distribuído em todo o território nacional 
            	  para o público consumidor— e você perderá a chance de sair na frente.
            	</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UrgencyWarning;