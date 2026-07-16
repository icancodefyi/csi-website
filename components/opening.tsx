"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Opening() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex flex-col justify-center bg-white overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none">
        <svg
          className="absolute top-0 right-0 w-[60%] h-full opacity-[0.03]"
          viewBox="0 0 800 900"
          fill="none"
        >
          <path
            d="M600 0C450 150 300 300 350 450C400 600 500 700 400 900"
            stroke="#3B82F6"
            strokeWidth="120"
            strokeLinecap="round"
          />
          <path
            d="M800 200C650 350 550 450 500 600C450 750 600 850 500 900"
            stroke="#3B82F6"
            strokeWidth="80"
            strokeLinecap="round"
            opacity="0.6"
          />
        </svg>
        <svg
          className="absolute bottom-0 left-0 w-[40%] h-[50%] opacity-[0.02]"
          viewBox="0 0 500 500"
          fill="none"
        >
          <circle cx="200" cy="300" r="180" stroke="#3B82F6" strokeWidth="60" />
          <circle cx="250" cy="250" r="120" stroke="#3B82F6" strokeWidth="40" opacity="0.6" />
        </svg>
      </div>

      <motion.div
        style={{ y, opacity }}
        className="relative z-10 w-full max-w-[1600px] mx-auto px-6 md:px-12 lg:px-20 pb-20 md:pb-32"
      >
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-12 lg:gap-8">
          <div className="flex-1">
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: [0.25, 1, 0.33, 1] }}
            >
              <h1 className="font-display text-[14vw] md:text-[11vw] lg:text-[8vw] font-bold leading-[0.82] -tracking-[0.03em] text-primary">
                Computer
                <br />
                <span className="text-accent">Society</span>
                <br />
                of India
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.25, 1, 0.33, 1], delay: 0.3 }}
              className="mt-8 md:mt-10 max-w-lg text-lg md:text-xl leading-relaxed text-primary/50"
            >
              The student chapter for builders, hackers, and leaders
              who don&apos;t wait for the future — they create it.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.25, 1, 0.33, 1], delay: 0.5 }}
              className="mt-8 md:mt-10 flex items-center gap-6"
            >
              <span className="font-display text-2xl md:text-3xl italic text-accent">
                Build. Lead. Inspire.
              </span>
              <div className="h-px flex-1 bg-primary/10" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.25, 1, 0.33, 1], delay: 0.7 }}
              className="mt-10 md:mt-12 flex items-center gap-4"
            >
              <a
                href="#story"
                className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white font-medium rounded-full hover:bg-primary/90 transition-colors duration-300 group"
              >
                Explore CSI
                <svg
                  className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7m0 0H7m10 0v10" />
                </svg>
              </a>
              <span className="text-sm font-medium text-primary/30 uppercase tracking-widest">
                Atharva College
              </span>
            </motion.div>
          </div>

          <div className="hidden lg:block flex-1 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.2, ease: [0.25, 1, 0.33, 1], delay: 0.2 }}
              className="relative w-full aspect-[4/3] max-w-[560px] ml-auto"
            >
              <div className="absolute top-0 right-0 w-[85%] h-[85%] rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://picsum.photos/seed/csi-main/800/600"
                  alt="CSI Community"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute bottom-0 left-0 w-[65%] h-[65%] rounded-2xl overflow-hidden shadow-xl border-4 border-white">
                <img
                  src="https://picsum.photos/seed/csi-secondary/600/450"
                  alt="CSI Event"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -top-4 left-[40%] w-[40%] h-[40%] rounded-2xl overflow-hidden shadow-lg border-4 border-white">
                <img
                  src="https://picsum.photos/seed/csi-tertiary/400/300"
                  alt="CSI Workshop"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
