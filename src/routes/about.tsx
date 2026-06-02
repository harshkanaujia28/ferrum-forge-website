import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import factoryImg from "@/assets/factory.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Ferrum & Forge — Indian Horse Shoe Manufacturer Since 1998" },
      { name: "description", content: "Three decades of forging excellence. Learn about our history, manufacturing capabilities, export experience and the team behind Ferrum & Forge." },
      { property: "og:title", content: "About Ferrum & Forge" },
      { property: "og:description", content: "Indian manufacturer & exporter of horse shoes and equine products since 1998." },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

function About() {
  return (
    <>
      <PageHero eyebrow="About us" title={<>Three decades at the <em className="not-italic text-primary">anvil.</em></>}>
        From a single forge in Anand to 40+ export markets — built on metallurgy, discipline and
        a refusal to ship anything we wouldn't put on our own horses.
      </PageHero>

      <section className="mx-auto max-w-7xl px-6 py-24 grid gap-12 lg:grid-cols-2 lg:items-center">
        <Reveal className="aspect-[4/3] overflow-hidden rounded-xl border border-border">
          <img src={factoryImg} alt="Factory" className="h-full w-full object-cover" loading="lazy" />
        </Reveal>
        <Reveal>
          <Eyebrow>Our story</Eyebrow>
          <h2 className="mt-3 font-display text-4xl">From regional forge to global exporter.</h2>
          <p className="mt-5 text-muted-foreground">Founded in 1998 by master farrier Rameshbhai Patel, Ferrum &amp; Forge began with two coal forges supplying local Gujarati horse breeders. Today we operate a 92,000 sq.ft modern facility shipping containers to North America, Europe, the Middle East and Oceania.</p>
          <p className="mt-3 text-muted-foreground">The craftsmanship hasn't changed — only the scale.</p>
        </Reveal>
      </section>

      <section className="border-t border-border bg-card/20">
        <div className="mx-auto max-w-7xl px-6 py-24 grid gap-12 md:grid-cols-2">
          <Reveal className="rounded-xl border border-border bg-background p-8">
            <Eyebrow>Mission</Eyebrow>
            <h3 className="mt-3 font-display text-3xl">Make export-grade equine metalwork accessible worldwide.</h3>
            <p className="mt-4 text-muted-foreground">Factory-direct pricing, international quality and dependable logistics — under one roof.</p>
          </Reveal>
          <Reveal delay={0.1} className="rounded-xl border border-border bg-background p-8">
            <Eyebrow>Vision</Eyebrow>
            <h3 className="mt-3 font-display text-3xl">Be the most trusted equine export brand from India.</h3>
            <p className="mt-4 text-muted-foreground">Measured in repeat buyers, not just shipped containers.</p>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24">
        <Reveal>
          <Eyebrow>Capabilities</Eyebrow>
          <h2 className="mt-3 font-display text-4xl">What we deliver at scale.</h2>
        </Reveal>
        <div className="mt-12 grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {[
            { t: "92,000 sq.ft facility", d: "Vertically integrated forging, finishing and packing." },
            { t: "5 forging lines · 7 CNC stations", d: "Capacity for 2.4M units / month at peak." },
            { t: "In-house export desk", d: "DGFT, customs, banking and forwarder coordination." },
            { t: "Metallurgical lab", d: "Tensile, hardness and chemistry tests on every heat." },
            { t: "OEM & private label", d: "Custom alloys, branding, packaging and barcoding." },
            { t: "Global logistics", d: "FOB, CIF, DDP from Mumbai/Mundra to your port." },
          ].map((it) => (
            <Reveal key={it.t} className="bg-background p-7">
              <div className="font-display text-xl">{it.t}</div>
              <p className="mt-2 text-sm text-muted-foreground">{it.d}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-t border-border bg-card/20">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <Reveal>
            <Eyebrow>Leadership</Eyebrow>
            <h2 className="mt-3 font-display text-4xl">The team at the anvil.</h2>
          </Reveal>
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { n: "Ramesh Patel", r: "Founder & Master Farrier" },
              { n: "Nilesh Patel", r: "Managing Director" },
              { n: "Priya Shah", r: "Head of Exports" },
              { n: "Dr. Anand Mehta", r: "Quality & Metallurgy" },
            ].map((p) => (
              <Reveal key={p.n} className="rounded-xl border border-border bg-background p-6">
                <div className="aspect-square w-full rounded-lg bg-gradient-to-br from-primary/30 to-card" />
                <div className="mt-4 font-display text-lg">{p.n}</div>
                <div className="text-xs text-muted-foreground">{p.r}</div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function Eyebrow({ children }: { children: React.ReactNode }) {
  return <div className="text-[11px] uppercase tracking-[0.22em] text-primary">{children}</div>;
}
