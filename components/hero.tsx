"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Events", href: "#events" },
  { label: "Projects", href: "#projects" },
  { label: "Gallery", href: "#gallery" },
  { label: "Committee", href: "#committee" },
];

const leftPhotos = [
  {
    src: "/hero/collage-left/photo1.webp",
    rot: -8,
    top: "12%",
    left: -30,
    z: 10,
    w: 180,
    parallax: 0.15,
  },
  {
    src: "/hero/collage-left/photo2.webp",
    rot: 16,
    top: "32%",
    left: 10,
    z: 20,
    w: 150,
    parallax: 0.12,
  },
  {
    src: "/hero/collage-left/photo3.webp",
    rot: -14,
    top: "52%",
    left: -40,
    z: 5,
    w: 170,
    parallax: 0.09,
  },
  {
    src: "/hero/collage-left/photo4.webp",
    rot: 11,
    top: "68%",
    left: 30,
    z: 15,
    w: 140,
    parallax: 0.07,
  },
  {
    src: "/hero/collage-left/photo5.webp",
    rot: -20,
    top: "20%",
    left: 100,
    z: 8,
    w: 160,
    parallax: 0.05,
  },
  {
    src: "/hero/collage-left/photo6.webp",
    rot: 22,
    top: "44%",
    left: 80,
    z: 25,
    w: 130,
    parallax: 0.04,
  },
  {
    src: "/hero/collage-left/photo7.webp",
    rot: -9,
    top: "62%",
    left: 60,
    z: 12,
    w: 150,
    parallax: 0.03,
  },
];

const rightPhotos = [
  {
    src: "/hero/collage-right/photo8.webp",
    rot: 10,
    top: "14%",
    right: -20,
    z: 10,
    w: 180,
    parallax: 0.15,
  },
  {
    src: "/hero/collage-right/photo9.webp",
    rot: -16,
    top: "34%",
    right: 20,
    z: 20,
    w: 160,
    parallax: 0.12,
  },
  {
    src: "/hero/collage-right/photo10.webp",
    rot: 13,
    top: "54%",
    right: -10,
    z: 5,
    w: 170,
    parallax: 0.09,
  },
  {
    src: "/hero/collage-right/photo11.webp",
    rot: -11,
    top: "70%",
    right: 30,
    z: 15,
    w: 140,
    parallax: 0.07,
  },
  {
    src: "/hero/collage-right/photo12.webp",
    rot: 20,
    top: "22%",
    right: 120,
    z: 8,
    w: 150,
    parallax: 0.05,
  },
  {
    src: "/hero/collage-right/photo13.webp",
    rot: -10,
    top: "47%",
    right: 100,
    z: 25,
    w: 140,
    parallax: 0.03,
  },
];

const stickers = [
  {
    src: "/hero/stickers/sticker1.webp",
    top: "20%",
    left: "14%",
    rot: 18,
    w: 60,
    parallax: 0.08,
  },
  {
    src: "/hero/stickers/sticker2.webp",
    top: "32%",
    right: "11%",
    rot: -12,
    w: 55,
    parallax: 0.06,
  },
  {
    src: "/hero/stickers/sticker3.webp",
    top: "58%",
    left: "8%",
    rot: 8,
    w: 40,
    parallax: 0.05,
  },
  {
    src: "/hero/stickers/sticker4.webp",
    top: "27%",
    right: "19%",
    rot: 15,
    w: 42,
    parallax: 0.04,
  },
  {
    src: "/hero/stickers/sticker5.webp",
    top: "68%",
    left: "22%",
    rot: -20,
    w: 48,
    parallax: 0.03,
  },
  {
    src: "/hero/stickers/sticker6.webp",
    top: "44%",
    right: "8%",
    rot: 5,
    w: 40,
    parallax: 0.07,
  },
  {
    src: "/hero/stickers/sticker7.webp",
    top: "78%",
    left: "16%",
    rot: -8,
    w: 35,
    parallax: 0.02,
  },
  {
    src: "/hero/stickers/sticker8.webp",
    top: "60%",
    right: "14%",
    rot: 12,
    w: 42,
    parallax: 0.06,
  },
  {
    src: "/hero/stickers/sticker9.webp",
    top: "17%",
    left: "32%",
    rot: -5,
    w: 38,
    parallax: 0.04,
  },
  {
    src: "/hero/stickers/sticker10.webp",
    top: "72%",
    right: "24%",
    rot: 10,
    w: 32,
    parallax: 0.03,
  },
  {
    src: "/hero/stickers/sticker11.webp",
    top: "50%",
    left: "38%",
    rot: -15,
    w: 36,
    parallax: 0.05,
  },
];

const benefits = [
  "Workshops & Bootcamps",
  "Projects & Hackathons",
  "Leadership Opportunities",
  "Community & Networking",
  "Industry Mentorship",
];

