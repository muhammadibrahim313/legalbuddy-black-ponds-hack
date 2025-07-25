import { FileText, Shield, MessageSquare, Download, Lock, Users } from "lucide-react";

const features = [
  {
    icon: FileText,
    title: "Instant Document Summaries",
    description: "Auto-generate comprehensive summaries of complex legal documents in seconds."
  },
  {
    icon: Shield,
    title: "Liability Risk Analysis", 
    description: "Get percentage-based risk assessments with actionable insights and recommendations."
  },
  {
    icon: MessageSquare,
    title: "Smart Q&A System",
    description: "Ask natural language questions about your documents and get precise answers."
  },
  {
    icon: Download,
    title: "Professional PDF Reports",
    description: "Download client-ready reports with your findings and analysis results."
  },
  {
    icon: Lock,
    title: "Secure Cloud Storage",
    description: "Bank-level security for sensitive legal documents with encrypted storage."
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description: "Share insights and collaborate seamlessly with your legal team members."
  }
];

const Features = () => {
  return (
    <section id="features" className="w-full py-32 bg-secondary">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="section-title mb-8">Transform Your Legal Workflow</h2>
          <p className="body-large max-w-3xl mx-auto">
            Streamline your document analysis process with AI-powered tools designed specifically for legal professionals.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className={`feature-card fade-in-up stagger-${(index % 6) + 1}`}>
                <div className="mb-8">
                  <div className="w-16 h-16 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-8 h-8 text-accent" strokeWidth={1.5} />
                  </div>
                </div>
                <h3 className="feature-title mb-6">{feature.title}</h3>
                <p className="body-medium text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;