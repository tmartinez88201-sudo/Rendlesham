import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Mail, Check, CreditCard, Radio, Shield, HelpCircle, FileText, X } from "lucide-react";

export default function CTASection() {
  // Subscription state
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [subscribing, setSubscribing] = useState(false);

  // Checkout modal state
  const [checkoutProduct, setCheckoutProduct] = useState<{
    title: string;
    format: string;
    price: string;
    deliverable: string;
  } | null>(null);

  const [checkoutComplete, setCheckoutComplete] = useState(false);
  const [checkoutForm, setCheckoutForm] = useState({ name: "", city: "" });

  const products = [
    {
      id: "hardcover",
      title: "The Rendlesham Trilogy",
      format: "Collector's Hardcover",
      price: "$75.00",
      description: "Three linen-bound hardcovers featuring custom metallic foil stamping, signed bookplates by Evelyn Vance, and high-density maps of the Suffolk and Giza grids.",
      deliverable: "Ships Autumn 2026",
      accent: "border-blue-900/50 hover:border-blue-500/50"
    },
    {
      id: "digital",
      title: "The Rendlesham Series",
      format: "Digital Folio Suite",
      price: "$24.99",
      description: "Immediate delivery of ePUB, PDF, and Mobi formats for Book 1 on release day, along with downloadable high-res vector scans of the decrypted binary code sheet.",
      deliverable: "Delivered instantly upon release",
      accent: "border-emerald-900/50 hover:border-emerald-500/50"
    },
    {
      id: "audiobook",
      title: "Atmospheric Audiobook",
      format: "High-Fidelity Audio Series",
      price: "$34.99",
      description: "A fully scored narrative recording. Features cinematic spatial audio design, natural forest background drones, and a sweeping atmospheric synth soundtrack.",
      deliverable: "Delivered via secure link Autumn 2026",
      accent: "border-amber-900/50 hover:border-amber-500/50"
    }
  ];

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setSubscribing(true);
    setTimeout(() => {
      setSubscribing(false);
      setSubscribed(true);
    }, 1200);
  };

  const handleSimulateCheckout = (e: React.FormEvent) => {
    e.preventDefault();
    if (!checkoutForm.name || !checkoutForm.city) return;

    setCheckoutComplete(true);
  };

  const closeCheckout = () => {
    setCheckoutProduct(null);
    setCheckoutComplete(false);
    setCheckoutForm({ name: "", city: "" });
  };

  return (
    <section 
      id="cta-section" 
      className="relative py-24 px-4 bg-[#050505] border-t border-white/5 overflow-hidden"
    >
      {/* Background visual gradients */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_top_right,rgba(245,158,11,0.015)_0%,transparent_60%)]" />

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
              Phase V // Acquisition Protocol
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-light tracking-tight text-zinc-100 uppercase select-none">
              Secure the <span className="italic font-normal text-amber-500/90">Collection</span>
            </h2>
            <div className="w-16 h-[1px] bg-white/10 mx-auto mt-4" />
            <p className="font-sans text-xs md:text-sm text-zinc-500 max-w-lg mx-auto mt-4 font-light tracking-wide">
              Complete your descent into the mystery. Select your literary format below, or join the intelligence net for exclusive updates.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
          
          {/* LEFT PANEL: FORMAT ACQUISITION SELECTION */}
          <div className="lg:col-span-8 space-y-6">
            <h3 className="font-display text-lg font-light tracking-widest text-zinc-350 uppercase mb-4 flex items-center gap-2">
              <Shield className="w-4 h-4 text-amber-500/80" />
              <span>Available Formats for Pre-order</span>
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {products.map((p) => (
                <div 
                  key={p.id}
                  className="bg-white/[0.01] hover:bg-white/[0.02] border border-white/5 hover:border-amber-500/20 p-6 flex flex-col justify-between transition-all duration-300 cursor-pointer rounded-none"
                  onClick={() => setCheckoutProduct(p)}
                  id={`product-card-${p.id}`}
                >
                  <div>
                    <span className="font-mono text-[9px] text-zinc-500 uppercase block mb-1">
                      {p.format}
                    </span>
                    <h4 className="font-display text-sm font-light text-zinc-200 tracking-wide mb-3">
                      {p.title}
                    </h4>
                    <p className="font-sans text-xs text-white/50 font-light leading-relaxed mb-4 line-clamp-4">
                      {p.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-white/5 mt-4 flex justify-between items-center">
                    <div>
                      <span className="font-mono text-xs text-zinc-200 font-bold block">{p.price}</span>
                      <span className="font-sans text-[9px] text-zinc-500 block italic">{p.deliverable}</span>
                    </div>
                    <button
                      className="px-3 py-1.5 bg-white/5 hover:bg-white/10 text-zinc-300 font-mono text-[9px] uppercase tracking-wider rounded-none border border-white/10 transition-colors"
                    >
                      Authorize
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT PANEL: INTELLIGENCE NET SIGN-UP */}
          <div className="lg:col-span-4 bg-white/[0.02] border border-white/5 p-6 md:p-8 rounded-none">
            <h3 className="font-display text-base font-light tracking-wider text-zinc-300 uppercase mb-3 flex items-center gap-2">
              <Radio className="w-4 h-4 text-amber-500/80 animate-pulse" />
              <span>The Intelligence Net</span>
            </h3>
            <p className="font-sans text-xs text-white/50 font-light leading-relaxed mb-6">
              Establish a secure coordinate. Subscribing transmits classified chapters, spatial map files, and coordinates directly to your terminal.
            </p>

            <AnimatePresence mode="wait">
              {!subscribed ? (
                <motion.form 
                  key="sub-form"
                  onSubmit={handleSubscribe} 
                  className="space-y-4"
                  id="sub-email-form"
                >
                  <div className="relative">
                    <Mail className="absolute left-3 top-3.5 w-4 h-4 text-zinc-600" />
                    <input
                      type="email"
                      required
                      placeholder="ENTER TERMINAL EMAIL..."
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full bg-black/40 border border-white/5 rounded-none py-2.5 pl-10 pr-4 text-xs font-mono text-zinc-350 placeholder-zinc-700 focus:outline-none focus:border-amber-500/50 transition-colors"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={subscribing}
                    className="w-full py-3 bg-white hover:bg-zinc-200 text-black font-sans text-xs font-semibold uppercase tracking-[0.2em] rounded-none transition-all duration-300 cursor-pointer flex items-center justify-center gap-2 border border-white"
                  >
                    {subscribing ? "ESTABLISHING LINK..." : "Join the Linked Net"}
                  </button>
                </motion.form>
              ) : (
                <motion.div
                  key="sub-success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-amber-950/10 border border-amber-500/20 p-4 rounded-none text-center space-y-3"
                  id="sub-success-message"
                >
                  <div className="w-8 h-8 rounded-none bg-amber-950/60 border border-amber-500/40 flex items-center justify-center mx-auto">
                    <Check className="w-4 h-4 text-amber-500" />
                  </div>
                  <h4 className="font-mono text-xs text-amber-500/80 font-semibold uppercase tracking-wider">
                    TRANSMISSION ACCOMPLISHED
                  </h4>
                  <p className="font-sans text-[11px] text-zinc-400 leading-relaxed font-light">
                    Your terminal coordinate is locked in. The declassification portfolio has been dispatched to <strong className="text-zinc-300 font-mono font-normal">{email}</strong>.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>

            <div className="mt-6 pt-4 border-t border-white/5 text-[9px] font-mono text-zinc-650 space-y-1">
              <span>■ NETWORK ENCRYPTION: SECURE</span>
              <span className="block">■ DISPATCH STATUS: ACTIVE CODES</span>
            </div>
          </div>

        </div>

        {/* SECURE CHECKOUT SIMULATOR MODAL OVERLAY */}
        <AnimatePresence>
          {checkoutProduct && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md">
              <motion.div
                initial={{ opacity: 0, scale: 0.92, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.92, y: 10 }}
                className="bg-[#060608] border border-white/10 max-w-md w-full rounded-none p-6 md:p-8 relative overflow-hidden"
                id="checkout-modal"
              >
                {/* Background ambient lighting in modal */}
                <div className="absolute right-0 top-0 w-32 h-32 bg-amber-500/3 rounded-full blur-2xl pointer-events-none" />

                <button
                  onClick={closeCheckout}
                  className="absolute top-4 right-4 text-zinc-500 hover:text-zinc-300 transition-colors p-1"
                >
                  <X className="w-4 h-4" />
                </button>

                <AnimatePresence mode="wait">
                  {!checkoutComplete ? (
                    <motion.div key="form" className="space-y-6">
                      <div>
                        <span className="font-mono text-[10px] text-zinc-500 uppercase block tracking-wider mb-1">
                          Secure Authorization Protocol
                        </span>
                        <h4 className="font-display text-lg font-light text-zinc-200 uppercase tracking-wide">
                          {checkoutProduct.format}
                        </h4>
                        <p className="font-sans text-xs text-white/50 mt-1 font-light">
                          You are authorizing a pre-order of <span className="text-zinc-200">{checkoutProduct.title}</span> ({checkoutProduct.price}).
                        </p>
                      </div>

                      <form onSubmit={handleSimulateCheckout} className="space-y-4">
                        <div className="space-y-1">
                          <label className="font-mono text-[10px] text-zinc-500 block uppercase">Authorized Name</label>
                          <input
                            type="text"
                            required
                            placeholder="John Doe"
                            value={checkoutForm.name}
                            onChange={(e) => setCheckoutForm(prev => ({ ...prev, name: e.target.value }))}
                            className="w-full bg-black border border-white/5 rounded-none py-2 px-3 text-xs text-zinc-300 placeholder-zinc-700 focus:outline-none focus:border-amber-500/50"
                          />
                        </div>

                        <div className="space-y-1">
                          <label className="font-mono text-[10px] text-zinc-500 block uppercase">Destination City / Sector</label>
                          <input
                            type="text"
                            required
                            placeholder="Suffolk / London / New York"
                            value={checkoutForm.city}
                            onChange={(e) => setCheckoutForm(prev => ({ ...prev, city: e.target.value }))}
                            className="w-full bg-black border border-white/5 rounded-none py-2 px-3 text-xs text-zinc-300 placeholder-zinc-700 focus:outline-none focus:border-amber-500/50"
                          />
                        </div>

                        <div className="bg-black border border-white/5 p-3 rounded-none text-[10px] font-mono text-zinc-500 space-y-1">
                          <div className="flex justify-between">
                            <span>RECONSTRUCTION LEVY</span>
                            <span className="text-zinc-400">INCLUDED</span>
                          </div>
                          <div className="flex justify-between font-bold text-zinc-300 border-t border-white/5 pt-1.5">
                            <span>TOTAL AUTH VALUE</span>
                            <span>{checkoutProduct.price}</span>
                          </div>
                        </div>

                        <button
                          type="submit"
                          className="w-full py-3 bg-white hover:bg-zinc-200 text-black font-sans text-xs font-semibold uppercase tracking-[0.2em] rounded-none transition-all duration-300 cursor-pointer flex items-center justify-center gap-2 border border-white"
                        >
                          <CreditCard className="w-3.5 h-3.5" />
                          <span>Simulate Purchase Auth</span>
                        </button>
                      </form>
                    </motion.div>
                  ) : (
                    <motion.div 
                      key="success"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="space-y-6 text-center py-4"
                    >
                      <div className="w-12 h-12 rounded-none bg-amber-950/50 border border-amber-500/40 flex items-center justify-center mx-auto text-amber-500/80 animate-pulse">
                        <Check className="w-6 h-6" />
                      </div>

                      <div className="space-y-2">
                        <h4 className="font-mono text-xs text-amber-500/80 font-bold uppercase tracking-wider">
                          AUTHORIZATION GRANTED // SECTOR ASSIGNED
                        </h4>
                        <p className="font-sans text-xs text-white/50 font-light leading-relaxed">
                          Welcome to the dossier database, <strong className="text-zinc-200">{checkoutForm.name}</strong> of <strong className="text-zinc-200">{checkoutForm.city}</strong>. Your pre-order has been registered with simulated credentials.
                        </p>
                      </div>

                      <div className="bg-black border border-white/5 p-4 rounded-none text-left font-mono text-[9px] text-zinc-500 space-y-1">
                        <div>■ TRANSACT ID: TX-{Math.floor(100000 + Math.random() * 900000)}</div>
                        <div>■ TARGET ITEM: {checkoutProduct.title} ({checkoutProduct.format})</div>
                        <div>■ METRIC SHIP DATE: {checkoutProduct.deliverable}</div>
                        <div className="text-amber-500">■ ENVELOPE: PENDING ANOMALOUS DECLASSIFICATION</div>
                      </div>

                      <button
                        onClick={closeCheckout}
                        className="px-6 py-2 border border-white/10 text-xs font-mono uppercase hover:border-white/20 text-zinc-400 hover:text-zinc-200 bg-white/5 transition-colors rounded-none w-full cursor-pointer"
                      >
                        Return to Dossier
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>

              </motion.div>
            </div>
          )}
        </AnimatePresence>

        {/* Footer info */}
        <div className="border-t border-white/5 pt-8 text-center text-zinc-600 font-mono text-[10px] tracking-widest uppercase">
          <p>© 2026 THE RENDLESHAM SERIES AUTHOR CLIQUE. ALL ENCRYPTION PROTECTED.</p>
          <p className="mt-1 text-zinc-700">INSPIRATION ENTIRELY FICTIONAL, DRAWN FROM THE MYSTERIES OF THE COSMIC UNKNOWN.</p>
        </div>

      </div>
    </section>
  );
}
