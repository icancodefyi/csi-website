export default function Footer() {
  const cols = [
    { title: "Connect", items: ["Instagram", "LinkedIn", "GitHub", "Discord"] },
    { title: "Explore", items: ["Events", "Projects", "Gallery", "Team"] },
    { title: "About", items: ["CSI India", "Atharva College", "Contact"] },
  ];

  return (
    <footer className="bg-primary border-t border-white/[0.04]">
      <div className="max-w-[1600px] mx-auto px-6 md:px-10 lg:px-16 pt-20 pb-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16">
          <div className="col-span-2 md:col-span-1">
            <p className="font-display text-2xl font-bold text-white">CSI<span className="text-accent"> ACE</span></p>
            <p className="mt-2 text-sm text-white/20 leading-relaxed">Computer Society of India<br />Atharva College of Engineering</p>
          </div>
          {cols.map((col) => (
            <div key={col.title}>
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-white/15 mb-4">{col.title}</p>
              <ul className="space-y-2">
                {col.items.map((item) => (
                  <li key={item}><a href="#" className="text-sm text-white/30 hover:text-white transition-colors">{item}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-14 pt-6 border-t border-white/[0.04] flex items-center justify-between">
          <p className="text-xs text-white/10">&copy; {new Date().getFullYear()} CSI ACE.</p>
          <p className="font-display text-xs text-white/10 italic">Build. Lead. Inspire.</p>
        </div>
      </div>
    </footer>
  );
}
