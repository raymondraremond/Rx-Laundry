import { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
}

export default function Section({ children, className = "", id }: SectionProps) {
  return (
    <section id={id} className={`py-16 md:py-24 ${className}`}>
      <div className="container mx-auto px-4">{children}</div>
    </section>
  );
}

export function SectionHeader({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <div className="mb-12 text-center">
      <h2 className="mb-3 font-heading text-3xl font-bold text-foreground md:text-4xl">{title}</h2>
      {subtitle && <p className="mx-auto max-w-2xl text-muted-foreground">{subtitle}</p>}
    </div>
  );
}
