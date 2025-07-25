import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Chen",
    title: "Senior Partner",
    firm: "Chen & Associates",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
    quote: "LegalBuddy has transformed our due diligence process. What used to take our team 3 days now takes 6 hours with 99% accuracy.",
    rating: 5,
    results: "75% time reduction"
  },
  {
    name: "Michael Rodriguez",
    title: "Managing Director",
    firm: "Rodriguez Legal Group",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    quote: "The liability risk analysis feature has prevented costly oversights. It's like having a senior associate review every document.",
    rating: 5,
    results: "40% faster reviews"
  },
  {
    name: "Dr. Emma Thompson",
    title: "General Counsel",
    firm: "TechCorp Industries",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    quote: "The ROI is incredible. We've saved over 500 hours in document review time in just 3 months.",
    rating: 5,
    results: "500+ hours saved"
  }
];

const Testimonials = () => {
  return (
    <section className="w-full py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="section-title mb-8">What Legal Professionals Say</h2>
          <p className="body-large text-muted-foreground max-w-2xl mx-auto">
            Real results from real legal professionals who trust LegalBuddy
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className={`testimonial-card fade-in-up stagger-${index + 1}`}
            >
              {/* Quote Icon */}
              <Quote className="w-8 h-8 text-accent mb-6" />
              
              {/* Rating */}
              <div className="flex mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-gold text-gold" />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="body-medium mb-8 italic">
                "{testimonial.quote}"
              </blockquote>

              {/* Results Badge */}
              <div className="inline-block bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-semibold mb-6">
                {testimonial.results}
              </div>

              {/* Author */}
              <div className="flex items-center">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full mr-4 object-cover"
                />
                <div>
                  <h4 className="font-bold text-lg">{testimonial.name}</h4>
                  <p className="text-muted-foreground">{testimonial.title}</p>
                  <p className="text-accent font-semibold">{testimonial.firm}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;