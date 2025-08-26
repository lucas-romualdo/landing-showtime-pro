import manualMockup from "@/assets/Mockup Manual definitivo 09.08.2025.jpg"; // Certifique-se que a imagem está no local correto

const ManualFeatures = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-lg text-foreground/80 mb-8 max-w-4xl mx-auto">
            A experiência de Rodrigo é apenas um exemplo do poder deste Manual. Ele é uma ponte entre o comprador bem informado e o vendedor preparado — impulsionando negociações justas e satisfatórias.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div className="order-2 md:order-1">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Uma solução revolucionária que dá aos compradores total autonomia para decidir.
              </h3>
              
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="text-2xl">📘</span>
                  <span className="text-lg text-foreground/80">
                    Mais de 130 páginas com conteúdo técnico e estratégico
                  </span>
                </li>
                
                <li className="flex items-start gap-3">
                  <span className="text-2xl">📑</span>
                  <span className="text-lg text-foreground/80">
                  	160 tópicos organizados para consulta rápida
                  </span>
                </li>
                
                <li className="flex items-start gap-3">
                  <span className="text-2xl">🧭</span>
                  <span className="text-lg text-foreground/80">
                  	Uma metodologia em 4 fases que orienta toda a jornada de compra
                  </span>
                </li>
                
                <li className="flex items-start gap-3">
                  <span className="text-2xl">📎</span>
                  <span className="text-lg text-foreground/80">
                  	Anexos técnicos que auxiliam na tomada de decisão
                  </span>
            	  </li>
            	</ul>
          	</div>
        	</div>
        	
        	<div className="order-1 md:order-2">
        	  <img 
        		src={manualMockup} 
        		alt="Mockup do Manual de Compra Profissional Solar Buy-Side"
        		className="w-full max-w-md mx-auto"
        	  />
      	</div>
    	  </div>
  	</div>
    </section>
  );
};

export default ManualFeatures;