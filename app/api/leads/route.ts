import { NextRequest, NextResponse } from "next/server";

const REQUIRED_FIELDS = ["nombre", "marca", "telefono", "tipo_colaboracion", "mensaje"] as const;

function missingRequired(body: Record<string, string>) {
  return REQUIRED_FIELDS.filter((key) => !body[key]?.trim());
}

export async function POST(request: NextRequest) {
  const contentType = request.headers.get("content-type") || "";
  let body: Record<string, string> = {};

  if (contentType.includes("application/json")) {
    body = await request.json();
  } else {
    const formData = await request.formData();
    body = Object.fromEntries(formData.entries()) as Record<string, string>;
  }

  const honeypot = body.company_website;
  if (honeypot) {
    return NextResponse.json({ ok: true });
  }

  const missing = missingRequired(body);
  if (missing.length) {
    return NextResponse.json(
      { ok: false, error: `Faltan campos requeridos: ${missing.join(", ")}` },
      { status: 400 },
    );
  }

  const leadId = crypto.randomUUID();
  const leadPayload = {
    leadId,
    createdAt: new Date().toISOString(),
    source: body.source || "landing-el-rojo",
    nombre: body.nombre,
    marca: body.marca,
    telefono: body.telefono,
    tipo_colaboracion: body.tipo_colaboracion,
    mensaje: body.mensaje,
    page_url: body.page_url || "",
    utm_source: body.utm_source || "",
    utm_medium: body.utm_medium || "",
    utm_campaign: body.utm_campaign || "",
    utm_term: body.utm_term || "",
    utm_content: body.utm_content || "",
    gclid: body.gclid || "",
    fbclid: body.fbclid || "",
    referrer: request.headers.get("referer") || "",
    userAgent: request.headers.get("user-agent") || "",
    ip: request.headers.get("x-forwarded-for") || "",
  };

  if (process.env.LEADS_WEBHOOK_URL) {
    try {
      await fetch(process.env.LEADS_WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(leadPayload),
      });
    } catch (error) {
      console.error("Error enviando lead al webhook", error);
    }
  }

  console.info("[el-rojo-lead]", leadPayload);

  return NextResponse.json({ ok: true, leadId });
}
