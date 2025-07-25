import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'floating-nav border-b border-border/50' : 'bg-background border-b border-border'
    }`}>
      <div className="max-w-7xl mx-auto px-6 py-4">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-3xl font-black">LegalBuddy</h1>
          </div>

          {/* Desktop Navigation Menu */}
          <div className="hidden md:flex items-center space-x-10">
            <a href="#features" className="font-semibold text-lg hover:text-accent transition-colors">
              Features
            </a>
            <a href="#pricing" className="font-semibold text-lg hover:text-accent transition-colors">
              Pricing
            </a>
            <a href="#about" className="font-semibold text-lg hover:text-accent transition-colors">
              About
            </a>
            <a href="#contact" className="font-semibold text-lg hover:text-accent transition-colors">
              Contact
            </a>
          </div>

          {/* Desktop Action Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" className="font-bold text-lg px-6 py-3">
              Try Demo
            </Button>
            <Button className="btn-accent">
              Login
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </nav>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-border">
            <div className="flex flex-col space-y-4">
              <a href="#features" className="font-semibold text-lg hover:text-accent transition-colors">
                Features
              </a>
              <a href="#pricing" className="font-semibold text-lg hover:text-accent transition-colors">
                Pricing
              </a>
              <a href="#about" className="font-semibold text-lg hover:text-accent transition-colors">
                About
              </a>
              <a href="#contact" className="font-semibold text-lg hover:text-accent transition-colors">
                Contact
              </a>
              <div className="pt-4 space-y-2">
                <Button variant="ghost" className="w-full font-bold text-lg">
                  Try Demo
                </Button>
                <Button className="btn-accent w-full">
                  Login
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;