"use client";

import { motion } from "framer-motion";

const images = [
  { src: "https://picsum.photos/seed/gal-n1/400/500", span: "row-span-2" },
  { src: "https://picsum.photos/seed/gal-n2/400/300", span: "" },
  { src: "https://picsum.photos/seed/gal-n3/400/350", span: "" },
  { src: "https://picsum.photos/seed/gal-n4/400/550", span: "row-span-2" },
  { src: "https://picsum.photos/seed/gal-n5/400/300", span: "" },
  { src: "https://picsum.photos/seed/gal-n6/400/400", span: "" },
  { src: "https://picsum.photos/seed/gal-n7/400/350", span: "" },
  { src: "https://picsum.photos/seed/gal-n8/400/500", span: "row-span-2" },
  { src: "https://picsum.photos/seed/gal-n9/400/300", span: "" },
  { src: "https://picsum.photos/seed/gal-n10/400/400", span: "" },
  { src: "https://picsum.photos/seed/gal-n11/400/350", span: "" },
  { src: "https://picsum.photos/seed/gal-n12/400/450", span: "" },
];

export default function GalleryPlayful() {
  return (
    <section className="relative bg-white py-28 md:py-40">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-20 mb-16 md:mb-24">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-xs font-medium uppercase tracking-[0.25em] text-accent mb-6"
        >
          Moments
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-[14vw] md:text-[10vw] lg:text-[8vw] font-bold leading-[0.82] -tracking-[0.04em] text-primary"
        >
          Caught in
          <br />
          <span className="text-accent">the moment</span>
        </motion.h2>
      </div>

      <div className="max-w-[1600px] mx-auto px-4 columns-2 md:columns-3 lg:columns-4 gap-3 md:gap-4">
        {images.map((img, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: i * 0.05 }}
            className={`break-inside-avoid mb-3 md:mb-4 rounded-2xl overflow-hidden ${img.span}`}
          >
            <img src={img.src} alt="" className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500" />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
