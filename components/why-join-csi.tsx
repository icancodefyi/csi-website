"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";

const benefits = [
  {
    title: "Networking",
    subtitle: "Connect with industry professionals",
    desc: "Connect with experienced professionals, alumni, and industry leaders through exclusive networking events. Build relationships that shape your career — mentorship, internships, and collaborations start here.",
    bg: "#0d1f3c",
    textColor: "#ffffff",
    accent: "#3b82f6",
    image:
      "https://cdn.csiace.com/csi_website/images/public+2/whyJoin/Data+dashboard+with+charts+and+graphs.svg",
  },
  {
    title: "Events",
    subtitle: "Workshops, hackathons & speaker sessions",
    desc: "Participate in workshops, hackathons, speaker sessions, and tech fests curated exclusively for CSI members. Hands-on learning with real tools, real problems, and real outcomes.",
    bg: "#061428",
    textColor: "#ffffff",
    accent: "#60a5fa",
    image:
      "https://cdn.csiace.com/csi_website/images/public+2/whyJoin/Medal+and+trophy+awarded+for+success.svg",
  },
  {
    title: "Projects",
    subtitle: "Build real-world solutions",
    desc: "Apply your skills beyond the classroom through hands-on, industry-relevant projects. Collaborate on initiatives that solve actual problems, gain practical experience, and build a portfolio that stands out.",
    bg: "#020d1c",
    textColor: "#ffffff",
    accent: "#3b82f6",
    image:
      "https://cdn.csiace.com/csi_website/images/public+2/whyJoin/international+transportation+and+delivery+logistics.svg",
  },
];

function BenefitCard({
  title,
  subtitle,
  desc,
  bg,
  textColor,
  accent,
  image,
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

  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div className="sticky top-0 flex items-center justify-center px-4 md:px-6 lg:px-8 w-full h-screen">
      <motion.div
        ref={cardRef}
        style={{ backgroundColor: bg, scale }}
        className="relative w-full rounded-[3rem] overflow-hidden flex flex-col justify-end md:flex-row md:items-center shadow-2xl h-[75vh] md:h-[80vh] origin-top"
      >
        {/* Texture layers */}
        <div className="absolute inset-0 opacity-[0.03] mix-blend-overlay pointer-events-none"
          style={{
            backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.4'/%3E%3C/svg%3E\")",
            backgroundRepeat: "repeat",
          }}
        />

        <div
          className="absolute inset-0 opacity-[0.02] pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)",
            backgroundSize: "70px 70px",
          }}
        />

        {/* Accent glow */}
        <div
          className="absolute pointer-events-none"
          style={{
            background: `radial-gradient(ellipse 40% 50% at 80% 50%, ${accent}10 0%, transparent 70%)`,
            inset: 0,
          }}
        />

        {/* Large number */}
        <div className="absolute top-8 md:top-12 left-8 md:left-16 z-10">
          <span
            className="text-[8rem] md:text-[10rem] lg:text-[12rem] font-black leading-none -tracking-[0.06em] opacity-[0.04] select-none"
            style={{ color: textColor }}
          >
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>

        {/* Content */}
        <div className="relative z-20 flex flex-col justify-end h-full w-full md:w-[48%] p-8 md:p-16">
          <span
            className="text-xs font-semibold tracking-[0.2em] uppercase mb-6"
            style={{ color: accent }}
          >
            {String(index + 1).padStart(2, "0")} / 03
          </span>
          <h3
            className="text-4xl sm:text-5xl md:text-[3.5rem] font-black -tracking-[0.03em] leading-[0.88]"
            style={{ color: textColor }}
          >
            {title}
          </h3>
          <p
            className="text-xs sm:text-sm font-semibold tracking-wide mt-5"
            style={{ color: accent, opacity: 0.85 }}
          >
            {subtitle}
          </p>
          <p
            className="text-sm md:text-base font-medium leading-relaxed mt-5 max-w-md"
            style={{ color: textColor, opacity: 0.55 }}
          >
            {desc}
          </p>
        </div>

        {/* Illustration */}
        <div className="relative w-full md:w-[52%] md:absolute md:inset-y-0 md:right-0 flex items-center justify-center md:justify-end pointer-events-none z-10 py-8 md:py-0 md:pr-8">
          <img
            src={image}
            alt=""
            className="w-[220px] md:w-[400px] h-auto object-contain opacity-80"
          />
        </div>
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
    <section
      id="why-join"
      className="flex flex-col items-center pt-[10vh] md:pt-[14vh] px-4 md:px-6"
    >
      {/* Editorial header */}
      <div className="w-full max-w-5xl mx-auto mb-16 md:mb-24 px-4 md:px-0">
        <motion.span
          className="text-xs font-medium tracking-[0.2em] uppercase text-csi-navy/25 mb-8 block"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Why CSI
        </motion.span>
        <motion.h2
          className="text-[10vw] md:text-[7vw] lg:text-[5.5vw] font-black text-csi-navy -tracking-[0.04em] leading-[0.85]"
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.23, 1, 0.32, 1] }}
        >
          More than
          <br />
          a student club
        </motion.h2>
        <motion.p
          className="mt-6 md:mt-8 max-w-md text-base md:text-lg font-medium text-csi-navy/35 leading-relaxed"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.23, 1, 0.32, 1] }}
        >
          A community of builders, thinkers, and creators who push each
          other to be better — every single day.
        </motion.p>
      </div>

      {/* Sticky cards */}
      <main
        ref={container}
        className="relative flex w-full flex-col items-center justify-center pb-[30vh] pt-[8vh]"
      >
        {benefits.map((b, i) => {
          const targetScale = Math.max(
            0.55,
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
    </section>
  );
}
