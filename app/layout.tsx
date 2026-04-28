import type { Metadata } from "next";
import Script from "next/script";
import { Bebas_Neue, Inter } from "next/font/google";
import {
  GA_MEASUREMENT_ID,
  INSTAGRAM_URL,
  META_PIXEL_ID,
  TIKTOK_URL,
  WHATSAPP_URL,
} from "@/components/constants";
import "./globals.css";

const bebas = Bebas_Neue({
  subsets: ["latin"],
  variable: "--font-bebas",
  weight: "400",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://el-rojo-landing.vercel.app"),
  title: "El Rojo | Contenido con personalidad, estrategia y calle",
  description:
    "Landing oficial de El Rojo para colaboraciones, publicidad, asesorías y alianzas comerciales.",
  openGraph: {
    title: "El Rojo | Contenido con personalidad, estrategia y calle",
    description:
      "Contenido auténtico para marcas y negocios que quieren conectar, crecer y convertir.",
    type: "website",
    locale: "es_DO",
    url: "https://el-rojo-landing.vercel.app",
    siteName: "El Rojo",
  },
  twitter: {
    card: "summary_large_image",
    title: "El Rojo | Marca personal dominicana",
    description:
      "Humor, storytelling y visión comercial para marcas que quieren resultados reales.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Luis Alfredo Fernández Bordas",
  alternateName: "El Rojo",
  url: "https://el-rojo-landing.vercel.app",
  sameAs: [INSTAGRAM_URL, TIKTOK_URL, WHATSAPP_URL],
  jobTitle: "Creador de contenido y comunicador comercial",
  nationality: "Dominicana",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${bebas.variable} ${inter.variable}`}>
        {GA_MEASUREMENT_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
              strategy="afterInteractive"
            />
            <Script id="ga-setup" strategy="afterInteractive">
              {`window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', '${GA_MEASUREMENT_ID}');`}
            </Script>
          </>
        )}

        {META_PIXEL_ID && (
          <Script id="meta-pixel" strategy="afterInteractive">
            {`!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');fbq('init', '${META_PIXEL_ID}');fbq('track', 'PageView');`}
          </Script>
        )}

        <Script id="jsonld-person" type="application/ld+json" strategy="afterInteractive">
          {JSON.stringify(jsonLd)}
        </Script>

        {children}
      </body>
    </html>
  );
}
