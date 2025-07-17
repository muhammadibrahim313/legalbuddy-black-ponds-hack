const Footer = () => {
  return (
    <footer className="w-full border-t border-border bg-secondary py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">LegalBuddy</h3>
            <p className="text-sm text-muted-foreground">
              AI-powered legal document analysis for modern law practices.
            </p>
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