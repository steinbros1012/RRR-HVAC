import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StickyEstimateCTA from "@/components/StickyEstimateCTA";

export const metadata: Metadata = {
  title: "About RRR HVAC Rescue LLC | Watertown, SD",
  description:
    "Meet Mike — Watertown's trusted HVAC technician. Licensed, insured, and committed to fast, honest heating and cooling service across South Dakota.",
};

const values = [
  {
    title: "Show Up On Time",
    desc: "Scheduling with RRR means Mike is at your door when he says he will be. No four-hour windows. No excuses.",
  },
  {
    title: "Explain Everything",
    desc: "Mike diagnoses your system and explains what's wrong in plain language before any work begins. No surprises.",
  },
  {
    title: "Fix It Right",
    desc: "Every repair is done to last. If something isn't right, we come back and make it right. Simple as that.",
  },
  {
    title: "Leave It Clean",
    desc: "Your home or business looks exactly as it did when Mike arrived — or better. The job isn't done until the site is.",
  },
];

const credentials = [
  "Licensed HVAC Technician — South Dakota",
  "Fully Insured",
  "All Makes & Models",
  "Residential & Light Commercial",
  "New Installs & Replacements",
  "Emergency Response Available",
];

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main style={{ background: "#f2f2f2" }}>

        {/* ── Hero ─────────────────────────────────────────────────────────── */}
        <section
          className="pt-36 pb-20 sm:pb-28"
          style={{ background: "#f2f2f2", borderBottom: "1px solid #e2e2e2" }}
        >
          <div className="max-w-7xl mx-auto px-5 sm:px-8">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-6 h-px" style={{ background: "#f97316" }} />
              <span className="font-satoshi text-[11px] tracking-[0.2em] uppercase text-[#f97316]">
                About RRR HVAC
              </span>
            </div>

            <div className="grid md:grid-cols-2 gap-16 items-end">
              <div>
                <h1
                  className="font-clash font-bold leading-none mb-6"
                  style={{
                    fontSize: "clamp(3rem, 7vw, 5.5rem)",
                    letterSpacing: "-0.04em",
                    color: "#111111",
                  }}
                >
                  Meet Mike.
                  <br />
                  <span style={{ color: "#f97316" }}>Your</span> HVAC
                  <br />
                  Expert.
                </h1>
                <p
                  className="font-satoshi text-lg leading-relaxed"
                  style={{ color: "#838282", maxWidth: "440px" }}
                >
                  RRR HVAC Rescue LLC was built on one simple idea: Watertown deserves a
                  heating and cooling company that treats customers like neighbors — because we
                  are neighbors.
                </p>
              </div>

              <div
                className="p-8 sm:p-10"
                style={{ background: "#111111" }}
              >
                <div className="mb-6">
                  <div
                    className="font-satoshi text-[10px] tracking-[0.18em] uppercase mb-1"
                    style={{ color: "#838282" }}
                  >
                    Owner &amp; Lead Technician
                  </div>
                  <div
                    className="font-clash font-bold text-3xl leading-none"
                    style={{ color: "#ffffff", letterSpacing: "-0.03em" }}
                  >
                    Mike
                  </div>
                  <div
                    className="font-satoshi text-sm mt-1"
                    style={{ color: "#f97316" }}
                  >
                    RRR HVAC Rescue LLC
                  </div>
                </div>
                <div className="h-px mb-6" style={{ background: "#2a2a2a" }} />
                <ul className="space-y-3">
                  {credentials.map((c) => (
                    <li key={c} className="flex items-center gap-3">
                      <div
                        className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                        style={{ background: "#f97316" }}
                      />
                      <span className="font-satoshi text-sm" style={{ color: "#b6b5b5" }}>
                        {c}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ── Story ────────────────────────────────────────────────────────── */}
        <section className="py-20 sm:py-28" style={{ borderBottom: "1px solid #e2e2e2" }}>
          <div className="max-w-7xl mx-auto px-5 sm:px-8">
            <div className="grid md:grid-cols-2 gap-16">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-6 h-px" style={{ background: "#f97316" }} />
                  <span className="font-satoshi text-[11px] tracking-[0.2em] uppercase text-[#f97316]">
                    Our Story
                  </span>
                </div>
                <h2
                  className="font-clash font-bold leading-tight mb-6"
                  style={{
                    fontSize: "clamp(2rem, 4vw, 3rem)",
                    letterSpacing: "-0.04em",
                    color: "#111111",
                  }}
                >
                  Built for
                  <br />
                  Watertown.
                </h2>
              </div>

              <div className="space-y-6">
                <p
                  className="font-satoshi text-base leading-relaxed"
                  style={{ color: "#838282" }}
                >
                  RRR stands for what every HVAC call really is: <strong style={{ color: "#111111" }}>Rescue, Repair, Replace.</strong> Whether your furnace quit at midnight or your AC is struggling through a South Dakota summer, we show up fast and fix it right.
                </p>
                <p
                  className="font-satoshi text-base leading-relaxed"
                  style={{ color: "#838282" }}
                >
                  Mike started RRR HVAC Rescue LLC because he saw too many homeowners getting burned by big companies — long wait times, vague pricing, and technicians who barely explained what they'd done. He set out to do it differently.
                </p>
                <p
                  className="font-satoshi text-base leading-relaxed"
                  style={{ color: "#838282" }}
                >
                  Today, RRR HVAC serves Watertown and the surrounding area with the kind of service you&apos;d expect from someone who actually cares about this community. No call centers. No upsells. Just honest HVAC work done right.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── Values ───────────────────────────────────────────────────────── */}
        <section
          className="py-20 sm:py-28"
          style={{ background: "#111111", borderBottom: "1px solid #1e1e1e" }}
        >
          <div className="max-w-7xl mx-auto px-5 sm:px-8">
            <div className="flex items-center gap-3 mb-12">
              <div className="w-6 h-px" style={{ background: "#f97316" }} />
              <span className="font-satoshi text-[11px] tracking-[0.2em] uppercase text-[#f97316]">
                Our Standards
              </span>
            </div>

            <h2
              className="font-clash font-bold leading-none mb-14"
              style={{
                fontSize: "clamp(2rem, 4.5vw, 3.5rem)",
                letterSpacing: "-0.04em",
                color: "#ffffff",
              }}
            >
              How We Work
            </h2>

            <div className="grid sm:grid-cols-2 gap-px" style={{ background: "#2a2a2a" }}>
              {values.map((v, i) => (
                <div
                  key={v.title}
                  className="p-8"
                  style={{ background: i % 2 === 0 ? "#141414" : "#0f0f0f" }}
                >
                  <div
                    className="font-clash font-bold text-4xl leading-none mb-4 select-none"
                    style={{ color: "#2a2a2a", letterSpacing: "-0.04em" }}
                    aria-hidden="true"
                  >
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <h3
                    className="font-clash font-bold text-xl leading-tight mb-3"
                    style={{ color: "#ffffff", letterSpacing: "-0.02em" }}
                  >
                    {v.title}
                  </h3>
                  <p className="font-satoshi text-sm leading-relaxed" style={{ color: "#838282" }}>
                    {v.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Service area ─────────────────────────────────────────────────── */}
        <section className="py-20 sm:py-28" style={{ borderBottom: "1px solid #e2e2e2" }}>
          <div className="max-w-7xl mx-auto px-5 sm:px-8">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-6 h-px" style={{ background: "#f97316" }} />
                  <span className="font-satoshi text-[11px] tracking-[0.2em] uppercase text-[#f97316]">
                    Where We Work
                  </span>
                </div>
                <h2
                  className="font-clash font-bold leading-none mb-6"
                  style={{
                    fontSize: "clamp(2rem, 4vw, 3rem)",
                    letterSpacing: "-0.04em",
                    color: "#111111",
                  }}
                >
                  Watertown &amp;
                  <br />
                  Surrounding Area
                </h2>
                <p
                  className="font-satoshi text-base leading-relaxed mb-8"
                  style={{ color: "#838282", maxWidth: "400px" }}
                >
                  RRR HVAC serves Watertown, SD and the surrounding communities. Not sure if we
                  cover your area? Call us — if we can get there, we will.
                </p>
                <a
                  href="tel:6058815622"
                  className="inline-flex items-center gap-3 font-satoshi font-bold text-sm px-7 py-3.5 rounded-full transition-all duration-150 hover:opacity-90"
                  style={{ background: "#111111", color: "#ffffff" }}
                >
                  Call (605) 881-5622
                </a>
              </div>

              <div className="space-y-px" style={{ background: "#e2e2e2" }}>
                {[
                  "Watertown, SD (Primary)",
                  "Codington County",
                  "Grant County",
                  "Hamlin County",
                  "Clark County",
                  "Call for other areas →",
                ].map((area, i) => (
                  <div
                    key={area}
                    className="px-6 py-4 flex items-center justify-between"
                    style={{ background: i % 2 === 0 ? "#f2f2f2" : "#ffffff" }}
                  >
                    <span className="font-satoshi text-sm font-medium" style={{ color: i === 0 ? "#111111" : "#838282" }}>
                      {area}
                    </span>
                    {i === 0 && (
                      <span
                        className="font-satoshi text-[10px] tracking-[0.12em] uppercase px-2.5 py-1"
                        style={{ border: "1px solid #f97316", color: "#f97316" }}
                      >
                        Home Base
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── CTA ──────────────────────────────────────────────────────────── */}
        <section
          className="py-20 sm:py-28"
          style={{ background: "#f97316" }}
        >
          <div className="max-w-7xl mx-auto px-5 sm:px-8 text-center">
            <h2
              className="font-clash font-bold leading-none mb-6"
              style={{
                fontSize: "clamp(2.4rem, 5vw, 4rem)",
                letterSpacing: "-0.04em",
                color: "#ffffff",
              }}
            >
              Ready to Get Started?
            </h2>
            <p
              className="font-satoshi text-lg leading-relaxed mb-10 mx-auto"
              style={{ color: "rgba(255,255,255,0.8)", maxWidth: "480px" }}
            >
              Call Mike directly or send a message. For heating and cooling emergencies, we pick
              up — even after hours.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:6058815622"
                className="inline-flex items-center justify-center gap-3 font-satoshi font-bold text-base px-8 py-4 rounded-full transition-all duration-150 hover:bg-[#111111]"
                style={{ background: "#ffffff", color: "#f97316" }}
              >
                Call (605) 881-5622
              </a>
              <a
                href="/#contact"
                className="inline-flex items-center justify-center gap-2 font-satoshi font-medium text-base px-8 py-4 rounded-full transition-all duration-150"
                style={{ border: "1px solid rgba(255,255,255,0.5)", color: "#ffffff" }}
              >
                Request Service Online
              </a>
            </div>
          </div>
        </section>

      </main>
      <Footer />
      <StickyEstimateCTA />
    </>
  );
}
