"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative overflow-hidden"
      style={{
        background: "#fef7f8",
        paddingTop: 80,
        paddingBottom: 80,
        paddingLeft: "clamp(24px, 14.29%, 220px)",
        paddingRight: "clamp(24px, 14.29%, 220px)",
      }}
    >
      {/* Decorative gradient */}
      <div
        className="absolute top-0 left-0 right-0 h-1/2 pointer-events-none"
        style={{
          background:
            "linear-gradient(180deg, rgba(236,55,80,0.06) 0%, transparent 100%)",
        }}
      />

      <div className="relative z-10 flex flex-col lg:flex-row items-center gap-12 lg:gap-16 max-w-[1100px] mx-auto">
        {/* Left: Text */}
        <div className="flex-1 min-w-0">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.25, 1, 0.33, 1] }}
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(32px, 4vw, 48px)",
              fontWeight: 400,
              lineHeight: 0.95,
              color: "var(--color-primary)",
              margin: "0 0 40px",
            }}
          >
            Built by students,{" "}
            <span
              style={{
                background:
                  "linear-gradient(90deg, #ec3750 0%, #ff8c37 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              for students.
            </span>
          </motion.h2>

          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.7,
                delay: 0.1,
                ease: [0.25, 1, 0.33, 1],
              }}
              style={{
                fontFamily: "var(--font-body)",
                fontSize: 20,
                lineHeight: 1.4,
                color: "var(--color-primary)",
                margin: 0,
                opacity: 0.75,
              }}
            >
              The Computer Society of India (CSI) is a non-profit professional
              organisation dedicated to fostering the exchange of ideas and
              information among technology enthusiasts. As a national-level
              committee, CSI brings together like-minded individuals to
              collaborate, learn and innovate.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.7,
                delay: 0.2,
                ease: [0.25, 1, 0.33, 1],
              }}
              style={{
                fontFamily: "var(--font-body)",
                fontSize: 20,
                lineHeight: 1.4,
                color: "var(--color-primary)",
                margin: 0,
                opacity: 0.75,
              }}
            >
              CSI organises a wide range of engaging events, including seminars,
              workshops, hackathons, games and project interactions, to cultivate
              a vibrant tech community. These activities are designed to provide a
              dynamic and supportive environment for students and professionals
              alike, encouraging self-development and creative problem-solving.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.7,
                delay: 0.3,
                ease: [0.25, 1, 0.33, 1],
              }}
              style={{
                fontFamily: "var(--font-body)",
                fontSize: 20,
                lineHeight: 1.4,
                color: "var(--color-primary)",
                margin: 0,
                opacity: 0.75,
              }}
            >
              By blending education with enjoyment, CSI inspires budding
              engineers to explore their full potential and prepares them to
              become the tech leaders of tomorrow.
            </motion.p>
          </div>
        </div>

        {/* Right: Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 1, 0.33, 1] }}
          className="flex-shrink-0 flex items-center justify-center"
          style={{ width: "clamp(200px, 25vw, 320px)" }}
        >
          <img
            src="/assets/csi-logo.png"
            alt="CSI-ACE Logo"
            className="w-full h-auto"
          />
        </motion.div>
      </div>
    </section>
  );
}
