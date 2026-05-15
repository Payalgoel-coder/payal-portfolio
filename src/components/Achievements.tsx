import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";
import { Award } from "lucide-react";

const achievements = [
  { icon: "🌟", text: "Member of Super-50" },
  { icon: "🥉", text: "Third position in IOT meets Gen AI On Cloud Workshop" },
  { icon: "👩‍💻", text: "Web-development Co-Lead – GDG on Campus" },
  { icon: "🌐", text: "Webmaster at IEEE Committee" },
  { icon: "🤝", text: "Contributor and Ambassador at GSSOC" },
];

const certs = [
  { title: "Android app development", issuer: "Saksham Technology" },
  { title: "Cisco Certifications (C, AI)", issuer: "Cisco Networking Academy" },
];

export function Achievements() {
  return (
    <section id="achievements" className="relative py-24 px-4 bg-[var(--surface)]/40">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="04 / Milestones" title="Achievements & Certifications" />
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Timeline */}
          <div className="relative pl-8">
            <div className="absolute left-2 top-2 bottom-2 w-px bg-gradient-to-b from-[var(--violet)] via-[var(--blue)] to-transparent" />
            {achievements.map((a, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative mb-8 last:mb-0"
              >
                <div className="absolute -left-[28px] top-1.5 w-4 h-4 rounded-full bg-gradient-accent glow-violet" />
                <div className="glass rounded-xl p-4">
                  <div className="text-2xl mb-1">{a.icon}</div>
                  <p className="text-sm">{a.text}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Certs */}
          <div className="space-y-4">
            {certs.map((c, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="glass rounded-2xl p-5 flex items-center gap-4 hover:-translate-y-1 transition-transform"
              >
                <div className="h-12 w-12 rounded-xl bg-gradient-accent flex items-center justify-center glow-violet shrink-0">
                  <Award className="w-5 h-5 text-white" />
                </div>
                <div>
                  <div className="font-display font-semibold">{c.title}</div>
                  <div className="font-mono text-xs text-muted-foreground mt-0.5">{c.issuer}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
