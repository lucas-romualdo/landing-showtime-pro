import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

const FAQ = () => {
  const faqs = [
    {
      question: "Como acesso meu produto?",
      answer: "Você receberá o acesso ao Manual Solar Buy-Side por e-mail, por meio da plataforma online Eduzz. Esta plataforma atua como intermediadora digital entre clientes e produtores, disponibilizando conteúdos, soluções e ferramentas tecnológicas. O conteúdo será acessado de forma online na plataforma Eduzz, utilizando seu login e senha. Você poderá acessar o manual por meio de computador, celular, tablet ou outro dispositivo digital. No entanto, devido à formatação do manual em tamanho A4, recomendamos enfaticamente o uso de um computador ou tablet para uma experiência de leitura e aproveitamento mais otimizada do material."
    },
    {
      question: "Como funciona o 'Prazo de Garantia' e a solicitação de devolução do pagamento?",
      answer: "O reembolso de uma compra de um produto digital é um direito garantido pelo Código de Defesa do Consumidor (Lei nº 8.078, Artigo 49) e pode ser solicitado em até 7 dias a partir da data de assinatura ou do recebimento do produto."
    },
    {
      question: "Política de Devolução: Como proceder para o reembolso?",
      answer: "Para formalizar o pedido de reembolso do valor despendido, o Comprador deverá remeter sua solicitação ao endereço eletrônico contato@buyside.com.br. A comunicação deverá conter, obrigatoriamente, o número de referência da transação e a exposição detalhada da(s) razão(ões) que fundamenta(m) o pleito de cancelamento. As condições para efetivação do reembolso pautam-se nas Regras Gerais estabelecidas pela plataforma Eduzz. Para informações adicionais e consulta integral às diretrizes aplicáveis, o Comprador poderá acessar o seguinte link: https://ajuda.eduzz.com/hc/pt-br/articles/34175176026523-Quais-s%C3%A3o-as-regras-gerais-de-reembolso-Eduzz"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-foreground">
            	Perguntas Frequentes
            </h2>
            <p className="text-lg text-foreground/80">
            	Ficou com dúvidas? Confira as respostas para as perguntas mais comuns:
            </p>
          </div>

          <div className="mb-12">
          	<Accordion type="single" collapsible className="w-full">
            	{faqs.map((faq, index) => (
  	            <AccordionItem key={index} value={`item-${index}`}>
  	  	          <AccordionTrigger className="text-left text-lg font-medium">
  	  	  	        {faq.question}
  	  	  	      </AccordionTrigger>
  	  	  	      <AccordionContent className="text-foreground/80 leading-relaxed">
  	  	  	      	{faq.answer}
  	  	  	      </AccordionContent>
  	  	  	  	</AccordionItem>
            	))}
          	</Accordion>
          </div>

          <div className="text-center bg-primary/10 rounded-lg p-8 border border-primary/30">
          	<h3 className="text-2xl font-bold text-foreground mb-4">
          	  Ficou com dúvidas? Fale com a equipe Buy-Side.
          	</h3>
          	<Button variant="hero" size="lg" className="inline-flex items-center gap-2">
    	      	<MessageCircle className="w-5 h-5" />
    	      	FALAR COM UM CONSULTOR NO WHATSAPP
    	    	</Button>
          </div>
      	</div>
    	</div>
  	</section>
  );
};

export default FAQ;