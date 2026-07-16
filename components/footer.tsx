"use client";

export default function Footer() {
  const links = [
    {
      title: "Connect",
      items: ["Instagram", "LinkedIn", "GitHub", "Discord"],
    },
    {
      title: "Explore",
      items: ["Events", "Projects", "Gallery", "Team"],
    },
    {
      title: "Resources",
      items: ["CSI India", "Atharva College", "Blog", "Contact"],
    },
  ];

  return (
    <footer className="bg-primary text-white">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-20 py-20 md:py-28">
        <div className="flex flex-col md:flex-row justify-between gap-16">
          <div className="max-w-xs">
            <p className="font-display text-3xl font-bold tracking-tight">
              CSI <span className="text-accent">ACE</span>
            </p>
            <p className="mt-4 text-sm text-white/40 leading-relaxed">
              Computer Society of India
              <br />
              Atharva College of Engineering
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-12 md:gap-20">
            {links.map((col) => (
              <div key={col.title}>
                <p className="text-xs font-medium uppercase tracking-[0.2em] text-white/30 mb-6">
                  {col.title}
                </p>
                <ul className="space-y-3">
                  {col.items.map((item) => (
                    <li key={item}>
                      <a
                        href="#"
                        className="text-sm font-medium text-white/50 hover:text-white transition-colors duration-200"
                      >
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20 md:mt-28 pt-8 border-t border-white/[0.06] flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/25">
            &copy; {new Date().getFullYear()} CSI ACE. All rights reserved.
          </p>
          <p className="text-xs text-white/25">
            Build. Lead. Inspire.
          </p>
        </div>
      </div>
    </footer>
  );
}
