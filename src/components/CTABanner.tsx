const PHONE = "(605) 881-5622";

export default function CTABanner() {
  return (
    <section
      style={{
        background: "#0d0d0d",
        borderTop: "1px solid rgba(255,255,255,0.07)",
        padding: "6rem 0",
      }}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.5rem" }}>
              <div style={{ width: "24px", height: "1px", background: "#F97316" }} />
              <span className="font-mono uppercase" style={{ fontSize: "11px", letterSpacing: "0.2em", color: "#F97316" }}>
                Get Started
              </span>
            </div>
            <h2 className="font-serif" style={{ fontSize: "clamp(2.2rem, 4.5vw, 3.5rem)", letterSpacing: "-0.02em", color: "#FFFFFF", fontStyle: "italic", lineHeight: 0.92, marginBottom: "1.5rem" }}>
              Ready to get
              <br />
              your system fixed?
            </h2>
            <p className="font-body" style={{ fontSize: "1rem", color: "#94A3B8", lineHeight: 1.7, maxWidth: "380px" }}>
              Call Mike directly for the fastest response, or submit a service request
              and we&apos;ll get back to you the same day.
            </p>
          </div>

          {/* Right — CTAs */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <a
              href={`tel:${PHONE.replace(/\D/g, "")}`}
              className="font-mono uppercase font-semibold flex items-center justify-between"
              style={{
                fontSize: "13px",
                letterSpacing: "0.1em",
                padding: "20px 28px",
                background: "#F97316",
                color: "#000000",
                textDecoration: "none",
                borderRadius: "2px",
                transition: "opacity 0.15s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.85")}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
            >
              <span>Call {PHONE}</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.4 2 2 0 0 1 3.6 1.24h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.77a16 16 0 0 0 6.29 6.29l.95-.95a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
            </a>
            <a
              href="/contact"
              className="font-mono uppercase font-semibold flex items-center justify-between"
              style={{
                fontSize: "13px",
                letterSpacing: "0.1em",
                padding: "20px 28px",
                border: "1px solid rgba(255,255,255,0.15)",
                color: "#FFFFFF",
                textDecoration: "none",
                borderRadius: "2px",
                transition: "border-color 0.15s, background 0.15s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.35)";
                e.currentTarget.style.background = "rgba(255,255,255,0.04)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.15)";
                e.currentTarget.style.background = "transparent";
              }}
            >
              <span>Request a Free Estimate</span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>

            <p className="font-mono" style={{ fontSize: "10px", letterSpacing: "0.12em", color: "rgba(255,255,255,0.25)", textTransform: "uppercase", marginTop: "0.5rem" }}>
              Emergency available 7 days · Watertown &amp; surrounding areas
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
