import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { Award, ShieldCheck, FileCheck } from "lucide-react";

export const Route = createFileRoute("/certifications")({
  head: () => ({
    meta: [
      { title: "Certifications & Compliance — ISO, REACH, DGFT | Ferrum & Forge" },
      { name: "description", content: "ISO 9001, ISO 14001, REACH, RoHS, DGFT IEC, FIEO and EU CE compliance — every certificate audited and verifiable." },
      { property: "og:title", content: "Certifications — Ferrum & Forge" },
      { property: "og:description", content: "Compliance and quality certifications for international trade." },
      { property: "og:url", content: "/certifications" },
    ],
    links: [{ rel: "canonical", href: "/certifications" }],
  }),
  component: Certifications,
});

function Certifications() {
  const groups = [
    {
      icon: Award, title: "Quality", certs: [
        { n: "ISO 9001:2015", b: "TÜV NORD", y: "Renewed 2024" },
        { n: "ISO 14001:2015", b: "TÜV NORD", y: "Renewed 2024" },
        { n: "EU CE Marked", b: "Notified Body 0123", y: "2023" },
      ]
    },
    {
      icon: ShieldCheck, title: "Compliance", certs: [
        { n: "REACH (EU)", b: "Self-declared", y: "Current" },
        { n: "RoHS Directive", b: "SGS Tested", y: "2024" },
        { n: "California Prop 65", b: "Lab Verified", y: "2023" },
      ]
    },
    {
      icon: FileCheck, title: "Export licenses", certs: [
        { n: "DGFT IEC", b: "Govt. of India", y: "Active" },
        { n: "FIEO Member", b: "Federation of Indian Export Org.", y: "Since 2004" },
        { n: "AEO-T1", b: "Indian Customs", y: "2022" },
      ]
    },
  ];
  return (
    <>
      <PageHero eyebrow="Certifications" title={<>Audited. Certified. <em className="not-italic text-primary">Verifiable.</em></>}>
        Every quality and compliance certificate we hold is renewed on schedule and available
        to qualified buyers on request.
      </PageHero>

      <section className="mx-auto max-w-7xl px-6 py-20 space-y-16">
        {groups.map(({ icon: Icon, title, certs }, gi) => (
          <Reveal key={title} delay={gi * 0.05}>
            <div className="flex items-center gap-3">
              <Icon className="h-6 w-6 text-primary" />
              <h2 className="font-display text-3xl">{title}</h2>
            </div>
            <div className="mt-6 grid gap-px overflow-hidden rounded-xl border border-border bg-border md:grid-cols-3">
              {certs.map((c) => (
                <div key={c.n} className="bg-background p-7">
                  <div className="font-display text-xl">{c.n}</div>
                  <div className="mt-2 text-sm text-muted-foreground">{c.b}</div>
                  <div className="mt-6 text-[11px] uppercase tracking-[0.18em] text-primary">{c.y}</div>
                </div>
              ))}
            </div>
          </Reveal>
        ))}
      </section>
    </>
  );
}
