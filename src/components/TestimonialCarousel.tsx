import { useState, useEffect, useCallback } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { testimonials } from "@/lib/data";
import { Button } from "@/components/ui/button";

export default function TestimonialCarousel() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState<"left" | "right">("right");
  const [isAnimating, setIsAnimating] = useState(false);

  const goTo = useCallback(
    (index: number, dir: "left" | "right") => {
      if (isAnimating) return;
      setIsAnimating(true);
      setDirection(dir);
      setCurrent(index);
      setTimeout(() => setIsAnimating(false), 500);
    },
    [isAnimating]
  );

  const next = useCallback(() => {
    goTo((current + 1) % testimonials.length, "right");
  }, [current, goTo]);

  const prev = useCallback(() => {
    goTo((current - 1 + testimonials.length) % testimonials.length, "left");
  }, [current, goTo]);

  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next]);

  const t = testimonials[current];

  return (
    <div className="relative mx-auto max-w-3xl">
      {/* Decorative quote */}
      <div className="absolute -top-4 left-1/2 -translate-x-1/2 quote-mark">
        <Quote className="h-12 w-12 text-primary/15 fill-primary/10" />
      </div>

      <div className="rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm p-8 md:p-12 shadow-card text-center relative overflow-hidden">
        {/* Background accent */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.02] to-transparent" />

        <div className="relative">
          {/* Stars */}
          <div
            className={`mb-6 flex justify-center gap-1 transition-all duration-500 ${
              isAnimating ? "opacity-0 scale-90" : "opacity-100 scale-100"
            }`}
          >
            {Array.from({ length: t.rating }).map((_, i) => (
              <Star
                key={i}
                className="h-5 w-5 fill-amber-400 text-amber-400 transition-all duration-300"
                style={{ transitionDelay: `${i * 50}ms` }}
              />
            ))}
          </div>

          {/* Quote */}
          <blockquote
            className={`mb-8 text-lg md:text-xl leading-relaxed text-foreground/90 font-light transition-all duration-500 ${
              isAnimating
                ? direction === "right"
                  ? "opacity-0 translate-x-8"
                  : "opacity-0 -translate-x-8"
                : "opacity-100 translate-x-0"
            }`}
          >
            "{t.content}"
          </blockquote>

          {/* Author */}
          <div
            className={`transition-all duration-500 delay-100 ${
              isAnimating ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"
            }`}
          >
            {/* Avatar placeholder */}
            <div className="mx-auto mb-3 h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-lg">
              {t.name.charAt(0)}
            </div>
            <p className="font-semibold text-foreground">{t.name}</p>
            <p className="text-sm text-muted-foreground">{t.role}</p>
          </div>
        </div>
      </div>

      {/* Controls */}
      <div className="mt-8 flex items-center justify-center gap-6">
        <Button
          variant="ghost"
          size="icon"
          onClick={prev}
          aria-label="Previous testimonial"
          className="rounded-full hover:bg-primary/10 hover:text-primary transition-all duration-300 h-10 w-10"
        >
          <ChevronLeft className="h-5 w-5" />
        </Button>

        <div className="flex gap-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i, i > current ? "right" : "left")}
              className={`rounded-full transition-all duration-400 ${
                i === current
                  ? "bg-primary w-8 h-2.5"
                  : "bg-border hover:bg-primary/30 w-2.5 h-2.5"
              }`}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>

        <Button
          variant="ghost"
          size="icon"
          onClick={next}
          aria-label="Next testimonial"
          className="rounded-full hover:bg-primary/10 hover:text-primary transition-all duration-300 h-10 w-10"
        >
          <ChevronRight className="h-5 w-5" />
        </Button>
      </div>
    </div>
  );
}
