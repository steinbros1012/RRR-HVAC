"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const cards = [
  {
    number: "01",
    title: "We Show Up When We Say We Will",
    desc: "Mike schedules a time and keeps it. No four-hour windows. No last-minute cancellations. Your time matters.",
    accent: "#f97316",
  },
  {
    number: "02",
    title: "Honest Diagnosis. No Surprise Bills.",
    desc: "We tell you exactly what's wrong and what it costs to fix before we touch anything. No upsells. No runaround.",
    accent: "#fb923c",
  },
  {
    number: "03",
    title: "Fast Response — Especially in Emergencies",
    desc: "Furnace dies at 2am in a South Dakota winter? That's a real emergency. We treat it like one.",
    accent: "#ea580c",
  },
  {
    number: "04",
    title: "Clean Work. Every Time.",
    desc: "We leave your home exactly as we found it — or cleaner. The job is done when it's really done.",
    accent: "#f97316",
  },
  {
    number: "05",
    title: "Local. Invested. Here to Stay.",
    desc: "We're not a franchise or a call center. We're your neighbors in Watertown, and we stand behind our work.",
    accent: "#fb923c",
  },
];

export default function CardSwapSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const stickyRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = gsap.context(() => {
      const cardEls = cardsRef.current?.querySelectorAll(".swap-card");
      if (!cardEls || cardEls.length === 0) return;

      gsap.set(cardEls, {
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        rotateZ: (i) => (cardEls.length - 1 - i) * 2.5,
        y: (i) => (cardEls.length - 1 - i) * 8,
        transformOrigin: "center bottom",
      });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: `+=${cards.length * 400}`,
          scrub: 1,
          pin: stickyRef.current,
        },
      });

      cardEls.forEach((card, i) => {
        if (i < cardEls.length - 1) {
          tl.to(card, {
            rotateZ: -15,
            x: -300,
            opacity: 0,
            duration: 1,
            ease: "power2.inOut",
          }, i);
          Array.from(cardEls).slice(i + 1).forEach((c, j) => {
            tl.to(c, {
              rotateZ: (cardEls.length - 2 - i - j) * 2.5,
              y: (cardEls.length - 2 - i - j) * 8,
              duration: 1,
              ease: "power2.inOut",
            }, i);
          });
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="why"
      ref={sectionRef}
      className="relative"
      style={{ height: `${cards.length * 400 + 100}vh` }}
    >
      <div
        ref={stickyRef}
        className="sticky top-0 h-screen flex items-center overflow-hidden"
        style={{
          background: "linear-gradient(135deg, #080c14 0%, #0a1220 100%)",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full grid md:grid-cols-2 gap-16 items-center">
          {/* Left: title */}
          <div>
            <div className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/20 rounded-full px-4 py-1.5 mb-6">
              <span className="text-orange-300 text-sm font-medium tracking-wide">Why RRR HVAC</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-black text-white tracking-tight mb-6">
              The Standard We<br />Hold Ourselves To
            </h2>
            <p className="text-slate-400 text-lg leading-relaxed">
              A lot of HVAC companies exist. Not all of them show up on time, tell you the truth, or leave your home clean. We do all three.
            </p>
            <div className="mt-8 flex items-center gap-3">
              <a
                href="tel:6055550100"
                className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-400 text-white font-semibold px-6 py-3 rounded-full transition-colors"
              >
                Get Help Today
              </a>
            </div>
          </div>

          {/* Right: stacked cards (desktop) */}
          <div
            ref={cardsRef}
            className="relative h-80 hidden md:block"
          >
            {cards.map((card) => (
              <div
                key={card.number}
                className="swap-card w-full h-full bg-[#0f1623] border border-white/10 rounded-3xl p-8 flex flex-col justify-between"
                style={{
                  boxShadow: `0 20px 60px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.03)`,
                }}
              >
                <div>
                  <div className="text-4xl font-black mb-2" style={{ color: card.accent }}>
                    {card.number}
                  </div>
                  <h3 className="text-white font-bold text-xl mb-3">{card.title}</h3>
                  <p className="text-slate-400 leading-relaxed">{card.desc}</p>
                </div>
                <div className="text-xs text-slate-600 tracking-widest uppercase">RRR HVAC Rescue LLC · Watertown, SD</div>
              </div>
            ))}
          </div>

          {/* Mobile fallback */}
          <div className="md:hidden space-y-4">
            {cards.map((card) => (
              <div
                key={card.number}
                className="bg-[#0f1623] border border-white/5 rounded-2xl p-6"
              >
                <div className="text-2xl font-black mb-1" style={{ color: card.accent }}>{card.number}</div>
                <h3 className="text-white font-bold mb-2">{card.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
