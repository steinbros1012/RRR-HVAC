"use client";

import { useEffect, useRef, useState } from "react";

export default function TrustNarrative() {
  const credentials = ["FIREFIGHTER & PARAMEDIC", "TRANE CERTIFIED", "LICENSED & INSURED"];

  const leftRef = useRef<HTMLDivElement | null>(null);
  const rightRef = useRef<HTMLDivElement | null>(null);
  const [leftIn, setLeftIn] = useState(false);
  const [rightIn, setRightIn] = useState(false);

  useEffect(() => {
    const observe = (el: HTMLElement | null, set: (v: boolean) => void) => {
      if (!el) return;
      const obs = new IntersectionObserver(
        ([e]) => { if (e.isIntersecting) { set(true); obs.unobserve(el); } },
        { threshold: 0.1 }
      );
      obs.observe(el);
      return () => obs.disconnect();
    };
    const c1 = observe(leftRef.current, setLeftIn);
    const c2 = observe(rightRef.current, setRightIn);
    return () => { c1?.(); c2?.(); };
  }, []);

  return (
    <section style={{ background: "linear-gradient(to bottom, #080808, #0d0d0d)", padding: "5rem 0" }}>
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* Left: copy */}
          <div
            ref={leftRef}
            style={{
              opacity: leftIn ? 1 : 0,
              transform: leftIn ? "none" : "translateX(-24px)",
              transition: "opacity 0.7s ease, transform 0.7s ease",
            }}
          >
            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.5rem" }}>
              <div style={{ width: "24px", height: "1px", background: "#F97316" }} />
              <span className="font-mono uppercase" style={{ fontSize: "11px", letterSpacing: "0.2em", color: "#F97316" }}>
                About RRR HVAC
              </span>
            </div>
            <h2 className="font-serif" style={{ fontSize: "clamp(2.4rem, 5vw, 3.8rem)", letterSpacing: "-0.02em", color: "#FFFFFF", fontStyle: "italic", lineHeight: 0.92, marginBottom: "1.75rem" }}>
              Family-Owned.
              <br />
              Built on Trust.
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem", marginBottom: "2rem" }}>
              <p className="font-body" style={{ fontSize: "1rem", color: "#94A3B8", lineHeight: 1.7 }}>
                Mike is a full-time firefighter and paramedic, and he owns RRR HVAC. That background shows up in how he runs the business. When somebody calls, he shows up, stays calm, and gets the job done right.
              </p>
              <p className="font-body" style={{ fontSize: "1rem", color: "#94A3B8", lineHeight: 1.7 }}>
                Mike and his wife are raising their three kids in Watertown, so this is personal. He works in the same community he lives in, and people know his name. That matters when you are trusting someone to come into your home and fix your system.
              </p>
              <p className="font-body" style={{ fontSize: "1rem", color: "#94A3B8", lineHeight: 1.7 }}>
                RRR HVAC installs and services Trane equipment, and Mike brings that same level of care to every job, whether it is a tune-up, a new install, or a furnace that quits in the middle of winter.
              </p>
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
              {credentials.map((c, i) => (
                <span
                  key={c}
                  className="font-mono"
                  style={{
                    fontSize: "10px",
                    letterSpacing: "0.1em",
                    padding: "6px 14px",
                    border: "1px solid rgba(255,255,255,0.12)",
                    color: "#E2E8F0",
                    borderRadius: "999px",
                    opacity: leftIn ? 1 : 0,
                    transform: leftIn ? "none" : "translateY(8px)",
                    transition: `opacity 0.5s ease ${0.4 + i * 0.1}s, transform 0.5s ease ${0.4 + i * 0.1}s`,
                  }}
                >
                  {c}
                </span>
              ))}
            </div>
          </div>

          {/* Right: family photos */}
          <div
            ref={rightRef}
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
              opacity: rightIn ? 1 : 0,
              transform: rightIn ? "none" : "translateX(24px)",
              transition: "opacity 0.7s ease 0.15s, transform 0.7s ease 0.15s",
            }}
          >
            <div style={{ position: "relative", borderRadius: "1rem", overflow: "hidden" }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/family-photo.png"
                alt="Mike and his family"
                style={{ width: "100%", height: "340px", objectFit: "cover", objectPosition: "center 30%", display: "block" }}
              />
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(8,8,8,0.55) 0%, transparent 50%)" }} />
              <div style={{ position: "absolute", bottom: "1rem", left: "1.25rem" }}>
                <span className="font-mono uppercase" style={{ fontSize: "9px", letterSpacing: "0.14em", color: "rgba(255,255,255,0.7)" }}>
                  Mike &amp; Family · Watertown, SD
                </span>
              </div>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1.2fr", gap: "1rem", alignItems: "stretch" }}>
              <div style={{ position: "relative", borderRadius: "0.75rem", overflow: "hidden" }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/mike-and-wife.png"
                  alt="Mike with his wife"
                  style={{ width: "100%", height: "180px", objectFit: "cover", objectPosition: "center 35%", display: "block" }}
                />
              </div>
              <div style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.09)", borderRadius: "0.75rem", padding: "1.25rem", display: "flex", flexDirection: "column", justifyContent: "center", gap: "0.75rem" }}>
                <p className="font-serif" style={{ fontSize: "0.975rem", color: "#E2E8F0", fontStyle: "italic", lineHeight: 1.5, letterSpacing: "-0.01em" }}>
                  &ldquo;We show up when we say we will, fix it right, and leave your home better than we found it.&rdquo;
                </p>
                <span className="font-mono uppercase" style={{ fontSize: "9px", letterSpacing: "0.1em", color: "#F97316" }}>
                  Mike — Owner
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
