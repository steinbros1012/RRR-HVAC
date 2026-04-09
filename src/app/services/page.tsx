import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StickyEstimateCTA from "@/components/StickyEstimateCTA";
import CTABanner from "@/components/CTABanner";
import ServicesGrid from "@/components/ServicesGrid";

export const metadata: Metadata = {
  title: "Services | RRR HVAC Rescue LLC",
  description:
    "Complete HVAC services in Watertown, SD — AC repair, furnace repair, installations, maintenance, and 24/7 emergency service. Call RRR HVAC Rescue LLC today.",
};

const services = [
  {
    num: "01",
    title: "AC Repair",
    desc: "Fast diagnosis and same-day repair when your cooling fails in the South Dakota heat.",
  },
  {
    num: "02",
    title: "Furnace Repair",
    desc: "Emergency furnace calls answered fast. No waiting — we know South Dakota winters.",
  },
  {
    num: "03",
    title: "AC Installation",
    desc: "New system? Sized correctly for your home, installed clean, and explained fully.",
  },
  {
    num: "04",
    title: "Furnace Installation",
    desc: "High-efficiency furnace installs with updated venting and proper gas connections.",
  },
  {
    num: "05",
    title: "Full System Replacement",
    desc: "Old system draining your wallet? We walk you through the right options — no pressure.",
  },
  {
    num: "06",
    title: "HVAC Maintenance",
    desc: "Annual tune-ups before the season hits. Catch small problems before they become emergencies.",
  },
  {
    num: "07",
    title: "Diagnostics & Troubleshooting",
    desc: "Not sure what's wrong? Mike finds out and tells you straight before any work begins.",
  },
  {
    num: "08",
    title: "Emergency Service",
    desc: "Furnace down at midnight? We pick up. Watertown and surrounding areas, 7 days.",
  },
];

