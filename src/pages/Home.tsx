import { useEffect } from "react";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Stats } from "@/components/Stats";
import { About } from "@/components/About";
import { CurrentResearch } from "@/components/CurrentResearch";
import { Publications } from "@/components/Publications";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

interface HomeProps {
  targetSection?: string;
}

export default function Home({ targetSection }: HomeProps) {
  useEffect(() => {
    if (targetSection) {
      setTimeout(() => {
        const element = document.getElementById(targetSection);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
  }, [targetSection]);

  return (
    <div className="min-h-screen bg-background font-sans text-foreground selection:bg-primary/20">
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <About />
        <CurrentResearch />
        <Publications />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
