"use client";

import { Megaphone, Sparkles, Users } from "lucide-react";
import { FadeIn, Section } from "./ui";

const cards = [
  { title: "Creador de contenido", icon: Sparkles },
  { title: "Comunicador comercial", icon: Megaphone },
  { title: "Aliado para marcas y negocios", icon: Users },
];

export default function About() {
  return (
    <Section id="about">
      <FadeIn>
        <h2 className="section-title">¿Quién es El Rojo?</h2>
        <p className="section-subtitle">
          El Rojo es una marca personal dominicana enfocada en crear contenido con personalidad,
          humor, storytelling y visión comercial. No se trata solo de grabar videos: se trata de
          entender el negocio, conectar con la audiencia y construir una presencia que la gente
          recuerde.
        </p>
      </FadeIn>
      <div className="mt-8 grid gap-4 md:grid-cols-3">
        {cards.map(({ title, icon: Icon }, i) => (
          <FadeIn key={title} delay={i * 0.08}>
            <article className="panel p-6">
              <Icon className="mb-4 text-rojo-500" />
              <h3 className="text-lg font-semibold">{title}</h3>
            </article>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}
