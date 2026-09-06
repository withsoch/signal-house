"use client";

import { useState } from "react";
import type { CSSProperties } from "react";

function toInitials(label: string) {
  const words = label.split(/[\s-]+/).filter(Boolean);
  return words.slice(0, 2).map((w) => w[0]?.toUpperCase()).join("");
}

/**
 * <img> with a graceful fallback: if the source fails to load (e.g. an
 * expired LinkedIn signed URL returning 403), shows an initials avatar
 * instead of a broken-image icon.
 */
export function PortraitImg({
  src,
  alt,
  accent = "#1a3a5c",
  className,
  style,
}: {
  src?: string;
  alt: string;
  accent?: string;
  className?: string;
  style?: CSSProperties;
}) {
  const [errored, setErrored] = useState(false);

  if (!src || errored) {
    return (
      <div
        className={className}
        style={{
          ...style,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: accent,
          color: "#fff",
          fontWeight: 700,
          fontSize: "1.5rem",
          fontFamily: "var(--font-display)",
        }}
        role="img"
        aria-label={alt}
      >
        {toInitials(alt)}
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      style={style}
      onError={() => setErrored(true)}
    />
  );
}
