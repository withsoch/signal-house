const CAL_URL = "https://cal.com/consult-with-riz/linkedin-strategy-call";

export function BookFooterLink() {
  return (
    <li>
      <a
        href={CAL_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="text-sm text-white/60 transition-colors hover:text-brand-light"
      >
        Book a discovery call
      </a>
    </li>
  );
}
