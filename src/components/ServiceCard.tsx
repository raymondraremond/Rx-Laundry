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
    <Card className="group shadow-card transition-all duration-300 hover:shadow-elevated hover:-translate-y-1">
      <CardContent className="p-6">
        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
          <Icon className="h-6 w-6" />
        </div>
        <h3 className="mb-2 font-heading text-lg font-semibold text-foreground">{title}</h3>
        <p className="mb-4 text-sm text-muted-foreground leading-relaxed">{description}</p>
        <div className="flex items-baseline gap-1">
          <span className="text-lg font-bold text-primary">{price}</span>
          <span className="text-xs text-muted-foreground">{unit}</span>
        </div>
      </CardContent>
    </Card>
  );
}
