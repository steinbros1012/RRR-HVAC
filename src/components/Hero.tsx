"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import RolodexText from "./RolodexText";

const PHONE = "(605) 881-5622";

export default function Hero() {
  const taglineRef = useRef<HTMLDivElement>(null);
  const echoRef = useRef<HTMLDivElement>(null);
  const subRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const rulerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    // Sync with IntroAnimation: curtain fully open at ~1.7s, hero starts mid-reveal
    const tl = gsap.timeline({ delay: 1.35 });

    tl.fromTo(
      taglineRef.current,
      { opacity: 0, y: 16 },
      { opacity: 1, y: 0, duration: 0.5, ease: "power3.out" }
    )
      .fromTo(
        rulerRef.current,
        { scaleX: 0 },
        { scaleX: 1, duration: 0.6, ease: "power3.out", transformOrigin: "left center" },
        "-=0.3"
      )
      .fromTo(
        echoRef.current,
        { opacity: 0, y: 28, filter: "blur(4px)" },
        { opacity: 1, y: 0, filter: "blur(0px)", duration: 0.75, ease: "power3.out" },
        "-=0.4"
      )
      .fromTo(
        subRef.current,
        { opacity: 0, y: 16 },
        { opacity: 1, y: 0, duration: 0.55, ease: "power3.out" },
        "-=0.45"
      )
      .fromTo(
        ctaRef.current,
        { opacity: 0, y: 12 },
        { opacity: 1, y: 0, duration: 0.5, ease: "power3.out" },
        "-=0.35"
      );

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <section
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
      style={{ background: "#f2f2f2" }}
    >
      {/* Subtle texture dot grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, #d9d9d9 1px, transparent 1px)",
          backgroundSize: "36px 36px",
          opacity: 0.55,
        }}
      />

      {/* Faint orange glow — suggests warmth, not neon */}
      <div
        className="absolute top-0 right-0 w-[500px] h-[500px] pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 80% 20%, rgba(249,115,22,0.06) 0%, transparent 65%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 pt-32 pb-20 w-full">
        {/* Location tagline — editorial label style */}
        <div ref={taglineRef} className="opacity-0 flex items-center gap-4 mb-8">
          <span
            className="font-satoshi text-[11px] tracking-[0.2em] uppercase"
            style={{ color: "#838282" }}
          >
            Watertown, South Dakota
          </span>
          <span
            className="w-px h-3 inline-block"
            style={{ background: "#d9d9d9" }}
          />
          <span
            className="font-satoshi text-[11px] tracking-[0.2em] uppercase"
            style={{ color: "#f97316" }}
          >
            HVAC Rescue
          </span>
        </div>

        {/* Horizontal rule — editorial separator, reveals left→right */}
        <div
          ref={rulerRef}
          className="mb-10"
          style={{ height: "1px", background: "#d1d1d1", transformOrigin: "left center", transform: "scaleX(0)" }}
        />

        {/* Primary headline */}
        <div ref={echoRef} className="opacity-0 mb-8">
          <h1
            className="font-clash font-bold leading-none"
            style={{
              fontSize: "clamp(3.2rem, 9vw, 8rem)",
              letterSpacing: "-0.04em",
              color: "#111111",
            }}
          >
            Fast HVAC Help
            <br />
            When You Need It.
          </h1>
        </div>

        {/* Subheadline row — Rolodex inline + copy */}
        <div ref={subRef} className="opacity-0 mb-12">
          <div className="grid md:grid-cols-2 gap-6 items-start">
            <p
              className="font-satoshi text-lg leading-relaxed"
              style={{ color: "#838282", maxWidth: "460px" }}
            >
              RRR HVAC Rescue LLC serves Watertown, South Dakota with honest, expert heating and
              cooling service. Furnace out in the cold? AC down in the heat?{" "}
              <span style={{ color: "#111111", fontWeight: 500 }}>
                We show up fast and fix it right.
              </span>
            </p>
            {/* Rolodex word in a clean editorial callout */}
            <div
              className="hidden md:flex items-baseline gap-3"
              style={{ color: "#111111" }}
            >
              <span
                className="font-clash text-4xl font-bold"
                style={{ letterSpacing: "-0.03em" }}
              >
                We deliver
              </span>
              <span
                className="font-clash text-4xl font-bold"
                style={{ color: "#f97316", letterSpacing: "-0.03em" }}
              >
                <RolodexText
                  words={["comfort.", "speed.", "honesty.", "results."]}
                  className="text-[#f97316]"
                />
              </span>
            </div>
          </div>
        </div>

        {/* CTAs */}
        <div ref={ctaRef} className="opacity-0 flex flex-col sm:flex-row gap-4 items-start">
          <a
            href={`tel:${PHONE.replace(/\D/g, "")}`}
            className="inline-flex items-center gap-3 font-satoshi font-bold text-base px-8 py-4 rounded-full transition-all duration-150 hover:opacity-90 active:scale-[0.98]"
            style={{ background: "#111111", color: "#ffffff" }}
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.4 2 2 0 0 1 3.6 1.24h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.77a16 16 0 0 0 6.29 6.29l.95-.95a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            Call Now — {PHONE}
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 font-satoshi font-medium text-base px-8 py-4 rounded-full transition-all duration-150 text-[#111111] hover:bg-[#111111] hover:text-white"
            style={{ border: "1px solid #b6b5b5" }}
          >
            Request Service
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>

        {/* Bottom row trust marks */}
        <div className="mt-14 flex flex-wrap gap-8">
          {[
            "★★★★★ 5-Star Rated",
            "Licensed & Insured",
            "All Makes & Models",
            "Emergency Available",
          ].map((t) => (
            <span
              key={t}
              className="font-satoshi text-[12px] tracking-wide"
              style={{ color: "#b6b5b5" }}
            >
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* Scroll cue */}
      <div
        className="absolute bottom-8 left-8 flex flex-col items-start gap-2"
        style={{ color: "#b6b5b5" }}
      >
        <span className="font-satoshi text-[10px] tracking-[0.2em] uppercase">Scroll</span>
        <div
          className="w-px h-10 animate-pulse"
          style={{ background: "linear-gradient(to bottom, #b6b5b5, transparent)" }}
        />
      </div>
    </section>
  );
}
