"use client";

export default function ServiceArea() {
  const counties = [
    "Codington County",
    "Grant County",
    "Hamlin County",
    "Clark County",
  ];

  return (
    <section style={{ background: "#080808", padding: "5rem 0" }}>
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Left: copy */}
          <div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.75rem",
                marginBottom: "1.5rem",
              }}
            >
              <div style={{ width: "24px", height: "1px", background: "#F97316" }} />
              <span
                className="font-mono uppercase"
                style={{ fontSize: "11px", letterSpacing: "0.2em", color: "#F97316" }}
              >
                Service Area
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
                marginBottom: "1.25rem",
              }}
            >
              Serving Watertown
              <br />
              and Beyond.
            </h2>

            <p
              className="font-body"
              style={{
                fontSize: "1rem",
                color: "#94A3B8",
                lineHeight: 1.7,
                maxWidth: "420px",
                marginBottom: "2rem",
              }}
            >
              RRR HVAC Rescue LLC is based in Watertown, SD and serves the surrounding
              communities. If you&apos;re not sure whether we cover your area, give us a call —
              if we can get there, we will.
            </p>

            {/* County tags */}
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "0.5rem",
                marginBottom: "2.5rem",
              }}
            >
              {counties.map((county) => (
                <span
                  key={county}
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
                  {county}
                </span>
              ))}
            </div>

            <a
              href="tel:6058815622"
              className="font-mono uppercase inline-flex items-center gap-2"
              style={{
                fontSize: "11px",
                letterSpacing: "0.1em",
                padding: "12px 24px",
                borderRadius: "999px",
                border: "1px solid rgba(255,255,255,0.2)",
                color: "#FFFFFF",
                textDecoration: "none",
                transition: "border-color 0.15s, color 0.15s",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.borderColor = "#F97316";
                (e.currentTarget as HTMLAnchorElement).style.color = "#F97316";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.borderColor =
                  "rgba(255,255,255,0.2)";
                (e.currentTarget as HTMLAnchorElement).style.color = "#FFFFFF";
              }}
            >
              Call to Confirm Your Area
            </a>
          </div>

          {/* Right: interactive Google Maps embed */}
          <div style={{ position: "relative" }}>
            {/* Premium frame */}
            <div
              style={{
                borderRadius: "1rem",
                overflow: "hidden",
                border: "1px solid rgba(255,255,255,0.1)",
                boxShadow: "0 24px 64px rgba(0,0,0,0.5)",
                position: "relative",
              }}
            >
              {/* Map label bar */}
              <div
                style={{
                  position: "absolute",
                  top: "1rem",
                  left: "1rem",
                  zIndex: 10,
                  background: "rgba(8,8,8,0.85)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  borderRadius: "0.5rem",
                  backdropFilter: "blur(8px)",
                  padding: "6px 12px",
                  display: "flex",
                  alignItems: "center",
                  gap: "6px",
                }}
              >
                <svg width="10" height="10" viewBox="0 0 24 24" fill="#F97316">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                </svg>
                <span
                  className="font-mono"
                  style={{
                    fontSize: "9px",
                    letterSpacing: "0.12em",
                    color: "#E2E8F0",
                    textTransform: "uppercase",
                  }}
                >
                  Watertown, SD
                </span>
              </div>

              <iframe
                title="RRR HVAC Service Area — Watertown, SD"
                src="https://maps.google.com/maps?q=Watertown,+South+Dakota,+USA&t=m&z=11&ie=UTF8&iwloc=near&output=embed"
                width="100%"
                height="440"
                style={{
                  display: "block",
                  border: "none",
                  filter: "grayscale(0.25) brightness(0.92)",
                }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>

            {/* Caption below map */}
            <p
              className="font-mono"
              style={{
                fontSize: "10px",
                letterSpacing: "0.1em",
                color: "#94A3B8",
                textTransform: "uppercase",
                marginTop: "1rem",
                textAlign: "center",
              }}
            >
              Primary coverage: Watertown &amp; surrounding counties
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
