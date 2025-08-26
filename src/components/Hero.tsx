import { Button } from "@/components/ui/button";
import { Sun, TrendingUp, Shield } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg"; // Certifique-se que a imagem está no local correto

const Hero = () => {
  return (
    <section className="section-alternate min-h-screen flex items-center justify-center bg-background">
      <div className="container-custom px-4">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-8 text-primary">
            SOLAR BUY-SIDE
          </h1>
          
          <h2 className="text-2xl md:text-4xl font-bold mb-6 text-foreground">
            Transforme-se no Vendedor Ideal com o 
            <br />
            <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
              Manual de Compra Profissional Solar Buy-Side
            </span>
          </h2>
          
          <p className="text-xl md:text-2xl mb-12 text-muted-foreground font-semibold">
            Entenda como pensa seu cliente e foge da guerra de preços!
          </p>
          
          <div className="space-y-6 mb-12 text-lg text-muted-foreground max-w-3xl mx-auto">
            <p>
              Pode parecer exagero, mas em breve cada vez mais compradores de sistema fotovoltaico estarão informados.
            </p>
            <p>
              Eles saberão comparar propostas com mais precisão do que você, examinarão cuidadosamente seus fornecedores e suas propostas tecnológicas e avaliarão de forma crítica a confiabilidade da sua empresa.
            </p>
            <p className="font-semibold text-foreground">
              E quem não entender essa nova jornada de compra, perderá vendas.
            </p>
            <p className="text-primary font-semibold">
              A boa notícia? Ainda dá tempo para reverter essa situação.
            </p>
          </div>
          
          <div className="bg-card/50 rounded-lg p-6 mb-8 border border-border">
            <p className="text-lg mb-4 text-foreground">
              📘 Com o Manual de Compra Profissional Solar Buy-Side, você verá o processo de compra pelos olhos do cliente — ganhando técnica, confiabilidade e mais vendas.
            </p>
          </div>
          
          <Button className="cta-button">
            QUERO SAIR NA FRENTE AGORA!
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;