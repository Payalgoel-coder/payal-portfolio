import { createFileRoute } from "@tanstack/react-router";
import { Toaster } from "@/components/ui/sonner";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Achievements } from "@/components/Achievements";
import { Education } from "@/components/Education";
import { Activities } from "@/components/Activities";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Payal Goel | AI & DS Developer" },
      {
        name: "description",
        content:
          "Portfolio of Payal Goel — B.Tech CSE (AI & Data Science) student at SISTec Bhopal. Python developer, hackathon participant, and problem solver.",
      },
      { property: "og:title", content: "Payal Goel | AI & DS Developer" },
      {
        property: "og:description",
        content:
          "Portfolio of Payal Goel — Python developer & AI/DS student building real-world solutions.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Achievements />
        <Education />
        <Activities />
        <Contact />
      </main>
      <Footer />
      <Toaster position="bottom-right" />
    </div>
  );
}
