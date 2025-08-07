import { Button } from "@/components/ui/button";
import manualCover from "@/assets/Capa Manual definitiva 09.07.2025.jpg";

const ManualInfo = () => {
  return (
    <section className="py-20 bg-card/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Manual Solar Buy-Side: Sua ferramenta essencial para todos os profissionais do setor solar.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div className="order-2 md:order-1">
            <img 
              src={manualCover} 
              alt="Capa do Manual de Compra Profissional Solar Buy-Side"
              className="w-full max-w-md mx-auto rounded-lg shadow-lg"
            />
          </div>
          
          <div className="order-1 md:order-2">
            <p className="text-lg text-foreground/80 mb-8 leading-relaxed">
              O Manual de Compra Profissional Solar Buy-Side é uma leitura essencial para profissionais do setor de vendas (Sell-Side) que desejam se destacar em um mercado ultracompetitivo.
            </p>
            
            <p className="text-lg text-foreground/80 mb-8 leading-relaxed">
              Ao proporcionar uma imersão na jornada de compra sob a ótica do comprador, este manual oferece uma compreensão estratégica dos critérios, motivações e desafios enfrentados pelo lado comprador (Buy-Side).
            </p>
            
            <p className="text-lg text-foreground/80 mb-8 leading-relaxed">
              Ao dominar o conceito Buy-Side, vendedores estarão aptos a lapidar sua abordagem comercial, entregar valor real, distanciar-se da briga por preço e elevar sua credibilidade no relacionamento com os clientes.
            </p>
            
            <div className="text-center">
              <Button size="lg" className="text-lg px-8 py-4">
                QUERO ME DIFERENCIAR!
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ManualInfo;