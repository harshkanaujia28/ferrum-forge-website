import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/products", label: "Products" },
  { to: "/export-services", label: "Export" },
  { to: "/manufacturing", label: "Manufacturing" },
  { to: "/certifications", label: "Certifications" },
  { to: "/gallery", label: "Gallery" },
  { to: "/blog", label: "Blog" },
  { to: "/contact", label: "Contact" },
] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/75 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link to="/" className="flex items-center gap-2.5 group">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-primary/40 bg-primary/10 text-primary transition group-hover:bg-primary group-hover:text-primary-foreground">
            {/* horseshoe glyph */}
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 4v8a7 7 0 0 0 14 0V4" strokeLinecap="round" />
              <path d="M5 4h2M17 4h2M6 8h.01M18 8h.01M7 12h.01M17 12h.01" strokeLinecap="round" />
            </svg>
          </span>
          <div className="leading-none">
            <div className="font-display text-base font-semibold tracking-tight">FERRUM &amp; FORGE</div>
            <div className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">Global Equine Exports</div>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-7 text-sm">
          {NAV.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="text-muted-foreground hover:text-foreground transition"
              activeProps={{ className: "text-foreground" }}
              activeOptions={{ exact: n.to === "/" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <a
            href="#quote"
            className="inline-flex items-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:brightness-110 transition"
          >
            Request Quote
          </a>
        </div>

        <button
          aria-label="Menu"
          className="lg:hidden inline-flex h-9 w-9 items-center justify-center rounded-md border border-border"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border bg-background">
          <div className="mx-auto max-w-7xl px-6 py-4 flex flex-col gap-1">
            {NAV.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="py-2 text-sm text-muted-foreground hover:text-foreground"
                activeProps={{ className: "py-2 text-sm text-foreground" }}
                activeOptions={{ exact: n.to === "/" }}
              >
                {n.label}
              </Link>
            ))}
            <a href="#quote" onClick={() => setOpen(false)} className="mt-3 inline-flex justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground">
              Request Quote
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
