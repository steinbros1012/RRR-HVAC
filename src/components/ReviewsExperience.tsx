type Review = {
  name: string;
  location: string;
  text: string;
  tags: string[];
  highlight: string;
};

function Stars({ size = 13 }: { size?: number }) {
  return (
    <div style={{ display: "flex", gap: "3px" }}>
      {[0, 1, 2, 3, 4].map((i) => (
        <svg key={i} width={size} height={size} viewBox="0 0 24 24" aria-hidden="true">
          <polygon
            points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"
            fill="#F97316"
          />
        </svg>
      ))}
    </div>
  );
}

export default function ReviewsExperience({ reviews }: { reviews: Review[] }) {
  const [hero, ...rest] = reviews;

  return (
    <section
      style={{
        background: "#0d0d0d",
        borderBottom: "1px solid rgba(255,255,255,0.07)",
        padding: "4rem 0",
      }}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8" style={{ display: "flex", flexDirection: "column", gap: "1px" }}>

        {/* Hero pull quote */}
        <div
          style={{
            background: "#111111",
            border: "1px solid rgba(255,255,255,0.08)",
            padding: "3.5rem 3rem 3rem",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Decorative large quote mark */}
          <div
            aria-hidden="true"
            className="font-serif"
            style={{
              position: "absolute",
              top: "-0.5rem",
              right: "2.5rem",
              fontSize: "14rem",
              lineHeight: 1,
              color: "rgba(249,115,22,0.07)",
              fontStyle: "italic",
              pointerEvents: "none",
              userSelect: "none",
            }}
          >
            &ldquo;
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "2rem" }}>
            <div style={{ width: "24px", height: "1px", background: "#F97316" }} />
            <span className="font-mono uppercase" style={{ fontSize: "10px", letterSpacing: "0.2em", color: "#F97316" }}>
              Featured Review
            </span>
          </div>

          <Stars size={16} />

          <p
            className="font-serif"
            style={{
              fontSize: "clamp(1.6rem, 3.2vw, 2.6rem)",
              color: "#FFFFFF",
              fontStyle: "italic",
              letterSpacing: "-0.02em",
              lineHeight: 1.1,
              margin: "1.75rem 0 2.5rem",
              maxWidth: "820px",
              position: "relative",
              zIndex: 1,
            }}
          >
            &ldquo;{hero.text}&rdquo;
          </p>

          <div style={{ display: "flex", alignItems: "center", gap: "1.5rem", flexWrap: "wrap" }}>
            <div>
              <div className="font-body" style={{ fontSize: "0.9375rem", fontWeight: 600, color: "#FFFFFF" }}>
                {hero.name}
              </div>
              <div className="font-mono uppercase" style={{ fontSize: "10px", letterSpacing: "0.14em", color: "#475569", marginTop: "3px" }}>
                {hero.location}
              </div>
            </div>
            <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
              {hero.tags.map((tag) => (
                <span
                  key={tag}
                  className="font-mono uppercase"
                  style={{
                    fontSize: "9px",
                    letterSpacing: "0.16em",
                    padding: "6px 10px",
                    border: "1px solid rgba(249,115,22,0.35)",
                    color: "#F97316",
                    background: "rgba(249,115,22,0.08)",
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Grid of remaining reviews */}
        <div
          className="grid sm:grid-cols-2 xl:grid-cols-3"
          style={{ gap: "1px", background: "rgba(255,255,255,0.07)" }}
        >
          {rest.map((review) => (
            <article
              key={review.name}
              style={{
                background: "#111111",
                padding: "2.25rem",
                display: "flex",
                flexDirection: "column",
                gap: "1.5rem",
              }}
            >
              <Stars size={12} />

              <p
                className="font-body"
                style={{
                  fontSize: "0.9375rem",
                  color: "#CBD5E1",
                  lineHeight: 1.75,
                  flex: 1,
                }}
              >
                &ldquo;{review.text}&rdquo;
              </p>

              <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)", paddingTop: "1.25rem" }}>
                <div className="font-body" style={{ fontSize: "0.875rem", fontWeight: 600, color: "#FFFFFF", marginBottom: "3px" }}>
                  {review.name}
                </div>
                <div className="font-mono uppercase" style={{ fontSize: "10px", letterSpacing: "0.12em", color: "#475569" }}>
                  {review.location}
                </div>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
