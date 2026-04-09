import { useState } from "react";
import Section, { SectionHeader } from "@/components/Section";
import PricingCard from "@/components/PricingCard";
import { pricingPlans, formatNaira } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { faqs } from "@/lib/data";

export default function PricingPage() {
  const [period, setPeriod] = useState<"monthly" | "quarterly">("monthly");
  const [calcItems, setCalcItems] = useState(20);

  const estimatedCost = calcItems <= 20 ? 12500 : calcItems <= 50 ? 25000 : 45000;

  return (
    <>
      <Section>
        <SectionHeader title="Pricing Plans" subtitle="Choose the plan that fits your lifestyle. Save 10% with quarterly billing." />

        <div className="mb-8 flex justify-center">
          <div className="inline-flex rounded-lg border border-border bg-muted p-1">
            <Button
              variant={period === "monthly" ? "default" : "ghost"}
              size="sm"
              onClick={() => setPeriod("monthly")}
            >
              Monthly
            </Button>
            <Button
              variant={period === "quarterly" ? "default" : "ghost"}
              size="sm"
              onClick={() => setPeriod("quarterly")}
            >
              Quarterly (Save 10%)
            </Button>
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {pricingPlans.map((p) => (
            <PricingCard
              key={p.name}
              name={p.name}
              price={period === "monthly" ? p.monthlyPrice : p.quarterlyPrice}
              features={p.features}
              popular={p.popular}
              period={period === "monthly" ? "month" : "quarter"}
            />
          ))}
        </div>
      </Section>

      {/* Calculator */}
      <Section className="bg-muted">
        <SectionHeader title="Pricing Calculator" subtitle="Estimate your monthly laundry cost." />
        <div className="mx-auto max-w-md rounded-xl border border-border bg-card p-6 shadow-card">
          <label className="mb-2 block text-sm font-medium text-foreground">
            How many items per month?
          </label>
          <input
            type="range"
            min={5}
            max={100}
            value={calcItems}
            onChange={(e) => setCalcItems(Number(e.target.value))}
            className="mb-2 w-full accent-primary"
          />
          <p className="mb-4 text-center text-2xl font-bold text-foreground">{calcItems} items</p>
          <div className="rounded-lg bg-primary/10 p-4 text-center">
            <p className="text-sm text-muted-foreground">Recommended plan cost</p>
            <p className="text-3xl font-bold text-primary">{formatNaira(estimatedCost)}<span className="text-sm font-normal text-muted-foreground">/month</span></p>
          </div>
        </div>
      </Section>

      {/* FAQ */}
      <Section>
        <SectionHeader title="Pricing FAQ" />
        <div className="mx-auto max-w-2xl">
          <Accordion type="single" collapsible>
            {faqs.map((f, i) => (
              <AccordionItem key={i} value={`faq-${i}`}>
                <AccordionTrigger className="text-left text-foreground">{f.question}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">{f.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </Section>
    </>
  );
}
