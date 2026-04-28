"use client";

import { CheckCircle2 } from "lucide-react";
import { FadeIn, Section } from "./ui";

const reasons = [
  "Porque entiende la calle y entiende el negocio.",
  "Porque no crea contenido vacío: crea contenido con intención.",
  "Porque sabe convertir una historia normal en algo que la gente quiere ver.",
  "Porque puede ayudar a que una marca local se vea más humana, cercana y memorable.",
  "Porque combina creatividad, ventas, humor y estrategia.",
];

export default function WhyWork() {
  return (
    <Section>
      <FadeIn>
        <h2 className="section-title">¿Por qué trabajar con El Rojo?</h2>
      </FadeIn>
      <div className="mt-8 grid gap-3">
        {reasons.map((reason, i) => (
          <FadeIn key={reason} delay={i * 0.05}>
            <div className="panel flex items-start gap-3 p-4">
              <CheckCircle2 className="mt-0.5 text-rojo-500" size={18} />
              <p className="text-zinc-200">{reason}</p>
            </div>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}
