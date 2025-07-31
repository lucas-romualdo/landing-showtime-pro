import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Clock, MapPin } from "lucide-react";

const Schedule = () => {
  const scheduleData = {
    "dia-1": [
      {
        time: "09:00 - 09:30",
        title: "Credenciamento e Coffee Break",
        speaker: "",
        location: "Hall Principal",
        type: "networking"
      },
      {
        time: "09:30 - 10:30",
        title: "Abertura: O Futuro da IA Generativa",
        speaker: "Dr. Maria Silva - CEO Tech Innovations",
        location: "Auditório Principal",
        type: "keynote"
      },
      {
        time: "10:45 - 11:30",
        title: "Blockchain e Web3: Além das Criptomoedas",
        speaker: "João Santos - CTO BlockChain Brasil",
        location: "Sala A",
        type: "palestra"
      },
      {
        time: "11:45 - 12:30",
        title: "Workshop: React com TypeScript na Prática",
        speaker: "Ana Costa - Senior Developer",
        location: "Lab 1",
        type: "workshop"
      },
      {
        time: "12:30 - 14:00",
        title: "Almoço e Networking",
        speaker: "",
        location: "Área de Alimentação",
        type: "networking"
      },
      {
        time: "14:00 - 14:45",
        title: "Cloud Computing: Estratégias para 2024",
        speaker: "Carlos Lima - AWS Solutions Architect",
        location: "Auditório Principal",
        type: "palestra"
      }
    ],
    "dia-2": [
      {
        time: "09:00 - 09:45",
        title: "Cybersecurity: Protegendo o Futuro Digital",
        speaker: "Paula Oliveira - CISO Security Corp",
        location: "Auditório Principal",
        type: "keynote"
      },
      {
        time: "10:00 - 10:45",
        title: "DevOps e Cultura de Inovação",
        speaker: "Roberto Mendes - Engineering Manager",
        location: "Sala B",
        type: "palestra"
      },
      {
        time: "11:00 - 11:45",
        title: "Workshop: Machine Learning com Python",
        speaker: "Dra. Fernanda Torres - Data Scientist",
        location: "Lab 2",
        type: "workshop"
      },
      {
        time: "12:00 - 12:45",
        title: "Startups: Como Escalar uma Empresa Tech",
        speaker: "Gabriel Rocha - Founder TechStart",
        location: "Sala A",
        type: "palestra"
      },
      {
        time: "12:45 - 14:15",
        title: "Almoço e Networking",
        speaker: "",
        location: "Área de Alimentação",
        type: "networking"
      },
      {
        time: "14:15 - 15:00",
        title: "IoT e Cidades Inteligentes",
        speaker: "Marina Azevedo - Smart Cities Expert",
        location: "Auditório Principal",
        type: "palestra"
      }
    ],
    "dia-3": [
      {
        time: "09:00 - 09:45",
        title: "Sustentabilidade e Green Tech",
        speaker: "Eduardo Pires - Sustainability Officer",
        location: "Auditório Principal",
        type: "keynote"
      },
      {
        time: "10:00 - 10:45",
        title: "O Futuro do Trabalho Remoto",
        speaker: "Lucia Freitas - HR Tech Specialist",
        location: "Sala A",
        type: "palestra"
      },
      {
        time: "11:00 - 12:00",
        title: "Panel: Mulheres na Tecnologia",
        speaker: "Várias Speakers",
        location: "Auditório Principal",
        type: "panel"
      },
      {
        time: "12:00 - 12:30",
        title: "Encerramento e Próximos Passos",
        speaker: "Equipe TechFuture",
        location: "Auditório Principal",
        type: "encerramento"
      }
    ]
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case "keynote": return "bg-primary text-primary-foreground";
      case "workshop": return "bg-green-600 text-white";
      case "palestra": return "bg-blue-600 text-white";
      case "panel": return "bg-purple-600 text-white";
      case "networking": return "bg-orange-600 text-white";
      case "encerramento": return "bg-red-600 text-white";
      default: return "bg-secondary text-secondary-foreground";
    }
  };

  return (
    <section className="py-20 bg-gradient-secondary">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <Badge variant="outline" className="mb-4">
            Programação
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Agenda Completa do <span className="text-primary">Evento</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Três dias intensos de aprendizado, networking e inovação com os melhores especialistas do mercado.
          </p>
        </div>

        <Tabs defaultValue="dia-1" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="dia-1">Dia 1 - 15/03</TabsTrigger>
            <TabsTrigger value="dia-2">Dia 2 - 16/03</TabsTrigger>
            <TabsTrigger value="dia-3">Dia 3 - 17/03</TabsTrigger>
          </TabsList>

          {Object.entries(scheduleData).map(([day, events]) => (
            <TabsContent key={day} value={day} className="space-y-4">
              {events.map((event, index) => (
                <Card key={index} className="p-6 hover:shadow-glow transition-all duration-300 animate-scale-in" style={{ animationDelay: `${index * 0.05}s` }}>
                  <div className="flex flex-col md:flex-row md:items-center gap-4">
                    <div className="flex items-center gap-2 text-muted-foreground min-w-fit">
                      <Clock className="w-4 h-4" />
                      <span className="font-mono">{event.time}</span>
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-2">
                        <h3 className="text-lg font-semibold">{event.title}</h3>
                        <Badge className={getTypeColor(event.type)}>
                          {event.type}
                        </Badge>
                      </div>
                      {event.speaker && (
                        <p className="text-muted-foreground mb-2">{event.speaker}</p>
                      )}
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <MapPin className="w-4 h-4" />
                        <span>{event.location}</span>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default Schedule;