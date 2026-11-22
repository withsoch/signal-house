"use client";

import { useAuditModal } from "@/context/AuditModalContext";
import { playChime } from "@/lib/sound";

type Variant = "primary" | "secondary" | "dark" | "light";
type Size = "md" | "lg";

const variants: Record<Variant, string> = {
  primary: "bg-brand text-white hover:bg-brand-dark",
  secondary: "bg-white text-ink ring-[1.5px] ring-ink hover:ring-ink-soft",
  dark: "bg-ink text-white hover:bg-ink-soft",
  light: "bg-transparent text-white ring-1 ring-white/45 hover:bg-white/10",
};

const sizes: Record<Size, string> = {
  md: "px-5 py-2.5 text-[0.95rem]",
  lg: "px-6 py-3 text-base",
};

type Props = {
  variant?: Variant;
  size?: Size;
  className?: string;
  children?: React.ReactNode;
};

export function AuditButton({
  variant = "secondary",
  size = "md",
  className = "",
  children = "Get a Free LinkedIn Audit",
}: Props) {
  const { openModal } = useAuditModal();
  const cls = `group inline-flex items-center justify-center gap-2 rounded-lg font-semibold transition-colors duration-200 ${variants[variant]} ${sizes[size]} ${className}`;
  return (
    <button type="button" onClick={() => { playChime(); openModal(); }} className={cls}>
      {children}
    </button>
  );
}
