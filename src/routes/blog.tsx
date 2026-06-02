import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Insights & Guides — Horse Shoes, Exports, Hoof Care | Ferrum & Forge" },
      { name: "description", content: "Expert articles on horse shoe manufacturing, types, aluminum vs steel, export quality standards and equine hoof care best practices." },
      { property: "og:title", content: "Blog — Ferrum & Forge" },
      { property: "og:description", content: "Insights for buyers, distributors and farriers." },
      { property: "og:url", content: "/blog" },
    ],
    links: [{ rel: "canonical", href: "/blog" }],
  }),
  component: Blog,
});

const POSTS = [
  { cat: "Manufacturing", t: "Inside the horse shoe manufacturing process", d: "From billet selection to finished crease — a transparent walk through every stage." , read: "8 min" },
  { cat: "Buyer's Guide", t: "Types of horse shoes: a buyer's reference", d: "Plain, fullered, racing, therapeutic — when to specify which, and why." , read: "10 min" },
  { cat: "Materials", t: "Aluminum vs steel: which horse shoe fits your market?", d: "Weight, wear, cost and use-case trade-offs distributors should know." , read: "6 min" },
  { cat: "Exports", t: "Export quality standards every importer should verify", d: "Mill test certificates, dimensional tolerances and ISPM-15 packaging." , read: "7 min" },
  { cat: "Hoof Care", t: "A practical guide to equine hoof care", d: "From cleaning protocols to therapeutic shoeing — what farriers actually do." , read: "9 min" },
  { cat: "Logistics", t: "FOB vs CIF vs DDP — picking the right Incoterm", d: "Cost, risk and paperwork breakdown for first-time equine importers." , read: "5 min" },
];

function Blog() {
  return (
    <>
      <PageHero eyebrow="Insights" title={<>Field notes for <em className="not-italic text-primary">buyers, distributors and farriers.</em></>}>
        Practical, no-fluff articles from our manufacturing and export teams.
      </PageHero>
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {POSTS.map((p, i) => (
            <Reveal key={p.t} delay={i * 0.05}>
              <Link to="/blog" className="group block h-full rounded-xl border border-border bg-card p-7 hover:border-primary transition">
                <div className="text-[10px] uppercase tracking-[0.18em] text-primary">{p.cat} · {p.read}</div>
                <h3 className="mt-3 font-display text-2xl leading-snug text-balance group-hover:text-primary transition">{p.t}</h3>
                <p className="mt-3 text-sm text-muted-foreground">{p.d}</p>
                <div className="mt-6 text-xs text-muted-foreground">Read article →</div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
