import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { LoreFragment, LORE_FRAGMENTS } from "../types";
import { Lock, Unlock, RefreshCw, Cpu, Activity, Globe } from "lucide-react";

export default function MysteryCodex() {
  const [activeTab, setActiveTab] = useState<"transcripts" | "decoder" | "alignments">("transcripts");
  
  // Log decrypt states
  const [decryptedWords, setDecryptedWords] = useState<Record<string, boolean>>({});
  
  // Binary decoder state
  const targetMessage = "SUFFOLK EAST GATE COORDS: 52.0917N, 1.4389E";
  const [hoveredBinaryIndexes, setHoveredBinaryIndexes] = useState<number[]>([]);
  
  // Alignment coordinates state
  const [selectedSite, setSelectedSite] = useState<string>("rendlesham");
  const alignmentSites = [
    { id: "rendlesham", name: "Rendlesham Forest (UK)", lat: "52.0917° N", lng: "1.4389° E", artifact: "Triangular Metallic Vessel", energySignature: "4.2 mR/hr", history: "Original encounter site at East Gate. Fused soil, magnetic anomalies, and cerebral download events." },
    { id: "giza", name: "Great Pyramid of Giza (Egypt)", lat: "29.9792° N", lng: "31.1342° E", artifact: "Subterranean Granite Chamber", energySignature: "2.1 mR/hr", history: "Anomalous subterranean chambers aligned precisely with the belt of Orion. Acts as a passive resonator to the incoming frequency." },
    { id: "parnassus", name: "Parnassus Peak (Greece)", lat: "38.2572° N", lng: "22.4439° E", artifact: "Mountaintop Deep-Space Receiver", energySignature: "6.8 mR/hr", history: "Peak-altitude observatory that captured the final mathematical sequence. Corresponds to Book 3's final synchronization event." },
    { id: "teotihuacan", name: "Pyramid of the Sun (Mexico)", lat: "19.6925° N", lng: "-98.8438° E", artifact: "Obsidian Core Foundation", energySignature: "1.9 mR/hr", history: "Deep basalt core resonance detected under the avenue of the dead. Vibrates at a sympathetic 0.00 Hz frequency." }
  ];

  const handleRevealWord = (wordId: string) => {
    setDecryptedWords(prev => ({
      ...prev,
      [wordId]: true
    }));
  };

  const handleResetDecryption = () => {
    setDecryptedWords({});
  };

  return (
    <section 
      id="codex-section" 
      className="relative py-24 px-4 bg-[#050505] border-t border-white/5 overflow-hidden"
    >
      {/* Background visual detail */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,rgba(245,158,11,0.015)_0%,transparent_70%)]" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Phase Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <span className="font-mono text-xs text-amber-500/80 tracking-[0.4em] uppercase block mb-3 font-semibold">
              Phase III // Interactive Archive
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-light tracking-tight text-zinc-100 uppercase select-none">
              The <span className="italic font-normal text-amber-500/90">Mystery Codex</span>
            </h2>
            <div className="w-16 h-[1px] bg-white/10 mx-auto mt-4" />
            <p className="font-sans text-xs md:text-sm text-zinc-500 max-w-lg mx-auto mt-4 font-light tracking-wide">
              Uncover intelligence fragments from the universe of the novels. Interact with each panel to decode raw data.
            </p>
          </motion.div>
        </div>

        {/* Tab Selection */}
        <div className="flex justify-center border-b border-white/5 mb-12">
          <div className="flex space-x-2 md:space-x-8">
            {[
              { id: "transcripts", label: "Declassified Log Transcripts", icon: Lock },
              { id: "decoder", label: "Binary Frequency Decoder", icon: Cpu },
              { id: "alignments", label: "Global Monumental Alignments", icon: Globe }
            ].map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`flex items-center gap-2 px-3 md:px-6 py-4 font-mono text-[10px] md:text-xs uppercase tracking-widest border-b-2 transition-all duration-300 cursor-pointer ${
                    isActive 
                      ? "border-amber-500/80 text-amber-500/90" 
                      : "border-transparent text-zinc-500 hover:text-zinc-300"
                  }`}
                  id={`codex-tab-${tab.id}`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span className="hidden sm:inline">{tab.label}</span>
                  <span className="sm:hidden">{tab.id === "transcripts" ? "Transcripts" : tab.id === "decoder" ? "Decoder" : "Alignments"}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Tab Contents */}
        <div className="min-h-[450px]">
          <AnimatePresence mode="wait">
            
            {/* TAB 1: LOG TRANSCRIPTS */}
            {activeTab === "transcripts" && (
              <motion.div
                key="transcripts-tab"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.5 }}
                className="space-y-8"
              >
                <div className="flex justify-between items-center pb-4 border-b border-white/5">
                  <p className="font-sans text-xs text-zinc-500 italic">
                    Instructions: Some critical keywords have been redacted. Click on black bars to decrypt them.
                  </p>
                  <button
                    onClick={handleResetDecryption}
                    className="flex items-center gap-1.5 font-mono text-[10px] text-zinc-400 hover:text-amber-500/80 transition-colors bg-white/5 border border-white/10 px-3 py-1.5 rounded-none cursor-pointer"
                    id="reset-decrypt-btn"
                  >
                    <RefreshCw className="w-3 h-3 text-amber-500/70" />
                    <span>Re-redact files</span>
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {LORE_FRAGMENTS.map((fragment, idx) => {
                    return (
                      <div 
                        key={fragment.id} 
                        className="bg-white/[0.02] border border-white/5 p-6 rounded-none flex flex-col justify-between relative"
                      >
                        {/* Decorative watermark */}
                        <div className="absolute right-3 top-3 font-mono text-[9px] text-zinc-800 select-none opacity-50">
                          REF# 0{idx + 1}
                        </div>

                        <div>
                          <div className="font-mono text-[9px] text-zinc-500 mb-2 uppercase">
                            {fragment.date} // {fragment.classification}
                          </div>
                          <h4 className="font-display text-sm font-light text-zinc-300 tracking-wider mb-4 border-b border-white/5 pb-2">
                            {fragment.title}
                          </h4>
                          
                          {/* Rich Interactive Redacted Text rendering */}
                          <p className="font-sans text-xs text-zinc-400 leading-relaxed font-light tracking-wide">
                            {fragment.content.split(" ").map((word, wIdx) => {
                              // Clean punctuation from word to match redacted words correctly
                              const cleanWord = word.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");
                              const isRedacted = fragment.redactedWords.some(r => r.toLowerCase().includes(cleanWord.toLowerCase()) || cleanWord.toLowerCase().includes(r.toLowerCase())) && cleanWord.length > 2;

                              if (isRedacted) {
                                const wordId = `${fragment.id}-${cleanWord}-${wIdx}`;
                                const isRevealed = decryptedWords[wordId];

                                if (isRevealed) {
                                  return (
                                    <span 
                                      key={wIdx} 
                                      className="inline bg-amber-950/30 text-amber-500 border-b border-amber-500/50 px-1 font-mono font-medium animate-pulse"
                                    >
                                      {word}{" "}
                                    </span>
                                  );
                                } else {
                                  return (
                                    <span
                                      key={wIdx}
                                      onClick={() => handleRevealWord(wordId)}
                                      className="inline bg-white/5 hover:bg-white/10 text-transparent border-b border-white/10 rounded-none select-none cursor-pointer px-2 mx-0.5 relative group"
                                      title="Decrypt fragment"
                                    >
                                      xxxx
                                      <span className="absolute inset-0 flex items-center justify-center text-[8px] font-mono text-zinc-600 group-hover:text-zinc-400">
                                        ?
                                      </span>
                                      {" "}
                                    </span>
                                  );
                                }
                              }
                              return word + " ";
                            })}
                          </p>
                        </div>

                        <div className="mt-6 pt-4 border-t border-white/5 flex items-center gap-2 font-mono text-[9px] text-zinc-600 uppercase">
                          <Unlock className="w-3 h-3 text-zinc-700" />
                          <span>
                            Decrypted: {
                              Object.keys(decryptedWords).filter(k => k.startsWith(fragment.id)).length
                            } / {fragment.redactedWords.length}
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            )}

            {/* TAB 2: BINARY DECODER */}
            {activeTab === "decoder" && (
              <motion.div
                key="decoder-tab"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.5 }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
              >
                {/* Decoder matrix column */}
                <div className="lg:col-span-7 bg-white/[0.01] border border-white/5 p-6 md:p-8 rounded-none">
                  <div className="flex justify-between items-center mb-6 border-b border-white/5 pb-3">
                    <div className="flex items-center gap-2 font-mono text-xs text-amber-500/80 font-semibold">
                      <Activity className="w-4 h-4 text-amber-500 animate-pulse" />
                      <span>LIVE SIGNAL MODULATOR</span>
                    </div>
                    <span className="font-mono text-[10px] text-zinc-600">MODULATION: 1420.405 MHZ</span>
                  </div>

                  {/* Interactive Binary Matrix */}
                  <div className="grid grid-cols-8 sm:grid-cols-12 gap-2 max-w-lg mx-auto">
                    {Array.from({ length: 96 }).map((_, idx) => {
                      const isHovered = hoveredBinaryIndexes.includes(idx);
                      // Generate standard random binary stream
                      const binaryValue = isHovered 
                      ? (targetMessage[idx % targetMessage.length] === " " ? " " : "1")
                      : (idx % 2 === 0 ? "0" : "1");

                      return (
                        <div
                          key={idx}
                          onMouseEnter={() => {
                            if (!hoveredBinaryIndexes.includes(idx)) {
                              setHoveredBinaryIndexes(prev => [...prev, idx]);
                            }
                          }}
                          className={`aspect-square flex items-center justify-center font-mono text-xs sm:text-sm rounded-none border cursor-crosshair transition-all duration-300 select-none ${
                            isHovered
                              ? "bg-amber-950/20 border-amber-500/40 text-amber-500 font-bold scale-105 shadow-[0_0_15px_rgba(245,158,11,0.06)]"
                              : "bg-black/30 border-white/5 text-zinc-700 hover:border-white/10"
                          }`}
                          id={`binary-cell-${idx}`}
                        >
                          {binaryValue}
                        </div>
                      );
                    })}
                  </div>

                  <div className="mt-6 text-center">
                    <button
                      onClick={() => setHoveredBinaryIndexes([])}
                      className="px-4 py-2 border border-white/10 text-[10px] uppercase font-mono tracking-widest hover:border-amber-500/30 text-zinc-400 hover:text-zinc-200 transition-colors bg-white/5 cursor-pointer rounded-none"
                      id="reset-matrix-btn"
                    >
                      Clear Demodulation Memory
                    </button>
                  </div>
                </div>

                {/* Demodulated terminal column */}
                <div className="lg:col-span-5 h-full flex flex-col justify-between space-y-6">
                  <div className="bg-white/[0.01] border border-white/5 rounded-none p-6 font-mono flex-grow relative">
                    <div className="absolute right-4 top-4 w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
                    
                    <h4 className="text-zinc-500 text-xs uppercase tracking-widest mb-4 border-b border-white/5 pb-2">
                      DECODED SIGNAL READOUT
                    </h4>

                    {/* Progress details */}
                    <div className="space-y-4">
                      <div>
                        <span className="text-[10px] text-zinc-600 uppercase block">Bit-stream Decryption Progress</span>
                        <div className="flex items-center gap-3 mt-1">
                          <div className="flex-grow h-2 bg-black/40 border border-white/5 rounded-none overflow-hidden">
                            <div 
                              className="h-full bg-amber-500/70 transition-all duration-300"
                              style={{ width: `${Math.round((hoveredBinaryIndexes.length / 96) * 100)}%` }}
                            />
                          </div>
                          <span className="text-xs text-zinc-400">{Math.round((hoveredBinaryIndexes.length / 96) * 100)}%</span>
                        </div>
                      </div>

                      {/* Transcribed message */}
                      <div className="p-4 bg-black/40 border border-white/5 rounded-none text-xs leading-relaxed min-h-[100px]">
                        <span className="text-[9px] text-zinc-600 uppercase block mb-2">Transcribed Decryption Buffer</span>
                        <span className="text-amber-500/90 font-bold tracking-widest">
                          {Array.from({ length: targetMessage.length }).map((_, charIdx) => {
                            // Map the hover count to revealed characters
                            // If user has swept enough matrix, reveal corresponding letters
                            const factor = 96 / targetMessage.length;
                            const isRevealed = hoveredBinaryIndexes.some(hIdx => Math.floor(hIdx / factor) === charIdx);
                            return isRevealed ? targetMessage[charIdx] : "_";
                          }).join("")}
                        </span>
                      </div>
                    </div>

                    <div className="mt-6 pt-4 border-t border-white/5 text-[10px] text-zinc-500 leading-relaxed">
                      <span className="text-amber-500 block">■ SECURE TELEMETRY CONFIRMED</span>
                      Sweep your cursor across the grid on the left to activate the antenna arrays and demodulate the geodetic coordinates.
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* TAB 3: ALIGNMENT CONNECTOR */}
            {activeTab === "alignments" && (
              <motion.div
                key="alignments-tab"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.5 }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8"
              >
                {/* List of Sites */}
                <div className="lg:col-span-5 space-y-3">
                  {alignmentSites.map((site) => {
                    const isSelected = selectedSite === site.id;
                    return (
                      <div
                        key={site.id}
                        onClick={() => setSelectedSite(site.id)}
                        className={`p-4 border rounded-none cursor-pointer transition-all duration-300 ${
                          isSelected 
                            ? "bg-white/[0.04] border-amber-500/30 shadow-[0_0_15px_rgba(245,158,11,0.04)]" 
                            : "bg-white/[0.01] border-white/5 hover:border-white/10"
                        }`}
                        id={`site-selector-${site.id}`}
                      >
                        <div className="flex justify-between items-center">
                          <span className={`font-mono text-[10px] uppercase ${isSelected ? "text-amber-500/80 font-semibold" : "text-zinc-550"}`}>
                            {site.lat}, {site.lng}
                          </span>
                          <span className={`w-1.5 h-1.5 rounded-full ${isSelected ? "bg-amber-500 animate-pulse" : "bg-zinc-850"}`} />
                        </div>
                        <h4 className="font-display text-sm font-light text-zinc-300 tracking-wide mt-1.5">
                          {site.name}
                        </h4>
                      </div>
                    );
                  })}
                </div>

                {/* Site Radar Alignment Projection */}
                <div className="lg:col-span-7 bg-white/[0.01] border border-white/5 p-6 md:p-8 rounded-none flex flex-col justify-between h-full min-h-[380px]">
                  
                  {/* Visual Coordinate Alignment Graphic */}
                  <div className="relative h-44 bg-black/40 border border-white/5 rounded-none flex items-center justify-center overflow-hidden">
                    {/* Concentric radar circles */}
                    <div className="absolute w-40 h-40 border border-white/5 rounded-full" />
                    <div className="absolute w-28 h-28 border border-white/5 rounded-full" />
                    <div className="absolute w-14 h-14 border border-white/5 rounded-full animate-pulse" />
                    
                    {/* Polar crosshair lines */}
                    <div className="absolute w-full h-[1px] bg-white/5" />
                    <div className="absolute h-full w-[1px] bg-white/5" />

                    {/* Plot coordinates lines linking to the center */}
                    <svg className="absolute inset-0 w-full h-full pointer-events-none">
                      {alignmentSites.map((site, idx) => {
                        const isCurrent = site.id === selectedSite;
                        // Calculate some deterministic coordinates positions
                        const angle = (idx * 2 * Math.PI) / alignmentSites.length;
                        const radius = isCurrent ? 55 : 45;
                        const cx = 150 + Math.cos(angle) * radius;
                        const cy = 88 + Math.sin(angle) * radius;

                        return (
                          <g key={site.id}>
                            {/* Line to center */}
                            <line 
                              x1="50%" 
                              y1="50%" 
                              x2={`${cx}`} 
                              y2={`${cy}`} 
                              stroke={isCurrent ? "#f59e0b" : "#27272a"} 
                              strokeWidth={isCurrent ? "1" : "0.5"}
                              strokeDasharray={isCurrent ? "0" : "2 2"}
                            />
                            {/* Pulse dot */}
                            <circle 
                              cx={`${cx}`} 
                              cy={`${cy}`} 
                              r={isCurrent ? "4" : "2"} 
                              fill={isCurrent ? "#f59e0b" : "#52525b"}
                              className={isCurrent ? "animate-pulse" : ""}
                            />
                          </g>
                        );
                      })}
                    </svg>

                    <div className="absolute top-3 left-3 font-mono text-[9px] text-zinc-600">
                      SYS ALIGNMENT INDEX: G-902
                    </div>
                  </div>

                  {/* Site Geodetic Details */}
                  {(() => {
                    const site = alignmentSites.find(s => s.id === selectedSite)!;
                    return (
                      <div className="mt-6 space-y-4">
                        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2 border-b border-white/5 pb-3">
                          <h4 className="font-display text-base font-light text-zinc-200 tracking-wider">
                            {site.name}
                          </h4>
                          <span className="font-mono text-[10px] text-amber-500/80 bg-amber-950/20 border border-amber-500/20 px-2 py-0.5 rounded-none font-semibold">
                            ANOMALOUS ENERGY: {site.energySignature}
                          </span>
                        </div>
                        
                        <p className="font-sans text-xs text-white/50 font-light leading-relaxed">
                          {site.history}
                        </p>

                        <div className="grid grid-cols-2 gap-4 pt-2 text-[10px] font-mono text-zinc-500">
                          <div>
                            <span className="text-zinc-600 block uppercase">Associated Artifact</span>
                            <span className="text-zinc-300 block">{site.artifact}</span>
                          </div>
                          <div>
                            <span className="text-zinc-600 block uppercase">Azimuth Position</span>
                            <span className="text-zinc-300 block">Aligned to Orion Spur</span>
                          </div>
                        </div>
                      </div>
                    );
                  })()}

                </div>
              </motion.div>
            )}

          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
