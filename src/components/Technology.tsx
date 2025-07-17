const technologies = [
  "LlamaParse",
  "RAG",
  "OpenAI",
  "Vector DB",
  "Python",
  "React"
];

const Technology = () => {
  return (
    <section className="w-full py-20 lg:py-32 bg-secondary">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center space-y-8">
          <h2 className="section-title">Powered by Advanced AI</h2>
          
          <p className="body-large max-w-3xl mx-auto">
            Built with cutting-edge technology including LlamaParse, RAG, OpenAI, and vector databases 
            for the most accurate legal document analysis available in the market today.
          </p>

          {/* Technology Stack */}
          <div className="flex flex-wrap justify-center gap-6 pt-8">
            {technologies.map((tech, index) => (
              <div 
                key={index} 
                className="px-6 py-3 border border-border bg-background font-semibold text-lg transition-all duration-200 hover:border-primary hover:scale-105"
              >
                {tech}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technology;