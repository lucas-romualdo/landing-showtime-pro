const BuyerPreparation = () => {
  const buyerSkills = [
    {
      skill: "Conceitos essenciais para uma compra técnica e segura",
      focus: "Capacidade de analisar propostas com critérios técnicos"
    },
    {
      skill: "Reconhecimento de marcas e distribuidores de alta confiança",
      focus: "Avaliação precisa da reputação e do suporte pós-venda"
    },
    {
      skill: "Critérios para selecionar empresas sérias e competentes",
      focus: "Tomada de decisão com segurança e embasamento técnico"
    }
  ];

  return (
    <section className="section-alternate">
      <div className="container-custom px-4">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-8 text-foreground">
            E se você ainda duvida do que está em jogo, veja o que seus clientes aprenderão em breve
          </h2>
          
          <p className="text-xl text-muted-foreground mb-12">
            Você está preparado para continuar vendendo para esse novo perfil de comprador?
          </p>
        </div>

        <div className="max-w-4xl mx-auto mb-16">
          <table className="styled-table">
            <thead>
              <tr>
                <th className="p-4 text-center font-bold text-lg bg-primary text-primary-foreground border-r border-primary-foreground/20">
                  O QUE O COMPRADOR VAI DOMINAR
                </th>
                <th className="p-4 text-center font-bold text-lg bg-primary text-primary-foreground">
                  PRINCIPAIS FOCO E HABILIDADES
                </th>
              </tr>
            </thead>
            <tbody>
              {buyerSkills.map((item, index) => (
                <tr key={index} className="border-b border-border last:border-b-0">
                  <td className="p-4 border-r border-border text-card-foreground">
                    {item.skill}
                  </td>
                  <td className="p-4 text-card-foreground">
                    <div className="flex items-start gap-2">
                      <span className="text-green-500 mt-1 flex-shrink-0">✅</span>
                      <span>{item.focus}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default BuyerPreparation;