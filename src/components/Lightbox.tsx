"use client";

import { useEffect } from "react";

export default function Lightbox({
  src,
  alt,
  onClose,
}: {
  src: string;
  alt: string;
  onClose: () => void;
}) {
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", handler);
    return () => {
      document.body.style.overflow = "";
      document.removeEventListener("keydown", handler);
    };
  }, [onClose]);

  return (
    <div
      onClick={onClose}
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(0,0,0,0.95)",
        zIndex: 9999,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "2rem",
        cursor: "zoom-out",
        opacity: 1,
      }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={alt}
        onClick={(e) => e.stopPropagation()}
        style={{
          maxWidth: "100%",
          maxHeight: "90vh",
          objectFit: "contain",
          display: "block",
          cursor: "default",
          boxShadow: "0 0 60px rgba(0,0,0,0.8)",
        }}
      />
      <button
        onClick={onClose}
        aria-label="Close"
        className="font-mono"
        style={{
          position: "fixed",
          top: "1.5rem",
          right: "1.5rem",
          background: "rgba(255,255,255,0.06)",
          border: "1px solid rgba(255,255,255,0.18)",
          color: "#FFFFFF",
          cursor: "pointer",
          width: "44px",
          height: "44px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "18px",
          lineHeight: 1,
          transition: "background 0.15s",
        }}
        onMouseEnter={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.12)")}
        onMouseLeave={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.06)")}
      >
        ✕
      </button>

      <div
        className="font-mono uppercase"
        style={{
          position: "fixed",
          bottom: "1.5rem",
          left: "50%",
          transform: "translateX(-50%)",
          fontSize: "10px",
          letterSpacing: "0.16em",
          color: "rgba(255,255,255,0.3)",
          pointerEvents: "none",
        }}
      >
        Press ESC or click to close
      </div>
    </div>
  );
}
