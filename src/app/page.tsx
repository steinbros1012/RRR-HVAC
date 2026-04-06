"use client";

import IntroAnimation from "@/components/IntroAnimation";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProofBar from "@/components/ProofBar";
import Services from "@/components/Services";
import CardSwapSection from "@/components/CardSwapSection";
import HorizontalGallery from "@/components/HorizontalGallery";
import ReviewMarquee from "@/components/ReviewMarquee";
import ContactCTA from "@/components/ContactCTA";
import Footer from "@/components/Footer";

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
        <HorizontalGallery />
        <ReviewMarquee />
        <ContactCTA />
      </main>
      <Footer />
    </>
  );
}
