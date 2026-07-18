import React, { useEffect, useState } from "react";
import Hero from "./components/Hero";
import BookShowcase from "./components/BookShowcase";
import MysteryCodex from "./components/MysteryCodex";
import Philosophy from "./components/Philosophy";
import CTASection from "./components/CTASection";
import { Compass, BookOpen, Cpu, Shield, HelpCircle, Navigation, Radio } from "lucide-react";

export default function App() {
  const [activeSection, setActiveSection] = useState("hero");

  const sections = [
    { id: "hero", label: "01 // Arrival", icon: Navigation },
    { id: "trilogy-section", label: "02 // Trilogy", icon: BookOpen },
    { id: "codex-section", label: "03 // Codex", icon: Cpu },
    { id: "philosophy-section", label: "04 // Philosophy", icon: HelpCircle },
    { id: "cta-section", label: "05 // Acquire", icon: Shield }
  ];

  // Smooth scroll helper
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setActiveSection(id);
    }
  };

  // Scroll spy to detect active section and highlight indicator
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      for (const section of sections) {
        const el = document.getElementById(section.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;

          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#040406] text-zinc-100 font-sans selection:bg-blue-900/30 selection:text-blue-300 relative">
      
      {/* Floating Side Progress Indicator Dock */}
      <div 
        className="fixed right-6 top-1/2 -translate-y-1/2 z-40 hidden md:flex flex-col items-end gap-6 bg-zinc-950/45 backdrop-blur-md border border-zinc-900/55 p-4 rounded-full shadow-[0_0_20px_rgba(4,4,6,0.6)]"
        id="side-progress-dock"
      >
        {sections.map((section) => {
          const isCurrent = activeSection === section.id;
          const Icon = section.icon;

          return (
            <button
              key={section.id}
              onClick={() => scrollTo(section.id)}
              className="group relative flex items-center gap-3 cursor-pointer"
              id={`nav-dot-${section.id}`}
            >
              {/* Tooltip on hover */}
              <span className="absolute right-8 font-mono text-[9px] text-zinc-500 group-hover:text-zinc-200 opacity-0 group-hover:opacity-100 transition-all duration-300 bg-zinc-950 border border-zinc-900 px-2 py-1 rounded-sm uppercase tracking-wider whitespace-nowrap">
                {section.label}
              </span>

              {/* Dot Icon Indicator */}
              <div 
                className={`w-8 h-8 rounded-full border flex items-center justify-center transition-all duration-300 ${
                  isCurrent 
                    ? "bg-blue-950/40 border-blue-500/80 text-blue-400 scale-110 shadow-[0_0_15px_rgba(59,130,246,0.2)]" 
                    : "bg-zinc-950 border-zinc-900/60 text-zinc-600 hover:border-zinc-800 hover:text-zinc-400"
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
              </div>
            </button>
          );
        })}
      </div>

      {/* Floating Header Banner for immersive storytelling */}
      <header className="fixed top-0 left-0 w-full z-40 bg-gradient-to-b from-[#040406] to-transparent pointer-events-none">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center w-full">
          {/* Immersive Brand Logo */}
          <div 
            onClick={() => scrollTo("hero")} 
            className="font-display text-sm font-bold tracking-[0.25em] text-zinc-200 pointer-events-auto cursor-pointer select-none"
            id="brand-logo"
          >
            THE RENDLESHAM SERIES
          </div>
          
          {/* Subtle Live Freq Badge */}
          <div className="hidden sm:flex items-center gap-2 font-mono text-[9px] text-zinc-500 tracking-[0.2em] uppercase">
            <Radio className="w-3 h-3 text-blue-500 animate-pulse" />
            <span>TRANSMITTING CODES SECURELY</span>
          </div>
        </div>
      </header>

      {/* Phased Uninterrupted Scroll Sections */}
      <div id="hero">
        <Hero onScrollToTrilogy={() => scrollTo("trilogy-section")} />
      </div>

      <div id="trilogy-section">
        <BookShowcase />
      </div>

      <div id="codex-section">
        <MysteryCodex />
      </div>

      <div id="philosophy-section">
        <Philosophy />
      </div>

      <div id="cta-section">
        <CTASection />
      </div>

    </div>
  );
}
