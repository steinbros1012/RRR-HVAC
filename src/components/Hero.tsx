"use client";

import { useEffect, useState } from "react";

const PHONE = "(605) 881-5622";

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

export default function Hero() {
  const [activeImage, setActiveImage] = useState(0);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updatePreference = () => setPrefersReducedMotion(mediaQuery.matches);

    updatePreference();
    mediaQuery.addEventListener("change", updatePreference);

    return () => mediaQuery.removeEventListener("change", updatePreference);
  }, []);

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    const interval = window.setInterval(() => {
      setActiveImage((current) => (current + 1) % HERO_IMAGES.length);
    }, 3500);

    return () => window.clearInterval(interval);
  }, [prefersReducedMotion]);

  return (
    <section style={{ position: "relative", minHeight: "100vh", overflow: "hidden" }}>
      {/* Background */}
      <div aria-hidden="true" style={{ position: "absolute", inset: 0 }}>
        {HERO_IMAGES.map((image, index) => {
          const isActive = index === activeImage;

          return (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              key={image.src}
              src={image.src}
              alt=""
              style={{
                position: "absolute",
                inset: 0,
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: image.objectPosition,
                opacity: isActive ? 1 : 0,
                transform: isActive ? "scale(1.035)" : "scale(1)",
                transition: prefersReducedMotion
                  ? "opacity 0.2s ease"
                  : "opacity 1.6s ease, transform 6.8s ease",
                willChange: "opacity, transform",
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
          minHeight: "100vh",
          paddingBottom: "6rem",
        }}
      >
        {/* Location eyebrow */}
        <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.75rem" }}>
          <div style={{ width: "24px", height: "1px", background: "#F97316" }} />
          <span className="font-mono uppercase" style={{ fontSize: "11px", letterSpacing: "0.2em", color: "#F97316" }}>
            Watertown, South Dakota
          </span>
        </div>

        {/* Headline */}
        <h1
          className="font-serif"
          style={{
            fontSize: "clamp(3.2rem, 7.5vw, 6.5rem)",
            color: "#FFFFFF",
            lineHeight: 0.9,
            letterSpacing: "-0.03em",
            fontStyle: "italic",
            marginBottom: "2rem",
            maxWidth: "16ch",
          }}
        >
          Heating &amp; Cooling
          <br />
          You Can Count On.
        </h1>

        {/* Subhead + CTAs side by side on desktop */}
        <div className="flex flex-col sm:flex-row sm:items-end gap-6 sm:gap-16">
          <p className="font-body" style={{ fontSize: "1.0625rem", color: "#94A3B8", maxWidth: "28rem", lineHeight: 1.65 }}>
            Fast, honest HVAC service from a Watertown firefighter and paramedic.
            Emergency response, repairs, and full system installs.
          </p>
          <div style={{ display: "flex", gap: "0.875rem", flexWrap: "wrap", flexShrink: 0 }}>
            <a
              href={`tel:${PHONE.replace(/\D/g, "")}`}
              className="font-mono uppercase font-semibold"
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
              className="font-mono uppercase"
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
        <div style={{ marginTop: "3rem", paddingTop: "2rem", borderTop: "1px solid rgba(255,255,255,0.08)" }}>
          <p
            className="font-mono"
            style={{
              fontSize: "10px",
              letterSpacing: "0.16em",
              color: "rgba(255,255,255,0.72)",
              textTransform: "uppercase",
              textShadow: "0 1px 16px rgba(255,255,255,0.08)",
            }}
          >
            Licensed &amp; Insured&nbsp;&nbsp;·&nbsp;&nbsp;All Makes &amp; Models&nbsp;&nbsp;·&nbsp;&nbsp;Trane Equipment Available&nbsp;&nbsp;·&nbsp;&nbsp;Emergency Response
          </p>
        </div>
      </div>
    </section>
  );
}
