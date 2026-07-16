"use client";

import React, { useEffect, useState, useCallback } from "react";
import { motion } from "framer-motion";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const TESTIMONIALS = [
  {
    id: 0,
    quote: "Joining CSI ACE was the best decision of my college life. The workshops on AI and web dev gave me skills that landed me an internship at a top tech company.",
    author: "Aditya Verma",
    role: "Final Year, CSE",
    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop&crop=faces",
  },
  {
    id: 1,
    quote: "The hackathons organized by CSI ACE pushed me out of my comfort zone. I built my first full-stack app during their 24-hour hackathon and it changed my trajectory.",
    author: "Priya Sharma",
    role: "Third Year, IT",
    img: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=200&h=200&fit=crop&crop=faces",
  },
  {
    id: 2,
    quote: "From organizing tech fests to leading workshops, CSI ACE gave me leadership experience that no textbook ever could. The community here is incredibly supportive.",
    author: "Rohit Patil",
    role: "Alumni, CSE",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=faces",
  },
  {
    id: 3,
    quote: "The networking events at CSI ACE connected me with industry professionals who later became my mentors. This chapter is a goldmine for ambitious students.",
    author: "Ananya Desai",
    role: "Final Year, AIDS",
    img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&crop=faces",
  },
  {
    id: 4,
    quote: "I was a complete beginner when I joined. The peer learning sessions and coding competitions at CSI ACE transformed me into a confident developer in just one semester.",
    author: "Siddharth Kulkarni",
    role: "Second Year, CSE",
    img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&h=200&fit=crop&crop=faces",
  },
  {
    id: 5,
    quote: "CSI ACE's annual tech fest was the highlight of my college experience. Managing a team of 50+ volunteers taught me more about project management than any course.",
    author: "Neha Gupta",
    role: "Alumni, IT",
    img: "https://images.unsplash.com/photo-1463453091185-61582044d556?w=200&h=200&fit=crop&crop=faces",
  },
  {
    id: 6,
    quote: "The guest lectures and industry interactions organized by CSI ACE gave me real-world insights that aren't in our curriculum. Truly grateful for this chapter.",
    author: "Arjun Mehta",
    role: "Third Year, CSE",
    img: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=200&h=200&fit=crop&crop=faces",
  },
];

const N = TESTIMONIALS.length;

const ASPECT = 400 / 368;
const BR_PCT = 28 / 368;
const FOLD_X = 293.344 / 368;
const FOLD_Y = 61.8848 / 400;
const AVT_PCT = 72 / 368;
const PAD_PCT = 32 / 368;

const LEVELS: Record<number, { xF: number; rot: number; z: number; yOff: number }> = {
  0: { xF: 0.0, rot: 0, z: 10, yOff: 30 },
  1: { xF: 0.86, rot: 6, z: 4, yOff: 50 },
  2: { xF: 1.68, rot: -9, z: 6, yOff: 70 },
  3: { xF: 2.45, rot: 13, z: 2, yOff: 90 },
  4: { xF: 3.2, rot: 16, z: 0, yOff: 110 },
};

const MAX_LEVEL = 4;

function wrapPosition(index: number, centerIdx: number, total: number): number {
  let diff = index - centerIdx;
  if (diff > Math.floor(total / 2)) diff -= total;
  if (diff < -Math.floor(total / 2)) diff += total;
  return diff;
}

function FoldCorner({ cw, ch }: { cw: number; ch: number }) {
  return (
    <svg
      viewBox="292 8 80 60"
      width={(80 / 368) * cw}
      height={(60 / 400) * ch}
      style={{ position: "absolute", top: 0, right: 0, pointerEvents: "none" }}
      fill="none"
    >
      <path
        d="M292.816 64.9026C307.928 30.6651 304.43 14.6497 302.683 9.99534C302.418 9.29025 302.897 8.50276 303.644 8.59593C307.949 9.13255 320.814 12.3964 343.5 31.5002C365.391 49.9347 370.467 60.4045 371.645 64.2689C371.872 65.0154 371.161 65.5077 370.477 65.1323C362.323 60.6576 323.141 41.3497 294.985 66.4128C294.109 67.1931 292.342 65.9761 292.816 64.9026Z"
        fill="black"
      />
    </svg>
  );
}

const SPRING = { type: "spring" as const, stiffness: 300, damping: 28, mass: 0.9 };

