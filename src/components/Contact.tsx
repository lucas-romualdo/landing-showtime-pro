import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <section className="py-20 bg-card/50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Ficou com dúvidas? Fale com a equipe Buy-Side.
          </h2>
          
          <div className="bg-card rounded-lg p-8 border border-border shadow-lg">
            <MessageCircle className="w-12 h-12 text-primary mx-auto mb-6" />
            
            <Button 
              size="lg" 
              className="text-lg px-8 py-6 w-full"
              onClick={() => window.open('https://wa.me/5511999999999', '_blank')}
            >
              📲 FALAR COM UM CONSULTOR NO WHATSAPP
            </Button>
            
            <p className="text-sm text-foreground/60 mt-4">
              Nossa equipe está pronta para esclarecer todas as suas dúvidas
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;