function CollagePhoto({
  src,
  rot,
  top,
  left,
  right,
  z,
  w,
  parallax,
  scrollY,
}: {
  src: string;
  rot: number;
  top: string;
  left?: number;
  right?: number;
  z: number;
  w: number;
  parallax: number;
  scrollY: ReturnType<typeof useScroll>["scrollY"];
}) {
  const y = useTransform(scrollY, [0, 800], [0, -800 * parallax]);
  return (
    <motion.div
      style={{ y, top, left, right, zIndex: z, rotate: rot }}
      className="absolute"
    >
      <img
        src={src}
        alt=""
        className="rounded-[10px] object-cover"
        style={{
          width: w,
          height: w * 0.703,
          border: "4px solid var(--color-white)",
          boxShadow: "0 8px 32px rgba(0,0,0,0.12)",
        }}
      />
    </motion.div>
  );
}

function Sticker({
  src,
  top,
  left,
  right,
  rot,
  w,
  parallax,
  scrollY,
}: {
  src: string;
  top: string;
  left?: string;
  right?: string;
  rot: number;
  w: number;
  parallax: number;
  scrollY: ReturnType<typeof useScroll>["scrollY"];
}) {
  const y = useTransform(scrollY, [0, 800], [0, -800 * parallax]);
  return (
    <motion.div
      style={{ y, top, left, right, zIndex: 30, rotate: rot }}
      className="absolute pointer-events-auto cursor-grab active:cursor-grabbing"
    >
      <img
        src={src}
        alt=""
        style={{ width: w }}
        className="hover:scale-110 transition-transform duration-200"
      />
    </motion.div>
  );
}

