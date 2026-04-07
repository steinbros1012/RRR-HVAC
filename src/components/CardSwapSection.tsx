"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const cards = [
  {
    number: "01",
    title: "We Show Up When We Say We Will",
    desc: "Mike schedules a time and keeps it. No four-hour windows. No last-minute cancellations. Your time is respected.",
  },
  {
    number: "02",
    title: "Honest Diagnosis. No Surprise Bills.",
    desc: "We tell you exactly what's wrong and what it costs before we touch anything. No upsells. No runaround.",
  },
  {
    number: "03",
    title: "Fast Response — Especially in Emergencies",
    desc: "Furnace dies at 2am in a South Dakota winter? That's a real emergency. We take it seriously and respond fast.",
  },
  {
    number: "04",
    title: "Clean Work. Every Time.",
    desc: "We leave your home exactly as we found it — or cleaner. The job isn't done until the site is right.",
  },
  {
    number: "05",
    title: "Local. Invested. Here to Stay.",
    desc: "We're not a franchise or a call center. We're your neighbors in Watertown, and we stand behind our work completely.",
  },
];

// Scroll distance allocated per card-to-card transition.
const SCROLL_PER_STEP = 450;
const TOTAL_SCROLL = (cards.length - 1) * SCROLL_PER_STEP;

export default function CardSwapSection() {
  const stickyRef = useRef<HTMLDivElement>(null);
  const framesRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = gsap.context(() => {
      const frames = Array.from(
        framesRef.current?.querySelectorAll<HTMLElement>(".narrative-frame") ?? []
      );
      if (frames.length === 0) return;

      gsap.set(frames[0], { opacity: 1, y: 0 });
      gsap.set(frames.slice(1), { opacity: 0, y: 24 });

      const progressFill = progressRef.current?.querySelector<HTMLElement>(".progress-fill");

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: stickyRef.current,
          start: "top top",
          end: `+=${TOTAL_SCROLL}`,
          pin: true,
          pinSpacing: true,
          scrub: 1.2,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            if (progressFill) {
              progressFill.style.width = `${self.progress * 100}%`;
            }
          },
        },
      });

      const step = 1 / (cards.length - 1);

      frames.forEach((frame, i) => {
        if (i === frames.length - 1) return;

        const stepStart = i * step;

        tl.to(
          frame,
          {
            opacity: 0,
            y: -16,
            duration: step * 0.45,
            ease: "power2.inOut",
          },
          stepStart + step * 0.55
        );

        tl.fromTo(
          frames[i + 1],
          { opacity: 0, y: 24 },
          {
            opacity: 1,
            y: 0,
            duration: step * 0.45,
            ease: "power2.out",
          },
          stepStart + step * 0.6
        );
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section id="why">
      <div
        ref={stickyRef}
        className="h-screen overflow-hidden flex flex-col"
        style={{ background: "#0a0a0a" }}
      >
        {/* Top meta row */}
        <div
          className="flex-shrink-0 flex items-center justify-between px-5 sm:px-8 max-w-7xl mx-auto w-full"
          style={{ paddingTop: "72px", paddingBottom: "0" }}
        >
          <div className="flex items-center gap-3">
            <div className="w-6 h-px" style={{ background: "#F97316" }} />
            <span
              className="font-mono uppercase"
              style={{ fontSize: "11px", letterSpacing: "0.2em", color: "#F97316" }}
            >
              Why RRR HVAC
            </span>
          </div>
          <span
            className="font-mono uppercase"
            style={{ fontSize: "11px", letterSpacing: "0.15em", color: "#64748B" }}
          >
            {cards.length} Commitments
          </span>
        </div>

        {/* Card frame area */}
        <div
          ref={framesRef}
          className="flex-1 relative max-w-7xl mx-auto w-full px-5 sm:px-8"
        >
          {cards.map((card, i) => (
            <div
              key={card.number}
              className="narrative-frame absolute inset-0 flex flex-col justify-center"
              style={{ paddingLeft: 0, paddingRight: 0 }}
            >
              {/* Large editorial number */}
              <div
                className="font-serif select-none leading-none mb-6"
                style={{
                  fontSize: "clamp(5rem, 14vw, 11rem)",
                  letterSpacing: "-0.05em",
                  color: "rgba(255,255,255,0.06)",
                  lineHeight: 1,
                }}
                aria-hidden="true"
              >
                {card.number}
              </div>

              {/* Card title */}
              <h2
                className="font-serif leading-tight mb-5"
                style={{
                  fontSize: "clamp(1.8rem, 4.5vw, 3.5rem)",
                  letterSpacing: "-0.02em",
                  color: "#FFFFFF",
                  maxWidth: "18ch",
                  fontStyle: "italic",
                }}
              >
                {card.title}
              </h2>

              {/* Body */}
              <p
                className="font-body text-lg leading-relaxed mb-8"
                style={{ color: "#64748B", maxWidth: "520px" }}
              >
                {card.desc}
              </p>

              {/* CTA on last card */}
              {i === cards.length - 1 && (
                <a
                  href="tel:6058815622"
                  className="font-mono uppercase inline-flex items-center gap-3"
                  style={{
                    fontSize: "12px",
                    letterSpacing: "0.1em",
                    padding: "12px 24px",
                    borderRadius: "999px",
                    background: "#F97316",
                    color: "#000000",
                    textDecoration: "none",
                    fontWeight: 600,
                    transition: "opacity 0.15s",
                    width: "fit-content",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.85")}
                  onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
                >
                  Get Help Today
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </a>
              )}

              {/* Counter label */}
              <div className="mt-auto pb-6 pt-4">
                <span
                  className="font-mono"
                  style={{ fontSize: "11px", letterSpacing: "0.15em", color: "#64748B" }}
                >
                  {card.number} / {String(cards.length).padStart(2, "0")}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Progress bar */}
        <div
          ref={progressRef}
          className="flex-shrink-0 max-w-7xl mx-auto w-full px-5 sm:px-8 pb-6"
        >
          <div className="h-px w-full relative" style={{ background: "rgba(255,255,255,0.08)" }}>
            <div
              className="progress-fill absolute left-0 top-0 h-full transition-none"
              style={{ background: "#F97316", width: "0%" }}
            />
          </div>
        </div>
      </div>

      {/* Mobile fallback */}
      <div className="md:hidden py-16 px-5" style={{ background: "#0a0a0a" }}>
        <div className="flex items-center gap-3 mb-10">
          <div className="w-6 h-px" style={{ background: "#F97316" }} />
          <span className="font-mono uppercase" style={{ fontSize: "11px", letterSpacing: "0.2em", color: "#F97316" }}>
            Why RRR HVAC
          </span>
        </div>
        <div className="space-y-10">
          {cards.map((card) => (
            <div
              key={card.number}
              className="pb-10 last:border-0"
              style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}
            >
              <div
                className="font-serif text-6xl leading-none mb-4 select-none"
                style={{ color: "rgba(255,255,255,0.06)", letterSpacing: "-0.05em" }}
              >
                {card.number}
              </div>
              <h3
                className="font-serif text-2xl leading-tight mb-3"
                style={{ color: "#FFFFFF", fontStyle: "italic" }}
              >
                {card.title}
              </h3>
              <p className="font-body text-base leading-relaxed" style={{ color: "#64748B" }}>
                {card.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
