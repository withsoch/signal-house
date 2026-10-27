"use client";

import { usePathname } from "next/navigation";

// Standalone landing pages bring their own nav and footer.
export const STANDALONE_ROUTES = ["/linkedin-ads"];

/** Renders the site-wide header/footer everywhere except standalone pages. */
export function SiteChrome({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  return STANDALONE_ROUTES.includes(pathname) ? null : children;
}
