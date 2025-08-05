import { Building2, UserPlus, TrendingUp, Megaphone, Cog, Package, CreditCard } from "lucide-react";

const TargetAudience = () => {
  const audiences = [
    {
      icon: "🌞",
      title: "Empresas de integração solar",
      description: "Para vender valor, fugir da guerra dos preços e fechar mais projetos."
    },
    {
      icon: "🚀",
      title: "Empreendedores iniciantes na integração solar",
      description: "Para construir um negócio sólido desde o primeiro passo."
    },
    {
      icon: "💼",
      title: "Representantes comerciais de sistema solar",
      description: "Maximizar a conversão e fortalecer o posicionamento de preço."
    },
    {
      icon: "🎯",
      title: "Agências de marketing",
      description: "Para gerar leads qualificados com um público informado."
    },
    {
      icon: "🏭",
      title: "Fabricantes de equipamentos",
      description: "Para compreender a importância da visibilidade da marca para o consumidor final."
    },
    {
      icon: "🚚",
      title: "Distribuidoras de kit fotovoltaico",
      description: "Para garantir a preferência do cliente final."
    },
    {
      icon: "💳",
      title: "Instituições financeiras",
      description: "Para captar com maior eficiência clientes qualificados."
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-8">
            Mas afinal, quem realmente pode se beneficiar com esse 
            <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
              conhecimento estratégico?
            </span>
          </h2>
          <p className="text-xl text-foreground/80 mb-8">
            Veja para quem o Manual Buy-Side é essencial:
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {audiences.map((audience, index) => (
            <div key={index} className="bg-card rounded-lg p-6 border border-border shadow-card hover:shadow-glow transition-all duration-300 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center text-2xl">
                    {audience.icon}
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-card-foreground mb-2">
                    {audience.title}
                  </h3>
                  <p className="text-card-foreground/80 text-sm">
                    {audience.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center bg-primary/10 rounded-lg p-8 border border-primary/30">
          <p className="text-lg text-foreground leading-relaxed">
            Não importa em qual ponto da cadeia você está — o Manual Solar Buy-Side não é apenas um guia, 
            mas uma <strong>imersão completa na perspectiva do comprador</strong>.
          </p>
        </div>

        <div className="text-center mt-12">
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Manual Solar Buy-Side: Sua ferramenta essencial para 
            todos os profissionais do setor solar.
          </h3>
        </div>
      </div>
    </section>
  );
};

export default TargetAudience;