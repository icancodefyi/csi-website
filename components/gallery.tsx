"use client";

const bigCollage = "/gallery/event1.jpg";

const tileImages = [
  "/gallery/event2.jpg",
  "/gallery/event3.jpg",
  "/gallery/event4.jpg",
  "/gallery/event5.jpg",
  "/gallery/event6.jpg",
  "/gallery/event7.jpg",
  "/gallery/event8.jpg",
  "/gallery/event9.jpg",
  "/gallery/event10.jpg",
  "/gallery/event11.jpg",
  "/gallery/event12.jpg",
];

const PlayButton = () => (
  <svg
    viewBox="0 0 68 48"
    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[68px] h-[48px] opacity-80"
  >
    <path
      d="M66.52 7.74c-.78-2.93-2.49-5.41-5.42-6.19C55.79.13 34 0 34 0S12.21.13 6.9 1.55C3.97 2.33 2.27 4.81 1.48 7.74.06 13.05 0 24 0 24s.06 10.95 1.48 16.26c.78 2.93 2.49 5.41 5.42 6.19C12.21 47.87 34 48 34 48s21.79-.13 27.1-1.55c2.93-.78 4.64-3.26 5.42-6.19C67.94 34.95 68 24 68 24s-.06-10.95-1.48-16.26z"
      fill="red"
    />
    <path d="M45 24L27 14v20" fill="#fff" />
  </svg>
);

export default function Gallery() {
  return (
    <section className="relative overflow-hidden" style={{ paddingTop: 0, paddingBottom: 0 }}>
      {/* Top gradient fade */}
      <div
        className="absolute top-0 left-0 right-0 h-[180px] pointer-events-none z-[3]"
        style={{ background: "linear-gradient(180deg, var(--color-bg) 0%, transparent 100%)" }}
      />

      {/* Photo collage grid */}
      <div
        className="absolute inset-0 z-0"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(6, 1fr)",
          gridTemplateRows: "380px repeat(4, auto)",
          gap: 0,
        }}
      >
        {/* Big collage - spans all 6 columns */}
        <img
          src={bigCollage}
          alt="CSI-ACE previous events"
          className="w-full h-full object-cover block"
          style={{ gridColumn: "1 / -1" }}
        />

        {/* Tile images - repeat to fill grid */}
        {[...tileImages, ...tileImages, ...tileImages].map((src, i) => (
          <img
            key={i}
            src={src}
            alt="CSI-ACE event"
            loading="lazy"
            className="w-full h-full object-cover block"
          />
        ))}
      </div>

      {/* Centered card */}
      <div
        className="relative z-[4] flex flex-col items-center text-center"
        style={{
          paddingTop: "clamp(160px, 20vw, 320px)",
          paddingBottom: "clamp(160px, 20vw, 320px)",
          paddingLeft: 24,
          paddingRight: 24,
        }}
      >
        <div
          className="flex flex-col items-center rounded-3xl"
          style={{
            background: "var(--color-bg)",
            padding: "clamp(32px, 5vw, 60px) clamp(24px, 5vw, 60px)",
            width: "min(640px, calc(100vw - 48px))",
          }}
        >
          {/* Heading */}
          <h2
            className="text-[40px] leading-[1.05] m-0 mb-8 max-w-[640px]"
            style={{ fontFamily: "var(--font-serif)", color: "var(--color-primary)" }}
          >
            Imagine a world where{" "}
            <span
              style={{
                background: "linear-gradient(90deg, #ec3750 0%, #ff8c37 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              you joined CSI-ACE:
            </span>
          </h2>

          {/* Video embed */}
          <div
            className="relative overflow-hidden mb-8 bg-black/30"
            style={{
              width: "min(520px, calc(100vw - 96px))",
              borderRadius: 12,
              aspectRatio: "16 / 9",
            }}
          >
            <button
              type="button"
              aria-label="Play CSI-ACE introduction video"
              className="relative w-full h-full border-none p-0 cursor-pointer bg-black"
            >
              <img
                src="https://img.youtube.com/vi/JkSquIVXXds/maxresdefault.jpg"
                alt="CSI-ACE introduction video"
                loading="lazy"
                className="w-full h-full object-cover block"
              />
              <PlayButton />
            </button>
          </div>

          {/* Email signup */}
          <div className="mb-3 w-full flex justify-center">
            <div className="relative inline-block w-full">
              <div
                className="relative flex items-center rounded-full w-full"
                style={{
                  background: "var(--color-soft)",
                  height: "clamp(48px, 12vw, 52px)",
                }}
              >
                <input
                  type="email"
                  aria-label="Email address"
                  placeholder="your@email.com"
                  className="flex-1 min-w-0 bg-transparent border-none outline-none text-[clamp(16px,4.8vw,20px)]"
                  style={{
                    fontFamily: "var(--font-body)",
                    color: "var(--color-primary)",
                    paddingLeft: "clamp(16px, 4.5vw, 22px)",
                    paddingRight: "clamp(98px, 30vw, 130px)",
                  }}
                />
                <button
                  className="absolute top-1/2 right-1.5 -translate-y-1/2 border-none rounded-full flex items-center justify-center flex-shrink-0 cursor-pointer"
                  style={{
                    background: "var(--color-primary)",
                    color: "var(--color-bg)",
                    width: "clamp(90px, 27vw, 108px)",
                    height: "clamp(38px, 10vw, 42px)",
                    fontFamily: "var(--font-body)",
                    fontSize: "clamp(16px, 4.8vw, 20px)",
                  }}
                >
                  Join!
                </button>
              </div>
            </div>
          </div>

          {/* Terms */}
          <p
            className="text-[16px] m-0"
            style={{ fontFamily: "var(--font-body)", color: "var(--color-primary)", opacity: 0.5 }}
          >
            For all students. By continuing, you agree to our{" "}
            <a
              href="#"
              className="underline"
              style={{ color: "var(--color-red)", textUnderlineOffset: 2 }}
            >
              terms.
            </a>
          </p>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-[280px] pointer-events-none z-[3]"
        style={{ background: "linear-gradient(0deg, var(--color-bg) 40%, transparent 100%)" }}
      />

      {/* Wave separator */}
      <div className="absolute bottom-[-2px] left-0 right-0 z-[20] pointer-events-none" style={{ lineHeight: 0 }}>
        <svg
          viewBox="0 0 1920 22"
          preserveAspectRatio="none"
          className="w-full block"
          style={{ height: 22, marginBottom: -8 }}
        >
          <path
            d="M0,18 C40,18 40,2 80,2 C120,2 120,18 160,18 C200,18 200,2 240,2 C280,2 280,18 320,18 C360,18 360,2 400,2 C440,2 440,18 480,18 C520,18 520,2 560,2 C600,2 600,18 640,18 C680,18 680,2 720,2 C760,2 760,18 800,18 C840,18 840,2 880,2 C920,2 920,18 960,18 C1000,18 1000,2 1040,2 C1080,2 1080,18 1120,18 C1160,18 1160,2 1200,2 C1240,2 1240,18 1280,18 C1320,18 1320,2 1360,2 C1400,2 1400,18 1440,18 C1480,18 1480,2 1520,2 C1560,2 1560,18 1600,18 C1640,18 1640,2 1680,2 C1720,2 1720,18 1760,18 C1800,18 1800,2 1840,2 C1880,2 1880,18 1920,18"
            fill="none"
            stroke="var(--color-soft)"
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
            fill="var(--color-soft)"
          />
        </svg>
      </div>
    </section>
  );
}
