import { Link } from "react-router-dom";
import { ArrowRight, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState, useRef } from "react";

export default function HeroSection() {
  const [loaded, setLoaded] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="hero-section relative min-h-[100vh] flex items-center overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 hero-gradient-bg" />

      {/* Floating fabric shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="hero-shape hero-shape-1" />
        <div className="hero-shape hero-shape-2" />
        <div className="hero-shape hero-shape-3" />
        <div className="hero-ripple hero-ripple-1" />
        <div className="hero-ripple hero-ripple-2" />
      </div>

      {/* Sparkle particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            className="hero-sparkle"
            style={{
              left: `${15 + i * 14}%`,
              top: `${20 + (i % 3) * 25}%`,
              animationDelay: `${i * 0.8}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text side */}
          <div className="max-w-2xl">
            <div
              className={`transition-all duration-700 ease-out ${
                loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <span className="hero-badge inline-flex items-center gap-2 mb-6 rounded-full bg-white/10 backdrop-blur-md border border-white/20 px-5 py-2 text-sm font-medium text-white/90">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400" />
                </span>
                Lagos' Premium Laundry Service
              </span>
            </div>

            <h1
              className={`mb-6 font-heading text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.1] text-white transition-all duration-700 delay-150 ease-out ${
                loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              Fresh. Fast.{" "}
              <span className="hero-text-gradient">
                Subscription-Ready.
              </span>
            </h1>

            <p
              className={`mb-8 text-lg sm:text-xl text-white/75 max-w-xl leading-relaxed transition-all duration-700 delay-300 ease-out ${
                loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              Premium on-demand laundry & dry-cleaning with free pickup and
              delivery across Lagos. Join hundreds of professionals who trust
              Rx&nbsp;Laundry.
            </p>

            <div
              className={`flex flex-col sm:flex-row items-start gap-4 transition-all duration-700 delay-[450ms] ease-out ${
                loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <Button
                asChild
                size="lg"
                className="hero-cta-primary group relative overflow-hidden bg-primary hover:bg-primary/90 text-base px-8 py-6 rounded-xl shadow-2xl shadow-primary/25"
              >
                <Link to="/book">
                  <span className="relative z-10 flex items-center gap-2">
                    Book a Pickup
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="border-white/25 text-white hover:bg-white/10 hover:border-white/40 text-base px-8 py-6 rounded-xl backdrop-blur-sm"
              >
                <Link to="/pricing">View Plans</Link>
              </Button>
            </div>

            {/* Trust indicators */}
            <div
              className={`mt-10 flex items-center gap-6 transition-all duration-700 delay-[600ms] ease-out ${
                loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <div className="flex -space-x-2">
                {["C", "E", "A", "T"].map((letter, i) => (
                  <div
                    key={i}
                    className="h-9 w-9 rounded-full border-2 border-secondary bg-primary/80 flex items-center justify-center text-xs font-bold text-white"
                    style={{ animationDelay: `${i * 100}ms` }}
                  >
                    {letter}
                  </div>
                ))}
              </div>
              <div className="text-sm text-white/60">
                <span className="text-white font-semibold">2,000+</span> happy
                customers
                <div className="flex gap-0.5 mt-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span key={i} className="text-amber-400 text-xs">★</span>
                  ))}
                  <span className="text-white/50 text-xs ml-1">5.0</span>
                </div>
              </div>
            </div>
          </div>

          {/* Visual side - Premium card */}
          <div
            className={`hidden lg:block transition-all duration-1000 delay-300 ease-out ${
              loaded ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-12 scale-95"
            }`}
          >
            <div className="hero-visual-card relative">
              {/* Glowing backdrop */}
              <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 via-primary/5 to-accent/20 rounded-3xl blur-2xl" />

              <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl">
                {/* Video/Visual area */}
                <div className="aspect-[4/3] relative overflow-hidden">
                  <video
                    ref={videoRef}
                    className="absolute inset-0 w-full h-full object-cover"
                    autoPlay
                    muted
                    loop
                    playsInline
                    poster="https://images.unsplash.com/photo-1545173168-9f1947eebb7f?w=800&h=600&fit=crop"
                  >
                    <source
                      src="https://videos.pexels.com/video-files/5585783/5585783-sd_640_360_30fps.mp4"
                      type="video/mp4"
                    />
                  </video>
                  <div className="absolute inset-0 bg-gradient-to-t from-secondary/90 via-secondary/20 to-transparent" />

                  {/* Floating status cards */}
                  <div className="absolute top-4 right-4 hero-float-card bg-white/95 dark:bg-card/95 backdrop-blur-md rounded-xl px-4 py-3 shadow-lg">
                    <div className="flex items-center gap-2">
                      <div className="h-2.5 w-2.5 rounded-full bg-green-500 animate-pulse" />
                      <span className="text-xs font-semibold text-foreground">Processing</span>
                    </div>
                    <p className="text-[10px] text-muted-foreground mt-0.5">12 items • Express</p>
                  </div>

                  <div className="absolute bottom-4 left-4 hero-float-card-delayed bg-white/95 dark:bg-card/95 backdrop-blur-md rounded-xl px-4 py-3 shadow-lg">
                    <p className="text-xs font-semibold text-foreground">⭐ Quality Check</p>
                    <p className="text-[10px] text-muted-foreground mt-0.5">All items passed inspection</p>
                  </div>
                </div>

                {/* Bottom info bar */}
                <div className="p-5 bg-white/5">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-semibold text-white">Order #RX-2024-0042</p>
                      <p className="text-xs text-white/50 mt-0.5">Estimated delivery: Today, 5 PM</p>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <div className="progress-dot bg-primary" />
                      <div className="progress-dot bg-primary" />
                      <div className="progress-dot bg-primary" />
                      <div className="progress-dot bg-white/20" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
