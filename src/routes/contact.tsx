import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { QuoteForm } from "@/components/site/QuoteForm";
import { Mail, Phone, MessageCircle, MapPin, Clock } from "lucide-react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Export Inquiries & Quotations | Ferrum & Forge" },
      { name: "description", content: "Talk to our export desk. Send an inquiry, request a quotation, or reach us via WhatsApp, email or phone. Offices in Anand, Gujarat." },
      { property: "og:title", content: "Contact — Ferrum & Forge" },
      { property: "og:description", content: "Get factory-direct pricing within 12 business hours." },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Contact,
});

function Contact() {
  return (
    <>
      <PageHero eyebrow="Contact" title={<>Talk to the <em className="not-italic text-primary">export desk.</em></>}>
        Pricing, samples, paperwork, logistics — one team, one inbox, 12-hour response.
      </PageHero>

      <section className="mx-auto max-w-7xl px-6 py-20 grid gap-12 lg:grid-cols-2">
        <Reveal>
          <div className="space-y-6">
            <ContactItem icon={MapPin} label="Headquarters" value="Plot 14, GIDC Industrial Estate, Anand, Gujarat 388001, India" />
            <ContactItem icon={Mail} label="Email" value="exports@ferrumforge.in" href="mailto:exports@ferrumforge.in" />
            <ContactItem icon={Phone} label="Phone" value="+91 98765 43210" href="tel:+919876543210" />
            <ContactItem icon={MessageCircle} label="WhatsApp" value="Chat with sales" href="https://wa.me/919876543210" />
            <ContactItem icon={Clock} label="Business hours" value="Mon–Sat · 09:30–18:30 IST" />
          </div>
          <div className="mt-10 overflow-hidden rounded-xl border border-border">
            <iframe
              title="Anand, Gujarat"
              src="https://www.openstreetmap.org/export/embed.html?bbox=72.92%2C22.54%2C72.98%2C22.58&amp;layer=mapnik"
              className="h-72 w-full grayscale"
              loading="lazy"
            />
          </div>
        </Reveal>
        <div id="quote">
          <Reveal delay={0.1}>
            <QuoteForm />
          </Reveal>
        </div>
      </section>
    </>
  );
}

function ContactItem({ icon: Icon, label, value, href }: { icon: React.ComponentType<{ className?: string }>; label: string; value: string; href?: string }) {
  const Body = (
    <div className="flex items-start gap-4 rounded-xl border border-border bg-card p-5 hover:border-primary transition">
      <Icon className="h-5 w-5 text-primary mt-0.5" />
      <div>
        <div className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">{label}</div>
        <div className="mt-1 text-sm">{value}</div>
      </div>
    </div>
  );
  return href ? <a href={href} target={href.startsWith("http") ? "_blank" : undefined} rel="noopener">{Body}</a> : Body;
}
