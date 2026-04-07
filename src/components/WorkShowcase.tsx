"use client";

import { useState } from "react";

interface Photo {
  src: string;
  caption: string;
  alt: string;
}

const photos: Photo[] = [
  {
    src: "/basement-install-photo.png",
    caption: "BASEMENT INSTALL — WATERTOWN, SD",
    alt: "Basement HVAC installation",
  },
  {
    src: "/furnace-install-finished.png",
    caption: "FURNACE INSTALL — WATERTOWN, SD",
    alt: "Finished furnace installation",
  },
  {
    src: "/gas-meter-and-venting.png",
    caption: "GAS METER & VENTING — WATERTOWN, SD",
    alt: "Gas meter and venting setup",
  },
  {
    src: "/exterior-vent-pipes.png",
    caption: "EXTERIOR VENT PIPES — WATERTOWN, SD",
    alt: "Exterior vent pipe installation",
  },
];

function PhotoCard({
  photo,
  style,
}: {
  photo: Photo;
  style?: React.CSSProperties;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      style={{
        position: "relative",
        overflow: "hidden",
        ...style,
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={photo.src}
        alt={photo.alt}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          display: "block",
          transition: "transform 0.4s ease",
          transform: hovered ? "scale(1.03)" : "scale(1)",
        }}
      />
      {/* Base dark overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "rgba(8,8,8,0.3)",
          transition: "opacity 0.3s ease",
          opacity: hovered ? 0.5 : 1,
        }}
      />
      {/* Caption — fades in on hover */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          padding: "1.25rem",
          background: "linear-gradient(to top, rgba(8,8,8,0.85) 0%, transparent 100%)",
          transition: "opacity 0.3s ease, transform 0.3s ease",
          opacity: hovered ? 1 : 0,
          transform: hovered ? "translateY(0)" : "translateY(8px)",
        }}
      >
        <span
          className="font-mono"
          style={{
            fontSize: "10px",
            letterSpacing: "0.15em",
            color: "#E2E8F0",
            textTransform: "uppercase",
          }}
        >
          {photo.caption}
        </span>
      </div>
    </div>
  );
}

export default function WorkShowcase() {
  return (
    <section style={{ background: "#080808", padding: "5rem 0" }}>
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Header */}
        <div style={{ marginBottom: "3rem" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.25rem" }}>
            <div style={{ width: "24px", height: "1px", background: "#F97316" }} />
            <span
              className="font-mono uppercase"
              style={{ fontSize: "11px", letterSpacing: "0.2em", color: "#F97316" }}
            >
              Field Work
            </span>
          </div>
          <h2
            className="font-serif"
            style={{
              fontSize: "clamp(2.4rem, 5vw, 3.8rem)",
              letterSpacing: "-0.02em",
              color: "#FFFFFF",
              fontStyle: "italic",
              lineHeight: 0.92,
              marginBottom: "1rem",
            }}
          >
            Proof of Work.
          </h2>
          <p
            className="font-body"
            style={{ fontSize: "1rem", color: "#64748B", maxWidth: "480px", lineHeight: 1.6 }}
          >
            Every installation is done right. These are real jobs from Watertown, SD.
          </p>
        </div>

        {/* Desktop grid */}
        <div className="hidden md:block">
          {/* 2-col asymmetric grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "3fr 2fr",
              gap: "2px",
              height: "520px",
              marginBottom: "2px",
            }}
          >
            {/* Large photo left */}
            <PhotoCard photo={photos[0]} style={{ height: "100%" }} />

            {/* Right column: 2 stacked */}
            <div style={{ display: "flex", flexDirection: "column", gap: "2px", height: "100%" }}>
              <PhotoCard photo={photos[1]} style={{ flex: 1 }} />
              <PhotoCard photo={photos[2]} style={{ flex: 1 }} />
            </div>
          </div>

          {/* Full-width bottom strip */}
          <PhotoCard
            photo={photos[3]}
            style={{ height: "200px", width: "100%" }}
          />
        </div>

        {/* Mobile: single column stack */}
        <div className="md:hidden" style={{ display: "flex", flexDirection: "column", gap: "2px" }}>
          {photos.map((photo) => (
            <PhotoCard key={photo.src} photo={photo} style={{ height: "260px" }} />
          ))}
        </div>
      </div>
    </section>
  );
}
