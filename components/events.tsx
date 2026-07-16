"use client";

import { motion } from "framer-motion";

const events = [
  {
    title: "HackVerse",
    subtitle: "2025",
    tagline: "12 hours. 400+ participants. One crazy experience.",
    desc: "Our flagship hackathon where the best builders on campus converge for a night of intense creation, collaboration, and caffeine.",
    img: "https://picsum.photos/seed/hackverse/1200/700",
    stats: ["400+ hackers", "12 hours", "₹50k in prizes"],
  },
  {
    title: "CodeSprint",
    subtitle: "Monthly",
    tagline: "Speed. Skill. Strategy.",
    desc: "A competitive coding series designed to sharpen your algorithmic thinking and problem-solving abilities under pressure.",
    img: "https://picsum.photos/seed/codesprint/1200/700",
    stats: ["200+ participants", "3 hours", "5 challenges"],
  },
  {
    title: "TechTalks",
    subtitle: "Weekly",
    tagline: "Learn from builders who've been there.",
    desc: "Intimate sessions with founders, engineers, and designers who share unfiltered stories of building products that matter.",
    img: "https://picsum.photos/seed/techtalks/1200/700",
    stats: ["30+ speakers", "Weekly", "Open to all"],
  },
  {
    title: "BuildNights",
    subtitle: "Bi-Weekly",
    tagline: "Ship side projects with friends.",
    desc: "Long nights of collaborative coding where you turn ideas into working prototypes — surrounded by people who push you to be better.",
    img: "https://picsum.photos/seed/buildnight/1200/700",
    stats: ["Hands-on", "Mentor guided", "Ship by sunrise"],
  },
];

export default function EventsShowcase() {
  return (
    <section className="relative bg-white">
      <div className="max-w-[1600px] mx-auto px-6 md:px-12 lg:px-20 py-24 md:py-40">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.25, 1, 0.33, 1] }}
          className="text-xs md:text-sm font-medium uppercase tracking-[0.25em] text-accent mb-6"
        >
          What we do
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.25, 1, 0.33, 1], delay: 0.1 }}
          className="font-display text-[12vw] md:text-[9vw] lg:text-[7vw] font-bold leading-[0.82] -tracking-[0.03em] text-primary"
        >
          Events &amp;
          <br />
          <span className="text-accent">Experiences</span>
        </motion.h2>

        <div className="mt-20 md:mt-32 space-y-32 md:space-y-48">
          {events.map((event, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.9, ease: [0.25, 1, 0.33, 1] }}
              className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-center"
            >
              <div
                className={`w-full lg:w-[55%] ${
                  i % 2 === 1 ? "lg:order-2" : ""
                }`}
              >
                <div className="relative overflow-hidden rounded-3xl aspect-[16/10]">
                  <img
                    src={event.img}
                    alt={event.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
                </div>
              </div>

              <div
                className={`w-full lg:w-[45%] ${
                  i % 2 === 1 ? "lg:order-1" : ""
                }`}
              >
                <p className="text-sm font-medium text-accent uppercase tracking-[0.15em]">
                  {event.subtitle}
                </p>
                <h3 className="mt-3 font-display text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.88] -tracking-[0.03em] text-primary">
                  {event.title}
                </h3>
                <p className="mt-6 text-lg md:text-xl font-medium text-primary/60 leading-relaxed">
                  {event.tagline}
                </p>
                <p className="mt-4 text-base text-primary/40 leading-relaxed max-w-md">
                  {event.desc}
                </p>
                <div className="mt-8 flex flex-wrap gap-4">
                  {event.stats.map((stat, si) => (
                    <span
                      key={si}
                      className="px-5 py-2.5 bg-secondary rounded-full text-sm font-medium text-primary/70"
                    >
                      {stat}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