const promos = [
  {
    eyebrow: "Seasonal Offer",
    title: "Spring AC Startup Special",
    desc: "$120 seasonal tune-up. Covers refrigerant check, coil inspection, and full system run-through before the heat hits.",
    detail: "Call for availability · (605) 881-5622",
    image: "/spring-ac-startup-offer.jpg",
    cta: "Call to Book",
    href: "tel:6058815622",
  },
  {
    eyebrow: "Community Appreciation",
    title: "First Responder Discount",
    desc: "Firefighters, police, paramedics, and military receive a discount on all services. Thank you for your service.",
    detail: "Mention at time of booking",
    image: "/first-responder-startup-offer.png",
    cta: "Call to Schedule",
    href: "tel:6058815622",
  },
];

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main style={{ background: "#080808" }}>

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
                Our Services
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
                maxWidth: "700px",
              }}
            >
              Complete HVAC Solutions for Watertown.
            </h1>
            <p
              className="font-body"
              style={{
                color: "#64748B",
                fontSize: "1.0625rem",
                lineHeight: 1.7,
                maxWidth: "520px",
              }}
            >
              From emergency furnace calls to full system installs, RRR HVAC handles every
              heating and cooling need in Watertown and surrounding South Dakota.
            </p>
          </div>
        </section>

        <ServicesGrid />

        {/* Trane Trust Section */}
        <section
          style={{
            background: "#0d0d0d",
            borderTop: "1px solid rgba(255,255,255,0.07)",
            borderBottom: "1px solid rgba(255,255,255,0.07)",
            padding: "5rem 0",
          }}
        >
          <div className="max-w-7xl mx-auto px-5 sm:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-6 h-px" style={{ background: "#F97316" }} />
                  <span
                    className="font-mono uppercase"
                    style={{ fontSize: "10px", letterSpacing: "0.2em", color: "#F97316" }}
                  >
                    Equipment
                  </span>
                </div>
                <h2
                  className="font-serif"
                  style={{
                    fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)",
                    color: "#FFFFFF",
                    fontStyle: "italic",
                    lineHeight: 1.1,
                    marginBottom: "1.25rem",
                  }}
                >
                  Trane Certified.
                </h2>
                <p
                  className="font-body"
                  style={{
                    color: "#64748B",
                    fontSize: "0.9375rem",
                    lineHeight: 1.7,
                    maxWidth: "420px",
                    marginBottom: "1rem",
                  }}
                >
                  RRR HVAC installs and services Trane equipment — one of the most trusted names
                  in heating and cooling. Trane systems are built for extreme climates, making
                  them an ideal fit for South Dakota winters and summers.
                </p>
                <p
                  className="font-body"
                  style={{
                    color: "#64748B",
                    fontSize: "0.9375rem",
                    lineHeight: 1.7,
                    maxWidth: "420px",
                  }}
                >
                  When you invest in a new system with RRR HVAC, you&apos;re getting equipment
                  that&apos;s sized correctly for your home, installed properly, and backed by a
                  manufacturer that stands behind its products.
                </p>
              </div>

              <div
                style={{
                  background: "#111111",
                  border: "1px solid rgba(255,255,255,0.08)",
                  padding: "2rem 2.5rem",
                }}
              >
                <div
                  className="font-mono uppercase"
                  style={{
                    fontSize: "10px",
                    letterSpacing: "0.18em",
                    color: "#64748B",
                    marginBottom: "1.5rem",
                  }}
                >
                  Why Trane
                </div>
                {[
                  "Built for extreme climate performance",
                  "High-efficiency models available",
                  "Industry-leading manufacturer warranty",
                  "Widely serviced — parts are never hard to find",
                  "Installed and configured by certified techs",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3"
                    style={{ marginBottom: "1rem" }}
                  >
                    <div
                      style={{
                        width: "6px",
                        height: "6px",
                        borderRadius: "50%",
                        background: "#F97316",
                        marginTop: "6px",
                        flexShrink: 0,
                      }}
                    />
                    <span
                      className="font-body"
                      style={{ color: "#CBD5E1", fontSize: "0.9rem", lineHeight: 1.6 }}
                    >
                      {item}
                    </span>
                  </div>
                ))}
                <div
                  style={{
                    marginTop: "1.5rem",
                    paddingTop: "1.5rem",
                    borderTop: "1px solid rgba(255,255,255,0.07)",
                  }}
                >
                  <span
                    className="font-mono uppercase"
                    style={{ fontSize: "10px", letterSpacing: "0.15em", color: "#F97316" }}
                  >
                    Trane Authorized Dealer · Watertown, SD
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Promotions Section */}
        <section
          style={{
            background: "#080808",
            borderBottom: "1px solid rgba(255,255,255,0.07)",
            padding: "5rem 0",
          }}
        >
          <div className="max-w-7xl mx-auto px-5 sm:px-8">
            <div className="flex items-center gap-3 mb-12">
              <div className="w-6 h-px" style={{ background: "#F97316" }} />
              <span
                className="font-mono uppercase"
                style={{ fontSize: "10px", letterSpacing: "0.2em", color: "#F97316" }}
              >
                Current Offers
              </span>
            </div>
            <div className="grid md:grid-cols-2 gap-px" style={{ background: "rgba(255,255,255,0.05)" }}>
              {promos.map((promo) => (
                <div
                  key={promo.title}
                  className="flex flex-col sm:flex-row"
                  style={{ background: "#111111", border: "1px solid rgba(255,255,255,0.07)" }}
                >
                  <div
                    style={{
                      width: "100%",
                      maxWidth: "180px",
                      minHeight: "160px",
                      flexShrink: 0,
                      overflow: "hidden",
                    }}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={promo.image}
                      alt={promo.title}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        display: "block",
                        minHeight: "160px",
                      }}
                    />
                  </div>
                  <div style={{ padding: "1.75rem 2rem" }}>
                    <span
                      className="font-mono uppercase"
                      style={{
                        fontSize: "10px",
                        letterSpacing: "0.18em",
                        color: "#F97316",
                        display: "block",
                        marginBottom: "0.5rem",
                      }}
                    >
                      {promo.eyebrow}
                    </span>
                    <h3
                      className="font-serif"
                      style={{
                        fontSize: "1.3rem",
                        color: "#FFFFFF",
                        fontStyle: "italic",
                        lineHeight: 1.2,
                        marginBottom: "0.75rem",
                      }}
                    >
                      {promo.title}
                    </h3>
                    <p
                      className="font-body"
                      style={{
                        color: "#94A3B8",
                        fontSize: "0.875rem",
                        lineHeight: 1.6,
                        marginBottom: "0.5rem",
                      }}
                    >
                      {promo.desc}
                    </p>
                    <p
                      className="font-mono"
                      style={{
                        color: "#64748B",
                        fontSize: "10px",
                        letterSpacing: "0.12em",
                        marginBottom: "1rem",
                      }}
                    >
                      {promo.detail}
                    </p>
                    <a
                      href={promo.href}
                      className="font-mono uppercase inline-block"
                      style={{
                        fontSize: "10px",
                        letterSpacing: "0.15em",
                        color: "#F97316",
                        textDecoration: "none",
                        borderBottom: "1px solid rgba(249,115,22,0.35)",
                        paddingBottom: "2px",
                      }}
                    >
                      {promo.cta} →
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <CTABanner />
      </main>
      <Footer />
      <StickyEstimateCTA />
    </>
  );
}
