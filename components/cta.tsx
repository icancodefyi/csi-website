"use client";

import { motion } from "framer-motion";

export default function CTA() {
  return (
    <section className="relative bg-primary overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <svg
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150vw] h-[150vh] opacity-[0.03]"
          viewBox="0 0 800 800"
          fill="none"
        >
          <circle cx="400" cy="400" r="350" stroke="#3B82F6" strokeWidth="80" />
          <circle cx="400" cy="400" r="250" stroke="#3B82F6" strokeWidth="60" />
          <circle cx="400" cy="400" r="150" stroke="#3B82F6" strokeWidth="40" />
        </svg>
      </div>

      <div className="relative z-10 max-w-[1600px] mx-auto px-6 md:px-12 lg:px-20 py-32 md:py-48 min-h-screen flex flex-col justify-center">
        <motion.h2
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.25, 1, 0.33, 1] }}
          className="font-display text-[12vw] md:text-[9vw] lg:text-[7vw] font-bold leading-[0.88] -tracking-[0.03em] text-white"
        >
          The next
          <br />
          story could be
          <br />
          <span className="text-accent">yours</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.25, 1, 0.33, 1], delay: 0.2 }}
          className="mt-8 md:mt-12 max-w-md text-lg md:text-xl leading-relaxed text-white/50"
        >
          Somewhere in this community is the future version of you.
          Ready to find out?
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.25, 1, 0.33, 1], delay: 0.4 }}
          className="mt-10 md:mt-14"
        >
          <a
            href="#"
            className="inline-flex items-center gap-2 px-10 py-5 bg-white text-primary font-semibold rounded-full hover:bg-white/90 transition-colors duration-300 group text-lg"
          >
            Join CSI ACE
            <svg
              className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-0.5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
