"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import RolodexText from "./RolodexText";

const PHONE = "(605) 555-0100";

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLDivElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const badgesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    // Delay matches intro animation: logo(0.55) + hold(0.65) + fade(0.25) + split(0.75) ≈ 1.7s
    // Hero starts at 1.35s so elements are rising as the curtain opens
    const tl = gsap.timeline({ delay: 1.35 });

    tl.fromTo(
      headlineRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power3.out" }
    )
    .fromTo(subRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" }, "-=0.5")
    .fromTo(ctaRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" }, "-=0.4")
    .fromTo(badgesRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" }, "-=0.4");

    return () => { tl.kill(); };
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
      style={{
        background: "radial-gradient(ellipse 80% 60% at 50% 0%, #0d2140 0%, #080c14 60%)",
      }}
    >
      {/* Atmospheric grid */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(249,115,22,0.5) 1px, transparent 1px),
            linear-gradient(90deg, rgba(249,115,22,0.5) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Glow orb */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(249,115,22,0.08) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 pt-28 pb-20">
        <div className="max-w-4xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/20 rounded-full px-4 py-1.5 mb-8">
            <div className="w-2 h-2 rounded-full bg-orange-400 animate-pulse" />
            <span className="text-orange-300 text-sm font-medium tracking-wide">Watertown&apos;s Trusted HVAC Experts</span>
          </div>

          {/* Headline */}
          <div ref={headlineRef} className="opacity-0">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black text-white leading-[1.05] tracking-tight mb-2">
              Fast HVAC Help<br />
              <span className="text-orange-400">When You Need It</span>
            </h1>
            <div className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-[1.1] tracking-tight mt-2">
              <span>We Deliver </span>
              <RolodexText
                words={["Comfort.", "Reliability.", "Speed.", "Results.", "Peace of Mind."]}
                className="text-orange-400"
              />
            </div>
          </div>

          {/* Subheadline */}
          <p ref={subRef} className="opacity-0 mt-8 text-slate-300 text-lg sm:text-xl max-w-2xl leading-relaxed">
            RRR HVAC Rescue LLC serves Watertown, South Dakota with honest, expert heating and cooling service.
            Furnace out in the cold? AC down in the heat? We show up fast and fix it right.
          </p>

          {/* CTAs */}
          <div ref={ctaRef} className="opacity-0 flex flex-col sm:flex-row gap-4 mt-10">
            <a
              href={`tel:${PHONE.replace(/\D/g, "")}`}
              className="inline-flex items-center justify-center gap-3 bg-orange-500 hover:bg-orange-400 text-white font-bold text-lg px-8 py-4 rounded-full transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-orange-500/20"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.4 2 2 0 0 1 3.6 1.24h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.77a16 16 0 0 0 6.29 6.29l.95-.95a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
              Call Now — {PHONE}
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 border border-white/20 hover:border-white/40 text-white font-semibold text-lg px-8 py-4 rounded-full transition-all duration-200 hover:bg-white/5"
            >
              Request Service
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </a>
          </div>

          {/* Trust badges */}
          <div ref={badgesRef} className="opacity-0 flex flex-wrap gap-6 mt-12">
            {[
              { icon: "⚡", label: "Fast Response" },
              { icon: "🛡️", label: "Licensed & Insured" },
              { icon: "⭐", label: "5-Star Reviews" },
              { icon: "🌡️", label: "All Makes & Models" },
            ].map((b) => (
              <div key={b.label} className="flex items-center gap-2 text-slate-400 text-sm">
                <span>{b.icon}</span>
                <span>{b.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-500 text-xs tracking-widest uppercase">
        <span>Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-slate-500 to-transparent animate-pulse" />
      </div>
    </section>
  );
}
