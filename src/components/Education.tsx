import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";

const education = [
  {
    icon: "🎓",
    title: "B.Tech — CSE (AI & Data Science)",
    place: "SISTec Gandhi Nagar, Bhopal",
    period: "2025 – Present",
    score: "CGPA: 8.20",
    badge: "Current",
  },
  {
    icon: "📚",
    title: "Higher Secondary (PCM) - Class 12th",
    place: "Maharaja Aggarsain Adarsh Public School, Delhi",
    period: "2024",
    score: "Score: 93%",
  },
  {
    icon: "🏫",
    title: "Secondary School - Class 10th",
    place: "Maharaja Aggarsain Adarsh Public School, Delhi",
    period: "2022",
    score: "Score: 92%",
  },
];

export function Education() {
  return (
    <section id="education" className="relative py-24 px-4">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="05 / Journey" title="Education" />
        <div className="grid md:grid-cols-2 gap-6">
          {education.map((e, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="relative glass rounded-2xl p-6 overflow-hidden"
            >
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-accent" />
              <div className="flex items-start justify-between mb-3">
                <span className="text-3xl">{e.icon}</span>
                {e.badge && (
                  <span className="font-mono text-[10px] uppercase tracking-widest px-2 py-1 rounded-full bg-gradient-accent text-white">
                    {e.badge}
                  </span>
                )}
              </div>
              <h3 className="font-display text-xl font-bold">{e.title}</h3>
              <p className="text-sm text-muted-foreground mt-1">{e.place}</p>
              <div className="mt-4 flex items-center justify-between font-mono text-xs">
                <span className="text-muted-foreground">{e.period}</span>
                <span className="text-gradient font-semibold">{e.score}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
