import Hero from "@/components/Hero";
import VideoSection from "@/components/VideoSection";
import ManualReveal from "@/components/ManualReveal";
import TargetAudience from "@/components/TargetAudience";
import ManualInfo from "@/components/ManualInfo";
import Results from "@/components/Results";
import ManualFeatures from "@/components/ManualFeatures";
import Pricing from "@/components/Pricing";
import BuyerPreparation from "@/components/BuyerPreparation";
import TestimonialsCarousel from "@/components/TestimonialsCarousel";
import AuthorCredibility from "@/components/AuthorCredibility";
import FinalOffer from "@/components/FinalOffer";
import LeadMagnet from "@/components/LeadMagnet";
import Contact from "@/components/Contact";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <VideoSection />
      <TargetAudience />
      <ManualInfo />
      <Results />
      <ManualFeatures />
      <Pricing />
      <BuyerPreparation />
      <TestimonialsCarousel />
      <AuthorCredibility />
      <FinalOffer />
      <LeadMagnet />
      <Contact />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Index;
