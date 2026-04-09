import { Check } from "lucide-react";
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
    <Card className={`relative shadow-card transition-all duration-300 hover:shadow-elevated hover:-translate-y-1 ${popular ? "border-2 border-primary" : ""}`}>
      {popular && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-accent px-4 py-1 text-xs font-semibold text-accent-foreground">
          Most Popular
        </div>
      )}
      <CardContent className="p-6">
        <h3 className="mb-1 font-heading text-xl font-semibold text-foreground">{name}</h3>
        <div className="mb-6">
          <span className="text-3xl font-bold text-foreground">{formatNaira(price)}</span>
          <span className="text-sm text-muted-foreground">/{period}</span>
        </div>
        <ul className="mb-6 flex flex-col gap-3">
          {features.map((f) => (
            <li key={f} className="flex items-start gap-2 text-sm text-muted-foreground">
              <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
              {f}
            </li>
          ))}
        </ul>
        <Button asChild className={`w-full ${popular ? "" : "variant-outline"}`} variant={popular ? "default" : "outline"}>
          <Link to="/book">Get Started</Link>
        </Button>
      </CardContent>
    </Card>
  );
}
