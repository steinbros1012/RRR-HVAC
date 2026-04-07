"use client";

const promos = [
  {
    image: "/spring-ac-startup-offer.jpg",
    alt: "Spring AC Startup Offer",
    title: "Spring AC Startup",
    desc: "Get your AC ready for summer before the heat hits. Limited-time spring tune-up special for Watertown homeowners.",
    cta: "Call for Details",
    href: "tel:6058815622",
  },
  {
    image: "/first-responder-startup-offer.png",
    alt: "First Responder Offer",
    title: "First Responder Discount",
    desc: "RRR HVAC honors the service of firefighters, police, paramedics, and military with a special discount on all services.",
    cta: "Learn More",
    href: "#contact",
  },
];

export default function Promotions() {
  return (
    <section style={{ background: "#080808", padding: "5rem 0" }}>
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Header */}
        <div style={{ marginBottom: "3rem" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.25rem" }}>
            <div style={{ width: "24px", height: "1px", background: "#F97316" }} />
            <span
              className="font-mono uppercase"
              style={{ fontSize: "11px", letterSpacing: "0.2em", color: "#F97316" }}
            >
              Current Offers
            </span>
          </div>
          <h2
            className="font-serif"
            style={{
              fontSize: "clamp(2.4rem, 5vw, 3.8rem)",
              letterSpacing: "-0.02em",
              color: "#FFFFFF",
              fontStyle: "italic",
              lineHeight: 0.92,
            }}
          >
            Seasonal Promotions.
          </h2>
        </div>

        {/* Promo grid */}
        <div className="grid md:grid-cols-2 gap-4">
          {promos.map((promo) => (
            <div
              key={promo.title}
              style={{
                background: "#111111",
                borderRadius: "1rem",
                overflow: "hidden",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              {/* Image */}
              <div style={{ height: "240px", overflow: "hidden" }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={promo.image}
                  alt={promo.alt}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    display: "block",
                  }}
                />
              </div>

              {/* Card body */}
              <div style={{ padding: "1.5rem 1.75rem 1.75rem" }}>
                <h3
                  className="font-serif"
                  style={{
                    fontSize: "1.5rem",
                    color: "#FFFFFF",
                    marginBottom: "0.75rem",
                    fontStyle: "italic",
                    letterSpacing: "-0.01em",
                  }}
                >
                  {promo.title}
                </h3>
                <p
                  className="font-body"
                  style={{
                    fontSize: "0.875rem",
                    color: "#64748B",
                    lineHeight: 1.6,
                    marginBottom: "1.25rem",
                  }}
                >
                  {promo.desc}
                </p>
                <a
                  href={promo.href}
                  className="font-mono uppercase inline-flex items-center gap-2"
                  style={{
                    fontSize: "11px",
                    letterSpacing: "0.1em",
                    color: "#F97316",
                    textDecoration: "none",
                    transition: "opacity 0.15s",
                  }}
                  onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.opacity = "0.7")}
                  onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.opacity = "1")}
                >
                  {promo.cta}
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
