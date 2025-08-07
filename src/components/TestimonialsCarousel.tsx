import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import seloGemini from "@/assets/Selo Gemini 8.png";
import rogerioImage from "@/assets/Comprador Rogèrio de Campinas.png";

const TestimonialsCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      name: "Carlos",
      location: "Belo Horizonte - MG",
      testimonial: "Morando em Belo Horizonte, o sol é uma bênção, mas eu tinha medo de cair em cilada ao tentar aproveitar essa energia. As empresas prometiam mundos e fundos, mas eu sentia que tinha algo escondido. O manual abriu meus olhos para os riscos de contratos mal feitos e equipamentos de baixa qualidade. Com as dicas práticas, conversei de igual para igual com os vendedores e ainda economizei R$ 1.800 na negociação! Valeu cada página pra fechar com uma empresa séria e garantir um sistema que atende minhas necessidades de verdade."
    },
    {
      name: "Ricardo S.",
      location: "São Paulo - SP",
      testimonial: "No mundo dos negócios em São Paulo, errar na escolha de um fornecedor pode gerar um prejuízo enorme. O manual foi uma ferramenta indispensável para evitar armadilhas na compra do sistema solar. Aprendi a identificar empresas despreparadas e equipamentos de qualidade duvidosa. O mais importante foi que o manual me ensinou a procurar empresas que não apenas vendiam o sistema, mas também ofereciam garantia de suporte técnico contínuo e manutenção. Fechei negócio com a melhor empresa e tenho certeza que meu investimento de R$ 145 mil foi muito bem aplicado. Evitei um monte de dor de cabeça e escolhi com confiança."
    },
    {
      name: "Lucineide",
      location: "Recife - PE",
      testimonial: "Morando sozinho, confesso que a enorme variedade de empresas e tecnologias de energia solar me deixava bastante perdido e inseguro sobre qual seria a escolha ideal para não me arrepender depois. Mas o manual foi um guia fundamental nessa jornada! Seguindo cada fase e etapa, consegui avaliar detalhadamente cada proposta, descartando aquelas que pareciam boas demais para ser verdade. Com segurança e convicção, instalei um sistema de R$ 28 mil. Esse manual foi realmente um passo a passo 'arretado' para entender tudo direitinho e fazer a escolha certa para minha casa. E o melhor de tudo? No final das negociações, fui até elogiado por vendedores, que nunca tinham encontrado uma mulher com tanto conhecimento no assunto! 😂"
    },
    {
      name: "Edivaldo",
      location: "Sinop - MT",
      testimonial: "Sou produtor rural aqui em Sinop, no Mato Grosso, e decidi instalar um sistema solar no meu galpão por causa do alto consumo de energia nas atividades da fazenda, principalmente na irrigação e no uso de máquinas. Com o clima seco e a expansão da lavoura, a conta de luz estava pesando cada vez mais. O Manual de Compra Profissional de Sistema Solar Fotovoltaico Buy-Side foi essencial nesse processo. Ele me ajudou a entender como comparar propostas e evitar erros comuns, o que me deu segurança para investir R$ 248.000,00 com confiança."
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-card/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-8">
            <img 
              src={seloGemini} 
              alt="Selo Solar Buy-Side - Mais de 75 compradores" 
              className="w-32 h-32"
            />
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Mais de 75 compradores de sistema já experimentaram o sucesso com o Manual Solar Buy-Side!
          </h2>
          
          <div className="space-y-4 mb-8">
            <p className="text-lg text-foreground/80 flex items-center justify-center gap-2">
              📍 Testado em mais de 14 estados do Brasil por clientes residenciais e empresariais.
            </p>
            <p className="text-lg text-foreground/80 flex items-center justify-center gap-2">
              🛡️ Criado por quem conhece o lado do comprador e do vendedor!
            </p>
          </div>
          
          <h3 className="text-2xl md:text-3xl font-bold mb-8">
            Não é teoria. Veja o que dizem compradores que já aplicaram o Manual na prática!
          </h3>
        </div>

        {/* Featured Testimonial */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="text-center">
              <img 
                src={rogerioImage} 
                alt="Rogério de Campinas" 
                className="w-full max-w-sm mx-auto rounded-lg shadow-lg mb-4"
              />
              <h4 className="text-xl font-bold text-foreground">Rogério – (Campinas)</h4>
            </div>
            
            <div className="bg-card rounded-lg p-6 border border-border">
              <h5 className="text-lg font-bold mb-4 text-primary">
                Sem exagero: o manual valeu cada página!
              </h5>
              <blockquote className="text-card-foreground/80 italic mb-4">
                "Nunca tinha tido contato com energia solar e tinha receio de tomar decisão errada. Mas, ao começar a ler o manual, tudo mudou. O conteúdo é claro, estruturado e me conquistou logo no início.

                As 4 fases da jornada de compra foram essenciais. Sempre que surgia uma dúvida, o índice interativo com mais de 160 tópicos me levava direto à resposta. No fim, escolhi a empresa certa, o sistema ideal ao preço certo e conduzi tudo com segurança. Sem exagero: o manual valeu cada página."
              </blockquote>
            </div>
          </div>
        </div>
        
        <div className="text-center mb-12">
          <p className="text-lg text-foreground/80 mb-8">
            Cada sorriso conta uma experiência. Clique nas fotos e veja como o manual fez a diferença.
          </p>
        </div>

        <div className="max-w-4xl mx-auto mb-12">
          <Card className="relative">
            <CardContent className="p-8">
              <div className="flex items-center mb-4">
                <div className="flex text-primary">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
              </div>
              
              <p className="text-card-foreground/90 text-lg leading-relaxed mb-6">
                {testimonials[currentSlide].testimonial}
              </p>
              
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-semibold text-card-foreground text-lg">
                    {testimonials[currentSlide].name}
                  </p>
                  <p className="text-card-foreground/60">
                    {testimonials[currentSlide].location}
                  </p>
                </div>
                
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" onClick={prevSlide}>
                    <ChevronLeft className="w-4 h-4" />
                  </Button>
                  <Button variant="outline" size="sm" onClick={nextSlide}>
                    <ChevronRight className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <div className="flex justify-center mt-6 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentSlide ? 'bg-primary' : 'bg-primary/30'
                }`}
              />
            ))}
          </div>
        </div>

        <div className="text-center">
          <Button size="lg" className="text-lg px-8 py-4">
            QUERO APRENDER O BUY-SIDE!
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsCarousel;