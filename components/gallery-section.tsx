"use client";

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

export default function GallerySection() {
  return (
    <section id="gallery" className="relative bg-csi-cream pt-24 md:pt-32">
      <div className="w-full max-w-5xl mx-auto mb-10 md:mb-14 px-4 md:px-6">
        <h2 className="text-[10vw] md:text-[7vw] lg:text-[5.5vw] font-black text-csi-navy -tracking-[0.04em] leading-[0.85]">
          From our
          <br />
          events
        </h2>
      </div>

      <div className="w-full h-[65vh] md:h-[82vh]">
        <DomeGallery
          images={galleryImages}
          fit={0.5}
          minRadius={400}
          maxRadius={900}
          segments={35}
          overlayBlurColor="#fafaf9"
          imageBorderRadius="14px"
          openedImageBorderRadius="18px"
          grayscale={false}
          openedImageWidth="420px"
          openedImageHeight="420px"
        />
      </div>

      <div className="text-center pb-12 md:pb-16 -mt-6 md:-mt-8 relative z-10">
        <p className="text-xs font-medium tracking-[0.15em] uppercase text-csi-navy/18">
          Drag to explore &middot; Click to enlarge
        </p>
      </div>
    </section>
  );
}
