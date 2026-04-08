"use client";

import { useMemo, useRef, useState } from "react";

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
  const filters = useMemo(
    () => ["All", "Emergency", "Heating", "Cooling", "Installation", "Repair"],
    [],
  );
  const [activeFilter, setActiveFilter] = useState("All");
  const [activeReviewName, setActiveReviewName] = useState(reviews[0]?.name ?? "");
  const featuredReviewRef = useRef<HTMLElement | null>(null);

  const filteredReviews = useMemo(() => {
    if (activeFilter === "All") {
      return reviews;
    }

    return reviews.filter((review) => review.tags.includes(activeFilter));
  }, [activeFilter, reviews]);

  const activeReview =
    filteredReviews.find((review) => review.name === activeReviewName) ?? filteredReviews[0] ?? reviews[0];

  const scrollToFeaturedReview = () => {
    if (!featuredReviewRef.current) {
      return;
    }

    const top = featuredReviewRef.current.getBoundingClientRect().top + window.scrollY - 120;
    window.scrollTo({
      top,
      behavior: "smooth",
    });
  };

  const handleReviewSelect = (reviewName: string) => {
    setActiveReviewName(reviewName);
    scrollToFeaturedReview();
  };

  return (
    <section
      style={{
        background: "#0d0d0d",
        borderBottom: "1px solid rgba(255,255,255,0.07)",
        padding: "3.5rem 0 4rem",
      }}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="flex flex-wrap items-center gap-3 mb-8">
          {filters.map((filter) => {
            const isActive = filter === activeFilter;

            return (
              <button
                key={filter}
                type="button"
                onClick={() => {
                  setActiveFilter(filter);
                  const nextReview =
                    filter === "All"
                      ? reviews[0]
                      : reviews.find((review) => review.tags.includes(filter));

                  if (nextReview) {
                    setActiveReviewName(nextReview.name);
                  }
                }}
                className="font-mono uppercase"
                style={{
                  fontSize: "10px",
                  letterSpacing: "0.16em",
                  padding: "11px 14px",
                  border: isActive
                    ? "1px solid rgba(249,115,22,0.8)"
                    : "1px solid rgba(255,255,255,0.1)",
                  background: isActive ? "rgba(249,115,22,0.14)" : "rgba(255,255,255,0.03)",
                  color: isActive ? "#FFFFFF" : "#94A3B8",
                  transition: "border-color 0.18s, background 0.18s, color 0.18s",
                }}
              >
                {filter}
              </button>
            );
          })}
        </div>

        <div className="grid xl:grid-cols-[1.05fr_0.95fr]" style={{ gap: "2px", background: "rgba(255,255,255,0.05)" }}>
          <article
            ref={featuredReviewRef}
            style={{
              background:
                "linear-gradient(180deg, rgba(20,20,20,1) 0%, rgba(13,13,13,1) 100%)",
              padding: "2.25rem",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              minHeight: "100%",
            }}
          >
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-7 h-px" style={{ background: "#F97316" }} />
                <span
                  className="font-mono uppercase"
                  style={{ fontSize: "10px", letterSpacing: "0.18em", color: "#F97316" }}
                >
                  Featured Review
                </span>
              </div>

              <div
                className="font-mono uppercase"
                style={{
                  fontSize: "10px",
                  letterSpacing: "0.16em",
                  color: "#CBD5E1",
                  marginBottom: "1.25rem",
                }}
              >
                {activeReview.highlight}
              </div>

              <div style={{ marginBottom: "1.5rem" }}>
                <StarRow size={16} />
              </div>

              <p
                className="font-serif"
                style={{
                  fontSize: "clamp(1.7rem, 3vw, 2.6rem)",
                  color: "#FFFFFF",
                  fontStyle: "italic",
                  letterSpacing: "-0.02em",
                  lineHeight: 1.06,
                  marginBottom: "1.75rem",
                }}
              >
                &ldquo;{activeReview.text}&rdquo;
              </p>
            </div>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: "1rem",
                paddingTop: "1.2rem",
                borderTop: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              <div>
                <div
                  className="font-body"
                  style={{ fontSize: "0.975rem", fontWeight: 600, color: "#FFFFFF", marginBottom: "0.2rem" }}
                >
                  {activeReview.name}
                </div>
                <div
                  className="font-mono uppercase"
                  style={{ fontSize: "10px", letterSpacing: "0.14em", color: "#94A3B8" }}
                >
                  {activeReview.location}
                </div>
              </div>

              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", justifyContent: "flex-end" }}>
                {activeReview.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-mono uppercase"
                    style={{
                      fontSize: "9px",
                      letterSpacing: "0.16em",
                      color: "#E2E8F0",
                      border: "1px solid rgba(255,255,255,0.12)",
                      padding: "7px 10px",
                      background: "rgba(255,255,255,0.03)",
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </article>

          <div style={{ background: "#111111", padding: "1rem" }}>
            <div className="grid gap-[2px]" style={{ background: "rgba(255,255,255,0.05)" }}>
              {filteredReviews.map((review, index) => {
                const isActive = review.name === activeReview.name;

                return (
                  <button
                    key={review.name}
                    type="button"
                    onClick={() => handleReviewSelect(review.name)}
                    style={{
                      textAlign: "left",
                      background: isActive ? "rgba(249,115,22,0.12)" : "#141414",
                      padding: "1.2rem 1.15rem",
                      border: "none",
                      borderLeft: isActive ? "2px solid #F97316" : "2px solid transparent",
                      transition: "background 0.18s, border-color 0.18s",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        gap: "1rem",
                        marginBottom: "0.7rem",
                      }}
                    >
                      <div>
                        <div
                          className="font-body"
                          style={{ fontSize: "0.95rem", fontWeight: 600, color: "#FFFFFF", marginBottom: "0.18rem" }}
                        >
                          {review.name}
                        </div>
                        <div
                          className="font-mono uppercase"
                          style={{ fontSize: "9px", letterSpacing: "0.14em", color: "#94A3B8" }}
                        >
                          {review.location}
                        </div>
                      </div>
                      <span
                        className="font-mono uppercase"
                        style={{
                          fontSize: "9px",
                          letterSpacing: "0.18em",
                          color: isActive ? "#F97316" : "rgba(255,255,255,0.28)",
                        }}
                      >
                        0{index + 1}
                      </span>
                    </div>

                    <div style={{ marginBottom: "0.85rem" }}>
                      <StarRow size={11} />
                    </div>

                    <p
                      className="font-body"
                      style={{
                        fontSize: "0.9rem",
                        color: isActive ? "#E2E8F0" : "#94A3B8",
                        lineHeight: 1.65,
                      }}
                    >
                      &ldquo;{review.text.length > 132 ? `${review.text.slice(0, 132)}...` : review.text}&rdquo;
                    </p>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        <div style={{ marginTop: "2.5rem" }}>
          <div className="flex items-center gap-3 mb-5">
            <div className="w-6 h-px" style={{ background: "#F97316" }} />
            <span
              className="font-mono uppercase"
              style={{ fontSize: "10px", letterSpacing: "0.2em", color: "#F97316" }}
            >
              All Testimonials
            </span>
          </div>

          <div className="grid md:grid-cols-2 xl:grid-cols-3" style={{ gap: "2px", background: "rgba(255,255,255,0.05)" }}>
            {filteredReviews.map((review) => (
              <button
                key={review.name}
                type="button"
                onClick={() => handleReviewSelect(review.name)}
                style={{
                  background: review.name === activeReview.name ? "rgba(255,255,255,0.08)" : "#141414",
                  padding: "1.5rem",
                  textAlign: "left",
                  border: "none",
                  transition: "background 0.18s, transform 0.18s",
                }}
              >
                <div style={{ marginBottom: "1rem" }}>
                  <StarRow size={12} />
                </div>
                <p
                  className="font-body"
                  style={{
                    fontSize: "0.92rem",
                    color: "#CBD5E1",
                    lineHeight: 1.7,
                    marginBottom: "1.15rem",
                  }}
                >
                  &ldquo;{review.text}&rdquo;
                </p>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: "1rem",
                    borderTop: "1px solid rgba(255,255,255,0.08)",
                    paddingTop: "0.9rem",
                  }}
                >
                  <span
                    className="font-body"
                    style={{ fontSize: "0.88rem", fontWeight: 600, color: "#FFFFFF" }}
                  >
                    {review.name}
                  </span>
                  <span
                    className="font-mono uppercase"
                    style={{ fontSize: "9px", letterSpacing: "0.14em", color: "#64748B" }}
                  >
                    {review.location}
                  </span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
