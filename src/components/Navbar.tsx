"use client";

import { useEffect, useState } from "react";

const PHONE = "(605) 881-5622";

const links = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Gallery", href: "/gallery" },
  { label: "About", href: "/about" },
  { label: "Reviews", href: "/reviews" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Top info bar */}
      <div style={{ background: "#080808", borderBottom: "1px solid rgba(255,255,255,0.07)", padding: "7px 0" }}>
        <div className="max-w-7xl mx-auto px-5 sm:px-8 flex items-center justify-between">
          <div className="flex items-center gap-5">
            <a
              href={`tel:${PHONE.replace(/\D/g, "")}`}
              className="font-mono transition-colors duration-150"
              style={{ fontSize: "11px", letterSpacing: "0.06em", color: "#94A3B8", textDecoration: "none" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#FFFFFF")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#94A3B8")}
            >
              {PHONE}
            </a>
            <span className="hidden sm:block font-mono" style={{ fontSize: "11px", color: "rgba(255,255,255,0.15)" }}>|</span>
            <span className="hidden sm:block font-mono" style={{ fontSize: "11px", color: "#64748B", letterSpacing: "0.06em" }}>
              Watertown, South Dakota
            </span>
          </div>
          <span
            className="hidden sm:block font-mono uppercase"
            style={{ fontSize: "10px", letterSpacing: "0.14em", color: "#F97316" }}
          >
            Emergency Service Available
          </span>
        </div>
      </div>

      {/* Main nav */}
      <div
        style={{
          height: "62px",
          background: "rgba(8,8,8,0.96)",
          backdropFilter: "blur(20px)",
          borderBottom: "1px solid rgba(255,255,255,0.07)",
        }}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8 h-full flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2.5" style={{ textDecoration: "none" }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/logo.png" alt="RRR HVAC Rescue LLC" width={30} height={30} style={{ objectFit: "contain" }} />
            <div>
              <div className="font-serif leading-none" style={{ fontSize: "14px", color: "#FFFFFF", letterSpacing: "-0.01em" }}>
                RRR HVAC
              </div>
              <div className="font-mono uppercase mt-0.5" style={{ fontSize: "7px", letterSpacing: "0.22em", color: "#F97316" }}>
                Rescue LLC
              </div>
            </div>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="font-mono uppercase transition-colors duration-150"
                style={{ fontSize: "11px", letterSpacing: "0.1em", color: "#94A3B8", textDecoration: "none" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#FFFFFF")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#94A3B8")}
              >
                {l.label}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <a
            href="/contact"
            className="hidden md:flex items-center font-mono uppercase font-semibold"
            style={{
              fontSize: "11px",
              letterSpacing: "0.12em",
              padding: "10px 22px",
              background: "#F97316",
              color: "#000000",
              textDecoration: "none",
              borderRadius: "2px",
              transition: "opacity 0.15s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.85")}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
          >
            Request Service
          </a>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 flex flex-col justify-center gap-[5px]"
            aria-label="Toggle menu"
          >
            <span className="block w-5 h-px transition-transform duration-200 origin-center"
              style={{ background: "#E2E8F0", transform: menuOpen ? "rotate(45deg) translateY(3px)" : "none" }} />
            <span className="block w-5 h-px transition-opacity duration-200"
              style={{ background: "#E2E8F0", opacity: menuOpen ? 0 : 1 }} />
            <span className="block w-5 h-px transition-transform duration-200 origin-center"
              style={{ background: "#E2E8F0", transform: menuOpen ? "rotate(-45deg) translateY(-3px)" : "none" }} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden px-5 pb-6 pt-1" style={{ background: "rgba(8,8,8,0.99)", borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className="block py-4 font-mono uppercase"
              style={{ fontSize: "12px", letterSpacing: "0.1em", color: "#E2E8F0", borderBottom: "1px solid rgba(255,255,255,0.06)", textDecoration: "none" }}
            >
              {l.label}
            </a>
          ))}
          <a
            href="/contact"
            className="mt-5 flex items-center justify-center font-mono uppercase font-semibold"
            style={{ fontSize: "12px", letterSpacing: "0.12em", padding: "14px", background: "#F97316", color: "#000000", textDecoration: "none", borderRadius: "2px" }}
          >
            Request Service
          </a>
          <a
            href={`tel:${PHONE.replace(/\D/g, "")}`}
            className="mt-3 flex items-center justify-center font-mono"
            style={{ fontSize: "12px", color: "#94A3B8", textDecoration: "none" }}
          >
            {PHONE}
          </a>
        </div>
      )}
    </header>
  );
}
