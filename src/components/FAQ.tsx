import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";

const FAQ = () => {
  const faqs = [
    {
      question: "Como acesso meu produto?",
      answer: "Após a confirmação do pagamento, você receberá um e-mail com o link para download do Manual Solar Buy-Side em formato PDF. O acesso é imediato e você poderá baixar o material quantas vezes precisar."
    },
    {
      question: "Como funciona o 'Prazo de Garantia' e a solicitação de devolução do pagamento?",
      answer: "Oferecemos garantia incondicional de 30 dias. Se por qualquer motivo você não ficar satisfeito com o manual, basta solicitar o reembolso total através do nosso e-mail de suporte."
    },
    {
      question: "Política de Devolução: Como proceder para o reembolso?",
      answer: "Para solicitar o reembolso, envie um e-mail para contato@buyside.com.br dentro do prazo de 30 dias após a compra, informando seus dados e o motivo da solicitação. O reembolso será processado em até 7 dias úteis."
    },
    {
      question: "O manual é atualizado regularmente?",
      answer: "Sim, o Manual Solar Buy-Side é atualizado sempre que há mudanças significativas no mercado fotovoltaico. Compradores recebem as atualizações gratuitamente por 1 ano."
    },
    {
      question: "Posso compartilhar o manual com minha equipe?",
      answer: "Esta é uma licença individual para profissionais. Para uso em equipe, temos pacotes corporativos especiais. Entre em contato para mais informações."
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