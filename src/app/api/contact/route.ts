import { NextResponse } from "next/server";

const allowedSubjects = new Set(["booking", "agency", "technical", "general"]);

export async function POST(request: Request) {
  try {
    const contentType = request.headers.get("content-type") || "";
    if (!contentType.includes("application/json")) {
      return NextResponse.json(
        { error: "Invalid content type." },
        { status: 400 },
      );
    }

    const body = await request.json();

    const {
      fullName,
      email,
      phone,
      subject,
      message,
      company,
    } = body ?? {};

    // Basic spam protection: honeypot
    if (typeof company === "string" && company.trim().length > 0) {
      return NextResponse.json({ ok: true }, { status: 200 });
    }

    // Validation
    if (!fullName || typeof fullName !== "string" || fullName.trim().length < 2) {
      return NextResponse.json(
        { error: "Veuillez indiquer un nom complet valide." },
        { status: 400 },
      );
    }

    if (!email || typeof email !== "string") {
      return NextResponse.json(
        { error: "Veuillez indiquer une adresse e-mail." },
        { status: 400 },
      );
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      return NextResponse.json(
        { error: "Veuillez indiquer une adresse e-mail valide." },
        { status: 400 },
      );
    }

    if (!subject || typeof subject !== "string" || !allowedSubjects.has(subject)) {
      return NextResponse.json(
        { error: "Sujet de demande invalide." },
        { status: 400 },
      );
    }

    if (!message || typeof message !== "string" || message.trim().length < 10) {
      return NextResponse.json(
        { error: "Veuillez préciser votre message (minimum 10 caractères)." },
        { status: 400 },
      );
    }

    const safePhone =
      typeof phone === "string" && phone.trim().length <= 40 ? phone.trim() : "";

    const payload = {
      fullName: fullName.trim(),
      email: email.trim(),
      phone: safePhone,
      subject,
      message: message.trim(),
      receivedAt: new Date().toISOString(),
    };

    // E-mail / notification hook:
    // You can connect this to your provider (Resend, SendGrid, etc.)
    const webhookUrl = process.env.CONTACT_NOTIFICATION_WEBHOOK_URL;
    if (webhookUrl) {
      // Fire-and-forget style notification; errors are swallowed to avoid
      // exposing internal details to the user.
      fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: "moroccomiles_contact_message",
          data: payload,
        }),
      }).catch(() => {
        // silently ignore
      });
    } else {
      // Fallback: log in server console during development
      console.info("[MoroccoMiles contact] New message", payload);
    }

    return NextResponse.json({ ok: true }, { status: 200 });
  } catch (error) {
    console.error("[MoroccoMiles contact] Error handling request", error);
    return NextResponse.json(
      {
        error:
          "Une erreur est survenue lors de l’envoi de votre message. Merci de réessayer plus tard.",
      },
      { status: 500 },
    );
  }
}

