"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StickyEstimateCTA from "@/components/StickyEstimateCTA";

const SERVICE_OPTIONS = [
  "AC Repair",
  "AC Installation",
  "Furnace Repair",
  "Furnace Installation",
  "HVAC Maintenance",
  "Emergency Service",
  "System Replacement",
  "Diagnostics",
  "Other",
];

const inputStyle: React.CSSProperties = {
  width: "100%",
  background: "#111111",
  border: "1px solid rgba(255,255,255,0.1)",
  color: "#FFFFFF",
  padding: "12px 16px",
  fontFamily: "Inter, sans-serif",
  fontSize: "14px",
  outline: "none",
  boxSizing: "border-box",
  borderRadius: "2px",
};

const labelStyle: React.CSSProperties = {
  fontFamily: "Geist Mono, monospace",
  textTransform: "uppercase" as const,
  fontSize: "10px",
  letterSpacing: "0.1em",
  color: "#94A3B8",
  display: "block",
  marginBottom: "0.5rem",
};

function InputField({
  label,
  id,
  value,
  onChange,
  type = "text",
  placeholder,
}: {
  label: string;
  id: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  placeholder?: string;
}) {
  const [focused, setFocused] = useState(false);
  return (
    <div>
      <label htmlFor={id} style={labelStyle}>
        {label}
      </label>
      <input
        id={id}
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        style={{
          ...inputStyle,
          borderColor: focused ? "rgba(249,115,22,0.5)" : "rgba(255,255,255,0.1)",
        }}
      />
    </div>
  );
}

