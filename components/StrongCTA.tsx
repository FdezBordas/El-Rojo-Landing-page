"use client";

import { WHATSAPP_URL } from "./constants";
import { CTAButton, FadeIn, Section } from "./ui";

export default function StrongCTA() {
  return (
    <Section>
      <FadeIn>
        <div className="panel border-rojo-700/40 bg-gradient-to-br from-rojo-700/20 to-zinc-900 p-8 text-center md:p-12">
          <h2 className="font-heading text-4xl tracking-wide md:text-6xl">
            Tu marca no necesita otro anuncio aburrido.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-zinc-200 md:text-lg">
            Necesita una historia, una voz y una forma de entrar en la mente de la gente. Ahí entra
            El Rojo.
          </p>
          <div className="mt-7">
            <CTAButton href={WHATSAPP_URL} eventName="cta_whatsapp_strong_click">
              Hablemos por WhatsApp
            </CTAButton>
          </div>
        </div>
      </FadeIn>
    </Section>
  );
}
