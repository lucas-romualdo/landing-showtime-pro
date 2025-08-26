import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Mic } from "lucide-react";

// Imagens dos clientes - substitua pelos caminhos corretos
import carlosImage from "@/assets/clientes/carlos-bh.jpg";
import ricardoImage from "@/assets/clientes/ricardo-sp.jpg";
import lucineideImage from "@/assets/clientes/lucineide-pe.jpg";
import edivaldoImage from "@/assets/clientes/edivaldo-mt.jpg";

const Testimonials = () => {
  // Dados extraídos dos depoimentos no Bloco 7 e 9
  const testimonials = [
    {
      name: "Carlos",
      location: "Belo Horizonte - MG",
      type: "Cliente Particular",
      image: carlosImage,
      quote: "O manual abriu meus olhos para os riscos de contratos mal feitos e equipamentos de baixa qualidade. Conversei de igual para igual e economizei R$ 1.800!",
      tags: ["Redução de Riscos", "Economia", "Negociação"]
    },
    {
      name: "Ricardo S.",
      location: "São Paulo - SP",
      type: "Empresário",
      image: ricardoImage,
      quote: "Aprendi a identificar empresas despreparadas. Fechei negócio com a melhor e tenho certeza que meu investimento de R$ 145 mil foi muito bem aplicado.",
      tags: ["Investimento Seguro", "Seleção de Fornecedor", "Confiança"]
    },
    {
      name: "Lucineide",
      location: "Recife - PE",
      type: "Cliente Particular",
      image: lucineideImage,
      quote: "Esse manual foi um passo a passo 'arretado' para entender tudo e fazer a escolha certa. Fui elogiada pelos vendedores pelo meu conhecimento!",
      tags: ["Empoderamento", "Decisão Certa", "Conhecimento"]
    },
    {
      name: "Edivaldo",
      location: "Sinop - MT",
      type: "Produtor Rural",
      image: edivaldoImage,
      quote: "Ele me ajudou a entender como comparar propostas e evitar erros comuns, o que me deu segurança para investir R$ 248.000,00 com confiança.",
      tags: ["Alto Investimento", "Segurança", "Comparação Técnica"]
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <Badge variant="outline" className="mb-4">
            Aprovado por quem Compra
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            O que Nossos <span className="text-primary">Clientes</span> Dizem
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            O Manual Solar Buy-Side foi testado e validado por compradores reais em todo o Brasil. Veja o impacto que ele causou.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-6 hover:shadow-glow transition-all duration-300 animate-scale-in flex flex-col" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="flex items-center gap-4 mb-4">
                <Avatar className="w-16 h-16">
                  <AvatarImage src={testimonial.image} alt={testimonial.name} />
                	<AvatarFallback className="text-lg">
                	  {testimonial.name.split(' ').map(n => n[0]).join('')}
                	</AvatarFallback>
              	</Avatar>
              	<div>
              	  <h3 className="text-xl font-semibold">{testimonial.name}</h3>
              	  <p className="text-sm text-muted-foreground">{testimonial.type}, {testimonial.location}</p>
          	  </div>
          	</div>

          	<p className="text-muted-foreground text-sm mb-4 leading-relaxed flex-grow">
          	  "{testimonial.quote}"
        	</p>

        	  <div className="flex flex-wrap gap-2 mb-4">
        		{testimonial.tags.map((tag, tagIndex) => (
        		  <Badge key={tagIndex} variant="secondary" className="text-xs">
        			{tag}
        		  </Badge>
        		))}
      	  </div>

    	  <Button variant="outline" size="sm" className="w-full mt-auto">
    		<Mic className="w-4 h-4 mr-2" />
    		Ouvir Depoimento Completo
    	  </Button>
    	</Card>
      ))}
  	</div>
    </div>
  </section>
  );
};

export default Testimonials; // Renomeado de Speakers para Testimonials