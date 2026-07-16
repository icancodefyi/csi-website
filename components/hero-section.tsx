"use client";

import { motion } from "framer-motion";

const easyOut = [0.23, 1, 0.32, 1] as const;
const easyInOut = [0.77, 0, 0.175, 1] as const;

const stats = [
  { value: "500+", label: "Members" },
  { value: "40+", label: "Events" },
  { value: "12", label: "Projects" },
  { value: "8", label: "Years" },
];

export default function HeroSection() {
  return (
    <section className="relative min-h-[95vh] flex flex-col justify-between bg-csi-navy overflow-hidden">
      {/* Subtle radial gradient noise */}
      <div
        className="absolute inset-0 pointer-events-none opacity-30"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 30% 20%, rgba(59,130,246,0.12) 0%, transparent 60%), radial-gradient(ellipse 60% 80% at 70% 90%, rgba(96,165,250,0.06) 0%, transparent 50%)",
        }}
      />

      {/* Top content */}
      <div className="flex-1 flex items-end px-4 md:px-8 lg:px-12 w-full max-w-[1440px] mx-auto">
        <div className="pb-8 md:pb-12 w-full">
          {/* Tag */}
          <motion.div
            className="mb-8 md:mb-12"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: easyOut, delay: 0.1 }}
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.03] px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-white/40">
              Atharva College of Engineering
            </span>
          </motion.div>

          {/* Main heading */}
          <motion.h1
            className="text-[14vw] md:text-[11vw] lg:text-[8.5vw] font-black text-white leading-[0.82] -tracking-[0.04em] origin-left"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, ease: easyInOut, delay: 0.15 }}
          >
            Computer
            <br />
            Society of India
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="mt-6 md:mt-8 max-w-xl text-base md:text-lg font-medium leading-relaxed text-white/45"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: easyOut, delay: 0.4 }}
          >
            The official student chapter at Atharva College. We build,
            compete, and ship — connecting students with the tech that
            matters.
          </motion.p>

          {/* CTA */}
          <motion.div
            className="flex flex-wrap gap-3 mt-8 md:mt-10"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: easyOut, delay: 0.6 }}
          >
            <a
              href="#why-join"
              className="group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-csi-navy transition-transform duration-160 ease-out hover:scale-[0.98] active:scale-[0.96]"
            >
              Get Involved
              <svg
                className="w-4 h-4 transition-transform duration-160 group-hover:translate-x-0.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 12h14m0 0l-6-6m6 6l-6 6"
                />
              </svg>
            </a>
            <a
              href="#events"
              className="group inline-flex items-center gap-2 rounded-full border border-white/[0.12] px-6 py-3 text-sm font-semibold text-white/80 transition-all duration-160 ease-out hover:border-white/[0.2] hover:text-white active:scale-[0.96]"
            >
              Explore Events
            </a>
          </motion.div>
        </div>
      </div>

      {/* Stats strip */}
      <motion.div
        className="border-t border-white/[0.06]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, ease: easyOut, delay: 0.8 }}
      >
        <div className="px-4 md:px-8 lg:px-12 w-full max-w-[1440px] mx-auto">
          <div className="flex flex-wrap divide-x divide-white/[0.06]">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                className="flex-1 min-w-[120px] py-4 md:py-6 px-4 md:px-6 text-center md:text-left first:pl-0 last:pr-0"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  ease: easyOut,
                  delay: 0.9 + i * 0.08,
                }}
              >
                <div className="text-xl md:text-2xl font-black text-white -tracking-[0.02em]">
                  {stat.value}
                </div>
                <div className="text-xs md:text-sm font-medium text-white/35 mt-0.5">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* CSI logo placeholder — absolute positioned */}
      <div className="absolute right-4 md:right-12 top-1/2 -translate-y-1/2 pointer-events-none opacity-[0.04] hidden lg:block">
        <div className="w-[40vw] h-[40vw] rounded-full bg-white blur-3xl" />
      </div>
    </section>
  );
}
