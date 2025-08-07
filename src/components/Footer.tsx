const Footer = () => {
  return (
    <footer className="bg-background border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-6">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-xl font-bold mb-2">Buy-Side Soluções</h3>
            <p className="text-sm text-foreground/80 mb-2">
              CNPJ: 55.463.06/0001-80
            </p>
            <p className="text-sm text-foreground/80 mb-2">
              Torre Norte - Av. Bento Munhoz da Rocha Neto, 632 - 19º Andar, Salas 1905 a 1908
            </p>
            <p className="text-sm text-foreground/80 mb-2">
              Zona 7, Maringá - PR, 87030-010
            </p>
            <p className="text-sm text-foreground/80">
              E-mail: contato@buyside.com.br
            </p>
          </div>
          
          <div className="flex justify-center gap-8">
            <a href="#" className="text-foreground/60 hover:text-foreground text-sm">
              Política de Privacidade
            </a>
            <a href="#" className="text-foreground/60 hover:text-foreground text-sm">
              Termos de Uso
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;