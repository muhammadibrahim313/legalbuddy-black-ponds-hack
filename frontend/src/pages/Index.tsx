import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TrustedBy from "@/components/TrustedBy";
import Features from "@/components/Features";
import Stats from "@/components/Stats";
import LiveDemo from "@/components/LiveDemo";
import ROICalculator from "@/components/ROICalculator";
import Testimonials from "@/components/Testimonials";
import Integrations from "@/components/Integrations";
import Technology from "@/components/Technology";
import IndustryRecognition from "@/components/IndustryRecognition";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <TrustedBy />
      <Features />
      <Stats />
      <LiveDemo />
      <ROICalculator />
      <Testimonials />
      <Integrations />
      <Technology />
      <IndustryRecognition />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
