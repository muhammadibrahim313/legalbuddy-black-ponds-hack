import { Zap, Database, Cloud, Shield } from "lucide-react";

const integrations = [
  { name: "Clio", category: "Practice Management" },
  { name: "NetDocuments", category: "Document Management" },
  { name: "iManage", category: "Work Product Management" },
  { name: "Microsoft 365", category: "Productivity Suite" },
  { name: "Salesforce", category: "CRM Platform" },
  { name: "DocuSign", category: "Digital Signatures" },
  { name: "Box", category: "Cloud Storage" },
  { name: "Dropbox", category: "File Sharing" }
];

const practiceAreas = [
  {
    icon: Shield,
    title: "Contract Analysis",
    description: "M&A, licensing agreements, service contracts",
    accuracy: "99.2%"
  },
  {
    icon: Database,
    title: "Due Diligence",
    description: "Financial documents, compliance reviews",
    accuracy: "98.7%"
  },
  {
    icon: Zap,
    title: "Litigation Support",
    description: "Discovery documents, case preparation",
    accuracy: "99.1%"
  },
  {
    icon: Cloud,
    title: "Compliance Review",
    description: "Regulatory filings, policy documents",
    accuracy: "98.9%"
  }
];

const Integrations = () => {
  return (
    <section className="w-full py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20">
          {/* Practice Areas */}
          <div className="fade-in-up">
            <h2 className="section-title mb-8">Specialized Expertise</h2>
            <p className="body-large text-muted-foreground mb-12">
              Purpose-built for specific legal practice areas with industry-leading accuracy
            </p>
            
            <div className="space-y-8">
              {practiceAreas.map((area, index) => {
                const Icon = area.icon;
                return (
                  <div 
                    key={index} 
                    className={`premium-card fade-in-up stagger-${index + 1}`}
                  >
                    <div className="flex items-start space-x-6">
                      <Icon className="w-12 h-12 text-accent flex-shrink-0 mt-2" strokeWidth={1.5} />
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-3">
                          <h3 className="text-2xl font-bold">{area.title}</h3>
                          <span className="bg-accent/10 text-accent px-3 py-1 rounded-full text-sm font-bold">
                            {area.accuracy}
                          </span>
                        </div>
                        <p className="text-muted-foreground">{area.description}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Integrations */}
          <div className="fade-in-up stagger-2">
            <h2 className="section-title mb-8">Seamless Integrations</h2>
            <p className="body-large text-muted-foreground mb-12">
              Works with your existing legal technology stack
            </p>
            
            <div className="premium-card">
              <h3 className="text-2xl font-bold mb-8">Integrates With</h3>
              <div className="grid grid-cols-2 gap-6">
                {integrations.map((integration, index) => (
                  <div 
                    key={index} 
                    className="p-6 bg-muted rounded-lg hover:bg-accent/5 transition-all duration-300 hover:scale-105"
                  >
                    <h4 className="font-bold text-lg mb-2">{integration.name}</h4>
                    <p className="text-muted-foreground text-sm">{integration.category}</p>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 p-6 bg-accent/5 rounded-lg border border-accent/20">
                <h4 className="font-bold text-lg mb-2 text-accent">API Access Available</h4>
                <p className="text-muted-foreground">
                  Build custom integrations with our comprehensive REST API and webhooks
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Integrations;