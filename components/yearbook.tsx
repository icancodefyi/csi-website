"use client";

import { motion } from "framer-motion";

const memories = [
  { label: "HACKVERSE", desc: "23 hours of coding. New friendships. One unforgettable night.", img: "https://picsum.photos/seed/yb1/600/400" },
  { label: "TECHTALKS", desc: "Founders. Engineers. Designers. Sharing unfiltered stories.", img: "https://picsum.photos/seed/yb2/600/400" },
  { label: "WORKSHOPS", desc: "Hands-on. Zero slides. Real learning.", img: "https://picsum.photos/seed/yb3/600/400" },
  { label: "COMMUNITY", desc: "1200+ people. One family.", img: "https://picsum.photos/seed/yb4/600/400" },
  { label: "VICTORIES", desc: "15+ national wins. Countless proud moments.", img: "https://picsum.photos/seed/yb5/600/400" },
];

export default function Yearbook() {
  return (
    <section className="relative bg-navy py-28 md:py-40">
      <div className="max-w-[1600px] mx-auto px-6 md:px-10 lg:px-16">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-xs font-medium uppercase tracking-[0.25em] text-accent mb-4"
        >
          2026
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-[18vw] md:text-[14vw] lg:text-[10vw] font-bold leading-[0.8] -tracking-[0.05em] text-white mb-16 md:mb-24"
        >
          <span className="text-accent">MEMORIES.</span>
        </motion.h2>

        <div className="space-y-4 md:space-y-6">
          {memories.map((m, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="flex flex-col md:flex-row gap-4 md:gap-8 items-center group"
            >
              <div className="w-full md:w-40 h-28 md:h-28 rounded-2xl overflow-hidden flex-shrink-0 opacity-40 group-hover:opacity-100 transition-opacity duration-300">
                <img src={m.img} alt={m.label} className="w-full h-full object-cover" />
              </div>
              <div className="text-center md:text-left">
                <h3 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold -tracking-[0.03em] text-white/80 group-hover:text-white transition-colors">
                  {m.label}
                </h3>
                <p className="mt-1 text-sm md:text-base text-white/25 group-hover:text-white/40 transition-colors">
                  {m.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
