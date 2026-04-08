"use client";

const projects = [
  {
    src: "/customer-jobs/img-0017.jpg",
    alt: "Outdoor condenser installed beside a home in Watertown",
    category: "COOLING",
    title: "Outdoor Condenser Install",
    desc: "One angle from a recent cooling-system install, showing the finished condenser placement and clean exterior setup.",
    objectPosition: "center center",
  },
  {
    src: "/customer-jobs/img-0600.jpg",
    alt: "Second exterior angle of a newly installed outdoor HVAC condenser",
    category: "COOLING",
    title: "Condenser Setup Detail",
    desc: "A second view of the same job, highlighting the line set, service connections, and tidy finish work at the house.",
    objectPosition: "center center",
  },
  {
    src: "/customer-jobs/img-0758.jpg",
    alt: "Indoor furnace and ductwork installation in a basement mechanical area",
    category: "HEATING",
    title: "Indoor System Installation",
    desc: "One angle of a completed indoor install with the furnace, duct transitions, and venting all laid out cleanly.",
    objectPosition: "center center",
  },
  {
    src: "/customer-jobs/img-0067.jpg",
    alt: "Second indoor angle of a RunTru furnace installation with venting and gas line visible",
    category: "HEATING",
    title: "Mechanical Room Finish",
    desc: "A second angle from the install, showing the finished equipment, vent runs, and gas piping inside the mechanical space.",
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
            Recent RRR HVAC work from two different jobs, shown from multiple angles so customers can see the quality for themselves.
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
