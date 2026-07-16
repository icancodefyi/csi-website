"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const easyOut = [0.23, 1, 0.32, 1] as const;

const events = [
  {
    title: "Hackathons",
    subtitle: "24-Hour Build Sprints",
    desc: "Lock in with your team and build something incredible in 24 hours. From ideation to deployment — push your limits.",
    color: "#152238",
    accent: "#3b82f6",
  },
  {
    title: "Workshops",
    subtitle: "Hands-On Learning",
    desc: "Master the latest tools through intensive sessions. AI, web dev, cloud, cybersecurity — learn from peers and pros.",
    color: "#0d2137",
    accent: "#60a5fa",
  },
  {
    title: "Tech Talks",
    subtitle: "Industry Insights",
    desc: "Hear from tech leaders, startup founders, and senior engineers about what it takes to build products that matter.",
    color: "#1e3759",
    accent: "#3b82f6",
  },
  {
    title: "Coding Competitions",
    subtitle: "Compete & Conquer",
    desc: "Test your algorithmic thinking against the best coders on campus. Weekly challenges and monthly leaderboards.",
    color: "#0a1628",
    accent: "#0ea5e9",
  },
  {
    title: "Project Showcases",
    subtitle: "Ship Your Work",
    desc: "Present what you've built. Get real feedback, find collaborators, and turn side projects into shipped products.",
    color: "#1a2744",
    accent: "#38bdf8",
  },
  {
    title: "Study Jams",
    subtitle: "Learn Together",
    desc: "Collaborative deep-work sessions. Code along, ask questions, and leave with a working project.",
    color: "#152238",
    accent: "#818cf8",
  },
];

function getOverflow(cardCount: number, w: number): number {
  const isMobile = w < 768;
  const isTablet = w >= 768 && w < 1024;
  const cardWidthVw = isMobile ? 0.8 : isTablet ? 0.42 : 0.3;
  const gapRem = isMobile ? 1 : 1.5;
  const fontSize = isMobile ? 16 : 16;
  const cardWidth = w * cardWidthVw;
  const gap = gapRem * fontSize;
  const padLeft = isMobile ? 1 * fontSize : 2 * fontSize;
  const padRight = isMobile ? 2 * fontSize : 3 * fontSize;
  const total = cardCount * cardWidth + (cardCount - 1) * gap + padLeft + padRight;
  return Math.max(0, total - w);
}

export default function EventsSection() {
  const targetRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"],
  });

  const [endPx, setEndPx] = useState(0);

  const measure = useCallback(() => {
    setEndPx(getOverflow(events.length, window.innerWidth));
  }, []);

  useEffect(() => {
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [measure]);

  const x = useTransform(scrollYProgress, (p) => -p * endPx);

  return (
    <section
      id="events"
      ref={targetRef}
      className="relative h-[400vh] bg-csi-cream"
    >
      <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden pt-16 md:pt-20 pb-6 md:pb-10">
        {/* Section Header */}
        <div className="mb-8 md:mb-14 px-4 md:px-8 w-full max-w-6xl mx-auto">
          <span className="inline-flex items-center gap-2 rounded-full border border-csi-navy/[0.06] bg-csi-navy/[0.02] px-4 py-2 text-xs font-semibold uppercase tracking-[0.15em] text-csi-navy/40 mb-6">
            <span className="h-1.5 w-1.5 rounded-full bg-csi-blue" />
            What we do
          </span>
          <h2 className="text-3xl md:text-[42px] font-black text-csi-navy -tracking-[0.03em] leading-[1.05] mb-3">
            Events &amp; Activities
          </h2>
          <p className="text-base md:text-lg font-medium text-csi-navy/40 max-w-lg">
            From hackathons to hands-on workshops, there&apos;s something
            for every builder.
          </p>
        </div>

        {/* Side-scrolled Cards */}
        <div className="relative overflow-hidden">
          <motion.div
            ref={trackRef}
            style={{ x }}
            className="flex gap-4 md:gap-6 pl-4 md:pl-8 pr-8 md:pr-12"
          >
            {events.map((event) => (
              <div
                key={event.title}
                className="w-[80vw] md:w-[42vw] lg:w-[30vw] h-[46vh] md:h-[52vh] shrink-0 rounded-[2rem] p-6 md:p-8 lg:p-10 flex flex-col justify-end gap-3 relative overflow-hidden border border-white/[0.06] shadow-lg group cursor-default"
                style={{ backgroundColor: event.color }}
              >
                {/* Glow */}
                <div
                  className="absolute inset-0 opacity-20 pointer-events-none"
                  style={{
                    background: `radial-gradient(ellipse 60% 50% at 30% 30%, ${event.accent}15 0%, transparent 60%)`,
                  }}
                />

                {/* Grid */}
                <div
                  className="absolute inset-0 opacity-[0.015] pointer-events-none"
                  style={{
                    backgroundImage:
                      "linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)",
                    backgroundSize: "50px 50px",
                  }}
                />

                {/* Accent line */}
                <div
                  className="absolute top-0 left-0 right-0 h-[2px] opacity-70"
                  style={{ backgroundColor: event.accent }}
                />

                <div className="relative z-10 flex flex-col gap-1.5">
                  <span
                    className="text-xs font-semibold tracking-[0.18em] uppercase"
                    style={{ color: event.accent }}
                  >
                    {event.subtitle}
                  </span>
                  <h3 className="text-2xl md:text-3xl lg:text-4xl font-black -tracking-[0.02em] leading-[0.92] text-white">
                    {event.title}
                  </h3>
                  <p className="text-sm md:text-base font-medium leading-relaxed text-white/50 max-w-sm mt-1">
                    {event.desc}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
