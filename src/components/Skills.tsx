import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";

const tech = [
  { name: "Python", icon: "🐍" },
  { name: "C", icon: "⚙️" },
  { name: "C++", icon: "💠" },
  { name: "HTML/CSS", icon: "🌐" },
  { name: "JavaScript", icon: "⚡" },
  { name: "MySQL", icon: "🗄️" },
  { name: "Dart", icon: "🎯" },
  { name: "Power BI", icon: "📊" },
  { name: "Pandas/NumPy", icon: "🧮" },
];

const soft = [
  "Problem-solving",
  "Effective Communication",
  "Team Collaboration",
  "Adaptive learning mindset",
  "Creative Thinking",
];

const bars = [
  { name: "Python", pct: 85 },
  { name: "C / C++", pct: 75 },
  { name: "Web Dev", pct: 80 },
  { name: "Data Analysis", pct: 70 },
];

export function Skills() {
  return (
    <section id="skills" className="relative py-24 px-4 bg-[var(--surface)]/40">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="02 / Toolkit" title="Technical Skills" />

        <div className="grid lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2">
            <h3 className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-4">
              Tech Stack
            </h3>
            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              variants={{ hidden: {}, show: { transition: { staggerChildren: 0.05 } } }}
              className="flex flex-wrap gap-3 mb-10"
            >
              {tech.map((t) => (
                <motion.span
                  key={t.name}
                  variants={{
                    hidden: { scale: 0, opacity: 0 },
                    show: { scale: 1, opacity: 1, transition: { type: "spring", stiffness: 260, damping: 18 } },
                  }}
                  className="glass rounded-full px-4 py-2 text-sm font-medium flex items-center gap-2 hover:glow-violet hover:-translate-y-0.5 transition-transform"
                >
                  <span>{t.icon}</span>
                  {t.name}
                </motion.span>
              ))}
            </motion.div>

            <h3 className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-4">
              Soft Skills
            </h3>
            <div className="flex flex-wrap gap-3">
              {soft.map((s) => (
                <span
                  key={s}
                  className="rounded-full border border-border px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:border-[var(--violet)] transition-colors"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-4">
              Proficiency
            </h3>
            <div className="space-y-5">
              {bars.map((b) => (
                <div key={b.name}>
                  <div className="flex justify-between text-sm mb-2">
                    <span className="font-medium">{b.name}</span>
                    <span className="font-mono text-muted-foreground">{b.pct}%</span>
                  </div>
                  <div className="h-2 rounded-full bg-[var(--muted)] overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${b.pct}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, ease: "easeOut" }}
                      className="h-full bg-gradient-accent rounded-full"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
