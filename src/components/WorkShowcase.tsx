"use client";

const photos = [
  {
    src: "/basement-install-photo.png",
    alt: "Basement HVAC installation in Watertown, SD",
    caption: "Basement Install",
  },
  {
    src: "/furnace-install-finished.png",
    alt: "Completed furnace installation",
    caption: "Furnace Install",
  },
  {
    src: "/gas-meter-and-venting.png",
    alt: "Gas meter and venting setup",
    caption: "Gas & Venting",
  },
  {
    src: "/exterior-vent-pipes.png",
    alt: "Exterior vent pipe installation",
    caption: "Exterior Venting",
  },
];

export default function WorkShowcase() {
  return (
    <section style={{ background: "#080808", padding: "5rem 0" }}>
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Header */}
        <div style={{ marginBottom: "2.5rem" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: "1rem",
            }}
          >
            <div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.75rem",
                  marginBottom: "1rem",
                }}
              >
                <div style={{ width: "24px", height: "1px", background: "#F97316" }} />
                <span
                  className="font-mono uppercase"
                  style={{ fontSize: "11px", letterSpacing: "0.2em", color: "#F97316" }}
                >
                  Field Work
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
                }}
              >
                Real Jobs.
                <br />
                Real Results.
              </h2>
            </div>
            <p
              className="font-body"
              style={{
                fontSize: "1rem",
                color: "#94A3B8",
                maxWidth: "360px",
                lineHeight: 1.65,
              }}
            >
              Every installation done right, from furnace replacements to full system installs.
              All work completed in Watertown, SD.
            </p>
          </div>
          <div
            style={{ height: "1px", background: "rgba(255,255,255,0.06)", marginTop: "2rem" }}
          />
        </div>

        {/* 2×2 grid — contain so every photo is fully visible */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2"
          style={{ gap: "3px" }}
        >
          {photos.map((photo, i) => (
            <div
              key={photo.src}
              style={{
                background: "#0d0d0d",
                border: "1px solid rgba(255,255,255,0.06)",
                position: "relative",
                display: "flex",
                flexDirection: "column",
              }}
            >
              {/* Photo — contain, full image always visible */}
              <div
                style={{
                  background: "#111111",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "1.75rem",
                  minHeight: "320px",
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={photo.src}
                  alt={photo.alt}
                  style={{
                    maxWidth: "100%",
                    maxHeight: "340px",
                    width: "auto",
                    height: "auto",
                    objectFit: "contain",
                    display: "block",
                  }}
                />
              </div>

              {/* Caption strip */}
              <div
                style={{
                  padding: "0.875rem 1.25rem",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.75rem",
                  borderTop: "1px solid rgba(255,255,255,0.06)",
                }}
              >
                <span
                  className="font-mono"
                  style={{
                    fontSize: "9px",
                    letterSpacing: "0.18em",
                    color: "#F97316",
                    textTransform: "uppercase",
                  }}
                >
                  0{i + 1}
                </span>
                <div style={{ width: "20px", height: "1px", background: "rgba(255,255,255,0.15)" }} />
                <span
                  className="font-mono"
                  style={{
                    fontSize: "10px",
                    letterSpacing: "0.14em",
                    color: "#94A3B8",
                    textTransform: "uppercase",
                  }}
                >
                  {photo.caption} — Watertown, SD
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
