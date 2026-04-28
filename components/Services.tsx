"use client";

import { FadeIn, Section } from "./ui";

const services = [
  {
    title: "Videos para marcas",
    description:
      "Videos cortos, orgánicos y llamativos para negocios que quieren más visibilidad, confianza y movimiento en redes.",
  },
  {
    title: "Colaboraciones comerciales",
    description:
      "Integraciones de marca con estilo natural, humano y creíble, pensadas para que el mensaje no parezca un anuncio frío.",
  },
  {
    title: "Asesoría de contenido",
    description:
      "Ideas, guiones, hooks, storytelling y dirección creativa para negocios que quieren empezar a crear contenido con intención.",
  },
  {
    title: "Cobertura de eventos",
    description:
      "Presencia en eventos, entrevistas, contenido detrás de cámaras y piezas pensadas para generar conversación.",
  },
  {
    title: "Contenido para negocios locales",
    description:
      "Contenido diseñado para conectar con el público dominicano, especialmente negocios que necesitan vender más y verse más vivos en redes.",
  },
];

export default function Services() {
  return (
    <Section id="services">
      <FadeIn>
        <h2 className="section-title">Lo que hace El Rojo</h2>
      </FadeIn>
      <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {services.map((service, i) => (
          <FadeIn key={service.title} delay={i * 0.06}>
            <article className="panel h-full p-6">
              <h3 className="text-xl font-semibold text-white">{service.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-zinc-300">{service.description}</p>
            </article>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}
