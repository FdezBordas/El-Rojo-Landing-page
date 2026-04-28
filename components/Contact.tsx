"use client";

import { FormEvent, useEffect, useMemo, useState } from "react";
import { Instagram, Mail, MessageCircle, Music2 } from "lucide-react";
import {
  CONTACT_EMAIL,
  FORM_ACTION_URL,
  FORM_METHOD,
  INSTAGRAM_URL,
  TIKTOK_URL,
  WHATSAPP_DISPLAY,
  WHATSAPP_URL,
} from "./constants";
import { FadeIn, Section } from "./ui";
import { trackEvent } from "@/lib/analytics";

const FORM_INTEGRATION_HINT =
  "El formulario captura UTMs y datos clave. Puedes redirigirlo a Formspree, Make, n8n, Google Forms o API propia.";

type FormStatus = "idle" | "submitting" | "success" | "error";

export default function Contact() {
  const formAction = FORM_ACTION_URL || "/api/leads";
  const [status, setStatus] = useState<FormStatus>("idle");
  const [statusMessage, setStatusMessage] = useState("");
  const [trackingFields, setTrackingFields] = useState<Record<string, string>>({
    page_url: "",
    utm_source: "",
    utm_medium: "",
    utm_campaign: "",
    utm_term: "",
    utm_content: "",
    gclid: "",
    fbclid: "",
  });

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const fields = {
      page_url: window.location.href,
      utm_source: params.get("utm_source") || "",
      utm_medium: params.get("utm_medium") || "",
      utm_campaign: params.get("utm_campaign") || "",
      utm_term: params.get("utm_term") || "",
      utm_content: params.get("utm_content") || "",
      gclid: params.get("gclid") || "",
      fbclid: params.get("fbclid") || "",
    };

    setTrackingFields(fields);

    const hasUtm = Object.values(fields).some((value) => Boolean(value));
    if (hasUtm) {
      localStorage.setItem("elrojo:lastAttribution", JSON.stringify(fields));
    } else {
      const cached = localStorage.getItem("elrojo:lastAttribution");
      if (cached) setTrackingFields((prev) => ({ ...prev, ...JSON.parse(cached) }));
    }
  }, []);

  const trackingEntries = useMemo(() => Object.entries(trackingFields), [trackingFields]);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");
    setStatusMessage("Enviando solicitud...");

    const formData = new FormData(event.currentTarget);

    try {
      const response = await fetch(formAction, {
        method: FORM_METHOD,
        body: formData,
      });

      if (!response.ok) {
        throw new Error("No se pudo enviar la solicitud.");
      }

      const payload = await response.json();
      trackEvent("lead_form_submit_success", {
        tipo_colaboracion: String(formData.get("tipo_colaboracion") || ""),
        lead_id: payload?.leadId || "n/a",
      });
      setStatus("success");
      setStatusMessage(`¡Recibido! Te contactamos pronto. ID de lead: ${payload?.leadId || "N/A"}`);
      event.currentTarget.reset();
    } catch {
      trackEvent("lead_form_submit_error");
      setStatus("error");
      setStatusMessage("No se pudo enviar ahora mismo. Escríbenos por WhatsApp y te respondemos rápido.");
    }
  }

  return (
    <Section id="contact">
      <div className="grid gap-6 lg:grid-cols-2">
        <FadeIn>
          <h2 className="section-title">Contacto</h2>
          <div className="mt-6 space-y-4 text-zinc-200">
            <a className="flex items-center gap-3 hover:text-rojo-500" href={INSTAGRAM_URL} target="_blank" rel="noreferrer">
              <Instagram size={18} /> @elrojo.rd
            </a>
            <a className="flex items-center gap-3 hover:text-rojo-500" href={TIKTOK_URL} target="_blank" rel="noreferrer">
              <Music2 size={18} /> @elrojo.rd
            </a>
            <a className="flex items-center gap-3 hover:text-rojo-500" href={WHATSAPP_URL} target="_blank" rel="noreferrer">
              <MessageCircle size={18} /> {WHATSAPP_DISPLAY}
            </a>
            <a className="flex items-center gap-3 text-zinc-300 hover:text-rojo-500" href={`mailto:${CONTACT_EMAIL}`}>
              <Mail size={18} /> {CONTACT_EMAIL}
            </a>
          </div>
          <p className="mt-6 text-sm text-zinc-400">{FORM_INTEGRATION_HINT}</p>
        </FadeIn>

        <FadeIn delay={0.1}>
          <form className="panel space-y-4 p-6" action={formAction} method={FORM_METHOD} onSubmit={handleSubmit}>
            <input type="hidden" name="source" value="landing-el-rojo" />
            <input type="text" name="company_website" className="hidden" tabIndex={-1} autoComplete="off" />
            {trackingEntries.map(([key, value]) => (
              <input key={key} type="hidden" name={key} value={value} readOnly />
            ))}

            <input className="w-full rounded-lg border border-zinc-700 bg-zinc-950 px-4 py-3 text-sm outline-none focus:border-rojo-500" name="nombre" placeholder="Nombre" required />
            <input className="w-full rounded-lg border border-zinc-700 bg-zinc-950 px-4 py-3 text-sm outline-none focus:border-rojo-500" name="marca" placeholder="Marca o negocio" required />
            <input className="w-full rounded-lg border border-zinc-700 bg-zinc-950 px-4 py-3 text-sm outline-none focus:border-rojo-500" name="telefono" placeholder="Teléfono" required />
            <select className="w-full rounded-lg border border-zinc-700 bg-zinc-950 px-4 py-3 text-sm text-zinc-400 outline-none focus:border-rojo-500" name="tipo_colaboracion" defaultValue="" required>
              <option value="" disabled>
                Tipo de colaboración
              </option>
              <option>Video individual</option>
              <option>Campaña de contenido</option>
              <option>Asesoría para marca</option>
              <option>Cobertura de evento</option>
            </select>
            <textarea className="min-h-28 w-full rounded-lg border border-zinc-700 bg-zinc-950 px-4 py-3 text-sm outline-none focus:border-rojo-500" name="mensaje" placeholder="Mensaje" required />
            <button
              type="submit"
              disabled={status === "submitting"}
              onClick={() => trackEvent("lead_form_submit_click")}
              className="w-full rounded-lg bg-rojo-500 px-4 py-3 text-sm font-semibold transition hover:bg-rojo-600 disabled:cursor-not-allowed disabled:opacity-70"
            >
              {status === "submitting" ? "Enviando..." : "Enviar solicitud"}
            </button>

            {status !== "idle" && (
              <p
                className={`text-xs ${
                  status === "success" ? "text-emerald-300" : status === "error" ? "text-amber-300" : "text-zinc-300"
                }`}
              >
                {statusMessage}
              </p>
            )}
          </form>
        </FadeIn>
      </div>
    </Section>
  );
}
