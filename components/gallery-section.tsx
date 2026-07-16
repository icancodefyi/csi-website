"use client";

import { motion } from "framer-motion";
import DomeGallery from "./dome-gallery";

const galleryImages = [
  { src: "https://picsum.photos/seed/csi-ws1/800/600", alt: "Workshop Session" },
  { src: "https://picsum.photos/seed/csi-hack1/800/600", alt: "Hackathon Night" },
  { src: "https://picsum.photos/seed/csi-talk1/800/600", alt: "Tech Talk" },
  { src: "https://picsum.photos/seed/csi-team1/800/600", alt: "Team Building" },
  { src: "https://picsum.photos/seed/csi-code1/800/600", alt: "Coding Session" },
  { src: "https://picsum.photos/seed/csi-event1/800/600", alt: "Campus Event" },
  { src: "https://picsum.photos/seed/csi-proj1/800/600", alt: "Project Demo" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const },
  },
};

export default function GallerySection() {
  return (
    <section
      id="gallery"
      className="relative bg-csi-cream pt-24 md:pt-32 overflow-hidden"
    >
      {/* Header */}
      <motion.div
        className="text-center px-4 md:px-8 mx-auto max-w-6xl mb-12 md:mb-16"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.span
          variants={itemVariants}
          className="inline-flex items-center gap-2 rounded-full bg-csi-navy/[0.04] px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.12em] text-csi-navy/60 mb-6"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-csi-blue" />
          Moments
        </motion.span>
        <motion.h2
          variants={itemVariants}
          className="text-3xl sm:text-4xl md:text-6xl font-black text-csi-navy -tracking-[0.03em] leading-[0.95]"
        >
          Gallery
        </motion.h2>
        <motion.p
          variants={itemVariants}
          className="mt-5 max-w-md mx-auto text-base sm:text-lg font-medium leading-relaxed text-csi-navy/50"
        >
          A glimpse into our events, workshops, and community moments
        </motion.p>
      </motion.div>

      {/* Dome Gallery */}
      <div className="w-full h-[60vh] md:h-[80vh] lg:h-[90vh]">
        <DomeGallery
          images={galleryImages}
          fit={0.5}
          minRadius={400}
          maxRadius={900}
          segments={35}
          overlayBlurColor="#fafaf9"
          imageBorderRadius="16px"
          openedImageBorderRadius="20px"
          grayscale={false}
          openedImageWidth="400px"
          openedImageHeight="400px"
        />
      </div>

      {/* Bottom hint */}
      <div className="text-center pb-16 md:pb-24 -mt-8 md:-mt-12 relative z-10">
        <p className="text-sm font-medium text-csi-navy/30 tracking-wide">
          Drag to explore &middot; Click to enlarge
        </p>
      </div>
    </section>
  );
}
