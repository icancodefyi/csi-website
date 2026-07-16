"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const words = [
  "We don't organize events.",
  "We create experiences.",
  "We don't just teach code.",
  "We build leaders.",
  "We don't follow trends.",
  "We set them.",
];

export default function WhoWeAre() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <section
      ref={containerRef}
      id="who-we-are"
      className="relative bg-white"
    >
      <div className="sticky top-0 h-screen flex flex-col justify-center px-6 md:px-12 lg:px-20">
        <div className="max-w-[1600px] mx-auto w-full">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.25, 1, 0.33, 1] }}
            className="text-xs md:text-sm font-medium uppercase tracking-[0.25em] text-accent mb-8 md:mb-12"
          >
            Who we are
          </motion.p>

          <div className="space-y-4 md:space-y-6">
            {words.map((word, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{
                  duration: 0.7,
                  ease: [0.25, 1, 0.33, 1],
                  delay: i * 0.1,
                }}
              >
                <h2
                  className={`font-display text-[8vw] md:text-[6vw] lg:text-[5vw] font-bold leading-[0.85] -tracking-[0.02em] ${
                    i % 2 === 0 ? "text-primary" : "text-accent"
                  }`}
                >
                  {word}
                </h2>
              </motion.div>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8, ease: [0.25, 1, 0.33, 1], delay: 0.4 }}
            className="mt-10 md:mt-14 max-w-xl text-base md:text-lg leading-relaxed text-primary/50"
          >
            CSI ACE is not your average student chapter. We&apos;re a community of
            ambitious builders who push boundaries, question norms, and create
            work that matters. One chapter. Infinite possibilities.
          </motion.p>
        </div>
      </div>

      <div className="h-[50vh]" />
    </section>
  );
}
