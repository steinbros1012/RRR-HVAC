"use client";

import { useEffect, useRef, useState } from "react";

type Review = {
  name: string;
  location: string;
  text: string;
  tags: string[];
  highlight: string;
};

const INTERVAL = 5500;

export default function ReviewsExperience({ reviews }: { reviews: Review[] }) {
  const [index, setIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [fading, setFading] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const progressRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const goTo = (next: number) => {
    setFading(true);
    setTimeout(() => {
      setIndex(next);
      setProgress(0);
      setFading(false);
    }, 320);
  };

  const startCycle = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    if (progressRef.current) clearInterval(progressRef.current);

    setProgress(0);

    progressRef.current = setInterval(() => {
      setProgress((p) => Math.min(p + 100 / (INTERVAL / 50), 100));
    }, 50);

    intervalRef.current = setInterval(() => {
      setFading(true);
      setTimeout(() => {
        setIndex((i) => (i + 1) % reviews.length);
        setProgress(0);
        setFading(false);
      }, 320);
    }, INTERVAL);
  };

  useEffect(() => {
    startCycle();
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      if (progressRef.current) clearInterval(progressRef.current);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleNav = (i: number) => {
    if (i === index) return;
    if (intervalRef.current) clearInterval(intervalRef.current);
    if (progressRef.current) clearInterval(progressRef.current);
    goTo(i);
    setTimeout(() => startCycle(), 320);
  };

  const review = reviews[index];

  return (
    <section
      style={{
        background: "#0d0d0d",
        borderBottom: "1px solid rgba(255,255,255,0.07)",
        padding: "5rem 0 4rem",
      }}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8">

        {/* Quote area */}
        <div style={{ minHeight: "260px", marginBottom: "3.5rem", position: "relative" }}>
          {/* Large decorative quote mark */}
          <div
            aria-hidden="true"
            className="font-serif"
            style={{
              position: "absolute",
              top: "-2rem",
              left: "-0.5rem",
              fontSize: "12rem",
              lineHeight: 1,
              color: "rgba(249,115,22,0.06)",
              fontStyle: "italic",
              pointerEvents: "none",
              userSelect: "none",
            }}
          >
            &ldquo;
          </div>

          <div
            style={{
              opacity: fading ? 0 : 1,
              transform: fading ? "translateY(10px)" : "translateY(0)",
              transition: "opacity 0.32s ease, transform 0.32s ease",
            }}
          >
            {/* Tag */}
            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "2rem" }}>
              <div style={{ width: "24px", height: "1px", background: "#F97316" }} />
              <span
                className="font-mono uppercase"
                style={{ fontSize: "10px", letterSpacing: "0.2em", color: "#F97316" }}
              >
                {review.highlight}
              </span>
            </div>

            {/* Stars */}
            <div style={{ display: "flex", gap: "4px", marginBottom: "2rem" }}>
              {[0,1,2,3,4].map((i) => (
                <svg key={i} width={16} height={16} viewBox="0 0 24 24" aria-hidden="true">
                  <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" fill="#F97316" />
                </svg>
              ))}
            </div>

            {/* Quote */}
            <p
              className="font-serif"
              style={{
                fontSize: "clamp(1.55rem, 3vw, 2.5rem)",
                color: "#FFFFFF",
                fontStyle: "italic",
                letterSpacing: "-0.02em",
                lineHeight: 1.12,
                maxWidth: "860px",
                marginBottom: "2.5rem",
                position: "relative",
                zIndex: 1,
              }}
            >
              &ldquo;{review.text}&rdquo;
            </p>

            {/* Reviewer */}
            <div style={{ display: "flex", alignItems: "center", gap: "1.5rem", flexWrap: "wrap" }}>
              <div>
                <div className="font-body" style={{ fontWeight: 600, color: "#FFFFFF", fontSize: "0.9375rem" }}>
                  {review.name}
                </div>
                <div className="font-mono uppercase" style={{ fontSize: "10px", letterSpacing: "0.14em", color: "#475569", marginTop: "3px" }}>
                  {review.location}
                </div>
              </div>
              <div style={{ display: "flex", gap: "0.5rem" }}>
                {review.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-mono uppercase"
                    style={{
                      fontSize: "9px",
                      letterSpacing: "0.14em",
                      padding: "5px 9px",
                      border: "1px solid rgba(255,255,255,0.1)",
                      color: "#64748B",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Progress bar + navigation */}
        <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)", paddingTop: "2rem" }}>
          {/* Active progress bar */}
          <div style={{ height: "1px", background: "rgba(255,255,255,0.08)", marginBottom: "1.5rem", position: "relative", overflow: "hidden" }}>
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                height: "100%",
                width: `${progress}%`,
                background: "#F97316",
                transition: "width 0.05s linear",
              }}
            />
          </div>

          {/* Nav dots */}
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
            {reviews.map((r, i) => (
              <button
                key={r.name}
                type="button"
                onClick={() => handleNav(i)}
                aria-label={`View review by ${r.name}`}
                style={{
                  width: i === index ? "28px" : "6px",
                  height: "6px",
                  borderRadius: "3px",
                  background: i === index ? "#F97316" : "rgba(255,255,255,0.18)",
                  border: "none",
                  padding: 0,
                  cursor: "pointer",
                  transition: "width 0.3s ease, background 0.3s ease",
                  flexShrink: 0,
                }}
              />
            ))}

            {/* Counter */}
            <span
              className="font-mono"
              style={{ marginLeft: "auto", fontSize: "11px", color: "#475569", letterSpacing: "0.08em" }}
            >
              {String(index + 1).padStart(2, "0")} / {String(reviews.length).padStart(2, "0")}
            </span>
          </div>
        </div>

      </div>
    </section>
  );
}
