"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    icon: "❄️",
    title: "AC Repair",
    desc: "Your air conditioning breaks at the worst time. We diagnose fast and restore your comfort the same day whenever possible.",
    tag: "Most Requested",
  },
  {
    icon: "🔧",
    title: "AC Installation",
    desc: "New cooling system installed right the first time. We size, source, and install with minimal disruption to your day.",
    tag: null,
  },
  {
    icon: "🔥",
    title: "Furnace Repair",
    desc: "No heat in a South Dakota winter is serious. We respond fast and get your furnace running again — even in the coldest conditions.",
    tag: "Emergency Priority",
  },
  {
    icon: "🏠",
    title: "Furnace Installation",
    desc: "Ready to upgrade? We'll recommend the right furnace for your home's size and your budget, then install it cleanly.",
    tag: null,
  },
  {
    icon: "🌡️",
    title: "Heating Service",
    desc: "Annual heating tune-ups extend system life, lower energy bills, and catch small problems before they become big ones.",
    tag: null,
  },
  {
    icon: "💨",
    title: "Air Conditioning Service",
    desc: "Keep your AC running at peak efficiency all summer. Our seasonal tune-up covers cleaning, refrigerant check, and full inspection.",
    tag: null,
  },
  {
    icon: "✅",
    title: "HVAC Maintenance",
    desc: "Preventative maintenance saves money and avoids breakdowns. We offer maintenance plans that keep your system healthy year-round.",
    tag: null,
  },
  {
    icon: "🚨",
    title: "Emergency HVAC Help",
    desc: "When your system fails at midnight in January, call RRR. We take emergencies seriously and respond when it matters.",
    tag: "24/7 Available",
  },
  {
    icon: "🔄",
    title: "System Replacement",
    desc: "Old, inefficient system dragging up your bills? We'll walk you through your options and replace it with something built to last.",
    tag: null,
  },
  {
    icon: "🔍",
    title: "Diagnostics & Troubleshooting",
    desc: "Not sure what's wrong? Mike digs in, explains what he finds, and gives you a straight answer — no upselling, no runaround.",
    tag: "Expert Diagnosis",
  },
];

export default function Services() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        titleRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: "power3.out",
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 85%",
          },
        }
      );

      gsap.fromTo(
        gridRef.current?.querySelectorAll(".service-card") ?? [],
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power3.out",
          stagger: 0.07,
          scrollTrigger: {
            trigger: gridRef.current,
            start: "top 80%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="services" ref={sectionRef} className="py-24 sm:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div ref={titleRef} className="mb-16 opacity-0">
          <div className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/20 rounded-full px-4 py-1.5 mb-6">
            <span className="text-orange-300 text-sm font-medium tracking-wide">What We Do</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-white tracking-tight mb-4">
            Full-Service Heating<br />& Cooling
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl">
            Whether it&apos;s a routine tune-up or an emergency repair at midnight, RRR HVAC Rescue is ready to help Watertown homes and businesses stay comfortable.
          </p>
        </div>

        <div ref={gridRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s) => (
            <div
              key={s.title}
              className="service-card opacity-0 group relative bg-[#0f1623] border border-white/5 rounded-2xl p-6 hover:border-orange-500/30 transition-all duration-300 hover:bg-[#111d2c]"
            >
              {s.tag && (
                <div className="absolute top-4 right-4 bg-orange-500/10 border border-orange-500/20 text-orange-300 text-[10px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full">
                  {s.tag}
                </div>
              )}
              <div className="text-3xl mb-4">{s.icon}</div>
              <h3 className="text-white font-bold text-lg mb-2 group-hover:text-orange-300 transition-colors">
                {s.title}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
