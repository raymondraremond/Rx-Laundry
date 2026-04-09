import { useRef, useEffect, useState, ReactNode, CSSProperties } from "react";

interface ScrollRevealProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  distance?: number;
  className?: string;
  once?: boolean;
  threshold?: number;
  scale?: number;
}

export default function ScrollReveal({
  children,
  delay = 0,
  duration = 0.7,
  direction = "up",
  distance = 40,
  className = "",
  once = true,
  threshold = 0.15,
  scale,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) {
      setIsVisible(true);
      return;
    }

    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once) observer.unobserve(el);
        } else if (!once) {
          setIsVisible(false);
        }
      },
      { threshold, rootMargin: "0px 0px -60px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [once, threshold]);

  const getTransform = (): string => {
    if (isVisible) return scale ? `scale(1)` : "translate3d(0,0,0)";
    const transforms: string[] = [];
    switch (direction) {
      case "up": transforms.push(`translateY(${distance}px)`); break;
      case "down": transforms.push(`translateY(-${distance}px)`); break;
      case "left": transforms.push(`translateX(${distance}px)`); break;
      case "right": transforms.push(`translateX(-${distance}px)`); break;
    }
    if (scale) transforms.push(`scale(${scale})`);
    return transforms.join(" ") || "translate3d(0,0,0)";
  };

  const style: CSSProperties = {
    opacity: isVisible ? 1 : 0,
    transform: getTransform(),
    transition: `opacity ${duration}s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s, transform ${duration}s cubic-bezier(0.16, 1, 0.3, 1) ${delay}s`,
    willChange: "opacity, transform",
  };

  return (
    <div ref={ref} className={className} style={style}>
      {children}
    </div>
  );
}

// Stagger container helper - wraps children with incremental delays
interface StaggerProps {
  children: ReactNode[];
  staggerDelay?: number;
  baseDelay?: number;
  direction?: ScrollRevealProps["direction"];
  className?: string;
  childClassName?: string;
}

export function StaggerReveal({
  children,
  staggerDelay = 0.1,
  baseDelay = 0,
  direction = "up",
  className = "",
  childClassName = "",
}: StaggerProps) {
  return (
    <div className={className}>
      {children.map((child, i) => (
        <ScrollReveal
          key={i}
          delay={baseDelay + i * staggerDelay}
          direction={direction}
          className={childClassName}
        >
          {child}
        </ScrollReveal>
      ))}
    </div>
  );
}
