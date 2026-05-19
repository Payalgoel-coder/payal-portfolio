import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Linkedin, MapPin, Loader2, Send, Phone } from "lucide-react";
import { toast } from "sonner";
import { SectionHeading } from "./SectionHeading";

const info = [
  { Icon: Mail, label: "Email", value: "payalgoel2006@gmail.com", href: "mailto:payalgoel2006@gmail.com" },
  { Icon: Phone, label: "Phone", value: "+91 9310119969", href: "tel:+919310119969" },
  { Icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/payalgoel", href: "https://linkedin.com/in/payalgoel" },
  { Icon: MapPin, label: "Location", value: "Bhopal, Madhya Pradesh", href: "#" },
];

export function Contact() {
  const [loading, setLoading] = useState(false);

  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast.success("Message sent!", { description: "Thanks for reaching out — I'll reply soon." });
      (e.target as HTMLFormElement).reset();
    }, 1100);
  };

  return (
    <section id="contact" className="relative py-24 px-4">
      <div className="mx-auto max-w-6xl">
        <SectionHeading eyebrow="07 / Connect" title="Let's Connect" />
        <p className="-mt-6 mb-10 text-muted-foreground max-w-2xl">
          I'm open to internship opportunities, collaborations, and new projects.
        </p>

        <div className="grid lg:grid-cols-2 gap-8">
          <div className="space-y-4">
            {info.map((c, i) => (
              <motion.a
                key={i}
                href={c.href}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="glass rounded-2xl p-5 flex items-center gap-4 hover:-translate-y-1 hover:glow-violet transition-all"
              >
                <div className="h-11 w-11 rounded-xl bg-gradient-accent flex items-center justify-center shrink-0">
                  <c.Icon className="w-4 h-4 text-white" />
                </div>
                <div>
                  <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                    {c.label}
                  </div>
                  <div className="text-sm font-medium mt-0.5">{c.value}</div>
                </div>
              </motion.a>
            ))}
          </div>

          <motion.form
            onSubmit={submit}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass rounded-3xl p-6 space-y-4"
          >
            <div>
              <label className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">Name</label>
              <input
                required
                type="text"
                className="mt-2 w-full rounded-xl bg-[var(--muted)] border border-border px-4 py-3 text-sm focus:outline-none focus:border-[var(--violet)] transition-colors"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">Email</label>
              <input
                required
                type="email"
                className="mt-2 w-full rounded-xl bg-[var(--muted)] border border-border px-4 py-3 text-sm focus:outline-none focus:border-[var(--violet)] transition-colors"
                placeholder="you@email.com"
              />
            </div>
            <div>
              <label className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">Message</label>
              <textarea
                required
                rows={4}
                className="mt-2 w-full rounded-xl bg-[var(--muted)] border border-border px-4 py-3 text-sm focus:outline-none focus:border-[var(--violet)] transition-colors resize-none"
                placeholder="Tell me about your project…"
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className="shimmer w-full inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-accent px-6 py-3 text-sm font-semibold text-white glow-violet disabled:opacity-70"
            >
              {loading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" /> Sending…
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" /> Send Message
                </>
              )}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
