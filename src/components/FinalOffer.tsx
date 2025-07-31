import { Button } from "@/components/ui/button";
import { CheckCircle, Clock, Users, BookOpen } from "lucide-react";

const FinalOffer = () => {
  const offerItems = [
    "Oferta exclusiva para Profissional",
    "Acesso imediato ao Manual Solar Buy-Side", 
    "130 páginas técnicas + 160 tópicos interativos",
    "Método de jornada de compra completo em 4 fases",
    "Anexos técnicos exclusivos"
  ];

  return (
    <section className="py-20 bg-gradient-primary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-8 text-white">
            Por isso, não perca tempo nem posição no mercado. 
            Veja tudo que você recebe nesta oferta profissional exclusiva:
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg p-8 shadow-2xl">
            <div className="grid lg:grid-cols-2 gap-8">
              <div>
                <h3 className="text-3xl font-bold text-gray-800 mb-6">
                  Manual Solar Buy-Side
                </h3>
                
                <div className="space-y-4 mb-8">
                  {offerItems.map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-6 h-6 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700 text-lg">{item}</span>
                    </div>
                  ))}
                </div>

                <div className="bg-red-50 border border-red-200 rounded-lg p-6 mb-6">
                  <div className="flex items-center gap-3 mb-3">
                    <Clock className="w-6 h-6 text-red-500" />
                    <span className="font-semibold text-red-700">Oferta Limitada</span>
                  </div>
                  <p className="text-red-600">
                    Apenas 1.000 unidades na Pré-venda Profissional garantem essa oferta especial!
                  </p>
                </div>
              </div>

              <div className="flex flex-col justify-center">
                <div className="text-center bg-gray-50 rounded-lg p-8">
                  <div className="mb-6">
                    <div className="text-6xl font-bold text-primary mb-2">R$ 97</div>
                    <p className="text-gray-600">Investimento único</p>
                  </div>
                  
                  <Button size="lg" className="w-full text-lg py-6 bg-green-500 hover:bg-green-600 text-white">
                    QUERO APRENDER O BUY-SIDE!
                  </Button>
                  
                  <div className="mt-6 grid grid-cols-3 gap-4 text-center">
                    <div>
                      <BookOpen className="w-8 h-8 text-primary mx-auto mb-2" />
                      <div className="text-2xl font-bold text-primary">130</div>
                      <p className="text-xs text-gray-600">Páginas</p>
                    </div>
                    <div>
                      <Users className="w-8 h-8 text-primary mx-auto mb-2" />
                      <div className="text-2xl font-bold text-primary">160</div>
                      <p className="text-xs text-gray-600">Tópicos</p>
                    </div>
                    <div>
                      <CheckCircle className="w-8 h-8 text-primary mx-auto mb-2" />
                      <div className="text-2xl font-bold text-primary">4</div>
                      <p className="text-xs text-gray-600">Fases</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalOffer;