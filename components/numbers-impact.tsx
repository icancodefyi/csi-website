"use client";

import { motion } from "framer-motion";

const stats = [
  { number: "1200+", label: "minds building together", bg: "bg-white", num: "text-primary", lab: "text-primary/25" },
  { number: "80+", label: "experiences hosted", bg: "bg-navy", num: "text-white", lab: "text-white/25" },
  { number: "15+", label: "national wins", bg: "bg-white", num: "text-primary", lab: "text-primary/25" },
  { number: "1000+", label: "friendships made", bg: "bg-navy", num: "text-white", lab: "text-white/25" },
];

export default function NumbersImpact() {
  return (
    <section>
      {stats.map((s, i) => (
        <div key={i} className={s.bg}>
          <div className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-20 py-28 md:py-40">
            <motion.div
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="flex flex-col md:flex-row md:items-baseline gap-4 md:gap-10"
            >
              <span className={`font-display text-[20vw] md:text-[16vw] lg:text-[14vw] font-bold leading-[0.75] -tracking-[0.06em] ${s.num}`}>
                {s.number}
              </span>
              <span className={`text-xl md:text-2xl lg:text-3xl font-medium ${s.lab}`}>
                {s.label}
              </span>
            </motion.div>
          </div>
        </div>
      ))}
    </section>
  );
}
