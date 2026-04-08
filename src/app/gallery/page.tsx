import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StickyEstimateCTA from "@/components/StickyEstimateCTA";
import CTABanner from "@/components/CTABanner";

export const metadata: Metadata = {
  title: "Gallery | RRR HVAC Rescue LLC",
  description:
    "See real HVAC work from RRR HVAC Rescue LLC in Watertown, South Dakota, including furnace installs, condensers, venting, and completed system replacements.",
};

const galleryImages = [
  {
    src: "/customer-jobs/img-0017.jpg",
    alt: "Outdoor condenser installed beside a home in Watertown",
    category: "Cooling",
    title: "Outdoor Condenser Install",
    description:
      "A finished cooling install with clean condenser placement and a tidy exterior setup.",
    objectPosition: "center center",
  },
  {
    src: "/customer-jobs/img-0600.jpg",
    alt: "Second exterior angle of a newly installed outdoor HVAC condenser",
    category: "Cooling",
    title: "Condenser Setup Detail",
    description:
      "A second angle showing the line set, service connections, and clean finish work at the house.",
    objectPosition: "center center",
  },
  {
    src: "/customer-jobs/img-0758.jpg",
    alt: "Indoor furnace and ductwork installation in a basement mechanical area",
    category: "Heating",
    title: "Indoor System Installation",
    description:
      "Completed indoor install with the furnace, duct transitions, and venting laid out cleanly.",
    objectPosition: "center center",
  },
  {
    src: "/customer-jobs/img-0067.jpg",
    alt: "Second indoor angle of a RunTru furnace installation with venting and gas line visible",
    category: "Heating",
    title: "Mechanical Room Finish",
    description:
      "A second view of the install showing the finished equipment, vent runs, and gas piping.",
    objectPosition: "center center",
  },
  {
    src: "/furnace-install-finished.png",
    alt: "Completed furnace installation",
    category: "Heating",
    title: "Furnace Replacement",
    description:
      "High-efficiency furnace install with updated venting, gas connections, and clean finish work.",
    objectPosition: "center center",
  },
  {
    src: "/basement-install-photo.png",
    alt: "Basement HVAC installation in Watertown",
    category: "Residential",
    title: "Basement System Install",
    description:
      "Full basement HVAC installation with ductwork and equipment integrated into the space.",
    objectPosition: "center top",
  },
  {
    src: "/gas-meter-and-venting.png",
    alt: "Gas meter and venting setup for HVAC installation",
    category: "Gas & Venting",
    title: "Gas Line & Venting",
    description:
      "Gas connection and venting details handled cleanly and to code for a new system install.",
    objectPosition: "center center",
  },
  {
    src: "/exterior-vent-pipes.png",
    alt: "Exterior vent pipe installation on the side of a home",
    category: "Exterior",
    title: "Exterior Vent Installation",
    description:
      "Exterior venting with tight penetrations, proper layout, and a clean finished appearance.",
    objectPosition: "center center",
  },
];

export default function GalleryPage() {
  return (
    <>
      <Navbar />
      <main style={{ background: "#080808" }}>
        <section
          style={{
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
                Job Gallery
              </span>
            </div>

            <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
              <div>
                <h1
                  className="font-serif"
                  style={{
                    fontSize: "clamp(2.8rem, 6.5vw, 5rem)",
                    letterSpacing: "-0.02em",
                    color: "#FFFFFF",
                    fontStyle: "italic",
                    lineHeight: 0.92,
                    marginBottom: "1.5rem",
                  }}
                >
                  Real Work.
                  <br />
                  Real Equipment.
                </h1>
                <p
                  className="font-body"
                  style={{
                    color: "#94A3B8",
                    fontSize: "0.975rem",
                    lineHeight: 1.7,
                    maxWidth: "42rem",
                  }}
                >
                  A full gallery of RRR HVAC work in and around Watertown, South Dakota,
                  including completed furnace installs, condensers, venting, and customer-job
                  photos from multiple angles.
                </p>
              </div>

              <div
                className="font-mono uppercase"
                style={{
                  fontSize: "10px",
                  letterSpacing: "0.16em",
                  color: "#CBD5E1",
                  border: "1px solid rgba(255,255,255,0.12)",
                  padding: "12px 16px",
                }}
              >
                8 real project photos
              </div>
            </div>
          </div>
        </section>

        <section style={{ padding: "2px 0 0", background: "rgba(255,255,255,0.05)" }}>
          <div className="grid md:grid-cols-2 xl:grid-cols-3" style={{ gap: "2px" }}>
            {galleryImages.map((image, index) => (
              <article
                key={image.src}
                style={{
                  background: "#0d0d0d",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <div style={{ overflow: "hidden", height: "clamp(280px, 32vw, 440px)" }}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={image.src}
                    alt={image.alt}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      objectPosition: image.objectPosition,
                      display: "block",
                    }}
                  />
                </div>
                <div style={{ padding: "1.5rem 1.5rem 1.75rem" }}>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.75rem",
                      marginBottom: "0.9rem",
                    }}
                  >
                    <span
                      className="font-mono uppercase"
                      style={{ fontSize: "9px", letterSpacing: "0.18em", color: "#F97316" }}
                    >
                      {image.category}
                    </span>
                    <div
                      style={{
                        width: "18px",
                        height: "1px",
                        background: "rgba(255,255,255,0.12)",
                      }}
                    />
                    <span
                      className="font-mono uppercase"
                      style={{ fontSize: "9px", letterSpacing: "0.18em", color: "#64748B" }}
                    >
                      0{index + 1}
                    </span>
                  </div>
                  <h2
                    className="font-serif"
                    style={{
                      fontSize: "1.45rem",
                      color: "#FFFFFF",
                      fontStyle: "italic",
                      letterSpacing: "-0.02em",
                      lineHeight: 1.05,
                      marginBottom: "0.7rem",
                    }}
                  >
                    {image.title}
                  </h2>
                  <p
                    className="font-body"
                    style={{ fontSize: "0.925rem", color: "#94A3B8", lineHeight: 1.65 }}
                  >
                    {image.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <CTABanner />
      </main>
      <Footer />
      <StickyEstimateCTA />
    </>
  );
}
