import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { Globe2, FileCheck, Package, Tag, Boxes, Ship } from "lucide-react";

export const Route = createFileRoute("/export-services")({
  head: () => ({
    meta: [
      { title: "Export Services — Global Logistics, OEM & Private Label | Ferrum & Forge" },
      { name: "description", content: "End-to-end export services: global logistics, documentation, OEM manufacturing, private labeling and bulk order handling. Shipping to 40+ countries." },
      { property: "og:title", content: "Export Services — Ferrum & Forge" },
      { property: "og:description", content: "Global logistics, OEM and private label for equine products." },
      { property: "og:url", content: "/export-services" },
    ],
    links: [{ rel: "canonical", href: "/export-services" }],
  }),
  component: ExportServices,
});

function ExportServices() {
  const services = [
    { icon: Globe2, t: "Global logistics", d: "Sea, air and door-to-door across 40+ countries." },
    { icon: Package, t: "Export packaging", d: "ISPM-15 fumigated crates, corrugated cartons, palletization." },
    { icon: FileCheck, t: "Documentation", d: "Commercial invoice, packing list, BL, COO, COA, REACH/RoHS." },
    { icon: Boxes, t: "Bulk order handling", d: "Container loads (20'/40') with consolidated SKUs." },
    { icon: Tag, t: "Private label", d: "Custom branding, packaging artwork, barcoding, country labels." },
    { icon: Ship, t: "OEM manufacturing", d: "Build to your drawing, alloy and spec — under NDA." },
  ];
  const countries = ["USA", "Canada", "Mexico", "UK", "Germany", "France", "Netherlands", "Spain", "Italy", "UAE", "Saudi Arabia", "Qatar", "Australia", "New Zealand", "Brazil", "Argentina", "Japan", "South Korea", "Singapore", "South Africa", "Kenya", "Egypt"];
  return (
    <>
      <PageHero eyebrow="Export services" title={<>Built to <em className="not-italic text-primary">land</em> in your warehouse — not just leave ours.</>}>
        End-to-end export: manufacturing, packaging, paperwork and shipping. One contract, one
        accountable team.
      </PageHero>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ icon: Icon, t, d }, i) => (
            <Reveal key={t} delay={i * 0.05} className="bg-background p-8">
              <Icon className="h-7 w-7 text-primary" />
              <div className="mt-5 font-display text-2xl">{t}</div>
              <p className="mt-2 text-sm text-muted-foreground">{d}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-t border-border bg-card/20">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <Reveal>
            <div className="text-[11px] uppercase tracking-[0.22em] text-primary">Shipping process</div>
            <h2 className="mt-3 font-display text-4xl">From inquiry to delivery — in 6 transparent steps.</h2>
          </Reveal>
          <ol className="mt-12 grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
            {[
              "Inquiry & quotation (within 12 hrs)",
              "Sample approval & PI",
              "Advance payment (T/T or L/C)",
              "Production & QC",
              "Pre-shipment inspection + photos",
              "Dispatch & live tracking",
            ].map((step, i) => (
              <Reveal key={step} delay={i * 0.05} className="bg-background p-7">
                <div className="font-mono text-xs text-primary">STEP {String(i + 1).padStart(2, "0")}</div>
                <div className="mt-3 font-display text-xl">{step}</div>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <Reveal>
          <div className="text-[11px] uppercase tracking-[0.22em] text-primary">Countries we export to</div>
          <h2 className="mt-3 font-display text-4xl">Active in 40+ markets.</h2>
        </Reveal>
        <div className="mt-10 flex flex-wrap gap-2">
          {countries.map((c) => (
            <span key={c} className="rounded-full border border-border px-3.5 py-1.5 text-sm hover:border-primary hover:text-primary transition">{c}</span>
          ))}
        </div>
      </section>
    </>
  );
}
