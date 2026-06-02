import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer className="border-t border-border bg-card/40">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="font-display text-2xl font-semibold tracking-tight">Ferrum &amp; Forge</div>
            <p className="mt-3 max-w-sm text-sm text-muted-foreground">
              Indian manufacturer and global exporter of premium horse shoes, farrier tools and
              equine metalwork — shipping to 40+ countries since 1998.
            </p>
            <div className="mt-6 flex flex-wrap gap-2 text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
              <span className="rounded-sm border border-border px-2 py-1">ISO 9001:2015</span>
              <span className="rounded-sm border border-border px-2 py-1">FIEO Member</span>
              <span className="rounded-sm border border-border px-2 py-1">DGFT IEC</span>
              <span className="rounded-sm border border-border px-2 py-1">REACH</span>
            </div>
          </div>

          <div>
            <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Company</div>
            <ul className="mt-4 space-y-2 text-sm">
              <li><Link to="/about" className="hover:text-primary">About</Link></li>
              <li><Link to="/manufacturing" className="hover:text-primary">Manufacturing</Link></li>
              <li><Link to="/certifications" className="hover:text-primary">Certifications</Link></li>
              <li><Link to="/gallery" className="hover:text-primary">Gallery</Link></li>
              <li><Link to="/blog" className="hover:text-primary">Blog</Link></li>
            </ul>
          </div>

          <div>
            <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Contact</div>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li>Plot 14, GIDC Industrial Estate<br/>Anand, Gujarat 388001, India</li>
              <li><a href="mailto:exports@ferrumforge.in" className="hover:text-primary">exports@ferrumforge.in</a></li>
              <li><a href="tel:+919876543210" className="hover:text-primary">+91 98765 43210</a></li>
              <li><a href="https://wa.me/919876543210" className="hover:text-primary">WhatsApp Sales</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-border pt-6 text-xs text-muted-foreground md:flex-row md:items-center md:justify-between">
          <div>© {new Date().getFullYear()} Ferrum &amp; Forge Exports Pvt. Ltd. All rights reserved.</div>
          <div className="flex gap-6">
            <Link to="/contact" className="hover:text-primary">Privacy</Link>
            <Link to="/contact" className="hover:text-primary">Terms</Link>
            <Link to="/contact" className="hover:text-primary">Export Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
