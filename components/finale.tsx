"use client";

import { motion } from "framer-motion";

export default function Finale() {
  return (
    <section className="relative bg-navy overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: "linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)",
          backgroundSize: "80px 80px"
        }} />
        <svg className="absolute top-1/2 right-0 -translate-y-1/2 w-[50%] h-[120%] opacity-[0.03]" viewBox="0 0 500 800">
          <circle cx="300" cy="400" r="300" stroke="#3B82F6" strokeWidth="50" fill="none" />
          <circle cx="300" cy="400" r="200" stroke="#3B82F6" strokeWidth="35" fill="none" />
        </svg>
      </div>

      <div className="relative z-10 max-w-[1600px] mx-auto px-6 md:px-12 lg:px-20 py-36 md:py-52 min-h-screen flex flex-col justify-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-xs font-medium uppercase tracking-[0.25em] text-accent mb-6"
        >
          The future
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.25, 1, 0.33, 1] }}
          className="font-display text-[14vw] md:text-[10vw] lg:text-[8vw] font-bold leading-[0.85] -tracking-[0.04em] text-white"
        >
          The next
          <br />
          story could be
          <br />
          <span className="text-accent">yours</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-8 max-w-md text-lg md:text-xl text-white/40 font-medium leading-relaxed"
        >
          Somewhere in this community is the future version of you.
          Your first hackathon starts here.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-10 md:mt-14"
        >
          <a
            href="#"
            className="inline-flex items-center gap-2 px-10 py-5 bg-white text-primary font-semibold rounded-full hover:bg-white/90 transition-all text-lg group"
          >
            Join CSI ACE
            <svg className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
