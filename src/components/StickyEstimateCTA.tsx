"use client";

import { useEffect, useState } from "react";

export default function StickyEstimateCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Show after user scrolls past the hero (~100px)
    const onScroll = () => setVisible(window.scrollY > 120);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <a
      href="/contact"
      aria-label="Request a free estimate"
      className="fixed z-40"
      onMouseEnter={(e) => {
        (e.currentTarget as HTMLAnchorElement).style.transform = visible ? "translateY(-2px)" : "translateY(12px)";
        (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 8px 32px rgba(249,115,22,0.5)";
      }}
      onMouseLeave={(e) => {
        (e.currentTarget as HTMLAnchorElement).style.transform = visible ? "translateY(0)" : "translateY(12px)";
        (e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 4px 24px rgba(249,115,22,0.35)";
      }}
      style={{
        bottom: "28px",
        right: "24px",
        background: "#f97316",
        color: "#ffffff",
        borderRadius: "999px",
        padding: "14px 22px",
        display: "flex",
        alignItems: "center",
        gap: "8px",
        boxShadow: "0 4px 24px rgba(249,115,22,0.35)",
        opacity: visible ? 1 : 0,
        pointerEvents: visible ? "auto" : "none",
        transform: visible ? "translateY(0)" : "translateY(12px)",
        fontFamily: "'Inter', sans-serif",
        fontWeight: 700,
        fontSize: "13px",
        letterSpacing: "0.04em",
        textDecoration: "none",
        whiteSpace: "nowrap",
        transition: "opacity 0.3s, transform 0.3s, box-shadow 0.2s",
      }}
    >
      <svg
        width="14"
        height="14"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{ flexShrink: 0 }}
      >
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
        <polyline points="14 2 14 8 20 8"/>
        <line x1="16" y1="13" x2="8" y2="13"/>
        <line x1="16" y1="17" x2="8" y2="17"/>
        <polyline points="10 9 9 9 8 9"/>
      </svg>
      Free Estimate
    </a>
  );
}
