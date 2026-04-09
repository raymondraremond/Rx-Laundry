import { Check, Sparkles } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { formatNaira } from "@/lib/data";

interface PricingCardProps {
  name: string;
  price: number;
  features: string[];
  popular: boolean;
  period: string;
}

export default function PricingCard({ name, price, features, popular, period }: PricingCardProps) {
  return (
    <Card
      className={`card-premium relative overflow-hidden border bg-card shadow-card ${
        popular
          ? "border-primary/50 ring-1 ring-primary/20 scale-[1.02] shadow-xl shadow-primary/10"
          : "border-border/50"
      }`}
    >
      {/* Popular badge */}
      {popular && (
        <div className="absolute -top-px left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />
      )}
      {popular && (
        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 z-10">
          <div className="flex items-center gap-1.5 rounded-full bg-primary px-4 py-1.5 text-xs font-semibold text-primary-foreground shadow-lg shadow-primary/25">
            <Sparkles className="h-3 w-3" />
            Most Popular
          </div>
        </div>
      )}

      {/* Background glow for popular */}
      {popular && (
        <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.03] via-transparent to-primary/[0.02]" />
      )}

      <CardContent className="relative p-7">
        <h3 className="mb-1 font-heading text-xl font-semibold text-foreground">{name}</h3>
        <div className="mb-6 mt-3">
          <div className="flex items-baseline gap-1 price-animate">
            <span className="text-4xl font-bold text-foreground tracking-tight">{formatNaira(price)}</span>
            <span className="text-sm text-muted-foreground font-medium">/{period}</span>
          </div>
        </div>
        <ul className="mb-7 flex flex-col gap-3">
          {features.map((f, i) => (
            <li
              key={f}
              className="flex items-start gap-2.5 text-sm text-muted-foreground"
            >
              <div className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full ${
                popular ? "bg-primary/15 text-primary" : "bg-muted text-primary"
              }`}>
                <Check className="h-3 w-3" />
              </div>
              {f}
            </li>
          ))}
        </ul>
        <Button
          asChild
          className={`w-full rounded-xl transition-all duration-300 hover:scale-[1.02] ${
            popular
              ? "shadow-lg shadow-primary/20 hover:shadow-primary/30"
              : ""
          }`}
          variant={popular ? "default" : "outline"}
        >
          <Link to="/book">Get Started</Link>
        </Button>
      </CardContent>
    </Card>
  );
}
