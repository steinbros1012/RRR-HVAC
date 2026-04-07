export default function TrustNarrative() {
  const credentials = [
    "FIREFIGHTER & PARAMEDIC",
    "TRANE CERTIFIED",
    "LICENSED & INSURED",
  ];

  return (
    <section
      style={{
        background: "linear-gradient(to bottom, #080808, #0d0d0d)",
        padding: "5rem 0",
      }}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left: copy */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.5rem" }}>
              <div style={{ width: "24px", height: "1px", background: "#F97316" }} />
              <span
                className="font-mono uppercase"
                style={{ fontSize: "11px", letterSpacing: "0.2em", color: "#F97316" }}
              >
                About RRR HVAC
              </span>
            </div>

            <h2
              className="font-serif"
              style={{
                fontSize: "clamp(2.4rem, 5vw, 3.8rem)",
                letterSpacing: "-0.02em",
                color: "#FFFFFF",
                fontStyle: "italic",
                lineHeight: 0.92,
                marginBottom: "1.75rem",
              }}
            >
              A Firefighter&apos;s
              <br />
              Standard.
            </h2>

            <div style={{ display: "flex", flexDirection: "column", gap: "1rem", marginBottom: "2rem" }}>
              <p className="font-body" style={{ fontSize: "1rem", color: "#64748B", lineHeight: 1.7 }}>
                The owner of RRR HVAC is a full-time firefighter and paramedic. That background
                shapes everything about how this business operates — showing up when called, doing
                the job right under pressure, and never cutting corners when someone is depending
                on you.
              </p>
              <p className="font-body" style={{ fontSize: "1rem", color: "#64748B", lineHeight: 1.7 }}>
                RRR HVAC installs and services Trane equipment — one of the most trusted names in
                HVAC — and brings the same standard of care to every job, whether it&apos;s a
                routine tune-up or a furnace failure at midnight in February.
              </p>
              <p className="font-body" style={{ fontSize: "1rem", color: "#64748B", lineHeight: 1.7 }}>
                Serving Watertown and surrounding South Dakota since day one.
              </p>
            </div>

            {/* Credential pills */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
              {credentials.map((c) => (
                <span
                  key={c}
                  className="font-mono"
                  style={{
                    fontSize: "10px",
                    letterSpacing: "0.1em",
                    padding: "6px 14px",
                    border: "1px solid rgba(255,255,255,0.12)",
                    color: "#E2E8F0",
                    borderRadius: "999px",
                  }}
                >
                  {c}
                </span>
              ))}
            </div>
          </div>

          {/* Right: image + quote overlay */}
          <div style={{ position: "relative" }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/furnace-install-finished.png"
              alt="RRR HVAC field work"
              style={{
                width: "100%",
                height: "480px",
                objectFit: "cover",
                display: "block",
                borderRadius: "1rem",
              }}
            />
            {/* Dark overlay on image */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                background: "rgba(8,8,8,0.45)",
                borderRadius: "1rem",
              }}
            />

            {/* Glass quote card */}
            <div
              style={{
                position: "absolute",
                bottom: "1.5rem",
                left: "1.5rem",
                right: "1.5rem",
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.1)",
                borderRadius: "0.75rem",
                backdropFilter: "blur(12px)",
                padding: "1.25rem 1.5rem",
              }}
            >
              <p
                className="font-serif"
                style={{
                  fontSize: "1.05rem",
                  color: "#E2E8F0",
                  fontStyle: "italic",
                  lineHeight: 1.5,
                  letterSpacing: "-0.01em",
                }}
              >
                &ldquo;We show up when we say we will, fix it right, and leave your home better
                than we found it.&rdquo;
              </p>
              <div style={{ marginTop: "0.75rem" }}>
                <span
                  className="font-mono uppercase"
                  style={{ fontSize: "10px", letterSpacing: "0.1em", color: "#F97316" }}
                >
                  Mike — Owner, RRR HVAC Rescue LLC
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
