"use client";

import { useEffect, useRef } from "react";

const chapters = [
  { week: "Week 1", text: "You attend your first workshop." },
  { week: "Month 1", text: "You make your first friend." },
  { week: "Month 3", text: "You participate in your first hackathon." },
  { week: "Month 6", text: "You build your first project." },
  { week: "Year 2", text: "You become a Lead." },
  { week: "Year 3", text: "You organize events." },
  { week: "Year 4", text: "You mentor others." },
];

export default function Timeline() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let raf = 0;
    const scroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const s = sectionRef.current;
        const t = trackRef.current;
        if (!s || !t) return;
        const r = s.getBoundingClientRect();
        const scrollable = r.height - innerHeight;
        if (scrollable <= 0) return;
        const p = Math.max(0, Math.min(1, -r.top / scrollable));
        t.style.transform = `translate3d(${-p * (chapters.length - 1) * innerWidth}px,0,0)`;
      });
    };
    window.addEventListener("scroll", scroll, { passive: true });
    scroll();
    return () => { window.removeEventListener("scroll", scroll); cancelAnimationFrame(raf); };
  }, []);

  return (
    <section ref={sectionRef} className="relative bg-white" style={{ height: `${chapters.length * 100}vh` }}>
      <div className="absolute inset-0 opacity-[0.15] flex items-center justify-center pointer-events-none">
        <p className="font-display text-[8vw] font-bold -tracking-[0.03em] text-primary/5 text-center px-6">
          WHAT WILL HAPPEN<br />AFTER YOU JOIN?
        </p>
      </div>

      <div className="sticky top-0 h-screen overflow-hidden">
        <div ref={trackRef} className="flex" style={{ willChange: "transform" }}>
          {chapters.map((ch, i) => (
            <div key={i} className="w-screen h-screen flex-shrink-0 flex items-center justify-center">
              <div className="text-center max-w-2xl px-6">
                <p className="text-sm font-medium uppercase tracking-[0.3em] text-accent mb-6">{ch.week}</p>
                <h2 className="font-display text-5xl md:text-7xl lg:text-[5rem] font-bold leading-[0.9] -tracking-[0.03em] text-primary">
                  {ch.text}
                </h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
