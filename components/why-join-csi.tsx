"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";

const benefits = [
  {
    title: "Networking",
    subtitle: "Connect with Industry Professionals",
    desc: "Connect with experienced professionals, alumni, and industry leaders through CSI's networking events. Whether you're seeking mentorship, career guidance, or collaboration opportunities, CSI helps you build meaningful relationships that can shape your professional journey.",
    bg: "#1e3759",
    textColor: "#ffffff",
    accent: "#3b82f6",
    image:
      "https://cdn.csiace.com/csi_website/images/public+2/whyJoin/Data+dashboard+with+charts+and+graphs.svg",
  },
  {
    title: "Exclusive Events",
    subtitle: "Workshops, Hackathons & More",
    desc: "Participate in workshops, hackathons, speaker sessions, and tech fests curated exclusively for CSI members. These events are designed to foster innovation, inspire leadership, and keep you updated with emerging trends in the tech industry.",
    bg: "#0d2137",
    textColor: "#ffffff",
    accent: "#60a5fa",
    image:
      "https://cdn.csiace.com/csi_website/images/public+2/whyJoin/Medal+and+trophy+awarded+for+success.svg",
  },
  {
    title: "Real-World Projects",
    subtitle: "Build What Matters",
    desc: "Apply your skills beyond the classroom through hands-on, industry-relevant projects. CSI empowers students to collaborate on impactful initiatives that solve real-world problems, offering a platform to gain practical experience and build portfolios that stand out.",
    bg: "#071422",
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

  const { scrollYProgress: cardScroll } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"],
  });

  const iconY = useTransform(cardScroll, [0, 1], [24, -24]);
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div className="sticky top-0 flex items-center justify-center px-4 sm:px-6 lg:px-8 w-full h-[80vh] md:h-[90vh]">
      <motion.div
        ref={cardRef}
        style={{
          backgroundColor: bg,
          scale,
          top: `calc(2vh + ${index * 8}px)`,
        }}
        className="relative w-full rounded-[2.5rem] overflow-hidden flex flex-col-reverse items-start gap-6 md:flex-row md:items-center group py-10 pl-8 pr-6 md:py-16 md:pl-16 md:pr-12 shadow-xl min-h-[360px] md:min-h-[520px] origin-top"
      >
        {/* Noise texture overlay */}
        <div
          className="absolute inset-0 pointer-events-none z-10"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 30%, rgba(255,255,255,0.04) 0%, transparent 60%), radial-gradient(circle at 80% 70%, rgba(255,255,255,0.02) 0%, transparent 50%)",
          }}
        />

        {/* Subtle grid pattern */}
        <div
          className="absolute inset-0 pointer-events-none z-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />

        {/* Content */}
        <div className="relative z-20 flex flex-col justify-center h-full w-full md:w-[44%] pl-2 md:pl-12">
          <span
            className="text-xs font-semibold tracking-[0.2em] uppercase mb-6"
            style={{ color: accent }}
          >
            0{index + 1} &nbsp;/&nbsp; 03
          </span>
          <h3
            className="text-3xl sm:text-4xl md:text-[3rem] font-black -tracking-[0.02em] leading-[0.95]"
            style={{ color: textColor }}
          >
            {title}
          </h3>
          <p
            className="text-sm sm:text-base font-semibold tracking-wide mt-4"
            style={{ color: accent, opacity: 0.9 }}
          >
            {subtitle}
          </p>
          <p
            className="text-sm md:text-base font-medium leading-relaxed mt-6 max-w-md"
            style={{ color: textColor, opacity: 0.65 }}
          >
            {desc}
          </p>
        </div>

        {/* Illustration */}
        <motion.div
          style={{ y: iconY }}
          className="relative w-full pointer-events-none flex items-center justify-start z-10 md:justify-end md:absolute md:inset-y-0 md:right-0 md:w-[56%] md:h-auto"
        >
          <div className="w-full md:w-auto flex items-center justify-center md:justify-end pr-0 md:pr-8">
            <img
              src={image}
              alt=""
              className="w-[200px] md:w-[420px] h-auto object-contain opacity-75 transition-all duration-700 group-hover:scale-[1.04]"
            />
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
    <section
      id="why-join"
      className="flex flex-col items-center pt-[12vh] md:pt-[18vh] px-4 md:px-8"
    >
      <motion.div
        className="text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <h2 className="text-3xl sm:text-4xl md:text-6xl font-black -tracking-[0.03em] leading-[0.95] text-csi-navy">
          Why Join CSI?
        </h2>
        <p className="mt-5 max-w-md mx-auto text-base sm:text-lg font-medium leading-relaxed text-csi-navy/50">
          Discover the benefits of being part of our community
        </p>
      </motion.div>

      <main
        ref={container}
        className="relative flex w-full flex-col items-center justify-center pb-[25vh] pt-[8vh]"
      >
        {benefits.map((b, i) => {
          const targetScale = Math.max(
            0.6,
            1 - (benefits.length - i - 1) * 0.04,
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
