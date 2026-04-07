"use client";

const promos = [
  {
    image: "/spring-ac-startup-offer.jpg",
    alt: "Spring AC Startup Offer",
    eyebrow: "Limited Time",
    title: "Spring AC\nStartup Special",
    desc: "Get your air conditioning inspected and ready before the heat arrives. Seasonal tune-up available now for Watertown homeowners.",
    cta: "Call for Details",
    href: "tel:6058815622",
  },
  {
    image: "/first-responder-startup-offer.png",
    alt: "First Responder Discount",
    eyebrow: "Always Available",
    title: "First Responder\nDiscount",
    desc: "RRR HVAC honors the people who serve our community — firefighters, police, paramedics, and military receive a special discount on all services.",
    cta: "Contact Us",
    href: "/#contact",
  },
];

export default function Promotions() {
  return (
    <section
      style={{
        background: "#080808",
        padding: "5rem 0",
        borderTop: "1px solid rgba(255,255,255,0.06)",
      }}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Header */}
        <div style={{ marginBottom: "3rem" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.75rem",
              marginBottom: "1.25rem",
            }}
          >
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

        {/* Promo cards — horizontal layout: image left, content right */}
        <div style={{ display: "flex", flexDirection: "column", gap: "1.5px" }}>
          {promos.map((promo, i) => (
            <div
              key={promo.title}
              className="grid md:grid-cols-[380px_1fr]"
              style={{
                background: i % 2 === 0 ? "#0f0f0f" : "#111111",
                border: "1px solid rgba(255,255,255,0.07)",
                borderRadius: "0.75rem",
                overflow: "hidden",
              }}
            >
              {/* Image — contained, dark-padded box so it shows fully without ugly crops */}
              <div
                style={{
                  background: "#080808",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "2rem",
                  minHeight: "260px",
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={promo.image}
                  alt={promo.alt}
                  style={{
                    maxWidth: "100%",
                    maxHeight: "220px",
                    width: "auto",
                    height: "auto",
                    objectFit: "contain",
                    display: "block",
                  }}
                />
              </div>

              {/* Content */}
              <div
                style={{
                  padding: "2.5rem",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  gap: "1rem",
                }}
              >
                <span
                  className="font-mono uppercase"
                  style={{
                    fontSize: "10px",
                    letterSpacing: "0.18em",
                    color: "#F97316",
                  }}
                >
                  {promo.eyebrow}
                </span>

                <h3
                  className="font-serif"
                  style={{
                    fontSize: "clamp(1.6rem, 3vw, 2.2rem)",
                    color: "#FFFFFF",
                    fontStyle: "italic",
                    letterSpacing: "-0.02em",
                    lineHeight: 0.95,
                    whiteSpace: "pre-line",
                  }}
                >
                  {promo.title}
                </h3>

                <p
                  className="font-body"
                  style={{
                    fontSize: "0.9rem",
                    color: "#64748B",
                    lineHeight: 1.65,
                    maxWidth: "420px",
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
                    marginTop: "0.5rem",
                    width: "fit-content",
                    transition: "opacity 0.15s",
                  }}
                  onMouseEnter={(e) =>
                    ((e.currentTarget as HTMLAnchorElement).style.opacity = "0.7")
                  }
                  onMouseLeave={(e) =>
                    ((e.currentTarget as HTMLAnchorElement).style.opacity = "1")
                  }
                >
                  {promo.cta}
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
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
