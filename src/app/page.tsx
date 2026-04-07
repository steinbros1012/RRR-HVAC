"use client";

import IntroAnimation from "@/components/IntroAnimation";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProofBar from "@/components/ProofBar";
import Services from "@/components/Services";
import CardSwapSection from "@/components/CardSwapSection";
import WorkShowcase from "@/components/WorkShowcase";
import TrustNarrative from "@/components/TrustNarrative";
import HorizontalGallery from "@/components/HorizontalGallery";
import ReviewMarquee from "@/components/ReviewMarquee";
import ServiceArea from "@/components/ServiceArea";
import Promotions from "@/components/Promotions";
import ContactCTA from "@/components/ContactCTA";
import Footer from "@/components/Footer";
import StickyEstimateCTA from "@/components/StickyEstimateCTA";

export default function Home() {
  return (
    <>
      <IntroAnimation />
      <Navbar />
      <main>
        <Hero />
        <ProofBar />
        <Services />
        <CardSwapSection />
        <WorkShowcase />
        <TrustNarrative />
        <HorizontalGallery />
        <ReviewMarquee />
        <ServiceArea />
        <Promotions />
        <ContactCTA />
      </main>
      <Footer />
      <StickyEstimateCTA />
    </>
  );
}
