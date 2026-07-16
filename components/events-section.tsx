"use client";

import { useEffect, useState, useRef, useCallback } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const events = [
  {
    title: "Hackathons",
    subtitle: "24-Hour Build Sprints",
    desc: "Lock in with your team and build something incredible in 24 hours. From ideation to deployment, our hackathons push your limits and teach you what no classroom ever could.",
    color: "#1e3759",
    accent: "#3b82f6",
  },
  {
    title: "Workshops",
    subtitle: "Hands-On Learning",
    desc: "Master the latest tools and frameworks through intensive hands-on sessions. From AI and web dev to cloud and cybersecurity, learn from peers and industry pros.",
    color: "#0d2137",
    accent: "#60a5fa",
  },
  {
    title: "Tech Talks",
    subtitle: "Industry Insights",
    desc: "Hear from tech leaders, startup founders, and senior engineers about what it really takes to build products that matter. Real stories, no fluff, actionable insights.",
    color: "#071422",
    accent: "#3b82f6",
  },
  {
    title: "Coding Competitions",
    subtitle: "Compete & Conquer",
    desc: "Test your algorithmic thinking and problem-solving skills against the best coders on campus. Weekly challenges, monthly leaderboards, and bragging rights for the winners.",
    color: "#0a1628",
    accent: "#0ea5e9",
  },
  {
    title: "Project Showcases",
    subtitle: "Ship Your Work",
    desc: "Present what you've built to the community. Get feedback from experienced developers, find collaborators, and turn your side project into something people actually use.",
    color: "#1a2744",
    accent: "#38bdf8",
  },
  {
    title: "Study Jams",
    subtitle: "Learn Together",
    desc: "Collaborative deep-work sessions where we crack open a new technology together. Code along, ask questions, and leave with a working project — not just a watched tutorial.",
    color: "#152238",
    accent: "#818cf8",
  },
];

export default function EventsSection() {
  const targetRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end end"],
  });

  const trackRef = useRef<HTMLDivElement>(null);
  const [endPx, setEndPx] = useState(0);

  const measure = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    const overflow =
      el.scrollWidth - window.innerWidth + window.innerWidth * 0.1;
    setEndPx(Math.max(0, overflow));
  }, []);

  useEffect(() => {
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, [measure]);

  const x = useTransform(scrollYProgress, [0, 1], [0, -endPx]);

  return (
    <section
      id="events"
      ref={targetRef}
      className="relative h-[300vh] bg-csi-cream"
    >
      <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden pt-16 md:pt-20 pb-6 md:pb-10">
        {/* Section Header */}
        <div className="mb-8 md:mb-16 px-4 md:px-8 w-full max-w-6xl mx-auto">
          <span className="inline-flex items-center gap-2 rounded-full bg-csi-navy/[0.04] px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.12em] text-csi-navy/60 mb-6">
            <span className="h-1.5 w-1.5 rounded-full bg-csi-blue" />
            What we do
          </span>
          <h2 className="text-3xl md:text-[42px] font-black text-csi-navy -tracking-[0.03em] leading-[1.05] mb-3">
            Events &amp; Activities
          </h2>
          <p className="text-base md:text-lg text-csi-navy/50 font-medium max-w-lg">
            From hackathons to hands-on workshops, there&apos;s something for
            every builder.
          </p>
        </div>

        {/* Side-scrolled Cards */}
        <motion.div
          ref={trackRef}
          style={{ x }}
          className="flex gap-4 md:gap-6 pr-8 md:pr-[20vh] pl-4 md:pl-8"
        >
          {events.map((event) => (
            <div
              key={event.title}
              className="w-[80vw] md:w-[42vw] lg:w-[30vw] h-[50vh] md:h-[55vh] shrink-0 rounded-[2rem] p-6 md:p-8 lg:p-10 flex flex-col justify-end gap-4 relative overflow-hidden border border-white/[0.06] shadow-lg"
              style={{ backgroundColor: event.color }}
            >
              {/* Noise texture */}
              <div className="absolute inset-0 opacity-15 pointer-events-none mix-blend-overlay" style={{
                backgroundImage: "radial-gradient(circle at 30% 20%, rgba(255,255,255,0.15) 0%, transparent 60%), radial-gradient(circle at 70% 80%, rgba(255,255,255,0.08) 0%, transparent 50%)",
                backgroundRepeat: "no-repeat",
              }} />

              {/* Grid pattern */}
              <div
                className="absolute inset-0 opacity-[0.02] pointer-events-none"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(255,255,255,0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.2) 1px, transparent 1px)",
                  backgroundSize: "60px 60px",
                }}
              />

              {/* Accent line */}
              <div
                className="absolute top-0 left-0 right-0 h-[3px] opacity-80"
                style={{ backgroundColor: event.accent }}
              />

              <div className="relative z-10 flex flex-col gap-2">
                <span
                  className="text-xs font-semibold tracking-[0.15em] uppercase"
                  style={{ color: event.accent }}
                >
                  {event.subtitle}
                </span>
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-black -tracking-[0.02em] leading-[0.95] text-white">
                  {event.title}
                </h3>
                <p className="text-sm md:text-base font-medium leading-relaxed text-white/60 max-w-sm mt-1">
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
