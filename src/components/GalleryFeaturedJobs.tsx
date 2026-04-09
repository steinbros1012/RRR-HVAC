"use client";

import { useEffect, useRef, useState } from "react";
import Lightbox from "./Lightbox";

type Photo = {
  src: string;
  alt: string;
  label: string;
  objectPosition: string;
};

type Job = {
  category: string;
  title: string;
  description: string;
  photos: Photo[];
};

function JobCard({ job, index, onOpen }: { job: Job; index: number; onOpen: (src: string, alt: string) => void }) {
  const [hovered, setHovered] = useState<string | null>(null);
  const ref = useRef<HTMLElement | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setInView(true); obs.unobserve(el); } },
      { threshold: 0.08 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <article
      ref={ref}
      style={{
        background: "#0d0d0d",
        border: "1px solid rgba(255,255,255,0.08)",
        opacity: inView ? 1 : 0,
        transform: inView ? "none" : "translateY(24px)",
        transition: `opacity 0.65s ease ${index * 120}ms, transform 0.65s ease ${index * 120}ms`,
      }}
    >
      <div className="grid xl:grid-cols-[0.9fr_1.1fr]" style={{ gap: "2px" }}>
        <div style={{ padding: "2rem" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1rem" }}>
            <span className="font-mono uppercase" style={{ fontSize: "9px", letterSpacing: "0.18em", color: "#F97316" }}>
              {job.category}
            </span>
            <div style={{ width: "18px", height: "1px", background: "rgba(255,255,255,0.12)" }} />
            <span className="font-mono uppercase" style={{ fontSize: "9px", letterSpacing: "0.18em", color: "#64748B" }}>
              Job 0{index + 1}
            </span>
          </div>
          <h2 className="font-serif" style={{ fontSize: "clamp(2rem, 3.5vw, 3rem)", color: "#FFFFFF", fontStyle: "italic", letterSpacing: "-0.02em", lineHeight: 0.94, marginBottom: "1rem" }}>
            {job.title}
          </h2>
          <p className="font-body" style={{ fontSize: "0.975rem", color: "#94A3B8", lineHeight: 1.75, maxWidth: "34rem" }}>
            {job.description}
          </p>
          <div style={{ marginTop: "1.5rem", display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#F97316" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35M11 8v6M8 11h6"/>
            </svg>
            <span className="font-mono uppercase" style={{ fontSize: "9px", letterSpacing: "0.16em", color: "#475569" }}>
              Click photo to expand
            </span>
          </div>
        </div>

        <div className="grid md:grid-cols-2" style={{ gap: "2px", background: "rgba(255,255,255,0.05)" }}>
          {job.photos.map((photo) => (
            <div
              key={photo.src}
              style={{ position: "relative", background: "#111111", cursor: "zoom-in" }}
              onClick={() => onOpen(photo.src, photo.alt)}
              onMouseEnter={() => setHovered(photo.src)}
              onMouseLeave={() => setHovered(null)}
            >
              <div style={{ overflow: "hidden", height: "clamp(280px, 30vw, 420px)" }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={photo.src}
                  alt={photo.alt}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    objectPosition: photo.objectPosition,
                    display: "block",
                    transform: hovered === photo.src ? "scale(1.05)" : "scale(1)",
                    transition: "transform 0.55s ease",
                  }}
                />
              </div>
              {/* Hover overlay */}
              <div style={{
                position: "absolute",
                inset: 0,
                background: "rgba(0,0,0,0.3)",
                opacity: hovered === photo.src ? 1 : 0,
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
                  transform: hovered === photo.src ? "scale(1)" : "scale(0.75)",
                  transition: "transform 0.3s ease",
                  background: "rgba(0,0,0,0.4)",
                }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35M11 8v6M8 11h6"/>
                  </svg>
                </div>
              </div>
              <div style={{ position: "absolute", left: "1rem", bottom: "1rem", padding: "0.45rem 0.65rem", background: "rgba(8,8,8,0.72)", border: "1px solid rgba(255,255,255,0.08)" }}>
                <span className="font-mono uppercase" style={{ fontSize: "9px", letterSpacing: "0.18em", color: "#E2E8F0" }}>
                  {photo.label}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </article>
  );
}

export default function GalleryFeaturedJobs({ jobs }: { jobs: Job[] }) {
  const [lightbox, setLightbox] = useState<{ src: string; alt: string } | null>(null);

  return (
    <>
      {lightbox && <Lightbox src={lightbox.src} alt={lightbox.alt} onClose={() => setLightbox(null)} />}
      <section style={{ padding: "4rem 0", borderBottom: "1px solid rgba(255,255,255,0.07)" }}>
        <div className="max-w-7xl mx-auto px-5 sm:px-8 space-y-10">
          {jobs.map((job, i) => (
            <JobCard key={job.title} job={job} index={i} onOpen={(src, alt) => setLightbox({ src, alt })} />
          ))}
        </div>
      </section>
    </>
  );
}
