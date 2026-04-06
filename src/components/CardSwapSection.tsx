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
// 700px gives enough dwell time to read each card comfortably.
const SCROLL_PER_STEP = 700;
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

      // ─── Initial state ───────────────────────────────────────────────────
      // Frame 0 (card 01) starts fully visible and readable.
      // All other frames start invisible and below (y: 20) — no z-fighting.
      gsap.set(frames[0], { opacity: 1, y: 0 });
      gsap.set(frames.slice(1), { opacity: 0, y: 24 });

      // ─── Progress fill bar ───────────────────────────────────────────────
      const progressFill = progressRef.current?.querySelector<HTMLElement>(".progress-fill");

      // ─── Timeline driven by scroll scrub ────────────────────────────────
      // Duration = 1 (normalized). Each step occupies 1/(n-1) of the timeline.
      // Within each step:
      //   0–55% → current frame dwells (readable)
      //   55–80% → current frame fades out (subtle lift, no fling)
      //   60–100% → next frame fades in (subtle drop-to-position)
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: stickyRef.current,
          start: "top top",
          end: `+=${TOTAL_SCROLL}`,
          pin: true,
          pinSpacing: true,
          scrub: 2,            // 2s lag = smooth, readable scrub
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            // Sync progress fill bar
            if (progressFill) {
              progressFill.style.width = `${self.progress * 100}%`;
            }
          },
        },
      });

      const step = 1 / (cards.length - 1);

      frames.forEach((frame, i) => {
        if (i === frames.length - 1) return; // last card never exits

        const stepStart = i * step;

        // Exit: current frame lifts slightly and fades out.
        // Starts at 55% into this step, ends at the step boundary.
        // This preserves a clean dwell window at the beginning of the step.
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

        // Entrance: next frame rises from y:24 to y:0, fading in.
        // Overlaps slightly with exit for a cross-fade feel.
        tl.fromTo(
          frames[i + 1],
          { opacity: 0, y: 24 },
          {
            opacity: 1,
            y: 0,
            duration: step * 0.45,
            ease: "power2.out",
          },
          stepStart + step * 0.6   // starts just after exit begins
        );
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section id="why">
      {/*
        stickyRef is what GSAP pins. No CSS sticky — that conflicts with GSAP pin.
        GSAP sets position:fixed during the pin and inserts a spacer = TOTAL_SCROLL px.
        No dead space results.
      */}
      <div
        ref={stickyRef}
        className="h-screen overflow-hidden flex flex-col"
        style={{ background: "#ffffff" }}
      >
        {/* ── Top meta row ─────────────────────────────────────────────────── */}
        <div
          className="flex-shrink-0 flex items-center justify-between px-5 sm:px-8 max-w-7xl mx-auto w-full"
          style={{ paddingTop: "72px", paddingBottom: "0" }}
        >
          <div className="flex items-center gap-3">
            <div className="w-6 h-px" style={{ background: "#f97316" }} />
            <span
              className="font-satoshi text-[11px] tracking-[0.2em] uppercase"
              style={{ color: "#f97316" }}
            >
              Why RRR HVAC
            </span>
          </div>
          <span
            className="font-satoshi text-[11px] tracking-[0.15em] uppercase"
            style={{ color: "#b6b5b5" }}
          >
            {cards.length} Commitments
          </span>
        </div>

        {/* ── Card frame area — all frames stacked, cross-fade via GSAP ────── */}
        <div
          ref={framesRef}
          className="flex-1 relative max-w-7xl mx-auto w-full px-5 sm:px-8"
        >
          {cards.map((card, i) => (
            <div
              key={card.number}
              className="narrative-frame absolute inset-0 flex flex-col justify-center"
              style={{
                // px already on parent, so no extra padding needed
                paddingLeft: 0,
                paddingRight: 0,
              }}
            >
              {/* Large editorial number */}
              <div
                className="font-clash font-bold select-none leading-none mb-6"
                style={{
                  fontSize: "clamp(5rem, 14vw, 11rem)",
                  letterSpacing: "-0.05em",
                  color: "#f2f2f2", // light gray — large, structural, not dominant
                  lineHeight: 1,
                }}
                aria-hidden="true"
              >
                {card.number}
              </div>

              {/* Card title */}
              <h2
                className="font-clash font-bold leading-tight mb-5"
                style={{
                  fontSize: "clamp(1.8rem, 4.5vw, 3.5rem)",
                  letterSpacing: "-0.04em",
                  color: "#111111",
                  maxWidth: "18ch",
                }}
              >
                {card.title}
              </h2>

              {/* Body */}
              <p
                className="font-satoshi text-lg leading-relaxed mb-8"
                style={{ color: "#838282", maxWidth: "520px" }}
              >
                {card.desc}
              </p>

              {/* CTA on last card */}
              {i === cards.length - 1 && (
                <a
                  href="tel:6055550100"
                  className="inline-flex items-center gap-3 font-satoshi font-medium text-sm px-6 py-3 rounded-full transition-all duration-150 hover:opacity-80"
                  style={{ background: "#111111", color: "#ffffff" }}
                >
                  Get Help Today
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </a>
              )}

              {/* Counter label */}
              <div className="mt-auto pb-6 pt-4">
                <span
                  className="font-satoshi text-[11px] tracking-[0.15em] uppercase"
                  style={{ color: "#d1d1d1" }}
                >
                  {card.number} / {String(cards.length).padStart(2, "0")}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* ── Progress bar at bottom ─────────────────────────────────────── */}
        <div
          ref={progressRef}
          className="flex-shrink-0 max-w-7xl mx-auto w-full px-5 sm:px-8 pb-6"
        >
          <div className="h-px w-full relative" style={{ background: "#e2e2e2" }}>
            <div
              className="progress-fill absolute left-0 top-0 h-full transition-none"
              style={{ background: "#111111", width: "0%" }}
            />
          </div>
        </div>
      </div>

      {/* Mobile fallback: static editorial list */}
      <div className="md:hidden py-16 px-5" style={{ background: "#ffffff" }}>
        <div className="flex items-center gap-3 mb-10">
          <div className="w-6 h-px" style={{ background: "#f97316" }} />
          <span className="font-satoshi text-[11px] tracking-[0.2em] uppercase text-[#f97316]">
            Why RRR HVAC
          </span>
        </div>
        <div className="space-y-10">
          {cards.map((card) => (
            <div key={card.number} className="border-b border-[#e2e2e2] pb-10 last:border-0">
              <div
                className="font-clash font-bold text-6xl leading-none mb-4 select-none"
                style={{ color: "#f2f2f2", letterSpacing: "-0.05em" }}
              >
                {card.number}
              </div>
              <h3
                className="font-clash font-bold text-2xl leading-tight mb-3"
                style={{ color: "#111111", letterSpacing: "-0.03em" }}
              >
                {card.title}
              </h3>
              <p className="font-satoshi text-base leading-relaxed" style={{ color: "#838282" }}>
                {card.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
