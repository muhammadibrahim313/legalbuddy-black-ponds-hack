import { Button } from "@/components/ui/button";
import platformMockup from "@/assets/platform-mockup.jpg";

const Hero = () => {
  return (
    <section className="w-full py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <h1 className="hero-headline">
              Legal Documents,{" "}
              <span className="italic">REIMAGINED.</span>
            </h1>
            
            <p className="body-large max-w-lg">
              AI-powered document analysis that saves legal professionals 40-60% of their review time. 
              Upload, analyze, and extract insights in minutes, not hours.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="btn-primary">
                Start Free Trial
              </Button>
              <Button className="btn-secondary">
                Watch Demo
              </Button>
            </div>
          </div>

          {/* Right Content - Platform Mockup */}
          <div className="relative">
            <div className="relative z-10">
              <img 
                src={platformMockup} 
                alt="LegalBuddy Platform Interface" 
                className="w-full h-auto border border-border"
              />
            </div>
            {/* Subtle background element */}
            <div className="absolute inset-0 bg-primary/5 transform translate-x-4 translate-y-4 -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;