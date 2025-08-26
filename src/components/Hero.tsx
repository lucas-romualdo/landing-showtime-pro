import { Button } from "@/components/ui/button";
import { Sun, TrendingUp, Shield } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg"; // Certifique-se que a imagem está no local correto

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-hero"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
      	<div className="animate-fade-in">
        	<div className="mb-6">
          	<h2 className="text-2xl md:text-3xl font-bold text-primary-glow mb-4">
          	  SOLAR BUY-SIDE
          	</h2>
          	<h1 className="text-4xl md:text-6xl font-bold mb-6 text-white leading-tight">
          	  Transforme-se no Vendedor Ideal com o<br />
          	  <span className="bg-gradient-to-r from-primary-glow to-white bg-clip-text text-transparent">
            	  Manual de Compra Profissional Solar Buy-Side
          	  </span>
          	</h1>
        	</div>
        	
        	<p className="text-xl md:text-2xl text-foreground/90 mb-8 max-w-4xl mx-auto">
          	Entenda como pensa seu cliente e foge da guerra de preços!
        	</p>
        	
        	<p className="text-lg text-foreground/80 mb-6 max-w-4xl mx-auto leading-relaxed">
          	Pode parecer exagero, mas em breve cada vez mais compradores de sistema fotovoltaico estarão 
          	informados. Eles saberão comparar propostas com mais precisão do que você, examinarão 
          	cuidadosamente seus fornecedores e suas propostas tecnológicas e avaliarão de forma crítica 
          	a confiabilidade da sua empresa.
        	</p>
        	
        	<p className="text-lg text-foreground/80 mb-6 max-w-4xl mx-auto">
          	E quem não entender essa nova jornada de compra, perderá vendas.
        	</p>
        	
        	<p className="text-lg text-foreground/80 mb-8 max-w-4xl mx-auto">
          	<strong>A boa notícia?</strong> Ainda dá tempo para reverter essa situação.
        	</p>
        	
        	<div className="bg-primary/20 backdrop-blur-lg rounded-lg p-6 mb-10 max-w-4xl mx-auto border border-primary/30">
          	<p className="text-lg text-white flex items-center gap-2">
  	        	📘 Com o Manual de Compra Profissional Solar Buy-Side, você verá o processo de compra pelos 
  	        	olhos do cliente — ganhando técnica, confiabilidade e mais vendas.
          	</p>
        	</div>
        	
        	{/* CTA Buttons */}
        	<div className="flex flex-col sm:flex-row gap-4 justify-center">
        	  <Button variant="hero" size="lg" className="text-lg px-8 py-6">
          	  QUERO SAIR NA FRENTE AGORA!
        	  </Button>
        	</div>
      	</div>
    	</div>
  	  
  	  {/* Floating Animation Elements */}
  	  <div className="absolute top-20 left-10 w-3 h-3 bg-primary rounded-full animate-float opacity-60"></div>
  	  <div className="absolute top-32 right-20 w-2 h-2 bg-primary-glow rounded-full animate-float opacity-40" style={{ animationDelay: '1s' }}></div>
  	  <div className="absolute bottom-40 left-1/4 w-4 h-4 bg-primary rounded-full animate-float opacity-30" style={{ animationDelay: '2s' }}></div>
  	</section>
  );
};

export default Hero;