import { Button } from "@/components/ui/button";
import { Calendar, MapPin, Users } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-hero"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-primary-glow bg-clip-text text-transparent">
            TechFuture 2024
          </h1>
          <p className="text-xl md:text-2xl text-foreground/90 mb-8 max-w-3xl mx-auto">
            O maior evento de tecnologia e inovação do Brasil. Conecte-se com líderes da indústria, 
            descubra tendências e molde o futuro da tecnologia.
          </p>
          
          {/* Event Info */}
          <div className="flex flex-wrap justify-center gap-6 mb-10 text-foreground/80">
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              <span>15-17 Março 2024</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5" />
              <span>São Paulo, SP</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5" />
              <span>+5000 Participantes</span>
            </div>
          </div>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="hero" size="lg" className="text-lg px-8 py-6">
              Garanta Seu Ingresso
            </Button>
            <Button variant="glass" size="lg" className="text-lg px-8 py-6">
              Ver Programação
            </Button>
          </div>
        </div>
      </div>
      
      {/* Floating Animation Elements */}
      <div className="absolute top-20 left-10 w-3 h-3 bg-primary rounded-full animate-float opacity-60"></div>
      <div className="absolute top-32 right-20 w-2 h-2 bg-primary-glow rounded-full animate-float opacity-40" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-40 left-1/4 w-4 h-4 bg-primary rounded-full animate-float opacity-30" style={{ animationDelay: '2s' }}></div>
    </section>
  );
};

export default Hero;