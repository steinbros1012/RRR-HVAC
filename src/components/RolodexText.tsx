"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

interface RolodexTextProps {
  words: string[];
  interval?: number;
  className?: string;
}

export default function RolodexText({ words, interval = 2500, className = "" }: RolodexTextProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [nextIndex, setNextIndex] = useState(1);
  const [isAnimating, setIsAnimating] = useState(false);
  const currentRef = useRef<HTMLSpanElement>(null);
  const nextRef = useRef<HTMLSpanElement>(null);
  const containerRef = useRef<HTMLSpanElement>(null);

  const maxWidth = Math.max(...words.map((w) => w.length));

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      const timer = setInterval(() => {
        setCurrentIndex((i) => (i + 1) % words.length);
      }, interval);
      return () => clearInterval(timer);
    }

    const timer = setInterval(() => {
      if (isAnimating) return;
      setIsAnimating(true);

      const next = (currentIndex + 1) % words.length;
      setNextIndex(next);

      if (nextRef.current) {
        gsap.set(nextRef.current, { rotateX: -90, opacity: 1 });
      }

      const tl = gsap.timeline({
        onComplete: () => {
          setCurrentIndex(next);
          setIsAnimating(false);
        },
      });

      tl.to(currentRef.current, {
        rotateX: 90,
        duration: 0.3,
        ease: "power2.in",
      });

      tl.to(nextRef.current, {
        rotateX: 0,
        duration: 0.35,
        ease: "power2.out",
      }, "-=0.05");
    }, interval);

    return () => clearInterval(timer);
  }, [currentIndex, isAnimating, interval, words]);

  return (
    <span
      ref={containerRef}
      className={`inline-block relative ${className}`}
      style={{
        perspective: "600px",
        minWidth: `${maxWidth * 0.65}em`,
        verticalAlign: "bottom",
      }}
    >
      <span
        ref={currentRef}
        className="inline-block w-full text-left"
        style={{
          transformStyle: "preserve-3d",
          backfaceVisibility: "hidden",
        }}
      >
        {words[currentIndex]}
      </span>

      {isAnimating && (
        <span
          ref={nextRef}
          className="absolute inset-0 inline-block text-left"
          style={{
            transformStyle: "preserve-3d",
            backfaceVisibility: "hidden",
            transform: "rotateX(-90deg)",
          }}
        >
          {words[nextIndex]}
        </span>
      )}
    </span>
  );
}
