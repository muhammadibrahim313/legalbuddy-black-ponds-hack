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

          {/* Right Content - Premium 3D Interactive Platform */}
          <div className="relative fade-in-up stagger-2">
            {/* Main Platform Image with 3D Transform */}
            <div className="relative z-10 group cursor-pointer perspective-1000">
              <div className="relative transform-3d transition-all duration-700 hover:scale-105 hover:rotateY-5 hover:rotateX-2">
                <img 
                  src={platformMockup} 
                  alt="LegalBuddy Platform Interface" 
                  className="w-full h-auto rounded-2xl shadow-2xl border border-white/20 transition-all duration-700 group-hover:shadow-4xl backdrop-blur-sm" 
                />
                
                {/* Glassmorphism Overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-white/10 via-transparent to-blue-500/10 opacity-0 group-hover:opacity-100 transition-all duration-700 rounded-2xl backdrop-blur-sm"></div>
                
                {/* Premium Glow Effect */}
                <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-700 shadow-glow-blue"></div>
              </div>
              
              {/* Floating UI Elements */}
              <div className="absolute -top-8 -right-8 z-20">
                <div className="glass-card p-4 rounded-xl animate-float-elegant group-hover:scale-110 transition-all duration-500">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse-glow"></div>
                    <span className="text-sm font-medium text-white/90">Live Processing</span>
                  </div>
                </div>
              </div>
              
              <div className="absolute -bottom-6 -left-6 z-20">
                <div className="glass-card p-4 rounded-xl animate-float-elegant-delayed group-hover:scale-110 transition-all duration-500">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                      <span className="text-white text-xs font-bold">AI</span>
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-white/90">99.4% Accuracy</div>
                      <div className="text-xs text-white/70">Real-time Analysis</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Premium Floating Legal Workflow Cards */}
            <div className="absolute -left-12 top-1/6 z-30">
              <div className="animate-float-premium">
                <div className="premium-glass-card group/card cursor-pointer">
                  <div className="relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-cyan-500/20 opacity-0 group-hover/card:opacity-100 transition-all duration-500"></div>
                    <div className="relative z-10 p-6">
                      <div className="flex items-center space-x-4 mb-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center shadow-lg transform group-hover/card:scale-110 transition-transform duration-300">
                          <span className="text-xl animate-pulse-slow">📋</span>
                        </div>
                        <div>
                          <h4 className="font-bold text-white/90 group-hover/card:text-cyan-400 transition-colors duration-300">Contract Intelligence</h4>
                          <p className="text-xs text-white/60">AI-powered clause extraction</p>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex justify-between text-xs">
                          <span className="text-white/70">Processing</span>
                          <span className="text-cyan-400 font-medium">87%</span>
                        </div>
                        <div className="premium-progress-bar">
                          <div className="premium-progress-fill w-4/5"></div>
                        </div>
                      </div>
                      <div className="mt-4 opacity-0 group-hover/card:opacity-100 transition-all duration-300 transform translate-y-2 group-hover/card:translate-y-0">
                        <span className="text-xs text-cyan-400 font-medium">→ Explore Feature</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -right-16 top-1/4 z-30">
              <div className="animate-float-premium-delayed">
                <div className="premium-glass-card group/card cursor-pointer">
                  <div className="relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-500/20 opacity-0 group-hover/card:opacity-100 transition-all duration-500"></div>
                    <div className="relative z-10 p-6">
                      <div className="flex items-center space-x-4 mb-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center shadow-lg transform group-hover/card:scale-110 transition-transform duration-300">
                          <span className="text-xl animate-bounce-elegant">⚖️</span>
                        </div>
                        <div>
                          <h4 className="font-bold text-white/90 group-hover/card:text-pink-400 transition-colors duration-300">Legal Research</h4>
                          <p className="text-xs text-white/60">Case law & precedent analysis</p>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex justify-between text-xs">
                          <span className="text-white/70">Analyzing</span>
                          <span className="text-pink-400 font-medium">92%</span>
                        </div>
                        <div className="premium-progress-bar">
                          <div className="premium-progress-fill w-11/12 bg-gradient-to-r from-purple-500 to-pink-500"></div>
                        </div>
                      </div>
                      <div className="mt-4 opacity-0 group-hover/card:opacity-100 transition-all duration-300 transform translate-y-2 group-hover/card:translate-y-0">
                        <span className="text-xs text-pink-400 font-medium">→ Explore Feature</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -left-8 bottom-1/4 z-30">
              <div className="animate-float-premium-reverse">
                <div className="premium-glass-card group/card cursor-pointer">
                  <div className="relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-emerald-600/20 to-teal-500/20 opacity-0 group-hover/card:opacity-100 transition-all duration-500"></div>
                    <div className="relative z-10 p-6">
                      <div className="flex items-center space-x-4 mb-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center shadow-lg transform group-hover/card:scale-110 transition-transform duration-300">
                          <span className="text-xl animate-spin-elegant">🔍</span>
                        </div>
                        <div>
                          <h4 className="font-bold text-white/90 group-hover/card:text-emerald-400 transition-colors duration-300">Due Diligence</h4>
                          <p className="text-xs text-white/60">Document risk assessment</p>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex justify-between text-xs">
                          <span className="text-white/70">Scanning</span>
                          <span className="text-emerald-400 font-medium">95%</span>
                        </div>
                        <div className="premium-progress-bar">
                          <div className="premium-progress-fill w-19/20 bg-gradient-to-r from-emerald-500 to-teal-500"></div>
                        </div>
                      </div>
                      <div className="mt-4 opacity-0 group-hover/card:opacity-100 transition-all duration-300 transform translate-y-2 group-hover/card:translate-y-0">
                        <span className="text-xs text-emerald-400 font-medium">→ Explore Feature</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -right-10 bottom-1/3 z-30">
              <div className="animate-float-premium-fast">
                <div className="premium-glass-card group/card cursor-pointer">
                  <div className="relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-orange-600/20 to-red-500/20 opacity-0 group-hover/card:opacity-100 transition-all duration-500"></div>
                    <div className="relative z-10 p-6">
                      <div className="flex items-center space-x-4 mb-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl flex items-center justify-center shadow-lg transform group-hover/card:scale-110 transition-transform duration-300">
                          <span className="text-xl animate-pulse-glow">📊</span>
                        </div>
                        <div>
                          <h4 className="font-bold text-white/90 group-hover/card:text-orange-400 transition-colors duration-300">Analytics Suite</h4>
                          <p className="text-xs text-white/60">Comprehensive reporting</p>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex justify-between text-xs">
                          <span className="text-white/70">Generating</span>
                          <span className="text-orange-400 font-medium">78%</span>
                        </div>
                        <div className="premium-progress-bar">
                          <div className="premium-progress-fill w-3/4 bg-gradient-to-r from-orange-500 to-red-500"></div>
                        </div>
                      </div>
                      <div className="mt-4 opacity-0 group-hover/card:opacity-100 transition-all duration-300 transform translate-y-2 group-hover/card:translate-y-0">
                        <span className="text-xs text-orange-400 font-medium">→ Explore Feature</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Premium Background Effects */}
            <div className="absolute inset-0 -z-10">
              {/* Animated Gradient Orbs */}
              <div className="absolute top-8 right-8 w-32 h-32 bg-gradient-to-r from-blue-500/30 to-purple-600/30 rounded-full blur-3xl animate-float-orb"></div>
              <div className="absolute bottom-8 left-8 w-40 h-40 bg-gradient-to-r from-cyan-500/20 to-teal-600/20 rounded-full blur-3xl animate-float-orb-delayed"></div>
              <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-gradient-to-r from-pink-500/25 to-orange-500/25 rounded-full blur-2xl animate-float-orb-reverse"></div>
              
              {/* Animated Grid */}
              <div className="absolute inset-0 opacity-10">
                <div className="grid-background animate-grid-flow"></div>
              </div>
              
              {/* Floating Particles */}
              {[...Array(12)].map((_, i) => (
                <div
                  key={i}
                  className={`absolute w-1 h-1 bg-white/40 rounded-full animate-particle-${i % 6 + 1}`}
                  style={{
                    left: `${10 + (i * 8)}%`,
                    top: `${10 + (i * 7)}%`,
                    animationDelay: `${i * 0.3}s`
                  }}
                ></div>
              ))}
            </div>
            
            {/* Premium 3D Background Layers */}
            <div className="absolute inset-0 bg-gradient-to-br from-slate-900/40 via-blue-900/20 to-purple-900/40 transform translate-x-8 translate-y-8 -z-20 rounded-2xl backdrop-blur-sm animate-float-bg"></div>
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/30 via-transparent to-pink-900/30 transform translate-x-4 translate-y-4 -z-15 rounded-2xl backdrop-blur-sm animate-float-bg-delayed"></div>
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;