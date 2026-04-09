import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/pricing", label: "Pricing" },
  { to: "/gallery", label: "Gallery" },
  { to: "/about", label: "About" },
  { to: "/blog", label: "Blog" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  const toggleDark = () => {
    setDark(!dark);
    document.documentElement.classList.toggle("dark");
  };

  const isHome = location.pathname === "/";
  const isTransparent = isHome && !scrolled;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "nav-scrolled bg-background/80 border-b border-border/50 shadow-sm"
          : isHome
          ? "bg-transparent border-b border-transparent"
          : "bg-background/80 backdrop-blur-md border-b border-border/50"
      }`}
    >
      <div
        className={`container mx-auto flex items-center justify-between px-4 transition-all duration-300 ${
          scrolled ? "h-14" : "h-16"
        }`}
      >
        <Link to="/" className="flex items-center gap-2 group">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary transition-transform duration-300 group-hover:scale-105">
            <span className="text-lg font-bold text-primary-foreground">Rx</span>
          </div>
          <span
            className={`font-heading text-xl font-bold transition-colors duration-300 ${
              isTransparent ? "text-white" : "text-foreground"
            }`}
          >
            Laundry
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`relative rounded-md px-3 py-2 text-sm font-medium transition-all duration-300 hover:bg-white/10 ${
                location.pathname === link.to
                  ? `${isTransparent ? "text-white" : "text-primary"} nav-link-active`
                  : isTransparent
                  ? "text-white/70 hover:text-white"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden items-center gap-2 md:flex">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleDark}
            aria-label="Toggle theme"
            className={`transition-colors ${
              isTransparent ? "text-white/70 hover:text-white hover:bg-white/10" : ""
            }`}
          >
            {dark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </Button>
          <Button
            asChild
            className="rounded-xl shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-all duration-300 hover:scale-[1.02]"
          >
            <Link to="/book">Book Now</Link>
          </Button>
        </div>

        {/* Mobile toggle */}
        <div className="flex items-center gap-2 md:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleDark}
            aria-label="Toggle theme"
            className={isTransparent ? "text-white/70 hover:text-white hover:bg-white/10" : ""}
          >
            {dark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setOpen(!open)}
            aria-label="Menu"
            className={isTransparent ? "text-white/70 hover:text-white hover:bg-white/10" : ""}
          >
            <div className="relative w-5 h-5">
              <Menu
                className={`absolute inset-0 h-5 w-5 transition-all duration-300 ${
                  open ? "opacity-0 rotate-90 scale-50" : "opacity-100 rotate-0 scale-100"
                }`}
              />
              <X
                className={`absolute inset-0 h-5 w-5 transition-all duration-300 ${
                  open ? "opacity-100 rotate-0 scale-100" : "opacity-0 -rotate-90 scale-50"
                }`}
              />
            </div>
          </Button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-400 ease-out ${
          open ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="mobile-menu-enter border-t border-border/50 bg-background/95 backdrop-blur-xl px-4 py-4">
          {navLinks.map((link, i) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={() => setOpen(false)}
              className={`block rounded-md px-3 py-2.5 text-sm font-medium transition-all duration-300 hover:bg-muted ${
                location.pathname === link.to ? "text-primary bg-primary/5" : "text-muted-foreground"
              }`}
              style={{ animationDelay: `${i * 50}ms` }}
            >
              {link.label}
            </Link>
          ))}
          <Button asChild className="mt-3 w-full rounded-xl">
            <Link to="/book" onClick={() => setOpen(false)}>
              Book Now
            </Link>
          </Button>
        </div>
      </div>
    </nav>
  );
}
