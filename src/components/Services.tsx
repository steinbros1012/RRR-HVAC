"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const services = [
  { title: "AC Repair", desc: "Your air conditioning breaks at the worst time. We diagnose fast and restore comfort — same day whenever possible.", tag: "Most Requested" },
  { title: "AC Installation", desc: "New cooling system, sized and installed right the first time, with minimal disruption to your day.", tag: null },
  { title: "Furnace Repair", desc: "No heat in a South Dakota winter is serious. We respond fast and get your furnace running again.", tag: "Emergency Priority" },
  { title: "Furnace Installation", desc: "We'll recommend the right furnace for your home and budget, then install it cleanly and correctly.", tag: null },
  { title: "Heating Service", desc: "Annual tune-ups extend system life, lower bills, and catch small problems before they become expensive.", tag: null },
  { title: "AC Service", desc: "Seasonal tune-up covers cleaning, refrigerant check, and full inspection so your summer stays cool.", tag: null },
  { title: "HVAC Maintenance", desc: "Preventative maintenance plans keep your system healthy and your bills predictable year-round.", tag: null },
  { title: "Emergency Help", desc: "System fails at midnight in January? That's a real emergency. We treat it like one.", tag: "24/7 Available" },
  { title: "System Replacement", desc: "Old, inefficient system dragging up your bills? We'll walk you through options and replace it right.", tag: null },
  { title: "Diagnostics", desc: "Not sure what's wrong? Mike digs in, explains what he finds, and gives you a straight answer. No runaround.", tag: "Expert Diagnosis" },
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
      style={{ background: "#f2f2f2" }}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Section header */}
        <div ref={titleRef} className="opacity-0 mb-14">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-6 h-px" style={{ background: "#f97316" }} />
            <span
              className="font-satoshi text-[11px] tracking-[0.2em] uppercase"
              style={{ color: "#f97316" }}
            >
              What We Do
            </span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-5">
            <h2
              className="font-clash font-bold leading-none"
              style={{
                fontSize: "clamp(2.4rem, 5.5vw, 4rem)",
                letterSpacing: "-0.04em",
                color: "#111111",
              }}
            >
              Full-Service Heating
              <br />& Cooling
            </h2>
            <p
              className="font-satoshi text-base leading-relaxed max-w-md"
              style={{ color: "#838282" }}
            >
              Whether it&apos;s a routine tune-up or an emergency at midnight, RRR HVAC is ready
              to keep Watertown homes and businesses comfortable.
            </p>
          </div>

          {/* Thin rule */}
          <div className="mt-8 h-px" style={{ background: "#e2e2e2" }} />
        </div>

        {/* Service grid */}
        <div ref={gridRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px" style={{ background: "#e2e2e2" }}>
          {services.map((s) => (
            <div
              key={s.title}
              className="svc-card opacity-0 group relative p-7 flex flex-col gap-4 transition-colors duration-200"
              style={{ background: "#f2f2f2" }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "#ffffff")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "#f2f2f2")}
            >
              {/* Tag */}
              {s.tag && (
                <span
                  className="absolute top-5 right-5 font-satoshi text-[10px] tracking-[0.12em] uppercase px-2.5 py-1 rounded-full"
                  style={{ border: "1px solid #f97316", color: "#f97316" }}
                >
                  {s.tag}
                </span>
              )}

              {/* Number indicator */}
              <span
                className="font-clash text-[11px] font-bold tracking-[0.15em] uppercase"
                style={{ color: "#d1d1d1" }}
              >
                {String(services.indexOf(s) + 1).padStart(2, "0")}
              </span>

              {/* Title */}
              <h3
                className="font-clash font-bold text-xl leading-tight pr-16 group-hover:text-[#f97316] transition-colors duration-200"
                style={{ letterSpacing: "-0.02em", color: "#111111" }}
              >
                {s.title}
              </h3>

              {/* Description */}
              <p className="font-satoshi text-sm leading-relaxed flex-1" style={{ color: "#838282" }}>
                {s.desc}
              </p>

              {/* Arrow hint */}
              <div className="flex items-center gap-2">
                <div className="w-5 h-px" style={{ background: "#d1d1d1" }} />
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#c9c9c9"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="group-hover:stroke-[#f97316] transition-colors duration-200"
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
