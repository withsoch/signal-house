const CAL_URL = "https://cal.com/consult-with-riz/linkedin-strategy-call";

export function ConfirmationBookBtn() {
  return (
    <a
      href={CAL_URL}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        background: "#e8633e",
        color: "white",
        padding: "16px 40px",
        borderRadius: 8,
        fontSize: 16,
        fontWeight: 600,
        border: "none",
        cursor: "pointer",
        display: "inline-block",
        boxShadow: "0 4px 16px rgba(232,99,62,0.4)",
        textDecoration: "none",
      }}
    >
      Book My Free Strategy Call
    </a>
  );
}
