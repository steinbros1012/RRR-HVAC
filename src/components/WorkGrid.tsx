"use client";

import { useEffect, useRef, useState } from "react";

const projects = [
  {
    category: "COOLING",
    title: "Condenser Replacement Project",
    desc: "Two angles from the same cooling install, showing the finished condenser placement, service connections, and clean exterior finish work.",
    photos: [
      { src: "/customer-jobs/img-0017.jpg", alt: "Outdoor condenser installed beside a home in Watertown", label: "Angle 01", objectPosition: "center center" },
      { src: "/customer-jobs/img-0600.jpg", alt: "Second exterior angle of a newly installed outdoor HVAC condenser", label: "Angle 02", objectPosition: "center center" },
    ],
  },
  {
    category: "HEATING",
    title: "Indoor Furnace System Project",
    desc: "Two angles from the same heating install, showing the finished equipment, venting layout, and mechanical-room detail work.",
    photos: [
      { src: "/customer-jobs/img-0758.jpg", alt: "Indoor furnace and ductwork installation in a basement mechanical area", label: "Angle 01", objectPosition: "center center" },
      { src: "/customer-jobs/img-0067.jpg", alt: "Second indoor angle of a RunTru furnace installation with venting and gas line visible", label: "Angle 02", objectPosition: "center center" },
    ],
  },
];

export default function WorkGrid() {
  const [visible, setVisible] = useState<Set<number>>(new Set());
  const refs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    refs.current.forEach((el, i) => {
      if (!el) return;
      const obs = new IntersectionObserver(
        ([e]) => {
          if (e.isIntersecting) {
            setTimeout(() => setVisible((prev) => new Set([...prev, i])), i * 150);
            obs.unobserve(el);
          }
        },
        { threshold: 0.08 }
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <section style={{ background: "#080808", padding: "6rem 0", borderTop: "1px solid rgba(255,255,255,0.07)" }}>
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: "3rem", flexWrap: "wrap", gap: "1.5rem" }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.25rem" }}>
              <div style={{ width: "24px", height: "1px", background: "#F97316" }} />
              <span className="font-mono uppercase" style={{ fontSize: "11px", letterSpacing: "0.2em", color: "#F97316" }}>Field Work</span>
            </div>
            <h2 className="font-serif" style={{ fontSize: "clamp(2.4rem, 5vw, 3.8rem)", letterSpacing: "-0.02em", color: "#FFFFFF", fontStyle: "italic", lineHeight: 0.92 }}>
              Real Jobs.
              <br />
              Real Results.
            </h2>
          </div>
          <p className="font-body" style={{ fontSize: "0.9375rem", color: "#94A3B8", maxWidth: "320px", lineHeight: 1.65 }}>
            Recent RRR HVAC work in Watertown, South Dakota.
          </p>
        </div>

        <div className="grid xl:grid-cols-2" style={{ gap: "2px", background: "rgba(255,255,255,0.05)" }}>
          {projects.map((project, index) => (
            <article
              key={project.title}
              ref={(el) => { refs.current[index] = el; }}
              style={{
                background: "#0d0d0d",
                display: "flex",
                flexDirection: "column",
                opacity: visible.has(index) ? 1 : 0,
                transform: visible.has(index) ? "none" : "translateY(20px)",
                transition: `opacity 0.65s ease, transform 0.65s ease`,
              }}
            >
              <div className="grid sm:grid-cols-2" style={{ gap: "2px", background: "rgba(255,255,255,0.05)" }}>
                {project.photos.map((photo) => (
                  <div key={photo.src} style={{ position: "relative", background: "#111111" }}>
                    <div style={{ overflow: "hidden", height: "clamp(240px, 26vw, 360px)" }}>
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={photo.src}
                        alt={photo.alt}
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                          objectPosition: photo.objectPosition,
                          display: "block",
                          transition: "transform 0.5s ease",
                        }}
                        onMouseEnter={(e) => ((e.currentTarget as HTMLImageElement).style.transform = "scale(1.04)")}
                        onMouseLeave={(e) => ((e.currentTarget as HTMLImageElement).style.transform = "scale(1)")}
                      />
                    </div>
                    <div style={{ position: "absolute", left: "1rem", bottom: "1rem", padding: "0.45rem 0.65rem", background: "rgba(8,8,8,0.72)", border: "1px solid rgba(255,255,255,0.08)" }}>
                      <span className="font-mono uppercase" style={{ fontSize: "9px", letterSpacing: "0.18em", color: "#E2E8F0" }}>
                        {photo.label}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              <div style={{ padding: "1.6rem 1.75rem 2rem" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.75rem" }}>
                  <span className="font-mono uppercase" style={{ fontSize: "9px", letterSpacing: "0.18em", color: "#F97316" }}>{project.category}</span>
                  <div style={{ width: "20px", height: "1px", background: "rgba(255,255,255,0.12)" }} />
                  <span className="font-mono uppercase" style={{ fontSize: "9px", letterSpacing: "0.18em", color: "#64748B" }}>Job 0{index + 1}</span>
                </div>
                <h3 className="font-serif" style={{ fontSize: "clamp(1.35rem, 2.2vw, 1.7rem)", color: "#FFFFFF", fontStyle: "italic", letterSpacing: "-0.01em", lineHeight: 1.05, marginBottom: "0.75rem" }}>
                  {project.title}
                </h3>
                <p className="font-body" style={{ fontSize: "0.9rem", color: "#94A3B8", lineHeight: 1.65 }}>
                  {project.desc}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
