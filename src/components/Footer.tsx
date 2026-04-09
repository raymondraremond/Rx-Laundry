import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary">
                <span className="text-lg font-bold text-primary-foreground">Rx</span>
              </div>
              <span className="font-heading text-xl font-bold">Rx Laundry</span>
            </div>
            <p className="text-sm opacity-80">
              Fresh. Fast. Subscription-Ready. Premium laundry and dry-cleaning services across Lagos.
            </p>
          </div>

          <div>
            <h4 className="mb-4 font-heading text-lg font-semibold">Quick Links</h4>
            <div className="flex flex-col gap-2">
              {[
                { to: "/services", label: "Services" },
                { to: "/pricing", label: "Pricing" },
                { to: "/book", label: "Book Now" },
                { to: "/gallery", label: "Gallery" },
                { to: "/blog", label: "Blog" },
              ].map((l) => (
                <Link key={l.to} to={l.to} className="text-sm opacity-80 transition-opacity hover:opacity-100">
                  {l.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="mb-4 font-heading text-lg font-semibold">Contact</h4>
            <div className="flex flex-col gap-3 text-sm opacity-80">
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4" />
                <span>+234 800 RX LAUNDRY</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                <span>hello@rxlaundry.ng</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>Lekki Phase 1, Lagos</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="mb-4 font-heading text-lg font-semibold">Hours</h4>
            <div className="flex flex-col gap-2 text-sm opacity-80">
              <p>Mon – Sat: 7 AM – 8 PM</p>
              <p>Sunday: By Appointment</p>
              <p className="mt-2 text-primary font-medium">Same-day service available</p>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-secondary-foreground/10 pt-6 text-center text-sm opacity-60">
          © {new Date().getFullYear()} Rx Laundry. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
