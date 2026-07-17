"use client";

import { motion } from "framer-motion";

const moments = [
  { src: "https://picsum.photos/seed/life1/500/700", span: "row-span-2", rot: "-2deg" },
  { src: "https://picsum.photos/seed/life2/500/400", span: "", rot: "1deg" },
  { src: "https://picsum.photos/seed/life3/500/500", span: "", rot: "-1deg" },
  { src: "https://picsum.photos/seed/life4/500/600", span: "row-span-2", rot: "2deg" },
  { src: "https://picsum.photos/seed/life5/500/350", span: "", rot: "-0.5deg" },
  { src: "https://picsum.photos/seed/life6/500/450", span: "", rot: "1.5deg" },
  { src: "https://picsum.photos/seed/life7/500/650", span: "row-span-2", rot: "-1.5deg" },
  { src: "https://picsum.photos/seed/life8/500/380", span: "", rot: "0.5deg" },
  { src: "https://picsum.photos/seed/life9/500/550", span: "", rot: "-2deg" },
  { src: "https://picsum.photos/seed/life10/500/420", span: "", rot: "1deg" },
  { src: "https://picsum.photos/seed/life11/500/580", span: "", rot: "-1deg" },
  { src: "https://picsum.photos/seed/life12/500/360", span: "", rot: "2deg" },
];

export default function Life() {
  return (
    <section className="relative bg-white py-28 md:py-40">
      <div className="max-w-[1600px] mx-auto px-6 md:px-10 lg:px-16 mb-16 md:mb-24">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-xs font-medium uppercase tracking-[0.25em] text-accent mb-6"
        >
          Life at CSI
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-[16vw] md:text-[12vw] lg:text-[9vw] font-bold leading-[0.8] -tracking-[0.04em] text-primary"
        >
          CAUGHT IN
          <br />
          <span className="text-accent">THE MOMENT.</span>
        </motion.h2>
      </div>

      <div className="max-w-[1600px] mx-auto px-4 columns-2 md:columns-3 lg:columns-4 gap-3 md:gap-4">
        {moments.map((m, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30, rotate: `${parseFloat(m.rot) * 3}deg` }}
            whileInView={{ opacity: 1, y: 0, rotate: m.rot }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{ duration: 0.5, delay: i * 0.04 }}
            className={`break-inside-avoid mb-3 md:mb-4 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow ${m.span}`}
          >
            <img src={m.src} alt="" className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500" />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
