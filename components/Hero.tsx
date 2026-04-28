"use client";

import { PlayCircle } from "lucide-react";
import { CTAButton, FadeIn, Section } from "./ui";
import { WHATSAPP_URL } from "./constants";
import { trackEvent } from "@/lib/analytics";

export default function Hero() {
  return (
    <Section>
      <div className="grid items-center gap-8 lg:grid-cols-2">
        <FadeIn>
          <p className="mb-4 inline-flex rounded-full border border-zinc-700 px-3 py-1 text-xs uppercase tracking-[0.2em] text-metal">
            Marca personal dominicana
          </p>
          <h1 className="font-heading text-5xl leading-none tracking-wide md:text-7xl">
            El Rojo: contenido que se siente, se comparte y vende.
          </h1>
          <p className="mt-5 max-w-xl text-zinc-300 md:text-lg">
            Creo contenido auténtico para marcas, negocios y proyectos que quieren conectar con la
            gente, ganar atención y convertir esa atención en oportunidades reales.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <CTAButton href={WHATSAPP_URL} eventName="cta_whatsapp_hero_click">
              Quiero trabajar con El Rojo
            </CTAButton>
            <a
              href="#services"
              onClick={() => trackEvent("cta_scroll_services_click")}
              className="inline-flex items-center rounded-xl border border-zinc-700 px-5 py-3 text-sm font-medium text-zinc-100 transition hover:border-rojo-500"
            >
              Ver servicios
            </a>
          </div>
        </FadeIn>

        <FadeIn delay={0.15}>
          <div className="panel relative aspect-[9/16] max-w-sm overflow-hidden border-rojo-700/40 p-4 shadow-glow">
            <div className="flex h-full items-center justify-center rounded-xl border border-dashed border-zinc-600 bg-black/40 text-center text-zinc-300">
              <div>
                <PlayCircle className="mx-auto mb-3 text-rojo-500" size={42} />
                <p className="font-semibold">Espacio para video/foto vertical de El Rojo</p>
                <p className="mt-2 text-xs text-zinc-400">Reemplaza este bloque con reel, foto o showcase principal.</p>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </Section>
  );
}
