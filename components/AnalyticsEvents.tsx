"use client";

import { useEffect } from "react";
import { trackEvent } from "@/lib/analytics";

/**
 * Tracks clicks on any Cal.com booking link site-wide, so the plain <a> booking
 * buttons (BookButton, footer, confirmation page) stay server components.
 */
export function AnalyticsEvents() {
  useEffect(() => {
    function onClick(e: MouseEvent) {
      const link = (e.target as Element | null)?.closest?.("a[href*='cal.com/']");
      if (!link) return;
      trackEvent("book_call_click", {
        link_text: link.textContent?.trim().slice(0, 100),
        page_path: window.location.pathname,
      });
    }
    document.addEventListener("click", onClick, { capture: true });
    return () => document.removeEventListener("click", onClick, { capture: true });
  }, []);

  return null;
}
