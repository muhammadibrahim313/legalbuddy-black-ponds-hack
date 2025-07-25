import { Button } from "@/components/ui/button";
import platformMockup from "@/assets/platform-mockup.jpg";
const Hero = () => {
  return <section className="w-full pt-32 pb-20 lg:pt-40 lg:pb-32 relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-muted/30 to-background"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div className="space-y-10 fade-in-up">
            <div className="inline-block bg-accent/10 text-accent px-6 py-3 rounded-full font-bold text-lg mb-6">
              🏆 Legal Innovation Award Winner 2024
            </div>
            
            <h1 className="hero-headline text-6xl">
              Legal Documents,{" "}
              <span className="italic">REIMAGINED.</span>
            </h1>
            
            <p className="body-large max-w-lg">
              AI-powered document analysis that saves legal professionals 40-60% of their review time. 
              Upload, analyze, and extract insights in minutes, not hours.
            </p>

            {/* Trust Indicators */}
            <div className="flex items-center space-x-8 text-muted-foreground">
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground">500+</div>
                <div className="text-sm">Legal Professionals</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground">2.3M+</div>
                <div className="text-sm">Documents Analyzed</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-foreground">99.4%</div>
                <div className="text-sm">Accuracy Rate</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-6">
              <Button className="btn-accent text-xl px-12 py-6">
                Start Free Trial
              </Button>
              <Button className="btn-secondary text-xl px-12 py-6">
                Watch Demo
              </Button>
            </div>

            {/* Social Proof */}
            <div className="pt-8">
              <p className="text-muted-foreground mb-4">Trusted by leading law firms</p>
              <div className="flex flex-wrap gap-6 text-muted-foreground/70 font-semibold">
                <span>Baker McKenzie</span>
                <span>DLA Piper</span>
                <span>Clifford Chance</span>
                <span>Freshfields</span>
              </div>
            </div>
          </div>

          {/* Right Content - Interactive Platform Mockup */}
          <div className="relative fade-in-up stagger-2">
            {/* Main Platform Image */}
            <div className="relative z-10 group cursor-pointer transition-transform duration-500 hover:scale-[1.02]">
              <img 
                src={platformMockup} 
                alt="LegalBuddy Platform Interface" 
                className="w-full h-auto rounded-xl shadow-2xl border border-border transition-all duration-500 group-hover:shadow-3xl" 
              />
              
              {/* Interactive Overlay Effects */}
              <div className="absolute inset-0 bg-gradient-to-tr from-accent/10 via-transparent to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl"></div>
            </div>

            {/* Floating Legal Use Cases - Infinite Animation */}
            <div className="absolute -left-8 top-1/4 z-20">
              <div className="animate-float-slow">
                <div className="bg-white/95 backdrop-blur-sm rounded-lg shadow-lg p-4 max-w-xs border border-accent/20 hover:scale-105 transition-transform duration-300 cursor-pointer">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-accent/20 rounded-lg flex items-center justify-center">
                      <span className="text-lg">📄</span>
                    </div>
                    <div>
                      <div className="font-semibold text-sm text-foreground">Contract Analysis</div>
                      <div className="text-xs text-muted-foreground">AI reviewing clauses...</div>
                    </div>
                  </div>
                  <div className="mt-2 bg-accent/10 h-1 rounded-full overflow-hidden">
                    <div className="bg-accent h-full w-3/4 rounded-full animate-pulse"></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -right-8 top-1/3 z-20">
              <div className="animate-float-delayed">
                <div className="bg-white/95 backdrop-blur-sm rounded-lg shadow-lg p-4 max-w-xs border border-primary/20 hover:scale-105 transition-transform duration-300 cursor-pointer">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center">
                      <span className="text-lg">⚖️</span>
                    </div>
                    <div>
                      <div className="font-semibold text-sm text-foreground">Case Research</div>
                      <div className="text-xs text-muted-foreground">Finding precedents...</div>
                    </div>
                  </div>
                  <div className="mt-2 bg-primary/10 h-1 rounded-full overflow-hidden">
                    <div className="bg-primary h-full w-2/3 rounded-full animate-pulse"></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -left-4 bottom-1/4 z-20">
              <div className="animate-float-reverse">
                <div className="bg-white/95 backdrop-blur-sm rounded-lg shadow-lg p-4 max-w-xs border border-green-500/20 hover:scale-105 transition-transform duration-300 cursor-pointer">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-green-500/20 rounded-lg flex items-center justify-center">
                      <span className="text-lg">🔍</span>
                    </div>
                    <div>
                      <div className="font-semibold text-sm text-foreground">Due Diligence</div>
                      <div className="text-xs text-muted-foreground">Scanning documents...</div>
                    </div>
                  </div>
                  <div className="mt-2 bg-green-500/10 h-1 rounded-full overflow-hidden">
                    <div className="bg-green-500 h-full w-4/5 rounded-full animate-pulse"></div>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -right-4 bottom-1/3 z-20">
              <div className="animate-float-fast">
                <div className="bg-white/95 backdrop-blur-sm rounded-lg shadow-lg p-4 max-w-xs border border-blue-500/20 hover:scale-105 transition-transform duration-300 cursor-pointer">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center">
                      <span className="text-lg">📊</span>
                    </div>
                    <div>
                      <div className="font-semibold text-sm text-foreground">Report Generation</div>
                      <div className="text-xs text-muted-foreground">Compiling insights...</div>
                    </div>
                  </div>
                  <div className="mt-2 bg-blue-500/10 h-1 rounded-full overflow-hidden">
                    <div className="bg-blue-500 h-full w-1/2 rounded-full animate-pulse"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Infinite Scrolling Legal Scenarios */}
            <div className="absolute top-0 -left-12 h-full w-2 overflow-hidden">
              <div className="animate-scroll-infinite">
                <div className="flex flex-col space-y-8 h-full">
                  {[
                    { icon: '📋', label: 'Contract Review' },
                    { icon: '🏛️', label: 'Litigation Support' },
                    { icon: '💼', label: 'Compliance Check' },
                    { icon: '📜', label: 'Legal Research' },
                    { icon: '⚡', label: 'Quick Analysis' },
                    { icon: '🔒', label: 'Confidential Docs' },
                    { icon: '📈', label: 'Risk Assessment' },
                    { icon: '✅', label: 'Quality Assurance' }
                  ].map((item, index) => (
                    <div key={index} className="flex items-center space-x-2 bg-white/90 rounded-lg p-2 shadow-md border border-accent/10 hover:bg-accent/10 transition-colors duration-300">
                      <span className="text-sm">{item.icon}</span>
                      <span className="text-xs font-medium text-foreground whitespace-nowrap">{item.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Premium background elements with enhanced animations */}
            <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-gold/20 transform translate-x-6 translate-y-6 -z-10 rounded-xl animate-pulse-slow"></div>
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-gold/30 rounded-full blur-2xl animate-bounce-slow"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-accent/30 rounded-full blur-2xl animate-bounce-slow"></div>
            
            {/* Interactive Particles */}
            <div className="absolute inset-0 -z-5">
              {[...Array(6)].map((_, i) => (
                <div
                  key={i}
                  className={`absolute w-2 h-2 bg-accent/40 rounded-full animate-float-particle-${i + 1}`}
                  style={{
                    left: `${20 + (i * 15)}%`,
                    top: `${15 + (i * 12)}%`,
                    animationDelay: `${i * 0.5}s`
                  }}
                ></div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;