import { Button } from "@/components/ui/button";
import platformMockup from "@/assets/platform-mockup.jpg";
const Hero = () => {
  return <section className="w-full pt-32 pb-20 lg:pt-40 lg:pb-32 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-muted/30 to-background"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div className="space-y-10 fade-in-up">
            <div className="inline-block bg-accent/10 text-accent px-6 py-3 rounded-full font-bold text-lg mb-6">
              🏆 Legal Innovation Award Winner 2024
            </div>
            
            <h1 className="hero-headline text-6xl">
              Legal Documents,{" "}
              <span className="italic">REIMAGINED.</span>
            </h1>
            
            <p className="body-large max-w-lg">
              AI-powered document analysis that saves legal professionals 40-60% of their review time. 
              Upload, analyze, and extract insights in minutes, not hours.
            </p>

            {/* Trust Indicators */}
            <div className="flex items-center space-x-8 text-muted-foreground">
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground">500+</div>
                <div className="text-sm">Legal Professionals</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground">2.3M+</div>
                <div className="text-sm">Documents Analyzed</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground">99.4%</div>
                <div className="text-sm">Accuracy Rate</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-6">
              <Button className="btn-accent text-xl px-12 py-6">
                Start Free Trial
              </Button>
              <Button className="btn-secondary text-xl px-12 py-6">
                Watch Demo
              </Button>
            </div>

            {/* Social Proof */}
            <div className="pt-8">
              <p className="text-muted-foreground mb-4">Trusted by leading law firms</p>
              <div className="flex flex-wrap gap-6 text-muted-foreground/70 font-semibold">
                <span>Baker McKenzie</span>
                <span>DLA Piper</span>
                <span>Clifford Chance</span>
                <span>Freshfields</span>
              </div>
            </div>
          </div>

          {/* Right Content - Platform Mockup */}
          <div className="relative fade-in-up stagger-2">
            <div className="relative z-10">
              <img src={platformMockup} alt="LegalBuddy Platform Interface" className="w-full h-auto rounded-xl shadow-2xl border border-border" />
            </div>
            {/* Premium background elements */}
            <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-gold/20 transform translate-x-6 translate-y-6 -z-10 rounded-xl"></div>
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-gold/30 rounded-full blur-2xl"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-accent/30 rounded-full blur-2xl"></div>
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;