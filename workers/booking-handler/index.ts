const MAX_BODY_BYTES = 24 * 1024;
const MAX_CITIES = 15;
const MAX_LANDMARKS = 80;
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type DurationMetrics = {
  nights: number | null;
  days: number | null;
  stops: number | null;
  preferredDate: string | null;
  tourType: string | null;
};

type PlaceGroup = {
  city: string;
  places: string[];
};

type BookingRecord = {
  fullName: string;
  email: string;
  cities: string[];
  duration: DurationMetrics;
  landmarks: string[];
  placesByCity: PlaceGroup[];
  message: string;
  travelPath: string;
  travelerCount: number;
  tourName: string | null;
};

type JsonBody = Record<string, unknown>;

function parseAllowedOrigins(env: Env): string[] {
  return env.ALLOWED_ORIGINS.split(",").map((origin) => origin.trim()).filter(Boolean);
}

function corsHeaders(request: Request, env: Env): Record<string, string> {
  const origin = request.headers.get("Origin") ?? "";
  const allowed = parseAllowedOrigins(env);
  const allowOrigin = allowed.includes(origin) ? origin : origin ? "null" : allowed[0] ?? "null";

  return {
    "Access-Control-Allow-Origin": allowOrigin,
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
    "Access-Control-Max-Age": "86400",
    Vary: "Origin"
  };
}

function jsonResponse(payload: unknown, status: number, cors: Record<string, string>): Response {
  return new Response(JSON.stringify(payload), {
    status,
    headers: {
      ...cors,
      "Content-Type": "application/json; charset=utf-8",
      "Cache-Control": "no-store"
    }
  });
}

function isRecord(value: unknown): value is JsonBody {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function cleanText(value: unknown, max: number): string {
  if (typeof value !== "string") return "";
  return value.replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F]/g, "").trim().slice(0, max);
}

function parseOptionalInt(value: unknown, min: number, max: number): number | null {
  if (typeof value === "number" && Number.isFinite(value)) {
    const rounded = Math.round(value);
    if (rounded < min || rounded > max) return null;
    return rounded;
  }

  if (typeof value === "string" && value.trim()) {
    const parsed = Number.parseInt(value, 10);
    if (!Number.isFinite(parsed) || parsed < min || parsed > max) return null;
    return parsed;
  }

  return null;
}

function parseStringList(value: unknown, maxItems: number, maxLength: number): string[] {
  const source = Array.isArray(value) ? value : typeof value === "string" ? value.split(/[,|]/) : [];
  const cleaned = source.map((item) => cleanText(item, maxLength)).filter(Boolean);
  return [...new Set(cleaned)].slice(0, maxItems);
}

