"use client";

import { useRef } from "react";

const PHONE = "(605) 881-5622";
const EMAIL = "rrrhvacrescue@outlook.com";

export default function ContactCTA() {
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thanks! We'll be in touch shortly.");
    formRef.current?.reset();
  };

  const inputStyle: React.CSSProperties = {
    background: "#111111",
    border: "1px solid rgba(255,255,255,0.1)",
    color: "#FFFFFF",
    width: "100%",
    padding: "12px 16px",
    fontFamily: "'Inter', sans-serif",
    fontSize: "14px",
    outline: "none",
    transition: "border-color 0.15s",
  };

  const handleFocus = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    e.currentTarget.style.borderColor = "rgba(249,115,22,0.6)";
  };
  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)";
  };

  return (
    <section
      id="contact"
      className="py-20 sm:py-28"
      style={{ background: "#080808", borderTop: "1px solid rgba(255,255,255,0.06)" }}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Section label */}
        <div className="flex items-center gap-3 mb-10">
          <div className="w-6 h-px" style={{ background: "#F97316" }} />
          <span
            className="font-mono uppercase"
            style={{ fontSize: "11px", letterSpacing: "0.2em", color: "#F97316" }}
          >
            Get In Touch
          </span>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Left — info */}
          <div>
            <h2
              className="font-serif leading-none mb-6"
              style={{
                fontSize: "clamp(2.4rem, 5vw, 3.8rem)",
                letterSpacing: "-0.02em",
                color: "#FFFFFF",
                fontStyle: "italic",
                lineHeight: 0.92,
              }}
            >
              Need HVAC Help
              <br />
              in Watertown?
            </h2>
            <p
              className="font-body text-base leading-relaxed mb-10"
              style={{ color: "#94A3B8", maxWidth: "400px" }}
            >
              Call or send a message and Mike will get back to you fast. For emergencies, call
              directly — we pick up.
            </p>

            {/* Contact rows */}
            <div
              className="space-y-6"
              style={{ borderTop: "1px solid rgba(255,255,255,0.06)", paddingTop: "28px" }}
            >
              <a
                href={`tel:${PHONE.replace(/\D/g, "")}`}
                className="flex items-center gap-5 group"
              >
                <div
                  className="w-10 h-10 flex items-center justify-center flex-shrink-0 rounded-full transition-all duration-150"
                  style={{ border: "1px solid rgba(255,255,255,0.1)" }}
                  onMouseEnter={(e) => (e.currentTarget.style.background = "#F97316")}
                  onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#94A3B8"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.4 2 2 0 0 1 3.6 1.24h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.77a16 16 0 0 0 6.29 6.29l.95-.95a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </div>
                <div>
                  <div
                    className="font-mono uppercase mb-0.5"
                    style={{ fontSize: "10px", letterSpacing: "0.15em", color: "#94A3B8" }}
                  >
                    Phone
                  </div>
                  <div
                    className="font-mono font-semibold text-xl group-hover:text-[#F97316] transition-colors duration-150"
                    style={{ color: "#FFFFFF", letterSpacing: "-0.01em" }}
                  >
                    {PHONE}
                  </div>
                </div>
              </a>

              <a
                href={`mailto:${EMAIL}`}
                className="flex items-center gap-5 group"
              >
                <div
                  className="w-10 h-10 flex items-center justify-center flex-shrink-0 rounded-full transition-all duration-150"
                  style={{ border: "1px solid rgba(255,255,255,0.1)" }}
                  onMouseEnter={(e) => (e.currentTarget.style.background = "#F97316")}
                  onMouseLeave={(e) => (e.currentTarget.style.background = "transparent")}
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#94A3B8"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                </div>
                <div>
                  <div
                    className="font-mono uppercase mb-0.5"
                    style={{ fontSize: "10px", letterSpacing: "0.15em", color: "#94A3B8" }}
                  >
                    Email
                  </div>
                  <div
                    className="font-body font-medium text-base group-hover:text-[#F97316] transition-colors duration-150"
                    style={{ color: "#FFFFFF" }}
                  >
                    {EMAIL}
                  </div>
                </div>
              </a>

              <div className="flex items-center gap-5">
                <div
                  className="w-10 h-10 flex items-center justify-center flex-shrink-0 rounded-full"
                  style={{ border: "1px solid rgba(255,255,255,0.1)" }}
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#94A3B8"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <div>
                  <div
                    className="font-mono uppercase mb-0.5"
                    style={{ fontSize: "10px", letterSpacing: "0.15em", color: "#94A3B8" }}
                  >
                    Service Area
                  </div>
                  <div className="font-body font-medium text-base" style={{ color: "#FFFFFF" }}>
                    Watertown, SD &amp; Surrounding Areas
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right — form */}
          <div
            className="p-8"
            style={{
              background: "#0f0f0f",
              border: "1px solid rgba(249,115,22,0.2)",
              borderRadius: "1rem",
              boxShadow: "0 0 0 1px rgba(249,115,22,0.06), 0 24px 64px rgba(0,0,0,0.4)",
            }}
          >
            {/* Form header with orange accent bar */}
            <div style={{ borderLeft: "3px solid #F97316", paddingLeft: "1rem", marginBottom: "1.75rem" }}>
              <p
                className="font-mono uppercase"
                style={{ fontSize: "10px", letterSpacing: "0.18em", color: "#F97316", marginBottom: "0.4rem" }}
              >
                Free Estimate · Fast Response
              </p>
              <h3
                className="font-serif"
                style={{
                  fontSize: "clamp(1.5rem, 3vw, 2rem)",
                  color: "#FFFFFF",
                  fontStyle: "italic",
                  letterSpacing: "-0.01em",
                  lineHeight: 1.05,
                }}
              >
                Request Service Today
              </h3>
            </div>
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                {["First Name", "Last Name"].map((label) => (
                  <div key={label}>
                    <label
                      className="font-mono uppercase mb-2 block"
                      style={{ fontSize: "10px", letterSpacing: "0.1em", color: "#94A3B8" }}
                    >
                      {label}
                    </label>
                    <input
                      type="text"
                      required
                      style={inputStyle}
                      placeholder={label === "First Name" ? "Jane" : "Smith"}
                      onFocus={handleFocus}
                      onBlur={handleBlur}
                    />
                  </div>
                ))}
              </div>

              <div>
                <label
                  className="font-mono uppercase mb-2 block"
                  style={{ fontSize: "10px", letterSpacing: "0.1em", color: "#94A3B8" }}
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  required
                  style={inputStyle}
                  placeholder="(605) 555-0100"
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                />
              </div>

              <div>
                <label
                  className="font-mono uppercase mb-2 block"
                  style={{ fontSize: "10px", letterSpacing: "0.1em", color: "#94A3B8" }}
                >
                  Service Needed
                </label>
                <select
                  required
                  style={{ ...inputStyle, cursor: "pointer" }}
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                >
                  <option value="">Select a service...</option>
                  <option>AC Repair</option>
                  <option>AC Installation</option>
                  <option>Furnace Repair</option>
                  <option>Furnace Installation</option>
                  <option>HVAC Maintenance</option>
                  <option>Emergency Service</option>
                  <option>System Replacement</option>
                  <option>Diagnostics / Troubleshooting</option>
                  <option>Other</option>
                </select>
              </div>

              <div>
                <label
                  className="font-mono uppercase mb-2 block"
                  style={{ fontSize: "10px", letterSpacing: "0.1em", color: "#94A3B8" }}
                >
                  Tell Us More
                </label>
                <textarea
                  rows={4}
                  style={{ ...inputStyle, resize: "none" }}
                  placeholder="Describe the issue or what you need..."
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                />
              </div>

              <button
                type="submit"
                className="w-full font-mono uppercase font-semibold"
                style={{
                  fontSize: "13px",
                  letterSpacing: "0.12em",
                  padding: "18px",
                  background: "#F97316",
                  color: "#000000",
                  border: "none",
                  cursor: "pointer",
                  transition: "opacity 0.15s",
                  borderRadius: "2px",
                }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLButtonElement).style.opacity = "0.85")}
                onMouseLeave={(e) => ((e.currentTarget as HTMLButtonElement).style.opacity = "1")}
              >
                Get My Free Estimate →
              </button>
              <p
                className="font-mono text-center"
                style={{ fontSize: "10px", letterSpacing: "0.1em", color: "rgba(255,255,255,0.25)", marginTop: "0.75rem" }}
              >
                Mike responds fast — often same day
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
