// Custom line-icon set (1.6 stroke, rounded), no emoji, no clip-art.
import type { SVGProps } from "react";

export type IconName =
  | "profile"
  | "pen"
  | "target"
  | "spark"
  | "compass"
  | "audit"
  | "building"
  | "trend"
  | "arrow"
  | "check"
  | "linkedin"
  | "menu"
  | "close"
  | "shield"
  | "clock"
  | "chat";

const base: SVGProps<SVGSVGElement> = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};

export function Icon({
  name,
  className,
  ...props
}: { name: IconName; className?: string } & SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} className={className} aria-hidden="true" {...props}>
      {PATHS[name]}
    </svg>
  );
}

const PATHS: Record<IconName, React.ReactNode> = {
  profile: (
    <>
      <circle cx="12" cy="8" r="3.2" />
      <path d="M5 19.5a7 7 0 0 1 14 0" />
    </>
  ),
  pen: (
    <>
      <path d="M14.5 5.5l4 4" />
      <path d="M4 20l1-4L16 5a2.1 2.1 0 0 1 3 3L8 19l-4 1Z" />
    </>
  ),
  target: (
    <>
      <circle cx="12" cy="12" r="8" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="12" cy="12" r="0.6" fill="currentColor" />
    </>
  ),
  spark: (
    <>
      <path d="M12 3l1.8 5.4L19 10l-5.2 1.6L12 17l-1.8-5.4L5 10l5.2-1.6L12 3Z" />
      <path d="M18.5 15.5l.7 2 2 .7-2 .7-.7 2-.7-2-2-.7 2-.7.7-2Z" />
    </>
  ),
  compass: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M15.5 8.5l-2 5-5 2 2-5 5-2Z" />
    </>
  ),
  audit: (
    <>
      <path d="M6 3.5h7l5 5V20a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 6 20V5A1.5 1.5 0 0 1 7.5 3.5Z" />
      <path d="M13 3.5V8.5h5" />
      <path d="M9 13.5l1.8 1.8L14.5 12" />
    </>
  ),
  building: (
    <>
      <path d="M5 21V5.5A1.5 1.5 0 0 1 6.5 4h7A1.5 1.5 0 0 1 15 5.5V21" />
      <path d="M15 10h3.5A1.5 1.5 0 0 1 20 11.5V21" />
      <path d="M8 8h4M8 12h4M17 14h1" />
      <path d="M9.5 21v-3.5h2V21" />
      <path d="M3 21h18" />
    </>
  ),
  trend: (
    <>
      <path d="M4 16l5-5 3 3 7-7" />
      <path d="M15 7h5v5" />
    </>
  ),
  arrow: <path d="M5 12h14M13 6l6 6-6 6" />,
  check: <path d="M5 12.5l4.5 4.5L19 7" />,
  linkedin: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="3.2" />
      <path d="M7 10v7" strokeWidth={1.8} />
      <circle cx="7" cy="6.8" r="0.4" strokeWidth={2} />
      <path d="M11 17v-4a2 2 0 0 1 4 0v4M11 10.5V17" strokeWidth={1.8} />
    </>
  ),
  menu: <path d="M4 7h16M4 12h16M4 17h16" />,
  close: <path d="M6 6l12 12M18 6L6 18" />,
  shield: (
    <>
      <path d="M12 3l7 2.5V11c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V5.5L12 3Z" />
      <path d="M9 12l2 2 4-4" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7.5V12l3 2" />
    </>
  ),
  chat: (
    <>
      <path d="M4.5 6.5A1.5 1.5 0 0 1 6 5h12a1.5 1.5 0 0 1 1.5 1.5v8A1.5 1.5 0 0 1 18 16H9l-4 3v-3H6a1.5 1.5 0 0 1-1.5-1.5Z" />
    </>
  ),
};
