import Hero from "@/components/Hero";
import ManualReveal from "@/components/ManualReveal";
import TargetAudience from "@/components/TargetAudience";
import Results from "@/components/Results";
import UrgencyWarning from "@/components/UrgencyWarning";
import BuyerPreparation from "@/components/BuyerPreparation";
import TestimonialsCarousel from "@/components/TestimonialsCarousel";
import AuthorCredibility from "@/components/AuthorCredibility";
import FinalOffer from "@/components/FinalOffer";
import LeadMagnet from "@/components/LeadMagnet";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <ManualReveal />
      <TargetAudience />
      <Results />
      <UrgencyWarning />
      <BuyerPreparation />
      <TestimonialsCarousel />
      <AuthorCredibility />
      <FinalOffer />
      <LeadMagnet />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Index;
