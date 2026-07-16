"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  UserPlus,
  Calendar,
  Code2,
  Users,
  Trophy,
  GraduationCap,
} from "lucide-react";

const steps = [
  {
    icon: UserPlus,
    label: "You join CSI",
    detail: "Walk into your first meetup. Meet people who share your curiosity.",
    color: "#061B4D",
  },
  {
    icon: Calendar,
    label: "Your first event",
    detail: "A workshop, a talk, a hackathon. Something clicks. You belong here.",
    color: "#0A2A6B",
  },
  {
    icon: Code2,
    label: "Your first project",
    detail: "Late nights fueled by caffeine and ambition. You ship real work.",
    color: "#0E3A8A",
  },
  {
    icon: Users,
    label: "You lead a team",
    detail: "From follower to leader. You organize, mentor, inspire.",
    color: "#1B4FB2",
  },
  {
    icon: Trophy,
    label: "You win your first hackathon",
    detail: "All those late nights pay off. The trophy is just the beginning.",
    color: "#2563EB",
  },
  {
    icon: GraduationCap,
    label: "You become a mentor",
    detail: "You pay it forward. The next generation looks up to you.",
    color: "#3B82F6",
  },
];

export default function Journey() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [vw, setVw] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  useEffect(() => {
    setVw(window.innerWidth);
    const onResize = () => setVw(window.innerWidth);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const x = useTransform(
    scrollYProgress,
    [0, 1],
    [0, -(steps.length - 1) * vw]
  );

  return (
    <section ref={containerRef} className="relative bg-white overflow-hidden" style={{ height: `${steps.length * 100}vh` }}>
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        <motion.div style={{ x }} className="flex">
          {steps.map((step, i) => (
            <div
              key={i}
              className="w-screen h-screen flex-shrink-0 flex items-center justify-center px-6 md:px-20"
            >
              <div className="max-w-4xl mx-auto w-full flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, ease: [0.25, 1, 0.33, 1] }}
                  className="flex-shrink-0"
                >
                  <div
                    className="w-32 h-32 md:w-40 md:h-40 rounded-3xl flex items-center justify-center"
                    style={{ backgroundColor: step.color }}
                  >
                    <step.icon className="w-14 h-14 md:w-18 md:h-18 text-white" strokeWidth={1.5} />
                  </div>
                </motion.div>

                <div className="text-center lg:text-left">
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, ease: [0.25, 1, 0.33, 1], delay: 0.1 }}
                    className="text-sm font-medium uppercase tracking-[0.2em] text-accent mb-4"
                  >
                    Step {String(i + 1).padStart(2, "0")}
                  </motion.p>
                  <motion.h3
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, ease: [0.25, 1, 0.33, 1], delay: 0.2 }}
                    className="font-display text-5xl md:text-7xl lg:text-[5rem] font-bold leading-[0.9] -tracking-[0.02em] text-primary"
                  >
                    {step.label}
                  </motion.h3>
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, ease: [0.25, 1, 0.33, 1], delay: 0.3 }}
                    className="mt-6 max-w-md text-lg text-primary/50 leading-relaxed"
                  >
                    {step.detail}
                  </motion.p>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
