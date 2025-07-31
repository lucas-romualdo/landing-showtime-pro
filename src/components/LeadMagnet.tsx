import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Download, Shield, TrendingUp, Users, BookOpen } from "lucide-react";
import { useState } from "react";

const LeadMagnet = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-8">
            Se, mesmo com todas essas informações, você ainda tem dúvidas sobre o 
            <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
              impacto do Manual Buy-Side
            </span>, temos uma prévia gratuita para você.
          </h2>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="bg-gradient-primary rounded-lg p-8 text-white">
                <div className="flex items-center gap-4 mb-6">
                  <Download className="w-12 h-12 text-white" />
                  <div>
                    <h3 className="text-2xl font-bold">
                      Baixe agora nosso e-book
                    </h3>
                    <p className="text-white/90">
                      e comece a desvendar os segredos do comprador:
                    </p>
                  </div>
                </div>

                <ul className="space-y-4 mb-6">
                  <li className="flex items-start gap-3">
                    <Shield className="w-6 h-6 text-primary-glow mt-0.5 flex-shrink-0" />
                    <span>Os 3 riscos na compra de sistemas solares</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <TrendingUp className="w-6 h-6 text-primary-glow mt-0.5 flex-shrink-0" />
                    <span>As 4 fases que seu cliente seguirá antes de comprar</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Users className="w-6 h-6 text-primary-glow mt-0.5 flex-shrink-0" />
                    <span>Como sua proposta será avaliada — e comparada</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <BookOpen className="w-6 h-6 text-primary-glow mt-0.5 flex-shrink-0" />
                    <span>O índice detalhado do manual Solar Buy-Side</span>
                  </li>
                </ul>

                <div className="bg-white/10 rounded-lg p-4 backdrop-blur-lg border border-white/20">
                  <p className="text-sm text-white/90">
                    Após enviar: "Confira seu e-mail para baixar o E-Book Manual Solar Buy-Side"
                  </p>
                </div>
              </div>
            </div>

            <div>
              <div className="bg-card rounded-lg p-8 border border-border shadow-card">
                <h3 className="text-2xl font-bold text-card-foreground mb-6 text-center">
                  Solicite sua Prévia Gratuita
                </h3>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="name" className="text-sm font-medium text-card-foreground">
                      Nome e sobrenome *
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="mt-2"
                      placeholder="Digite seu nome completo"
                    />
                  </div>

                  <div>
                    <Label htmlFor="email" className="text-sm font-medium text-card-foreground">
                      Email *
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className="mt-2"
                      placeholder="seu@email.com"
                    />
                  </div>

                  <div>
                    <Label htmlFor="phone" className="text-sm font-medium text-card-foreground">
                      Celular *
                    </Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="mt-2"
                      placeholder="(11) 99999-9999"
                    />
                  </div>

                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full text-lg py-6 bg-green-500 hover:bg-green-600 text-white"
                  >
                    <Download className="w-5 h-5 mr-2" />
                    BAIXAR E-BOOK GRATUITO
                  </Button>
                </form>

                <div className="mt-6 text-center">
                  <Button variant="outline" size="lg" className="w-full">
                    APROVEITE ESSA OFERTA ESPECIAL!
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadMagnet;