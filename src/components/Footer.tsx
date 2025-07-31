import { Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card text-card-foreground py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4 text-primary">SOLAR BUY-SIDE</h3>
            <p className="text-card-foreground/80 mb-6">
              Transformando vendedores em consultores especializados através do conhecimento 
              da jornada de compra do cliente.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-primary" />
                <span className="text-card-foreground/80">contato@buyside.com.br</span>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-primary mt-1" />
                <div className="text-card-foreground/80">
                  <p>Buy-Side Soluções | CNPJ: 55.463.06/0001-80</p>
                  <p>Torre Norte - Av. Bento Munhoz da Rocha Neto, 632 - 19º Andar, Salas 1905 a 1908</p>
                  <p>Zona 7, Maringá - PR, 87030-010</p>
                </div>
              </div>
            </div>
          </div>

          {/* Links */}
          <div className="flex flex-col justify-center">
            <div className="text-center md:text-right">
              <h4 className="text-lg font-semibold mb-4">Informações Legais</h4>
              <div className="space-y-2">
                <div>
                  <a href="#" className="text-card-foreground/80 hover:text-primary transition-colors underline">
                    Política de Privacidade
                  </a>
                </div>
                <div>
                  <a href="#" className="text-card-foreground/80 hover:text-primary transition-colors underline">
                    Termos de Uso
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-8 text-center">
          <p className="text-card-foreground/60">
            © 2024 Solar Buy-Side. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;