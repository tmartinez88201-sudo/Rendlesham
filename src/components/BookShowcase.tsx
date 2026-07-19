import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Book, BOOKS_DATA } from "../types";
import { BookOpen, Calendar, MapPin, Layers, ChevronRight, FileText, ShoppingCart } from "lucide-react";

export default function BookShowcase() {
  const [selectedBookId, setSelectedBookId] = useState<string>(BOOKS_DATA[0].id);
  const [showExcerpt, setShowExcerpt] = useState<boolean>(false);

  const currentBook = BOOKS_DATA.find((b) => b.id === selectedBookId) || BOOKS_DATA[0];

  const handleBookSelect = (id: string) => {
    setSelectedBookId(id);
    setShowExcerpt(false); // Reset excerpt when switching books
  };

  return (
    <section 
      id="trilogy-section" 
      className="relative py-24 px-4 bg-[#050505] border-t border-white/5 overflow-hidden"
    >
      {/* Decorative vertical coordinates overlay on side margins */}
      <div className="absolute top-1/4 left-4 font-mono text-[9px] text-zinc-700 writing-mode-vertical uppercase tracking-[0.4em] hidden xl:block select-none opacity-40">
        VOL I: R.F. INCIDENT // AZIMUTH 112° // ELEV 24m
      </div>
      <div className="absolute top-1/3 right-4 font-mono text-[9px] text-zinc-700 writing-mode-vertical uppercase tracking-[0.4em] hidden xl:block select-none opacity-40">
        VOL II: DECRYPT SIGNAL // FREQ 1420.405 MHZ // ORION SPUR
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Phase Header */}
        <div className="text-center mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <span className="font-mono text-xs text-amber-500/80 tracking-[0.4em] uppercase block mb-3 font-semibold">
              Phase II // The Chronicle
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-light tracking-tight text-zinc-100 uppercase select-none">
              The <span className="italic font-normal text-amber-500/90">Trilogy</span>
            </h2>
            <div className="w-16 h-[1px] bg-white/10 mx-auto mt-4" />
            <p className="font-sans text-xs md:text-sm text-zinc-500 max-w-lg mx-auto mt-4 font-light tracking-wide">
              Select a volume below to examine its files, spatial alignments, and declassified summaries.
            </p>
          </motion.div>
        </div>

        {/* 3-Book Visual Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 xl:gap-12 mb-16">
          {BOOKS_DATA.map((book) => {
            const isSelected = book.id === selectedBookId;
            return (
              <motion.div
                key={book.id}
                whileHover={{ y: -8 }}
                onClick={() => handleBookSelect(book.id)}
                className={`group relative bg-white/[0.02] border rounded-none p-6 cursor-pointer transition-all duration-300 ${
                  isSelected 
                    ? "border-amber-500/30 bg-white/[0.04] shadow-[0_0_25px_rgba(245,158,11,0.06)]" 
                    : "border-white/5 hover:border-white/10"
                }`}
                id={`book-card-${book.id}`}
              >
                {/* Book Index Marker */}
                <div className="flex justify-between items-center mb-4 font-mono text-[10px] text-zinc-600">
                  <span>VOLUME 0{book.volume}</span>
                  <span className={`px-2 py-0.5 rounded-none bg-white/5 border ${
                    isSelected ? "border-amber-500/30 text-amber-500/80" : "border-white/5 text-zinc-500"
                  }`}>
                    {book.classification}
                  </span>
                </div>

                {/* Cover Image Container */}
                <div className="relative aspect-[3/4] w-full bg-[#08080a] mb-6 overflow-hidden border border-white/5 rounded-none group-hover:border-white/10 transition-colors duration-300">
                  <img
                    src={book.coverImage}
                    alt={book.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Subtle hover gradient glow */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-40 group-hover:opacity-25 transition-opacity duration-300 pointer-events-none" />
                </div>

                {/* Cover Details */}
                <h3 className="font-display text-lg font-light text-zinc-200 tracking-wider group-hover:text-zinc-100 transition-colors duration-300">
                  {book.title}
                </h3>
                <p className="font-sans text-xs text-zinc-500 mt-1 line-clamp-1 italic font-light">
                  {book.subtitle}
                </p>

                {/* Interactive State Bar */}
                <div className="mt-4 pt-4 border-t border-white/5 flex justify-between items-center">
                  <span className="font-mono text-[10px] text-zinc-600 uppercase">
                    Status: {isSelected ? "ACTIVE DECLASSIFIED" : "RESTRICTED"}
                  </span>
                  <div className={`w-2 h-2 rounded-full ${
                    isSelected 
                      ? "bg-amber-500 animate-pulse" 
                      : "bg-zinc-850"
                  }`} />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Selected Book Dossier Display */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedBookId}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.6 }}
            className="bg-white/[0.02] border border-white/5 rounded-none p-6 md:p-10 relative overflow-hidden"
            id="book-dossier-panel"
          >
            {/* Visual background lights representing the specific volume themes */}
            <div 
              className="absolute -right-32 -bottom-32 w-80 h-80 rounded-full blur-[100px] opacity-10 pointer-events-none transition-colors duration-500"
              style={{ backgroundColor: currentBook.accentHex }}
            />

            {/* Dossier Header */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b border-white/5 pb-6 mb-8">
              <div>
                <span className="font-mono text-xs text-zinc-500 uppercase tracking-widest block mb-1">
                  Reconstruction dossier // Vol. 0{currentBook.volume}
                </span>
                <h3 className="font-display text-2xl md:text-3xl font-light tracking-wider text-zinc-100 uppercase">
                  {currentBook.title}
                </h3>
              </div>
              
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs text-zinc-400 bg-white/5 px-3 py-1.5 border border-white/5 rounded-none">
                  Release: {currentBook.releaseDate}
                </span>
              </div>
            </div>

            {/* Dossier Core Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12">
              
              {/* Left Column: Synopsis & Themes */}
              <div className="lg:col-span-7 space-y-6">
                <div>
                  <h4 className="font-mono text-xs text-amber-500/80 uppercase tracking-widest mb-3 flex items-center gap-2 font-semibold">
                    <FileText className="w-3.5 h-3.5" />
                    <span>Synopsis Summary</span>
                  </h4>
                  <p className="font-sans text-sm md:text-base text-white/60 font-light leading-relaxed tracking-wide">
                    {currentBook.synopsis}
                  </p>
                </div>

                {/* Key Themes Tags */}
                <div>
                  <h4 className="font-mono text-xs text-zinc-500 uppercase tracking-widest mb-3 flex items-center gap-2">
                    <Layers className="w-3.5 h-3.5 text-zinc-500" />
                    <span>Subject Classification Markers</span>
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {currentBook.keyThemes.map((theme, i) => (
                      <span 
                        key={i}
                        className="font-mono text-[10px] text-zinc-300 bg-white/5 px-3 py-1 border border-white/5 rounded-none"
                      >
                        {theme}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Excerpt Toggle Button */}
                <div className="pt-4">
                  <button
                    onClick={() => setShowExcerpt(!showExcerpt)}
                    className="px-6 py-2.5 bg-white/5 hover:bg-white/10 border border-white/10 text-zinc-200 hover:text-white font-sans text-xs uppercase tracking-[0.2em] rounded-none transition-all duration-300 flex items-center gap-2.5 cursor-pointer"
                    id="book-excerpt-btn"
                  >
                    <BookOpen className="w-4 h-4 text-amber-500/80" />
                    <span>{showExcerpt ? "Hide Excerpt Folder" : "Request Text Excerpt"}</span>
                  </button>
                </div>
              </div>

              {/* Right Column: Spatial Alignment Metrics */}
              <div className="lg:col-span-5 bg-white/[0.01] border border-white/5 p-6 rounded-none space-y-6">
                <h4 className="font-mono text-xs text-amber-500/80 uppercase tracking-widest pb-3 border-b border-white/5 flex items-center gap-2 font-semibold">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>Geodetic Alignments</span>
                </h4>

                {/* Spatial Geodetic Coordinates */}
                <div className="space-y-4">
                  <div className="bg-black/40 p-3 rounded-none border border-white/5 font-mono">
                    <span className="text-[10px] text-zinc-600 block mb-0.5 uppercase">Primary Coordinate Anchor</span>
                    <span className="text-sm text-zinc-200 font-medium tracking-widest block">{currentBook.coordinates}</span>
                  </div>

                  <div className="bg-black/40 p-3 rounded-none border border-white/5 font-mono">
                    <span className="text-[10px] text-zinc-600 block mb-0.5 uppercase">Decoded Sector</span>
                    <span className="text-sm text-zinc-200 font-medium tracking-widest block">{currentBook.decodedLocation}</span>
                  </div>
                </div>

                {/* Custom Metadata Metrics Bars */}
                <div className="space-y-4 pt-2">
                  <h5 className="font-mono text-[10px] text-zinc-500 uppercase tracking-widest block">Anomaly Telemetry Data</h5>
                  {currentBook.metrics.map((metric, i) => (
                    <div key={i} className="space-y-1">
                      <div className="flex justify-between items-center text-xs font-mono">
                        <span className="text-zinc-500">{metric.label}</span>
                        <span className="text-zinc-300">{metric.value}</span>
                      </div>
                      {/* Decorative progress bars mimicking reading readouts */}
                      <div className="w-full h-1 bg-black/40 rounded-none overflow-hidden border border-white/5">
                        <motion.div 
                          initial={{ width: 0 }}
                          animate={{ width: `${(i === 0 ? 80 : i === 1 ? 40 : 95)}%` }}
                          transition={{ duration: 1.5, ease: "easeOut" }}
                          className="h-full rounded-none"
                          style={{ backgroundColor: `${currentBook.accentHex}66` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Live Excerpt File Dropdown */}
            <AnimatePresence>
              {showExcerpt && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="overflow-hidden mt-8"
                  id="book-excerpt-container"
                >
                  <div className="border-t border-white/5 pt-8 mt-4">
                    <div className="bg-amber-950/10 border border-amber-500/20 p-6 md:p-8 rounded-none relative">
                      {/* Intelligence classification stamps */}
                      <div className="absolute top-4 right-4 text-[10px] md:text-xs font-mono border border-red-950/40 text-red-700/60 font-bold px-3 py-1 rounded-none uppercase rotate-12 tracking-widest">
                        RESTRICTED EXCERPT // DO NOT DISTRIBUTE
                      </div>
                      <div className="flex items-center gap-2 mb-4">
                        <span className="w-2 h-2 rounded-full bg-amber-500" />
                        <span className="font-mono text-xs text-amber-500/80 uppercase tracking-widest font-semibold">TRANSCRIBED PASSAGE</span>
                      </div>
                      <blockquote className="font-display text-base md:text-lg italic text-zinc-300 leading-relaxed max-w-3xl font-light">
                        "{currentBook.excerpt}"
                      </blockquote>
                      <div className="mt-6 font-mono text-[10px] text-zinc-500 flex items-center gap-4">
                        <span>SOURCE ID: {currentBook.classification}</span>
                        <span>|</span>
                        <span>PAGE: {Math.round(currentBook.pages / 2)}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* CTA action in Dossier */}
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mt-12 pt-8 border-t border-white/5">
              <span className="font-sans text-xs text-zinc-500 tracking-wide font-light">
                Secure your physical or digital dossier of {currentBook.title} directly.
              </span>
              <div className="flex items-center gap-3 w-full sm:w-auto">
                <a 
                  href="#cta-section"
                  className="w-full sm:w-auto text-center px-6 py-3 bg-white hover:bg-zinc-200 text-black font-sans text-xs font-semibold uppercase tracking-[0.2em] rounded-none transition-all duration-300 flex items-center justify-center gap-2 border border-white"
                >
                  <ShoppingCart className="w-3.5 h-3.5" />
                  <span>Pre-order Now</span>
                </a>
              </div>
            </div>

          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}
