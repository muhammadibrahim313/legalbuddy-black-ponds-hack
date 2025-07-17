import { Award, TrendingUp, Users, FileText } from "lucide-react";

const recognition = [
  {
    title: "Featured in Legal Innovation Today",
    description: "Top 10 AI Tools Transforming Legal Practice",
    date: "December 2024"
  },
  {
    title: "TechCrunch Spotlight",
    description: "The Future of Legal Document Analysis",
    date: "November 2024"
  },
  {
    title: "Law360 Technology Review",
    description: "Revolutionary AI Platform for Legal Professionals",
    date: "October 2024"
  }
];

const awards = [
  {
    icon: Award,
    title: "AI Innovation Award 2024",
    organization: "Legal Technology Association"
  },
  {
    icon: TrendingUp,
    title: "Best Legal Tech Startup",
    organization: "Legal Innovation Awards"
  },
  {
    icon: Users,
    title: "Client Choice Award",
    organization: "Legal Services Review"
  }
];

const metrics = [
  {
    icon: FileText,
    value: "2.3M+",
    label: "Documents Analyzed",
    description: "Across 50+ countries"
  },
  {
    icon: Users,
    value: "500+",
    label: "Legal Professionals",
    description: "Including AmLaw 200 firms"
  },
  {
    icon: TrendingUp,
    value: "99.4%",
    label: "Accuracy Rate",
    description: "Independently verified"
  },
  {
    icon: Award,
    value: "8.7",
    label: "Hours Saved",
    description: "Per case on average"
  }
];

const IndustryRecognition = () => {
  return (
    <section className="w-full py-32 bg-muted">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="section-title mb-8">Industry Recognition</h2>
          <p className="body-large text-muted-foreground max-w-2xl mx-auto">
            Trusted by the legal industry and recognized by leading publications
          </p>
        </div>

        {/* Media Recognition */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center mb-12">As Featured In</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {recognition.map((item, index) => (
              <div 
                key={index} 
                className={`premium-card text-center fade-in-up stagger-${index + 1}`}
              >
                <h4 className="text-xl font-bold mb-3">{item.title}</h4>
                <p className="text-muted-foreground mb-3">{item.description}</p>
                <span className="text-accent font-semibold">{item.date}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Awards */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-center mb-12">Awards & Recognition</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {awards.map((award, index) => {
              const Icon = award.icon;
              return (
                <div 
                  key={index} 
                  className={`premium-card text-center fade-in-up stagger-${index + 1}`}
                >
                  <Icon className="w-16 h-16 mx-auto mb-6 text-gold" strokeWidth={1.5} />
                  <h4 className="text-xl font-bold mb-3">{award.title}</h4>
                  <p className="text-muted-foreground">{award.organization}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Key Metrics */}
        <div>
          <h3 className="text-3xl font-bold text-center mb-12">Platform Metrics</h3>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {metrics.map((metric, index) => {
              const Icon = metric.icon;
              return (
                <div 
                  key={index} 
                  className={`premium-card text-center fade-in-up stagger-${index + 1}`}
                >
                  <Icon className="w-12 h-12 mx-auto mb-4 text-accent" strokeWidth={1.5} />
                  <div className="stat-number text-accent mb-2">{metric.value}</div>
                  <h4 className="text-lg font-bold mb-2">{metric.label}</h4>
                  <p className="text-muted-foreground text-sm">{metric.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default IndustryRecognition;