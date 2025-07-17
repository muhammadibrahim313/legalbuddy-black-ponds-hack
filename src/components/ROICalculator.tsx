import { useState } from "react";
import { Calculator, TrendingUp, Clock, DollarSign } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const ROICalculator = () => {
  const [hourlyRate, setHourlyRate] = useState(500);
  const [documentsPerWeek, setDocumentsPerWeek] = useState(20);
  const [hoursPerDocument, setHoursPerDocument] = useState(4);

  const timeSaved = hoursPerDocument * 0.6; // 60% time savings
  const weeklySavings = documentsPerWeek * timeSaved * hourlyRate;
  const monthlySavings = weeklySavings * 4;
  const yearlySavings = monthlySavings * 12;

  return (
    <section className="w-full py-32 bg-secondary">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="section-title mb-8">Calculate Your ROI</h2>
          <p className="body-large text-muted-foreground max-w-2xl mx-auto">
            See how much time and money LegalBuddy can save your practice
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Calculator Inputs */}
          <div className="premium-card fade-in-up">
            <div className="flex items-center mb-8">
              <Calculator className="w-8 h-8 text-accent mr-3" />
              <h3 className="text-2xl font-bold">ROI Calculator</h3>
            </div>

            <div className="space-y-6">
              <div>
                <Label htmlFor="hourlyRate" className="text-lg font-semibold">
                  Your Hourly Rate ($)
                </Label>
                <Input
                  id="hourlyRate"
                  type="number"
                  value={hourlyRate}
                  onChange={(e) => setHourlyRate(Number(e.target.value))}
                  className="mt-2 text-lg p-4"
                />
              </div>

              <div>
                <Label htmlFor="documentsPerWeek" className="text-lg font-semibold">
                  Documents Per Week
                </Label>
                <Input
                  id="documentsPerWeek"
                  type="number"
                  value={documentsPerWeek}
                  onChange={(e) => setDocumentsPerWeek(Number(e.target.value))}
                  className="mt-2 text-lg p-4"
                />
              </div>

              <div>
                <Label htmlFor="hoursPerDocument" className="text-lg font-semibold">
                  Hours Per Document (Current)
                </Label>
                <Input
                  id="hoursPerDocument"
                  type="number"
                  step="0.5"
                  value={hoursPerDocument}
                  onChange={(e) => setHoursPerDocument(Number(e.target.value))}
                  className="mt-2 text-lg p-4"
                />
              </div>
            </div>
          </div>

          {/* Results */}
          <div className="space-y-8">
            <div className="premium-card fade-in-up stagger-2">
              <div className="flex items-center mb-4">
                <Clock className="w-8 h-8 text-accent mr-3" />
                <h3 className="text-2xl font-bold">Time Savings</h3>
              </div>
              <div className="text-4xl font-black text-accent mb-2">
                {(timeSaved * documentsPerWeek).toFixed(1)} hours/week
              </div>
              <p className="text-muted-foreground">
                {timeSaved.toFixed(1)} hours saved per document
              </p>
            </div>

            <div className="premium-card fade-in-up stagger-3">
              <div className="flex items-center mb-4">
                <DollarSign className="w-8 h-8 text-gold mr-3" />
                <h3 className="text-2xl font-bold">Cost Savings</h3>
              </div>
              <div className="space-y-3">
                <div>
                  <div className="text-2xl font-bold">
                    ${weeklySavings.toLocaleString()}/week
                  </div>
                </div>
                <div>
                  <div className="text-2xl font-bold">
                    ${monthlySavings.toLocaleString()}/month
                  </div>
                </div>
                <div>
                  <div className="text-3xl font-black text-gold">
                    ${yearlySavings.toLocaleString()}/year
                  </div>
                </div>
              </div>
            </div>

            <div className="premium-card fade-in-up stagger-4">
              <div className="flex items-center mb-4">
                <TrendingUp className="w-8 h-8 text-accent mr-3" />
                <h3 className="text-2xl font-bold">ROI</h3>
              </div>
              <div className="text-4xl font-black text-accent">
                {Math.round((yearlySavings / 12000) * 100)}%
              </div>
              <p className="text-muted-foreground">
                Return on investment in first year
              </p>
            </div>

            <Button className="btn-accent w-full text-xl py-6">
              Start Free Trial - See Results Immediately
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ROICalculator;