export default function Hero() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const bgY = useTransform(scrollY, [0, 800], [0, -150]);
  const creatureY = useTransform(scrollY, [0, 800], [0, -80]);

  return (
    <section
      ref={sectionRef}
      className="relative h-screen overflow-hidden bg-[#fef7f8]"
    >
      {/* ---- Background ---- */}
      <motion.div
        style={{ y: bgY }}
        className="absolute inset-x-0 bottom-0 h-[700px] pointer-events-none"
      >
        <img
          src="/hero/background.webp"
          alt=""
          className="w-full h-full object-cover object-bottom opacity-40"
          style={{
            maskImage: "linear-gradient(to top, black 40%, transparent 70%)",
            WebkitMaskImage:
              "linear-gradient(to top, black 40%, transparent 70%)",
          }}
        />
      </motion.div>

      {/* ---- Gradient ---- */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(180deg, rgba(236,55,80,0.02) 60%, rgba(236,55,80,0.25) 100%)",
        }}
      />

      {/* ---- Left Photos ---- */}
      <div className="hidden lg:block absolute inset-y-0 left-0 w-[350px] pointer-events-none">
        {leftPhotos.map((p, i) => (
          <CollagePhoto key={`l${i}`} {...p} scrollY={scrollY} />
        ))}
      </div>

      {/* ---- Right Photos ---- */}
      <div className="hidden lg:block absolute inset-y-0 right-0 w-[350px] pointer-events-none">
        {rightPhotos.map((p, i) => (
          <CollagePhoto key={`r${i}`} {...p} scrollY={scrollY} />
        ))}
      </div>

      {/* ---- Stickers ---- */}
      <div className="hidden lg:block pointer-events-none">
        {stickers.map((s, i) => (
          <Sticker key={`s${i}`} {...s} scrollY={scrollY} />
        ))}
      </div>

      {/* ---- Creature ---- */}
      <motion.div
        style={{ y: creatureY }}
        className="hidden lg:block absolute bottom-[20px] right-0 z-[25] pointer-events-none"
      >
        <img
          src="/hero/creature1.webp"
          alt=""
          className="w-auto object-contain"
          style={{
            width: "calc(544 / 1920 * 100vw)",
            transform: "translateY(calc(50% - 8px))",
          }}
        />
      </motion.div>

      {/* ---- Navbar ---- */}
      <nav className="relative z-[1100] h-[80px] flex items-center justify-between px-8 lg:px-[55px]">
        <a href="/" className="flex items-center gap-2 no-underline">
          <img
            src="/assets/csi-logo.svg"
            alt="CSI-ACE"
            className="h-10 w-auto"
          />
        </a>

        <div className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-[17px] text-primary/70 no-underline hover:text-primary transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>

        <a
          href="#"
          className="hidden lg:inline-flex items-center justify-center h-[44px] px-5 rounded-full text-white text-[16px] no-underline hover:opacity-90 transition-opacity"
          style={{ background: "#17171D" }}
        >
          Join CSI
        </a>

        <button
          className="lg:hidden flex flex-col justify-center items-center gap-[5px] w-10 h-10 bg-transparent border-none cursor-pointer ml-auto"
          aria-label="Toggle menu"
        >
          <span className="block w-[26px] h-[3px] bg-primary rounded-sm" />
          <span className="block w-[26px] h-[3px] bg-primary rounded-sm" />
          <span className="block w-[26px] h-[3px] bg-primary rounded-sm" />
        </button>
      </nav>

      {/* ---- Announcement ---- */}
      <div className="relative z-[1100] pt-6 flex justify-center">
        <motion.a
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          href="#"
          className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full text-[15px] bg-soft text-primary/70 hover:text-primary no-underline transition-colors"
        >
          <img
            src="/hero/svg/star.svg"
            alt=""
            className="block flex-shrink-0"
            style={{ width: 18, height: "auto" }}
          />
          Registrations for CSI-ACE 2026 are now open
          <svg
            width="14"
            height="14"
            viewBox="0 0 16 16"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M3 8H13M13 8L8.5 3.5M13 8L8.5 12.5" />
          </svg>
        </motion.a>
      </div>

      {/* ---- Hero Content ---- */}
      <div className="relative z-40 flex flex-col items-center justify-center px-6 text-center max-w-6xl mx-auto  mt-[100px]">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            ease: [0.25, 1, 0.33, 1],
            delay: 0.1,
          }}
          className="font-serif font-normal text-primary leading-[0.9] tracking-[-0.04em]"
          style={{
            fontSize: "clamp(4.5rem, 6vw, 8.5rem)",
          }}
        >
          Where students
          <br />
          become <span className="text-[#ec3750]">builders.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-7 max-w-xl text-[18px] leading-[1.75] text-primary/60"
        >
          CSI-ACE is Atharva College's technical community for students who love
          building, learning, leading and creating meaningful things together.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-5"
        >
          <div className="flex flex-col items-center  relative z-10">
            <a
              href="#"
              className="inline-flex items-center justify-center h-12 px-7 rounded-full text-[20px] no-underline whitespace-nowrap"
              style={{
                fontFamily: "var(--font-body)",
                background: "#17171D",
                color: "#ffffff",
              }}
            >
              Explore all programs
              <svg
                className="ml-1.5 flex-shrink-0"
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
            </a>
          </div>
        </motion.div>
      </div>

      {/* ---- Wave ---- */}
      <div
        className="absolute bottom-[-2px] left-0 right-0 z-[20] pointer-events-none"
        style={{ lineHeight: 0 }}
      >
        <svg
          viewBox="0 0 1920 22"
          preserveAspectRatio="none"
          className="w-full block"
          style={{ height: 22, marginBottom: -8 }}
        >
          <path
            d="M0,18 C40,18 40,2 80,2 C120,2 120,18 160,18 C200,18 200,2 240,2 C280,2 280,18 320,18 C360,18 360,2 400,2 C440,2 440,18 480,18 C520,18 520,2 560,2 C600,2 600,18 640,18 C680,18 680,2 720,2 C760,2 760,18 800,18 C840,18 840,2 880,2 C920,2 920,18 960,18 C1000,18 1000,2 1040,2 C1080,2 1080,18 1120,18 C1160,18 1160,2 1200,2 C1240,2 1240,18 1280,18 C1320,18 1320,2 1360,2 C1400,2 1400,18 1440,18 C1480,18 1480,2 1520,2 C1560,2 1560,18 1600,18 C1640,18 1640,2 1680,2 C1720,2 1720,18 1760,18 C1800,18 1800,2 1840,2 C1880,2 1880,18 1920,18"
            fill="none"
            stroke="var(--color-bg)"
            strokeWidth="2.5"
            vectorEffect="non-scaling-stroke"
          />
        </svg>
        <svg
          viewBox="0 0 1920 40"
          preserveAspectRatio="none"
          className="w-full block"
          style={{ height: 40 }}
        >
          <path
            d="M0,40 L0,27 C40,27 40,8 80,8 C120,8 120,27 160,27 C200,27 200,8 240,8 C280,8 280,27 320,27 C360,27 360,8 400,8 C440,8 440,27 480,27 C520,27 520,8 560,8 C600,8 600,27 640,27 C680,27 680,8 720,8 C760,8 760,27 800,27 C840,27 840,8 880,8 C920,8 920,27 960,27 C1000,27 1000,8 1040,8 C1080,8 1080,27 1120,27 C1160,27 1160,8 1200,8 C1240,8 1240,27 1280,27 C1320,27 1320,8 1360,8 C1400,8 1400,27 1440,27 C1480,27 1480,8 1520,8 C1560,8 1560,27 1600,27 C1640,27 1640,8 1680,8 C1720,8 1720,27 1760,27 C1800,27 1800,8 1840,8 C1880,8 1880,27 1920,27 L1920,40 Z"
            fill="var(--color-bg)"
          />
        </svg>
      </div>
    </section>
  );
}
