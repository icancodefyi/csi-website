export default function Footer() {
  const cols = [
    { title: "Connect", items: ["Instagram", "LinkedIn", "GitHub", "Discord"] },
    { title: "Explore", items: ["Events", "Projects", "Gallery", "Team"] },
    { title: "About", items: ["CSI India", "Atharva College", "Our Story", "Contact"] },
  ];

  return (
    <footer className="bg-navy border-t border-white/[0.04]">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-20 pt-24 pb-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-16">
          <div className="col-span-2 md:col-span-1">
            <p className="font-display text-2xl font-bold text-white">
              CSI<span className="text-accent"> ACE</span>
            </p>
            <p className="mt-3 text-sm text-white/25 leading-relaxed max-w-xs">
              Computer Society of India
              <br />Atharva College of Engineering
            </p>
          </div>

          {cols.map((col) => (
            <div key={col.title}>
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-white/20 mb-5">{col.title}</p>
              <ul className="space-y-2.5">
                {col.items.map((item) => (
                  <li key={item}>
                    <a href="#" className="text-sm text-white/35 hover:text-white transition-colors">{item}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 pt-6 border-t border-white/[0.04] flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-xs text-white/15">&copy; {new Date().getFullYear()} CSI ACE.</p>
          <p className="font-display text-xs text-white/10 italic">Build. Lead. Inspire.</p>
        </div>
      </div>
    </footer>
  );
}
