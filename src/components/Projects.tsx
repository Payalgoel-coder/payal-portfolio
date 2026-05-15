import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const projects = [
  {
    tag: "Web Development",
    title: "Portfolio",
    desc: "Developed a modern and responsive portfolio project to showcase my skills, projects, certifications, and achievements. Focused on clean UI/UX design, interactivity, and performance to create a professional digital presence.",
    stack: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    accent: "from-emerald-400 to-teal-300",
    glow: "rgba(45,212,168,0.45)",
    live: true,
  },
  {
    tag: "Android App",
    title: "India Travel Explorer App",
    desc: "Developed an Android application, India Travel Explore, designed to help users discover popular destinations, culture, food, and tourist attractions across India. Focused on user-friendly UI, smooth navigation, and an engaging travel exploration experience.",
    stack: ["Android Studio", "Java/Kotlin", "UI/UX"],
    accent: "from-blue-400 to-indigo-300",
    glow: "rgba(96,165,250,0.45)",
    live: false,
  },
  {
    tag: "Data Visualization",
    title: "Power BI Dashboard – Global Super Store",
    desc: "Developed a Power BI dashboard to visualize sales and profit trends across time, categories, and markets.",
    stack: ["Power BI", "Data Analysis"],
    accent: "from-orange-400 to-amber-300",
    glow: "rgba(251,146,60,0.45)",
    live: false,
  },
];

export function Projects() {
  return (
    <section id="projects" className="relative py-24 px-4">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="03 / Work" title="Projects" />
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ y: -8 }}
              className="group relative glass rounded-3xl p-6 overflow-hidden transition-shadow hover:shadow-2xl"
              style={{ "--g": p.glow } as React.CSSProperties}
            >
              <div className={`absolute inset-x-0 top-0 h-px bg-gradient-to-r ${p.accent}`} />
              <div
                className="absolute -inset-px rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
                style={{ boxShadow: `0 0 60px -10px ${p.glow}` }}
              />
              <div className="relative">
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-[10px] uppercase tracking-widest px-2.5 py-1 rounded-full border border-border text-muted-foreground">
                    {p.tag}
                  </span>
                </div>
                <h3 className="text-2xl font-display font-bold mb-3">{p.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-5">{p.desc}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {p.stack.map((s) => (
                    <span
                      key={s}
                      className="font-mono text-[11px] px-2 py-1 rounded-md bg-[var(--muted)]"
                    >
                      {s}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  <a
                    href="#"
                    className="inline-flex items-center gap-1.5 text-sm font-medium hover:text-gradient transition-colors"
                  >
                    <Github className="w-4 h-4" /> GitHub
                  </a>
                  {p.live && (
                    <a
                      href="#"
                      className="inline-flex items-center gap-1.5 text-sm font-medium hover:text-gradient transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" /> Live Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
