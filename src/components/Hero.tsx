"use client";

import { useEffect, useState } from "react";

const PHONE = "(605) 881-5622";
const HERO_ROTATION_SECONDS = 18;

const HERO_IMAGES = [
  {
    src: "/customer-jobs/img-0017.jpg",
    objectPosition: "center center",
  },
  {
    src: "/customer-jobs/img-0600.jpg",
    objectPosition: "center center",
  },
  {
    src: "/customer-jobs/img-0758.jpg",
    objectPosition: "center center",
  },
  {
    src: "/customer-jobs/img-0067.jpg",
    objectPosition: "center center",
  },
];

const TRUST_ITEMS = [
  "Licensed & Insured",
  "All Makes & Models",
  "Trane Equipment Available",
  "Emergency Response",
];

export default function Hero() {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updatePreference = () => setPrefersReducedMotion(mediaQuery.matches);

    updatePreference();
    mediaQuery.addEventListener("change", updatePreference);

    return () => mediaQuery.removeEventListener("change", updatePreference);
  }, []);

  return (
    <section style={{ position: "relative", minHeight: "100svh", overflow: "hidden" }}>
      {/* Background */}
      <div aria-hidden="true" style={{ position: "absolute", inset: 0 }}>
        {HERO_IMAGES.map((image, index) => {
          return (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              key={image.src}
              src={image.src}
              fetchPriority={index === 0 ? "high" : "auto"}
              alt=""
              className="hero-slide"
              style={{
                position: "absolute",
                inset: 0,
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: image.objectPosition,
                opacity: index === 0 ? 1 : 0,
                transform: "scale(1.035)",
                animation: prefersReducedMotion
                  ? "none"
                  : `heroFade ${HERO_ROTATION_SECONDS}s linear infinite`,
                animationDelay: prefersReducedMotion
                  ? "0s"
                  : `${(index * HERO_ROTATION_SECONDS) / HERO_IMAGES.length * -1}s`,
                willChange: prefersReducedMotion ? "auto" : "opacity, transform",
              }}
            />
          );
        })}
      </div>
      {/* Overlay — heavy at top (behind nav), lighter in middle, heaviest at bottom */}
      <div style={{
        position: "absolute",
        inset: 0,
        background: "linear-gradient(to bottom, rgba(8,8,8,0.85) 0%, rgba(8,8,8,0.52) 45%, rgba(8,8,8,0.88) 100%)",
      }} />
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(circle at 20% 35%, rgba(249,115,22,0.16), transparent 32%), radial-gradient(circle at 78% 22%, rgba(255,255,255,0.08), transparent 24%)",
      }} />

      {/* Content */}
      <div
        className="sm:px-8"
        style={{
          position: "relative",
          zIndex: 10,
          maxWidth: "80rem",
          margin: "0 auto",
          padding: "0 1.25rem",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
          minHeight: "100svh",
          paddingTop: "8rem",
          paddingBottom: "4.5rem",
        }}
      >
        {/* Location eyebrow */}
        <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.5rem", flexWrap: "wrap" }}>
          <div style={{ width: "24px", height: "1px", background: "#F97316" }} />
          <span className="font-mono uppercase" style={{ fontSize: "10px", letterSpacing: "0.18em", color: "#F97316" }}>
            Watertown, South Dakota
          </span>
        </div>

        {/* Headline */}
        <h1
          className="font-serif"
          style={{
            fontSize: "clamp(2.9rem, 10vw, 6.5rem)",
            color: "#FFFFFF",
            lineHeight: 0.9,
            letterSpacing: "-0.03em",
            fontStyle: "italic",
            marginBottom: "1.5rem",
            maxWidth: "11ch",
          }}
        >
          Heating &amp; Cooling
          <br />
          You Can Count On.
        </h1>

        {/* Subhead + CTAs side by side on desktop */}
        <div className="flex flex-col sm:flex-row sm:items-end gap-6 sm:gap-16">
          <p className="font-body" style={{ fontSize: "1rem", color: "#CBD5E1", maxWidth: "28rem", lineHeight: 1.65 }}>
            Fast, honest HVAC service from a Watertown firefighter and paramedic.
            Emergency response, repairs, and full system installs.
          </p>
          <div className="hero-cta-group" style={{ display: "flex", gap: "0.875rem", flexWrap: "wrap", flexShrink: 0 }}>
            <a
              href={`tel:${PHONE.replace(/\D/g, "")}`}
              className="font-mono uppercase font-semibold hero-cta-primary"
              style={{
                fontSize: "11px",
                letterSpacing: "0.12em",
                padding: "13px 26px",
                background: "#F97316",
                color: "#000000",
                textDecoration: "none",
                borderRadius: "2px",
                transition: "opacity 0.15s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.85")}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
            >
              Call {PHONE}
            </a>
            <a
              href="/contact"
              className="font-mono uppercase hero-cta-secondary"
              style={{
                fontSize: "11px",
                letterSpacing: "0.12em",
                padding: "13px 26px",
                border: "1px solid rgba(255,255,255,0.25)",
                color: "#FFFFFF",
                textDecoration: "none",
                borderRadius: "2px",
                transition: "border-color 0.15s, background 0.15s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.5)";
                e.currentTarget.style.background = "rgba(255,255,255,0.06)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.25)";
                e.currentTarget.style.background = "transparent";
              }}
            >
              Request Service
            </a>
          </div>
        </div>

        {/* Trust line */}
        <div style={{ marginTop: "2.25rem", paddingTop: "1.5rem", borderTop: "1px solid rgba(255,255,255,0.08)" }}>
          <p
            className="font-mono hero-trust-line"
            style={{
              fontSize: "10px",
              letterSpacing: "0.16em",
              color: "rgba(255,255,255,0.72)",
              textTransform: "uppercase",
              textShadow: "0 1px 16px rgba(255,255,255,0.08)",
            }}
          >
            {TRUST_ITEMS.join("  ·  ")}
          </p>

          <div className="hero-trust-grid" style={{ display: "none" }}>
            {TRUST_ITEMS.map((item) => (
              <div
                key={item}
                className="font-mono uppercase"
                style={{
                  fontSize: "9px",
                  letterSpacing: "0.12em",
                  color: "#E2E8F0",
                  border: "1px solid rgba(255,255,255,0.12)",
                  background: "rgba(255,255,255,0.04)",
                  padding: "10px 12px",
                  textAlign: "center",
                  textWrap: "balance",
                }}
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
