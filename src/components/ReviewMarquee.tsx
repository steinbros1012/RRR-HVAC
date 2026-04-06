"use client";

import { useState } from "react";

const reviews = [
  {
    name: "Sarah M.",
    rating: 5,
    text: "Mike was great to work with! Came through in a pinch when our furnace stopped working with below-zero temperatures outside. He responded fast and had us back up and running the same day. Would definitely recommend to anyone in need of HVAC repair.",
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
    text: "Mike did an amazing job! He is personable, easy to work with, and made great recommendations when we needed a new system. We couldn't be happier with the result.",
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
        <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="#f97316" className="flex-shrink-0">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      ))}
    </div>
  );
}

function ReviewCard({ review }: { review: typeof reviews[0] }) {
  return (
    <div
      className="flex-shrink-0 w-80 bg-[#0f1623] border border-white/5 rounded-2xl p-6 mx-3"
      style={{ boxShadow: "0 4px 30px rgba(0,0,0,0.3)" }}
    >
      <StarRating count={review.rating} />
      <p className="text-slate-300 text-sm leading-relaxed mt-3 mb-5">&ldquo;{review.text}&rdquo;</p>
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 rounded-full bg-orange-500/20 flex items-center justify-center text-orange-400 text-sm font-bold">
          {review.name[0]}
        </div>
        <div>
          <div className="text-white text-sm font-semibold">{review.name}</div>
          <div className="text-slate-500 text-xs">{review.location}</div>
        </div>
      </div>
    </div>
  );
}

export default function ReviewMarquee() {
  const [paused, setPaused] = useState(false);
  const doubled = [...reviews, ...reviews];

  return (
    <section id="reviews" className="py-24 sm:py-32 overflow-hidden bg-[#060a11]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 mb-14">
        <div className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/20 rounded-full px-4 py-1.5 mb-6">
          <span className="text-orange-300 text-sm font-medium tracking-wide">Customer Reviews</span>
        </div>
        <div className="flex flex-col sm:flex-row sm:items-end gap-4 justify-between">
          <h2 className="text-4xl sm:text-5xl font-black text-white tracking-tight">
            What Watertown<br />Customers Say
          </h2>
          <div className="flex items-center gap-2">
            <div className="flex">
              {[1,2,3,4,5].map((i) => (
                <svg key={i} width="20" height="20" viewBox="0 0 24 24" fill="#f97316">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
              ))}
            </div>
            <span className="text-white font-bold">5.0</span>
            <span className="text-slate-400 text-sm">/ 5.0 average</span>
          </div>
        </div>
      </div>

      <div
        className="relative"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        {/* Left fade */}
        <div
          className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to right, #060a11, transparent)" }}
        />
        {/* Right fade */}
        <div
          className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to left, #060a11, transparent)" }}
        />

        <div
          className={paused ? "flex animate-marquee animate-marquee-paused" : "flex animate-marquee"}
        >
          {doubled.map((review, i) => (
            <ReviewCard key={`${review.name}-${i}`} review={review} />
          ))}
        </div>
      </div>
    </section>
  );
}
