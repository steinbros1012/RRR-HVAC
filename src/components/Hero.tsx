"use client";

const PHONE = "(605) 881-5622";

export default function Hero() {
  return (
    <section style={{ position: "relative", minHeight: "100vh", overflow: "hidden" }}>
      {/* Background */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/hero-background-tools.png"
        alt=""
        aria-hidden="true"
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "center" }}
      />
      {/* Overlay — heavy at top (behind nav), lighter in middle, heaviest at bottom */}
      <div style={{
        position: "absolute",
        inset: 0,
        background: "linear-gradient(to bottom, rgba(8,8,8,0.85) 0%, rgba(8,8,8,0.5) 45%, rgba(8,8,8,0.88) 100%)",
      }} />

      {/* Content */}
      <div
        className="sm:px-8"
        style={{
          position: "relative",
          zIndex: 10,
          maxWidth: "80rem",
          margin: "0 auto",
          padding: "0 1.25rem",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          minHeight: "100vh",
          paddingBottom: "6rem",
        }}
      >
        {/* Location eyebrow */}
        <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.75rem" }}>
          <div style={{ width: "24px", height: "1px", background: "#F97316" }} />
          <span className="font-mono uppercase" style={{ fontSize: "11px", letterSpacing: "0.2em", color: "#F97316" }}>
            Watertown, South Dakota
          </span>
        </div>

        {/* Headline */}
        <h1
          className="font-serif"
          style={{
            fontSize: "clamp(3.2rem, 7.5vw, 6.5rem)",
            color: "#FFFFFF",
            lineHeight: 0.9,
            letterSpacing: "-0.03em",
            fontStyle: "italic",
            marginBottom: "2rem",
            maxWidth: "16ch",
          }}
        >
          Heating &amp; Cooling
          <br />
          You Can Count On.
        </h1>

        {/* Subhead + CTAs side by side on desktop */}
        <div className="flex flex-col sm:flex-row sm:items-end gap-6 sm:gap-16">
          <p className="font-body" style={{ fontSize: "1.0625rem", color: "#94A3B8", maxWidth: "28rem", lineHeight: 1.65 }}>
            Fast, honest HVAC service from a Watertown firefighter and paramedic.
            Emergency response, repairs, and full system installs.
          </p>
          <div style={{ display: "flex", gap: "0.875rem", flexWrap: "wrap", flexShrink: 0 }}>
            <a
              href={`tel:${PHONE.replace(/\D/g, "")}`}
              className="font-mono uppercase font-semibold"
              style={{
                fontSize: "11px",
                letterSpacing: "0.12em",
                padding: "13px 26px",
                background: "#F97316",
                color: "#000000",
                textDecoration: "none",
                borderRadius: "2px",
                transition: "opacity 0.15s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.85")}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
            >
              Call {PHONE}
            </a>
            <a
              href="/contact"
              className="font-mono uppercase"
              style={{
                fontSize: "11px",
                letterSpacing: "0.12em",
                padding: "13px 26px",
                border: "1px solid rgba(255,255,255,0.25)",
                color: "#FFFFFF",
                textDecoration: "none",
                borderRadius: "2px",
                transition: "border-color 0.15s, background 0.15s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.5)";
                e.currentTarget.style.background = "rgba(255,255,255,0.06)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.25)";
                e.currentTarget.style.background = "transparent";
              }}
            >
              Request Service
            </a>
          </div>
        </div>

        {/* Trust line */}
        <div style={{ marginTop: "3rem", paddingTop: "2rem", borderTop: "1px solid rgba(255,255,255,0.08)" }}>
          <p className="font-mono" style={{ fontSize: "10px", letterSpacing: "0.16em", color: "rgba(255,255,255,0.35)", textTransform: "uppercase" }}>
            Licensed &amp; Insured&nbsp;&nbsp;·&nbsp;&nbsp;All Makes &amp; Models&nbsp;&nbsp;·&nbsp;&nbsp;Trane Equipment Available&nbsp;&nbsp;·&nbsp;&nbsp;Emergency Response
          </p>
        </div>
      </div>
    </section>
  );
}
