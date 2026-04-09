import { Shirt, Sparkles, Wind, Droplets, Scissors, Truck } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const iconMap: Record<string, React.ElementType> = { Shirt, Sparkles, Wind, Droplets, Scissors, Truck };

interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
  price: string;
  unit: string;
}

export default function ServiceCard({ icon, title, description, price, unit }: ServiceCardProps) {
  const Icon = iconMap[icon] || Shirt;
  return (
    <Card className="card-premium card-glow group relative overflow-hidden border border-border/50 bg-card shadow-card">
      {/* Subtle gradient overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <CardContent className="relative p-6">
        <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-all duration-500 group-hover:bg-primary group-hover:text-primary-foreground group-hover:scale-110 group-hover:rotate-3 group-hover:shadow-lg group-hover:shadow-primary/25">
          <Icon className="h-6 w-6 transition-transform duration-500 group-hover:scale-110" />
        </div>
        <h3 className="mb-2 font-heading text-lg font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
          {title}
        </h3>
        <p className="mb-5 text-sm text-muted-foreground leading-relaxed">{description}</p>
        <div className="flex items-baseline gap-1.5 pt-4 border-t border-border/50">
          <span className="text-xl font-bold text-primary transition-all duration-300 group-hover:scale-105">{price}</span>
          <span className="text-xs text-muted-foreground">{unit}</span>
        </div>
      </CardContent>
    </Card>
  );
}
