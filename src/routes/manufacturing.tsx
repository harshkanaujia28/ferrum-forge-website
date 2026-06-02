import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import factoryImg from "@/assets/factory.jpg";

export const Route = createFileRoute("/manufacturing")({
  head: () => ({
    meta: [
      { title: "Manufacturing — Drop-Forging, CNC Finishing & QC | Ferrum & Forge" },
      { name: "description", content: "Inside our 92,000 sq.ft facility in Anand, India: drop-forging, CNC finishing, metallurgy lab and rigorous quality control for export-grade horse shoes." },
      { property: "og:title", content: "Manufacturing — Ferrum & Forge" },
      { property: "og:description", content: "Vertically integrated horse shoe manufacturing for global buyers." },
      { property: "og:url", content: "/manufacturing" },
    ],
    links: [{ rel: "canonical", href: "/manufacturing" }],
  }),
  component: Manufacturing,
});

function Manufacturing() {
  const stages = [
    { t: "Raw material sourcing", d: "Tata Steel and Jindal billets, certified mill test reports per batch." },
    { t: "Drop forging", d: "Closed-die forging at 1,150 °C across 5 dedicated lines." },
    { t: "Heat treatment", d: "Normalising, hardening and tempering per ASTM standards." },
    { t: "Shot blasting & descaling", d: "Surface preparation for finishing and inspection." },
    { t: "CNC finishing", d: "Crease milling, nail-hole punching, clip drawing." },
    { t: "Quality control", d: "100% visual + 5% destructive sampling; metallurgical lab on-site." },
    { t: "Packing", d: "ISPM-15 wooden crates, corrugated cartons, palletization." },
    { t: "Dispatch", d: "Pre-shipment photos and documents shared before container seal." },
  ];
  return (
    <>
      <PageHero eyebrow="Manufacturing" title={<>Where every shoe is <em className="not-italic text-primary">forged</em>.</>}>
        92,000 sq.ft of vertically integrated production in Anand, Gujarat — from billet to box,
        under a single ISO-certified roof.
      </PageHero>

      <section className="mx-auto max-w-7xl px-6 py-20 grid gap-12 lg:grid-cols-2 lg:items-center">
        <Reveal className="aspect-[4/3] overflow-hidden rounded-xl border border-border">
          <img src={factoryImg} alt="Factory floor" loading="lazy" className="h-full w-full object-cover" />
        </Reveal>
        <Reveal>
          <div className="text-[11px] uppercase tracking-[0.22em] text-primary">The facility</div>
          <h2 className="mt-3 font-display text-4xl">Five forges. Seven CNC stations. Zero compromises.</h2>
          <p className="mt-5 text-muted-foreground">Our facility is purpose-built for export volume — modern hammers, induction furnaces, automated trim presses and a calibrated metallurgical lab. Workers train minimum 18 months before being certified to operate forging lines independently.</p>
          <div className="mt-8 grid grid-cols-2 gap-4">
            {[["92,000", "sq.ft floor"], ["2.4M", "units / month"], ["140+", "workforce"], ["18 mo", "training cycle"]].map(([v, k]) => (
              <div key={k as string} className="rounded-lg border border-border p-4">
                <div className="font-display text-2xl">{v}</div>
                <div className="text-xs text-muted-foreground mt-1">{k}</div>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      <section className="border-t border-border bg-card/20">
        <div className="mx-auto max-w-7xl px-6 py-20">
          <Reveal>
            <div className="text-[11px] uppercase tracking-[0.22em] text-primary">Process timeline</div>
            <h2 className="mt-3 font-display text-4xl">From billet to container, in 8 stages.</h2>
          </Reveal>
          <div className="mt-12 relative">
            <div className="absolute left-3 top-0 bottom-0 w-px bg-border md:left-1/2" />
            <div className="space-y-8">
              {stages.map((s, i) => (
                <Reveal key={s.t} delay={i * 0.04} className={`relative pl-10 md:pl-0 md:w-1/2 ${i % 2 ? "md:ml-auto md:pl-10" : "md:pr-10 md:text-right"}`}>
                  <div className={`absolute top-2 h-2.5 w-2.5 rounded-full bg-primary ring-4 ring-background ${i % 2 ? "left-2 md:-left-[5px]" : "left-2 md:left-auto md:-right-[5px]"}`} />
                  <div className="font-mono text-xs text-primary">STAGE {String(i + 1).padStart(2, "0")}</div>
                  <h3 className="mt-1 font-display text-2xl">{s.t}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{s.d}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
