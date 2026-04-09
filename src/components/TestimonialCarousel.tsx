import { useState, useEffect } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { testimonials } from "@/lib/data";
import { Button } from "@/components/ui/button";

export default function TestimonialCarousel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setCurrent((c) => (c + 1) % testimonials.length), 5000);
    return () => clearInterval(timer);
  }, []);

  const t = testimonials[current];

  return (
    <div className="relative mx-auto max-w-2xl text-center">
      <div className="mb-4 flex justify-center gap-1">
        {Array.from({ length: t.rating }).map((_, i) => (
          <Star key={i} className="h-5 w-5 fill-accent text-accent" />
        ))}
      </div>
      <blockquote className="mb-6 text-lg leading-relaxed text-foreground italic">
        "{t.content}"
      </blockquote>
      <p className="font-semibold text-foreground">{t.name}</p>
      <p className="text-sm text-muted-foreground">{t.role}</p>

      <div className="mt-6 flex items-center justify-center gap-4">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length)}
          aria-label="Previous testimonial"
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>
        <div className="flex gap-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`h-2 w-2 rounded-full transition-colors ${i === current ? "bg-primary" : "bg-border"}`}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setCurrent((c) => (c + 1) % testimonials.length)}
          aria-label="Next testimonial"
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}
