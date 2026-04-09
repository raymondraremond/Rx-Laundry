import { Link } from "react-router-dom";
import { ArrowRight, Shield, Clock, Star, Truck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Section, { SectionHeader } from "@/components/Section";
import ServiceCard from "@/components/ServiceCard";
import PricingCard from "@/components/PricingCard";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import { services, pricingPlans, faqs, howItWorks, trustBadges } from "@/lib/data";

const trustIconMap: Record<string, React.ElementType> = { Shield, Clock, Star, Truck };

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-secondary py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <span className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
              Lagos' Premium Laundry Service
            </span>
            <h1 className="mb-6 font-heading text-4xl font-bold leading-tight text-secondary-foreground md:text-6xl">
              Fresh. Fast.{" "}
              <span className="text-primary">Subscription-Ready.</span>
            </h1>
            <p className="mb-8 text-lg text-secondary-foreground/80 md:text-xl">
              Premium on-demand laundry & dry-cleaning with free pickup and delivery across Lagos. 
              Join hundreds of professionals who trust Rx Laundry.
            </p>
            <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
              <Button asChild size="lg" className="text-base">
                <Link to="/book">
                  Book a Pickup <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-secondary-foreground/20 text-secondary-foreground hover:bg-secondary-foreground/10 text-base">
                <Link to="/pricing">View Plans</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Badges */}
      <Section className="py-10 md:py-12">
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
          {trustBadges.map((b) => {
            const Icon = trustIconMap[b.icon] || Shield;
            return (
              <div key={b.label} className="flex flex-col items-center gap-2 text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Icon className="h-6 w-6" />
                </div>
                <span className="text-sm font-medium text-foreground">{b.label}</span>
              </div>
            );
          })}
        </div>
      </Section>

      {/* How It Works */}
      <Section className="bg-muted">
        <SectionHeader title="How It Works" subtitle="Getting your laundry done has never been easier." />
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {howItWorks.map((s) => (
            <div key={s.step} className="text-center">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground text-xl font-bold">
                {s.step}
              </div>
              <h3 className="mb-2 font-heading text-lg font-semibold text-foreground">{s.title}</h3>
              <p className="text-sm text-muted-foreground">{s.description}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Services Preview */}
      <Section>
        <SectionHeader title="Our Services" subtitle="Professional care for every fabric and occasion." />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.slice(0, 3).map((s) => (
            <ServiceCard key={s.title} {...s} />
          ))}
        </div>
        <div className="mt-8 text-center">
          <Button asChild variant="outline">
            <Link to="/services">View All Services</Link>
          </Button>
        </div>
      </Section>

      {/* Pricing Preview */}
      <Section className="bg-muted">
        <SectionHeader title="Simple, Transparent Pricing" subtitle="No hidden fees. Cancel or pause anytime." />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {pricingPlans.map((p) => (
            <PricingCard key={p.name} name={p.name} price={p.monthlyPrice} features={p.features} popular={p.popular} period="month" />
          ))}
        </div>
      </Section>

      {/* Testimonials */}
      <Section>
        <SectionHeader title="What Our Customers Say" subtitle="Don't take our word for it." />
        <TestimonialCarousel />
      </Section>

      {/* FAQ */}
      <Section className="bg-muted">
        <SectionHeader title="Frequently Asked Questions" />
        <div className="mx-auto max-w-2xl">
          <Accordion type="single" collapsible>
            {faqs.slice(0, 4).map((f, i) => (
              <AccordionItem key={i} value={`faq-${i}`}>
                <AccordionTrigger className="text-left text-foreground">{f.question}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">{f.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </Section>

      {/* CTA */}
      <Section className="bg-primary text-primary-foreground">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="mb-4 font-heading text-3xl font-bold md:text-4xl">Ready for Fresh, Clean Clothes?</h2>
          <p className="mb-8 text-lg opacity-90">
            Schedule your first pickup today. No commitments, no hassle.
          </p>
          <Button asChild size="lg" variant="secondary" className="text-base">
            <Link to="/book">
              Book Your First Pickup <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </Section>
    </>
  );
}
