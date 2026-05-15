import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";
import { GraduationCap, MapPin, Code2, Trophy } from "lucide-react";

const stats = [
  { Icon: GraduationCap, label: "CGPA", value: "8.20" },
  { Icon: MapPin, label: "Location", value: "Bhopal, M.P." },
  { Icon: Code2, label: "Coding", value: "1+ Years" },
  { Icon: Trophy, label: "Hackathon", value: "SIH Participant" },
];

export function About() {
  return (
    <section id="about" className="relative py-24 px-4">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="01 / Identity" title="About Me" />
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 gap-4"
          >
            {stats.map((s, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -4 }}
                className="glass rounded-2xl p-5 transition-shadow hover:shadow-2xl"
              >
                <s.Icon className="w-6 h-6 text-gradient mb-3" style={{ stroke: "url(#g)" }} />
                <div className="font-mono text-xs text-muted-foreground uppercase tracking-wider">
                  {s.label}
                </div>
                <div className="text-2xl font-display font-bold mt-1">{s.value}</div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-5 text-muted-foreground leading-relaxed"
          >
            <p>
              I am a motivated and detail-oriented individual with strong programming,
              problem-solving, and communication skills. As a <span className="text-foreground font-semibold">B.Tech CSE student specializing in AI & Data Science</span>,
              I am passionate about learning new technologies and building innovative, user-friendly solutions.
            </p>
            <p>
              I am seeking an opportunity to enhance my technical knowledge, contribute effectively to
              organizational growth, and gain valuable industry experience.
            </p>
            <p>
              Currently exploring: <span className="font-mono text-sm text-gradient">Data
              Analysis · Python · Algorithmic Thinking</span>
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
