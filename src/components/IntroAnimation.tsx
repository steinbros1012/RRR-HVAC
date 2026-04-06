"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

export default function IntroAnimation() {
  const containerRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setDone(true);
      return;
    }

    const tl = gsap.timeline({
      onComplete: () => {
        setTimeout(() => setDone(true), 100);
      },
    });

    tl.fromTo(
      logoRef.current,
      { opacity: 0, y: 20, scale: 0.95 },
      { opacity: 1, y: 0, scale: 1, duration: 0.6, ease: "power2.out" }
    )
    .to(logoRef.current, { opacity: 0, y: -10, duration: 0.4, ease: "power2.in", delay: 0.5 })
    .to(overlayRef.current, {
      scaleY: 0,
      transformOrigin: "top center",
      duration: 0.7,
      ease: "power4.inOut",
    });

    return () => { tl.kill(); };
  }, []);

  if (done) return null;

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[9999] flex items-center justify-center"
      style={{ pointerEvents: "all" }}
    >
      <div
        ref={overlayRef}
        className="absolute inset-0"
        style={{ background: "linear-gradient(135deg, #080c14 0%, #0f1a2e 100%)" }}
      />
      <div
        ref={logoRef}
        className="relative z-10 text-center opacity-0"
      >
        <div className="flex items-center gap-3 justify-center">
          <div className="w-12 h-12 rounded-full bg-orange-500 flex items-center justify-center">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z"/>
            </svg>
          </div>
          <div className="text-left">
            <div className="text-2xl font-black tracking-tight text-white">RRR HVAC</div>
            <div className="text-xs text-orange-400 tracking-widest uppercase font-medium">Rescue LLC</div>
          </div>
        </div>
        <div className="mt-4 text-slate-400 text-sm tracking-wider">Watertown, South Dakota</div>
      </div>
    </div>
  );
}