function escapeHtml(value: string): string {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function parsePlacesByCity(value: unknown, fallbackCity: string, fallbackPlaces: string[]): PlaceGroup[] {
  const source = Array.isArray(value) ? value : [];
  const groups: PlaceGroup[] = [];

  for (const item of source) {
    if (!isRecord(item)) continue;
    const city = cleanText(item.city ?? item.name, 80);
    const places = parseStringList(item.places ?? item.landmarks, MAX_LANDMARKS, 160);
    if (!city || places.length === 0) continue;
    groups.push({ city, places });
    if (groups.length >= MAX_CITIES) break;
  }

  if (groups.length > 0) return groups;
  if (fallbackPlaces.length > 0) return [{ city: fallbackCity, places: fallbackPlaces }];
  return [];
}

function renderPlacesByCityHtml(groups: PlaceGroup[], nested: boolean): string {
  if (groups.length === 0) {
    return `<p style="margin:0;font-family:Arial,sans-serif;font-size:14px;color:#b9aea3;">No places selected</p>`;
  }

  return groups
    .map((group) => {
      const places = nested
        ? `<ul style="margin:8px 0 0;padding:0 0 0 18px;">${group.places
            .map(
              (place) =>
                `<li style="margin:0 0 6px;font-family:Arial,sans-serif;font-size:13px;line-height:1.45;color:#cfc4b8;">${escapeHtml(place)}</li>`
            )
            .join("")}</ul>`
        : group.places
            .map(
              (place) =>
                `<p style="margin:4px 0 0;font-family:Arial,sans-serif;font-size:13px;line-height:1.45;color:#cfc4b8;">${escapeHtml(place)}</p>`
            )
            .join("");

      return `<div style="margin:0 0 18px;">
        <p style="margin:0;font-family:Georgia,'Times New Roman',serif;font-size:18px;color:#F9F6F0;">${escapeHtml(group.city)}</p>
        ${places}
      </div>`;
    })
    .join("");
}

function parseDuration(value: unknown, fallbackDate: string, fallbackTourType: string): DurationMetrics {
  const record = isRecord(value) ? value : {};
  const preferredDate =
    cleanText(record.preferredDate ?? record.preferred_date ?? fallbackDate, 32) || null;
  const tourType = cleanText(record.tourType ?? record.tour_type ?? fallbackTourType, 40) || null;

  return {
    nights: parseOptionalInt(record.nights, 1, 120),
    days: parseOptionalInt(record.days, 1, 121),
    stops: parseOptionalInt(record.stops, 1, MAX_CITIES),
    preferredDate,
    tourType
  };
}

function parseBooking(payload: unknown): { booking?: BookingRecord; error?: string } {
  if (!isRecord(payload)) {
    return { error: "Request body must be a JSON object." };
  }

  const fullName = cleanText(payload.fullName ?? payload.full_name, 120);
  const email = cleanText(payload.email, 254).toLowerCase();
  const durationSource = payload.duration ?? payload.tourDuration ?? payload.tour_duration;
  const durationRecord = isRecord(durationSource) ? durationSource : {};
  const cities = parseStringList(payload.cities ?? payload.chosenCities ?? payload.chosen_cities, MAX_CITIES, 80);
  const landmarks = parseStringList(
    payload.landmarks ?? payload.selectedLandmarks ?? payload.selected_landmarks,
    MAX_LANDMARKS,
    160
  );
  const message = cleanText(payload.message ?? payload.customMessage ?? payload.custom_message, 4000);
  const duration = parseDuration(
    durationSource,
    cleanText(payload.preferredDate ?? payload.preferred_date ?? durationRecord.preferredDate ?? durationRecord.preferred_date, 32),
    cleanText(payload.tourType ?? payload.tour_type ?? durationRecord.tourType ?? durationRecord.tour_type, 40)
  );

  if (fullName.length < 2) return { error: "A full name is required." };
  if (!EMAIL_PATTERN.test(email)) return { error: "A valid email is required." };
  if (cities.length === 0) return { error: "Choose at least one city." };
  if (!duration.nights && !duration.days && !duration.preferredDate) {
    return { error: "Tour duration or a preferred travel date is required." };
  }
  const today = new Date().toLocaleDateString("en-CA", { timeZone: "Africa/Casablanca" });
  if (duration.preferredDate && duration.preferredDate < today) {
    return { error: "Preferred date cannot be in the past." };
  }

  if (!duration.stops) duration.stops = cities.length;
  if (!duration.days && duration.nights) duration.days = duration.nights + 1;
  if (!duration.nights && duration.days && duration.days > 1) duration.nights = duration.days - 1;

  const travelerCount =
    parseOptionalInt(
      payload.travelerCount ?? payload.traveler_count ?? durationRecord.travelerCount ?? durationRecord.traveler_count,
      1,
      90
    ) ?? 2;
  const tourName =
    cleanText(payload.tourName ?? payload.tour_name ?? durationRecord.tourName ?? durationRecord.tour_name, 160) || null;
  const placesByCity = parsePlacesByCity(
    payload.placesByCity ?? payload.places_by_city,
    tourName ?? cities.join(" → "),
    landmarks
  );

  return {
    booking: {
      fullName,
      email,
      cities,
      duration,
      landmarks,
      placesByCity,
      message,
      travelPath: cities.join(" → "),
      travelerCount,
      tourName
    }
  };
}

function renderBookingEmail(booking: BookingRecord): string {
  const nightsLabel = booking.duration.nights ? `${booking.duration.nights} nights` : "Flexible";
  const daysLabel = booking.duration.days ? `${booking.duration.days} days` : "To be shaped";
  const dateLabel = booking.duration.preferredDate ?? "Open";
  const styleLabel = booking.duration.tourType ?? "Private signature";
  const placesHtml = renderPlacesByCityHtml(booking.placesByCity, true);
  const messageBlock = booking.message
    ? `<tr>
              <td style="padding:0 40px 40px;">
                <p style="margin:0 0 12px;font-family:Arial,sans-serif;font-size:11px;letter-spacing:0.32em;text-transform:uppercase;color:#D48C46;">Custom message</p>
                <p style="margin:0;font-family:Arial,sans-serif;font-size:15px;line-height:1.7;color:#F9F6F0;white-space:pre-wrap;">${escapeHtml(booking.message)}</p>
              </td>
            </tr>`
    : "";

  return `<!DOCTYPE html>
<html lang="en">
  <body style="margin:0;padding:0;background:#1A1613;color:#F9F6F0;font-family:Georgia,'Times New Roman',serif;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#1A1613;padding:32px 12px;">
      <tr>
        <td align="center">
          <table role="presentation" width="640" cellpadding="0" cellspacing="0" style="max-width:640px;width:100%;background:#241F1B;border:1px solid rgba(212,140,70,0.28);">
            <tr>
              <td style="padding:36px 40px 24px;border-bottom:1px solid rgba(212,140,70,0.22);">
                <p style="margin:0 0 10px;font-family:Arial,sans-serif;font-size:11px;letter-spacing:0.42em;text-transform:uppercase;color:#D48C46;">MoroccoMiles atelier</p>
                <h1 style="margin:0;font-size:34px;line-height:1.1;font-weight:normal;color:#F9F6F0;">A custom Moroccan passage has arrived.</h1>
              </td>
            </tr>
            <tr>
              <td style="padding:28px 40px;">
                <p style="margin:0 0 8px;font-family:Arial,sans-serif;font-size:11px;letter-spacing:0.32em;text-transform:uppercase;color:#D48C46;">Travel path</p>
                <p style="margin:0 0 12px;font-size:22px;line-height:1.45;color:#F9F6F0;">${escapeHtml(booking.travelPath)}</p>
                ${
                  booking.tourName
                    ? `<p style="margin:0 0 28px;font-family:Arial,sans-serif;font-size:13px;letter-spacing:0.12em;text-transform:uppercase;color:#D48C46;">Selected tour · ${escapeHtml(booking.tourName)}</p>`
                    : `<div style="height:16px;"></div>`
                }
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                  <tr>
                    <td style="padding:0 16px 18px 0;width:50%;vertical-align:top;">
                      <p style="margin:0 0 6px;font-family:Arial,sans-serif;font-size:10px;letter-spacing:0.28em;text-transform:uppercase;color:#b9aea3;">Traveler</p>
                      <p style="margin:0;font-size:16px;color:#F9F6F0;">${escapeHtml(booking.fullName)}</p>
                    </td>
                    <td style="padding:0 0 18px;width:50%;vertical-align:top;">
                      <p style="margin:0 0 6px;font-family:Arial,sans-serif;font-size:10px;letter-spacing:0.28em;text-transform:uppercase;color:#b9aea3;">Email</p>
                      <p style="margin:0;font-size:16px;color:#F9F6F0;">${escapeHtml(booking.email)}</p>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding:0 16px 18px 0;width:50%;vertical-align:top;">
                      <p style="margin:0 0 6px;font-family:Arial,sans-serif;font-size:10px;letter-spacing:0.28em;text-transform:uppercase;color:#b9aea3;">Duration</p>
                      <p style="margin:0;font-size:16px;color:#F9F6F0;">${escapeHtml(`${nightsLabel} · ${daysLabel}`)}</p>
                    </td>
                    <td style="padding:0 0 18px;width:50%;vertical-align:top;">
                      <p style="margin:0 0 6px;font-family:Arial,sans-serif;font-size:10px;letter-spacing:0.28em;text-transform:uppercase;color:#b9aea3;">Preferred date</p>
                      <p style="margin:0;font-size:16px;color:#F9F6F0;">${escapeHtml(dateLabel)}</p>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding:0 16px 8px 0;width:50%;vertical-align:top;">
                      <p style="margin:0 0 6px;font-family:Arial,sans-serif;font-size:10px;letter-spacing:0.28em;text-transform:uppercase;color:#b9aea3;">Tour style</p>
                      <p style="margin:0;font-size:16px;color:#F9F6F0;">${escapeHtml(styleLabel)}</p>
                    </td>
                    <td style="padding:0 0 8px;width:50%;vertical-align:top;">
                      <p style="margin:0 0 6px;font-family:Arial,sans-serif;font-size:10px;letter-spacing:0.28em;text-transform:uppercase;color:#b9aea3;">Travelers</p>
                      <p style="margin:0;font-size:16px;color:#F9F6F0;">${escapeHtml(String(booking.travelerCount))}</p>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding:0 0 8px;width:50%;vertical-align:top;">
                      <p style="margin:0 0 6px;font-family:Arial,sans-serif;font-size:10px;letter-spacing:0.28em;text-transform:uppercase;color:#b9aea3;">Status</p>
                      <p style="margin:0;font-size:16px;color:#2E4A3E;">pending</p>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
            <tr>
              <td style="padding:0 40px 28px;">
                <p style="margin:0 0 14px;font-family:Arial,sans-serif;font-size:11px;letter-spacing:0.32em;text-transform:uppercase;color:#D48C46;">Places to visit</p>
                ${placesHtml}
              </td>
            </tr>
            ${messageBlock}
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`;
}

type Bindings = Env & {
  NEXT_PUBLIC_SUPABASE_URL?: string;
  NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY?: string;
  SUPABASE_URL?: string;
  SUPABASE_ANON_KEY?: string;
  EMAIL?: {
    send: (message: {
      to: string;
      from: { email: string; name?: string } | string;
      subject: string;
      html?: string;
      text?: string;
      replyTo?: string;
    }) => Promise<{ messageId: string }>;
  };
};

function parseFromAddress(value: string): { email: string; name?: string } {
  const match = value.match(/^(.*?)\s*<([^>]+)>$/);
  if (match) {
    const name = match[1].replace(/^["']|["']$/g, "").trim();
    return { email: match[2].trim(), name: name || undefined };
  }
  return { email: value.trim() };
}

function getCloudflareEmail(env: Env): Bindings["EMAIL"] | null {
  const email = (env as Bindings).EMAIL;
  if (!email || typeof email.send !== "function") return null;
  return email;
}

function readBinding(env: Env, key: keyof Bindings): string {
  const value = (env as Bindings)[key];
  return typeof value === "string" ? value.trim() : "";
}

function isConfiguredSecret(value: string): boolean {
  return Boolean(value) && !value.includes("your_real_") && !value.includes("your_key") && value !== "key";
}

function getSupabaseConfig(env: Env): { url: string; key: string } | null {
  const url = readBinding(env, "NEXT_PUBLIC_SUPABASE_URL") || readBinding(env, "SUPABASE_URL");
  const key = readBinding(env, "NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY") || readBinding(env, "SUPABASE_ANON_KEY");
  if (!isConfiguredSecret(url) || !isConfiguredSecret(key)) return null;
  return { url: url.replace(/\/$/, ""), key };
}

function getResendApiKey(env: Env): string | null {
  const key = readBinding(env, "RESEND_API_KEY");
  return isConfiguredSecret(key) ? key : null;
}

function buildOrderRow(booking: BookingRecord, extras: boolean) {
  const row: Record<string, unknown> = {
    full_name: booking.fullName,
    email: booking.email,
    chosen_cities: booking.cities,
    tour_duration: [
      booking.tourName,
      booking.duration.nights ? `${booking.duration.nights} nights` : null,
      booking.duration.days ? `${booking.duration.days} days` : null,
      `${booking.travelerCount} traveler${booking.travelerCount === 1 ? "" : "s"}`,
      booking.duration.preferredDate ? `from ${booking.duration.preferredDate}` : null,
      booking.duration.tourType
    ]
      .filter(Boolean)
      .join(" · "),
    selected_landmarks: booking.landmarks,
    custom_message: booking.message,
    status: "pending"
  };

  if (extras) {
    row.traveler_count = booking.travelerCount;
    if (booking.tourName) row.tour_name = booking.tourName;
  }

  return row;
}

async function insertOrder(env: Env, booking: BookingRecord): Promise<{ ok: true; id: string | null } | { ok: false; detail: string }> {
  const supabase = getSupabaseConfig(env);
  if (!supabase) {
    return { ok: false, detail: "Supabase is not configured." };
  }

  const endpoint = `${supabase.url}/rest/v1/orders`;
  const headers = {
    apikey: supabase.key,
    Authorization: `Bearer ${supabase.key}`,
    "Content-Type": "application/json",
    Prefer: "return=minimal"
  };

  const postRow = async (body: Record<string, unknown>) =>
    fetch(endpoint, {
      method: "POST",
      headers,
      body: JSON.stringify(body),
      signal: AbortSignal.timeout(10000)
    });

  let response = await postRow(buildOrderRow(booking, true));
  let raw = await response.text();

  if (!response.ok && raw.includes("PGRST204")) {
    response = await postRow(buildOrderRow(booking, false));
    raw = await response.text();
  }

  if (!response.ok) {
    return { ok: false, detail: raw.slice(0, 400) };
  }

  let id: string | null = null;
  try {
    const parsed: unknown = raw ? JSON.parse(raw) : null;
    if (Array.isArray(parsed) && isRecord(parsed[0]) && typeof parsed[0].id === "string") {
      id = parsed[0].id;
    } else if (isRecord(parsed) && typeof parsed.id === "string") {
      id = parsed.id;
    }
  } catch {
    id = null;
  }

  return { ok: true, id };
}

function renderTravelerConfirmationEmail(booking: BookingRecord): string {
  const journey = booking.tourName ?? booking.travelPath;
  const dateLabel = booking.duration.preferredDate ?? "dates to be confirmed";
  const party = `${booking.travelerCount} traveler${booking.travelerCount === 1 ? "" : "s"}`;

  return `<!DOCTYPE html>
<html lang="en">
  <body style="margin:0;padding:0;background:#1A1613;color:#F9F6F0;font-family:Georgia,'Times New Roman',serif;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#1A1613;padding:32px 12px;">
      <tr>
        <td align="center">
          <table role="presentation" width="640" cellpadding="0" cellspacing="0" style="max-width:640px;width:100%;background:#241F1B;border:1px solid rgba(212,140,70,0.28);">
            <tr>
              <td style="padding:36px 40px 24px;border-bottom:1px solid rgba(212,140,70,0.22);">
                <p style="margin:0 0 10px;font-family:Arial,sans-serif;font-size:11px;letter-spacing:0.42em;text-transform:uppercase;color:#D48C46;">MoroccoMiles</p>
                <h1 style="margin:0;font-size:34px;line-height:1.1;font-weight:normal;color:#F9F6F0;">Your passage is registered.</h1>
              </td>
            </tr>
            <tr>
              <td style="padding:28px 40px 12px;">
                <p style="margin:0 0 16px;font-size:17px;line-height:1.6;color:#F9F6F0;">Dear ${escapeHtml(booking.fullName)},</p>
                <p style="margin:0 0 18px;font-family:Arial,sans-serif;font-size:15px;line-height:1.7;color:#F9F6F0;">We have received your request for <strong style="color:#D48C46;">${escapeHtml(journey)}</strong> · ${escapeHtml(party)} · ${escapeHtml(dateLabel)}.</p>
                <p style="margin:0 0 18px;font-family:Arial,sans-serif;font-size:15px;line-height:1.7;color:#F9F6F0;">A MoroccoMiles travel designer will review the road and contact you within one business day to refine the private itinerary.</p>
                <p style="margin:0 0 8px;font-family:Arial,sans-serif;font-size:11px;letter-spacing:0.28em;text-transform:uppercase;color:#D48C46;">Places you chose</p>
                ${renderPlacesByCityHtml(booking.placesByCity, false)}
                <p style="margin:18px 0 0;font-family:Arial,sans-serif;font-size:15px;line-height:1.7;color:#b9aea3;">No payment is taken at this stage. Reply to this email if you wish to add a note before we write back.</p>
              </td>
            </tr>
            <tr>
              <td style="padding:8px 40px 40px;">
                <p style="margin:0;font-family:Arial,sans-serif;font-size:12px;letter-spacing:0.18em;text-transform:uppercase;color:#D48C46;">Journeys remembered long after the road ends.</p>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`;
}

async function sendResendMessage(
  apiKey: string,
  payload: {
    from: string;
    to: string;
    replyTo: string;
    subject: string;
    html: string;
  },
  idempotencyKey: string
): Promise<{ ok: true } | { ok: false; detail: string }> {
  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
      "Idempotency-Key": idempotencyKey
    },
    body: JSON.stringify({
      from: payload.from,
      to: [payload.to],
      reply_to: payload.replyTo,
      subject: payload.subject,
      html: payload.html
    }),
    signal: AbortSignal.timeout(10000)
  });

  if (response.ok) {
    return { ok: true };
  }

  return { ok: false, detail: (await response.text()).slice(0, 400) };
}

