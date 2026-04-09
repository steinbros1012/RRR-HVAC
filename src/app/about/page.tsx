import type { Metadata } from "next";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StickyEstimateCTA from "@/components/StickyEstimateCTA";
import AboutValues from "@/components/AboutValues";

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
      <main style={{ background: "#080808" }}>

        {/* Hero */}
        <section
          className="pt-36 pb-20 sm:pb-28"
          style={{ background: "#080808", borderBottom: "1px solid rgba(255,255,255,0.06)" }}
        >
          <div className="max-w-7xl mx-auto px-5 sm:px-8">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-6 h-px" style={{ background: "#F97316" }} />
              <span
                className="font-mono uppercase"
                style={{ fontSize: "11px", letterSpacing: "0.2em", color: "#F97316" }}
              >
                About RRR HVAC
              </span>
            </div>

            <div className="grid md:grid-cols-2 gap-16 items-end">
              <div>
                <h1
                  className="font-serif leading-none mb-6"
                  style={{
                    fontSize: "clamp(3rem, 7vw, 5.5rem)",
                    letterSpacing: "-0.02em",
                    color: "#FFFFFF",
                    fontStyle: "italic",
                    lineHeight: 0.88,
                  }}
                >
                  Meet Mike.
                  <br />
                  <span style={{ color: "#F97316" }}>Your</span> HVAC
                  <br />
                  Expert.
                </h1>
                <p
                  className="font-body text-lg leading-relaxed"
                  style={{ color: "#64748B", maxWidth: "440px" }}
                >
                  RRR HVAC Rescue LLC was built on one simple idea: Watertown deserves a
                  heating and cooling company that treats customers like neighbors — because we
                  are neighbors.
                </p>
              </div>

              <div className="flex flex-col gap-4">
                {/* Photo */}
                <div style={{ position: "relative", overflow: "hidden", border: "1px solid rgba(255,255,255,0.08)" }}>
                  <Image
                    src="/mike-and-wife.png"
                    alt="Mike — Owner of RRR HVAC Rescue LLC"
                    width={800}
                    height={600}
                    style={{ width: "100%", height: "360px", objectFit: "cover", objectPosition: "40% center", display: "block" }}
                  />
                  <div style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    padding: "1.25rem 1.5rem",
                    background: "linear-gradient(to top, rgba(8,8,8,0.92) 0%, transparent 100%)",
                  }}>
                    <div className="font-serif" style={{ fontSize: "1.25rem", color: "#FFFFFF", fontStyle: "italic" }}>Mike</div>
                    <div className="font-mono uppercase" style={{ fontSize: "10px", letterSpacing: "0.14em", color: "#F97316", marginTop: "2px" }}>
                      Owner &amp; Lead Technician — RRR HVAC Rescue LLC
                    </div>
                  </div>
                </div>

                {/* Credentials */}
                <div
                  className="p-6 sm:p-8"
                  style={{ background: "#111111", border: "1px solid rgba(255,255,255,0.08)" }}
                >
                  <ul className="space-y-3">
                    {credentials.map((c) => (
                      <li key={c} className="flex items-center gap-3">
                        <div
                          className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                          style={{ background: "#F97316" }}
                        />
                        <span className="font-body text-sm" style={{ color: "#E2E8F0" }}>
                          {c}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Story */}
        <section
          className="py-20 sm:py-28"
          style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}
        >
          <div className="max-w-7xl mx-auto px-5 sm:px-8">
            <div className="grid md:grid-cols-2 gap-16">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-6 h-px" style={{ background: "#F97316" }} />
                  <span
                    className="font-mono uppercase"
                    style={{ fontSize: "11px", letterSpacing: "0.2em", color: "#F97316" }}
                  >
                    Our Story
                  </span>
                </div>
                <h2
                  className="font-serif leading-tight mb-6"
                  style={{
                    fontSize: "clamp(2rem, 4vw, 3rem)",
                    letterSpacing: "-0.02em",
                    color: "#FFFFFF",
                    fontStyle: "italic",
                  }}
                >
                  Built for
                  <br />
                  Watertown.
                </h2>
              </div>

              <div className="space-y-6">
                <p className="font-body text-base leading-relaxed" style={{ color: "#64748B" }}>
                  RRR stands for what every HVAC call really is:{" "}
                  <strong style={{ color: "#FFFFFF" }}>Rescue, Repair, Replace.</strong> Whether
                  your furnace quit at midnight or your AC is struggling through a South Dakota
                  summer, we show up fast and fix it right.
                </p>
                <p className="font-body text-base leading-relaxed" style={{ color: "#64748B" }}>
                  Mike started RRR HVAC Rescue LLC because he saw too many homeowners getting
                  burned by big companies — long wait times, vague pricing, and technicians who
                  barely explained what they&apos;d done. He set out to do it differently.
                </p>
                <p className="font-body text-base leading-relaxed" style={{ color: "#64748B" }}>
                  Today, RRR HVAC serves Watertown and the surrounding area with the kind of
                  service you&apos;d expect from someone who actually cares about this community.
                  No call centers. No upsells. Just honest HVAC work done right.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section
          className="py-20 sm:py-28"
          style={{ background: "#0a0a0a", borderBottom: "1px solid rgba(255,255,255,0.06)" }}
        >
          <div className="max-w-7xl mx-auto px-5 sm:px-8">
            <div className="flex items-center gap-3 mb-12">
              <div className="w-6 h-px" style={{ background: "#F97316" }} />
              <span
                className="font-mono uppercase"
                style={{ fontSize: "11px", letterSpacing: "0.2em", color: "#F97316" }}
              >
                Our Standards
              </span>
            </div>

            <h2
              className="font-serif leading-none mb-14"
              style={{
                fontSize: "clamp(2rem, 4.5vw, 3.5rem)",
                letterSpacing: "-0.02em",
                color: "#FFFFFF",
                fontStyle: "italic",
              }}
            >
              How We Work
            </h2>

            <AboutValues />
          </div>
        </section>

        {/* Service area */}
        <section
          className="py-20 sm:py-28"
          style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}
        >
          <div className="max-w-7xl mx-auto px-5 sm:px-8">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-6 h-px" style={{ background: "#F97316" }} />
                  <span
                    className="font-mono uppercase"
                    style={{ fontSize: "11px", letterSpacing: "0.2em", color: "#F97316" }}
                  >
                    Where We Work
                  </span>
                </div>
                <h2
                  className="font-serif leading-none mb-6"
                  style={{
                    fontSize: "clamp(2rem, 4vw, 3rem)",
                    letterSpacing: "-0.02em",
                    color: "#FFFFFF",
                    fontStyle: "italic",
                  }}
                >
                  Watertown &amp;
                  <br />
                  Surrounding Area
                </h2>
                <p
                  className="font-body text-base leading-relaxed mb-8"
                  style={{ color: "#64748B", maxWidth: "400px" }}
                >
                  RRR HVAC serves Watertown, SD and the surrounding communities. Not sure if we
                  cover your area? Call us — if we can get there, we will.
                </p>
                <a
                  href="tel:6058815622"
                  className="font-mono uppercase inline-flex items-center gap-3"
                  style={{
                    fontSize: "12px",
                    letterSpacing: "0.1em",
                    padding: "14px 28px",
                    borderRadius: "999px",
                    background: "#F97316",
                    color: "#000000",
                    textDecoration: "none",
                    fontWeight: 600,
                  }}
                >
                  Call (605) 881-5622
                </a>
              </div>

              <div className="space-y-px" style={{ background: "rgba(255,255,255,0.06)" }}>
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
                    style={{ background: i % 2 === 0 ? "#141414" : "#0f0f0f" }}
                  >
                    <span
                      className="font-body text-sm font-medium"
                      style={{ color: i === 0 ? "#FFFFFF" : "#64748B" }}
                    >
                      {area}
                    </span>
                    {i === 0 && (
                      <span
                        className="font-mono uppercase"
                        style={{
                          fontSize: "10px",
                          letterSpacing: "0.12em",
                          padding: "4px 10px",
                          border: "1px solid #F97316",
                          color: "#F97316",
                        }}
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

        {/* CTA */}
        <section
          className="py-20 sm:py-28"
          style={{ background: "#F97316" }}
        >
          <div className="max-w-7xl mx-auto px-5 sm:px-8 text-center">
            <h2
              className="font-serif leading-none mb-6"
              style={{
                fontSize: "clamp(2.4rem, 5vw, 4rem)",
                letterSpacing: "-0.02em",
                color: "#FFFFFF",
                fontStyle: "italic",
              }}
            >
              Ready to Get Started?
            </h2>
            <p
              className="font-body text-lg leading-relaxed mb-10 mx-auto"
              style={{ color: "rgba(255,255,255,0.8)", maxWidth: "480px" }}
            >
              Call Mike directly or send a message. For heating and cooling emergencies, we pick
              up — even after hours.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:6058815622"
                className="font-mono uppercase inline-flex items-center justify-center gap-3"
                style={{
                  fontSize: "12px",
                  letterSpacing: "0.1em",
                  padding: "16px 32px",
                  borderRadius: "999px",
                  background: "#000000",
                  color: "#FFFFFF",
                  textDecoration: "none",
                }}
              >
                Call (605) 881-5622
              </a>
              <a
                href="/#contact"
                className="font-mono uppercase inline-flex items-center justify-center gap-2"
                style={{
                  fontSize: "12px",
                  letterSpacing: "0.1em",
                  padding: "16px 32px",
                  borderRadius: "999px",
                  border: "1px solid rgba(255,255,255,0.5)",
                  color: "#FFFFFF",
                  textDecoration: "none",
                }}
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
