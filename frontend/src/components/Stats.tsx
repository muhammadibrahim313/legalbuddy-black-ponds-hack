const stats = [
  {
    value: "40-60%",
    label: "Time Saved"
  },
  {
    value: "99.9%",
    label: "Accuracy"
  },
  {
    value: "Bank-Level",
    label: "Security"
  },
  {
    value: "24/7",
    label: "Support"
  }
];

const Stats = () => {
  return (
    <section className="w-full py-32 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-r from-background via-muted/20 to-background"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="text-center mb-20">
          <h2 className="section-title mb-8">Trusted by Legal Professionals</h2>
          <p className="body-large text-muted-foreground max-w-2xl mx-auto">
            Real metrics from real legal professionals transforming their practice
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
          {stats.map((stat, index) => (
            <div key={index} className={`text-center fade-in-up stagger-${index + 1}`}>
              <div className="stat-number text-accent mb-4">
                {stat.value}
              </div>
              <div className="text-xl md:text-2xl font-bold text-foreground mb-2">
                {stat.label}
              </div>
              <div className="h-1 w-16 bg-accent mx-auto rounded-full"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;