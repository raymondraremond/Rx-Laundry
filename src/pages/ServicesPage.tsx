import Section, { SectionHeader } from "@/components/Section";
import ServiceCard from "@/components/ServiceCard";
import { services } from "@/lib/data";

export default function ServicesPage() {
  return (
    <Section>
      <SectionHeader
        title="Our Services"
        subtitle="From everyday wear to delicate fabrics, we handle it all with expert care."
      />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((s) => (
          <ServiceCard key={s.title} {...s} />
        ))}
      </div>
    </Section>
  );
}
