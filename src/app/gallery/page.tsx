import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StickyEstimateCTA from "@/components/StickyEstimateCTA";
import CTABanner from "@/components/CTABanner";
import GalleryFeaturedJobs from "@/components/GalleryFeaturedJobs";
import GalleryAdditionalWork from "@/components/GalleryAdditionalWork";

export const metadata: Metadata = {
  title: "Gallery | RRR HVAC Rescue LLC",
  description:
    "See real HVAC work from RRR HVAC Rescue LLC in Watertown, South Dakota, including furnace installs, condensers, venting, and completed system replacements.",
};

const featuredJobs = [
  {
    category: "Cooling Install",
    title: "Condenser Replacement Project",
    description:
      "Two angles from the same outdoor cooling job, showing the finished condenser placement, line set routing, and clean exterior finish work.",
    photos: [
      {
        src: "/customer-jobs/img-0017.jpg",
        alt: "Outdoor condenser installed beside a home in Watertown",
        label: "Angle 01",
        objectPosition: "center center",
      },
      {
        src: "/customer-jobs/img-0600.jpg",
        alt: "Second exterior angle of a newly installed outdoor HVAC condenser",
        label: "Angle 02",
        objectPosition: "center center",
      },
    ],
  },
  {
    category: "Heating Install",
    title: "Indoor Furnace System Project",
    description:
      "Two angles from the same indoor install, showing the finished equipment, venting layout, gas piping, and mechanical-room detail work.",
    photos: [
      {
        src: "/customer-jobs/img-0758.jpg",
        alt: "Indoor furnace and ductwork installation in a basement mechanical area",
        label: "Angle 01",
        objectPosition: "center center",
      },
      {
        src: "/customer-jobs/img-0067.jpg",
        alt: "Second indoor angle of a RunTru furnace installation with venting and gas line visible",
        label: "Angle 02",
        objectPosition: "center center",
      },
    ],
  },
];

const galleryImages = [
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
                  including featured jobs shown from multiple angles plus additional installation
                  and venting work.
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
                2 featured jobs · 8 real photos
              </div>
            </div>
          </div>
        </section>

        <GalleryFeaturedJobs jobs={featuredJobs} />
        <GalleryAdditionalWork images={galleryImages} />

        <CTABanner />
      </main>
      <Footer />
      <StickyEstimateCTA />
    </>
  );
}
