"use client";

import React from "react";
import Link from "next/link";

const FOOTER_LINKS = {
  chapters: [
    { label: "About CSI", href: "#about" },
    { label: "Our Mission", href: "#about" },
    { label: "Why Join Us", href: "#why-join" },
    { label: "Membership", href: "#why-join" },
    { label: "Contact Us", href: "#contact" },
  ],
  activities: [
    { label: "Events", href: "#events" },
    { label: "Workshops", href: "#events" },
    { label: "Hackathons", href: "#events" },
    { label: "Projects", href: "#projects" },
    { label: "Gallery", href: "#gallery" },
  ],
  resources: [
    { label: "Team", href: "#team" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "CSI India", href: "https://www.csi-india.org", external: true },
    { label: "Atharva College", href: "https://atharvaengg.ac.in", external: true },
    { label: "GitHub", href: "https://github.com/csi-ace", external: true },
  ],
};

const FooterLink = ({
  label,
  href,
  external,
}: {
  label: string;
  href: string;
  external?: boolean;
}) => (
  <li className="relative w-fit group text-white/60 hover:text-white transition-colors duration-300">
    <Link
      href={href}
      className="relative"
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {label}
      <span className="absolute -bottom-1 left-0 h-[1px] w-0 bg-white transition-all duration-300 group-hover:w-full" />
    </Link>
  </li>
);

const FooterColumn = ({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string; external?: boolean }[];
}) => (
  <div>
    <h3 className="mb-6 text-xs font-semibold tracking-widest uppercase text-white/40">
      {title}
    </h3>
    <ul className="space-y-3 text-sm font-normal">
      {links.map((link) => (
        <FooterLink
          key={link.label}
          label={link.label}
          href={link.href}
          external={link.external}
        />
      ))}
    </ul>
  </div>
);

const Footer = () => {
  return (
    <footer
      id="contact"
      className="relative min-h-[70vh] overflow-hidden bg-csi-dark pt-20 pb-44 lg:pb-60 flex flex-col"
    >
      {/* Top Content */}
      <div className="relative z-10 mx-auto w-full max-w-6xl px-4 md:px-8">
        <div className="flex flex-col justify-between gap-16 lg:flex-row lg:gap-8">
          {/* Left Description */}
          <div className="max-w-md text-base font-normal leading-relaxed text-white/70">
            <img
              src="/assets/csi-logo.svg"
              alt="CSI ACE"
              className="h-16 w-16 mb-6"
            />
            <p>
              The official student chapter of the Computer Society of India at
              Atharva College of Engineering. Fostering innovation, technical
              excellence, and a thriving community of tech enthusiasts.
            </p>
            <div className="mt-8 flex gap-4">
              {[
                {
                  label: "Instagram",
                  icon: (
                    <svg
                      className="h-5 w-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                    </svg>
                  ),
                  href: "#",
                },
                {
                  label: "LinkedIn",
                  icon: (
                    <svg
                      className="h-5 w-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  ),
                  href: "#",
                },
                {
                  label: "GitHub",
                  icon: (
                    <svg
                      className="h-5 w-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                    </svg>
                  ),
                  href: "#",
                },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white/60 transition-all duration-300 hover:border-white/20 hover:text-white"
                  title={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Links Section */}
          <div className="grid grid-cols-2 gap-x-8 gap-y-12 sm:grid-cols-3 lg:flex lg:gap-20 xl:gap-28">
            <FooterColumn title="CHAPTER" links={FOOTER_LINKS.chapters} />
            <FooterColumn title="ACTIVITIES" links={FOOTER_LINKS.activities} />
            <FooterColumn title="RESOURCES" links={FOOTER_LINKS.resources} />
          </div>
        </div>
      </div>

      {/* Huge Footer Logo */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 flex items-end justify-center select-none overflow-hidden">
        <span
          className="block font-black leading-[0.75] tracking-[0.05em] text-white/[0.04] whitespace-nowrap"
          style={{ fontSize: "clamp(80px, 18vw, 320px)" }}
        >
          CSI-ACE
        </span>
      </div>
    </footer>
  );
};

export default Footer;
