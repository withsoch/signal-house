"use client";

import { useEffect } from "react";
import { useAuditModal } from "@/context/AuditModalContext";

const CAL_URL = "https://cal.com/consult-with-riz/linkedin-strategy-call";

export function BookAutoOpen() {
  const { openModal: openAuditModal } = useAuditModal();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);

    if (params.get("book") === "true") {
      window.open(CAL_URL, "_blank", "noopener,noreferrer");
      const url = new URL(window.location.href);
      url.searchParams.delete("book");
      window.history.replaceState({}, "", url.pathname);
    }

    if (params.get("audit") === "true") {
      openAuditModal();
      const url = new URL(window.location.href);
      url.searchParams.delete("audit");
      window.history.replaceState({}, "", url.pathname);
    }
  }, [openAuditModal]);

  return null;
}
