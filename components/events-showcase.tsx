"use client";

import { motion } from "framer-motion";

const events = [
  {
    title: "HACKVERSE",
    subtitle: "23 hours of coding. 400+ participants. One crazy experience.",
    desc: "Our flagship hackathon where the best builders on campus converge for a night of creation, collaboration, and competition.",
    img: "https://picsum.photos/seed/hackverse-ev/1400/800",
  },
  {
    title: "CODESPRINT",
    subtitle: "Speed. Skill. Strategy. Every month.",
    desc: "A competitive coding series designed to sharpen your algorithmic thinking and problem-solving under pressure.",
    img: "https://picsum.photos/seed/codesprint-ev/1400/800",
  },
  {
    title: "TECHTALKS",
    subtitle: "Learn from builders who've shipped real products.",
    desc: "Intimate sessions with founders, engineers, and designers who share unfiltered stories about building products that matter.",
    img: "https://picsum.photos/seed/techtalks-ev/1400/800",
  },
];

export default function EventsShowcase() {
  return (
    <section className="relative bg-white">
      {events.map((ev, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="relative min-h-screen flex items-center overflow-hidden"
        >
          <div className="absolute inset-0">
            <img src={ev.img} alt={ev.title} className="w-full h-full object-cover opacity-[0.08]" />
            <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 to-white/60" />
          </div>

          <div className="relative z-10 w-full max-w-[1600px] mx-auto px-6 md:px-12 lg:px-20 py-20">
            <div className="max-w-3xl">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-xs font-medium uppercase tracking-[0.25em] text-accent mb-6"
              >
                Featured Event
              </motion.p>

              <motion.h2
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="font-display text-[16vw] md:text-[12vw] lg:text-[10vw] font-bold leading-[0.78] -tracking-[0.05em] text-primary"
              >
                {ev.title}
              </motion.h2>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="mt-6 text-xl md:text-2xl lg:text-3xl text-primary/60 font-medium leading-relaxed"
              >
                {ev.subtitle}
              </motion.p>

              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
                className="mt-4 text-base md:text-lg text-primary/35 leading-relaxed max-w-xl"
              >
                {ev.desc}
              </motion.p>
            </div>
          </div>
        </motion.div>
      ))}
    </section>
  );
}
