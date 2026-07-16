"use client";

import { motion } from "framer-motion";

const projects = [
  { title: "CampusConnect", desc: "A student networking platform built during HackVerse. Now used by 800+ students daily.", img: "https://picsum.photos/seed/proj-reveal1/1000/700", accent: "#1e3658" },
  { title: "AceLearn", desc: "AI-powered peer learning companion that matches students with tutors and generates personalized paths.", img: "https://picsum.photos/seed/proj-reveal2/1000/700", accent: "#0f1f35" },
];

export default function ProjectsReveal() {
  return (
    <section className="relative bg-white">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-20 py-28 md:py-40">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-xs font-medium uppercase tracking-[0.25em] text-accent mb-6"
        >
          Built by students
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-[14vw] md:text-[10vw] lg:text-[8vw] font-bold leading-[0.82] -tracking-[0.04em] text-primary"
        >
          Projects,
          <br />
          <span className="text-accent">not assignments</span>
        </motion.h2>

        <div className="mt-24 md:mt-36 space-y-32">
          {projects.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className={`flex flex-col ${i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} gap-10 lg:gap-16 items-center`}
            >
              <div className="w-full lg:w-[55%]">
                <div className="rounded-3xl overflow-hidden shadow-2xl" style={{ backgroundColor: p.accent }}>
                  <div className="p-6 md:p-8">
                    <img src={p.img} alt={p.title} className="w-full rounded-xl shadow-xl" />
                  </div>
                </div>
              </div>
              <div className="w-full lg:w-[45%]">
                <h3 className="font-display text-5xl md:text-7xl lg:text-[5rem] font-bold leading-[0.85] -tracking-[0.03em] text-primary">
                  {p.title}
                </h3>
                <p className="mt-6 text-lg text-primary/50 leading-relaxed max-w-md">{p.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
