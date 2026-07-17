"use client";

import { motion } from "framer-motion";

const photos = Array.from({ length: 30 }, (_, i) => ({
  src: `https://picsum.photos/seed/ppl-${i}/${300 + (i % 5) * 40}/${300 + (i % 3) * 60}`,
  w: i % 5 === 0 ? "w-40 md:w-56" : i % 5 === 1 ? "w-32 md:w-48" : i % 5 === 2 ? "w-48 md:w-64" : i % 5 === 3 ? "w-36 md:w-52" : "w-44 md:w-60",
  h: i % 3 === 0 ? "h-48 md:h-64" : i % 3 === 1 ? "h-56 md:h-72" : "h-40 md:h-56",
}));

export default function PeopleWall() {
  const doubled = [...photos, ...photos];

  return (
    <section className="relative bg-navy py-28 md:py-40 overflow-hidden">
      <div className="absolute inset-0 opacity-[0.015]" style={{
        backgroundImage: "linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)",
        backgroundSize: "50px 50px"
      }} />

      <div className="max-w-[1600px] mx-auto px-6 md:px-10 lg:px-16 mb-16 md:mb-20">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-xs font-medium uppercase tracking-[0.25em] text-accent mb-4"
        >
          The community
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-[18vw] md:text-[14vw] lg:text-[10vw] font-bold leading-[0.78] -tracking-[0.05em] text-white"
        >
          1200+
          <br />
          <span className="text-accent">MINDS</span>
          <br />
          BUILDING
          <br />
          TOGETHER
        </motion.h2>
      </div>

      <div className="space-y-3 md:space-y-4">
        {[0, 1, 2, 3].map((row) => (
          <div key={row} className="flex gap-3 md:gap-4 overflow-hidden">
            <div className="flex gap-3 md:gap-4 shrink-0" style={{
              animation: `${row % 2 === 0 ? "marquee" : "marquee-reverse"} ${60 + row * 15}s linear infinite`
            }}>
              {doubled.map((p, i) => (
                <div key={`${row}-${i}`} className={`${p.w} ${p.h} rounded-2xl overflow-hidden flex-shrink-0 opacity-80 hover:opacity-100 transition-opacity`}>
                  <img src={p.src} alt="" className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
