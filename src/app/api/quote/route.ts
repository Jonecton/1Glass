import { getCloudflareContext } from "@opennextjs/cloudflare";

type QuoteEnv = {
  RESEND_API_KEY?: string;
  QUOTE_RATE_LIMITER: { limit(options: { key: string }): Promise<{ success: boolean }> };
};

const respond = (message: string, status: number) => Response.json({ message }, { status, headers: { "Cache-Control": "no-store" } });

export async function POST(request: Request) {
  const origin = request.headers.get("origin");
  if (!origin || origin !== new URL(request.url).origin) return respond("Please submit the form from this website.", 403);
  if (!request.headers.get("content-type")?.startsWith("application/json")) return respond("Invalid request format.", 415);
  const raw = await request.text();
  if (new TextEncoder().encode(raw).length > 16000) return respond("Your message is too long.", 413);
  let data;
  try { data = JSON.parse(raw); } catch { return respond("Invalid request.", 400); }
  if (!data || typeof data !== "object" || Array.isArray(data)) return respond("Invalid request.", 400);
  if (data.website) return respond("Unable to submit this request.", 400);
  const { name, phone, email, description, requestId } = data;
  if (typeof name !== "string" || !name.trim() || name.length > 100 || /[\r\n]/.test(name)) return respond("Enter your name (up to 100 characters).", 400);
  if (typeof phone !== "string" || phone.length > 40 || !/^[+\d\s().-]+$/.test(phone) || phone.replace(/\D/g, "").length < 7) return respond("Enter a valid phone number.", 400);
  if (typeof email !== "string" || email.length > 254 || (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))) return respond("Enter a valid email or leave it blank.", 400);
  if (typeof description !== "string" || description.trim().length < 10 || description.length > 5000) return respond("Describe your project in 10 to 5,000 characters.", 400);
  if (typeof requestId !== "string" || !/^[0-9a-f-]{36}$/i.test(requestId)) return respond("Please reload the page and try again.", 400);
  try {
    const env = getCloudflareContext().env as unknown as QuoteEnv;
    if (!env.RESEND_API_KEY || !env.QUOTE_RATE_LIMITER) {
      console.error("Quote configuration missing", {
        resendApiKeyMissing: !env.RESEND_API_KEY,
        rateLimiterMissing: !env.QUOTE_RATE_LIMITER,
      });
      return respond("Online requests are temporarily unavailable. Please call (956) 472-5806.", 503);
    }
    const ip = request.headers.get("cf-connecting-ip") || "unknown";
    const { success } = await env.QUOTE_RATE_LIMITER.limit({ key: `quote:${ip}` });
    if (!success) return respond("Too many requests. Please wait a minute and try again.", 429);
    const result = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${env.RESEND_API_KEY}`, "Content-Type": "application/json", "Idempotency-Key": `quote/${requestId}` },
      body: JSON.stringify({
        from: "#1 Glass Shop <quotes@notifications.the1glassshop.com>",
        to: ["support@the1glassshop.com"],
        ...(email ? { reply_to: email.trim() } : {}),
        subject: `Website quote request: ${name.trim()}`,
        text: `New website quote request\n\nName: ${name.trim()}\nPhone: ${phone.trim()}\nEmail: ${email.trim() || "Not provided"}\n\nProject description:\n${description.trim()}`,
      }),
      signal: AbortSignal.timeout(15000),
    });
    if (!result.ok) {
      console.error("Quote email rejected", result.status);
      return respond("Your request could not be sent. Please try again or call (956) 472-5806.", 502);
    }
    const sent = await result.json() as { id?: string };
    if (!sent.id) return respond("Your request could not be confirmed. Please call (956) 472-5806.", 502);
    return respond("Thank you! Your quote request has been submitted. We’ll contact you using the details you provided.", 200);
  } catch {
    console.error("Quote email service unavailable");
    return respond("Your request could not be sent. Please try again or call (956) 472-5806.", 503);
  }
}
