"use client";

import { INSTAGRAM_URL, TIKTOK_URL, WHATSAPP_URL } from "./constants";
import { trackEvent } from "@/lib/analytics";

export default function Footer() {
  return (
    <footer className="border-t border-zinc-800">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-4 py-8 text-sm text-zinc-400 md:flex-row md:items-center md:justify-between md:px-6">
        <p>El Rojo — contenido con personalidad, estrategia y calle.</p>
        <nav className="flex items-center gap-4">
          <a href={INSTAGRAM_URL} target="_blank" rel="noreferrer" onClick={() => trackEvent("footer_instagram_click")} className="hover:text-white">Instagram</a>
          <a href={TIKTOK_URL} target="_blank" rel="noreferrer" onClick={() => trackEvent("footer_tiktok_click")} className="hover:text-white">TikTok</a>
          <a href={WHATSAPP_URL} target="_blank" rel="noreferrer" onClick={() => trackEvent("footer_whatsapp_click")} className="hover:text-white">WhatsApp</a>
        </nav>
      </div>
    </footer>
  );
}
