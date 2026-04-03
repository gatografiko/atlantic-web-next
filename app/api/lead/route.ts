import { NextResponse } from "next/server";

type LeadPayload = {
  interest: "buy" | "rent";
  category: "luxury" | "executive" | "presidential";
  clientType: "company" | "embassy" | "executive" | "tourist_premium";
  name?: string;
  email?: string;
  phone?: string;
  message?: string;
  sourcePage?: string;
  // honeypot
  company?: string;
};

function isValidEmail(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function POST(req: Request) {
  const body = (await req.json()) as LeadPayload;

  // Honeypot: si viene lleno, asumimos bot
  if (body.company && body.company.trim().length > 0) {
    return NextResponse.json({ ok: true }, { status: 200 });
  }

  const { interest, category, clientType, email, phone } = body;

  if (!interest || !category || !clientType) {
    return NextResponse.json(
      { ok: false, error: "missing_required_fields" },
      { status: 400 }
    );
  }

  // Requerir al menos 1 contacto: email o telefono
  const hasEmail = !!email?.trim();
  const hasPhone = !!phone?.trim();

  if (!hasEmail && !hasPhone) {
    return NextResponse.json(
      { ok: false, error: "missing_contact" },
      { status: 400 }
    );
  }

  if (hasEmail && !isValidEmail(email!.trim())) {
    return NextResponse.json(
      { ok: false, error: "invalid_email" },
      { status: 400 }
    );
  }

  // En esta fase: log estructurado (luego se reemplaza por email/webhook/CRM)
  console.log("[LEAD]", {
    interest,
    category,
    clientType,
    name: body.name?.trim() || null,
    email: email?.trim() || null,
    phone: phone?.trim() || null,
    message: body.message?.trim() || null,
    sourcePage: body.sourcePage || null,
    createdAt: new Date().toISOString(),
  });

  return NextResponse.json({ ok: true }, { status: 200 });
}
