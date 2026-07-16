"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";
import Link from "next/link";

const benefits = [
  {
    title: "Networking",
    subtitle: "Connect with Industry Professionals",
    desc: "Connect with experienced professionals, alumni, and industry leaders through CSI's networking events. Whether you're seeking mentorship, career guidance, or collaboration opportunities, CSI helps you build meaningful relationships that can shape your professional journey.",
    bg: "#1e3759",
    textColor: "#ffffff",
    accent: "#3b82f6",
  },
  {
    title: "Exclusive Events",
    subtitle: "Workshops, Hackathons & More",
    desc: "Participate in workshops, hackathons, speaker sessions, and tech fests curated exclusively for CSI members. These events are designed to foster innovation, inspire leadership, and keep you updated with emerging trends in the tech industry.",
    bg: "#0d2137",
    textColor: "#ffffff",
    accent: "#60a5fa",
  },
  {
    title: "Real-World Projects",
    subtitle: "Build What Matters",
    desc: "Apply your skills beyond the classroom through hands-on, industry-relevant projects. CSI empowers students to collaborate on impactful initiatives that solve real-world problems, offering a platform to gain practical experience and build portfolios that stand out.",
    bg: "#071422",
    textColor: "#ffffff",
    accent: "#3b82f6",
  },
];

function BenefitCard({
  title,
  subtitle,
  desc,
  bg,
  textColor,
  accent,
  index,
  progress,
  range,
  targetScale,
}: (typeof benefits)[number] & {
  index: number;
  progress: MotionValue<number>;
  range: [number, number];
  targetScale: number;
}) {
  const cardRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress: cardScroll } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"],
  });

  const iconY = useTransform(cardScroll, [0, 1], [40, -40]);
  const scale = useTransform(progress, range, [1, targetScale]);

  const icons = [
    <svg
      key="network"
      style={{ color: accent }}
      className="w-20 h-20 md:w-40 md:h-40"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={0.8}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
      />
    </svg>,
    <svg
      key="events"
      style={{ color: accent }}
      className="w-20 h-20 md:w-40 md:h-40"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={0.8}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605"
      />
    </svg>,
    <svg
      key="projects"
      style={{ color: accent }}
      className="w-20 h-20 md:w-40 md:h-40"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={0.8}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z"
      />
    </svg>,
  ];

  return (
    <div className="sticky top-0 flex items-center justify-center px-4 sm:px-6 lg:px-8 w-full max-w-6xl h-[80vh] md:h-[90vh]">
      <motion.div
        ref={cardRef}
        style={{
          backgroundColor: bg,
          scale,
          top: `calc(2vh + ${index * 8}px)`,
        }}
        className="relative w-full rounded-[2.5rem] overflow-hidden flex flex-col items-start gap-6 md:flex-row md:items-center group py-8 pl-6 pr-4 md:py-14 md:pl-14 md:pr-10 shadow-xl min-h-[340px] md:min-h-[500px] origin-top"
      >
        {/* Noise texture overlay */}
        <div
          className="absolute inset-0 pointer-events-none z-20"
          style={{
            backgroundImage:
              "radial-gradient(circle at 25% 25%, rgba(255,255,255,0.03) 0%, transparent 50%), radial-gradient(circle at 75% 75%, rgba(255,255,255,0.02) 0%, transparent 50%)",
          }}
        />

        {/* Text content */}
        <div className="relative z-30 flex flex-col justify-center h-full w-full md:w-[42%] pl-2 md:pl-10">
          <span
            className="text-xs font-semibold tracking-widest uppercase mb-4"
            style={{ color: accent }}
          >
            0{index + 1}
          </span>
          <h3
            className="text-2xl sm:text-3xl md:text-[2.8rem] font-black tracking-[-0.02em] leading-[1.05]"
            style={{ color: textColor }}
          >
            {title}
          </h3>
          <p
            className="text-sm sm:text-base font-semibold tracking-wide mt-3"
            style={{ color: accent }}
          >
            {subtitle}
          </p>
          <p
            className="text-sm md:text-base font-medium leading-relaxed mt-5"
            style={{ color: textColor, opacity: 0.75 }}
          >
            {desc}
          </p>
        </div>

        {/* Icon illustration */}
        <motion.div
          style={{ y: iconY }}
          className="
            relative w-full pointer-events-none flex items-center justify-start z-10
            md:justify-center md:absolute md:inset-y-0 md:right-0 md:w-[58%] md:h-auto
          "
        >
          <div className="w-full md:w-auto flex items-center justify-center opacity-15 md:opacity-10">
            {icons[index]}
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default function WhyJoinCSI() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  return (
    <section className="flex flex-col items-center pt-24 px-4 md:px-8 pt-[15vh] md:pt-[20vh]">
      <h2 className="max-w-3xl text-center text-csi-navy text-2xl sm:text-3xl md:text-5xl font-black leading-[0.95] tracking-tight px-2 md:px-0">
        Why Join CSI?
      </h2>
      <p className="mt-4 max-w-lg text-center text-sm sm:text-base text-csi-muted font-medium leading-relaxed">
        Discover the benefits of being part of our community
      </p>

      <div className="flex flex-wrap justify-center gap-3 md:gap-5 mt-12 px-4 md:px-0">
        {["Networking", "Events", "Projects", "Mentorship", "Community"].map(
          (item) => (
            <span
              key={item}
              className="bg-csi-navy text-white px-6 md:px-10 py-3 md:py-5 rounded-full text-sm md:text-xl font-semibold"
            >
              {item}
            </span>
          ),
        )}
      </div>

      <main
        ref={container}
        className="relative flex w-full flex-col items-center justify-center pb-[30vh] pt-[5vh]"
      >
        {benefits.map((b, i) => {
          const targetScale = Math.max(
            0.6,
            1 - (benefits.length - i - 1) * 0.05,
          );
          return (
            <BenefitCard
              key={i}
              {...b}
              index={i}
              progress={scrollYProgress}
              range={[i * (1 / benefits.length), (i + 1) * (1 / benefits.length)]}
              targetScale={targetScale}
            />
          );
        })}
      </main>

      {/* Bottom CTAs */}
      <div className="flex flex-col md:flex-row justify-center gap-4 md:gap-6 max-w-5xl mx-auto w-full px-4 md:px-14 mb-16 md:mb-24">
        <Link
          href="#contact"
          className="group w-full md:w-[70%] h-[70px] md:h-[100px] flex items-center justify-between px-4 md:px-10 rounded-2xl border border-csi-navy/20 bg-white hover:bg-csi-navy transition-all duration-300"
        >
          <span className="text-csi-navy text-lg md:text-2xl font-black tracking-tight transition-colors duration-300 group-hover:text-white">
            Join the Chapter
          </span>
          <svg
            className="w-6 h-6 text-csi-navy transition-all duration-300 group-hover:text-white group-hover:translate-x-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </Link>
        <Link
          href="#events"
          className="group w-full md:w-[70%] h-[70px] md:h-[100px] flex items-center justify-between px-4 md:px-10 rounded-2xl border border-csi-navy/20 bg-white hover:bg-csi-navy transition-all duration-300"
        >
          <span className="text-csi-navy text-lg md:text-2xl font-black tracking-tight transition-colors duration-300 group-hover:text-white">
            Explore Events
          </span>
          <svg
            className="w-6 h-6 text-csi-navy transition-all duration-300 group-hover:text-white group-hover:translate-x-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </Link>
      </div>
    </section>
  );
}
