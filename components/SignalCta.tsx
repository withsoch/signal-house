"use client";

import { BookButton } from "@/components/BookButton";
import { useAuditModal } from "@/context/AuditModalContext";

/**
 * The call to action on a Signal Score result: books a discovery call, or
 * opens the free audit with the score attached, so the audit starts from
 * what the founder already told us. The level decides which
 * (lib/signalCheck.ts).
 */
export function SignalCta({
  action,
  tone,
  children,
  score,
}: {
  action: "book" | "audit";
  tone: "strong" | "soft";
  children: React.ReactNode;
  score: Record<string, unknown>;
}) {
  const { openWith } = useAuditModal();
  if (action === "book") {
    return <BookButton variant={tone === "soft" ? "secondary" : "primary"} size="lg">{children}</BookButton>;
  }
  const cls =
    tone === "soft"
      ? "bg-white text-ink ring-[1.5px] ring-ink hover:ring-ink-soft"
      : "bg-brand text-white hover:bg-brand-dark";
  return (
    <button
      type="button"
      onClick={() => openWith({ signalScore: score })}
      className={`inline-flex items-center justify-center gap-2 rounded-lg px-6 py-3 text-base font-semibold transition-colors duration-200 ${cls}`}
    >
      {children}
    </button>
  );
}
