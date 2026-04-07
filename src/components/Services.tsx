"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const featured = [
  {
    number: "01",
    title: "AC Repair",
    desc: "When your air conditioning fails in the middle of a South Dakota summer, response time matters. Mike diagnoses fast, explains the problem clearly, and gets your system running — same day whenever possible.",
  },
  {
    number: "02",
    title: "Furnace Repair",
    desc: "A furnace failure in a South Dakota winter is a real emergency. RRR HVAC responds quickly, works efficiently, and doesn't leave until your heat is back on and the system is stable.",
  },
  {
    number: "03",
    title: "Installation",
    desc: "New system installs done right the first time — sized correctly for your home, installed cleanly, and explained fully. No upsells. No shortcuts. Trane equipment available.",
  },
];

const secondary = [
  {
    title: "Heating Service",
    desc: "Annual tune-ups before the cold hits.",
  },
  {
    title: "AC Service",
    desc: "Seasonal inspection and refrigerant check.",
  },
  {
    title: "HVAC Maintenance",
    desc: "Preventative plans for year-round reliability.",
  },
  {
    title: "Emergency Help",
    desc: "Available for urgent situations — we pick up.",
  },
  {
    title: "Diagnostics",
    desc: "Not sure what's wrong? We find out and tell you straight.",
  },
  {
    title: "System Replacement",
    desc: "Old, inefficient system? We walk you through the right options.",
  },
];

export default function Services() {
  const sectionRef = useRef<HTMLElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);
  const rightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        leftRef.current,
        { opacity: 0, y: 24 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: "power3.out",
          scrollTrigger: { trigger: leftRef.current, start: "top 85%" },
        }
      );

      gsap.fromTo(
        rightRef.current?.querySelectorAll(".featured-item") ?? [],
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power3.out",
          stagger: 0.1,
          scrollTrigger: { trigger: rightRef.current, start: "top 82%" },
        }
      );

      gsap.fromTo(
        rightRef.current?.querySelectorAll(".secondary-item") ?? [],
        { opacity: 0 },
        {
          opacity: 1,
          duration: 0.5,
          ease: "power2.out",
          stagger: 0.06,
          scrollTrigger: { trigger: rightRef.current, start: "top 70%" },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="services"
      ref={sectionRef}
      style={{
        background: "#080808",
        padding: "6rem 0",
        borderTop: "1px solid rgba(255,255,255,0.06)",
      }}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid md:grid-cols-[1fr_1.65fr] gap-16 lg:gap-24 items-start">

          {/* ── Left: editorial frame ─────────────────────────────────────── */}
          <div ref={leftRef} style={{ opacity: 0 }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.75rem",
                marginBottom: "2rem",
              }}
            >
              <div style={{ width: "24px", height: "1px", background: "#F97316" }} />
              <span
                className="font-mono uppercase"
                style={{ fontSize: "11px", letterSpacing: "0.2em", color: "#F97316" }}
              >
                Services
              </span>
            </div>

            <h2
              className="font-serif"
              style={{
                fontSize: "clamp(2.2rem, 4.5vw, 3.4rem)",
                letterSpacing: "-0.02em",
                color: "#FFFFFF",
                fontStyle: "italic",
                lineHeight: 0.9,
                marginBottom: "1.75rem",
              }}
            >
              Heating &amp; cooling
              built for South
              Dakota weather.
            </h2>

            <p
              className="font-body"
              style={{
                fontSize: "0.9375rem",
                color: "#64748B",
                lineHeight: 1.7,
                maxWidth: "340px",
                marginBottom: "2.5rem",
              }}
            >
              Honest repair, clean installs, and fast emergency response — from routine
              maintenance to full system replacement, every job is done the right way.
            </p>

            {/* Sticky trust detail */}
            <div
              style={{
                borderTop: "1px solid rgba(255,255,255,0.06)",
                paddingTop: "1.5rem",
              }}
            >
              <p
                className="font-mono uppercase"
                style={{
                  fontSize: "10px",
                  letterSpacing: "0.14em",
                  color: "rgba(255,255,255,0.25)",
                  lineHeight: 1.8,
                }}
              >
                All Makes &amp; Models
                <br />
                Trane Equipment Available
                <br />
                Licensed &amp; Insured · Watertown, SD
              </p>
            </div>
          </div>

          {/* ── Right: services ───────────────────────────────────────────── */}
          <div ref={rightRef}>

            {/* Featured — 3 primary services */}
            <div>
              {featured.map((item, i) => (
                <div
                  key={item.title}
                  className="featured-item"
                  style={{
                    opacity: 0,
                    paddingTop: i === 0 ? 0 : "1.75rem",
                    paddingBottom: "1.75rem",
                    borderBottom: "1px solid rgba(255,255,255,0.07)",
                    display: "grid",
                    gridTemplateColumns: "2.5rem 1fr",
                    gap: "1.25rem",
                    alignItems: "start",
                  }}
                >
                  {/* Faint ordinal */}
                  <span
                    className="font-mono"
                    style={{
                      fontSize: "11px",
                      letterSpacing: "0.1em",
                      color: "rgba(255,255,255,0.18)",
                      paddingTop: "0.2rem",
                    }}
                  >
                    {item.number}
                  </span>

                  <div>
                    <h3
                      className="font-serif"
                      style={{
                        fontSize: "clamp(1.3rem, 2.5vw, 1.65rem)",
                        color: "#FFFFFF",
                        fontStyle: "italic",
                        letterSpacing: "-0.01em",
                        lineHeight: 1,
                        marginBottom: "0.75rem",
                      }}
                    >
                      {item.title}
                    </h3>
                    <p
                      className="font-body"
                      style={{
                        fontSize: "0.875rem",
                        color: "#64748B",
                        lineHeight: 1.7,
                        maxWidth: "420px",
                      }}
                    >
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Secondary — supporting services, visually quiet */}
            <div style={{ marginTop: "2.5rem" }}>
              <p
                className="font-mono uppercase"
                style={{
                  fontSize: "10px",
                  letterSpacing: "0.18em",
                  color: "rgba(255,255,255,0.2)",
                  marginBottom: "1.25rem",
                }}
              >
                Also Available
              </p>

              <div
                className="grid grid-cols-1 sm:grid-cols-2"
                style={{ gap: "0", borderTop: "1px solid rgba(255,255,255,0.05)" }}
              >
                {secondary.map((item, i) => (
                  <div
                    key={item.title}
                    className="secondary-item"
                    style={{
                      opacity: 0,
                      padding: "1rem 0",
                      borderBottom: "1px solid rgba(255,255,255,0.05)",
                      paddingRight: i % 2 === 0 ? "2rem" : "0",
                    }}
                  >
                    <span
                      className="font-body"
                      style={{
                        fontSize: "0.875rem",
                        color: "#E2E8F0",
                        display: "block",
                        marginBottom: "0.2rem",
                      }}
                    >
                      {item.title}
                    </span>
                    <span
                      className="font-body"
                      style={{
                        fontSize: "0.8125rem",
                        color: "rgba(100,116,139,0.75)",
                        lineHeight: 1.5,
                      }}
                    >
                      {item.desc}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
