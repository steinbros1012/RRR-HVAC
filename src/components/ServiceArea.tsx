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
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left: copy */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.5rem" }}>
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
                color: "#64748B",
                lineHeight: 1.7,
                maxWidth: "420px",
                marginBottom: "2rem",
              }}
            >
              RRR HVAC Rescue LLC primarily serves Watertown, SD and the surrounding communities.
              Not sure if we cover your area? Give us a call — if we can get there, we will.
            </p>

            {/* County tags */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", marginBottom: "2.5rem" }}>
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
                transition: "border-color 0.15s, background 0.15s",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.borderColor = "#F97316";
                (e.currentTarget as HTMLAnchorElement).style.color = "#F97316";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(255,255,255,0.2)";
                (e.currentTarget as HTMLAnchorElement).style.color = "#FFFFFF";
              }}
            >
              Call to Confirm Your Area
            </a>
          </div>

          {/* Right: map */}
          <div style={{ position: "relative" }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/service-area-map.png"
              alt="RRR HVAC service area map — Watertown, SD"
              style={{
                width: "100%",
                height: "auto",
                display: "block",
                borderRadius: "1rem",
                border: "1px solid rgba(255,255,255,0.1)",
                boxShadow: "0 24px 64px rgba(0,0,0,0.4)",
              }}
            />
            {/* Map label overlay */}
            <div
              style={{
                position: "absolute",
                top: "1rem",
                left: "1rem",
                background: "rgba(8,8,8,0.8)",
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
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
              </svg>
              <span
                className="font-mono"
                style={{ fontSize: "9px", letterSpacing: "0.12em", color: "#E2E8F0", textTransform: "uppercase" }}
              >
                Watertown, SD
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
