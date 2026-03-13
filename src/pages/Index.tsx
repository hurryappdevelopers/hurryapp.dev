import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import CalculatorSection from "@/components/CalculatorSection";
import FeaturesSection from "@/components/FeaturesSection";
import DevelopmentSection from "@/components/DevelopmentSection";
import PortfolioSection from "@/components/PortfolioSection";
import HowWeWorkSection from "@/components/HowWeWorkSection";
import MeetingSection from "@/components/MeetingSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <CalculatorSection />
      <DevelopmentSection />
      <PortfolioSection />
      <HowWeWorkSection />
      <MeetingSection />
      <Footer />
    </div>
  );
};

export default Index;
