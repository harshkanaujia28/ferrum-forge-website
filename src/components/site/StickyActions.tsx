import { useEffect, useState } from "react";
import { MessageCircle, FileText, X } from "lucide-react";

export function StickyActions() {
  const [showPopup, setShowPopup] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (dismissed) return;
      if (window.scrollY > 1400) setShowPopup(true);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [dismissed]);

  return (
    <>
      <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-3">
        <a
          href="#quote"
          className="hidden sm:inline-flex items-center gap-2 rounded-full border border-primary/40 bg-card/90 px-4 py-2.5 text-sm font-medium shadow-lg backdrop-blur hover:bg-primary hover:text-primary-foreground transition"
        >
          <FileText className="h-4 w-4" />
          Request Quotation
        </a>
        <a
          href="https://wa.me/919876543210?text=Hi%2C%20I%27d%20like%20a%20quotation%20for%20horse%20shoes."
          target="_blank"
          rel="noopener"
          aria-label="WhatsApp"
          className="inline-flex h-13 w-13 items-center justify-center rounded-full bg-[#25D366] text-white shadow-2xl shadow-[#25D366]/30 hover:scale-105 transition"
          style={{ height: 52, width: 52 }}
        >
          <MessageCircle className="h-6 w-6" />
        </a>
      </div>

      {showPopup && (
        <div className="fixed bottom-24 right-5 z-50 w-[320px] max-w-[calc(100vw-2.5rem)] rounded-xl border border-border bg-card p-5 shadow-2xl animate-in fade-in slide-in-from-bottom-4">
          <button
            aria-label="Close"
            onClick={() => { setShowPopup(false); setDismissed(true); }}
            className="absolute right-2 top-2 inline-flex h-7 w-7 items-center justify-center rounded-md text-muted-foreground hover:bg-muted"
          >
            <X className="h-4 w-4" />
          </button>
          <div className="text-xs uppercase tracking-[0.18em] text-primary">Bulk Inquiry</div>
          <div className="mt-1 font-display text-lg leading-snug">
            Get factory-direct pricing in under 12 hours.
          </div>
          <p className="mt-1 text-xs text-muted-foreground">
            Share your specs &amp; destination — our export desk responds the same business day.
          </p>
          <a
            href="#quote"
            onClick={() => { setShowPopup(false); setDismissed(true); }}
            className="mt-3 inline-flex w-full items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground"
          >
            Open quote form
          </a>
        </div>
      )}
    </>
  );
}
