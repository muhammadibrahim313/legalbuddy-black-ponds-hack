import { useState } from "react";
import { Upload, FileText, Brain, CheckCircle, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const demoSteps = [
  {
    id: 1,
    icon: Upload,
    title: "Upload Document",
    description: "Drag & drop or select your legal document",
    status: "completed"
  },
  {
    id: 2,
    icon: Brain,
    title: "AI Analysis",
    description: "Advanced AI processes and analyzes content",
    status: "processing"
  },
  {
    id: 3,
    icon: CheckCircle,
    title: "Results Ready",
    description: "Get comprehensive insights and recommendations",
    status: "pending"
  }
];

const analysisResults = {
  summary: "This 47-page Software License Agreement contains standard terms with moderate liability exposure in sections 8.3 and 12.1.",
  riskScore: 23,
  keyFindings: [
    "Unlimited liability clause in Section 8.3 (HIGH RISK)",
    "Automatic renewal terms in Section 4.2 (MEDIUM RISK)", 
    "IP indemnification coverage adequate (LOW RISK)",
    "Termination clauses favor licensee (LOW RISK)"
  ],
  recommendedActions: [
    "Negotiate liability cap in Section 8.3",
    "Add termination notice period",
    "Review data processing terms"
  ]
};

const LiveDemo = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [showResults, setShowResults] = useState(false);

  const startDemo = () => {
    setCurrentStep(2);
    setTimeout(() => {
      setCurrentStep(3);
      setShowResults(true);
    }, 3000);
  };

  return (
    <section className="w-full py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="section-title mb-8">Experience LegalBuddy Live</h2>
          <p className="body-large text-muted-foreground max-w-2xl mx-auto">
            See our AI in action with a sample legal document analysis
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-20">
          {/* Demo Interface */}
          <div className="premium-card fade-in-up">
            <h3 className="text-3xl font-bold mb-8">Interactive Demo</h3>
            
            {/* Progress Steps */}
            <div className="space-y-6 mb-10">
              {demoSteps.map((step) => {
                const Icon = step.icon;
                const isActive = currentStep >= step.id;
                const isCompleted = currentStep > step.id;
                
                return (
                  <div key={step.id} className="flex items-center space-x-4">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center border-2 transition-all duration-500 ${
                      isCompleted ? 'bg-accent border-accent' :
                      isActive ? 'border-accent bg-accent/10' : 'border-muted'
                    }`}>
                      <Icon className={`w-6 h-6 ${
                        isCompleted ? 'text-white' :
                        isActive ? 'text-accent' : 'text-muted-foreground'
                      }`} />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg">{step.title}</h4>
                      <p className="text-muted-foreground">{step.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Demo Upload Area */}
            <div className="border-2 border-dashed border-muted rounded-lg p-12 text-center mb-8">
              <FileText className="w-16 h-16 mx-auto mb-4 text-muted-foreground" />
              <h4 className="text-xl font-bold mb-2">Sample: Software License Agreement</h4>
              <p className="text-muted-foreground mb-6">47 pages • PDF • 2.3 MB</p>
              
              {currentStep === 1 && (
                <Button onClick={startDemo} className="btn-accent">
                  Start Analysis Demo
                </Button>
              )}
              
              {currentStep === 2 && (
                <div className="flex items-center justify-center space-x-2">
                  <Clock className="w-5 h-5 animate-spin text-accent" />
                  <span className="text-accent font-semibold">Processing...</span>
                </div>
              )}
              
              {currentStep === 3 && (
                <div className="flex items-center justify-center space-x-2 text-accent">
                  <CheckCircle className="w-6 h-6" />
                  <span className="font-bold">Analysis Complete!</span>
                </div>
              )}
            </div>
          </div>

          {/* Results Panel */}
          <div className={`space-y-8 transition-all duration-1000 ${showResults ? 'opacity-100' : 'opacity-30'}`}>
            {/* Risk Score */}
            <div className="premium-card fade-in-up stagger-2">
              <h3 className="text-2xl font-bold mb-4">Risk Assessment</h3>
              <div className="flex items-center space-x-4 mb-4">
                <div className="text-4xl font-black text-accent">{analysisResults.riskScore}%</div>
                <div>
                  <div className="text-lg font-bold">Low-Medium Risk</div>
                  <div className="text-muted-foreground">Acceptable with minor modifications</div>
                </div>
              </div>
              <div className="w-full bg-muted rounded-full h-3">
                <div 
                  className="bg-accent h-3 rounded-full transition-all duration-1000"
                  style={{ width: `${analysisResults.riskScore}%` }}
                ></div>
              </div>
            </div>

            {/* Summary */}
            <div className="premium-card fade-in-up stagger-3">
              <h3 className="text-2xl font-bold mb-4">Document Summary</h3>
              <p className="body-medium">{analysisResults.summary}</p>
            </div>

            {/* Key Findings */}
            <div className="premium-card fade-in-up stagger-4">
              <h3 className="text-2xl font-bold mb-4">Key Findings</h3>
              <div className="space-y-3">
                {analysisResults.keyFindings.map((finding, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className={`w-2 h-2 rounded-full mt-2 ${
                      finding.includes('HIGH') ? 'bg-red-500' :
                      finding.includes('MEDIUM') ? 'bg-yellow-500' : 'bg-green-500'
                    }`}></div>
                    <span className="body-medium">{finding}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Recommended Actions */}
            <div className="premium-card fade-in-up stagger-5">
              <h3 className="text-2xl font-bold mb-4">Recommended Actions</h3>
              <div className="space-y-2">
                {analysisResults.recommendedActions.map((action, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-accent" />
                    <span className="body-medium">{action}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-16">
          <Button className="btn-primary text-xl px-12 py-6">
            Try With Your Own Documents
          </Button>
        </div>
      </div>
    </section>
  );
};

export default LiveDemo;