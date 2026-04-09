"use client";

import { useEffect, useRef, useState } from "react";

const values = [
  { title: "Show Up On Time", desc: "Scheduling with RRR means Mike is at your door when he says he will be. No four-hour windows. No excuses." },
  { title: "Explain Everything", desc: "Mike diagnoses your system and explains what's wrong in plain language before any work begins. No surprises." },
  { title: "Fix It Right", desc: "Every repair is done to last. If something isn't right, we come back and make it right. Simple as that." },
  { title: "Leave It Clean", desc: "Your home or business looks exactly as it did when Mike arrived — or better. The job isn't done until the site is." },
];

export default function AboutValues() {
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
            setTimeout(() => setVisible((prev) => new Set([...prev, i])), i * 120);
            obs.unobserve(el);
          }
        },
        { threshold: 0.1 }
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <div className="grid sm:grid-cols-2 gap-px" style={{ background: "rgba(255,255,255,0.06)" }}>
      {values.map((v, i) => (
        <div
          key={v.title}
          ref={(el) => { refs.current[i] = el; }}
          onMouseEnter={() => setHovered(i)}
          onMouseLeave={() => setHovered(null)}
          className="p-8"
          style={{
            background: hovered === i ? "#1a1a1a" : i % 2 === 0 ? "#141414" : "#0f0f0f",
            borderTop: hovered === i ? "1px solid rgba(249,115,22,0.3)" : "1px solid transparent",
            opacity: visible.has(i) ? 1 : 0,
            transform: visible.has(i) ? "none" : "translateY(24px)",
            transition: `opacity 0.6s ease ${i * 120}ms, transform 0.6s ease ${i * 120}ms, background 0.2s ease, border-color 0.2s ease`,
          }}
        >
          <div
            className="font-serif text-4xl leading-none mb-4 select-none"
            style={{ color: hovered === i ? "rgba(249,115,22,0.15)" : "rgba(255,255,255,0.06)", letterSpacing: "-0.04em", fontStyle: "italic", transition: "color 0.2s" }}
            aria-hidden="true"
          >
            {String(i + 1).padStart(2, "0")}
          </div>
          <h3 className="font-serif text-xl leading-tight mb-3" style={{ color: "#FFFFFF", fontStyle: "italic" }}>
            {v.title}
          </h3>
          <p className="font-body text-sm leading-relaxed" style={{ color: hovered === i ? "#94A3B8" : "#64748B", transition: "color 0.2s" }}>
            {v.desc}
          </p>
        </div>
      ))}
    </div>
  );
}
