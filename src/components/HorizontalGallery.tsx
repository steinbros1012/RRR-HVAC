"use client";

import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const panels = [
  {
    step: "01",
    title: "You Call.\nWe Answer.",
    desc: "No call centers, no menus. When you need HVAC help in Watertown, you reach Mike directly.",
  },
  {
    step: "02",
    title: "Fast, Accurate\nDiagnosis",
    desc: "Mike arrives on time, assesses your system thoroughly, and explains what's wrong in plain language.",
  },
  {
    step: "03",
    title: "Upfront Pricing.\nNo Surprises.",
    desc: "Before any work begins, you get a clear quote. We don't add fees midway or upsell things you don't need.",
  },
  {
    step: "04",
    title: "Expert Repair\nor Install",
    desc: "Mike works efficiently, doesn't cut corners, and every repair is made to last. Always.",
  },
  {
    step: "05",
    title: "Clean Site.\nSatisfied Customer.",
    desc: "When we're done, your home looks exactly as it did before we arrived — or better.",
  },
];

export default function HorizontalGallery() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (typeof window === "undefined") return;
    if (window.innerWidth < 768) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    let ctx: gsap.Context | null = null;

    const timer = setTimeout(() => {
      ctx = gsap.context(() => {
        const section = sectionRef.current;
        const track = trackRef.current;
        if (!section || !track) return;

        const distance = track.scrollWidth - section.offsetWidth;
        if (distance <= 0) return;

        gsap.to(track, {
          x: -distance,
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: `+=${distance}`,
            pin: true,
            scrub: 1,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        });
      });
    }, 150);

    return () => {
      clearTimeout(timer);
      ctx?.revert();
    };
  }, []);

  return (
    <>
      {/* ── Desktop: horizontal pin ───────────────────────────────────────── */}
      <div
        ref={sectionRef}
        className="hidden md:flex flex-col overflow-hidden"
        style={{ height: "100vh", background: "#111111" }}
      >
        {/* Title row */}
        <div className="flex-shrink-0 flex items-end justify-between max-w-7xl mx-auto w-full px-8 pt-16 pb-6">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-6 h-px" style={{ background: "#f97316" }} />
              <span
                className="font-satoshi text-[11px] tracking-[0.2em] uppercase"
                style={{ color: "#f97316" }}
              >
                Our Process
              </span>
            </div>
            <h2
              className="font-clash font-bold leading-none"
              style={{
                fontSize: "clamp(2rem, 4vw, 3rem)",
                letterSpacing: "-0.04em",
                color: "#ffffff",
              }}
            >
              How RRR HVAC Works
            </h2>
          </div>
          <span
            className="font-satoshi text-[11px] tracking-widest uppercase"
            style={{ color: "#838282" }}
          >
            Scroll →
          </span>
        </div>

        {/* Horizontal track */}
        <div className="flex-1 overflow-hidden">
          <div
            ref={trackRef}
            className="flex h-full gap-px"
            style={{ paddingLeft: "5vw", paddingRight: "8vw", background: "#2a2a2a" }}
          >
            {panels.map((panel, i) => (
              <div
                key={panel.step}
                className="flex-shrink-0 w-[420px] h-full flex flex-col justify-between p-10"
                style={{ background: i % 2 === 0 ? "#141414" : "#0f0f0f" }}
              >
                <div>
                  {/* Step indicator */}
                  <div className="flex items-center gap-3 mb-8">
                    <span
                      className="font-clash font-bold text-4xl leading-none"
                      style={{ color: "#2a2a2a", letterSpacing: "-0.04em" }}
                    >
                      {panel.step}
                    </span>
                    <div className="w-8 h-px" style={{ background: "#2a2a2a" }} />
                    <span
                      className="font-satoshi text-[10px] tracking-[0.15em] uppercase"
                      style={{ color: "#838282" }}
                    >
                      Step {panel.step}
                    </span>
                  </div>

                  {/* Title */}
                  <h3
                    className="font-clash font-bold leading-tight mb-5 whitespace-pre-line"
                    style={{
                      fontSize: "clamp(1.6rem, 2.5vw, 2.2rem)",
                      letterSpacing: "-0.03em",
                      color: "#ffffff",
                    }}
                  >
                    {panel.title}
                  </h3>

                  <p
                    className="font-satoshi text-base leading-relaxed"
                    style={{ color: "#838282" }}
                  >
                    {panel.desc}
                  </p>
                </div>

                {/* Bottom accent */}
                <div className="flex items-center justify-between">
                  <div className="w-8 h-px" style={{ background: "#f97316", opacity: 0.5 }} />
                  <span
                    className="font-satoshi text-[10px] tracking-[0.15em] uppercase"
                    style={{ color: "#2a2a2a" }}
                  >
                    {i + 1} / {panels.length}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Mobile: vertical stack ────────────────────────────────────────── */}
      <div className="md:hidden py-16 px-5" style={{ background: "#111111" }}>
        <div className="flex items-center gap-3 mb-3">
          <div className="w-6 h-px" style={{ background: "#f97316" }} />
          <span className="font-satoshi text-[11px] tracking-[0.2em] uppercase text-[#f97316]">
            Our Process
          </span>
        </div>
        <h2
          className="font-clash font-bold mb-10"
          style={{
            fontSize: "2rem",
            letterSpacing: "-0.04em",
            color: "#ffffff",
          }}
        >
          How RRR HVAC Works
        </h2>
        <div className="space-y-px" style={{ background: "#2a2a2a" }}>
          {panels.map((panel, i) => (
            <div
              key={panel.step}
              className="p-6"
              style={{ background: i % 2 === 0 ? "#141414" : "#0f0f0f" }}
            >
              <div className="flex items-center gap-3 mb-4">
                <span
                  className="font-clash font-bold text-3xl leading-none"
                  style={{ color: "#2a2a2a", letterSpacing: "-0.04em" }}
                >
                  {panel.step}
                </span>
              </div>
              <h3
                className="font-clash font-bold text-xl leading-tight mb-3 whitespace-pre-line"
                style={{ color: "#ffffff", letterSpacing: "-0.02em" }}
              >
                {panel.title}
              </h3>
              <p className="font-satoshi text-sm leading-relaxed" style={{ color: "#838282" }}>
                {panel.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
