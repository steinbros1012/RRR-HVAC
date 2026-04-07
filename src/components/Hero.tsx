"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const PHONE = "(605) 881-5622";

export default function Hero() {
  const labelRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const trustRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const tl = gsap.timeline({ delay: 1.35 });

    tl.fromTo(
      labelRef.current,
      { opacity: 0, y: 16 },
      { opacity: 1, y: 0, duration: 0.5, ease: "power3.out" }
    )
      .fromTo(
        headlineRef.current,
        { opacity: 0, y: 32, filter: "blur(6px)" },
        { opacity: 1, y: 0, filter: "blur(0px)", duration: 0.8, ease: "power3.out" },
        "-=0.3"
      )
      .fromTo(
        subRef.current,
        { opacity: 0, y: 16 },
        { opacity: 1, y: 0, duration: 0.55, ease: "power3.out" },
        "-=0.4"
      )
      .fromTo(
        ctaRef.current,
        { opacity: 0, y: 12 },
        { opacity: 1, y: 0, duration: 0.5, ease: "power3.out" },
        "-=0.35"
      )
      .fromTo(
        trustRef.current,
        { opacity: 0, y: 8 },
        { opacity: 1, y: 0, duration: 0.4, ease: "power3.out" },
        "-=0.25"
      );

    return () => { tl.kill(); };
  }, []);

  return (
    <section
      style={{ position: "relative", minHeight: "100vh", overflow: "hidden" }}
    >
      {/* Background image */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/hero-background-tools.png"
        alt=""
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition: "center",
        }}
      />

      {/* Dark overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to bottom, rgba(8,8,8,0.72) 0%, rgba(8,8,8,0.55) 50%, rgba(8,8,8,0.90) 100%)",
        }}
      />

      {/* Content */}
      <div
        style={{
          position: "relative",
          zIndex: 10,
          maxWidth: "80rem",
          margin: "0 auto",
          padding: "8rem 1.25rem 7rem",
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
        }}
        className="sm:px-8"
      >
        {/* Location label */}
        <div ref={labelRef} style={{ opacity: 0, marginBottom: "1.5rem" }}>
          <span
            className="font-mono uppercase"
            style={{ fontSize: "11px", letterSpacing: "0.2em", color: "#F97316" }}
          >
            Watertown, South Dakota · HVAC Rescue
          </span>
        </div>

        {/* Headline */}
        <h1
          ref={headlineRef}
          className="font-serif"
          style={{
            opacity: 0,
            fontSize: "clamp(3.8rem, 8vw, 7rem)",
            color: "#FFFFFF",
            lineHeight: 0.88,
            letterSpacing: "-0.02em",
            fontStyle: "italic",
            marginBottom: "1.5rem",
            maxWidth: "14ch",
          }}
        >
          Heating &amp; Cooling
          <br />
          You Can Count On.
        </h1>

        {/* Subhead */}
        <p
          ref={subRef}
          className="font-body"
          style={{
            opacity: 0,
            fontSize: "1.125rem",
            color: "#94A3B8",
            maxWidth: "32rem",
            lineHeight: 1.6,
            marginBottom: "2.5rem",
          }}
        >
          RRR HVAC Rescue LLC serves Watertown and surrounding South Dakota with fast, honest
          HVAC service. Owned by a firefighter. Built on trust.
        </p>

        {/* CTAs */}
        <div
          ref={ctaRef}
          style={{
            opacity: 0,
            display: "flex",
            flexWrap: "wrap",
            gap: "1rem",
            alignItems: "center",
            marginBottom: "2rem",
          }}
        >
          <a
            href={`tel:${PHONE.replace(/\D/g, "")}`}
            className="font-mono uppercase font-semibold"
            style={{
              fontSize: "12px",
              letterSpacing: "0.1em",
              padding: "14px 28px",
              borderRadius: "999px",
              background: "#F97316",
              color: "#000000",
              textDecoration: "none",
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              transition: "opacity 0.15s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.9")}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
          >
            Call {PHONE}
          </a>
          <a
            href="#contact"
            className="font-mono uppercase"
            style={{
              fontSize: "12px",
              letterSpacing: "0.1em",
              padding: "14px 28px",
              borderRadius: "999px",
              border: "1px solid rgba(255,255,255,0.2)",
              color: "#FFFFFF",
              textDecoration: "none",
              display: "inline-flex",
              alignItems: "center",
              transition: "border-color 0.15s, background 0.15s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "rgba(255,255,255,0.4)";
              e.currentTarget.style.background = "rgba(255,255,255,0.06)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "rgba(255,255,255,0.2)";
              e.currentTarget.style.background = "transparent";
            }}
          >
            Request Service
          </a>
        </div>

        {/* Single restrained trust line */}
        <div ref={trustRef} style={{ opacity: 0 }}>
          <span
            className="font-mono"
            style={{
              fontSize: "10px",
              letterSpacing: "0.12em",
              color: "#64748B",
              textTransform: "uppercase",
            }}
          >
            Watertown, SD&nbsp;&nbsp;·&nbsp;&nbsp;Honest Service&nbsp;&nbsp;·&nbsp;&nbsp;Trane Equipment&nbsp;&nbsp;·&nbsp;&nbsp;Emergency Available
          </span>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        style={{
          position: "absolute",
          bottom: "2rem",
          left: "2rem",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          gap: "0.5rem",
          zIndex: 10,
        }}
      >
        <span
          className="font-mono"
          style={{ fontSize: "10px", letterSpacing: "0.2em", color: "#64748B", textTransform: "uppercase" }}
        >
          Scroll
        </span>
        <div
          style={{
            width: "1px",
            height: "40px",
            background: "linear-gradient(to bottom, #64748B, transparent)",
          }}
        />
      </div>
    </section>
  );
}
