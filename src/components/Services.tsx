"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    title: "AC Repair",
    desc: "Your air conditioning breaks at the worst time. We diagnose fast and restore comfort — same day whenever possible.",
    tag: "Most Requested",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="2" x2="12" y2="22"/>
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
        <polyline points="8 2 12 6 16 2"/>
        <polyline points="8 22 12 18 16 22"/>
      </svg>
    ),
  },
  {
    title: "AC Installation",
    desc: "New cooling system, sized and installed right the first time, with minimal disruption to your day.",
    tag: null,
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9.59 4.59A2 2 0 1 1 11 8H2m10.59 11.41A2 2 0 1 0 14 16H2m15.73-8.27A2.5 2.5 0 1 1 19.5 12H2"/>
      </svg>
    ),
  },
  {
    title: "Furnace Repair",
    desc: "No heat in a South Dakota winter is serious. We respond fast and get your furnace running again.",
    tag: "Emergency Priority",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2c0 0-7 4.5-7 11a7 7 0 0 0 14 0c0-4.5-3-7-7-11z"/>
        <path d="M12 12c0 0-3 1.5-3 4a3 3 0 0 0 6 0c0-2.5-3-4-3-4z"/>
      </svg>
    ),
  },
  {
    title: "Furnace Installation",
    desc: "We'll recommend the right furnace for your home and budget, then install it cleanly and correctly.",
    tag: null,
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
        <polyline points="9 22 9 12 15 12 15 22"/>
      </svg>
    ),
  },
  {
    title: "Heating Service",
    desc: "Annual tune-ups extend system life, lower bills, and catch small problems before they become expensive.",
    tag: null,
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z"/>
      </svg>
    ),
  },
  {
    title: "AC Service",
    desc: "Seasonal tune-up covers cleaning, refrigerant check, and full inspection so your summer stays cool.",
    tag: null,
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
      </svg>
    ),
  },
  {
    title: "HVAC Maintenance",
    desc: "Preventative maintenance plans keep your system healthy and your bills predictable year-round.",
    tag: null,
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3"/>
        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/>
      </svg>
    ),
  },
  {
    title: "Emergency Help",
    desc: "System fails at midnight in January? That's a real emergency. We treat it like one.",
    tag: "24/7 Available",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
      </svg>
    ),
  },
  {
    title: "System Replacement",
    desc: "Old, inefficient system dragging up your bills? We'll walk you through options and replace it right.",
    tag: null,
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="23 4 23 10 17 10"/>
        <polyline points="1 20 1 14 7 14"/>
        <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/>
      </svg>
    ),
  },
  {
    title: "Diagnostics",
    desc: "Not sure what's wrong? Mike digs in, explains what he finds, and gives you a straight answer. No runaround.",
    tag: "Expert Diagnosis",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8"/>
        <line x1="21" y1="21" x2="16.65" y2="16.65"/>
      </svg>
    ),
  },
];

export default function Services() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        titleRef.current,
        { opacity: 0, y: 24 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: "power3.out",
          scrollTrigger: { trigger: titleRef.current, start: "top 88%" },
        }
      );

      gsap.fromTo(
        gridRef.current?.querySelectorAll(".svc-card") ?? [],
        { opacity: 0, y: 32 },
        {
          opacity: 1,
          y: 0,
          duration: 0.55,
          ease: "power3.out",
          stagger: 0.06,
          scrollTrigger: { trigger: gridRef.current, start: "top 82%" },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="services"
      ref={sectionRef}
      className="py-20 sm:py-28"
      style={{ background: "#080808" }}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Section header */}
        <div ref={titleRef} className="opacity-0 mb-14">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-6 h-px" style={{ background: "#F97316" }} />
            <span
              className="font-mono uppercase"
              style={{ fontSize: "11px", letterSpacing: "0.2em", color: "#F97316" }}
            >
              What We Do
            </span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-5">
            <h2
              className="font-serif"
              style={{
                fontSize: "clamp(2.4rem, 5.5vw, 4rem)",
                letterSpacing: "-0.02em",
                color: "#FFFFFF",
                fontStyle: "italic",
                lineHeight: 0.92,
              }}
            >
              Full-Service Heating
              <br />&amp; Cooling
            </h2>
            <p
              className="font-body text-base leading-relaxed max-w-md"
              style={{ color: "#64748B" }}
            >
              Whether it&apos;s a routine tune-up or an emergency at midnight, RRR HVAC is ready
              to keep Watertown homes and businesses comfortable.
            </p>
          </div>

          <div className="mt-8 h-px" style={{ background: "rgba(255,255,255,0.06)" }} />
        </div>

        {/* Service grid */}
        <div
          ref={gridRef}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px"
          style={{ background: "rgba(255,255,255,0.06)" }}
        >
          {services.map((s, idx) => (
            <div
              key={s.title}
              className="svc-card opacity-0 group relative p-7 flex flex-col gap-4 transition-colors duration-200"
              style={{ background: "#0f0f0f" }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "#141414")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "#0f0f0f")}
            >
              {/* Tag */}
              {s.tag && (
                <span
                  className="font-mono uppercase absolute top-5 right-5"
                  style={{
                    fontSize: "10px",
                    letterSpacing: "0.12em",
                    padding: "4px 10px",
                    border: "1px solid #F97316",
                    color: "#F97316",
                  }}
                >
                  {s.tag}
                </span>
              )}

              {/* Icon block */}
              <div
                className="w-11 h-11 flex items-center justify-center flex-shrink-0"
                style={{
                  background: "rgba(249,115,22,0.12)",
                  color: "#F97316",
                  borderRadius: "0.5rem",
                }}
              >
                {s.icon}
              </div>

              {/* Title */}
              <h3
                className="font-serif text-xl leading-tight pr-12 transition-colors duration-200 group-hover:text-[#F97316]"
                style={{ color: "#FFFFFF" }}
              >
                {s.title}
              </h3>

              {/* Description */}
              <p className="font-body text-sm leading-relaxed flex-1" style={{ color: "#64748B" }}>
                {s.desc}
              </p>

              {/* Bottom: index + arrow */}
              <div
                className="flex items-center justify-between pt-2"
                style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
              >
                <span
                  className="font-mono"
                  style={{ fontSize: "11px", letterSpacing: "0.12em", color: "rgba(255,255,255,0.2)" }}
                >
                  {String(idx + 1).padStart(2, "0")}
                </span>
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="rgba(255,255,255,0.2)"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="group-hover:stroke-[#F97316] transition-colors duration-200"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
