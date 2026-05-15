import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";

const groups = [
  {
    title: "Leadership & Events",
    items: [
      { icon: "🎤", label: "Hosted and organized college events" },
      { icon: "🗣️", label: "Confident public speaker and stage performer" },
    ],
  },
  {
    title: "Competitions",
    items: [
      { icon: "🥈", label: "2nd Position in Paper Presentation (National Science Day)" },
      { icon: "💡", label: "Participated in Samadhan (Problem-solving)" },
    ],
  },
];

export function Activities() {
  return (
    <section className="relative py-24 px-4 bg-[var(--surface)]/40">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="06 / Beyond Code" title="Learning & Activities" />
        <div className="grid md:grid-cols-3 gap-6">
          {groups.map((g, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass rounded-2xl p-6"
            >
              <h3 className="font-mono text-xs uppercase tracking-widest text-gradient mb-4">
                {g.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {g.items.map((it) => (
                  <span
                    key={it.label}
                    className="inline-flex items-center gap-1.5 rounded-full border border-border px-3 py-1.5 text-xs hover:border-[var(--violet)] hover:-translate-y-0.5 transition-all"
                  >
                    <span>{it.icon}</span>
                    {it.label}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
