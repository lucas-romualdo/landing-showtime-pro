import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CheckCircle } from "lucide-react";
import { useState } from "react";
import ebookCover from "@/assets/Capa E.Book Gratis 14.07.2025.jpg";

const LeadMagnet = () => {
  const [formData, setFormData] = useState({
  	name: "",
  	email: "",
  	phone: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
  	e.preventDefault();
  	console.log("Form submitted:", formData);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  	setFormData({
  	  ...formData,
  	  [e.target.name]: e.target.value
  	});
  };

  return (
  	<section className="py-20 bg-background">
  	  <div className="container mx-auto px-4">
  		<div className="text-center mb-12">
  		  <h2 className="text-3xl md:text-4xl font-bold mb-8">
  			Se, mesmo com todas essas informações, você ainda tem dúvidas sobre o impacto do Manual Buy-Side, 
  			<span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
  			  temos uma prévia gratuita para você.
  			</span>
  		  </h2>
  		  <p className="text-xl text-foreground/80 mb-8">
  			Baixe agora nosso e-book e comece a desvendar os segredos do comprador:
  		  </p>
  		</div>

  		<div className="max-w-6xl mx-auto">
  		  <div className="grid lg:grid-cols-2 gap-12 items-center">
  			<div className="text-center">
  			  <img 
  				src={ebookCover} 
  				alt="Capa do E-Book Gratuito Manual Solar Buy-Side"
  				className="w-full max-w-md mx-auto rounded-lg shadow-lg mb-8"
  			  />
  			  
  			  <div className="space-y-4">
  				<div className="flex items-start gap-3">
  				  <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
  				  <span className="text-lg">Os 3 riscos na compra de sistemas solares</span>
  				</div>
  				
  				<div className="flex items-start gap-3">
  				  <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
  				  <span className="text-lg">As 4 fases que seu cliente seguirá antes de comprar</span>
  				</div>
  				
  				<div className="flex items-start gap-3">
  				  <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
  				  <span className="text-lg">Como sua proposta será avaliada — e comparada</span>
  				</div>
  				
  				<div className="flex items-start gap-3">
  				  <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
  				  <span className="text-lg">O índice detalhado do manual Solar Buy-Side</span>
  				</div>
  			  </div>
  			</div>

  			<div>
  			  <div className="bg-card rounded-lg p-8 border border-border shadow-lg">
  				<h3 className="text-2xl font-bold text-card-foreground mb-6 text-center">
  				  Solicite sua Prévia Gratuita
  				</h3>

  				<form onSubmit={handleSubmit} className="space-y-6">
  				  <div className="mb-4">
  					<label htmlFor="name" className="block text-sm font-medium mb-2">
  					  Nome e sobrenome
  					</label>
  					<Input
  					  id="name"
  					  name="name"
  					  type="text"
  					  value={formData.name}
  					  onChange={handleInputChange}
  					  required
  					  className="w-full"
  					  placeholder="Seu nome e sobrenome"
  					/>
  				  </div>

  				  <div className="mb-4">
  					<label htmlFor="email" className="block text-sm font-medium mb-2">
  					  Email
  					</label>
  					<Input
  					  id="email"
  					  name="email"
  					  type="email"
  					  value={formData.email}
  					  onChange={handleInputChange}
  					  required
  					  className="w-full"
  					  placeholder="seu@email.com"
  					/>
  				  </div>

  				  <div className="mb-6">
  					<label htmlFor="phone" className="block text-sm font-medium mb-2">
  					  Celular
  					</label>
  					<Input
  					  id="phone"
  					  name="phone"
  					  type="tel"
  					  value={formData.phone}
  					  onChange={handleInputChange}
  					  required
  					  className="w-full"
  					  placeholder="(11) 99999-9999"
  					/>
  				  </div>

  				  <Button type="submit" size="lg" className="w-full text-lg py-6">
  					BAIXAR E-BOOK GRATUITO
  				  </Button>
  				  
  				  <p className="text-sm text-center text-foreground/60 mt-4">
  					Confira seu e-mail para baixar o E-Book Manual Solar Buy-Side
  				  </p>
  				</form>
  			  </div>
  			</div>
  		  </div>
  		</div>
  	  </div>
  	</section>
  );
};

export default LeadMagnet;