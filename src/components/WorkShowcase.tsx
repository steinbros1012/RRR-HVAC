"use client";

const photos = [
  {
    src: "/basement-install-photo.png",
    alt: "Basement HVAC installation in Watertown, SD",
    caption: "Basement Install",
    objectPosition: "center top",
  },
  {
    src: "/furnace-install-finished.png",
    alt: "Completed furnace installation",
    caption: "Furnace Install",
    objectPosition: "center center",
  },
  {
    src: "/gas-meter-and-venting.png",
    alt: "Gas meter and venting setup",
    caption: "Gas & Venting",
    objectPosition: "center center",
  },
  {
    src: "/exterior-vent-pipes.png",
    alt: "Exterior vent pipe installation",
    caption: "Exterior Venting",
    objectPosition: "center center",
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

        {/* 4-column portrait strip — cells are tall like the photos, cover fills edge-to-edge */}
        <div
          className="grid grid-cols-2 md:grid-cols-4"
          style={{ gap: "3px" }}
        >
          {photos.map((photo, i) => (
            <div
              key={photo.src}
              style={{ position: "relative", overflow: "hidden" }}
            >
              {/* Photo — cover in a portrait cell so no blank space */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={photo.src}
                alt={photo.alt}
                style={{
                  width: "100%",
                  height: "clamp(280px, 36vw, 520px)",
                  objectFit: "cover",
                  objectPosition: photo.objectPosition,
                  display: "block",
                }}
              />

              {/* Bottom gradient for caption legibility */}
              <div
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  height: "90px",
                  background: "linear-gradient(to top, rgba(8,8,8,0.82) 0%, transparent 100%)",
                  pointerEvents: "none",
                }}
              />

              {/* Caption */}
              <div
                style={{
                  position: "absolute",
                  bottom: "1rem",
                  left: "1rem",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
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
                <div style={{ width: "16px", height: "1px", background: "rgba(255,255,255,0.3)" }} />
                <span
                  className="font-mono"
                  style={{
                    fontSize: "9px",
                    letterSpacing: "0.14em",
                    color: "rgba(255,255,255,0.75)",
                    textTransform: "uppercase",
                  }}
                >
                  {photo.caption}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
