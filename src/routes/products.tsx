import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { MessageCircle, FileText } from "lucide-react";
import productsImg from "@/assets/products-grid.jpg";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "Products — Horse Shoes, Farrier Tools & Equine Accessories | Ferrum & Forge" },
      { name: "description", content: "Aluminum, steel and racing horse shoes, handmade farrier tools, hoof care and equine accessories — factory-direct from India. View specs, MOQs and request a quote." },
      { property: "og:title", content: "Products — Ferrum & Forge" },
      { property: "og:description", content: "Full export catalog of horse shoes, farrier tools and equine accessories." },
      { property: "og:url", content: "/products" },
    ],
    links: [{ rel: "canonical", href: "/products" }],
  }),
  component: Products,
});

const PRODUCTS = [
  { name: "Aluminum Horse Shoes", desc: "Lightweight racing-grade shoes in 6063-T6 aluminum.", sizes: "00 – 8", moq: "5,000 units", weight: "120–280 g" },
  { name: "Steel Horse Shoes", desc: "Drop-forged carbon steel with hardened nail-hole crease.", sizes: "0 – 10", moq: "5,000 units", weight: "220–520 g" },
  { name: "Racing Horse Shoes", desc: "Toe-grab, swedged and queens-plate profiles for the track.", sizes: "Custom", moq: "2,000 pairs", weight: "90–180 g" },
  { name: "Handmade Farrier Tools", desc: "Drop-forged hammers, pincers, clinchers and nippers.", sizes: "Pro grade", moq: "500 units", weight: "—" },
  { name: "Hoof Care Products", desc: "Therapeutic pads, packings and hoof ointments.", sizes: "Standard", moq: "2,000 units", weight: "—" },
  { name: "Equine Accessories", desc: "Horseshoe nails, studs, frog support pads and clips.", sizes: "Standard", moq: "10,000 units", weight: "—" },
];

function Products() {
  return (
    <>
      <PageHero eyebrow="Products" title={<>The complete <em className="not-italic text-primary">export catalog.</em></>}>
        Six product families, hundreds of SKUs — built to international spec and shipped under
        your label or ours.
      </PageHero>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-6 lg:grid-cols-2">
          {PRODUCTS.map((p, i) => (
            <Reveal key={p.name} delay={i * 0.05} className="group rounded-xl border border-border bg-card overflow-hidden">
              <div className="aspect-[16/9] overflow-hidden">
                <img src={productsImg} alt={p.name} loading="lazy" className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
              </div>
              <div className="p-7">
                <div className="font-display text-2xl">{p.name}</div>
                <p className="mt-2 text-sm text-muted-foreground">{p.desc}</p>
                <div className="mt-6 grid grid-cols-3 gap-px overflow-hidden rounded-md border border-border bg-border text-center">
                  {[
                    { k: "Sizes", v: p.sizes },
                    { k: "MOQ", v: p.moq },
                    { k: "Weight", v: p.weight },
                  ].map((s) => (
                    <div key={s.k} className="bg-background py-3">
                      <div className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">{s.k}</div>
                      <div className="mt-1 text-sm font-medium">{s.v}</div>
                    </div>
                  ))}
                </div>
                <div className="mt-6 flex gap-3">
                  <a href="#quote" className="flex-1 inline-flex items-center justify-center gap-2 rounded-md bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground hover:brightness-110">
                    <FileText className="h-4 w-4" /> Request Quote
                  </a>
                  <a href="https://wa.me/919876543210" target="_blank" rel="noopener" className="inline-flex items-center justify-center gap-2 rounded-md border border-border px-4 py-2.5 text-sm font-medium hover:border-primary hover:text-primary">
                    <MessageCircle className="h-4 w-4" /> WhatsApp
                  </a>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-t border-border bg-card/20">
        <div className="mx-auto max-w-7xl px-6 py-20 text-center">
          <h2 className="font-display text-4xl">Need a custom spec or OEM run?</h2>
          <p className="mt-3 text-muted-foreground">We've manufactured to dozens of bespoke geometries. Send us a drawing or sample.</p>
          <a href="/contact" className="mt-6 inline-flex rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground">Talk to the export desk →</a>
        </div>
      </section>
    </>
  );
}