async function sendBookingEmail(env: Env, booking: BookingRecord, requestId: string): Promise<{ ok: true } | { ok: false; detail: string }> {
  const from = env.RESEND_FROM;
  const notifyTo = env.BOOKING_NOTIFY_EMAIL;
  const resendKey = getResendApiKey(env);

  if (resendKey) {
    const [notify, confirm] = await Promise.all([
      sendResendMessage(
        resendKey,
        {
          from,
          to: notifyTo,
          replyTo: booking.email,
          subject: `New ${booking.tourName ?? "custom itinerary"} · ${booking.fullName} · ${booking.travelPath}`,
          html: renderBookingEmail(booking)
        },
        `${requestId}-studio`
      ),
      sendResendMessage(
        resendKey,
        {
          from,
          to: booking.email,
          replyTo: notifyTo,
          subject: `Your MoroccoMiles passage is registered · ${booking.tourName ?? booking.travelPath}`,
          html: renderTravelerConfirmationEmail(booking)
        },
        `${requestId}-traveler`
      )
    ]);

    console.log({
      event: "booking.email_resend",
      requestId,
      studio: notify.ok ? "sent" : notify.detail,
      traveler: confirm.ok ? "sent" : confirm.detail
    });

    if (notify.ok && confirm.ok) return { ok: true };
    if (notify.ok) return { ok: false, detail: `Traveler confirmation failed: ${confirm.ok ? "" : confirm.detail}` };
    return { ok: false, detail: notify.detail };
  }

  const cloudflareEmail = getCloudflareEmail(env);
  if (cloudflareEmail) {
    try {
      await cloudflareEmail.send({
        to: notifyTo,
        from: parseFromAddress(from),
        subject: `New ${booking.tourName ?? "custom itinerary"} · ${booking.fullName} · ${booking.travelPath}`,
        html: renderBookingEmail(booking),
        replyTo: booking.email
      });
      return { ok: true };
    } catch (error) {
      const detail = error instanceof Error ? error.message : "Cloudflare email failed";
      console.log({ event: "booking.email_cloudflare_failed", requestId, detail });
      return { ok: false, detail };
    }
  }

  return { ok: false, detail: "email skipped" };
}

