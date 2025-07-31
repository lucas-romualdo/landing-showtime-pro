import Hero from "@/components/Hero";
import About from "@/components/About";
import Schedule from "@/components/Schedule";
import Speakers from "@/components/Speakers";
import Pricing from "@/components/Pricing";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <Schedule />
      <Speakers />
      <Pricing />
      <Footer />
    </div>
  );
};

export default Index;
