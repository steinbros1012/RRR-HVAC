import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StickyEstimateCTA from "@/components/StickyEstimateCTA";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "Reviews | RRR HVAC Rescue LLC",
  description:
    "Real customer reviews for RRR HVAC Rescue LLC in Watertown, SD. 5-star HVAC service for furnace repair, AC repair, installations, and emergency calls.",
};

const reviews = [
  {
    name: "Preston Pratt",
    location: "Watertown, SD",
    text: "Mike was great to work with! Came through in a pinch when our furnace stopped working with below zero temperature outside. Was able to give us a temporary fix and got a great deal on parts and labor when the permanent solution came. Would definitely recommend to anyone in need of HVAC repair.",
  },
  {
    name: "Chris Noeldner",
    location: "Watertown, SD",
    text: "Mike showed up as scheduled. His installation was quick and he cleaned up after the job like he had never been there. His pricing was competitive with other quotes for the work. I would highly recommend.",
  },
  {
    name: "Zachary Ninke",
    location: "Watertown, SD",
    text: "Mike did a great job with our HVAC repair. He was very detailed with his troubleshooting, explained everything he did, and was reliable from start to finish. Really appreciated his help, would definitely call him again!",
  },
  {
    name: "Andrew Sebek",
    location: "Watertown, SD",
    text: "Called him and he showed up right away. Found the problem fast and had it fixed. Great guy to work with. I would 100% call him again.",
  },
  {
    name: "Zachary Ordal",
    location: "Watertown, SD",
    text: "My AC stopped working late one evening, I reached out to RRR and Mike was able to come the next morning and get me squared away. Mike offers a fair rate and a reliable service. Highly recommended.",
  },
  {
    name: "Chad Telford",
    location: "Watertown, SD",
    text: "Mike did an amazing job! He is personable, easy to work with, and made good recommendations on a new system to solve our needs. Would highly recommend!",
  },
  {
    name: "Kristen Hurkes",
    location: "Watertown, SD",
    text: "5 star rating for RRR HVAC Rescue LLC! Fast, friendly, and very reasonably priced. Had the AC up and running in no time! Highly recommended.",
  },
  {
    name: "Claudia Frentz",
    location: "Watertown, SD",
    text: "Mike has the best business personality. Explained everything about the installation process as well as what central air system will be installed. He even gave me an estimate right away. Kept me updated on the progress and completed the work.",
  },
];

function StarRow({ size = 13 }: { size?: number }) {
  return (
    <div style={{ display: "flex", gap: "3px", marginBottom: "1.25rem" }}>
      {[0, 1, 2, 3, 4].map((i) => (
        <svg
          key={i}
          width={size}
          height={size}
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <polygon
            points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"
            fill="#F97316"
          />
        </svg>
      ))}
    </div>
  );
}

export default function ReviewsPage() {
  return (
    <>
      <Navbar />
      <main style={{ background: "#080808" }}>

        {/* Hero */}
        <section
          style={{
            background: "#080808",
            paddingTop: "calc(5rem + 96px)",
            paddingBottom: "4rem",
            borderBottom: "1px solid rgba(255,255,255,0.07)",
          }}
        >
          <div className="max-w-7xl mx-auto px-5 sm:px-8">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-6 h-px" style={{ background: "#F97316" }} />
              <span
                className="font-mono uppercase"
                style={{ fontSize: "10px", letterSpacing: "0.2em", color: "#F97316" }}
              >
                Customer Reviews
              </span>
            </div>

            <h1
              className="font-serif"
              style={{
                fontSize: "clamp(2.8rem, 6.5vw, 5rem)",
                letterSpacing: "-0.02em",
                color: "#FFFFFF",
                fontStyle: "italic",
                lineHeight: 0.92,
                marginBottom: "2rem",
              }}
            >
              What Watertown
              <br />
              Customers Say.
            </h1>

            {/* Star Rating Display */}
            <div
              className="flex items-center gap-4"
              style={{ marginBottom: "1.25rem" }}
            >
              <div style={{ display: "flex", gap: "4px" }}>
                {[0, 1, 2, 3, 4].map((i) => (
                  <svg key={i} width={20} height={20} viewBox="0 0 24 24" aria-hidden="true">
                    <polygon
                      points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"
                      fill="#F97316"
                    />
                  </svg>
                ))}
              </div>
              <span
                className="font-mono"
                style={{ fontSize: "1rem", color: "#FFFFFF", fontWeight: 600 }}
              >
                5.0 / 5.0
              </span>
              <span
                className="font-mono"
                style={{ fontSize: "10px", letterSpacing: "0.12em", color: "#64748B" }}
              >
                · 8 Reviews
              </span>
            </div>

            <p
              className="font-body"
              style={{
                color: "#64748B",
                fontSize: "0.9375rem",
                lineHeight: 1.65,
                maxWidth: "460px",
              }}
            >
              Every review is from a real RRR HVAC customer in Watertown, SD.
            </p>
          </div>
        </section>

        {/* Reviews Grid */}
        <section
          style={{
            background: "#0d0d0d",
            borderBottom: "1px solid rgba(255,255,255,0.07)",
            padding: "0",
          }}
        >
          <div
            className="grid md:grid-cols-2"
            style={{ gap: "2px", background: "rgba(255,255,255,0.05)" }}
          >
            {reviews.map((review) => (
              <div
                key={review.name}
                style={{
                  background: "#FFFFFF",
                  padding: "2rem 2rem 2.5rem",
                }}
              >
                <StarRow size={13} />
                <p
                  className="font-body"
                  style={{
                    fontSize: "0.9375rem",
                    color: "#374151",
                    lineHeight: 1.75,
                    marginBottom: "1.5rem",
                  }}
                >
                  &ldquo;{review.text}&rdquo;
                </p>
                <div
                  style={{
                    height: "1px",
                    background: "#E5E7EB",
                    marginBottom: "1rem",
                  }}
                />
                <div className="flex items-center justify-between">
                  <span
                    className="font-body"
                    style={{
                      fontSize: "0.875rem",
                      fontWeight: 600,
                      color: "#111827",
                    }}
                  >
                    {review.name}
                  </span>
                  <span
                    className="font-mono"
                    style={{
                      fontSize: "10px",
                      letterSpacing: "0.12em",
                      color: "#6B7280",
                    }}
                  >
                    {review.location}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Trust strip */}
        <section
          style={{
            background: "#080808",
            borderBottom: "1px solid rgba(255,255,255,0.07)",
            padding: "3.5rem 0",
          }}
        >
          <div className="max-w-7xl mx-auto px-5 sm:px-8">
            <div
              className="flex flex-col sm:flex-row items-center justify-between gap-6"
            >
              <p
                className="font-body"
                style={{ color: "#64748B", fontSize: "0.9375rem", lineHeight: 1.65 }}
              >
                Ready to experience the same service?{" "}
                <a
                  href="/contact"
                  style={{ color: "#F97316", textDecoration: "none", fontWeight: 500 }}
                >
                  Request an estimate today.
                </a>
              </p>
              <a
                href="tel:6058815622"
                className="font-mono uppercase inline-flex items-center gap-2 flex-shrink-0"
                style={{
                  fontSize: "11px",
                  letterSpacing: "0.15em",
                  padding: "14px 28px",
                  background: "#F97316",
                  color: "#000000",
                  textDecoration: "none",
                  fontWeight: 600,
                  borderRadius: "2px",
                }}
              >
                Call (605) 881-5622
              </a>
            </div>
          </div>
        </section>

        <CTABanner />
      </main>
      <Footer />
      <StickyEstimateCTA />
    </>
  );
}
