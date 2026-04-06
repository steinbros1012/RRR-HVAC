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
    { label: "Services", href: "#services" },
    { label: "Why RRR", href: "#why" },
    { label: "Reviews", href: "#reviews" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        height: "72px",
        background: scrolled ? "rgba(242,242,242,0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid #e2e2e2" : "1px solid transparent",
      }}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 h-full flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3">
          {/* Star-of-life badge */}
          <svg width="36" height="36" viewBox="0 0 36 36" fill="none" aria-hidden="true">
            {/* 3 bars at 0°, 60°, 120° forming 6-pointed star */}
            <rect x="15.5" y="2" width="5" height="32" rx="2.5" fill="#1e3a8a"/>
            <rect x="15.5" y="2" width="5" height="32" rx="2.5" fill="#1e3a8a" transform="rotate(60 18 18)"/>
            <rect x="15.5" y="2" width="5" height="32" rx="2.5" fill="#1e3a8a" transform="rotate(-60 18 18)"/>
            {/* White cross in center */}
            <rect x="11" y="16" width="14" height="4" rx="1" fill="white"/>
            <rect x="16" y="11" width="4" height="14" rx="1" fill="white"/>
            {/* Red center dot */}
            <circle cx="18" cy="18" r="2.5" fill="#dc2626"/>
          </svg>
          <div>
            <div className="font-clash text-[15px] font-bold leading-none tracking-tight text-[#111111]">
              RRR HVAC
            </div>
            <div className="font-satoshi text-[9px] tracking-[0.18em] uppercase mt-0.5 text-[#f97316]">
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
              className="font-satoshi text-[12px] uppercase tracking-[0.12em] text-[#838282] hover:text-[#111111] transition-colors duration-150"
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* CTA pill — border only, fills on hover */}
        <a
          href={`tel:${PHONE.replace(/\D/g, "")}`}
          className="hidden md:flex items-center font-satoshi text-[13px] font-medium tracking-wide px-5 py-2 rounded-full transition-all duration-150 text-[#111111] hover:bg-[#111111] hover:text-white"
          style={{ border: "1px solid #1e1e1e" }}
        >
          {PHONE}
        </a>

        {/* Mobile toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden p-2 flex flex-col justify-center gap-[5px]"
          aria-label="Toggle menu"
        >
          <span
            className="block w-5 h-px bg-[#111111] transition-transform duration-200 origin-center"
            style={{ transform: menuOpen ? "rotate(45deg) translateY(3px)" : "none" }}
          />
          <span
            className="block w-5 h-px bg-[#111111] transition-opacity duration-200"
            style={{ opacity: menuOpen ? 0 : 1 }}
          />
          <span
            className="block w-5 h-px bg-[#111111] transition-transform duration-200 origin-center"
            style={{ transform: menuOpen ? "rotate(-45deg) translateY(-3px)" : "none" }}
          />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          className="md:hidden px-5 pb-6 pt-2"
          style={{ background: "rgba(242,242,242,0.97)", borderBottom: "1px solid #e2e2e2" }}
        >
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className="block py-3 font-satoshi text-[12px] uppercase tracking-[0.12em] text-[#838282] border-b border-[#e2e2e2]"
            >
              {l.label}
            </a>
          ))}
          <a
            href={`tel:${PHONE.replace(/\D/g, "")}`}
            className="mt-4 flex items-center justify-center font-satoshi text-sm font-medium py-3 rounded-full text-[#111111]"
            style={{ border: "1px solid #1e1e1e" }}
          >
            Call Now — {PHONE}
          </a>
        </div>
      )}
    </header>
  );
}
