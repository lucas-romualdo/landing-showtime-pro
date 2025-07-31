import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Linkedin, Twitter } from "lucide-react";

const Speakers = () => {
  const speakers = [
    {
      name: "Dr. Maria Silva",
      role: "CEO Tech Innovations",
      company: "Tech Innovations",
      image: "/placeholder.svg",
      bio: "Especialista em IA com 15+ anos de experiência, pioneira em soluções de machine learning para empresas.",
      topics: ["IA", "Machine Learning", "Liderança"],
      social: {
        linkedin: "#",
        twitter: "#"
      }
    },
    {
      name: "João Santos",
      role: "CTO BlockChain Brasil",
      company: "BlockChain Brasil",
      image: "/placeholder.svg",
      bio: "Arquiteto de soluções blockchain, evangelista Web3 e mentor de startups fintech.",
      topics: ["Blockchain", "Web3", "Fintech"],
      social: {
        linkedin: "#",
        twitter: "#"
      }
    },
    {
      name: "Ana Costa",
      role: "Senior Developer",
      company: "Microsoft",
      image: "/placeholder.svg",
      bio: "Desenvolvera full-stack especializada em React e TypeScript, contribuidora open source.",
      topics: ["React", "TypeScript", "Frontend"],
      social: {
        linkedin: "#",
        twitter: "#"
      }
    },
    {
      name: "Carlos Lima",
      role: "AWS Solutions Architect",
      company: "Amazon Web Services",
      image: "/placeholder.svg",
      bio: "Especialista em arquitetura cloud, responsável por implementações enterprise na AWS.",
      topics: ["Cloud", "AWS", "DevOps"],
      social: {
        linkedin: "#",
        twitter: "#"
      }
    },
    {
      name: "Paula Oliveira",
      role: "CISO Security Corp",
      company: "Security Corp",
      image: "/placeholder.svg",
      bio: "Chief Information Security Officer com expertise em cybersecurity e gestão de riscos.",
      topics: ["Cybersecurity", "Risk Management", "Compliance"],
      social: {
        linkedin: "#",
        twitter: "#"
      }
    },
    {
      name: "Dra. Fernanda Torres",
      role: "Data Scientist",
      company: "Google",
      image: "/placeholder.svg",
      bio: "PhD em Ciência de Dados, pesquisadora em ML e autora de papers sobre deep learning.",
      topics: ["Data Science", "Deep Learning", "Research"],
      social: {
        linkedin: "#",
        twitter: "#"
      }
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <Badge variant="outline" className="mb-4">
            Speakers
          </Badge>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Palestrantes <span className="text-primary">Renomados</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Aprenda com os maiores especialistas da indústria, líderes visionários e 
            inovadores que estão moldando o futuro da tecnologia.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {speakers.map((speaker, index) => (
            <Card key={index} className="p-6 hover:shadow-glow transition-all duration-300 animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="text-center mb-4">
                <Avatar className="w-24 h-24 mx-auto mb-4">
                  <AvatarImage src={speaker.image} alt={speaker.name} />
                  <AvatarFallback className="text-lg">
                    {speaker.name.split(' ').map(n => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>
                <h3 className="text-xl font-semibold mb-1">{speaker.name}</h3>
                <p className="text-primary font-medium mb-1">{speaker.role}</p>
                <p className="text-sm text-muted-foreground mb-3">{speaker.company}</p>
              </div>

              <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                {speaker.bio}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {speaker.topics.map((topic, topicIndex) => (
                  <Badge key={topicIndex} variant="secondary" className="text-xs">
                    {topic}
                  </Badge>
                ))}
              </div>

              <div className="flex gap-2 justify-center">
                <Button variant="ghost" size="sm" className="p-2">
                  <Linkedin className="w-4 h-4" />
                </Button>
                <Button variant="ghost" size="sm" className="p-2">
                  <Twitter className="w-4 h-4" />
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Speakers;