import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Zap, Users } from "lucide-react";

const benefits = [
  { icon: Zap, text: "Setup in under 5 minutes" },
  { icon: Shield, text: "Bank-level security guaranteed" }, 
  { icon: Users, text: "Dedicated success manager" }
];

const CTA = () => {
  return (
    <section className="w-full py-32 relative overflow-hidden">
      <div className="absolute inset-0 premium-gradient"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/90 to-background/95"></div>
      
      <div className="max-w-5xl mx-auto px-6 text-center relative">
        <div className="fade-in-up">
          <h2 className="section-title mb-8 text-foreground">
            Ready to Transform Your Legal Practice?
          </h2>
          
          <p className="body-large mb-12 max-w-3xl mx-auto">
            Join hundreds of legal professionals who trust LegalBuddy for their document analysis needs. 
            Start your free trial today and experience the future of legal document review.
          </p>

          <div className="flex flex-col md:flex-row justify-center items-center gap-8 mb-12">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div key={index} className="flex items-center space-x-3">
                  <Icon className="w-6 h-6 text-accent" />
                  <span className="font-semibold text-lg">{benefit.text}</span>
                </div>
              );
            })}
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button className="btn-accent text-xl px-12 py-6">
              Start Free Trial
              <ArrowRight className="w-6 h-6 ml-2" />
            </Button>
            <Button className="btn-secondary text-xl px-12 py-6">
              Schedule Demo
            </Button>
          </div>

          <p className="text-muted-foreground mt-8">
            No credit card required • 14-day free trial • Cancel anytime
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTA;