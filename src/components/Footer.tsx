import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Instagram, Twitter, Facebook } from "lucide-react";
import ScrollReveal from "@/components/motion/ScrollReveal";

export default function Footer() {
  return (
    <footer className="relative border-t border-border/50 bg-secondary text-secondary-foreground overflow-hidden">
      {/* Background accents */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/3 w-48 h-48 bg-accent/5 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-4 py-14 relative z-10">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <ScrollReveal direction="up" delay={0}>
            <div>
              <div className="flex items-center gap-2 mb-5">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary transition-transform duration-300 hover:scale-105">
                  <span className="text-lg font-bold text-primary-foreground">Rx</span>
                </div>
                <span className="font-heading text-xl font-bold">Rx Laundry</span>
              </div>
              <p className="text-sm text-secondary-foreground/60 leading-relaxed mb-5">
                Fresh. Fast. Subscription-Ready. Premium laundry and dry-cleaning services across Eket.
              </p>
              {/* Social icons */}
              <div className="flex gap-3">
                {[Instagram, Twitter, Facebook].map((Icon, i) => (
                  <a
                    key={i}
                    href="#"
                    className="social-icon flex h-9 w-9 items-center justify-center rounded-lg bg-secondary-foreground/5 text-secondary-foreground/50 hover:bg-primary/20 hover:text-primary transition-all duration-300"
                    aria-label={Icon.displayName || "social"}
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.1}>
            <div>
              <h4 className="mb-5 font-heading text-lg font-semibold">Quick Links</h4>
              <div className="flex flex-col gap-2.5">
                {[
                  { to: "/services", label: "Services" },
                  { to: "/pricing", label: "Pricing" },
                  { to: "/book", label: "Book Now" },
                  { to: "/gallery", label: "Gallery" },
                  { to: "/blog", label: "Blog" },
                ].map((l) => (
                  <Link
                    key={l.to}
                    to={l.to}
                    className="footer-link text-sm text-secondary-foreground/60 hover:text-primary w-fit"
                  >
                    {l.label}
                  </Link>
                ))}
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.2}>
            <div>
              <h4 className="mb-5 font-heading text-lg font-semibold">Contact</h4>
              <div className="flex flex-col gap-4 text-sm text-secondary-foreground/60">
                {[
                  { icon: Phone, text: "+234 800 RX LAUNDRY" },
                  { icon: Mail, text: "hello@rxlaundry.ng" },
                  { icon: MapPin, text: "Eket, Akwa Ibom" },
                ].map((item) => (
                  <div key={item.text} className="flex items-center gap-3 group cursor-pointer">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-secondary-foreground/5 text-secondary-foreground/40 group-hover:bg-primary/20 group-hover:text-primary transition-all duration-300">
                      <item.icon className="h-4 w-4" />
                    </div>
                    <span className="group-hover:text-secondary-foreground/80 transition-colors duration-300">
                      {item.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.3}>
            <div>
              <h4 className="mb-5 font-heading text-lg font-semibold">Hours</h4>
              <div className="flex flex-col gap-2.5 text-sm text-secondary-foreground/60">
                <p>Mon – Sat: 7 AM – 8 PM</p>
                <p>Sunday: By Appointment</p>
                <div className="mt-3 inline-flex items-center gap-2 rounded-lg bg-primary/10 px-3 py-2 text-primary text-xs font-medium">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
                  </span>
                  Same-day service available
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>

        <div className="mt-14 border-t border-secondary-foreground/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-secondary-foreground/40">
          <p>© {new Date().getFullYear()} Rx Laundry. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="footer-link hover:text-secondary-foreground/70">Privacy Policy</a>
            <a href="#" className="footer-link hover:text-secondary-foreground/70">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
