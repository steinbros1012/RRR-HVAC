"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProofBar from "@/components/ProofBar";
import ServicesPreview from "@/components/ServicesPreview";
import WorkGrid from "@/components/WorkGrid";
import TrustNarrative from "@/components/TrustNarrative";
import ReviewsTeaser from "@/components/ReviewsTeaser";
import CTABanner from "@/components/CTABanner";
import Footer from "@/components/Footer";
import StickyEstimateCTA from "@/components/StickyEstimateCTA";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <ProofBar />
        <ServicesPreview />
        <WorkGrid />
        <TrustNarrative />
        <ReviewsTeaser />
        <CTABanner />
      </main>
      <Footer />
      <StickyEstimateCTA />
    </>
  );
}
