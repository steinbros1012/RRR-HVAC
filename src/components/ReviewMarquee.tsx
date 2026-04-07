const reviews = [
  {
    name: "Sarah M.",
    rating: 5,
    text: "Mike was great to work with! Came through in a pinch when our furnace stopped working with below-zero temperatures outside. He responded fast and had us back up and running the same day. Would definitely recommend.",
    location: "Watertown, SD",
  },
  {
    name: "Jason P.",
    rating: 5,
    text: "Mike showed up as scheduled. His installation was quick, and he cleaned up after the job like he had never been there. Couldn't ask for a better experience.",
    location: "Watertown, SD",
  },
  {
    name: "Linda K.",
    rating: 5,
    text: "Mike did a great job with our HVAC repair. He was very detailed with his troubleshooting, explained everything he did, and was reliable from start to finish. Highly recommend.",
    location: "Watertown, SD",
  },
  {
    name: "Tom R.",
    rating: 5,
    text: "Mike is very knowledgeable about his profession and an all-around great guy. He knows exactly what he's doing and gets it done right.",
    location: "Watertown, SD",
  },
  {
    name: "Amanda F.",
    rating: 5,
    text: "Called him and he showed up right away. Found the problem fast and had it fixed before I expected. Professional, fast, and no nonsense.",
    location: "Watertown, SD",
  },
  {
    name: "Derek S.",
    rating: 5,
    text: "My AC stopped working late one evening. I reached out to RRR and Mike was able to come the next morning and get me squared away. Exactly the kind of service you hope for.",
    location: "Watertown, SD",
  },
  {
    name: "Michelle H.",
    rating: 5,
    text: "Mike did an amazing job! He is personable, easy to work with, and made great recommendations when we needed a new system. We couldn't be happier.",
    location: "Watertown, SD",
  },
  {
    name: "Chris B.",
    rating: 5,
    text: "5-star rating for RRR HVAC Rescue LLC — fast, friendly, and very reasonably priced. This is exactly the kind of local business you want to support.",
    location: "Watertown, SD",
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} width="12" height="12" viewBox="0 0 24 24" fill="#F97316">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      ))}
    </div>
  );
}

function ReviewCard({ review }: { review: (typeof reviews)[0] }) {
  return (
    <div
      className="flex-shrink-0 w-80 p-6 mx-3 flex flex-col gap-4"
      style={{
        background: "#111111",
        border: "1px solid rgba(255,255,255,0.08)",
        borderRadius: "2px",
      }}
    >
      <StarRating count={review.rating} />
      <p className="font-body text-sm leading-relaxed flex-1" style={{ color: "#64748B" }}>
        &ldquo;{review.text}&rdquo;
      </p>
      <div
        className="flex items-center gap-3 pt-2"
        style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
      >
        <div
          className="w-7 h-7 rounded-full flex items-center justify-center font-mono font-bold text-xs"
          style={{ background: "#1a1a1a", color: "#F97316", border: "1px solid rgba(255,255,255,0.1)" }}
        >
          {review.name[0]}
        </div>
        <div>
          <div className="font-body text-xs font-medium" style={{ color: "#FFFFFF" }}>
            {review.name}
          </div>
          <div className="font-mono" style={{ fontSize: "10px", letterSpacing: "0.08em", color: "#64748B" }}>
            {review.location}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ReviewMarquee() {
  const tripled = [...reviews, ...reviews, ...reviews];

  return (
    <section
      id="reviews"
      className="overflow-hidden"
      style={{
        background: "#0a0a0a",
        borderTop: "1px solid rgba(255,255,255,0.06)",
        paddingTop: "80px",
        paddingBottom: "80px",
      }}
    >
      {/* Header */}
      <div className="max-w-7xl mx-auto px-5 sm:px-8 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-6 h-px" style={{ background: "#F97316" }} />
          <span
            className="font-mono uppercase"
            style={{ fontSize: "11px", letterSpacing: "0.2em", color: "#F97316" }}
          >
            Customer Reviews
          </span>
        </div>
        <div className="flex flex-col sm:flex-row sm:items-end gap-4 justify-between">
          <h2
            className="font-serif"
            style={{
              fontSize: "clamp(2rem, 4.5vw, 3.5rem)",
              letterSpacing: "-0.02em",
              color: "#FFFFFF",
              fontStyle: "italic",
              lineHeight: 0.92,
            }}
          >
            What Watertown
            <br />
            Customers Say
          </h2>
          <div className="flex items-center gap-2">
            {[1, 2, 3, 4, 5].map((i) => (
              <svg key={i} width="18" height="18" viewBox="0 0 24 24" fill="#F97316">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
              </svg>
            ))}
            <span className="font-mono font-semibold text-lg ml-1" style={{ color: "#FFFFFF" }}>
              5.0
            </span>
            <span className="font-body text-sm" style={{ color: "#64748B" }}>
              / 5.0
            </span>
          </div>
        </div>
      </div>

      {/* Marquee */}
      <div className="relative">
        {/* Edge fades */}
        <div
          className="absolute left-0 top-0 bottom-0 w-20 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to right, #0a0a0a, transparent)" }}
        />
        <div
          className="absolute right-0 top-0 bottom-0 w-20 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to left, #0a0a0a, transparent)" }}
        />

        <div className="flex animate-marquee-fast">
          {tripled.map((review, i) => (
            <ReviewCard key={`${review.name}-${i}`} review={review} />
          ))}
        </div>
      </div>
    </section>
  );
}
