"use client";

const cards = [
  {
    number: "01",
    title: "We Show Up When We Say We Will",
    desc: "Mike schedules a time and keeps it. No four-hour windows. No last-minute cancellations. Your time is respected.",
  },
  {
    number: "02",
    title: "Honest Diagnosis. No Surprise Bills.",
    desc: "We tell you exactly what's wrong and what it costs before we touch anything. No upsells. No runaround.",
  },
  {
    number: "03",
    title: "Fast Response — Especially in Emergencies",
    desc: "Furnace dies at 2am in a South Dakota winter? That's a real emergency. We take it seriously and respond fast.",
  },
  {
    number: "04",
    title: "Clean Work. Every Time.",
    desc: "We leave your home exactly as we found it — or cleaner. The job isn't done until the site is right.",
  },
  {
    number: "05",
    title: "Local. Invested. Here to Stay.",
    desc: "We're not a franchise or a call center. We're your neighbors in Watertown, and we stand behind our work completely.",
  },
];

export default function CardSwapSection() {
  return (
    <section
      id="why"
      style={{
        background: "#0a0a0a",
        padding: "6rem 0",
        borderTop: "1px solid rgba(255,255,255,0.06)",
      }}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Header */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: "3.5rem",
            flexWrap: "wrap",
            gap: "1rem",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
            <div style={{ width: "24px", height: "1px", background: "#F97316" }} />
            <span
              className="font-mono uppercase"
              style={{ fontSize: "11px", letterSpacing: "0.2em", color: "#F97316" }}
            >
              Why RRR HVAC
            </span>
          </div>
          <h2
            className="font-serif"
            style={{
              fontSize: "clamp(2rem, 4vw, 3rem)",
              letterSpacing: "-0.02em",
              color: "#FFFFFF",
              fontStyle: "italic",
              lineHeight: 0.92,
            }}
          >
            Five commitments,
            <br />
            every single job.
          </h2>
        </div>

        {/* Commitments grid */}
        <div
          className="grid sm:grid-cols-2 lg:grid-cols-3"
          style={{
            borderTop: "1px solid rgba(255,255,255,0.07)",
            borderLeft: "1px solid rgba(255,255,255,0.07)",
          }}
        >
          {cards.map((card, i) => (
            <div
              key={card.number}
              style={{
                padding: "2rem 2rem 2.25rem",
                borderRight: "1px solid rgba(255,255,255,0.07)",
                borderBottom: "1px solid rgba(255,255,255,0.07)",
              }}
            >
              <div
                className="font-mono"
                style={{
                  fontSize: "10px",
                  letterSpacing: "0.18em",
                  color: "#F97316",
                  marginBottom: "1.25rem",
                }}
              >
                {card.number}
              </div>
              <h3
                className="font-serif"
                style={{
                  fontSize: "clamp(1.15rem, 2vw, 1.35rem)",
                  color: "#FFFFFF",
                  fontStyle: "italic",
                  letterSpacing: "-0.01em",
                  lineHeight: 1.15,
                  marginBottom: "0.875rem",
                }}
              >
                {card.title}
              </h3>
              <p
                className="font-body"
                style={{
                  fontSize: "0.875rem",
                  color: "#94A3B8",
                  lineHeight: 1.7,
                }}
              >
                {card.desc}
              </p>
            </div>
          ))}

          {/* CTA cell — fills 6th slot in 3-col grid */}
          <div
            style={{
              padding: "2rem 2rem 2.25rem",
              borderRight: "1px solid rgba(255,255,255,0.07)",
              borderBottom: "1px solid rgba(255,255,255,0.07)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              background: "rgba(249,115,22,0.04)",
            }}
          >
            <p
              className="font-body"
              style={{
                fontSize: "0.9rem",
                color: "#94A3B8",
                lineHeight: 1.6,
                marginBottom: "1.5rem",
              }}
            >
              Ready to work with someone who does it right?
            </p>
            <a
              href="tel:6058815622"
              className="font-mono uppercase inline-flex items-center gap-2"
              style={{
                fontSize: "11px",
                letterSpacing: "0.1em",
                padding: "12px 20px",
                borderRadius: "999px",
                background: "#F97316",
                color: "#000000",
                textDecoration: "none",
                fontWeight: 600,
                width: "fit-content",
                transition: "opacity 0.15s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.85")}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
            >
              Call Now →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
