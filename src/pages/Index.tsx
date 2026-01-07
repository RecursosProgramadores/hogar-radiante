import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import BenefitsSection from "@/components/BenefitsSection";
import HowToUseSection from "@/components/HowToUseSection";
import UpsellSection from "@/components/UpsellSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ShippingSection from "@/components/ShippingSection";
import FinalCTASection from "@/components/FinalCTASection";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <BenefitsSection />
        <HowToUseSection />
        <UpsellSection />
        <TestimonialsSection />
        <ShippingSection />
        <FinalCTASection />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
