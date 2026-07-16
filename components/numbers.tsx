"use client";

import { useRef } from "react";
import { motion } from "framer-motion";

const stats = [
  { number: "1,200+", label: "minds building together" },
  { number: "80+", label: "experiences hosted" },
  { number: "15+", label: "national wins" },
  { number: "50+", label: "projects shipped" },
];

export default function Numbers() {
  return (
    <section className="relative bg-white">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-20 py-24 md:py-40">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.25, 1, 0.33, 1] }}
          className="text-xs md:text-sm font-medium uppercase tracking-[0.25em] text-accent mb-6"
        >
          By the numbers
        </motion.p>

        <div className="space-y-16 md:space-y-24">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, ease: [0.25, 1, 0.33, 1] }}
              className="flex flex-col md:flex-row md:items-baseline gap-4 md:gap-12"
            >
              <span className="font-display text-[20vw] md:text-[15vw] lg:text-[12vw] font-bold leading-[0.8] -tracking-[0.04em] text-primary">
                {stat.number}
              </span>
              <span className="text-xl md:text-2xl lg:text-3xl text-primary/40 font-medium">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
