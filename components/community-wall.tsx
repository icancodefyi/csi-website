"use client";

import { motion } from "framer-motion";

const photos = Array.from({ length: 20 }, (_, i) => ({
  src: `https://picsum.photos/seed/comm-${i + 1}/${300 + (i % 3) * 50}/${350 + (i % 4) * 60}`,
  w: i % 4 === 0 ? "w-36 md:w-52" : i % 4 === 1 ? "w-48 md:w-64" : i % 4 === 2 ? "w-40 md:w-56" : "w-32 md:w-48",
  h: i % 3 === 0 ? "h-52 md:h-72" : i % 3 === 1 ? "h-40 md:h-56" : "h-48 md:h-64",
}));

export default function CommunityWall() {
  const doubled = [...photos, ...photos];

  return (
    <section className="relative bg-navy overflow-hidden py-32 md:py-44">
      <div className="absolute inset-0 opacity-[0.015]" style={{
        backgroundImage: "linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)",
        backgroundSize: "60px 60px"
      }} />

      <div className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 md:mb-24 px-6"
        >
          <p className="text-xs md:text-sm font-medium uppercase tracking-[0.25em] text-accent mb-4">
            Our people
          </p>
          <h2 className="font-display text-[14vw] md:text-[10vw] lg:text-[8vw] font-bold leading-[0.82] -tracking-[0.04em] text-white">
            THESE ARE
            <br />
            <span className="text-accent">OUR PEOPLE</span>
          </h2>
        </motion.div>

        <div className="space-y-3 md:space-y-4">
          {[0, 1, 2].map((row) => (
            <div key={row} className="flex gap-3 md:gap-4 overflow-hidden">
              <div
                className="flex gap-3 md:gap-4 shrink-0"
                style={{ animation: `${row % 2 === 0 ? "marquee" : "marquee-reverse"} ${70 + row * 10}s linear infinite` }}
              >
                {doubled.map((p, i) => (
                  <div key={`${row}-${i}`} className={`${p.w} ${p.h} rounded-2xl overflow-hidden flex-shrink-0`}>
                    <img src={p.src} alt="" className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
