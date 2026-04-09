"use client";

import { useEffect, useRef, useState } from "react";
import Lightbox from "./Lightbox";

type GalleryImage = {
  src: string;
  alt: string;
  category: string;
  title: string;
  description: string;
  objectPosition: string;
};

export default function GalleryAdditionalWork({ images }: { images: GalleryImage[] }) {
  const [lightbox, setLightbox] = useState<{ src: string; alt: string } | null>(null);
  const [hovered, setHovered] = useState<string | null>(null);
  const [visible, setVisible] = useState<Set<number>>(new Set());
  const refs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    refs.current.forEach((el, i) => {
      if (!el) return;
      const obs = new IntersectionObserver(
        ([e]) => {
          if (e.isIntersecting) {
            setTimeout(() => setVisible((prev) => new Set([...prev, i])), i * 100);
            obs.unobserve(el);
          }
        },
        { threshold: 0.08 }
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <>
      {lightbox && <Lightbox src={lightbox.src} alt={lightbox.alt} onClose={() => setLightbox(null)} />}

      <section style={{ padding: "2px 0 0", background: "rgba(255,255,255,0.05)" }}>
        <div className="max-w-7xl mx-auto px-5 sm:px-8 py-5">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-6 h-px" style={{ background: "#F97316" }} />
            <span className="font-mono uppercase" style={{ fontSize: "10px", letterSpacing: "0.2em", color: "#F97316" }}>
              Additional Work
            </span>
          </div>
        </div>
        <div className="grid md:grid-cols-2 xl:grid-cols-4" style={{ gap: "2px" }}>
          {images.map((image, i) => (
            <article
              key={image.src}
              ref={(el) => { refs.current[i] = el; }}
              style={{
                background: "#0d0d0d",
                display: "flex",
                flexDirection: "column",
                cursor: "zoom-in",
                opacity: visible.has(i) ? 1 : 0,
                transform: visible.has(i) ? "none" : "translateY(20px)",
                transition: `opacity 0.6s ease, transform 0.6s ease`,
              }}
              onClick={() => setLightbox({ src: image.src, alt: image.alt })}
              onMouseEnter={() => setHovered(image.src)}
              onMouseLeave={() => setHovered(null)}
            >
              <div style={{ overflow: "hidden", height: "clamp(280px, 32vw, 440px)", position: "relative" }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={image.src}
                  alt={image.alt}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    objectPosition: image.objectPosition,
                    display: "block",
                    transform: hovered === image.src ? "scale(1.05)" : "scale(1)",
                    transition: "transform 0.55s ease",
                  }}
                />
                {/* Hover overlay */}
                <div style={{
                  position: "absolute",
                  inset: 0,
                  background: "rgba(0,0,0,0.35)",
                  opacity: hovered === image.src ? 1 : 0,
                  transition: "opacity 0.3s ease",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}>
                  <div style={{
                    width: "48px",
                    height: "48px",
                    border: "1px solid rgba(255,255,255,0.6)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: "rgba(0,0,0,0.4)",
                    transform: hovered === image.src ? "scale(1)" : "scale(0.75)",
                    transition: "transform 0.3s ease",
                  }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35M11 8v6M8 11h6"/>
                    </svg>
                  </div>
                </div>
              </div>

              <div style={{ padding: "1.5rem 1.5rem 1.75rem" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.9rem" }}>
                  <span className="font-mono uppercase" style={{ fontSize: "9px", letterSpacing: "0.18em", color: "#F97316" }}>
                    {image.category}
                  </span>
                  <div style={{ width: "18px", height: "1px", background: "rgba(255,255,255,0.12)" }} />
                  <span className="font-mono uppercase" style={{ fontSize: "9px", letterSpacing: "0.18em", color: "#64748B" }}>
                    0{i + 1}
                  </span>
                </div>
                <h2 className="font-serif" style={{ fontSize: "1.45rem", color: "#FFFFFF", fontStyle: "italic", letterSpacing: "-0.02em", lineHeight: 1.05, marginBottom: "0.7rem" }}>
                  {image.title}
                </h2>
                <p className="font-body" style={{ fontSize: "0.925rem", color: "#94A3B8", lineHeight: 1.65 }}>
                  {image.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
