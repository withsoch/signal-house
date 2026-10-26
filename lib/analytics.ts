import { sendGAEvent } from "@next/third-parties/google";

/** GA4 measurement ID (G-XXXXXXXXXX). Unset = analytics off, nothing loads. */
export const GA_ID = process.env.NEXT_PUBLIC_GA_ID ?? "";

/** Sends a GA4 event. No-op when GA isn't configured. */
export function trackEvent(name: string, params: Record<string, unknown> = {}) {
  if (!GA_ID || typeof window === "undefined") return;
  sendGAEvent("event", name, params);
}
