"use client";

import { ExternalLink } from "lucide-react";
import { INSTAGRAM_URL, TIKTOK_URL } from "./constants";
import { FadeIn, Section } from "./ui";
import { trackEvent } from "@/lib/analytics";

const items = [
  { title: "Campaña para colmado local", category: "Marcas locales", cta: "Ver en Instagram", href: INSTAGRAM_URL },
  { title: "Test drive narrado", category: "Automotriz", cta: "Ver reel", href: INSTAGRAM_URL },
  { title: "Ruta de finca productiva", category: "Campo y agro", cta: "Ver en Instagram", href: INSTAGRAM_URL },
  { title: "Tour de proyecto residencial", category: "Bienes raíces", cta: "Ver reel", href: INSTAGRAM_URL },
  { title: "Cobertura feria comercial", category: "Eventos", cta: "Ver en Instagram", href: TIKTOK_URL },
  { title: "Sketch de ventas con humor", category: "Humor comercial", cta: "Ver reel", href: TIKTOK_URL },
];

export default function Portfolio() {
  return (
    <Section id="portfolio">
      <FadeIn>
        <h2 className="section-title">Portafolio / videos destacados</h2>
      </FadeIn>
      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item, i) => (
          <FadeIn key={item.title} delay={i * 0.04}>
            <article className="panel p-4">
              <div className="aspect-[9/16] rounded-xl border border-dashed border-zinc-700 bg-black/30" />
              <h3 className="mt-4 font-semibold">{item.title}</h3>
              <p className="text-sm text-zinc-400">{item.category}</p>
              <a
                href={item.href}
                target="_blank"
                rel="noreferrer"
                onClick={() => trackEvent("portfolio_item_click", { title: item.title, category: item.category })}
                className="mt-4 inline-flex items-center gap-2 text-sm text-rojo-500 hover:text-rojo-400"
              >
                {item.cta} <ExternalLink size={14} />
              </a>
            </article>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}