function TestimonialCard({
  position,
  item,
  cw,
  onClickCard,
  prevCenterIdx,
  currentCenterIdx,
  itemIndex,
}: {
  position: number;
  item: (typeof TESTIMONIALS)[0];
  cw: number;
  onClickCard: () => void;
  prevCenterIdx: number;
  currentCenterIdx: number;
  itemIndex: number;
}) {
  const isCenter = position === 0;
  const abs = Math.abs(position);

  const prevPos = wrapPosition(itemIndex, prevCenterIdx, N);
  const currPos = wrapPosition(itemIndex, currentCenterIdx, N);
  const posJump = Math.abs(currPos - prevPos);
  const didWrap = posJump > Math.floor(N / 2);

  const lvlIdx = Math.min(abs, MAX_LEVEL);
  const lvl = LEVELS[lvlIdx];

  const isVisible = abs <= 3;

  const ch = Math.round(cw * ASPECT);
  const br = Math.round(cw * BR_PCT);
  const fx = Math.round(cw * FOLD_X);
  const fy = Math.round(ch * FOLD_Y);
  const avt = Math.round(cw * AVT_PCT);
  const pad = Math.round(cw * PAD_PCT);
  const qSz = Math.max(11, Math.round(cw * 0.043));
  const aSz = Math.max(10, Math.round(cw * 0.034));

  const clip = [
    `0 ${br}px`,
    `${br}px 0`,
    `${fx}px 0`,
    `${cw}px ${fy}px`,
    `${cw}px calc(100% - ${br}px)`,
    `calc(100% - ${br}px) 100%`,
    `${br}px 100%`,
    `0 calc(100% - ${br}px)`,
  ].join(", ");

  const sign = position < 0 ? -1 : position > 0 ? 1 : 0;
  const xOff = lvl.xF * cw * sign;
  const rotation = sign === 0 ? lvl.rot : lvl.rot * sign;

  const shadow = "drop-shadow(0px 4px 4px rgba(0,0,0,0.25))";

  const finalOpacity = didWrap ? 0 : isVisible ? 1 : 0;
  const finalZ = isVisible && !didWrap ? lvl.z : 0;

  const cardTransition = didWrap ? { duration: 0 } : SPRING;

  return (
    <motion.div
      animate={{
        x: xOff,
        y: lvl.yOff,
        rotate: rotation,
        zIndex: finalZ,
        opacity: finalOpacity,
      }}
      transition={cardTransition}
      onClick={!isCenter && isVisible ? onClickCard : undefined}
      whileHover={
        !isCenter && isVisible
          ? { scale: 1.04, transition: { type: "spring", stiffness: 400, damping: 18 } }
          : undefined
      }
      style={{
        position: "absolute",
        left: "50%",
        top: 0,
        width: cw,
        height: ch,
        marginLeft: -cw / 2,
        cursor: isCenter ? "default" : isVisible ? "pointer" : "default",
        filter: isVisible ? shadow : "none",
        willChange: "transform",
        pointerEvents: isVisible ? "auto" : "none",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: isCenter ? "#1e3759" : "#f0f1f4",
          border: "1px solid #0000001a",
          clipPath: `polygon(${clip})`,
          display: "flex",
          flexDirection: "column",
          padding: pad,
          overflow: "hidden",
          transition: "background 0.3s ease",
        }}
      >
        <img
          src={item.img}
          alt={item.author}
          style={{
            width: avt,
            height: avt,
            borderRadius: Math.round(avt * 0.167),
            objectFit: "cover",
            marginBottom: 16,
            flexShrink: 0,
          }}
        />
        <p
          style={{
            fontSize: qSz,
            fontWeight: 500,
            lineHeight: 1.58,
            flex: 1,
            margin: 0,
            color: isCenter ? "#ffffff" : "#111",
          }}
        >
          &ldquo;{item.quote}&rdquo;
        </p>
        <div style={{ marginTop: 16 }}>
          <p
            style={{
              fontSize: aSz,
              fontWeight: 600,
              margin: 0,
              color: isCenter ? "#ffffff" : "#111",
            }}
          >
            — {item.author},
          </p>
          <p
            style={{
              fontSize: aSz - 1,
              opacity: 0.55,
              margin: "2px 0 0",
              color: isCenter ? "#ffffff" : "#111",
            }}
          >
            {item.role}
          </p>
        </div>
      </div>

      <FoldCorner cw={cw} ch={ch} />
    </motion.div>
  );
}

