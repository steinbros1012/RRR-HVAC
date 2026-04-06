"use client";

import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const panels = [
  {
    label: "Step 01",
    title: "You Call. We Answer.",
    desc: "No automated menus, no call centers. When you need HVAC help in Watertown, you reach Mike directly. Same-day response is our standard.",
    visual: "📞",
    accent: "from-[#0d1f35] to-[#0a1520]",
  },
  {
    label: "Step 02",
    title: "Fast, Accurate Diagnosis",
    desc: "Mike arrives on time, assesses your system thoroughly, and tells you exactly what's happening — in plain language, not technical jargon.",
    visual: "🔍",
    accent: "from-[#1a0e00] to-[#0d0800]",
  },
  {
    label: "Step 03",
    title: "Upfront Pricing. No Surprises.",
    desc: "Before any work begins, you get a clear quote. We don't add fees halfway through or upsell things you don't need.",
    visual: "📋",
    accent: "from-[#0d1f35] to-[#0a1520]",
  },
  {
    label: "Step 04",
    title: "Expert Repair or Install",
    desc: "Mike handles your system with care, works efficiently, and doesn't cut corners. Every repair is done to last.",
    visual: "🔧",
    accent: "from-[#1a0a00] to-[#0d0600]",
  },
  {
    label: "Step 05",
    title: "Clean Site. Satisfied Customer.",
    desc: "When we're done, your home looks exactly as it did when we arrived — or better. We clean up completely before leaving.",
    visual: "✅",
    accent: "from-[#0d1a35] to-[#080c20]",
  },
];

export default function HorizontalGallery() {
  // sectionRef = the full-viewport element that GSAP pins
  const sectionRef = useRef<HTMLDivElement>(null);
  // trackRef = the wide flex row that animates left
  const trackRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (typeof window === "undefined") return;
    if (window.innerWidth < 768) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    // ctx is declared outside setTimeout so we can revert it in cleanup
    let ctx: gsap.Context | null = null;

    const timer = setTimeout(() => {
      ctx = gsap.context(() => {
        const section = sectionRef.current;
        const track = trackRef.current;
        if (!section || !track) return;

        // scrollWidth = full content width of the track (including all cards + padding)
        // offsetWidth = visible width of the section (one viewport width)
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

    // FIXED: ctx.revert() is called here, in the actual useLayoutEffect cleanup
    return () => {
      clearTimeout(timer);
      ctx?.revert();
    };
  }, []);

  return (
    <>
      {/* ─── Desktop: full-screen pinned section ─────────────────────────────── */}
      {/*
        sectionRef has height:100vh so it fills the viewport when pinned.
        overflow:hidden clips the track so only one viewport-width is visible.
        GSAP pins this element and adds pinSpacing = distance px after it.
        No wrapping section with py-* — that creates dead space outside the pin.
      */}
      <div
        ref={sectionRef}
        className="hidden md:flex flex-col bg-[#080c14] overflow-hidden"
        style={{ height: "100vh" }}
      >
        {/* Title row — fixed height inside the pinned viewport */}
        <div className="flex-shrink-0 max-w-7xl mx-auto w-full px-6 lg:px-8 pt-16 pb-8">
          <div className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/20 rounded-full px-4 py-1.5 mb-5">
            <span className="text-orange-300 text-sm font-medium tracking-wide">Our Process</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-white tracking-tight">
            How RRR HVAC Works
          </h2>
        </div>

        {/* Track viewport — fills remaining height, clips overflow */}
        <div className="flex-1 overflow-hidden">
          <div
            ref={trackRef}
            className="flex h-full gap-5"
            style={{ paddingLeft: "5vw", paddingRight: "8vw" }}
          >
            {panels.map((panel, i) => (
              <div
                key={panel.label}
                className={`flex-shrink-0 w-[420px] h-full bg-gradient-to-br ${panel.accent} border border-white/5 rounded-3xl p-10 flex flex-col justify-between`}
              >
                <div>
                  <div className="text-5xl mb-6">{panel.visual}</div>
                  <div className="text-orange-400 text-xs font-bold tracking-widest uppercase mb-3">
                    {panel.label}
                  </div>
                  <h3 className="text-white font-black text-2xl mb-4 leading-tight">
                    {panel.title}
                  </h3>
                  <p className="text-slate-400 leading-relaxed">{panel.desc}</p>
                </div>
                <div className="flex items-center justify-between">
                  <div className="w-8 h-0.5 bg-orange-500/40" />
                  <span className="text-slate-700 text-xs">
                    {i + 1} / {panels.length}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ─── Mobile: vertical stack (no GSAP, no pin) ────────────────────────── */}
      <div className="md:hidden bg-[#080c14] px-4 py-16">
        <div className="max-w-xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/20 rounded-full px-4 py-1.5 mb-5">
            <span className="text-orange-300 text-sm font-medium tracking-wide">Our Process</span>
          </div>
          <h2 className="text-3xl font-black text-white tracking-tight mb-8">
            How RRR HVAC Works
          </h2>
          <div className="space-y-4">
            {panels.map((panel) => (
              <div
                key={panel.label}
                className={`bg-gradient-to-br ${panel.accent} border border-white/5 rounded-2xl p-6`}
              >
                <div className="text-3xl mb-4">{panel.visual}</div>
                <div className="text-orange-400 text-xs font-bold tracking-widest uppercase mb-2">
                  {panel.label}
                </div>
                <h3 className="text-white font-bold text-lg mb-2">{panel.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{panel.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
