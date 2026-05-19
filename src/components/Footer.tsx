import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp, Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <footer className="relative border-t border-border mt-12">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[var(--violet)] to-transparent" />
      <div className="mx-auto max-w-6xl px-4 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground">
          Designed & Built by <span className="text-gradient font-semibold">Payal Goel</span> · 2025
        </p>
        <div className="flex items-center gap-3">
          {[
            { Icon: Linkedin, href: "https://linkedin.com/in/payalgoel" },
            { Icon: Github, href: "https://github.com/Payalgoel-coder" },
            { Icon: Mail, href: "mailto:payalgoel2006@gmail.com" },
          ].map(({ Icon, href }, i) => (
            <a
              key={i}
              href={href}
              target="_blank"
              rel="noreferrer"
              className="h-9 w-9 rounded-full glass flex items-center justify-center hover:glow-violet hover:text-gradient transition-all"
            >
              <Icon className="w-4 h-4" />
            </a>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {show && (
          <motion.button
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="fixed bottom-6 right-6 z-40 h-12 w-12 rounded-full bg-gradient-accent glow-violet flex items-center justify-center text-white shadow-lg hover:scale-110 transition-transform"
            aria-label="Back to top"
          >
            <ArrowUp className="w-5 h-5" />
          </motion.button>
        )}
      </AnimatePresence>
    </footer>
  );
}
