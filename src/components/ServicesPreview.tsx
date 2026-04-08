"use client";

import { useState } from "react";

const services = [
  { num: "01", title: "AC Repair & Emergency Service", desc: "Same-day diagnosis and repair when your cooling fails." },
  { num: "02", title: "Furnace Repair & Installation", desc: "Emergency furnace calls answered fast — South Dakota winters don't wait." },
  { num: "03", title: "Full System Replacement", desc: "Sized right for your home, installed clean, explained fully." },
  { num: "04", title: "HVAC Maintenance & Tune-Ups", desc: "Annual service before the season hits — catch problems before they become emergencies." },
  { num: "05", title: "Diagnostics & Troubleshooting", desc: "Not sure what's wrong? Mike finds out and tells you straight — before any work begins." },
];

export default function ServicesPreview() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section style={{ background: "#080808", padding: "6rem 0", borderTop: "1px solid rgba(255,255,255,0.07)" }}>
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Header row */}
        <div
          style={{
            display: "flex",
            alignItems: "flex-end",
            justifyContent: "space-between",
            marginBottom: "3.5rem",
            flexWrap: "wrap",
            gap: "1.5rem",
          }}
        >
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.25rem" }}>
              <div style={{ width: "24px", height: "1px", background: "#F97316" }} />
              <span className="font-mono uppercase" style={{ fontSize: "11px", letterSpacing: "0.2em", color: "#F97316" }}>
                What We Do
              </span>
            </div>
            <h2 className="font-serif" style={{ fontSize: "clamp(2.4rem, 5vw, 3.8rem)", letterSpacing: "-0.02em", color: "#FFFFFF", fontStyle: "italic", lineHeight: 0.92 }}>
              Our services.
            </h2>
          </div>
          <a
            href="/services"
            className="font-mono uppercase inline-flex items-center gap-2"
            style={{ fontSize: "11px", letterSpacing: "0.12em", color: "#94A3B8", textDecoration: "none", transition: "color 0.15s", paddingBottom: "2px", borderBottom: "1px solid rgba(255,255,255,0.15)" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#FFFFFF")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#94A3B8")}
          >
            All Services
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>

        {/* Numbered list */}
        <div style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}>
          {services.map((s, i) => (
            <a
              key={s.num}
              href="/services"
              style={{ textDecoration: "none" }}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
            >
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "3rem 1fr auto",
                  alignItems: "center",
                  gap: "2rem",
                  borderBottom: "1px solid rgba(255,255,255,0.07)",
                  transition: "background 0.15s",
                  margin: "0 -1.25rem",
                  padding: "1.5rem 1.25rem",
                }}
                className="sm:mx-0 sm:px-0"
              >
                <span
                  className="font-mono"
                  style={{
                    fontSize: "11px",
                    letterSpacing: "0.1em",
                    color: hovered === i ? "#F97316" : "rgba(255,255,255,0.2)",
                    transition: "color 0.15s",
                  }}
                >
                  {s.num}
                </span>
                <div>
                  <div
                    className="font-serif"
                    style={{
                      fontSize: "clamp(1.1rem, 2.2vw, 1.4rem)",
                      color: hovered === i ? "#FFFFFF" : "#E2E8F0",
                      fontStyle: "italic",
                      letterSpacing: "-0.01em",
                      lineHeight: 1.15,
                      marginBottom: "0.3rem",
                      transition: "color 0.15s",
                    }}
                  >
                    {s.title}
                  </div>
                  <div
                    className="font-body"
                    style={{
                      fontSize: "0.875rem",
                      color: hovered === i ? "#94A3B8" : "#64748B",
                      lineHeight: 1.5,
                      transition: "color 0.15s",
                    }}
                  >
                    {s.desc}
                  </div>
                </div>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke={hovered === i ? "#F97316" : "rgba(255,255,255,0.2)"}
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  style={{ flexShrink: 0, transition: "stroke 0.15s, transform 0.15s", transform: hovered === i ? "translateX(4px)" : "none" }}
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
