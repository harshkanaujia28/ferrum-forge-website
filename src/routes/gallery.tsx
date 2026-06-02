import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import a from "@/assets/factory.jpg";
import b from "@/assets/products-grid.jpg";
import c from "@/assets/shipping.jpg";
import d from "@/assets/hero-forge.jpg";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Factory, Products & Dispatch | Ferrum & Forge" },
      { name: "description", content: "A visual look at our factory floor, product close-ups, export packaging and container dispatch." },
      { property: "og:title", content: "Gallery — Ferrum & Forge" },
      { property: "og:description", content: "Factory, products, packaging, dispatch." },
      { property: "og:url", content: "/gallery" },
    ],
    links: [{ rel: "canonical", href: "/gallery" }],
  }),
  component: Gallery,
});

function Gallery() {
  const imgs = [
    { src: d, label: "Forging line", span: "lg:col-span-2 lg:row-span-2 aspect-square" },
    { src: a, label: "Factory floor", span: "aspect-[4/3]" },
    { src: b, label: "Product close-up", span: "aspect-[4/3]" },
    { src: c, label: "Export dispatch", span: "lg:col-span-2 aspect-[16/9]" },
    { src: b, label: "Catalog range", span: "aspect-square" },
    { src: a, label: "Workshop", span: "aspect-square" },
  ];
  return (
    <>
      <PageHero eyebrow="Gallery" title={<>Inside the <em className="not-italic text-primary">forge.</em></>}>
        Glimpses of where, how and by whom every shipment is made.
      </PageHero>
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-4 lg:grid-cols-4 lg:auto-rows-[180px]">
          {imgs.map((it, i) => (
            <Reveal key={i} delay={i * 0.05} className={`group relative overflow-hidden rounded-xl border border-border ${it.span}`}>
              <img src={it.src} alt={it.label} loading="lazy" className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
              <div className="absolute inset-x-0 bottom-0 flex items-center justify-between bg-gradient-to-t from-background/90 to-transparent p-4 text-xs">
                <span className="uppercase tracking-[0.18em] text-foreground/90">{it.label}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
