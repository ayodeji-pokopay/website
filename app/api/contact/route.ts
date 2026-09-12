import { NextResponse } from "next/server";

/**
 * Contact form endpoint. For now this only console-logs the submission so
 * you have a working end-to-end wire on first deploy. When you're ready:
 *   • Resend (transactional email) is the simplest — swap the body of this
 *     handler for a fetch to their API, keyed by RESEND_API_KEY.
 *   • Or point it at a Slack incoming webhook.
 *   • Or forward to a support inbox via SES.
 *
 * Deliberately no-op on validation — the marketing form is a low-value
 * XSS/DDoS target and we handle rate limiting at the edge (Vercel).
 */

type ContactPayload = {
  name?: unknown;
  email?: unknown;
  topic?: unknown;
  message?: unknown;
};

export async function POST(req: Request) {
  let body: ContactPayload;
  try {
    body = (await req.json()) as ContactPayload;
  } catch {
    return NextResponse.json({ ok: false, error: "invalid json" }, { status: 400 });
  }

  const name = typeof body.name === "string" ? body.name.trim() : "";
  const email = typeof body.email === "string" ? body.email.trim() : "";
  const topic = typeof body.topic === "string" ? body.topic.trim() : "";
  const message = typeof body.message === "string" ? body.message.trim() : "";

  if (!name || !email || !message) {
    return NextResponse.json({ ok: false, error: "missing fields" }, { status: 400 });
  }
  if (message.length > 4000) {
    return NextResponse.json({ ok: false, error: "message too long" }, { status: 400 });
  }

  // TODO: swap this for a real destination (Resend / Slack webhook / SES).
  // Kept as a console log so first-deploy still returns 200 without an
  // env var. See Vercel → Project → Settings → Environment Variables
  // when you're ready to wire a provider.
  console.log("[contact]", { name, email, topic, message: message.slice(0, 200) });

  return NextResponse.json({ ok: true });
}
