import Link from "next/link";
import Image from "next/image";

export function Logo({
  className = "",
  variant = "dark",
}: {
  className?: string;
  variant?: "dark" | "light";
}) {
  // "dark" variant = full-color logo on light bg (navbar); "light" variant = white logo on dark bg (footer)
  const { src, width, height, size } = variant === "light"
    ? { src: "/logos/footer-logo.png", width: 14791, height: 3305, size: "h-11" }
    : { src: "/logos/updated-navbar-trimmed.png", width: 1200, height: 232, size: "h-[1.875rem] md:h-[2.125rem]" };

  return (
    <Link href="/" aria-label="Signal House home" className={`inline-flex items-center ${className}`}>
      <Image
        src={src}
        alt="Signal House"
        width={width}
        height={height}
        className={`${size} w-auto object-contain rounded-none bg-transparent`}
        priority
      />
    </Link>
  );
}
