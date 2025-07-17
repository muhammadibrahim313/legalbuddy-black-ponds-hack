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
    <section className="w-full py-20 lg:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="section-title mb-6">Trusted by Legal Professionals</h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl lg:text-6xl font-black mb-2">
                {stat.value}
              </div>
              <div className="text-lg md:text-xl font-medium text-muted-foreground">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;