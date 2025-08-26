import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CheckCircle, Users, BarChart2, Shield, Award } from "lucide-react";

const ManualContent = () => {
  // Dados adaptados para as 4 fases do manual, com base nos blocos 5, 6 e 8
  const contentData = {
    "fase-1": {
      title: "Fundamentos e Riscos",
      description: "Entenda os conceitos essenciais e os principais riscos para orientar seu cliente.",
      items: [
        "Os 3 grandes riscos ao comprar um sistema solar",
        "Conceitos técnicos essenciais para uma compra segura",
        "Reconhecimento de marcas e distribuidores de alta confiança"
      ]
    },
    "fase-2": {
      title: "Análise e Comparação",
      description: "Domine a arte de avaliar propostas e demonstrar o valor da sua solução.",
      items: [
        "Capacidade de analisar propostas com critérios técnicos",
        "Como sua proposta será avaliada e comparada",
        "Demonstrar com clareza o valor técnico e econômico da solução"
      ]
    },
    "fase-3": {
      title: "Seleção e Negociação",
      description: "Aprenda a se posicionar como a escolha certa e a fugir da guerra de preços.",
      items: [
        "Critérios para selecionar empresas sérias e competentes",
        "Adotar uma postura consultiva e centrada no cliente",
        "Aumento da taxa de conversão e menor dependência de descontos"
      ]
    },
    "fase-4": {
      title: "Pós-Venda e Confiança",
      description: "Construa um relacionamento sólido e garanta a satisfação do cliente.",
      items: [
        "Avaliação precisa da reputação e do suporte pós-venda",
        "Mais confiança, conexão e autoridade no processo de venda",
        "Anexos técnicos que auxiliam na tomada de decisão"
      ]
    }
  };

  const icons = [
    <Shield className="w-8 h-8 text-primary" />,
    <BarChart2 className="w-8 h-8 text-primary" />,
    <Users className="w-8 h-8 text-primary" />,
    <Award className="w-8 h-8 text-primary" />
  ];

  return (
    <section className="py-20 bg-gradient-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <Badge variant="outline" className="mb-4">
            Conteúdo do Manual
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Uma Jornada de Compra em <span className="text-primary">4 Fases</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            O manual organiza todo o processo de compra em uma metodologia clara, guiando você e seu cliente do início ao fim.
          </p>
        </div>

        <Tabs defaultValue="fase-1" className="w-full">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-8">
            <TabsTrigger value="fase-1">Fase 1</TabsTrigger>
            <TabsTrigger value="fase-2">Fase 2</TabsTrigger>
            <TabsTrigger value="fase-3">Fase 3</TabsTrigger>
            <TabsTrigger value="fase-4">Fase 4</TabsTrigger>
          </TabsList>

          {Object.entries(contentData).map(([phase, data], index) => (
            <TabsContent key={phase} value={phase}>
              <Card className="p-8 hover:shadow-glow transition-all duration-300 animate-scale-in">
                <div className="flex flex-col md:flex-row md:items-center gap-6">
                  <div>{icons[index]}</div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold mb-2">{data.title}</h3>
                    <p className="text-muted-foreground mb-6">{data.description}</p>
                    <ul className="space-y-3">
                      {data.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Card>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default ManualContent; // Renomeado de Schedule para ManualContent