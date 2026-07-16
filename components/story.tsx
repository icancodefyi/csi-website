"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { UserPlus, MonitorPlay, Code2, Users, Trophy, GraduationCap } from "lucide-react";

const chapters = [
  { icon: UserPlus, step: "01", label: "YOU JOIN", sub: "Walk into your first meetup. Meet people who share your curiosity and ambition.", bg: "bg-white", text: "text-primary", subColor: "text-primary/35", iconBg: "bg-navy" },
  { icon: MonitorPlay, step: "02", label: "YOU ATTEND", sub: "Your first workshop. Something clicks. You realize you belong here.", bg: "bg-white", text: "text-primary", subColor: "text-primary/35", iconBg: "bg-navy" },
  { icon: Code2, step: "03", label: "YOU BUILD", sub: "Late nights. Real code. You ship your first project to production.", bg: "bg-navy", text: "text-white", subColor: "text-white/35", iconBg: "bg-accent" },
  { icon: Users, step: "04", label: "YOU LEAD", sub: "From follower to leader. You organize events. Mentor juniors. Inspire others.", bg: "bg-white", text: "text-primary", subColor: "text-primary/35", iconBg: "bg-navy" },
  { icon: Trophy, step: "05", label: "YOU WIN", sub: "Your team takes first place at a national hackathon. All those nights paid off.", bg: "bg-navy", text: "text-white", subColor: "text-white/35", iconBg: "bg-accent" },
  { icon: GraduationCap, step: "06", label: "YOU BECOME", sub: "You pass it forward. The next generation looks up to you. The cycle continues.", bg: "bg-white", text: "text-primary", subColor: "text-primary/35", iconBg: "bg-navy" },
];

export default function Story() {
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
    <section ref={sectionRef} style={{ height: `${chapters.length * 100}vh` }}>
      <div className="sticky top-0 h-screen overflow-hidden">
        <div ref={trackRef} className="flex" style={{ willChange: "transform" }}>
          {chapters.map((ch, i) => (
            <div key={i} className={`w-screen h-screen flex-shrink-0 flex items-center ${ch.bg}`}>
              <div className="w-full max-w-[1200px] mx-auto flex flex-col lg:flex-row items-center gap-16 lg:gap-28 px-6 md:px-16">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
                  whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.6, ease: [0.25, 1, 0.33, 1] }}
                  className="flex-shrink-0 relative"
                >
                  <div className={`absolute inset-0 ${ch.bg === 'bg-navy' ? 'bg-accent/15' : 'bg-accent/10'} rounded-[3rem] blur-3xl scale-150`} />
                  <div className={`relative w-40 h-40 md:w-48 md:h-48 rounded-[3rem] flex items-center justify-center shadow-2xl ${ch.iconBg}`}>
                    <ch.icon className="w-16 h-16 md:w-20 md:h-20 text-white" strokeWidth={1} />
                  </div>
                </motion.div>

                <div className="text-center lg:text-left max-w-2xl">
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ delay: 0.2 }}
                    className="text-sm md:text-base font-medium uppercase tracking-[0.3em] text-accent mb-6"
                  >
                    Chapter {ch.step}
                  </motion.p>
                  <motion.h2
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ delay: 0.3 }}
                    className={`font-display text-7xl md:text-9xl lg:text-[8rem] font-bold leading-[0.8] -tracking-[0.05em] ${ch.text}`}
                  >
                    {ch.label}
                  </motion.h2>
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ delay: 0.5 }}
                    className={`mt-8 text-xl md:text-2xl ${ch.subColor} leading-relaxed max-w-lg`}
                  >
                    {ch.sub}
                  </motion.p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
