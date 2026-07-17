"use client";

import { motion } from "framer-motion";

const lines = [
  "We don't build resumes.",
  "We build people.",
  "Learn.",
  "Build.",
  "Fail.",
  "Win.",
  "Lead.",
  "Repeat.",
];

export default function Manifesto() {
  return (
    <section className="relative bg-white">
      <div className="sticky top-0 h-screen flex flex-col justify-center">
        <div className="max-w-[1600px] mx-auto px-6 md:px-10 lg:px-16 w-full">
          <div className="space-y-2 md:space-y-4">
            {lines.map((line, i) => (
              <motion.h2
                key={i}
                initial={{ opacity: 0, x: -60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.7, delay: i * 0.06 }}
                className={`font-display text-[11vw] md:text-[8vw] lg:text-[6vw] font-bold leading-[0.82] -tracking-[0.03em] ${
                  i <= 1 ? "text-primary" : "text-accent"
                }`}
              >
                {i <= 1 && (
                  <span className={i === 1 ? "text-accent" : ""}></span>
                )}
                {line}
              </motion.h2>
            ))}
          </div>
        </div>
      </div>
      <div className="h-[80vh]" />
    </section>
  );
}
