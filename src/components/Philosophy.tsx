import React from "react";
import { motion } from "motion/react";
import { Compass, Quote, Milestone, EyeOff } from "lucide-react";

export default function Philosophy() {
  const pillars = [
    {
      icon: Compass,
      title: "The Silent Forest",
      subtitle: "The Canvas of the Dark",
      description: "Darkness is not merely an empty void; it is a rich texture. The primeval pine forests of Suffolk remind us that what remains hidden from the eye is what demands our deepest curiosity and intellectual focus."
    },
    {
      icon: Milestone,
      title: "Monumental Shadows",
      subtitle: "The Grace of Restraint",
      description: "Massive speculative structures reveal their true weight and grandeur not through blazing light, but through the hard edges of shadow. The Rendlesham Series balances monumental cosmic scale with precise character-focused mystery."
    },
    {
      icon: EyeOff,
      title: "The Beautiful Unknown",
      subtitle: "Inspiration Over Fear",
      description: "Unlike standard sci-fi horror, we celebrate the cosmic unknown as a limitless wellspring of human imagination and wonder. Uncovering deep-space alignments is an invitation to dream rather than a threat to survive."
    }
  ];

  return (
    <section 
      id="philosophy-section" 
      className="relative py-24 px-4 bg-[#050505] border-t border-white/5 overflow-hidden"
    >
      {/* Background radial gradient to keep background dark and textured */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_bottom_left,rgba(245,158,11,0.01)_0%,transparent_60%)]" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <span className="font-mono text-xs text-amber-500/80 tracking-[0.4em] uppercase block mb-3 font-semibold">
              Phase IV // The Artistic Creed
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-light tracking-tight text-zinc-100 uppercase select-none">
              The <span className="italic font-normal text-amber-500/90">Philosophy</span>
            </h2>
            <div className="w-16 h-[1px] bg-white/10 mx-auto mt-4" />
          </motion.div>
        </div>

        {/* Editorial Layout: Author Quote on Left, Pillars on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Author/Director's Creed Panel */}
          <div className="lg:col-span-5 bg-white/[0.02] border border-white/5 p-8 rounded-none relative">
            {/* Background glowing sphere */}
            <div className="absolute -left-16 -top-16 w-48 h-48 bg-amber-500/3 rounded-full blur-3xl" />
            
            <Quote className="w-10 h-10 text-amber-500/15 mb-6" />

            <p className="font-display text-lg md:text-xl italic text-zinc-350 leading-relaxed font-light tracking-wide mb-8">
              "We must learn to look at shadows not as the absence of light, but as the presence of possibility. The Rendlesham Series was born in the quiet hours under Suffolk's winter sky—a story that honors the silence before the signal."
            </p>

            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-none bg-white/5 border border-white/10 flex items-center justify-center font-display text-sm text-zinc-400 font-bold">
                EV
              </div>
              <div>
                <h4 className="font-display text-sm font-light tracking-widest text-zinc-200">
                  EVELYN VANCE
                </h4>
                <span className="font-mono text-[10px] text-zinc-600 block uppercase">
                  Creator & Lead Author
                </span>
              </div>
            </div>
          </div>

          {/* Pillars List on Right */}
          <div className="lg:col-span-7 space-y-8">
            {pillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, delay: idx * 0.15 }}
                  className="group flex flex-col sm:flex-row gap-6 p-6 bg-white/[0.01] border border-white/5 rounded-none hover:border-white/10 transition-all duration-300"
                >
                  <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-none bg-white/5 border border-white/10 text-zinc-400 group-hover:text-amber-500 group-hover:border-amber-500/40 transition-all duration-500">
                    <Icon className="w-5 h-5" />
                  </div>

                  <div className="space-y-1.5">
                    <div className="flex items-baseline gap-3">
                      <span className="font-mono text-xs text-zinc-600">0{idx + 1}</span>
                      <h3 className="font-display text-base font-light text-zinc-200 tracking-wider">
                        {pillar.title}
                      </h3>
                      <span className="text-zinc-700">|</span>
                      <span className="font-sans text-xs text-zinc-500 italic font-light">
                        {pillar.subtitle}
                      </span>
                    </div>
                    <p className="font-sans text-xs md:text-sm text-white/50 font-light leading-relaxed tracking-wide">
                      {pillar.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>

        {/* Ambient speculative landscape callout */}
        <div className="mt-24 bg-gradient-to-r from-white/[0.01] via-white/[0.02] to-white/[0.01] border border-white/5 p-8 md:p-12 rounded-none text-center relative overflow-hidden">
          {/* Subtle star or constellation elements */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(245,158,11,0.01)_0%,transparent_80%)]" />
          
          <h3 className="font-display text-xl md:text-2xl font-light tracking-[0.2em] text-zinc-200 uppercase mb-4">
            Contemplating the Void
          </h3>
          <p className="font-sans text-xs md:text-sm text-white/50 max-w-2xl mx-auto leading-relaxed font-light tracking-wide">
            "The series does not look outward with fear, but inward with imagination. We seek to capture that precise moment of celestial geometry when ancient earth and deep sky resolve their ancient, silent dialogue."
          </p>
          <div className="font-mono text-[9px] text-zinc-650 mt-4 uppercase tracking-[0.3em] opacity-80">
            SYSTEM SYNC CONFIRMED // OBSERVATORY ACTIVE
          </div>
        </div>

      </div>
    </section>
  );
}
