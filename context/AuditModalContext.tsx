"use client";

import { createContext, useContext, useState } from "react";
import type { ReactNode } from "react";

type AuditModalContextType = {
  isOpen: boolean;
  /** extra context sent with the audit request, e.g. a Signal Score result */
  extra: Record<string, unknown> | null;
  openModal: () => void;
  /** open the audit with extra context attached (a Signal Score result) */
  openWith: (extra: Record<string, unknown>) => void;
  closeModal: () => void;
};

const AuditModalContext = createContext<AuditModalContextType | null>(null);

export function AuditModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [extra, setExtra] = useState<Record<string, unknown> | null>(null);
  return (
    <AuditModalContext.Provider
      value={{
        isOpen,
        extra,
        openModal: () => { setExtra(null); setIsOpen(true); },
        openWith: (e) => { setExtra(e); setIsOpen(true); },
        closeModal: () => setIsOpen(false),
      }}
    >
      {children}
    </AuditModalContext.Provider>
  );
}

export function useAuditModal() {
  const ctx = useContext(AuditModalContext);
  if (!ctx) throw new Error("useAuditModal must be used within AuditModalProvider");
  return ctx;
}
