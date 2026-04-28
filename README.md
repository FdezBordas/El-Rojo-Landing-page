# El Rojo Landing Page

Landing page oficial de la marca personal **El Rojo**, creada con **Next.js + Tailwind CSS**.

## Requisitos

- Node.js 18+
- npm 9+

## Instalar y correr

```bash
npm install
npm run dev
```

Abre `http://localhost:3000` en tu navegador.

## Build para producción

```bash
npm run build
npm run start
```

## Editar datos clave

- Enlaces sociales, WhatsApp, email y formulario: `components/constants.ts`
- Secciones de contenido: carpeta `components/`
- Estilos globales y tema: `app/globals.css` y `tailwind.config.ts`

## Captura de leads y medición (incluido)

Esta versión ya captura y mide:

- Envíos del formulario con endpoint interno: `POST /api/leads`
- Datos de atribución: `utm_source`, `utm_medium`, `utm_campaign`, `utm_term`, `utm_content`, `gclid`, `fbclid`
- Metadata adicional: `page_url`, `userAgent`, `referrer`, `source`
- Eventos de clic en CTAs principales, footer y portafolio

## Activar webhook externo (opcional)

Si quieres enviar cada lead a Make, n8n, Zapier o tu backend, configura:

```bash
LEADS_WEBHOOK_URL="https://tu-webhook.com/endpoint"
```

El endpoint interno seguirá respondiendo con `leadId` y además reenviará el payload al webhook.

## Activar tracking publicitario (opcional)

En `components/constants.ts`:

- `GA_MEASUREMENT_ID` para Google Analytics 4
- `META_PIXEL_ID` para Meta Pixel

## Integraciones del formulario

- Por defecto: `FORM_ACTION_URL = "/api/leads"`
- Puedes cambiarlo a Formspree/Make/n8n/API propia directamente en `components/constants.ts`

## Deploy en Vercel

1. Sube este repo a GitHub.
2. Importa el proyecto en Vercel.
3. En **Project Settings > Environment Variables**, agrega `LEADS_WEBHOOK_URL` si vas a reenviar leads.
4. Vercel detecta Next.js automáticamente y despliega con la configuración por defecto.
