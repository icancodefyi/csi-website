"use client";

import { motion } from "framer-motion";

const lines = [
  "The next hackathon",
  "winner might be",
  "reading this.",
  "The next founder.",
  "The next designer.",
  "The next builder.",
  "Why not you?",
];

export default function FinalCTA() {
  return (
    <section className="relative bg-white">
      <div className="sticky top-0 h-screen flex flex-col justify-center">
        <div className="max-w-[1600px] mx-auto px-6 md:px-10 lg:px-16 w-full">
          <div className="space-y-2 md:space-y-3 mb-14 md:mb-20">
            {lines.map((line, i) => (
              <motion.h2
                key={i}
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.05, ease: [0.25, 1, 0.33, 1] }}
                className={`font-display text-[12vw] md:text-[9vw] lg:text-[6vw] font-bold leading-[0.82] -tracking-[0.03em] ${
                  i === lines.length - 1 ? "text-accent" : "text-primary"
                }`}
              >
                {line}
              </motion.h2>
            ))}
          </div>

          <motion.a
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            href="#"
            className="inline-flex items-center gap-3 px-10 py-5 bg-primary text-white font-semibold rounded-full hover:bg-primary/90 transition-all text-lg group"
          >
            JOIN THE MOVEMENT
            <svg className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </motion.a>
        </div>
      </div>
      <div className="h-[30vh]" />
    </section>
  );
}