export default function Testimonials() {
  const [cw, setCw] = useState(300);
  const [centerIdx, setCenterIdx] = useState(3);
  const [prevCenterIdx, setPrevCenterIdx] = useState(3);
  const [busy, setBusy] = useState(false);

  const move = useCallback(
    (dir: number) => {
      if (busy) return;
      setBusy(true);
      setCenterIdx((prev) => {
        setPrevCenterIdx(prev);
        return (prev + dir + N) % N;
      });
      setTimeout(() => setBusy(false), 500);
    },
    [busy],
  );

  useEffect(() => {
    const interval = setInterval(() => {
      move(1);
    }, 3000);
    return () => clearInterval(interval);
  }, [move]);

  useEffect(() => {
    const sync = () => {
      const w = window.innerWidth;
      setCw(w >= 1280 ? 360 : w >= 1024 ? 320 : w >= 768 ? 280 : 240);
    };
    sync();
    window.addEventListener("resize", sync);
    return () => window.removeEventListener("resize", sync);
  }, []);

  const ch = Math.round(cw * ASPECT);
  const carouselH = ch + 90 + 60;

  const headerVariants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12 } },
  };
  const itemVariant = {
    hidden: { opacity: 0, y: 28 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring" as const, stiffness: 220, damping: 24 },
    },
  };

  return (
    <section className="w-full overflow-hidden bg-csi-lighter py-16">
      <motion.div
        className="mx-auto max-w-7xl px-6 md:px-16 mb-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={headerVariants}
      >
        <motion.div variants={itemVariant} className="mb-4">
          <span className="inline-flex items-center gap-2 rounded-full bg-csi-navy/[0.06] px-4 py-2 text-xs font-medium uppercase text-csi-navy">
            <span className="h-1.5 w-1.5 rounded-full bg-csi-blue" />
            What our members say
          </span>
        </motion.div>

        <motion.h2
          variants={itemVariant}
          className="text-4xl sm:text-5xl font-bold leading-tight tracking-tight text-csi-navy"
        >
          Real Impact.{" "}
          <span className="text-csi-blue">Real</span> Stories.
        </motion.h2>

        <motion.p
          variants={itemVariant}
          className="mt-2 text-base text-csi-muted sm:text-lg"
        >
          Hundreds of students have transformed their skills and careers through
          CSI ACE — here&apos;s what they have to say.
        </motion.p>

        <motion.div
          variants={itemVariant}
          className="mt-6 flex gap-10 sm:gap-16"
        >
          {[
            { val: "4.9", label: "Avg. rating" },
            { val: "500+", label: "Active Members" },
            { val: "95%", label: "Would recommend" },
          ].map(({ val, label }) => (
            <motion.div
              key={label}
              whileHover={{ y: -3 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
              className="text-center"
            >
              <p className="text-3xl sm:text-4xl font-bold text-csi-navy">
                {val}
              </p>
              <p className="mt-0.5 text-sm text-csi-muted">{label}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      <motion.div
        className="relative w-full select-none"
        style={{ height: carouselH, touchAction: "pan-y" }}
        onPanEnd={(_, info) => {
          if (Math.abs(info.offset.x) > 60) {
            move(info.offset.x < 0 ? 1 : -1);
          }
        }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5, delay: 0.15 }}
      >
        {TESTIMONIALS.map((item, i) => {
          const position = wrapPosition(i, centerIdx, N);
          return (
            <TestimonialCard
              key={item.id}
              item={item}
              position={position}
              cw={cw}
              onClickCard={() => move(position)}
              prevCenterIdx={prevCenterIdx}
              currentCenterIdx={centerIdx}
              itemIndex={i}
            />
          );
        })}

        <div className="absolute -bottom-2 left-1/2 z-20 flex -translate-x-1/2 gap-3">
          <motion.button
            onClick={() => move(-1)}
            disabled={busy}
            whileHover={{
              scale: 1.08,
              backgroundColor: "#1e3759",
              color: "#fff",
            }}
            whileTap={{ scale: 0.92 }}
            transition={{ type: "spring", stiffness: 400, damping: 20 }}
            className="flex h-11 w-11 items-center justify-center rounded-xl border border-csi-navy/50 bg-white shadow-sm disabled:opacity-40"
            aria-label="Previous testimonial"
          >
            <FiChevronLeft size={18} />
          </motion.button>
          <motion.button
            onClick={() => move(1)}
            disabled={busy}
            whileHover={{
              scale: 1.08,
              backgroundColor: "#1e3759",
              color: "#fff",
            }}
            whileTap={{ scale: 0.92 }}
            transition={{ type: "spring", stiffness: 400, damping: 20 }}
            className="flex h-11 w-11 items-center justify-center rounded-xl border border-csi-navy/50 bg-white shadow-sm disabled:opacity-40"
            aria-label="Next testimonial"
          >
            <FiChevronRight size={18} />
          </motion.button>
        </div>
      </motion.div>
    </section>
  );
}
