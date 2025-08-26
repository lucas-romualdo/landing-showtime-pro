import { Button } from "@/components/ui/button";

const Pricing = () => {
  return (
    <section className="section-alternate">
      <div className="container-custom px-4">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-8 text-foreground">
            Atenção: essa oportunidade de sair na frente não durará para sempre.
          </h2>
          
          <p className="text-lg text-muted-foreground mb-6">
            Esteja preparado antes que seus clientes e concorrentes saibam mais do que você:
          </p>
          
          <p className="text-lg font-semibold text-foreground mb-12">
            <strong>Esta oferta exclusiva para profissionais é por tempo limitado!</strong> Após o período esgotado de pré-venda para profissionais do setor solar, o manual será distribuído em todo o território nacional para o público consumidor— e você perderá a chance de sair na frente.
          </p>
          
          <div className="price-block">
            <p className="text-white font-bold text-4xl my-2">R$ 597 À VISTA</p>
            <p className="parcelas text-white font-bold text-2xl my-2">OU 12 X R$ 61,75</p>
            <div className="garantia">
              <span>GARANTIA RISCO ZERO!</span>
            </div>
          </div>
          
          <Button className="cta-button">
            QUERO SAIR NA FRENTE AGORA!
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;