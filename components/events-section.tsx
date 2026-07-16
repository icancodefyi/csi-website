"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const events = [
  {
    title: "Hackathons",
    subtitle: "24-Hour Build Sprints",
    desc: "Lock in with your team and build something incredible in 24 hours.",
    color: "#0d1f3c",
    accent: "#3b82f6",
  },
  {
    title: "Workshops",
    subtitle: "Hands-On Learning",
    desc: "Master the latest tools through intensive sessions with peers and pros.",
    color: "#061428",
    accent: "#60a5fa",
  },
  {
    title: "Tech Talks",
    subtitle: "Industry Insights",
    desc: "Hear from tech leaders and founders about building products that matter.",
    color: "#0a1a30",
    accent: "#3b82f6",
  },
  {
    title: "Coding Comps",
    subtitle: "Compete & Conquer",
    desc: "Test your algorithmic thinking against the best coders on campus.",
    color: "#020d1c",
    accent: "#0ea5e9",
  },
  {
    title: "Showcases",
    subtitle: "Ship Your Work",
    desc: "Present what you've built, get feedback, find collaborators.",
    color: "#0d1f3c",
    accent: "#38bdf8",
  },
  {
    title: "Study Jams",
    subtitle: "Learn Together",
    desc: "Collaborative deep-work sessions — code along and leave with a working project.",
    color: "#061428",
    accent: "#818cf8",
  },
];

function getOverflow(cardCount: number): number {
  const w = window.innerWidth;
  const cardWidth = w * (w < 768 ? 0.78 : w < 1024 ? 0.4 : 0.28);
  const gap = w < 768 ? 16 : 24;
  const padLeft = w < 768 ? 16 : 24;
  const padRight = w < 768 ? 32 : 48;
  return Math.max(0, Math.round(cardCount * cardWidth + (cardCount - 1) * gap + padLeft + padRight - w));
}

export default function EventsSection() {
  const targetRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"],
  });

  const [endPx, setEndPx] = useState(0);

  const remeasure = useCallback(() => {
    setEndPx(getOverflow(events.length));
  }, []);

  useEffect(() => {
    remeasure();
    window.addEventListener("resize", remeasure);
    return () => window.removeEventListener("resize", remeasure);
  }, [remeasure]);

  const x = useTransform(scrollYProgress, (p) => -p * endPx);

  return (
    <section ref={targetRef} className="relative h-[350vh] bg-csi-cream">
      <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden pt-14 md:pt-18 pb-6 md:pb-8">
        <div className="mb-8 md:mb-12 px-4 md:px-6 w-full max-w-5xl mx-auto">
          <h2 className="text-[10vw] md:text-[7vw] lg:text-[5.5vw] font-black text-csi-navy -tracking-[0.04em] leading-[0.85]">
            Events &amp;
            <br />
            Activities
          </h2>
        </div>

        <motion.div
          ref={trackRef}
          style={{ x }}
          className="flex gap-4 md:gap-6 pl-4 md:pl-6 pr-8 md:pr-12"
        >
          {events.map((event, i) => (
            <div
              key={event.title}
              className="w-[78vw] md:w-[40vw] lg:w-[28vw] h-[50vh] shrink-0 rounded-[2.5rem] p-6 md:p-8 flex flex-col justify-end gap-3 relative overflow-hidden border border-white/[0.04] shadow-xl"
              style={{ backgroundColor: event.color }}
            >
              <div
                className="absolute inset-0 opacity-25 pointer-events-none"
                style={{
                  background: `radial-gradient(ellipse 50% 40% at 50% 30%, ${event.accent}12 0%, transparent 60%)`,
                }}
              />
              <div
                className="absolute inset-0 opacity-[0.015] pointer-events-none"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)",
                  backgroundSize: "55px 55px",
                }}
              />
              <div className="absolute top-6 md:top-8 left-6 md:left-8 z-10 select-none">
                <span className="text-[6rem] md:text-[8rem] font-black leading-none -tracking-[0.06em] text-white/[0.03]">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <div
                className="absolute top-0 left-0 right-0 h-[2px] opacity-60"
                style={{ backgroundColor: event.accent }}
              />
              <div className="relative z-10 flex flex-col gap-1.5">
                <span
                  className="text-xs font-semibold tracking-[0.18em] uppercase"
                  style={{ color: event.accent }}
                >
                  {event.subtitle}
                </span>
                <h3 className="text-2xl md:text-[2.2rem] font-black -tracking-[0.02em] leading-[0.9] text-white">
                  {event.title}
                </h3>
                <p className="text-sm md:text-base font-medium leading-relaxed text-white/45 max-w-sm mt-1">
                  {event.desc}
                </p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
