const featured = [
  {
    name: "Preston Pratt",
    text: "Mike was great to work with! Came through in a pinch when our furnace stopped working with below zero temperature outside. Was able to give us a temporary fix and got a great deal on parts and labor when the permanent solution came. Would definitely recommend to anyone in need of HVAC repair.",
    location: "Watertown, SD",
  },
  {
    name: "Zachary Ninke",
    text: "Mike did a great job with our HVAC repair. He was very detailed with his troubleshooting, explained everything he did, and was reliable from start to finish. Really appreciated his help, would definitely call him again!",
    location: "Watertown, SD",
  },
  {
    name: "Chad Telford",
    text: "Mike did an amazing job! He is personable, easy to work with, and made good recommendations on a new system to solve our needs. Would highly recommend!",
    location: "Watertown, SD",
  },
];

function Stars() {
  return (
    <div style={{ display: "flex", gap: "3px" }}>
      {[1, 2, 3, 4, 5].map((i) => (
        <svg key={i} width="13" height="13" viewBox="0 0 24 24" fill="#F97316">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      ))}
    </div>
  );
}

export default function ReviewsTeaser() {
  return (
    <section style={{ background: "#080808", padding: "6rem 0", borderTop: "1px solid rgba(255,255,255,0.07)" }}>
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        {/* Header */}
        <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: "3rem", flexWrap: "wrap", gap: "1.5rem" }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.25rem" }}>
              <div style={{ width: "24px", height: "1px", background: "#F97316" }} />
              <span className="font-mono uppercase" style={{ fontSize: "11px", letterSpacing: "0.2em", color: "#F97316" }}>
                Customer Reviews
              </span>
            </div>
            <h2 className="font-serif" style={{ fontSize: "clamp(2.4rem, 5vw, 3.8rem)", letterSpacing: "-0.02em", color: "#FFFFFF", fontStyle: "italic", lineHeight: 0.92 }}>
              What Customers Say.
            </h2>
          </div>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: "0.5rem" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
              {[1,2,3,4,5].map(i => (
                <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="#F97316">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
              ))}
              <span className="font-mono font-semibold" style={{ color: "#FFFFFF", marginLeft: "4px" }}>5.0</span>
            </div>
            <a
              href="/reviews"
              className="font-mono uppercase inline-flex items-center gap-2 transition-colors duration-150 hover:text-white"
              style={{ fontSize: "11px", letterSpacing: "0.12em", color: "#94A3B8", textDecoration: "none", borderBottom: "1px solid rgba(255,255,255,0.15)", paddingBottom: "2px" }}
            >
              All Reviews
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3" style={{ gap: "2px" }}>
          {featured.map((r) => (
            <div
              key={r.name}
              style={{
                background: "#FFFFFF",
                padding: "2rem",
                display: "flex",
                flexDirection: "column",
                gap: "1.25rem",
              }}
            >
              <Stars />
              <p className="font-body" style={{ fontSize: "0.9375rem", color: "#374151", lineHeight: 1.7, flex: 1 }}>
                &ldquo;{r.text}&rdquo;
              </p>
              <div style={{ borderTop: "1px solid rgba(0,0,0,0.08)", paddingTop: "1rem" }}>
                <div className="font-body" style={{ fontSize: "0.875rem", fontWeight: 600, color: "#111827", marginBottom: "2px" }}>
                  {r.name}
                </div>
                <div className="font-mono" style={{ fontSize: "10px", letterSpacing: "0.08em", color: "#6B7280" }}>
                  {r.location}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
