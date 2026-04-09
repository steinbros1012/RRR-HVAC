type Review = {
  name: string;
  location: string;
  text: string;
  tags: string[];
  highlight: string;
};

function StarRow({ size = 13 }: { size?: number }) {
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
  return (
    <section
      style={{
        background: "#0d0d0d",
        borderBottom: "1px solid rgba(255,255,255,0.07)",
        padding: "4rem 0",
      }}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div
          className="grid sm:grid-cols-2 xl:grid-cols-3"
          style={{ gap: "1px", background: "rgba(255,255,255,0.07)" }}
        >
          {reviews.map((review) => (
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
              <StarRow size={13} />

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
                <div
                  className="font-body"
                  style={{ fontSize: "0.875rem", fontWeight: 600, color: "#FFFFFF", marginBottom: "3px" }}
                >
                  {review.name}
                </div>
                <div
                  className="font-mono uppercase"
                  style={{ fontSize: "10px", letterSpacing: "0.12em", color: "#475569" }}
                >
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
