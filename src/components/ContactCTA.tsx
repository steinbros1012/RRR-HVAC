"use client";

import { useRef } from "react";

const PHONE = "(605) 555-0100";
const EMAIL = "hello@rrrhvac.com";

export default function ContactCTA() {
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thanks! We'll be in touch shortly.");
    formRef.current?.reset();
  };

  return (
    <section
      id="contact"
      className="py-20 sm:py-28"
      style={{ background: "#ffffff", borderTop: "1px solid #e2e2e2" }}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Section label */}
        <div className="flex items-center gap-3 mb-10">
          <div className="w-6 h-px" style={{ background: "#f97316" }} />
          <span className="font-satoshi text-[11px] tracking-[0.2em] uppercase text-[#f97316]">
            Get In Touch
          </span>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Left — info */}
          <div>
            <h2
              className="font-clash font-bold leading-none mb-6"
              style={{
                fontSize: "clamp(2.4rem, 5vw, 3.8rem)",
                letterSpacing: "-0.04em",
                color: "#111111",
              }}
            >
              Need HVAC Help
              <br />
              in Watertown?
            </h2>
            <p
              className="font-satoshi text-base leading-relaxed mb-10"
              style={{ color: "#838282", maxWidth: "400px" }}
            >
              Call or send a message and Mike will get back to you fast. For emergencies, call
              directly — we pick up.
            </p>

            {/* Contact rows */}
            <div className="space-y-6" style={{ borderTop: "1px solid #e2e2e2", paddingTop: "28px" }}>
              <a
                href={`tel:${PHONE.replace(/\D/g, "")}`}
                className="flex items-center gap-5 group"
              >
                <div
                  className="w-10 h-10 flex items-center justify-center flex-shrink-0 rounded-full transition-colors duration-150 group-hover:bg-[#111111]"
                  style={{ border: "1px solid #e2e2e2" }}
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="group-hover:stroke-white transition-colors duration-150"
                    stroke="#838282"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.4 2 2 0 0 1 3.6 1.24h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.77a16 16 0 0 0 6.29 6.29l.95-.95a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                </div>
                <div>
                  <div
                    className="font-satoshi text-[10px] tracking-[0.15em] uppercase mb-0.5"
                    style={{ color: "#b6b5b5" }}
                  >
                    Phone
                  </div>
                  <div
                    className="font-clash font-bold text-xl group-hover:text-[#f97316] transition-colors duration-150"
                    style={{ color: "#111111", letterSpacing: "-0.02em" }}
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
                  className="w-10 h-10 flex items-center justify-center flex-shrink-0 rounded-full transition-colors duration-150 group-hover:bg-[#111111]"
                  style={{ border: "1px solid #e2e2e2" }}
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    className="group-hover:stroke-white transition-colors duration-150"
                    stroke="#838282"
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
                    className="font-satoshi text-[10px] tracking-[0.15em] uppercase mb-0.5"
                    style={{ color: "#b6b5b5" }}
                  >
                    Email
                  </div>
                  <div
                    className="font-satoshi font-medium text-base group-hover:text-[#f97316] transition-colors duration-150"
                    style={{ color: "#111111" }}
                  >
                    {EMAIL}
                  </div>
                </div>
              </a>

              <div className="flex items-center gap-5">
                <div
                  className="w-10 h-10 flex items-center justify-center flex-shrink-0 rounded-full"
                  style={{ border: "1px solid #e2e2e2" }}
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#838282"
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
                    className="font-satoshi text-[10px] tracking-[0.15em] uppercase mb-0.5"
                    style={{ color: "#b6b5b5" }}
                  >
                    Service Area
                  </div>
                  <div className="font-satoshi font-medium text-base" style={{ color: "#111111" }}>
                    Watertown, SD & Surrounding Areas
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right — form */}
          <div
            className="p-8"
            style={{ background: "#f2f2f2", border: "1px solid #e2e2e2" }}
          >
            <h3
              className="font-clash font-bold text-2xl mb-6"
              style={{ color: "#111111", letterSpacing: "-0.03em" }}
            >
              Request Service
            </h3>
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                {["First Name", "Last Name"].map((label) => (
                  <div key={label}>
                    <label
                      className="font-satoshi text-[11px] tracking-[0.1em] uppercase mb-2 block"
                      style={{ color: "#838282" }}
                    >
                      {label}
                    </label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 font-satoshi text-sm transition-colors duration-150 outline-none"
                      style={{
                        background: "#ffffff",
                        border: "1px solid #e2e2e2",
                        color: "#111111",
                      }}
                      placeholder={label === "First Name" ? "Jane" : "Smith"}
                      onFocus={(e) => (e.currentTarget.style.borderColor = "#111111")}
                      onBlur={(e) => (e.currentTarget.style.borderColor = "#e2e2e2")}
                    />
                  </div>
                ))}
              </div>

              <div>
                <label
                  className="font-satoshi text-[11px] tracking-[0.1em] uppercase mb-2 block"
                  style={{ color: "#838282" }}
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  required
                  className="w-full px-4 py-3 font-satoshi text-sm transition-colors duration-150 outline-none"
                  style={{ background: "#ffffff", border: "1px solid #e2e2e2", color: "#111111" }}
                  placeholder="(605) 555-0100"
                  onFocus={(e) => (e.currentTarget.style.borderColor = "#111111")}
                  onBlur={(e) => (e.currentTarget.style.borderColor = "#e2e2e2")}
                />
              </div>

              <div>
                <label
                  className="font-satoshi text-[11px] tracking-[0.1em] uppercase mb-2 block"
                  style={{ color: "#838282" }}
                >
                  Service Needed
                </label>
                <select
                  required
                  className="w-full px-4 py-3 font-satoshi text-sm transition-colors duration-150 outline-none"
                  style={{ background: "#ffffff", border: "1px solid #e2e2e2", color: "#111111" }}
                  onFocus={(e) => (e.currentTarget.style.borderColor = "#111111")}
                  onBlur={(e) => (e.currentTarget.style.borderColor = "#e2e2e2")}
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
                  className="font-satoshi text-[11px] tracking-[0.1em] uppercase mb-2 block"
                  style={{ color: "#838282" }}
                >
                  Tell Us More
                </label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 font-satoshi text-sm transition-colors duration-150 outline-none resize-none"
                  style={{ background: "#ffffff", border: "1px solid #e2e2e2", color: "#111111" }}
                  placeholder="Describe the issue or what you need..."
                  onFocus={(e) => (e.currentTarget.style.borderColor = "#111111")}
                  onBlur={(e) => (e.currentTarget.style.borderColor = "#e2e2e2")}
                />
              </div>

              <button
                type="submit"
                className="w-full font-satoshi font-bold text-sm py-4 transition-all duration-150 hover:opacity-90 tracking-wide"
                style={{ background: "#111111", color: "#ffffff" }}
              >
                Send Request →
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
