import { Building2, Shield, Award, Users } from "lucide-react";

const trustedLogos = [
  "Baker McKenzie", "Clifford Chance", "DLA Piper", "Freshfields", 
  "Latham & Watkins", "Skadden", "White & Case", "Kirkland & Ellis"
];

const badges = [
  { icon: Shield, label: "SOC 2 Compliant" },
  { icon: Building2, label: "Bank-Level Encryption" },
  { icon: Award, label: "GDPR Compliant" },
  { icon: Users, label: "ISO 27001 Certified" }
];

const TrustedBy = () => {
  return (
    <section className="w-full py-32 bg-muted">
      <div className="max-w-7xl mx-auto px-6">
        {/* Trusted By Section */}
        <div className="text-center mb-20">
          <h2 className="section-title mb-8">Trusted by 500+ Legal Professionals</h2>
          <p className="body-large text-muted-foreground mb-16">
            Leading law firms rely on LegalBuddy for their most critical document analysis
          </p>
          
          {/* Scrolling Logos */}
          <div className="overflow-hidden">
            <div className="flex animate-scroll space-x-16">
              {[...trustedLogos, ...trustedLogos].map((logo, index) => (
                <div 
                  key={index} 
                  className="flex-shrink-0 text-2xl font-bold text-muted-foreground/70 whitespace-nowrap"
                >
                  {logo}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Security Badges */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {badges.map((badge, index) => {
            const Icon = badge.icon;
            return (
              <div 
                key={index} 
                className={`premium-card text-center fade-in-up stagger-${index + 1}`}
              >
                <Icon className="w-12 h-12 mx-auto mb-4 text-accent" strokeWidth={1.5} />
                <h3 className="font-bold text-lg">{badge.label}</h3>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TrustedBy;