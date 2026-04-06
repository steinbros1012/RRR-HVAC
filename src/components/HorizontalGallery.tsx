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
    bg: "from-[#0d1f35] to-[#0a1520]",
  },
  {
    label: "Step 02",
    title: "Fast, Accurate Diagnosis",
    desc: "Mike arrives on time, assesses your system thoroughly, and tells you exactly what's happening — in plain language, not technical jargon.",
    visual: "🔍",
    bg: "from-[#150d00] to-[#0a0800]",
  },
  {
    label: "Step 03",
    title: "Upfront Pricing. No Surprises.",
    desc: "Before any work begins, you get a clear quote. We don't add fees halfway through or upsell things you don't need.",
    visual: "📋",
    bg: "from-[#0d1f35] to-[#0a1520]",
  },
  {
    label: "Step 04",
    title: "Expert Repair or Install",
    desc: "Mike handles your system with care, works efficiently, and doesn't cut corners. Every repair is done to last.",
    visual: "🔧",
    bg: "from-[#1a0a00] to-[#0d0800]",
  },
  {
    label: "Step 05",
    title: "Clean Site. Satisfied Customer.",
    desc: "When we're done, your home looks exactly as it did when we arrived — or better. We clean up completely before leaving.",
    visual: "✅",
    bg: "from-[#0d1a35] to-[#080c20]",
  },
];

export default function HorizontalGallery() {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const isMobile = window.innerWidth < 768;
    if (isMobile) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const timer = setTimeout(() => {
      const ctx = gsap.context(() => {
        const track = trackRef.current;
        const container = containerRef.current;
        if (!track || !container) return;

        const trackWidth = track.scrollWidth;
        const containerWidth = container.offsetWidth;
        const distance = trackWidth - containerWidth;

        gsap.to(track, {
          x: -distance,
          ease: "none",
          scrollTrigger: {
            trigger: container,
            start: "top top",
            end: `+=${distance}`,
            scrub: 1,
            pin: true,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        });
      }, containerRef);

      return () => ctx.revert();
    }, 200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="py-24 sm:py-32 bg-[#080c14]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-16">
        <div className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/20 rounded-full px-4 py-1.5 mb-6">
          <span className="text-orange-300 text-sm font-medium tracking-wide">Our Process</span>
        </div>
        <h2 className="text-4xl sm:text-5xl font-black text-white tracking-tight">
          How RRR HVAC Works
        </h2>
      </div>

      {/* Desktop: horizontal scroll */}
      <div
        ref={containerRef}
        className="hidden md:block overflow-hidden"
        style={{ height: "60vh" }}
      >
        <div
          ref={trackRef}
          className="flex gap-6 h-full"
          style={{
            width: `${panels.length * 520}px`,
            paddingLeft: "max(2rem, calc((100vw - 1280px) / 2 + 1.5rem))",
            paddingRight: "4rem",
          }}
        >
          {panels.map((panel) => (
            <div
              key={panel.label}
              className={`flex-shrink-0 w-[460px] h-full bg-gradient-to-br ${panel.bg} border border-white/5 rounded-3xl p-10 flex flex-col justify-between`}
            >
              <div>
                <div className="text-6xl mb-6">{panel.visual}</div>
                <div className="text-orange-400 text-xs font-bold tracking-widest uppercase mb-3">{panel.label}</div>
                <h3 className="text-white font-black text-2xl mb-4 leading-tight">{panel.title}</h3>
                <p className="text-slate-400 leading-relaxed">{panel.desc}</p>
              </div>
              <div className="w-8 h-0.5 bg-orange-500/40" />
            </div>
          ))}
        </div>
      </div>

      {/* Mobile: vertical stack */}
      <div className="md:hidden max-w-7xl mx-auto px-4 sm:px-6 space-y-5">
        {panels.map((panel) => (
          <div
            key={panel.label}
            className={`bg-gradient-to-br ${panel.bg} border border-white/5 rounded-2xl p-6`}
          >
            <div className="text-4xl mb-4">{panel.visual}</div>
            <div className="text-orange-400 text-xs font-bold tracking-widest uppercase mb-2">{panel.label}</div>
            <h3 className="text-white font-bold text-xl mb-2">{panel.title}</h3>
            <p className="text-slate-400 text-sm leading-relaxed">{panel.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
