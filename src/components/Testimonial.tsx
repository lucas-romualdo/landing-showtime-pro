import { Button } from "@/components/ui/button";
import { Quote, Star, CheckCircle } from "lucide-react";

const Testimonial = () => {
  const features = [
    "Mais de 130 páginas com conteúdo técnico e estratégico",
    "160 tópicos organizados para consulta rápida", 
    "Uma metodologia em 4 fases que orienta toda a jornada de compra",
    "Anexos técnicos que auxiliam na tomada de decisão"
  ];

  return (
  	<section className="py-20 bg-muted/30">
  	  <div className="container mx-auto px-4">
  		<div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
  		  <div>
  			<h2 className="text-3xl md:text-4xl font-bold mb-8">
  			  Os benefícios são claros, e a prática comprova. 
  			  <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
  				Veja a experiência de Rodrigo, integrador de SP:
  			  </span>
  			</h2>
  			
  			<div className="bg-card rounded-lg p-8 border border-border shadow-card relative">
  			  <Quote className="w-12 h-12 text-primary absolute top-4 right-4 opacity-20" />
  			  <div className="flex items-center mb-4">
  				<div className="flex text-primary">
  				  {[...Array(5)].map((_, i) => (
  					<Star key={i} className="w-5 h-5 fill-current" />
  				  ))}
  				</div>
  			  </div>
  			  <p className="text-card-foreground/90 text-lg leading-relaxed mb-6">
  				"Minha maior dor era a concorrência acirrada e a baixa conversão. O Manual Buy-Side foi um divisor de águas: 
  				<strong className="text-primary"> em um mês, fechei 5 sistemas a mais!</strong>"
  			  </p>
  			  <div className="flex items-center gap-4">
  				<div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center">
  				  <span className="text-primary font-bold text-lg">R</span>
  				</div>
  				<div>
  				  <p className="font-semibold text-card-foreground">Rodrigo</p>
  				  <p className="text-card-foreground/60 text-sm">Integrador - São Paulo</p>
  				</div>
  			  </div>
  			</div>
  		  </div>

  		  <div>
  			<div className="bg-gradient-primary rounded-lg p-8 text-white">
  			  <h3 className="text-2xl font-bold mb-6">Faça como ele:</h3>
  			  <p className="text-lg mb-6">
  				Imersão no Manual de Compra Solar Buy-Side: pensa como seu cliente e torne-se um 
  				<strong> Vendedor de Alta Performance!</strong>
  			  </p>
  			  
  			  <div className="bg-white/10 rounded-lg p-6 mb-6 backdrop-blur-lg border border-white/20">
  				<h4 className="text-lg font-semibold mb-4">
  				  Uma solução revolucionária que dá aos compradores total autonomia para decidir.
  				</h4>
  				<ul className="space-y-3">
  				  {features.map((feature, index) => (
  					<li key={index} className="flex items-start gap-3">
  					  <CheckCircle className="w-5 h-5 text-primary-glow mt-0.5 flex-shrink-0" />
  					  <span className="text-white/90">{feature}</span>
  					</li>
  				  ))}
  				</ul>
  			  </div>
  			</div>
  		  </div>
  		</div>

  		<div className="bg-destructive/10 border border-destructive/30 rounded-lg p-8 text-center">
  		  <h3 className="text-2xl font-bold text-destructive mb-4">
  			⚠️ Atenção: essa oportunidade de sair na frente não durará para sempre.
  		  </h3>
  		  <p className="text-lg text-foreground/80 mb-6">
  			Esteja preparado antes que seus clientes e concorrentes saibam mais do que você:
  		  </p>
  		  <div className="bg-destructive/5 rounded-lg p-6">
  			<p className="text-foreground leading-relaxed">
  			  Esta oferta exclusiva para profissionais é por tempo limitado! Após o período esgotado de pré-venda 
  			  para profissionais do setor solar, o manual será distribuído em todo o território nacional 
  			  para o público consumidor— e você perderá a chance de sair na frente.
  			</p>
  		  </div>
  		</div>
  	  </div>
  	</section>
  );
};

export default Testimonial;