import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="w-full border-b border-border bg-background">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-2xl font-bold">LegalBuddy</h1>
          </div>

          {/* Navigation Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="font-medium hover:text-primary transition-colors">
              Features
            </a>
            <a href="#pricing" className="font-medium hover:text-primary transition-colors">
              Pricing
            </a>
            <a href="#about" className="font-medium hover:text-primary transition-colors">
              About
            </a>
            <a href="#contact" className="font-medium hover:text-primary transition-colors">
              Contact
            </a>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" className="font-semibold">
              Try Demo
            </Button>
            <Button variant="outline" className="font-semibold">
              Login
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;