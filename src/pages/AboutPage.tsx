import { Users, Award, Heart, Leaf } from "lucide-react";
import Section, { SectionHeader } from "@/components/Section";

export default function AboutPage() {
  return (
    <>
      <Section>
        <SectionHeader title="About Rx Laundry" subtitle="Lagos' most trusted premium laundry service." />
        <div className="mx-auto max-w-3xl space-y-6 text-muted-foreground leading-relaxed">
          <p>
            Founded in Lagos with a simple mission: to give busy professionals their time back. 
            Rx Laundry combines expert garment care with the convenience of on-demand pickup and delivery, 
            so you never have to worry about laundry day again.
          </p>
          <p>
            Our team of trained laundry specialists handles everything from everyday wear to delicate 
            traditional fabrics. We use premium, eco-friendly detergents and state-of-the-art equipment 
            to ensure your clothes come back looking and smelling fresh every time.
          </p>
          <p>
            Whether you're a corporate executive who needs crisp suits daily, a busy parent managing 
            a household, or a fashion enthusiast with a collection of designer pieces — we've got you covered. 
            Our subscription plans are designed to fit every lifestyle and budget.
          </p>
        </div>
      </Section>

      <Section className="bg-muted">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { icon: Users, value: "2,000+", label: "Happy Customers" },
            { icon: Award, value: "50,000+", label: "Items Cleaned" },
            { icon: Heart, value: "99.8%", label: "Satisfaction Rate" },
            { icon: Leaf, value: "100%", label: "Eco-Friendly" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <stat.icon className="mx-auto mb-3 h-8 w-8 text-primary" />
              <p className="text-3xl font-bold text-foreground">{stat.value}</p>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeader title="Our Values" />
        <div className="mx-auto grid max-w-4xl gap-6 sm:grid-cols-2">
          {[
            { title: "Quality First", desc: "Every garment is inspected before and after cleaning. We don't cut corners." },
            { title: "Reliability", desc: "When we say 24 hours, we mean 24 hours. Your time matters to us." },
            { title: "Sustainability", desc: "Eco-friendly detergents, water-efficient machines, and recyclable packaging." },
            { title: "Community", desc: "Proudly Lagos-born. We employ locally and invest in our community." },
          ].map((v) => (
            <div key={v.title} className="rounded-xl border border-border bg-card p-6 shadow-card">
              <h3 className="mb-2 font-heading text-lg font-semibold text-foreground">{v.title}</h3>
              <p className="text-sm text-muted-foreground">{v.desc}</p>
            </div>
          ))}
        </div>
      </Section>
    </>
  );
}
