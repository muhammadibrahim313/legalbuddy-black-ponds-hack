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
    <section id="features" className="w-full py-20 lg:py-32 bg-secondary">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="section-title mb-6">Transform Your Legal Workflow</h2>
          <p className="body-large max-w-2xl mx-auto">
            Streamline your document analysis process with AI-powered tools designed specifically for legal professionals.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="feature-card">
                <div className="mb-6">
                  <Icon className="w-8 h-8 text-primary" strokeWidth={1.5} />
                </div>
                <h3 className="feature-title mb-4">{feature.title}</h3>
                <p className="body-medium text-muted-foreground">{feature.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;