function missingSecrets(env: Env): string[] {
  return getSupabaseConfig(env) ? [] : ["NEXT_PUBLIC_SUPABASE_URL", "NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY"];
}

async function handleBooking(request: Request, env: Env): Promise<Response> {
  const cors = corsHeaders(request, env);
  const origin = request.headers.get("Origin");
  const allowed = parseAllowedOrigins(env);

  if (origin && !allowed.includes(origin)) {
    return jsonResponse({ ok: false, error: "Origin is not allowed." }, 403, cors);
  }

  const contentType = request.headers.get("Content-Type") ?? "";
  if (!contentType.toLowerCase().includes("application/json")) {
    return jsonResponse({ ok: false, error: "Content-Type must be application/json." }, 415, cors);
  }

  const contentLength = Number.parseInt(request.headers.get("Content-Length") ?? "0", 10);
  if (Number.isFinite(contentLength) && contentLength > MAX_BODY_BYTES) {
    return jsonResponse({ ok: false, error: "Payload is too large." }, 413, cors);
  }

  const raw = await request.text();
  if (raw.length > MAX_BODY_BYTES) {
    return jsonResponse({ ok: false, error: "Payload is too large." }, 413, cors);
  }

  let parsed: unknown;
  try {
    parsed = JSON.parse(raw) as unknown;
  } catch {
    return jsonResponse({ ok: false, error: "Request body must be valid JSON." }, 400, cors);
  }

  const { booking, error } = parseBooking(parsed);
  if (!booking) {
    console.log({ event: "booking.invalid", error });
    return jsonResponse({ ok: false, error }, 400, cors);
  }

  console.log({
    event: "booking.received",
    fullName: booking.fullName,
    email: booking.email,
    travelPath: booking.travelPath,
    tourName: booking.tourName,
    travelerCount: booking.travelerCount
  });

  const unset = missingSecrets(env);
  if (unset.length > 0) {
    console.log({ event: "booking.misconfigured", missing: unset });
    return jsonResponse({ ok: false, error: "Booking service is not configured." }, 500, cors);
  }

  const requestId = crypto.randomUUID();
  const canEmail = Boolean(getCloudflareEmail(env) || getResendApiKey(env));
  const [orderResult, emailResult] = await Promise.allSettled([
    insertOrder(env, booking),
    canEmail ? sendBookingEmail(env, booking, requestId) : Promise.resolve({ ok: false as const, detail: "email skipped" })
  ]);

  const order =
    orderResult.status === "fulfilled"
      ? orderResult.value
      : { ok: false as const, detail: orderResult.reason instanceof Error ? orderResult.reason.message : "insert failed" };
  const email =
    emailResult.status === "fulfilled"
      ? emailResult.value
      : { ok: false as const, detail: emailResult.reason instanceof Error ? emailResult.reason.message : "email failed" };

  if (!order.ok) {
    console.log({ event: "booking.insert_failed", requestId, detail: order.detail });
    const rlsBlocked = order.detail.includes("42501") || order.detail.includes("row-level security");
    return jsonResponse(
      {
        ok: false,
        error: rlsBlocked
          ? "Supabase blocked this insert. Run workers/booking-handler/orders-policy.sql in the Supabase SQL editor to allow pending bookings."
          : "Unable to save this booking."
      },
      502,
      cors
    );
  }

  if (!email.ok) {
    console.log({ event: "booking.email_failed", requestId, orderId: order.id, detail: email.detail });
  } else {
    console.log({
      event: "booking.accepted",
      requestId,
      orderId: order.id,
      cities: booking.cities.length,
      landmarks: booking.landmarks.length
    });
  }

  return jsonResponse(
    {
      ok: true,
      status: "pending",
      id: order.id,
      emailDelivered: email.ok,
      travelPath: booking.travelPath
    },
    201,
    cors
  );
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const cors = corsHeaders(request, env);
    console.log({ event: "booking.request", method: request.method, path: new URL(request.url).pathname });

    if (request.method === "OPTIONS") {
      return new Response(null, { status: 204, headers: cors });
    }

    if (request.method === "POST") {
      try {
        return await handleBooking(request, env);
      } catch (error) {
        console.log({
          event: "booking.unhandled",
          detail: error instanceof Error ? error.message : "unknown"
        });
        return jsonResponse({ ok: false, error: "Booking service is unavailable." }, 500, cors);
      }
    }

    return jsonResponse({ ok: false, error: "Method not allowed." }, 405, {
      ...cors,
      Allow: "POST, OPTIONS"
    });
  }
} satisfies ExportedHandler<Env>;
