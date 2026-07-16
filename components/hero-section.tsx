"use client";

import React from "react";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
} as const;

const item = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
  },
} as const;

const HeroSection = () => {
  return (
    <section className="flex min-h-[90vh] items-center bg-csi-cream pt-32 pb-20 md:pt-40 md:pb-32">
      <motion.div
        className="mx-auto flex w-full max-w-7xl flex-col items-center gap-16 px-6 md:flex-row md:gap-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={container}
      >
        <div className="flex w-full flex-col justify-center md:w-1/2">
          <motion.span
            variants={item}
            className="mb-8 inline-flex w-fit items-center gap-2 rounded-full bg-csi-navy/[0.04] px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.12em] text-csi-navy/60"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-csi-blue" />
            Atharva College of Engineering
          </motion.span>

          <motion.h1
            variants={item}
            className="text-5xl font-black leading-[0.9] -tracking-[0.03em] text-csi-navy sm:text-6xl md:text-7xl lg:text-8xl"
          >
            CSI
            <br />
            <span className="text-csi-blue">ACE</span>.
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-8 max-w-lg text-lg font-medium leading-relaxed text-csi-navy/60 md:text-xl"
          >
            The Computer Society of India student chapter at Atharva. We build
            the next generation of tech leaders through workshops, hackathons,
            and a thriving community.
          </motion.p>

          <motion.div
            variants={item}
            className="mt-12 flex flex-col gap-4 sm:flex-row"
          >
            <a
              href="#why-join"
              className="group inline-flex items-center justify-between gap-4 rounded-xl bg-csi-navy px-8 py-4 text-sm font-semibold text-white shadow-lg shadow-csi-navy/10 transition-all duration-300 hover:bg-csi-navy-dark hover:shadow-xl hover:shadow-csi-navy/15"
            >
              Explore Chapter
              <svg
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
            <a
              href="#contact"
              className="group inline-flex items-center justify-between gap-4 rounded-xl border border-csi-navy/[0.12] bg-white px-8 py-4 text-sm font-semibold text-csi-navy transition-all duration-300 hover:border-csi-navy/30 hover:bg-csi-navy/[0.02]"
            >
              Join Us
              <svg
                className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
          </motion.div>
        </div>

        <motion.div
          variants={item}
          className="flex w-full justify-center md:w-1/2 md:justify-end"
        >
          <div className="relative flex h-[400px] w-full max-w-[520px] items-center justify-center overflow-hidden rounded-[2.5rem] bg-csi-navy/[0.03]">
            <div
              className="absolute inset-0 opacity-30"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 30% 40%, rgba(30,55,89,0.08) 0%, transparent 50%), radial-gradient(circle at 70% 60%, rgba(59,130,246,0.06) 0%, transparent 50%)",
              }}
            />
            <div className="relative z-10 flex flex-col items-center gap-6 px-8 text-center">
              <img
                src="/assets/csi-logo.svg"
                alt="CSI ACE"
                className="h-28 w-28 opacity-40"
              />
              <div className="space-y-2">
                <p className="text-2xl font-black leading-tight text-csi-navy/30">
                  CSI ACE
                </p>
                <p className="text-sm font-medium text-csi-navy/20">
                  Computer Society of India
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
