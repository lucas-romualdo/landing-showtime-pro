import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Quote, ChevronLeft, ChevronRight, Star } from "lucide-react";

const TestimonialsCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const testimonials = [
    {
      name: "Carlos - Particular",
      location: "Belo Horizonte - MG",
      testimonial: "Morando em Belo Horizonte, o sol é uma bênção, mas eu tinha medo de cair em cilada ao tentar aproveitar essa energia. As empresas prometiam mundos e fundos, mas eu sentia que tinha algo escondido. O manual abriu meus olhos para os riscos de contratos mal feitos e equipamentos de baixa qualidade. Com as dicas práticas, conversei de igual para igual com os vendedores e ainda economizei R$ 1.800 na negociação! Valeu cada página pra fechar com uma empresa séria e garantir um sistema que atende minhas necessidades de verdade."
    },
    {
      name: "Ricardo S. – Empresário",
      location: "São Paulo - SP",
      testimonial: "No mundo dos negócios em São Paulo, errar na escolha de um fornecedor pode gerar um prejuízo enorme. O manual foi uma ferramenta indispensável para evitar armadilhas na compra do sistema solar. Aprendi a identificar empresas despreparadas e equipamentos de qualidade duvidosa. O mais importante foi que o manual me ensinou a procurar empresas que não apenas vendiam o sistema, mas também ofereciam garantia de suporte técnico contínuo e manutenção. Fechei negócio com a melhor empresa e tenho certeza que meu investimento de R$ 145 mil foi muito bem aplicado. Evitei um monte de dor de cabeça e escolhi com confiança."
    },
    {
      name: "Lucineide - Particular",
      location: "Recife - PE",
      testimonial: "Morando sozinho, confesso que a enorme variedade de empresas e tecnologias de energia solar me deixava bastante perdido e inseguro sobre qual seria a escolha ideal para não me arrepender depois. Mas o manual foi um guia fundamental nessa jornada! Seguindo cada fase e etapa, consegui avaliar detalhadamente cada proposta, descartando aquelas que pareciam boas demais para ser verdade. Com segurança e convicção, instalei um sistema de R$ 28 mil. Esse manual foi realmente um passo a passo 'arretado' para entender tudo direitinho e fazer a escolha certa para minha casa. E o melhor de tudo? No final das negociações, fui até elogiado por vendedores, que nunca tinham encontrado uma mulher com tanto conhecimento no assunto! 😂"
    },
    {
      name: "Edivaldo – Produtor rural",
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
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-8">
            Não é teoria. Veja o que dizem compradores que já aplicaram o Manual na prática!
          </h2>
          <p className="text-lg text-foreground/80 mb-8">
            Cada sorriso conta uma experiência. Clique nas fotos e veja como o manual fez a diferença.
          </p>
        </div>

        <div className="max-w-4xl mx-auto mb-12">
          <Card className="relative">
            <CardContent className="p-8">
              <Quote className="w-12 h-12 text-primary absolute top-4 right-4 opacity-20" />
              
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

        <div className="text-center bg-primary/10 rounded-lg p-8 border border-primary/30">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Mais de 75 compradores de sistema já experimentaram o sucesso com o Manual Solar Buy-Side!
          </h3>
          <ul className="text-lg text-foreground/80 space-y-2">
            <li>✅ Testado em mais de 14 estados do Brasil por clientes residenciais e empresariais.</li>
            <li>✅ Criado por quem conhece o lado do comprador e do vendedor!</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsCarousel;