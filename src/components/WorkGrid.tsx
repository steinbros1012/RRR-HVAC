"use client";

const projects = [
  {
    src: "/basement-install-photo.png",
    alt: "Basement HVAC installation",
    category: "RESIDENTIAL",
    title: "Basement System Install",
    desc: "Full ductwork and air handling unit installed in a newly finished basement in Watertown.",
    objectPosition: "center top",
  },
  {
    src: "/furnace-install-finished.png",
    alt: "Completed furnace installation",
    category: "HEATING",
    title: "Furnace Replacement",
    desc: "High-efficiency furnace installed with updated venting, gas connections, and new thermostat.",
    objectPosition: "center center",
  },
  {
    src: "/gas-meter-and-venting.png",
    alt: "Gas meter and venting setup",
    category: "GAS & VENTING",
    title: "Gas Line & Meter Work",
    desc: "Gas meter connection and venting setup for a new HVAC system — done clean and to code.",
    objectPosition: "center center",
  },
  {
    src: "/exterior-vent-pipes.png",
    alt: "Exterior vent pipe installation",
    category: "EXTERIOR",
    title: "Exterior Vent Installation",
    desc: "PVC exhaust and combustion air intake pipes installed through exterior wall — tight and properly sealed.",
    objectPosition: "center center",
  },
];

export default function WorkGrid() {
  return (
    <section style={{ background: "#080808", padding: "6rem 0", borderTop: "1px solid rgba(255,255,255,0.07)" }}>
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Header */}
        <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: "3rem", flexWrap: "wrap", gap: "1.5rem" }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.25rem" }}>
              <div style={{ width: "24px", height: "1px", background: "#F97316" }} />
              <span className="font-mono uppercase" style={{ fontSize: "11px", letterSpacing: "0.2em", color: "#F97316" }}>
                Field Work
              </span>
            </div>
            <h2 className="font-serif" style={{ fontSize: "clamp(2.4rem, 5vw, 3.8rem)", letterSpacing: "-0.02em", color: "#FFFFFF", fontStyle: "italic", lineHeight: 0.92 }}>
              Real Jobs.
              <br />
              Real Results.
            </h2>
          </div>
          <p className="font-body" style={{ fontSize: "0.9375rem", color: "#94A3B8", maxWidth: "320px", lineHeight: 1.65 }}>
            Every job completed in Watertown and surrounding South Dakota communities.
          </p>
        </div>

        {/* 2-col grid */}
        <div className="grid sm:grid-cols-2" style={{ gap: "2px" }}>
          {projects.map((p) => (
            <div key={p.title} style={{ background: "#0d0d0d" }}>
              {/* Image */}
              <div style={{ overflow: "hidden", height: "clamp(240px, 30vw, 420px)" }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={p.src}
                  alt={p.alt}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    objectPosition: p.objectPosition,
                    display: "block",
                    transition: "transform 0.5s ease",
                  }}
                  onMouseEnter={(e) => ((e.currentTarget as HTMLImageElement).style.transform = "scale(1.03)")}
                  onMouseLeave={(e) => ((e.currentTarget as HTMLImageElement).style.transform = "scale(1)")}
                />
              </div>
              {/* Caption */}
              <div style={{ padding: "1.5rem 1.75rem 2rem" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.75rem" }}>
                  <span className="font-mono uppercase" style={{ fontSize: "9px", letterSpacing: "0.18em", color: "#F97316" }}>
                    {p.category}
                  </span>
                  <div style={{ width: "20px", height: "1px", background: "rgba(255,255,255,0.12)" }} />
                  <span className="font-mono uppercase" style={{ fontSize: "9px", letterSpacing: "0.18em", color: "#64748B" }}>
                    Watertown, SD
                  </span>
                </div>
                <h3 className="font-serif" style={{ fontSize: "clamp(1.1rem, 2vw, 1.4rem)", color: "#FFFFFF", fontStyle: "italic", letterSpacing: "-0.01em", lineHeight: 1.1, marginBottom: "0.6rem" }}>
                  {p.title}
                </h3>
                <p className="font-body" style={{ fontSize: "0.875rem", color: "#94A3B8", lineHeight: 1.6 }}>
                  {p.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
