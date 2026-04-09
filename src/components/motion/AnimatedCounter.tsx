import { useEffect, useRef, useState } from "react";

interface AnimatedCounterProps {
  target: string; // e.g. "2,000+" or "99.8%"
  duration?: number;
  className?: string;
}

export default function AnimatedCounter({ target, duration = 2000, className = "" }: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const [displayed, setDisplayed] = useState("0");
  const [hasAnimated, setHasAnimated] = useState(false);

  // Extract the numeric portion and suffix
  const numericMatch = target.match(/^([\d,.]+)(.*)/);
  const numericStr = numericMatch ? numericMatch[1].replace(/,/g, "") : "0";
  const suffix = numericMatch ? numericMatch[2] : "";
  const targetNum = parseFloat(numericStr);
  const hasDecimals = numericStr.includes(".");
  const decimalPlaces = hasDecimals ? numericStr.split(".")[1].length : 0;

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) {
      setDisplayed(target);
      return;
    }

    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          animateCount();
          observer.unobserve(el);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [hasAnimated]);

  const animateCount = () => {
    const startTime = performance.now();
    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = eased * targetNum;

      const formatted = hasDecimals
        ? current.toFixed(decimalPlaces)
        : Math.floor(current).toLocaleString();

      setDisplayed(formatted + suffix);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setDisplayed(target);
      }
    };
    requestAnimationFrame(animate);
  };

  return (
    <span ref={ref} className={className}>
      {displayed}
    </span>
  );
}
