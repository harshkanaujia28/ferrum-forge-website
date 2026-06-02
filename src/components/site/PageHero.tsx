import type { ReactNode } from "react";

export function PageHero({ eyebrow, title, children }: { eyebrow: string; title: ReactNode; children?: ReactNode }) {
  return (
    <section className="relative border-b border-border bg-card/20">
      <div className="absolute inset-0 ember-gradient opacity-40 pointer-events-none" />
      <div className="relative mx-auto max-w-7xl px-6 py-24 sm:py-32">
        <div className="text-[11px] uppercase tracking-[0.22em] text-primary">{eyebrow}</div>
        <h1 className="mt-3 max-w-4xl font-display text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl text-balance">{title}</h1>
        {children && <div className="mt-6 max-w-2xl text-base text-muted-foreground sm:text-lg">{children}</div>}
      </div>
    </section>
  );
}
