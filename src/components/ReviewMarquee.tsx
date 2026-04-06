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
        <svg key={i} width="12" height="12" viewBox="0 0 24 24" fill="#f97316">
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
        background: "#ffffff",
        border: "1px solid #e2e2e2",
        borderRadius: "2px",
      }}
    >
      <StarRating count={review.rating} />
      <p className="font-satoshi text-sm leading-relaxed flex-1" style={{ color: "#838282" }}>
        &ldquo;{review.text}&rdquo;
      </p>
      <div className="flex items-center gap-3 pt-2" style={{ borderTop: "1px solid #f2f2f2" }}>
        <div
          className="w-7 h-7 rounded-full flex items-center justify-center font-clash font-bold text-xs"
          style={{ background: "#111111", color: "#ffffff" }}
        >
          {review.name[0]}
        </div>
        <div>
          <div className="font-satoshi text-xs font-medium" style={{ color: "#111111" }}>
            {review.name}
          </div>
          <div className="font-satoshi text-[10px] tracking-wide" style={{ color: "#b6b5b5" }}>
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
      style={{ background: "#f2f2f2", borderTop: "1px solid #e2e2e2", paddingTop: "80px", paddingBottom: "80px" }}
    >
      {/* Header */}
      <div className="max-w-7xl mx-auto px-5 sm:px-8 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-6 h-px" style={{ background: "#f97316" }} />
          <span className="font-satoshi text-[11px] tracking-[0.2em] uppercase text-[#f97316]">
            Customer Reviews
          </span>
        </div>
        <div className="flex flex-col sm:flex-row sm:items-end gap-4 justify-between">
          <h2
            className="font-clash font-bold leading-none"
            style={{
              fontSize: "clamp(2rem, 4.5vw, 3.5rem)",
              letterSpacing: "-0.04em",
              color: "#111111",
            }}
          >
            What Watertown
            <br />
            Customers Say
          </h2>
          <div className="flex items-center gap-2">
            {[1, 2, 3, 4, 5].map((i) => (
              <svg key={i} width="18" height="18" viewBox="0 0 24 24" fill="#f97316">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
              </svg>
            ))}
            <span className="font-clash font-bold text-lg ml-1" style={{ color: "#111111" }}>
              5.0
            </span>
            <span className="font-satoshi text-sm" style={{ color: "#b6b5b5" }}>
              / 5.0
            </span>
          </div>
        </div>
      </div>

      {/* Marquee — runs continuously, no hover pause */}
      <div className="relative">
        {/* Edge fades */}
        <div
          className="absolute left-0 top-0 bottom-0 w-20 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to right, #f2f2f2, transparent)" }}
        />
        <div
          className="absolute right-0 top-0 bottom-0 w-20 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to left, #f2f2f2, transparent)" }}
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
