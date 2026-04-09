"use client";

import { useEffect, useRef, useState } from "react";

const services = [
  { num: "01", title: "AC Repair", desc: "Fast diagnosis and same-day repair when your cooling fails in the South Dakota heat." },
  { num: "02", title: "Furnace Repair", desc: "Emergency furnace calls answered fast. No waiting — we know South Dakota winters." },
  { num: "03", title: "AC Installation", desc: "New system? Sized correctly for your home, installed clean, and explained fully." },
  { num: "04", title: "Furnace Installation", desc: "High-efficiency furnace installs with updated venting and proper gas connections." },
  { num: "05", title: "Full System Replacement", desc: "Old system draining your wallet? We walk you through the right options — no pressure." },
  { num: "06", title: "HVAC Maintenance", desc: "Annual tune-ups before the season hits. Catch small problems before they become emergencies." },
  { num: "07", title: "Diagnostics & Troubleshooting", desc: "Not sure what's wrong? Mike finds out and tells you straight before any work begins." },
  { num: "08", title: "Emergency Service", desc: "Furnace down at midnight? We pick up. Watertown and surrounding areas, 7 days." },
];

export default function ServicesGrid() {
  const [visible, setVisible] = useState<Set<number>>(new Set());
  const [hovered, setHovered] = useState<number | null>(null);
  const refs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    refs.current.forEach((el, i) => {
      if (!el) return;
      const obs = new IntersectionObserver(
        ([e]) => {
          if (e.isIntersecting) {
            setTimeout(() => setVisible((prev) => new Set([...prev, i])), i * 80);
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
    <section style={{ background: "#080808", paddingTop: "0", paddingBottom: "0", borderBottom: "1px solid rgba(255,255,255,0.07)" }}>
      <div className="grid md:grid-cols-2" style={{ gap: "2px", background: "rgba(255,255,255,0.05)" }}>
        {services.map((s, i) => (
          <div
            key={s.num}
            ref={(el) => { refs.current[i] = el; }}
            onMouseEnter={() => setHovered(i)}
            onMouseLeave={() => setHovered(null)}
            style={{
              background: hovered === i ? "#141414" : "#0d0d0d",
              border: "1px solid rgba(255,255,255,0.07)",
              borderLeft: hovered === i ? "1px solid rgba(249,115,22,0.4)" : "1px solid rgba(255,255,255,0.07)",
              padding: "2rem",
              opacity: visible.has(i) ? 1 : 0,
              transform: visible.has(i) ? "none" : "translateY(18px)",
              transition: `opacity 0.55s ease, transform 0.55s ease, background 0.2s ease, border-color 0.2s ease`,
            }}
          >
            <div className="font-mono" style={{ fontSize: "10px", letterSpacing: "0.18em", color: hovered === i ? "#F97316" : "#F97316", marginBottom: "1rem", transition: "color 0.2s" }}>
              {s.num}
            </div>
            <h3 className="font-serif" style={{ fontSize: "1.4rem", color: hovered === i ? "#FFFFFF" : "#FFFFFF", fontStyle: "italic", marginBottom: "0.75rem", lineHeight: 1.2 }}>
              {s.title}
            </h3>
            <div style={{ height: "1px", background: hovered === i ? "rgba(249,115,22,0.2)" : "rgba(255,255,255,0.06)", marginBottom: "0.875rem", transition: "background 0.2s" }} />
            <p className="font-body" style={{ color: hovered === i ? "#CBD5E1" : "#94A3B8", fontSize: "0.9375rem", lineHeight: 1.65, transition: "color 0.2s" }}>
              {s.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
