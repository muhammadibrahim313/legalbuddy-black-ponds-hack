const technologies = ["LlamaParse", "RAG", "OpenAI", "Vector DB", "Python", "React"];
const Technology = () => {
  return <section className="w-full py-32 bg-secondary">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center space-y-12">
          <div>
            <h2 className="section-title mb-8">Powered by Advanced AI</h2>
            
            <p className="body-large max-w-4xl mx-auto">
              Built with cutting-edge technology including LlamaParse, RAG, OpenAI, and vector databases 
              for the most accurate legal document analysis available in the market today.
            </p>
          </div>

          {/* Technology Stack */}
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6 pt-12">
            {technologies.map((tech, index) => <div key={index} className={`premium-card text-center py-8 fade-in-up stagger-${index % 7 + 1}`}>
                <div className="text-xl font-bold mx-0 px-0 my-0">{tech}</div>
              </div>)}
          </div>

          {/* Performance Metrics */}
          <div className="grid md:grid-cols-3 gap-8 pt-16">
            <div className="premium-card text-center fade-in-up stagger-1">
              <div className="text-4xl font-black text-accent mb-3">99.4%</div>
              <div className="text-lg font-bold">Processing Accuracy</div>
              <div className="text-muted-foreground">Independently verified</div>
            </div>
            <div className="premium-card text-center fade-in-up stagger-2">
              <div className="text-4xl font-black text-accent mb-3">&lt;30s</div>
              <div className="text-lg font-bold">Average Analysis Time</div>
              <div className="text-muted-foreground">Per document</div>
            </div>
            <div className="premium-card text-center fade-in-up stagger-3">
              <div className="text-4xl font-black text-accent mb-3">24/7</div>
              <div className="text-lg font-bold">Uptime Guarantee</div>
              <div className="text-muted-foreground">Enterprise SLA</div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Technology;