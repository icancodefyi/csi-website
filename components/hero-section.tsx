"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const easyOut = [0.23, 1, 0.32, 1] as const;

export default function HeroSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex flex-col justify-end bg-[#050a14] overflow-hidden"
    >
      {/* Deep layered background */}
      <div className="absolute inset-0">
        {/* Base gradient */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 70% 60% at 20% 30%, rgba(59,130,246,0.12) 0%, transparent 55%), radial-gradient(ellipse 50% 70% at 80% 70%, rgba(96,165,250,0.06) 0%, transparent 45%), linear-gradient(180deg, #050a14 0%, #0a1628 50%, #0d2137 100%)",
          }}
        />

        {/* Animated aura */}
        <div className="absolute top-1/3 -left-1/4 w-1/2 h-1/2 rounded-full bg-csi-blue/5 blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 right-0 w-[40%] h-[40%] rounded-full bg-csi-sky/4 blur-[100px]" />

        {/* Grid texture */}
        <div
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />

        {/* Noise */}
        <div
          className="absolute inset-0 opacity-[0.03] mix-blend-overlay"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.5'/%3E%3C/svg%3E\")",
            backgroundRepeat: "repeat",
          }}
        />

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-[30vh] bg-gradient-to-t from-csi-cream to-transparent" />
      </div>

      {/* Main content */}
      <motion.div
        style={{ y, opacity }}
        className="relative z-10 px-4 md:px-8 lg:px-12 pb-16 md:pb-24 w-full max-w-[1440px] mx-auto"
      >
        {/* Tiny label */}
        <motion.div
          className="mb-12 md:mb-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: easyOut, delay: 0.2 }}
        >
          <span className="text-xs font-medium tracking-[0.25em] uppercase text-white/20">
            CSI &middot; Atharva College of Engineering
          </span>
        </motion.div>

        {/* Headline */}
        <div className="max-w-[90%] md:max-w-[85%]">
          <motion.h1
            className="text-[13vw] md:text-[10vw] lg:text-[7.5vw] font-black text-white leading-[0.8] -tracking-[0.04em]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, ease: easyOut, delay: 0.3 }}
          >
            Computer
            <br />
            Society
            <br />
            <span className="font-normal italic tracking-[-0.02em]">
              of India
            </span>
          </motion.h1>
        </div>

        {/* Tiny supporting line + CTA */}
        <div className="mt-10 md:mt-14 flex flex-col md:flex-row md:items-end justify-between gap-6 md:gap-12">
          <motion.p
            className="max-w-sm text-sm md:text-base font-medium text-white/30 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: easyOut, delay: 0.6 }}
          >
            The student chapter building the next generation of engineers
            — one hackathon, workshop, and late-night debugging session at
            a time.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, ease: easyOut, delay: 0.8 }}
          >
            <a
              href="#why-join"
              className="group inline-flex items-center gap-3 text-sm font-semibold text-white/60 hover:text-white transition-colors duration-200"
            >
              See what we do
              <svg
                className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                />
              </svg>
            </a>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
