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
              Family-Owned.
              <br />
              Built on Trust.
            </h2>

            <div style={{ display: "flex", flexDirection: "column", gap: "1rem", marginBottom: "2rem" }}>
              <p className="font-body" style={{ fontSize: "1rem", color: "#94A3B8", lineHeight: 1.7 }}>
                Mike is a full-time firefighter and paramedic — and the owner of RRR HVAC. His
                background in emergency response shapes everything about how this business runs:
                show up when called, do the job right under pressure, and never cut corners
                when someone is depending on you.
              </p>
              <p className="font-body" style={{ fontSize: "1rem", color: "#94A3B8", lineHeight: 1.7 }}>
                This is a family business in every sense. Mike and his wife are raising their three
                kids in Watertown — which means the community he serves is the same one he lives in.
                That accountability matters, and it shows in every job.
              </p>
              <p className="font-body" style={{ fontSize: "1rem", color: "#94A3B8", lineHeight: 1.7 }}>
                RRR HVAC installs and services Trane equipment — one of the most trusted names in
                the industry — and brings that same standard of care to every job, from routine
                tune-ups to furnace failures at midnight in February.
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

          {/* Right: family photos stacked */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {/* Primary — family photo */}
            <div style={{ position: "relative", borderRadius: "1rem", overflow: "hidden" }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/family-photo.png"
                alt="Mike and his family"
                style={{
                  width: "100%",
                  height: "340px",
                  objectFit: "cover",
                  objectPosition: "center 30%",
                  display: "block",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background: "linear-gradient(to top, rgba(8,8,8,0.55) 0%, transparent 50%)",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  bottom: "1rem",
                  left: "1.25rem",
                }}
              >
                <span
                  className="font-mono uppercase"
                  style={{ fontSize: "9px", letterSpacing: "0.14em", color: "rgba(255,255,255,0.7)" }}
                >
                  Mike &amp; Family · Watertown, SD
                </span>
              </div>
            </div>

            {/* Secondary — Mike + wife + quote */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1.2fr",
                gap: "1rem",
                alignItems: "stretch",
              }}
            >
              <div style={{ position: "relative", borderRadius: "0.75rem", overflow: "hidden" }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/mike-and-wife.png"
                  alt="Mike with his wife"
                  style={{
                    width: "100%",
                    height: "180px",
                    objectFit: "cover",
                    objectPosition: "center 35%",
                    display: "block",
                  }}
                />
              </div>

              {/* Quote panel */}
              <div
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.09)",
                  borderRadius: "0.75rem",
                  padding: "1.25rem",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  gap: "0.75rem",
                }}
              >
                <p
                  className="font-serif"
                  style={{
                    fontSize: "0.975rem",
                    color: "#E2E8F0",
                    fontStyle: "italic",
                    lineHeight: 1.5,
                    letterSpacing: "-0.01em",
                  }}
                >
                  &ldquo;We show up when we say we will, fix it right, and leave your home better
                  than we found it.&rdquo;
                </p>
                <span
                  className="font-mono uppercase"
                  style={{ fontSize: "9px", letterSpacing: "0.1em", color: "#F97316" }}
                >
                  Mike — Owner
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
