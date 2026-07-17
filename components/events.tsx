"use client";

import { motion } from "framer-motion";

const events = [
  { title: "HACKVERSE", tag: "12 hours. 400+ participants. No sleep. Lots of pizza. Some crazy ideas.", img: "https://picsum.photos/seed/ev1/1400/900" },
  { title: "TECHTALKS", tag: "Listen to people who built what you dream of building.", img: "https://picsum.photos/seed/ev2/1400/900" },
  { title: "CODECRAFT", tag: "Build. Break. Learn. Repeat.", img: "https://picsum.photos/seed/ev3/1400/900" },
  { title: "BUILDNIGHTS", tag: "Ship side projects with the people who push you to be better.", img: "https://picsum.photos/seed/ev4/1400/900" },
];

export default function Events() {
  return (
    <section className="relative bg-white">
      <div className="max-w-[1600px] mx-auto px-6 md:px-10 lg:px-16 py-16">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-[16vw] md:text-[12vw] lg:text-[9vw] font-bold leading-[0.8] -tracking-[0.04em] text-primary"
        >
          EVENTS DON'T
          <br />
          FEEL LIKE
          <br />
          <span className="text-accent">EVENTS HERE.</span>
        </motion.h2>
      </div>

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
            <img src={ev.img} alt={ev.title} className="w-full h-full object-cover opacity-[0.06]" />
            <div className="absolute inset-0 bg-gradient-to-r from-white via-white/97 to-white/70" />
          </div>

          <div className="relative z-10 w-full max-w-[1600px] mx-auto px-6 md:px-10 lg:px-16 py-20">
            <motion.h3
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="font-display text-[18vw] md:text-[14vw] lg:text-[12vw] font-bold leading-[0.78] -tracking-[0.06em] text-primary"
            >
              {ev.title}
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="mt-6 text-xl md:text-2xl text-primary/45 font-medium max-w-2xl leading-relaxed"
            >
              {ev.tag}
            </motion.p>
          </div>
        </motion.div>
      ))}
    </section>
  );
}
