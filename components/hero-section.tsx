"use client";

import React from "react";

const HeroSection = () => {
  return (
    <section className="flex items-center pt-24 pb-16 md:pt-32 md:pb-24">
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center gap-16 px-6 md:flex-row">
        {/* Left - Text */}
        <div className="flex w-full flex-col justify-center md:w-1/2">
          <span className="mb-6 inline-flex w-fit items-center gap-2 rounded-full bg-csi-navy/[0.06] px-4 py-2 text-xs font-semibold uppercase tracking-widest text-csi-navy">
            <span className="h-1.5 w-1.5 rounded-full bg-csi-blue" />
            Atharva College of Engineering
          </span>
          <h1 className="mb-8 text-4xl font-black leading-[1.1] tracking-tight text-csi-navy md:text-5xl lg:text-6xl">
            We Are <span className="text-csi-blue">CSI ACE</span>
          </h1>
          <p className="w-full text-base font-medium leading-[1.7] text-csi-navy/70 md:w-[85%] md:text-lg">
            The official student chapter of the Computer Society of India at
            Atharva College of Engineering. We bring together passionate minds
            to learn, collaborate, and innovate — building the tech leaders of
            tomorrow through hands-on workshops, hackathons, and a thriving
            community.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="#about"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-csi-navy px-8 py-4 text-sm font-semibold tracking-wide text-white shadow-lg shadow-csi-navy/20 transition-all duration-300 hover:shadow-xl hover:shadow-csi-navy/30 hover:scale-[1.02]"
            >
              Explore Chapter
              <svg
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-csi-navy/10 bg-white px-8 py-4 text-sm font-semibold tracking-wide text-csi-navy shadow-sm transition-all duration-300 hover:border-csi-navy/20 hover:shadow-md"
            >
              Join Us
            </a>
          </div>
        </div>

        {/* Right - Image Placeholder */}
        <div className="flex w-full justify-center md:w-1/2 md:justify-end mt-12 md:mt-0">
          <div className="flex h-[350px] w-full max-w-[500px] items-center justify-center rounded-3xl border-2 border-dashed border-csi-navy/10 bg-csi-navy/[0.03]">
            <div className="flex flex-col items-center gap-3 text-csi-muted">
              <svg
                className="h-12 w-12"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0022.5 18.75V5.25A2.25 2.25 0 0020.25 3H3.75A2.25 2.25 0 001.5 5.25v13.5A2.25 2.25 0 003.75 21z"
                />
              </svg>
              <span className="text-sm font-medium">Your image here</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
