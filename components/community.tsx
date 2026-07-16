"use client";

import { useRef } from "react";
import { motion } from "framer-motion";

const images = [
  "https://picsum.photos/seed/comm1/400/500",
  "https://picsum.photos/seed/comm2/400/300",
  "https://picsum.photos/seed/comm3/300/400",
  "https://picsum.photos/seed/comm4/400/450",
  "https://picsum.photos/seed/comm5/350/400",
  "https://picsum.photos/seed/comm6/400/350",
  "https://picsum.photos/seed/comm7/300/500",
  "https://picsum.photos/seed/comm8/400/300",
  "https://picsum.photos/seed/comm9/350/450",
  "https://picsum.photos/seed/comm10/400/300",
  "https://picsum.photos/seed/comm11/300/400",
  "https://picsum.photos/seed/comm12/400/350",
];

export default function Community() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section ref={containerRef} className="relative bg-white overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-20 py-24 md:py-40">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.25, 1, 0.33, 1] }}
          className="text-xs md:text-sm font-medium uppercase tracking-[0.25em] text-accent mb-6"
        >
          Our people
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.25, 1, 0.33, 1], delay: 0.1 }}
          className="font-display text-[12vw] md:text-[9vw] lg:text-[7vw] font-bold leading-[0.82] -tracking-[0.03em] text-primary"
        >
          These are
          <br />
          <span className="text-accent">our people</span>
        </motion.h2>

        <div className="mt-16 md:mt-24">
          <div className="flex flex-wrap gap-3 md:gap-4 justify-center">
            {images.map((src, i) => {
              const aspect = i % 3 === 0 ? "aspect-[3/4]" : i % 3 === 1 ? "aspect-[4/3]" : "aspect-square";
              const width = i % 4 === 0 ? "w-32 md:w-48" : i % 4 === 1 ? "w-40 md:w-56" : i % 4 === 2 ? "w-36 md:w-52" : "w-28 md:w-44";

              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{
                    duration: 0.6,
                    ease: [0.25, 1, 0.33, 1],
                    delay: i * 0.05,
                  }}
                  className={`${width} ${aspect} rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300`}
                >
                  <img
                    src={src}
                    alt="Community member"
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                </motion.div>
              );
            })}
          </div>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.25, 1, 0.33, 1], delay: 0.3 }}
          className="mt-16 md:mt-20 text-center max-w-2xl mx-auto text-lg md:text-xl leading-relaxed text-primary/50"
        >
          A diverse community of 1200+ students, united by one belief — that
          the best way to learn is to build, together.
        </motion.p>
      </div>
    </section>
  );
}
