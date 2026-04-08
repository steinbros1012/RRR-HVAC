"use client";

import { useEffect, useState } from "react";

const PHONE = "(605) 881-5622";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { label: "Services", href: "/#services" },
    { label: "Why RRR", href: "/#why" },
    { label: "Reviews", href: "/#reviews" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/#contact" },
  ];

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        height: "72px",
        background: scrolled ? "rgba(8,8,8,0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(16px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.08)" : "1px solid transparent",
      }}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 h-full flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2.5">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/logo.png"
            alt="RRR HVAC Rescue LLC"
            width={36}
            height={36}
            style={{ objectFit: "contain" }}
          />
          <div>
            <div
              className="font-serif leading-none"
              style={{ fontSize: "15px", color: "#FFFFFF", letterSpacing: "-0.01em" }}
            >
              RRR HVAC
            </div>
            <div
              className="font-mono uppercase mt-0.5"
              style={{ fontSize: "8px", letterSpacing: "0.18em", color: "#F97316" }}
            >
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
              style={{ fontSize: "11px", letterSpacing: "0.1em", color: "#94A3B8" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "#FFFFFF")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "#94A3B8")}
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* CTA — orange border, fills on hover */}
        <a
          href={`tel:${PHONE.replace(/\D/g, "")}`}
          className="hidden md:flex items-center font-mono uppercase transition-all duration-150"
          style={{
            fontSize: "11px",
            letterSpacing: "0.1em",
            padding: "11px 22px",
            borderRadius: "999px",
            border: "1px solid #F97316",
            color: "#F97316",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "#F97316";
            e.currentTarget.style.color = "#000000";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "transparent";
            e.currentTarget.style.color = "#F97316";
          }}
        >
          Call Now
        </a>

        {/* Mobile toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden p-2 flex flex-col justify-center gap-[5px]"
          aria-label="Toggle menu"
        >
          <span
            className="block w-5 h-px transition-transform duration-200 origin-center"
            style={{
              background: "#E2E8F0",
              transform: menuOpen ? "rotate(45deg) translateY(3px)" : "none",
            }}
          />
          <span
            className="block w-5 h-px transition-opacity duration-200"
            style={{ background: "#E2E8F0", opacity: menuOpen ? 0 : 1 }}
          />
          <span
            className="block w-5 h-px transition-transform duration-200 origin-center"
            style={{
              background: "#E2E8F0",
              transform: menuOpen ? "rotate(-45deg) translateY(-3px)" : "none",
            }}
          />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          className="md:hidden px-5 pb-6 pt-2"
          style={{
            background: "rgba(8,8,8,0.97)",
            borderBottom: "1px solid rgba(255,255,255,0.08)",
          }}
        >
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className="block py-4 font-mono uppercase"
              style={{
                fontSize: "12px",
                letterSpacing: "0.1em",
                color: "#E2E8F0",
                borderBottom: "1px solid rgba(255,255,255,0.06)",
              }}
            >
              {l.label}
            </a>
          ))}
          <a
            href={`tel:${PHONE.replace(/\D/g, "")}`}
            className="mt-4 flex items-center justify-center font-mono uppercase"
            style={{
              fontSize: "11px",
              letterSpacing: "0.1em",
              padding: "12px",
              borderRadius: "999px",
              border: "1px solid #F97316",
              color: "#F97316",
            }}
          >
            Call Now — {PHONE}
          </a>
        </div>
      )}
    </header>
  );
}
