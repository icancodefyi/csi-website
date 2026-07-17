"use client";

const linkColumns = [
  {
    heading: "CSI-ACE",
    links: [
      { label: "About", href: "#about" },
      { label: "Events", href: "#events" },
      { label: "Gallery", href: "#gallery" },
      { label: "Committee", href: "#committee" },
      { label: "Contact", href: "#" },
    ],
  },
  {
    heading: "Resources",
    links: [
      { label: "Workshops", href: "#" },
      { label: "Hackathons", href: "#" },
      { label: "Bootcamps", href: "#" },
      { label: "Tech Talks", href: "#" },
      { label: "Projects", href: "#" },
    ],
  },
  {
    heading: "Connect",
    links: [
      { label: "Instagram", href: "#" },
      { label: "LinkedIn", href: "#" },
      { label: "Discord", href: "#" },
      { label: "Twitter / X", href: "#" },
      { label: "Email", href: "#" },
    ],
  },
];

const socials = [
  {
    name: "Instagram",
    href: "#",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    href: "#",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
  {
    name: "Twitter / X",
    href: "#",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
        <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
      </svg>
    ),
  },
  {
    name: "Discord",
    href: "#",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561 19.9312 19.9312 0 005.9932 3.0294.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286 19.8975 19.8975 0 006.0022-3.0294.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <>
      <style>{`
        @media (max-width: 767px) {
          .site-footer { padding-top: 120px !important; }
          .site-footer-illustration { width: min(320px, 72vw) !important; transform: translateY(-40%) !important; }
        }
      `}</style>
      <footer
        className="site-footer relative"
        style={{
        background:
          "linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), #000",
        backgroundSize: "50px 50px",
        color: "#fffdf8",
        paddingTop: 80,
        paddingBottom: 60,
        paddingLeft: "clamp(24px, 6vw, 80px)",
        paddingRight: "clamp(24px, 6vw, 80px)",
        fontFamily: "var(--font-body)",
      }}
    >
      {/* Footer creature illustration */}
      <img
        alt=""
        src="/hero/creature1.webp"
        className="site-footer-illustration"
        style={{
          position: "absolute",
          right: 0,
          top: 0,
          transform: "translateY(-40.5%)",
          width: "clamp(340px, 48vw, 680px)",
          height: "auto",
          display: "block",
          pointerEvents: "none",
          zIndex: 2,
        }}
      />

      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          display: "flex",
          flexWrap: "wrap",
          alignItems: "flex-start",
          justifyContent: "flex-start",
          gap: "48px 64px",
          marginBottom: 64,
        }}
      >
        {/* Left: Logo + tagline + socials */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            flexShrink: 0,
            width: 280,
          }}
        >
          <div style={{ marginBottom: 28 }}>
            <img
              src="/assets/csi-logo.svg"
              alt="CSI-ACE"
              style={{ display: "block", height: 48, width: "auto" }}
            />
          </div>
          <p
            style={{
              fontWeight: 400,
              fontSize: 20,
              color: "#fffdf8",
              margin: "0 0 8px",
              lineHeight: 1.2,
            }}
          >
            For students, by students.
          </p>
          <p
            style={{
              fontWeight: 400,
              fontSize: 20,
              color: "#fffdf8",
              margin: "0 0 32px",
              lineHeight: 1.2,
            }}
          >
            Atharva College of Engineering
          </p>

          {/* Social icons */}
          <div style={{ display: "flex", gap: 12 }}>
            {socials.map((s, i) => (
              <a
                key={i}
                href={s.href}
                aria-label={s.name}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: 56,
                  height: 56,
                  borderRadius: 8,
                  flexShrink: 0,
                  background: "rgba(255,255,255,0.1)",
                  color: "#fffdf8",
                  textDecoration: "none",
                }}
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Link columns */}
        <div style={{ display: "flex", gap: 48, flexWrap: "wrap" }}>
          {linkColumns.map((col, i) => (
            <div key={i} style={{ minWidth: 140 }}>
              <p
                style={{
                  fontWeight: 700,
                  fontSize: 20,
                  color: "#fffdf8",
                  margin: "0 0 16px",
                  lineHeight: 1.2,
                }}
              >
                {col.heading}
              </p>
              <ul
                style={{
                  listStyle: "none",
                  padding: 0,
                  margin: 0,
                  display: "flex",
                  flexDirection: "column",
                  gap: 14,
                }}
              >
                {col.links.map((link, j) => (
                  <li key={j}>
                    <a
                      href={link.href}
                      style={{
                        fontWeight: 400,
                        fontSize: 16,
                        color: "#fffdf8",
                        textDecoration: "none",
                        opacity: 0.8,
                      }}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div
        style={{
          paddingTop: 32,
          maxWidth: 1200,
          margin: "0 auto",
          display: "flex",
          alignItems: "flex-start",
          justifyContent: "space-between",
          gap: 24,
          flexWrap: "wrap",
          borderTop: "1px solid rgba(255,255,255,0.1)",
        }}
      >
        <p
          style={{
            fontWeight: 400,
            fontSize: 16,
            color: "#fffdf8",
            opacity: 0.5,
            margin: 0,
            lineHeight: 1.5,
          }}
        >
          &copy; {new Date().getFullYear()} CSI-ACE. Computer Society of India
          — Atharva College of Engineering. Built with love by students.
        </p>
      </div>
    </footer>
    </>
  );
}
