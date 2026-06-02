import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, ShieldCheck, Globe2, Factory, Award, Truck, Plus, Minus } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";

import hero from "@/assets/hero-forge.jpg";
import productsImg from "@/assets/products-grid.jpg";
import factoryImg from "@/assets/factory.jpg";
import shippingImg from "@/assets/shipping.jpg";

import { Reveal, Counter } from "@/components/site/Reveal";
import { QuoteForm } from "@/components/site/QuoteForm";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ferrum & Forge — Global Horse Shoe Exporter & Manufacturer (India)" },
      { name: "description", content: "Indian manufacturer & exporter of premium horse shoes, farrier tools and equine products. ISO 9001, shipping to 40+ countries. Get factory-direct pricing." },
      { property: "og:title", content: "Global Exporters of Premium Horse Shoes & Equine Products" },
      { property: "og:description", content: "Aluminum, steel & racing horse shoes, farrier tools, hoof care — shipped worldwide from India." },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      <Hero />
      <PartnersMarquee />
      <Stats />
      <Categories />
      <WhyUs />
      <Manufacturing />
      <Shipping />
      <Certifications />
      <Testimonials />
      <Faq />
      <QuoteSection />
    </>
  );
}

/* ---------------- HERO ---------------- */
function Hero() {
  return (
    <section className="relative isolate overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <img src={hero} alt="" width={1920} height={1080} className="h-full w-full object-cover opacity-55" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/70 to-background" />
        <div className="absolute inset-0 ember-gradient" />
      </div>

      <div className="mx-auto max-w-7xl px-6 pt-28 pb-32 sm:pt-36 sm:pb-40">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-3 py-1 text-[11px] uppercase tracking-[0.18em] text-muted-foreground backdrop-blur"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
          Forging since 1998 · Anand, Gujarat
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.05 }}
          className="mt-6 max-w-4xl font-display text-5xl font-semibold leading-[1.02] tracking-tight text-balance sm:text-7xl lg:text-[88px]"
        >
          Global exporters of <em className="not-italic text-primary">premium</em> horse shoes &amp; equine products.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mt-6 max-w-xl text-base text-muted-foreground sm:text-lg"
        >
          Factory-direct supply of aluminum, steel and racing horse shoes, hand-forged farrier
          tools and hoof care — engineered to international standards and shipped to 40+
          countries.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="mt-9 flex flex-wrap items-center gap-3"
        >
          <a href="#quote" className="group inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-medium text-primary-foreground hover:brightness-110">
            Request a Quotation
            <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
          <Link to="/products" className="inline-flex items-center gap-2 rounded-md border border-border px-5 py-3 text-sm font-medium hover:border-primary hover:text-primary">
            Explore Products
          </Link>
        </motion.div>

        {/* hero meta */}
        <div className="mt-16 grid max-w-2xl grid-cols-3 gap-8 border-t border-border pt-8">
          {[
            { k: "Countries", v: "40+" },
            { k: "Monthly capacity", v: "2.4M units" },
            { k: "On-time dispatch", v: "98.6%" },
          ].map((it) => (
            <div key={it.k}>
              <div className="font-display text-2xl">{it.v}</div>
              <div className="mt-1 text-[11px] uppercase tracking-[0.18em] text-muted-foreground">{it.k}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- MARQUEE ---------------- */
function PartnersMarquee() {
  const items = ["USA", "Germany", "United Kingdom", "Australia", "UAE", "France", "Brazil", "Canada", "Netherlands", "Japan", "South Africa", "Saudi Arabia"];
  return (
    <section className="border-y border-border bg-card/30 py-6 overflow-hidden">
      <div className="flex items-center gap-12 marquee whitespace-nowrap font-display text-2xl text-muted-foreground">
        {[...items, ...items].map((c, i) => (
          <span key={i} className="flex items-center gap-12">
            {c}
            <span className="h-1 w-1 rounded-full bg-primary/60" />
          </span>
        ))}
      </div>
    </section>
  );
}

/* ---------------- STATS ---------------- */
function Stats() {
  const stats = [
    { label: "Years in export", value: 27, suffix: "+" },
    { label: "Countries shipped", value: 42, suffix: "" },
    { label: "Containers / year", value: 380, suffix: "" },
    { label: "Repeat buyers", value: 92, suffix: "%" },
  ];
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <Reveal>
        <div className="max-w-2xl">
          <Eyebrow>By the numbers</Eyebrow>
          <h2 className="mt-3 font-display text-4xl tracking-tight sm:text-5xl">A measurable track record across continents.</h2>
        </div>
      </Reveal>
      <div className="mt-14 grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((s, i) => (
          <Reveal key={s.label} delay={i * 0.08} className="bg-background p-8">
            <div className="font-display text-5xl text-primary">
              <Counter to={s.value} suffix={s.suffix} />
            </div>
            <div className="mt-3 text-xs uppercase tracking-[0.18em] text-muted-foreground">{s.label}</div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* ---------------- CATEGORIES ---------------- */
function Categories() {
  const cats = [
    { title: "Aluminum Horse Shoes", note: "Lightweight · racing-grade", sizes: "00 – 8" },
    { title: "Steel Horse Shoes", note: "Drop-forged · long wear", sizes: "0 – 10" },
    { title: "Racing Horse Shoes", note: "Toe-grab & swedged profiles", sizes: "Custom" },
    { title: "Handmade Farrier Tools", note: "Hammers · pincers · clinchers", sizes: "Pro grade" },
    { title: "Hoof Care Products", note: "Pads · packings · ointments", sizes: "OEM ready" },
    { title: "Equine Accessories", note: "Studs · nails · pads", sizes: "Bulk MOQ" },
  ];
  return (
    <section className="border-t border-border bg-card/20">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <Reveal className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-xl">
            <Eyebrow>Product categories</Eyebrow>
            <h2 className="mt-3 font-display text-4xl tracking-tight sm:text-5xl">
              A complete equine metalwork catalog.
            </h2>
          </div>
          <Link to="/products" className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline">
            View full catalog <ArrowUpRight className="h-4 w-4" />
          </Link>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {cats.map((c, i) => (
            <Reveal key={c.title} delay={i * 0.05}>
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="group relative h-full overflow-hidden rounded-xl border border-border bg-background p-7"
              >
                <div className="flex items-start justify-between">
                  <div className="font-display text-2xl tracking-tight">{c.title}</div>
                  <ArrowUpRight className="h-4 w-4 text-muted-foreground transition group-hover:text-primary group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </div>
                <div className="mt-2 text-sm text-muted-foreground">{c.note}</div>
                <div className="mt-8 flex items-center justify-between border-t border-border pt-4 text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                  <span>Sizes</span>
                  <span className="text-foreground">{c.sizes}</span>
                </div>
                <div className="pointer-events-none absolute inset-x-0 -bottom-px h-px bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 transition group-hover:opacity-100" />
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- WHY US ---------------- */
function WhyUs() {
  const items = [
    { icon: ShieldCheck, t: "ISO 9001 certified quality", d: "Every batch metallurgically tested for tensile strength, ductility and surface finish." },
    { icon: Factory, t: "In-house drop-forging", d: "Five forging lines and CNC finishing — full control over your spec from billet to box." },
    { icon: Globe2, t: "Export-ready compliance", d: "DGFT IEC, REACH, RoHS and country-specific docs handled by our in-house export desk." },
    { icon: Truck, t: "Reliable global shipping", d: "FOB, CIF or DDP from Mumbai/Mundra. 98.6% on-time dispatch across 40+ countries." },
  ];
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <div className="grid gap-16 lg:grid-cols-12">
        <Reveal className="lg:col-span-5">
          <Eyebrow>Why ferrum &amp; forge</Eyebrow>
          <h2 className="mt-3 font-display text-4xl tracking-tight sm:text-5xl text-balance">
            The reliability of a manufacturer. The polish of a global brand.
          </h2>
          <p className="mt-5 text-base text-muted-foreground">
            We're not a trading house — we own the foundry, the finishing line and the export
            paperwork. That's why distributors in 40+ countries trust us with repeat container
            loads year after year.
          </p>
        </Reveal>
        <div className="lg:col-span-7 grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2">
          {items.map(({ icon: Icon, t, d }, i) => (
            <Reveal key={t} delay={i * 0.05} className="bg-background p-7">
              <Icon className="h-6 w-6 text-primary" />
              <div className="mt-4 font-display text-lg">{t}</div>
              <p className="mt-2 text-sm text-muted-foreground">{d}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- MANUFACTURING ---------------- */
function Manufacturing() {
  return (
    <section className="border-t border-border bg-card/20">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-24 lg:grid-cols-2 lg:items-center">
        <Reveal className="relative aspect-[4/3] overflow-hidden rounded-xl border border-border">
          <img src={factoryImg} alt="Ferrum & Forge factory floor" loading="lazy" width={1600} height={1000} className="h-full w-full object-cover" />
          <div className="absolute bottom-4 left-4 rounded-md bg-background/85 px-3 py-2 text-xs backdrop-blur">
            <span className="text-primary font-medium">Anand, Gujarat</span> · 92,000 sq.ft facility
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <Eyebrow>Manufacturing</Eyebrow>
          <h2 className="mt-3 font-display text-4xl tracking-tight sm:text-5xl">
            Drop-forged. CNC-finished. Inspected piece-by-piece.
          </h2>
          <p className="mt-5 text-base text-muted-foreground">
            Our 92,000 sq.ft facility runs five hot-forging lines and seven CNC finishing stations
            under a single quality system. Every shipment is sampled, tested and photographed
            before it leaves the floor.
          </p>
          <ul className="mt-8 space-y-4">
            {[
              "Raw material from Tata & Jindal mills",
              "Closed-die drop forging at 1,150 °C",
              "Heat treatment + shot blasting",
              "CNC clinching, drilling & nail-hole punching",
              "100% visual + 5% destructive QC sampling",
            ].map((s, i) => (
              <li key={s} className="flex items-start gap-3 text-sm">
                <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-primary" />
                <span><span className="text-muted-foreground mr-2 font-mono text-xs">{String(i + 1).padStart(2, "0")}</span>{s}</span>
              </li>
            ))}
          </ul>
          <Link to="/manufacturing" className="mt-8 inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline">
            Tour the factory <ArrowUpRight className="h-4 w-4" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- SHIPPING ---------------- */
function Shipping() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
        <Reveal>
          <Eyebrow>Global shipping</Eyebrow>
          <h2 className="mt-3 font-display text-4xl tracking-tight sm:text-5xl">
            From our anvil to your warehouse — anywhere.
          </h2>
          <p className="mt-5 text-base text-muted-foreground">
            Sea, air and door-to-door logistics handled in-house. We work with your forwarder or
            ours — and we send you photo-verified dispatch updates at every stage.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {[
              { k: "EXW · FOB · CIF · DDP", v: "All Incoterms" },
              { k: "Mumbai · Mundra · Nhava Sheva", v: "Loading ports" },
              { k: "ISPM-15 fumigated crates", v: "Packaging" },
              { k: "Pre-shipment photos + COA", v: "Verification" },
            ].map((it) => (
              <div key={it.k} className="rounded-lg border border-border p-4">
                <div className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">{it.v}</div>
                <div className="mt-1 text-sm font-medium">{it.k}</div>
              </div>
            ))}
          </div>
        </Reveal>
        <Reveal delay={0.1} className="relative order-first aspect-[4/3] overflow-hidden rounded-xl border border-border lg:order-last">
          <img src={shippingImg} alt="Export shipping crates" loading="lazy" width={1600} height={1000} className="h-full w-full object-cover" />
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- CERTIFICATIONS ---------------- */
function Certifications() {
  const certs = ["ISO 9001:2015", "DGFT IEC", "REACH Compliant", "RoHS", "FIEO Member", "MSME Certified", "ISO 14001", "EU CE Marked"];
  return (
    <section className="border-t border-border bg-card/20">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <Reveal className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <Eyebrow>Certifications</Eyebrow>
            <h2 className="mt-3 font-display text-3xl tracking-tight sm:text-4xl">Audited &amp; certified for international trade.</h2>
          </div>
          <Link to="/certifications" className="text-sm font-medium text-primary hover:underline">View all certificates →</Link>
        </Reveal>
        <div className="mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-4">
          {certs.map((c, i) => (
            <Reveal key={c} delay={i * 0.03} className="bg-background p-6 text-center">
              <Award className="mx-auto h-6 w-6 text-primary" />
              <div className="mt-3 text-sm font-medium">{c}</div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- TESTIMONIALS ---------------- */
function Testimonials() {
  const t = [
    { q: "We've moved our entire farrier tool sourcing to Ferrum & Forge. Quality is consistent across containers and their export desk just works.", n: "Marcus H.", c: "Director · Equicare Distribution, Germany" },
    { q: "Their racing shoe profiles are the closest factory-direct match we've found to traditional Newmarket craftsmanship.", n: "Sarah O'Leary", c: "Head Farrier · Ascot Stables, UK" },
    { q: "Three years, zero shipment delays. That's rare in this industry.", n: "Faisal Al-Mutairi", c: "Procurement · Gulf Equine Trading, UAE" },
  ];
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <Reveal>
        <Eyebrow>Buyer testimonials</Eyebrow>
        <h2 className="mt-3 max-w-2xl font-display text-4xl tracking-tight sm:text-5xl">Trusted by distributors, stables and farrier supply houses worldwide.</h2>
      </Reveal>
      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {t.map((it, i) => (
          <Reveal key={it.n} delay={i * 0.08}>
            <figure className="h-full rounded-xl border border-border bg-card p-7">
              <div className="text-primary font-display text-4xl leading-none">“</div>
              <blockquote className="mt-3 text-base leading-relaxed text-pretty">{it.q}</blockquote>
              <figcaption className="mt-6 border-t border-border pt-4">
                <div className="text-sm font-medium">{it.n}</div>
                <div className="text-xs text-muted-foreground">{it.c}</div>
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* ---------------- FAQ ---------------- */
function Faq() {
  const qs = [
    { q: "What's your minimum order quantity (MOQ)?", a: "Standard MOQ is 5,000 units per SKU for stock items and 10,000 units for OEM/private-label runs. We can quote smaller pilot orders for first-time buyers." },
    { q: "Which Incoterms do you support?", a: "EXW Anand, FOB Mumbai/Mundra, CIF to your destination port, and DDP door-delivery in major markets." },
    { q: "Do you offer private labeling and OEM packaging?", a: "Yes. We handle laser-etched branding, custom box artwork, barcoding and country-specific labeling end-to-end." },
    { q: "How long is your typical lead time?", a: "4–6 weeks for in-stock catalog items, 6–8 weeks for OEM production, from receipt of advance and approved samples." },
    { q: "Do you provide pre-shipment inspection?", a: "Yes — internal QC reports, photos and third-party inspection (SGS / BV / Intertek) on request." },
  ];
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="border-t border-border bg-card/20">
      <div className="mx-auto max-w-4xl px-6 py-24">
        <Reveal className="text-center">
          <Eyebrow>Frequently asked</Eyebrow>
          <h2 className="mt-3 font-display text-4xl tracking-tight sm:text-5xl">Answers for buyers &amp; importers.</h2>
        </Reveal>
        <div className="mt-12 divide-y divide-border border-y border-border">
          {qs.map((it, i) => (
            <div key={it.q} className="py-1">
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="flex w-full items-center justify-between gap-6 py-5 text-left"
              >
                <span className="font-display text-lg sm:text-xl">{it.q}</span>
                {open === i ? <Minus className="h-5 w-5 text-primary shrink-0" /> : <Plus className="h-5 w-5 text-muted-foreground shrink-0" />}
              </button>
              <motion.div
                initial={false}
                animate={{ height: open === i ? "auto" : 0, opacity: open === i ? 1 : 0 }}
                transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="overflow-hidden"
              >
                <p className="pb-5 pr-10 text-sm text-muted-foreground leading-relaxed">{it.a}</p>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- QUOTE SECTION ---------------- */
function QuoteSection() {
  return (
    <section id="quote" className="relative isolate overflow-hidden border-t border-border">
      <div className="absolute inset-0 -z-10">
        <img src={productsImg} alt="" className="h-full w-full object-cover opacity-25" loading="lazy" />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background" />
      </div>
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-24 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <Eyebrow>Request a quotation</Eyebrow>
          <h2 className="mt-3 font-display text-4xl tracking-tight sm:text-5xl text-balance">
            Tell us what you need. We reply within 12 hours.
          </h2>
          <p className="mt-5 max-w-lg text-base text-muted-foreground">
            Share your product, quantity and destination — our export team comes back with pricing,
            lead time and a pro-forma invoice. No middlemen, no markup.
          </p>
          <div className="mt-10 flex flex-col gap-3 text-sm">
            {[
              "Factory-direct pricing",
              "Free pre-production samples for confirmed orders",
              "All shipping & documentation handled in-house",
              "NDA available for OEM &amp; private label",
            ].map((s) => (
              <div key={s} className="flex items-center gap-3 text-muted-foreground">
                <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                <span dangerouslySetInnerHTML={{ __html: s }} />
              </div>
            ))}
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <QuoteForm />
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- shared ---------------- */
function Eyebrow({ children }: { children: React.ReactNode }) {
  return <div className="text-[11px] uppercase tracking-[0.22em] text-primary">{children}</div>;
}
