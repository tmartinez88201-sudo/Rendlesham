import React from "react";
import { motion } from "motion/react";
import { Eye, ShieldAlert, Navigation, ArrowDown } from "lucide-react";

interface HeroProps {
  onScrollToTrilogy: () => void;
}

export default function Hero({ onScrollToTrilogy }: HeroProps) {
  return (
    <section className="relative min-h-screen flex flex-col justify-between items-center px-4 py-8 md:py-12 overflow-hidden bg-[#050505]">
      {/* Background Image with Cinematic Vignette and Slow Pulsing Scale */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <motion.div
          initial={{ scale: 1.15, opacity: 0 }}
          animate={{ scale: 1.0, opacity: 0.4 }}
          transition={{ duration: 3.5, ease: "easeOut" }}
          className="w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: `url('/src/assets/images/rendlesham_hero_1784331513265.jpg')`,
          }}
        />
        {/* Soft, custom glowing atmospheric gradients to create "spectral light" from design spec */}
        <div className="absolute top-[-10%] left-[-10%] w-[45%] h-[45%] bg-blue-900/10 rounded-full blur-[120px] animate-pulse-slow pointer-events-none" />
        <div className="absolute bottom-[0%] right-[-5%] w-[50%] h-[50%] bg-amber-900/10 rounded-full blur-[100px] animate-pulse-slow-reverse pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(20,20,25,0.45),transparent_70%)]" />
        
        {/* Cinematic Vignette */}
        <div className="absolute inset-0 vignette-overlay" />
        {/* Dark noise/scanline overlay to give it a weathered, classified look */}
        <div 
          className="absolute inset-0 opacity-[0.012] pointer-events-none bg-repeat" 
          style={{ 
            backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E\")" 
          }}
        />
      </div>

      {/* Top Bar (Metadata, Classified Tags) */}
      <div className="w-full max-w-7xl mx-auto flex justify-between items-center z-10 text-[10px] md:text-xs font-mono text-zinc-500 uppercase tracking-[0.3em] border-b border-white/5 pb-4">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, delay: 0.2 }}
          className="flex items-center gap-2"
          id="hero-security-tag"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
          <span>PROJECT REDLIGHT // SECURE INDEX</span>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, delay: 0.2 }}
          className="hidden sm:flex items-center gap-4"
          id="hero-coords-tag"
        >
          <span>GRID SEC: 52°05'N, 01°26'E</span>
          <span className="text-zinc-800">|</span>
          <span>EST. DECLASS: 2026</span>
        </motion.div>
      </div>

      {/* Main Hero Content (Cinematic Title & Intrigue) */}
      <div className="w-full max-w-4xl mx-auto text-center z-10 flex-grow flex flex-col justify-center items-center mt-8 md:mt-0">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center"
        >
          {/* Subtle upper title */}
          <span className="text-amber-500/80 font-mono text-xs md:text-sm tracking-[0.5em] mb-4 uppercase font-semibold block">
            Unfolding Today
          </span>

          {/* Epic Main Title with Serif Italic font */}
          <h1 
            id="hero-main-title"
            className="font-display text-5xl sm:text-7xl md:text-8xl font-light text-zinc-100 tracking-tight leading-[1.05] mb-6 relative select-none"
          >
            The <span className="italic font-normal text-amber-500/90">Rendlesham</span><br/>Series
          </h1>

          {/* Decorative minimalist line alignment */}
          <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-amber-500/40 to-transparent my-6" />

          {/* Engaging Atmosphere Subtitle */}
          <p 
            id="hero-description"
            className="font-sans max-w-xl md:max-w-2xl text-sm md:text-base text-white/50 font-light leading-relaxed tracking-wide mb-8 md:mb-12"
          >
            A literary descent into the boundaries of the known. Where silence speaks, and shadows hold the geometry of truth. Explore a trilogic investigation into the architecture of the impossible.
          </p>

          {/* High Contrast, Premium CTA button matching the "Sophisticated Dark" style */}
          <div className="flex flex-col sm:flex-row gap-4 items-center">
            <motion.button
              whileHover={{ scale: 1.03, backgroundColor: "rgba(255,255,255,0.08)" }}
              whileTap={{ scale: 0.98 }}
              onClick={onScrollToTrilogy}
              className="px-8 py-4 bg-white/5 backdrop-blur-md border border-white/20 text-zinc-100 font-sans text-xs uppercase tracking-[0.4em] rounded-none transition-all duration-300 flex items-center gap-3 cursor-pointer group"
              id="hero-cta-btn"
            >
              <Eye className="w-4 h-4 text-amber-500/80 group-hover:rotate-12 transition-transform duration-300" />
              <span>Begin the Inquiry</span>
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* Hero Bottom (Ambient Indicators, Scroll indicator) */}
      <div className="w-full max-w-7xl mx-auto z-10 flex flex-col sm:flex-row justify-between items-center gap-4 text-zinc-600 font-mono text-[10px] md:text-xs tracking-wider border-t border-white/5 pt-6">
        <div className="flex items-center gap-3">
          <ShieldAlert className="w-3.5 h-3.5 text-amber-950 animate-pulse" />
          <span className="opacity-60">STATUS: ALL RECEIVERS AWAKE // SCANNING IN PROGRESS...</span>
        </div>

        {/* Scroll Indicator */}
        <motion.div 
          onClick={onScrollToTrilogy}
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
          className="flex items-center gap-2 text-zinc-400 hover:text-amber-500 transition-colors duration-300 cursor-pointer py-1 uppercase tracking-[0.2em]"
          id="hero-scroll-indicator"
        >
          <span>Begin Descent</span>
          <ArrowDown className="w-3.5 h-3.5 text-amber-500/70" />
        </motion.div>

        <div className="hidden sm:flex items-center gap-2 text-zinc-600">
          <Navigation className="w-3 h-3 text-amber-800" />
          <span>ALIGNED MONUMENTS: 03/03</span>
        </div>
      </div>
    </section>
  );
}