export default function ContactPage() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    service: "",
    message: "",
  });

  const [selectFocused, setSelectFocused] = useState(false);
  const [textareaFocused, setTextareaFocused] = useState(false);

  const set = (field: keyof typeof form) => (val: string) =>
    setForm((prev) => ({ ...prev, [field]: val }));

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    alert("Thanks! We'll be in touch soon.");
    setForm({ firstName: "", lastName: "", phone: "", service: "", message: "" });
  }

  return (
    <>
      <Navbar />
      <main style={{ background: "#080808", minHeight: "100vh" }}>

        {/* Hero */}
        <section
          style={{
            background: "#080808",
            paddingTop: "calc(5rem + 96px)",
            paddingBottom: "4rem",
            borderBottom: "1px solid rgba(255,255,255,0.07)",
          }}
        >
          <div className="max-w-7xl mx-auto px-5 sm:px-8">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-6 h-px" style={{ background: "#F97316" }} />
              <span
                className="font-mono uppercase"
                style={{ fontSize: "10px", letterSpacing: "0.2em", color: "#F97316" }}
              >
                Contact Us
              </span>
            </div>
            <h1
              className="font-serif"
              style={{
                fontSize: "clamp(2.8rem, 6.5vw, 5rem)",
                letterSpacing: "-0.02em",
                color: "#FFFFFF",
                fontStyle: "italic",
                lineHeight: 0.92,
                marginBottom: "1.5rem",
                maxWidth: "640px",
              }}
            >
              Get HVAC Help in Watertown.
            </h1>
            <p
              className="font-body"
              style={{
                color: "#64748B",
                fontSize: "1.0625rem",
                lineHeight: 1.7,
                maxWidth: "500px",
              }}
            >
              Call Mike directly for the fastest response, or fill out the form and
              we&apos;ll get back to you the same day.
            </p>
          </div>
        </section>

        {/* Main Content */}
        <section
          style={{
            background: "#080808",
            padding: "5rem 0",
          }}
        >
          <div className="max-w-7xl mx-auto px-5 sm:px-8">
            <div
              className="grid"
              style={{
                gridTemplateColumns: "1fr",
                gap: "48px",
              }}
            >
              {/* Using a responsive two-col layout via className */}
              <div className="grid md:grid-cols-[1fr_1.4fr]" style={{ gap: "48px", alignItems: "start" }}>

                {/* LEFT COLUMN — Contact Info */}
                <div>
                  <h2
                    className="font-serif"
                    style={{
                      fontSize: "1.4rem",
                      color: "#FFFFFF",
                      fontStyle: "italic",
                      marginBottom: "2rem",
                    }}
                  >
                    Reach Us
                  </h2>

                  {/* Phone */}
                  <div
                    className="flex items-start gap-4"
                    style={{ marginBottom: "1.75rem" }}
                  >
                    <div
                      style={{
                        width: "40px",
                        height: "40px",
                        borderRadius: "50%",
                        border: "1px solid rgba(255,255,255,0.12)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                      }}
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#F97316" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.18 2 2 0 0 1 3.58 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.56a16 16 0 0 0 6 6l.92-.92a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
                      </svg>
                    </div>
                    <div>
                      <div className="font-mono" style={{ fontSize: "10px", letterSpacing: "0.15em", color: "#94A3B8", marginBottom: "0.25rem" }}>
                        PHONE
                      </div>
                      <a
                        href="tel:6058815622"
                        className="font-mono"
                        style={{
                          fontSize: "1.25rem",
                          fontWeight: 600,
                          color: "#FFFFFF",
                          textDecoration: "none",
                          letterSpacing: "0.02em",
                        }}
                      >
                        (605) 881-5622
                      </a>
                    </div>
                  </div>

                  {/* Email */}
                  <div
                    className="flex items-start gap-4"
                    style={{ marginBottom: "1.75rem" }}
                  >
                    <div
                      style={{
                        width: "40px",
                        height: "40px",
                        borderRadius: "50%",
                        border: "1px solid rgba(255,255,255,0.12)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                      }}
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#F97316" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <rect width="20" height="16" x="2" y="4" rx="2"/>
                        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                      </svg>
                    </div>
                    <div>
                      <div className="font-mono" style={{ fontSize: "10px", letterSpacing: "0.15em", color: "#94A3B8", marginBottom: "0.25rem" }}>
                        EMAIL
                      </div>
                      <a
                        href="mailto:rrrhvacrescue@outlook.com"
                        className="font-body"
                        style={{
                          color: "#FFFFFF",
                          textDecoration: "none",
                          fontSize: "0.9375rem",
                        }}
                      >
                        rrrhvacrescue@outlook.com
                      </a>
                    </div>
                  </div>

                  {/* Location */}
                  <div
                    className="flex items-start gap-4"
                    style={{ marginBottom: "1.75rem" }}
                  >
                    <div
                      style={{
                        width: "40px",
                        height: "40px",
                        borderRadius: "50%",
                        border: "1px solid rgba(255,255,255,0.12)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                      }}
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#F97316" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
                        <circle cx="12" cy="10" r="3"/>
                      </svg>
                    </div>
                    <div>
                      <div className="font-mono" style={{ fontSize: "10px", letterSpacing: "0.15em", color: "#94A3B8", marginBottom: "0.25rem" }}>
                        SERVICE AREA
                      </div>
                      <span
                        className="font-body"
                        style={{ color: "#FFFFFF", fontSize: "0.9375rem" }}
                      >
                        Watertown, SD &amp; Surrounding Areas
                      </span>
                    </div>
                  </div>

                  {/* Hours */}
                  <div
                    className="flex items-start gap-4"
                    style={{ marginBottom: "2rem" }}
                  >
                    <div
                      style={{
                        width: "40px",
                        height: "40px",
                        borderRadius: "50%",
                        border: "1px solid rgba(255,255,255,0.12)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                      }}
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#F97316" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="10"/>
                        <polyline points="12 6 12 12 16 14"/>
                      </svg>
                    </div>
                    <div>
                      <div className="font-mono" style={{ fontSize: "10px", letterSpacing: "0.15em", color: "#94A3B8", marginBottom: "0.25rem" }}>
                        AVAILABILITY
                      </div>
                      <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                        <span className="font-body" style={{ color: "#FFFFFF", fontSize: "0.875rem" }}>
                          Mon–Sat: Available
                        </span>
                        <span className="font-body" style={{ color: "#F97316", fontSize: "0.875rem" }}>
                          Emergency: 7 Days
                        </span>
                        <span className="font-body" style={{ color: "#64748B", fontSize: "0.8125rem" }}>
                          Call to Confirm
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Map */}
                  <iframe
                    src="https://maps.google.com/maps?q=Watertown,+South+Dakota,+USA&t=m&z=11&ie=UTF8&iwloc=near&output=embed"
                    width="100%"
                    height="280"
                    style={{
                      filter: "grayscale(0.3) brightness(0.88)",
                      borderRadius: "0.5rem",
                      border: "1px solid rgba(255,255,255,0.1)",
                      marginTop: "2rem",
                      display: "block",
                    } as React.CSSProperties}
                    title="Watertown, SD map"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>

                {/* RIGHT COLUMN — Form */}
                <div
                  style={{
                    background: "#0f0f0f",
                    border: "1px solid rgba(249,115,22,0.18)",
                    borderRadius: "4px",
                    padding: "2.5rem",
                  }}
                >
                  <div
                    className="font-mono uppercase"
                    style={{
                      fontSize: "10px",
                      letterSpacing: "0.18em",
                      color: "#F97316",
                      marginBottom: "0.75rem",
                    }}
                  >
                    Free Estimate · Fast Response
                  </div>
                  <h2
                    className="font-serif"
                    style={{
                      fontSize: "clamp(1.6rem, 3vw, 2.2rem)",
                      color: "#FFFFFF",
                      fontStyle: "italic",
                      marginBottom: "2rem",
                      lineHeight: 1.1,
                    }}
                  >
                    Request Service Today
                  </h2>

                  <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                    {/* Name row */}
                    <div className="grid grid-cols-2" style={{ gap: "1rem" }}>
                      <InputField
                        label="First Name"
                        id="firstName"
                        value={form.firstName}
                        onChange={set("firstName")}
                        placeholder="Jane"
                      />
                      <InputField
                        label="Last Name"
                        id="lastName"
                        value={form.lastName}
                        onChange={set("lastName")}
                        placeholder="Smith"
                      />
                    </div>

                    {/* Phone */}
                    <InputField
                      label="Phone Number"
                      id="phone"
                      type="tel"
                      value={form.phone}
                      onChange={set("phone")}
                      placeholder="(605) 000-0000"
                    />

                    {/* Service */}
                    <div>
                      <label htmlFor="service" style={labelStyle}>
                        Service Needed
                      </label>
                      <select
                        id="service"
                        value={form.service}
                        onChange={(e) => set("service")(e.target.value)}
                        onFocus={() => setSelectFocused(true)}
                        onBlur={() => setSelectFocused(false)}
                        style={{
                          ...inputStyle,
                          borderColor: selectFocused
                            ? "rgba(249,115,22,0.5)"
                            : "rgba(255,255,255,0.1)",
                          appearance: "none",
                          cursor: "pointer",
                        }}
                      >
                        <option value="" style={{ background: "#111111" }}>
                          Select a service…
                        </option>
                        {SERVICE_OPTIONS.map((opt) => (
                          <option key={opt} value={opt} style={{ background: "#111111" }}>
                            {opt}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Message */}
                    <div>
                      <label htmlFor="message" style={labelStyle}>
                        Tell Us More
                      </label>
                      <textarea
                        id="message"
                        rows={4}
                        value={form.message}
                        onChange={(e) => set("message")(e.target.value)}
                        placeholder="Describe the issue or what you need…"
                        onFocus={() => setTextareaFocused(true)}
                        onBlur={() => setTextareaFocused(false)}
                        style={{
                          ...inputStyle,
                          borderColor: textareaFocused
                            ? "rgba(249,115,22,0.5)"
                            : "rgba(255,255,255,0.1)",
                          resize: "vertical",
                          minHeight: "110px",
                        }}
                      />
                    </div>

                    {/* Submit */}
                    <button
                      type="submit"
                      className="font-mono uppercase"
                      style={{
                        width: "100%",
                        background: "#F97316",
                        color: "#000000",
                        fontWeight: 600,
                        fontSize: "13px",
                        letterSpacing: "0.12em",
                        padding: "18px",
                        border: "none",
                        borderRadius: "2px",
                        cursor: "pointer",
                        marginTop: "0.25rem",
                      }}
                    >
                      Send Request
                    </button>

                    <p
                      className="font-mono"
                      style={{
                        fontSize: "10px",
                        letterSpacing: "0.08em",
                        color: "rgba(255,255,255,0.25)",
                        textAlign: "center",
                      }}
                    >
                      Mike responds fast — often same day
                    </p>
                  </form>
                </div>

              </div>
            </div>
          </div>
        </section>

      </main>
      <Footer />
      <StickyEstimateCTA />
    </>
  );
}
