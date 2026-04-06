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
      className="py-24 sm:py-32 relative overflow-hidden"
      style={{
        background: "radial-gradient(ellipse 100% 80% at 50% 100%, #1a2d4a 0%, #080c14 60%)",
      }}
    >
      {/* Glow */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] pointer-events-none"
        style={{ background: "radial-gradient(ellipse, rgba(249,115,22,0.07) 0%, transparent 70%)" }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <div>
            <div className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/20 rounded-full px-4 py-1.5 mb-6">
              <span className="text-orange-300 text-sm font-medium tracking-wide">Get In Touch</span>
            </div>
            <h2 className="text-4xl sm:text-5xl font-black text-white tracking-tight mb-6">
              Need HVAC Help<br />in Watertown?
            </h2>
            <p className="text-slate-400 text-lg leading-relaxed mb-8">
              Call or send a message and Mike will get back to you fast. For emergencies, call directly — we pick up.
            </p>

            <div className="space-y-5">
              <a
                href={`tel:${PHONE.replace(/\D/g, "")}`}
                className="flex items-center gap-4 group"
              >
                <div className="w-12 h-12 rounded-2xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center group-hover:bg-orange-500/20 transition-colors">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#f97316" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.4 2 2 0 0 1 3.6 1.24h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.77a16 16 0 0 0 6.29 6.29l.95-.95a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                  </svg>
                </div>
                <div>
                  <div className="text-slate-400 text-xs uppercase tracking-wider mb-0.5">Phone</div>
                  <div className="text-white font-semibold text-lg">{PHONE}</div>
                </div>
              </a>

              <a
                href={`mailto:${EMAIL}`}
                className="flex items-center gap-4 group"
              >
                <div className="w-12 h-12 rounded-2xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center group-hover:bg-orange-500/20 transition-colors">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#f97316" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                    <polyline points="22,6 12,13 2,6"/>
                  </svg>
                </div>
                <div>
                  <div className="text-slate-400 text-xs uppercase tracking-wider mb-0.5">Email</div>
                  <div className="text-white font-semibold">{EMAIL}</div>
                </div>
              </a>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#f97316" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                </div>
                <div>
                  <div className="text-slate-400 text-xs uppercase tracking-wider mb-0.5">Service Area</div>
                  <div className="text-white font-semibold">Watertown, SD & Surrounding Areas</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: contact form */}
          <div className="bg-[#0f1623] border border-white/5 rounded-3xl p-8">
            <h3 className="text-white font-bold text-xl mb-6">Request Service</h3>
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-slate-400 text-sm mb-2 block">First Name</label>
                  <input
                    type="text"
                    required
                    className="w-full bg-[#080c14] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-orange-500/50 transition-colors"
                    placeholder="Jane"
                  />
                </div>
                <div>
                  <label className="text-slate-400 text-sm mb-2 block">Last Name</label>
                  <input
                    type="text"
                    required
                    className="w-full bg-[#080c14] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-orange-500/50 transition-colors"
                    placeholder="Smith"
                  />
                </div>
              </div>

              <div>
                <label className="text-slate-400 text-sm mb-2 block">Phone Number</label>
                <input
                  type="tel"
                  required
                  className="w-full bg-[#080c14] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-orange-500/50 transition-colors"
                  placeholder="(605) 555-0100"
                />
              </div>

              <div>
                <label className="text-slate-400 text-sm mb-2 block">Service Needed</label>
                <select
                  required
                  className="w-full bg-[#080c14] border border-white/10 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-orange-500/50 transition-colors"
                >
                  <option value="" className="text-slate-600">Select a service...</option>
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
                <label className="text-slate-400 text-sm mb-2 block">Tell Us More</label>
                <textarea
                  rows={4}
                  className="w-full bg-[#080c14] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-orange-500/50 transition-colors resize-none"
                  placeholder="Describe the issue or what you need..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-orange-500 hover:bg-orange-400 text-white font-bold py-4 rounded-xl transition-colors text-sm tracking-wide"
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
