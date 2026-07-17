"use client";

const events = [
  {
    title: "Workshop Series",
    description: "Hands-on sessions covering web development, AI/ML, cloud computing and more. Build real projects with mentors guiding you.",
    cta: "Register Now",
    ctaBg: "#F7EDB8",
    ctaColor: "#1A1608",
    ctaBorder: "0px solid #17171d",
    ctaRadius: "7px",
    textColor: "#ffffff",
    date: "Every Saturday",
    bgImage: "https://picsum.photos/seed/csi-workshop/800/520",
    logo: "https://picsum.photos/seed/csi-ws-logo/200/200",
    hasCornerIcon: true,
  },
  {
    title: "Hackathon",
    description: "24 hours of building, collaborating and competing. Form teams, ship projects, win prizes and get swag.",
    cta: "Register Now",
    ctaBg: "#fbfbfb",
    ctaColor: "#524d4a",
    ctaBorder: "2px solid #524d4a",
    ctaRadius: "44px",
    textColor: "#ffffff",
    date: "15-16 Aug 2026",
    bgImage: "https://picsum.photos/seed/csi-hackathon/800/520",
    logo: "https://picsum.photos/seed/csi-hack-logo/200/200",
    hasCornerIcon: false,
  },
  {
    title: "Bootcamp",
    description: "Intensive 2-week skill-building programs. From full-stack to machine learning, go from zero to project-ready.",
    cta: "Register Now",
    ctaBg: "#ff68b4",
    ctaColor: "#fff7fb",
    ctaBorder: "0px solid #17171d",
    ctaRadius: "44px",
    textColor: "#ffffff",
    date: "Sept 2026",
    bgImage: "https://picsum.photos/seed/csi-bootcamp/800/520",
    logo: "https://picsum.photos/seed/csi-boot-logo/200/200",
    hasCornerIcon: false,
  },
  {
    title: "Tech Talk",
    description: "Industry leaders and alumni share insights on emerging technologies, career paths and building impactful products.",
    cta: "Register Now",
    ctaBg: "#EACFB3",
    ctaColor: "#684D3A",
    ctaBorder: "4px solid #684D3A",
    ctaRadius: "0",
    textColor: "#ffffff",
    date: "Monthly",
    bgImage: "https://picsum.photos/seed/csi-techtalk/800/520",
    logo: "https://picsum.photos/seed/csi-talk-logo/200/200",
    hasCornerIcon: false,
  },
];

export default function Events() {
  return (
    <section
      className="relative overflow-hidden"
      style={{
        background: "var(--color-bg)",
        paddingTop: 80,
        paddingBottom: 60,
        paddingLeft: "clamp(24px, 14.29%, 220px)",
        paddingRight: "clamp(24px, 14.29%, 220px)",
      }}
    >
      {/* Gradient overlay */}
      <div
        className="absolute top-0 left-0 right-0 h-1/2 pointer-events-none"
        style={{ background: "linear-gradient(180deg, rgba(236,55,80,0.15) 0%, transparent 100%)" }}
      />

      {/* Inverted background */}
      <img
        src="/hero/background.webp"
        alt=""
        className="absolute top-[-40px] left-0 w-full pointer-events-none opacity-12"
        style={{ transform: "scaleY(-1)" }}
      />

      {/* Heading */}
      <div className="text-right mb-1 mt-[100px] relative z-10">
        <p
          className="text-[40px] leading-[1] m-0"
          style={{ fontFamily: "var(--font-serif)", color: "var(--color-primary)" }}
        >
          Imagine a world where
        </p>
        <p
          className="text-[40px] leading-[1.15] m-0 inline-block pb-1"
          style={{
            fontFamily: "var(--font-serif)",
            background: "linear-gradient(90deg, #ec3750 0%, #ff8c37 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          you were here:
        </p>
      </div>

      {/* Subtitle */}
      <p
        className="text-[20px] text-right mb-8 mt-2 relative z-10 leading-[1.2]"
        style={{ fontFamily: "var(--font-body)", color: "var(--color-primary)" }}
      >
        Every event below is free, open to any student, and happening right now. Yes, you can go.
      </p>

      {/* Events grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 relative z-10">
        {events.map((event, i) => (
          <div
            key={i}
            className="relative rounded-2xl overflow-hidden flex flex-col items-start min-h-[260px] h-full"
            style={{
              boxShadow: "2px 4px 6px rgba(0,0,0,0.25)",
              padding: "28px 32px 16px",
              boxSizing: "border-box",
            }}
          >
            {/* Background image */}
            <img
              src={event.bgImage}
              alt=""
              className="absolute inset-0 w-full h-full object-cover pointer-events-none"
            />

            {/* Corner icon */}
            {event.hasCornerIcon && (
              <div
                className="absolute top-0 left-0 w-9 h-9 flex items-center justify-center z-[2]"
                style={{
                  background: "#ec3750",
                  borderBottomRightRadius: 8,
                }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
                  <path d="M16 12V4h1V2H7v2h1v8l-2 2v2h5.2v6h1.6v-6H18v-2l-2-2z" />
                </svg>
              </div>
            )}

            {/* Event logo */}
            <img
              src={event.logo}
              alt={event.title}
              className="relative z-[1] mb-3 self-center object-contain max-w-full"
              style={{ height: 80, width: "auto" }}
            />

            {/* Description */}
            <p
              className="relative z-[1] text-[20px] m-0 mb-1 leading-[1.2] opacity-90"
              style={{
                fontFamily: "var(--font-body)",
                color: event.textColor,
              }}
            >
              {event.description}
            </p>

            {/* Spacer */}
            <div className="flex-[1_0_12px]" />

            {/* CTA */}
            <a
              href="#"
              className="relative z-[1] inline-flex items-center justify-center px-5 py-1.5 text-[20px] font-bold no-underline whitespace-nowrap mb-1.5"
              style={{
                fontFamily: "var(--font-body)",
                background: event.ctaBg,
                color: event.ctaColor,
                border: event.ctaBorder,
                borderRadius: event.ctaRadius,
              }}
            >
              {event.cta}
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

            {/* Date badge */}
            <div
              className="absolute bottom-0 right-0 h-9 w-[130px] flex items-center justify-center"
              style={{
                background: "#ec3750",
                borderTopLeftRadius: 8,
              }}
            >
              <span
                className="text-[16px] font-bold whitespace-nowrap"
                style={{
                  fontFamily: "var(--font-body)",
                  color: "#fff",
                }}
              >
                {event.date}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom CTA */}
      <div className="flex flex-col items-center mt-6 relative z-10">
        <p
          className="text-[20px] m-0 mt-10 mb-2"
          style={{ fontFamily: "var(--font-body)", color: "var(--color-primary)" }}
        >
          Don&apos;t see something you like?
        </p>
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
    </section>
  );
}
