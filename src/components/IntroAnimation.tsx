"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

export default function IntroAnimation() {
  const topPanelRef = useRef<HTMLDivElement>(null);
  const bottomPanelRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const brushEdgeRef = useRef<HTMLDivElement>(null);
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setDone(true);
      return;
    }

    const tl = gsap.timeline({
      onComplete: () => {
        // Short buffer so GSAP clears transforms before we unmount
        setTimeout(() => setDone(true), 80);
      },
    });

    // 1. Logo enters from slight blur + fade
    tl.fromTo(
      logoRef.current,
      { opacity: 0, y: 14, filter: "blur(6px)" },
      { opacity: 1, y: 0, filter: "blur(0px)", duration: 0.55, ease: "power3.out" }
    );

    // 2. Brief hold so the brand registers
    tl.to(logoRef.current, { duration: 0.65 });

    // 3. Logo fades out just before the curtain splits
    tl.to(logoRef.current, {
      opacity: 0,
      y: -8,
      filter: "blur(4px)",
      duration: 0.25,
      ease: "power2.in",
    });

    // 4. Top and bottom panels split apart simultaneously
    //    A thin orange brush-stroke edge on the split seam glows briefly
    tl.to(
      [topPanelRef.current, brushEdgeRef.current],
      {
        y: "-100%",
        duration: 0.75,
        ease: "expo.inOut",
      },
      "-=0.05"
    );
    tl.to(
      bottomPanelRef.current,
      {
        y: "100%",
        duration: 0.75,
        ease: "expo.inOut",
      },
      "<" // same start time as top panel
    );

    // Brush-edge glow pulses at start of reveal
    tl.fromTo(
      brushEdgeRef.current,
      { opacity: 0.8 },
      { opacity: 0, duration: 0.4, ease: "power2.out" },
      "<0.1"
    );

    return () => {
      tl.kill();
    };
  }, []);

  if (done) return null;

  return (
    // pointer-events:none on container so if animation completes while user
    // has already started interacting, nothing is blocked
    <div className="fixed inset-0 z-[9999]" style={{ pointerEvents: "none" }}>
      {/* Top half panel */}
      <div
        ref={topPanelRef}
        className="absolute top-0 left-0 right-0"
        style={{
          height: "50%",
          background: "linear-gradient(180deg, #060a12 0%, #0c1828 100%)",
        }}
      />

      {/* Bottom half panel */}
      <div
        ref={bottomPanelRef}
        className="absolute bottom-0 left-0 right-0"
        style={{
          height: "50%",
          background: "linear-gradient(0deg, #060a12 0%, #0c1828 100%)",
        }}
      />

      {/* Brush-stroke edge — sits at the seam between top and bottom panels.
          As the panels split, this creates a brief "painted light" edge effect. */}
      <div
        ref={brushEdgeRef}
        className="absolute left-0 right-0"
        style={{
          top: "calc(50% - 1px)",
          height: "3px",
          background:
            "linear-gradient(to right, transparent 0%, rgba(249,115,22,0.7) 20%, rgba(255,200,100,0.9) 50%, rgba(249,115,22,0.7) 80%, transparent 100%)",
          filter: "blur(1px)",
          opacity: 0,
        }}
      />

      {/* Logo — sits at the center seam, fades before the split */}
      <div
        ref={logoRef}
        className="absolute inset-0 flex items-center justify-center"
        style={{ opacity: 0 }}
      >
        <div className="text-center">
          <div className="flex items-center gap-3 justify-center mb-3">
            <div className="w-11 h-11 rounded-full bg-orange-500 flex items-center justify-center">
              <svg
                width="22"
                height="22"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M14 14.76V3.5a2.5 2.5 0 0 0-5 0v11.26a4.5 4.5 0 1 0 5 0z" />
              </svg>
            </div>
            <div className="text-left">
              <div className="text-2xl font-black tracking-tight text-white leading-none">
                RRR HVAC
              </div>
              <div className="text-[11px] text-orange-400 tracking-[0.2em] uppercase font-medium mt-0.5">
                Rescue LLC
              </div>
            </div>
          </div>
          <div className="text-slate-500 text-xs tracking-[0.15em] uppercase">
            Watertown, South Dakota
          </div>
        </div>
      </div>
    </div>
  );
}
