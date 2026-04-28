"use client";

import { WHATSAPP_URL } from "./constants";
import { CTAButton, FadeIn, Section } from "./ui";

const packages = [
  {
    name: "Paquete 1: Video individual",
    items: ["Idea creativa", "Guion base", "Grabación o colaboración", "Caption sugerido", "CTA"],
  },
  {
    name: "Paquete 2: Campaña de contenido",
    items: [
      "Varias piezas de contenido",
      "Línea narrativa",
      "Publicaciones coordinadas",
      "Recomendación de pauta",
      "Seguimiento básico de resultados",
    ],
  },
  {
    name: "Paquete 3: Asesoría para marca",
    items: [
      "Diagnóstico de redes",
      "Ideas de contenido",
      "Hooks",
      "Plan de publicaciones",
      "Recomendaciones comerciales",
    ],
  },
];

export default function Packages() {
  return (
    <Section id="packages">
      <FadeIn>
        <h2 className="section-title">Formatos de colaboración</h2>
      </FadeIn>
      <div className="mt-8 grid gap-4 lg:grid-cols-3">
        {packages.map((pack, i) => (
          <FadeIn key={pack.name} delay={i * 0.08}>
            <article className="panel flex h-full flex-col p-6">
              <h3 className="text-2xl font-heading tracking-wide text-white">{pack.name}</h3>
              <ul className="mt-5 space-y-2 text-sm text-zinc-300">
                {pack.items.map((item) => (
                  <li key={item}>• {item}</li>
                ))}
              </ul>
              <div className="mt-6">
                <CTAButton href={WHATSAPP_URL} eventName={`cta_whatsapp_package_${i + 1}_click`}>
                  Solicitar propuesta
                </CTAButton>
              </div>
            </article>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}
