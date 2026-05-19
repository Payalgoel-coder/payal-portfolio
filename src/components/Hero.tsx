import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react";

const phrases = ["AI & DS Student", "Python Developer", "Problem Solver", "Hackathon Participant"];

function Typewriter() {
  const [i, setI] = useState(0);
  const [text, setText] = useState("");
  const [del, setDel] = useState(false);

  useEffect(() => {
    const current = phrases[i];
    const speed = del ? 40 : 80;
    const t = setTimeout(() => {
      if (!del) {
        setText(current.slice(0, text.length + 1));
        if (text.length + 1 === current.length) setTimeout(() => setDel(true), 1200);
      } else {
        setText(current.slice(0, text.length - 1));
        if (text.length - 1 === 0) {
          setDel(false);
          setI((i + 1) % phrases.length);
        }
      }
    }, speed);
    return () => clearTimeout(t);
  }, [text, del, i]);

  return <span className="cursor-blink text-gradient">{text}</span>;
}

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};
const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const } },
};

export function Hero() {
  return (
    <section id="top" className="relative min-h-screen flex items-center pt-28 pb-16 overflow-hidden grain">
      {/* gradient mesh */}
      <div aria-hidden className="absolute inset-0 -z-10">
        <div
          className="absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full opacity-30 blur-3xl"
          style={{ background: "radial-gradient(circle, #7C3AED, transparent 70%)", animation: "float-blob 14s ease-in-out infinite" }}
        />
        <div
          className="absolute top-40 right-0 w-[420px] h-[420px] rounded-full opacity-25 blur-3xl"
          style={{ background: "radial-gradient(circle, #3B82F6, transparent 70%)", animation: "float-blob 18s ease-in-out infinite reverse" }}
        />
      </div>

      <div className="mx-auto max-w-6xl px-4 grid lg:grid-cols-5 gap-12 items-center w-full">
        <motion.div variants={stagger} initial="hidden" animate="show" className="lg:col-span-3">
          <motion.div variants={item} className="inline-flex items-center gap-2 glass rounded-full px-3 py-1.5 text-xs font-mono">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            👋 Open to Opportunities
          </motion.div>
          <motion.h1 variants={item} className="mt-6 text-5xl sm:text-6xl lg:text-7xl font-display font-bold leading-[1.05]">
            Hi, I'm <span className="text-gradient">Payal Goel</span>
          </motion.h1>
          <motion.h2 variants={item} className="mt-4 text-2xl sm:text-3xl font-display font-semibold text-muted-foreground min-h-[2.5rem]">
            <Typewriter />
          </motion.h2>
          <motion.p variants={item} className="mt-6 max-w-xl text-muted-foreground leading-relaxed">
            A passionate CSE–AI & DS student building real-world solutions with Python, data,
            and logic. Currently pursuing B.Tech at SISTec Bhopal with a CGPA of 8.20.
          </motion.p>
          <motion.div variants={item} className="mt-8 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="shimmer inline-flex items-center gap-2 rounded-full bg-gradient-accent px-6 py-3 text-sm font-semibold text-white glow-violet"
            >
              View Projects <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-border glass px-6 py-3 text-sm font-semibold hover:scale-105 transition-transform"
            >
              <Download className="w-4 h-4" /> Download Resume
            </a>
          </motion.div>
          <motion.div variants={item} className="mt-8 flex items-center gap-4">
            {[
              { Icon: Linkedin, href: "https://linkedin.com/in/payalgoel" },
              { Icon: Github, href: "https://github.com/Payalgoel-coder" },
              { Icon: Mail, href: "mailto:payalgoel2006@gmail.com" },
            ].map(({ Icon, href }, idx) => (
              <a
                key={idx}
                href={href}
                target="_blank"
                rel="noreferrer"
                className="h-10 w-10 rounded-full glass flex items-center justify-center hover:text-gradient hover:glow-violet transition-all"
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </motion.div>
        </motion.div>

        {/* Right visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.3 }}
          className="lg:col-span-2 relative h-[400px] flex items-center justify-center"
        >
          <div className="absolute w-72 h-72 rounded-full bg-gradient-accent opacity-80 blur-2xl" style={{ animation: "float-blob 10s ease-in-out infinite" }} />
          <div className="relative w-64 h-64 rounded-full glass flex items-center justify-center">
            <div className="text-7xl font-display font-bold text-gradient">PG</div>
          </div>
          {[
            { label: "Py", delay: "0s" },
            { label: "C++", delay: "-3s" },
            { label: "AI", delay: "-6s" },
            { label: "{}", delay: "-9s" },
          ].map((o, i) => (
            <div
              key={i}
              className="absolute left-1/2 top-1/2 -ml-6 -mt-6 w-12 h-12 rounded-xl glass flex items-center justify-center text-xs font-mono font-semibold"
              style={{ animation: `orbit 12s linear infinite`, animationDelay: o.delay }}
            >
              {o.label}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
