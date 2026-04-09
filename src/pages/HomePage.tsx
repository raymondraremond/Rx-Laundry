import { Link } from "react-router-dom";
import { ArrowRight, Shield, Clock, Star, Truck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Section, { SectionHeader } from "@/components/Section";
import ServiceCard from "@/components/ServiceCard";
import PricingCard from "@/components/PricingCard";
import TestimonialCarousel from "@/components/TestimonialCarousel";
import HeroSection from "@/components/HeroSection";
import ScrollReveal from "@/components/motion/ScrollReveal";
import AnimatedCounter from "@/components/motion/AnimatedCounter";
import { services, pricingPlans, faqs, howItWorks, trustBadges } from "@/lib/data";

const trustIconMap: Record<string, React.ElementType> = { Shield, Clock, Star, Truck };

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <HeroSection />

      {/* Trust Badges */}
      <Section className="py-10 md:py-14 border-b border-border/30">
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
          {trustBadges.map((b, i) => {
            const Icon = trustIconMap[b.icon] || Shield;
            return (
              <ScrollReveal key={b.label} delay={i * 0.1} direction="up">
                <div className="flex flex-col items-center gap-3 text-center group">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-all duration-300 group-hover:bg-primary group-hover:text-primary-foreground group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-primary/20">
                    <Icon className="h-6 w-6" />
                  </div>
                  <span className="text-sm font-medium text-foreground">{b.label}</span>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </Section>

      {/* How It Works */}
      <Section className="bg-muted/50">
        <ScrollReveal>
          <SectionHeader title="How It Works" subtitle="Getting your laundry done has never been easier." />
        </ScrollReveal>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {howItWorks.map((s, i) => (
            <ScrollReveal key={s.step} delay={i * 0.12} direction="up">
              <div className="text-center group">
                <div className="relative mx-auto mb-5">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-primary text-primary-foreground text-xl font-bold transition-all duration-500 group-hover:rounded-xl group-hover:scale-110 group-hover:shadow-xl group-hover:shadow-primary/25">
                    {s.step}
                  </div>
                  {i < howItWorks.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 left-full w-full h-[2px] bg-gradient-to-r from-primary/30 to-transparent -translate-y-1/2" />
                  )}
                </div>
                <h3 className="mb-2 font-heading text-lg font-semibold text-foreground">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </Section>

      {/* Services Preview */}
      <Section>
        <ScrollReveal>
          <SectionHeader title="Our Services" subtitle="Professional care for every fabric and occasion." />
        </ScrollReveal>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.slice(0, 3).map((s, i) => (
            <ScrollReveal key={s.title} delay={i * 0.1}>
              <ServiceCard {...s} />
            </ScrollReveal>
          ))}
        </div>
        <ScrollReveal delay={0.4}>
          <div className="mt-10 text-center">
            <Button asChild variant="outline" className="rounded-xl hover:scale-[1.02] transition-all duration-300 group">
              <Link to="/services">
                View All Services
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
        </ScrollReveal>
      </Section>

      {/* Pricing Preview */}
      <Section className="bg-muted/50">
        <ScrollReveal>
          <SectionHeader title="Simple, Transparent Pricing" subtitle="No hidden fees. Cancel or pause anytime." />
        </ScrollReveal>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {pricingPlans.map((p, i) => (
            <ScrollReveal key={p.name} delay={i * 0.12}>
              <PricingCard name={p.name} price={p.monthlyPrice} features={p.features} popular={p.popular} period="month" />
            </ScrollReveal>
          ))}
        </div>
      </Section>

      {/* Testimonials */}
      <Section>
        <ScrollReveal>
          <SectionHeader title="What Our Customers Say" subtitle="Don't take our word for it." />
        </ScrollReveal>
        <ScrollReveal delay={0.2}>
          <TestimonialCarousel />
        </ScrollReveal>
      </Section>

      {/* FAQ */}
      <Section className="bg-muted/50">
        <ScrollReveal>
          <SectionHeader title="Frequently Asked Questions" />
        </ScrollReveal>
        <ScrollReveal delay={0.15}>
          <div className="mx-auto max-w-2xl">
            <Accordion type="single" collapsible>
              {faqs.slice(0, 4).map((f, i) => (
                <AccordionItem key={i} value={`faq-${i}`}>
                  <AccordionTrigger className="text-left text-foreground hover:text-primary transition-colors">
                    {f.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">{f.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </ScrollReveal>
      </Section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-secondary py-20 md:py-28">
        {/* Background accents */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-[100px]" />
          <div className="absolute bottom-0 right-1/4 w-48 h-48 bg-accent/10 rounded-full blur-[80px]" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <ScrollReveal>
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="mb-4 font-heading text-3xl font-bold text-white md:text-5xl">
                Ready for Fresh, Clean Clothes?
              </h2>
              <p className="mb-8 text-lg text-white/70">
                Schedule your first pickup today. No commitments, no hassle.
              </p>
              <Button
                asChild
                size="lg"
                className="bg-primary hover:bg-primary/90 text-base rounded-xl px-8 py-6 shadow-2xl shadow-primary/25 hover:scale-[1.02] transition-all duration-300 group"
              >
                <Link to="/book">
                  Book Your First Pickup
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
