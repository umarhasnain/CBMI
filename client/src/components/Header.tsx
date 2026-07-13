import { Link, useLocation } from "wouter";
import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/industries", label: "Industries" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [location] = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border/50">
      {/* Top bar */}
      <div className="bg-[oklch(0.25_0.05_260)] text-white text-sm">
        <div className="container flex items-center justify-between py-2">
          <div className="flex items-center gap-4">
            <a href="tel:310-297-2737" className="flex items-center gap-1.5 hover:text-[oklch(0.65_0.15_70)] transition-colors">
              <Phone className="w-3.5 h-3.5" />
              <span>310-297-2737</span>
            </a>
            <span className="hidden sm:inline text-white/50">|</span>
            <span className="hidden sm:inline text-white/70">24-Hour Emergency Service</span>
          </div>
          <div className="flex items-center gap-3">
            <a href="https://www.facebook.com/CBMIOfficial/" target="_blank" rel="noopener" className="hover:text-[oklch(0.65_0.15_70)] transition-colors">FB</a>
            <a href="https://www.instagram.com/cbmi_official/" target="_blank" rel="noopener" className="hover:text-[oklch(0.65_0.15_70)] transition-colors">IG</a>
            <a href="https://www.linkedin.com/company/cbmila" target="_blank" rel="noopener" className="hover:text-[oklch(0.65_0.15_70)] transition-colors">LI</a>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <div className="container flex items-center justify-between py-4">
        <Link href="/" className="flex items-center gap-3">
          <div className="w-10 h-10 bg-[oklch(0.25_0.05_260)] rounded-sm flex items-center justify-center">
            <span className="text-white font-bold text-sm font-sans">CBMI</span>
          </div>
          <div className="hidden sm:block">
            <div className="font-serif text-lg font-bold text-[oklch(0.25_0.05_260)] leading-tight">CBMI</div>
            <div className="text-xs text-muted-foreground leading-tight">Cal Building & Maintenance</div>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors hover:text-[oklch(0.65_0.15_70)] ${
                location === link.href
                  ? "text-[oklch(0.65_0.15_70)]"
                  : "text-[oklch(0.25_0.05_260)]"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          <Link
            href="/contact"
            className="px-5 py-2.5 bg-[oklch(0.65_0.15_70)] text-white text-sm font-semibold rounded-sm hover:bg-[oklch(0.60_0.15_70)] transition-all duration-200 active:scale-[0.97]"
          >
            Request a Consultation
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="lg:hidden p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-border bg-white">
          <nav className="container py-4 flex flex-col gap-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={`text-base font-medium py-2 ${
                  location === link.href
                    ? "text-[oklch(0.65_0.15_70)]"
                    : "text-[oklch(0.25_0.05_260)]"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="mt-2 px-5 py-3 bg-[oklch(0.65_0.15_70)] text-white text-sm font-semibold rounded-sm text-center"
            >
              Request a Consultation
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
