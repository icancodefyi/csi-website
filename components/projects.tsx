"use client";

import { useRef } from "react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "CampusConnect",
    tag: "A student networking platform",
    desc: "Built during HackVerse 2024. Now used by 800+ students daily for event discovery, team formation, and mentorship matching.",
    color: "#061B4D",
    mockup: "https://picsum.photos/seed/proj1/1000/700",
  },
  {
    title: "AceLearn",
    tag: "Peer-to-peer learning platform",
    desc: "An AI-powered study companion that matches students with peer tutors and generates personalized learning paths.",
    color: "#0A2A6B",
    mockup: "https://picsum.photos/seed/proj2/1000/700",
  },
  {
    title: "GreenGrid",
    tag: "IoT energy monitoring system",
    desc: "Award-winning IoT solution for real-time campus energy monitoring and optimization. Reduced energy costs by 23%.",
    color: "#0E3A8A",
    mockup: "https://picsum.photos/seed/proj3/1000/700",
  },
];

export default function Projects() {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section ref={containerRef} className="relative bg-white">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-20 py-24 md:py-40">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.25, 1, 0.33, 1] }}
          className="text-xs md:text-sm font-medium uppercase tracking-[0.25em] text-accent mb-6"
        >
          Built by CSI
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.25, 1, 0.33, 1], delay: 0.1 }}
          className="font-display text-[12vw] md:text-[9vw] lg:text-[7vw] font-bold leading-[0.82] -tracking-[0.03em] text-primary"
        >
          Projects,
          <br />
          <span className="text-accent">not assignments</span>
        </motion.h2>

        <div className="mt-20 md:mt-32 space-y-28 md:space-y-40">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.9, ease: [0.25, 1, 0.33, 1] }}
              className={`flex flex-col ${
                i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              } gap-8 lg:gap-20 items-center`}
            >
              <div className="w-full lg:w-[55%]">
                <div
                  className="relative rounded-3xl overflow-hidden"
                  style={{ backgroundColor: project.color }}
                >
                  <div className="p-6 md:p-10">
                    <img
                      src={project.mockup}
                      alt={project.title}
                      className="w-full rounded-2xl shadow-2xl"
                    />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#061B4D]/20 to-transparent" />
                </div>
              </div>

              <div className="w-full lg:w-[45%]">
                <p className="text-sm font-medium text-accent uppercase tracking-[0.15em]">
                  {project.tag}
                </p>
                <h3 className="mt-4 font-display text-4xl md:text-6xl lg:text-[4.5rem] font-bold leading-[0.9] -tracking-[0.02em] text-primary">
                  {project.title}
                </h3>
                <p className="mt-6 text-base md:text-lg text-primary/50 leading-relaxed max-w-md">
                  {project.desc}
                </p>
                <motion.a
                  whileHover={{ x: 4 }}
                  className="mt-8 inline-flex items-center gap-2 text-base font-medium text-primary group"
                  href="#"
                >
                  View case study
                  <svg
                    className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
