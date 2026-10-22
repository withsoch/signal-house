/**
 * Saves a Signal Score email and forwards it to n8n, which adds the
 * subscriber to Kit (tagged by level and weakest part), notifies Umair and
 * logs the lead.
 *
 * Off until SIGNAL_SCORE_WEBHOOK_URL is set: it then answers
 * { connected: false } so the page can say so honestly. The page only shows
 * the email step when NEXT_PUBLIC_SIGNAL_EMAIL=on.
 */
export async function POST(req: Request) {
  let body: Record<string, unknown>;
  try { body = await req.json(); } catch { return Response.json({ ok: false }, { status: 400 }); }
  const email = String(body.email ?? "").trim();
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return Response.json({ ok: false }, { status: 400 });

  const hook = process.env.SIGNAL_SCORE_WEBHOOK_URL;
  if (!hook) return Response.json({ ok: true, connected: false });

  const res = await fetch(hook, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ ...body, email, source: "signal-score", timestamp: new Date().toISOString() }),
  });
  return Response.json({ ok: res.ok, connected: res.ok }, { status: res.ok ? 200 : 502 });
}
