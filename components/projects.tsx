"use client";

import { motion } from "framer-motion";

const projects = [
  { title: "CampusConnect", tag: "800+ daily users", desc: "Student networking platform. Event discovery. Team formation. Mentorship matching.", color: "#1e3658" },
  { title: "AceLearn", tag: "AI Study Companion", desc: "Peer learning platform with AI-powered tutor matching and personalized study paths.", color: "#0f1f35" },
  { title: "GreenGrid", tag: "IoT Energy System", desc: "Campus-wide energy monitoring. 23% cost reduction. Award-winning.", color: "#1e3658" },
];

export default function Projects() {
  return (
    <section className="relative bg-white py-28 md:py-40">
      <div className="max-w-[1600px] mx-auto px-6 md:px-10 lg:px-16">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-xs font-medium uppercase tracking-[0.25em] text-accent mb-6"
        >
          What we build
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-[16vw] md:text-[12vw] lg:text-[9vw] font-bold leading-[0.8] -tracking-[0.04em] text-primary"
        >
          WHAT WE
          <br />
          <span className="text-accent">BUILD.</span>
        </motion.h2>

        <div className="mt-20 md:mt-28 space-y-24 md:space-y-32">
          {projects.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-start"
            >
              <div className="flex-shrink-0 w-20 h-20 md:w-24 md:h-24 rounded-[1.5rem] flex items-center justify-center shadow-xl" style={{ backgroundColor: p.color }}>
                <span className="text-white font-display text-2xl md:text-3xl font-bold">{String(i + 1).padStart(2, "0")}</span>
              </div>
              <div>
                <h3 className="font-display text-5xl md:text-7xl lg:text-[4.5rem] font-bold leading-[0.88] -tracking-[0.03em] text-primary">{p.title}</h3>
                <p className="mt-3 text-sm font-medium uppercase tracking-[0.15em] text-accent">{p.tag}</p>
                <p className="mt-4 text-lg text-primary/45 leading-relaxed max-w-xl">{p.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
