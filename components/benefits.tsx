"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const cards = [
  {
    heading: "A community that actually cares.",
    body: "200+ members who build, ship, and help each other out. No gatekeeping, no egos — just people who love making things. Find your crew in workshops, hackathons, or just hanging out on Discord.",
    cta: "Join the community",
    bg: "/gallery/event3.jpg",
  },
  {
    heading: "Learn by building, not memorizing.",
    body: "Workshops on web dev, AI/ML, cloud computing, and more — led by students who've actually shipped projects. No boring lectures. You build something real in every session.",
    cta: "See upcoming workshops",
    bg: "/gallery/event5.jpg",
  },
  {
    heading: "Hackathons that push you.",
    body: "24-hour build marathons where you form teams, ship a project from scratch, and compete for prizes. That one weekend that changes how you think about what you can build.",
    cta: "Next hackathon is coming",
    bg: "/gallery/event8.jpg",
  },
  {
    heading: "Free stuff, just for showing up.",
    body: "Certificates, swag, industry exposure, and connections that actually matter — all free. No hidden fees, no catches. If you're a student, you're in.",
    cta: "See all perks",
    bg: "/gallery/event10.jpg",
  },
];

function ArrowSvg() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 8H13M13 8L8.5 3.5M13 8L8.5 12.5" />
    </svg>
  );
}

export default function Benefits() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-80px" });

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden"
      style={{
        background: "#fef7f8",
        paddingTop: 80,
        paddingBottom: 48,
      }}
    >
      <div
        style={{
          maxWidth: 1366,
          margin: "0 auto",
          paddingLeft: "clamp(24px, 14.29%, 195px)",
          paddingRight: "clamp(24px, 14.29%, 195px)",
        }}
      >
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.25, 1, 0.33, 1] }}
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: 40,
            fontWeight: 400,
            lineHeight: 0.9,
            color: "var(--color-primary)",
            margin: "0 0 20px",
            width: 1022,
            maxWidth: "100%",
          }}
        >
          Everything that comes with joining.
        </motion.h2>

        {/* Intro */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.25, 1, 0.33, 1] }}
          style={{
            fontFamily: "var(--font-body)",
            fontSize: 20,
            color: "var(--color-primary)",
            margin: "0 0 48px",
            lineHeight: 1.2,
          }}
        >
          CSI-ACE isn&apos;t just events — here&apos;s what you get as part of the
          community.
        </motion.p>

        {/* Cards */}
        <div style={{ display: "flex", flexDirection: "column", gap: 30 }}>
          {cards.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.7,
                delay: 0.15 + i * 0.1,
                ease: [0.25, 1, 0.33, 1],
              }}
              style={{
                position: "relative",
                borderRadius: 16,
                overflow: "visible",
              }}
            >
              {/* Background image + overlay */}
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  borderRadius: 16,
                  overflow: "hidden",
                  pointerEvents: "none",
                }}
              >
                <img
                  src={card.bg}
                  alt=""
                  style={{
                    position: "absolute",
                    height: "100%",
                    width: "100%",
                    left: 0,
                    top: 0,
                    right: 0,
                    bottom: 0,
                    objectFit: "cover",
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: "rgba(0,0,0,0.7)",
                  }}
                />
              </div>

              {/* Content */}
              <div
                style={{
                  position: "relative",
                  zIndex: 1,
                  padding: "32px 44px 32px",
                }}
              >
                <h3
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontSize: 40,
                    fontWeight: 400,
                    lineHeight: 1,
                    color: "#fffdf8",
                    margin: "0 0 12px",
                  }}
                >
                  {card.heading}
                </h3>
                <p
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: 20,
                    color: "#fffdf8",
                    margin: 0,
                    lineHeight: 1.2,
                    maxWidth: 820,
                  }}
                >
                  {card.body}
                </p>
                <a
                  href="#"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    paddingLeft: 20,
                    paddingRight: 20,
                    height: 44,
                    background: "var(--color-red)",
                    color: "#fffdf8",
                    borderRadius: 32,
                    fontFamily: "var(--font-body)",
                    fontSize: 20,
                    fontWeight: 400,
                    textDecoration: "none",
                    whiteSpace: "nowrap",
                    marginTop: 16,
                    gap: 8,
                  }}
                >
                  {card.cta}
                  <ArrowSvg />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
