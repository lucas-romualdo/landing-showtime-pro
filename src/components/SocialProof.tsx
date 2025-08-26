import { MapPin, Users, Star, Quote } from "lucide-react";

const SocialProof = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-8">
          	Não é teoria. Veja o que dizem 
          	<span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
          	  compradores que já aplicaram o Manual na prática!
          	</span>
          </h2>
          <p className="text-xl text-foreground/80 mb-8">
          	Cada sorriso conta uma experiência. Clique nas fotos e veja como o manual fez a diferença.
          </p>
        </div>

        <div className="max-w-4xl mx-auto mb-12">
          <div className="grid md:grid-cols-3 gap-6 mb-8">
          	<div className="text-center p-6 bg-primary/10 rounded-lg border border-primary/30">
          	  <div className="text-3xl font-bold text-primary mb-2">75+</div>
          	  <p className="text-foreground/80">Compradores testaram o manual</p>
          	</div>
          	<div className="text-center p-6 bg-primary/10 rounded-lg border border-primary/30">
          	  <div className="text-3xl font-bold text-primary mb-2">14</div>
          	  <p className="text-foreground/80">Estados do Brasil</p>
          	</div>
          	<div className="text-center p-6 bg-primary/10 rounded-lg border border-primary/30">
          	  <div className="text-3xl font-bold text-primary mb-2">100%</div>
          	  <p className="text-foreground/80">Clientes satisfeitos</p>
          	</div>
        	</div>

        	<div className="bg-card rounded-lg p-8 border border-border shadow-card">
        	  <div className="flex items-center gap-4 mb-6">
        		<Users className="w-8 h-8 text-primary" />
        		<div>
        		  <h3 className="text-2xl font-bold text-card-foreground">
        			Mais de 75 compradores de sistema já experimentaram o sucesso com o Manual Solar Buy-Side!
        		  </h3>
        		</div>
        	  </div>
        	  
        	  <div className="grid md:grid-cols-2 gap-6 mb-6">
        		<div className="flex items-center gap-3">
        		  <MapPin className="w-5 h-5 text-primary" />
        		  <span className="text-card-foreground">
        			Testado em mais de 14 estados do Brasil por clientes residenciais e empresariais.
        		  </span>
        		</div>
        		<div className="flex items-center gap-3">
        		  <Star className="w-5 h-5 text-primary" />
        		  <span className="text-card-foreground">
        			Criado por quem conhece o lado do comprador e do vendedor!
        		  </span>
        		</div>
        	  </div>

        	  <div className="bg-primary/5 rounded-lg p-6 border border-primary/20">
        		<div className="flex items-start gap-4">
        		  <Quote className="w-8 h-8 text-primary mt-1 flex-shrink-0" />
        		  <div>
        			<div className="flex items-center gap-4 mb-4">
        			  <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
        				<span className="text-primary font-bold text-lg">R</span>
        			  </div>
        			  <div>
        				<p className="font-semibold text-card-foreground">Rogério</p>
        				<p className="text-card-foreground/60 text-sm">Campinas</p>
        			  </div>
        			</div>
        			
        			<h4 className="text-lg font-semibold text-primary mb-3">
        			  "Sem exagero: o manual valeu cada página!"
        			</h4>
        			
        			<p className="text-card-foreground/80 leading-relaxed">
        			  Nunca tinha tido contato com energia solar e tinha receio de tomar decisão errada. 
        			  Mas, ao começar a ler o manual, tudo mudou. O conteúdo é claro, estruturado e me 
        			  conquistou logo no início.
        			</p>
        			
        			<p className="text-card-foreground/80 leading-relaxed mt-4">
        			  As 4 fases da jornada de compra foram essenciais. Sempre que surgia uma dúvida, 
        			  o índice interativo com mais de 160 tópicos me levava direto à resposta. No fim, 
        			  escolhi a empresa certa, o sistema ideal ao preço certo e conduzi tudo com segurança. 
        			  <strong className="text-primary"> Sem exagero: o manual valeu cada página.</strong>
        			</p>
        		  </div>
        		</div>
        	  </div>
      	</div>
      </div>
  	</div>
    </section>
  );
};

export default SocialProof;