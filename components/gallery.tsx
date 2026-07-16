"use client";

import { useRef } from "react";
import { motion } from "framer-motion";

const photos = [
  "https://picsum.photos/seed/gal1/600/400",
  "https://picsum.photos/seed/gal2/500/700",
  "https://picsum.photos/seed/gal3/600/600",
  "https://picsum.photos/seed/gal4/700/500",
  "https://picsum.photos/seed/gal5/500/600",
  "https://picsum.photos/seed/gal6/600/400",
  "https://picsum.photos/seed/gal7/400/600",
  "https://picsum.photos/seed/gal8/600/500",
  "https://picsum.photos/seed/gal9/500/400",
  "https://picsum.photos/seed/gal10/600/700",
  "https://picsum.photos/seed/gal11/700/400",
  "https://picsum.photos/seed/gal12/400/500",
  "https://picsum.photos/seed/gal13/500/600",
  "https://picsum.photos/seed/gal14/600/400",
  "https://picsum.photos/seed/gal15/500/500",
  "https://picsum.photos/seed/gal16/600/700",
];

export default function Gallery() {
  const row1Ref = useRef<HTMLDivElement>(null);
  const row2Ref = useRef<HTMLDivElement>(null);

  return (
    <section className="relative bg-white py-24 md:py-40 overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-20 mb-16 md:mb-24">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.25, 1, 0.33, 1] }}
          className="text-xs md:text-sm font-medium uppercase tracking-[0.25em] text-accent mb-6"
        >
          Moments
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.25, 1, 0.33, 1], delay: 0.1 }}
          className="font-display text-[12vw] md:text-[9vw] lg:text-[7vw] font-bold leading-[0.82] -tracking-[0.03em] text-primary"
        >
          Caught in
          <br />
          <span className="text-accent">the moment</span>
        </motion.h2>
      </div>

      <div className="space-y-3 md:space-y-4">
        <div ref={row1Ref} className="flex gap-3 md:gap-4 overflow-hidden">
          <div
            className="flex gap-3 md:gap-4 shrink-0"
            style={{ animation: "marquee 60s linear infinite" }}
          >
            {photos.slice(0, 8).map((src, i) => (
              <div
                key={`r1-${i}`}
                className={`${
                  i % 3 === 0 ? "w-48 md:w-64 h-64 md:h-80" : i % 3 === 1 ? "w-56 md:w-72 h-48 md:h-64" : "w-40 md:w-56 h-56 md:h-72"
                } rounded-2xl overflow-hidden flex-shrink-0`}
              >
                <img
                  src={src}
                  alt="Gallery"
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
          <div
            className="flex gap-3 md:gap-4 shrink-0"
            style={{ animation: "marquee 60s linear infinite" }}
          >
            {photos.slice(0, 8).map((src, i) => (
              <div
                key={`r1d-${i}`}
                className={`${
                  i % 3 === 0 ? "w-48 md:w-64 h-64 md:h-80" : i % 3 === 1 ? "w-56 md:w-72 h-48 md:h-64" : "w-40 md:w-56 h-56 md:h-72"
                } rounded-2xl overflow-hidden flex-shrink-0`}
              >
                <img
                  src={src}
                  alt="Gallery"
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        <div ref={row2Ref} className="flex gap-3 md:gap-4 overflow-hidden">
          <div
            className="flex gap-3 md:gap-4 shrink-0"
            style={{ animation: "marquee-reverse 65s linear infinite" }}
          >
            {photos.slice(8).map((src, i) => (
              <div
                key={`r2-${i}`}
                className={`${
                  i % 3 === 0 ? "w-56 md:w-72 h-48 md:h-64" : i % 3 === 1 ? "w-40 md:w-56 h-56 md:h-72" : "w-48 md:w-64 h-64 md:h-80"
                } rounded-2xl overflow-hidden flex-shrink-0`}
              >
                <img
                  src={src}
                  alt="Gallery"
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
          <div
            className="flex gap-3 md:gap-4 shrink-0"
            style={{ animation: "marquee-reverse 65s linear infinite" }}
          >
            {photos.slice(8).map((src, i) => (
              <div
                key={`r2d-${i}`}
                className={`${
                  i % 3 === 0 ? "w-56 md:w-72 h-48 md:h-64" : i % 3 === 1 ? "w-40 md:w-56 h-56 md:h-72" : "w-48 md:w-64 h-64 md:h-80"
                } rounded-2xl overflow-hidden flex-shrink-0`}
              >
                <img
                  src={src}
                  alt="Gallery"
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
