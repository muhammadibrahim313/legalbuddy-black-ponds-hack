import { Award, Shield, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full py-20 bg-foreground text-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="md:col-span-2">
            <h3 className="text-3xl font-black mb-6">LegalBuddy</h3>
            <p className="body-medium text-background/80 mb-8 max-w-md leading-relaxed">
              AI-powered legal document analysis platform trusted by legal professionals worldwide. 
              Transforming the future of legal document review.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-background/60" />
                <span className="text-background/80">hello@legalbuddy.ai</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-background/60" />
                <span className="text-background/80">+1 (555) 123-4567</span>
              </div>
            </div>
          </div>

          {/* Product Links */}
          <div className="space-y-4">
            <h4 className="font-semibold">Product</h4>
            <div className="space-y-2 text-sm">
              <a href="#" className="block hover:text-primary transition-colors">Features</a>
              <a href="#" className="block hover:text-primary transition-colors">Pricing</a>
              <a href="#" className="block hover:text-primary transition-colors">Security</a>
              <a href="#" className="block hover:text-primary transition-colors">API</a>
            </div>
          </div>

          {/* Company Links */}
          <div className="space-y-4">
            <h4 className="font-semibold">Company</h4>
            <div className="space-y-2 text-sm">
              <a href="#" className="block hover:text-primary transition-colors">About</a>
              <a href="#" className="block hover:text-primary transition-colors">Careers</a>
              <a href="#" className="block hover:text-primary transition-colors">Blog</a>
              <a href="#" className="block hover:text-primary transition-colors">Contact</a>
            </div>
          </div>

          {/* Legal Links */}
          <div className="space-y-4">
            <h4 className="font-semibold">Legal</h4>
            <div className="space-y-2 text-sm">
              <a href="#" className="block hover:text-primary transition-colors">Privacy Policy</a>
              <a href="#" className="block hover:text-primary transition-colors">Terms of Service</a>
              <a href="#" className="block hover:text-primary transition-colors">Cookie Policy</a>
              <a href="#" className="block hover:text-primary transition-colors">GDPR</a>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; 2024 LegalBuddy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;