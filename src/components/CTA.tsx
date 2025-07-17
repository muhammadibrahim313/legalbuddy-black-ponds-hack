import { Button } from "@/components/ui/button";

const CTA = () => {
  return (
    <section className="w-full py-20 lg:py-32">
      <div className="max-w-4xl mx-auto px-6 text-center space-y-8">
        <h2 className="section-title">Ready to Transform Your Legal Practice?</h2>
        
        <p className="body-large">
          Join hundreds of legal professionals who trust LegalBuddy for their document analysis needs.
        </p>

        <div className="pt-8">
          <Button className="btn-primary text-xl px-12 py-6">
            Start Free Trial
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTA;