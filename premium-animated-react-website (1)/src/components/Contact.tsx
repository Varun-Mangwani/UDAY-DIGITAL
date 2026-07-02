import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle,
  Lock,
  Terminal,
  Eye,
  Copy,
  Check
} from "lucide-react";
import { PhpMailerCode } from "./PhpMailerCode";

interface ContactProps {
  prefilledService?: string;
}

export function Contact({ prefilledService = "" }: ContactProps) {
  const [formData, setFormData] = useState({
    name: "",
    businessName: "",
    email: "",
    phone: "",
    serviceInterested: prefilledService || "Website Development",
    message: ""
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [showPhpCode, setShowPhpCode] = useState(false);
  const [copiedCode, setCopiedCode] = useState(false);

  // Sync state if prefilledService changes
  React.useEffect(() => {
    if (prefilledService) {
      setFormData((prev) => ({
        ...prev,
        serviceInterested: prefilledService
      }));
    }
  }, [prefilledService]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulate high-end backend dispatch
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
    }, 1500);
  };

  const handleCopyPhp = () => {
    navigator.clipboard.writeText(PhpMailerCode);
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  return (
    <section id="contact" className="relative py-24 bg-black/70 scroll-mt-20 overflow-hidden">
      {/* Background light spots */}
      <div className="absolute top-1/3 left-0 w-80 h-80 rounded-full bg-purple-900/10 blur-[130px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-indigo-900/10 blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Main Grid split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">

          {/* LEFT COLUMN: Let's Build Something Incredible */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <span className="text-[10px] font-mono-tech tracking-widest text-[#A855F7] bg-purple-500/10 border border-purple-500/30 px-3 py-1 rounded-full uppercase inline-block">
                INITIATE THE ENGINE
              </span>
              <h2 className="text-4xl sm:text-6xl font-heading font-black text-white leading-none">
                Let's Build <br />
                Something <span className="text-gradient-purple">Incredible.</span>
              </h2>
              <p className="text-gray-400 text-xs sm:text-sm font-sans-premium max-w-sm leading-relaxed">
                Take the unfair advantage. Share your current targets and we will outline a custom, comprehensive design, search, and video roadmap within 48 hours.
              </p>
            </div>

            {/* Direct Coordinates */}
            <div className="space-y-4">
              <div className="flex items-center gap-3 p-4 rounded-xl bg-purple-950/20 border border-purple-500/10 hover:border-purple-500/35 transition-all">
                <div className="p-2.5 rounded-lg bg-purple-500/15 text-[#A855F7]">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[9px] text-gray-500 font-mono-tech block uppercase">DIRECT ENQUIRY</span>
                  <a href="mailto:growth@udaydigital.com" className="text-sm font-semibold text-white hover:text-[#A855F7] transition-colors">
                    NULL
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3 p-4 rounded-xl bg-purple-950/20 border border-purple-500/10 hover:border-purple-500/35 transition-all">
                <div className="p-2.5 rounded-lg bg-purple-500/15 text-[#A855F7]">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[9px] text-gray-500 font-mono-tech block uppercase">BOOKED LINE CALLS</span>
                  <a href="tel:+18005554769" className="text-sm font-semibold text-white hover:text-[#A855F7] transition-colors">
                    +91 96670 00076
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3 p-4 rounded-xl bg-purple-950/20 border border-purple-500/10 hover:border-purple-500/35 transition-all">
                <div className="p-2.5 rounded-lg bg-purple-500/15 text-[#A855F7]">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-[9px] text-gray-500 font-mono-tech block uppercase">STUDIO HEADQUARTERS</span>
                  <span className="text-sm font-semibold text-white">
                    Kabir Nagar, Ajmer, Rajsthan
                  </span>
                </div>
              </div>
            </div>

            {/* Social Icons Links */}
            <div className="space-y-3">
              <span className="text-[10px] text-gray-500 font-mono-tech block uppercase tracking-wider">SECURE OMNIPRESENCE CHANNELS:</span>
              <div className="flex gap-2.5">
                <a href="#" className="p-3 rounded-lg bg-purple-950/20 border border-purple-500/10 hover:border-purple-500/40 text-gray-400 hover:text-white transition-colors" aria-label="Instagram">
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.849.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.82-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2c-3.259 0-3.66.013-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>
                </a>
                <a href="#" className="p-3 rounded-lg bg-purple-950/20 border border-purple-500/10 hover:border-purple-500/40 text-gray-400 hover:text-white transition-colors" aria-label="LinkedIn">
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
                </a>
                <a href="#" className="p-3 rounded-lg bg-purple-950/20 border border-purple-500/10 hover:border-purple-500/40 text-gray-400 hover:text-white transition-colors" aria-label="YouTube">
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M23.498 6.163c-.272-1.022-1.04-1.826-2.009-2.105-1.77-.478-8.889-.478-8.889-.478s-7.119 0-8.889.478c-.97.279-1.737 1.083-2.01 2.105-.477 1.838-.477 5.679-.477 5.679s0 3.841.477 5.68c.273 1.021 1.04 1.825 2.01 2.104 1.77.479 8.889.479 8.889.479s7.119 0 8.889-.479c.969-.279 1.737-1.083 2.009-2.104.478-1.839.478-5.68.478-5.68s0-3.841-.478-5.679zm-13.848 9.337v-7l6.5 3.5-6.5 3.5z" /></svg>
                </a>
                <a href="#" className="p-3 rounded-lg bg-purple-950/20 border border-purple-500/10 hover:border-purple-500/40 text-gray-400 hover:text-white transition-colors" aria-label="WhatsApp">
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.253 8.477 3.522 2.263 2.27 3.511 5.287 3.512 8.492.002 6.653-5.335 11.992-11.95 11.992-1.997-.001-3.957-.5-5.693-1.447L0 24zm6.59-4.859c1.72.101 2.398.58 4.341 1.354l.328.131c1.2.474 1.9.434 2.6-.135 1.5-.956 2.5-1.991 3.5-3.5 1.1-1.6 1.9-2.6 1.9-3.9 0-1.2-1.1-2.1-2.1-2.9l-1.3-.9c-.4-.3-.9-.2-1.2.2l-.7.9c-.3.4-.2.9.2 1.2l.9.6c.4.3.5.8.2 1.2l-1.4 2.1c-.3.4-.8.5-1.2.2l-.9-.6c-.4-.3-.9-.2-1.2.2l-.8.9c-.3.4-.2.9.2 1.2l.9.6c.4.3.5.8.2 1.2l-1.4 2.1c-.3.4-.8.5-1.2.2l-.9-.6c-.4-.3-.9-.2-1.2.2z" fillRule="evenodd" clipRule="evenodd" /></svg>
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Modern Glassmorphic Form */}
          <div className="lg:col-span-7">
            <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-purple-500/20 relative">
              <div className="absolute top-4 right-4 text-purple-500/10">
                <Lock className="w-12 h-12 stroke-[1]" />
              </div>

              <h3 className="text-xl font-heading font-black text-white mb-6 flex items-center gap-2">
                <span>Growth Staging Form</span>
                <span className="text-[9px] font-mono-tech uppercase text-green-400 bg-green-500/10 border border-green-500/20 px-2 py-0.5 rounded animate-pulse">
                  SMTP SECURED
                </span>
              </h3>

              {success ? (
                <div className="p-8 text-center space-y-6">
                  <div className="w-16 h-16 rounded-full bg-green-500/10 border border-green-400 flex items-center justify-center mx-auto text-green-400">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-xl font-heading font-bold text-white">Transmission Successful</h4>
                    <p className="text-xs text-gray-400 max-w-sm mx-auto">
                      Thank you <strong className="text-white">{formData.name}</strong>. Your request for <strong className="text-[#A855F7]">{formData.serviceInterested}</strong> has been stage-routed to our engineers.
                    </p>
                  </div>
                  <div className="p-4 rounded-xl bg-purple-950/20 border border-purple-500/10 text-left text-[11px] font-mono-tech space-y-1.5 max-w-sm mx-auto">
                    <div className="text-[#A855F7] font-bold">DISPATCHED METADATA:</div>
                    <div>• Name: {formData.name}</div>
                    <div>• Business: {formData.businessName}</div>
                    <div>• Email: {formData.email}</div>
                    <div>• Phone: {formData.phone}</div>
                    <div className="text-green-400">• Router: contact-mailer.php active</div>
                  </div>
                  <button
                    onClick={() => {
                      setSuccess(false);
                      setFormData({
                        name: "",
                        businessName: "",
                        email: "",
                        phone: "",
                        serviceInterested: "Website Development",
                        message: ""
                      });
                    }}
                    className="px-6 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs uppercase cursor-pointer"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name */}
                    <div className="space-y-1.5">
                      <label className="text-[10px] font-mono-tech text-gray-400 uppercase tracking-widest block">
                        Your Full Name
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Uday Shah"
                        className="w-full px-4 py-3 rounded-xl bg-black/60 border border-purple-500/10 focus:border-[#8B5CF6] focus:outline-none text-white text-xs transition-colors"
                      />
                    </div>

                    {/* Business Name */}
                    <div className="space-y-1.5">
                      <label className="text-[10px] font-mono-tech text-gray-400 uppercase tracking-widest block">
                        Business / Agency Name
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.businessName}
                        onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                        placeholder="Apex Enterprise"
                        className="w-full px-4 py-3 rounded-xl bg-black/60 border border-purple-500/10 focus:border-[#8B5CF6] focus:outline-none text-white text-xs transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Email */}
                    <div className="space-y-1.5">
                      <label className="text-[10px] font-mono-tech text-gray-400 uppercase tracking-widest block">
                        Email Address
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="client@apex.com"
                        className="w-full px-4 py-3 rounded-xl bg-black/60 border border-purple-500/10 focus:border-[#8B5CF6] focus:outline-none text-white text-xs transition-colors"
                      />
                    </div>

                    {/* Phone */}
                    <div className="space-y-1.5">
                      <label className="text-[10px] font-mono-tech text-gray-400 uppercase tracking-widest block">
                        Phone Contact
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+1 (555) 000-0000"
                        className="w-full px-4 py-3 rounded-xl bg-black/60 border border-purple-500/10 focus:border-[#8B5CF6] focus:outline-none text-white text-xs transition-colors"
                      />
                    </div>
                  </div>

                  {/* Service Interested In */}
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-mono-tech text-gray-400 uppercase tracking-widest block">
                      Service Interested In
                    </label>
                    <select
                      value={formData.serviceInterested}
                      onChange={(e) => setFormData({ ...formData, serviceInterested: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#09080c] border border-purple-500/10 focus:border-[#8B5CF6] focus:outline-none text-white text-xs transition-colors"
                    >
                      <option value="Website Development">Website Development</option>
                      <option value="SEO & GMB Dominance">SEO & GMB Optimization</option>
                      <option value="AI Video Production">AI Video Production</option>
                      <option value="Marketing Reels & Short Content">Marketing Reels</option>
                      <option value="Complete Custom Ecosystem Suite">Everything Under One Roof</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div className="space-y-1.5">
                    <label className="text-[10px] font-mono-tech text-gray-400 uppercase tracking-widest block">
                      Explain Your Targets & Bottlenecks
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Explain what your business is currently selling, your current traffic volume, and your growth goals..."
                      className="w-full px-4 py-3 rounded-xl bg-black/60 border border-purple-500/10 focus:border-[#8B5CF6] focus:outline-none text-white text-xs transition-colors"
                    />
                  </div>

                  {/* Submit CTA */}
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full group py-4 rounded-xl text-xs font-bold uppercase tracking-wider text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:shadow-[0_0_20px_rgba(139,92,246,0.35)] transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                  >
                    {loading ? (
                      <span className="flex items-center gap-2">
                        <svg className="animate-spin h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                        </svg>
                        Encrypting & Transmitting...
                      </span>
                    ) : (
                      <>
                        <Send className="w-3.5 h-3.5" />
                        Submit Growth Request
                      </>
                    )}
                  </button>

                  <div className="text-center pt-2">
                    <span className="text-[9px] text-gray-500 font-mono-tech uppercase">
                      🔒 Zero spam guaranteed. Data is processed securely by mailer engine.
                    </span>
                  </div>
                </form>
              )}
            </div>
          </div>

        </div>

        {/* SECURE PHP MAILER EXPOSITION WRAPPER */}
        <div className="mt-16 pt-8 border-t border-purple-500/10">
          <div className="p-6 rounded-3xl bg-[#09080d]/80 border border-purple-500/15 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="max-w-xl">
              <div className="flex items-center gap-2 text-purple-400 font-mono-tech text-[10px] uppercase font-bold tracking-wider mb-2">
                <Terminal className="w-4 h-4 text-purple-400" />
                INTEGRATED PHP MAILER BACKEND
              </div>
              <h4 className="text-xl font-heading font-black text-white">
                Secure SMTP Form Submission Code
              </h4>
              <p className="text-xs text-gray-400 font-sans-premium mt-1">
                We generate the exact PHP backend mailer system requested! This matches security protocols, features spam honey protection, custom SMTP authentication configuration, and processes environmental parameters.
              </p>
            </div>

            <div className="flex gap-3">
              <button
                onClick={() => setShowPhpCode(!showPhpCode)}
                className="px-5 py-3 rounded-xl bg-purple-950/40 text-purple-300 border border-purple-500/20 text-xs font-bold uppercase tracking-wider hover:text-white hover:border-purple-500/40 cursor-pointer flex items-center gap-2"
              >
                <Eye className="w-4 h-4" />
                {showPhpCode ? "Hide PHP Mailer Code" : "Expose PHP Mailer Code"}
              </button>

              <button
                onClick={handleCopyPhp}
                className="px-5 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 text-white text-xs font-bold uppercase tracking-wider cursor-pointer flex items-center gap-2"
              >
                {copiedCode ? <Check className="w-4 h-4 text-green-200" /> : <Copy className="w-4 h-4" />}
                {copiedCode ? "Copied!" : "Copy PHP Mailer"}
              </button>
            </div>
          </div>

          {/* Collapsible code display block */}
          <AnimatePresence>
            {showPhpCode && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="mt-6 overflow-hidden rounded-2xl border border-purple-500/20"
              >
                <div className="bg-[#07060a] p-4 flex items-center justify-between border-b border-purple-500/15 text-xs">
                  <div className="flex items-center gap-2 text-gray-400">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500" />
                    <span className="w-2.5 h-2.5 rounded-full bg-yellow-500" />
                    <span className="w-2.5 h-2.5 rounded-full bg-green-500" />
                    <span className="font-mono text-[10px] text-[#A855F7] ml-2">contact-mailer.php</span>
                  </div>
                  <span className="text-[10px] font-mono text-gray-500 uppercase">SMTP AUTH READY</span>
                </div>
                <pre className="bg-[#0c0b11] p-6 text-[11px] sm:text-xs text-purple-200 font-mono overflow-x-auto max-h-[420px] select-text">
                  <code>{PhpMailerCode}</code>
                </pre>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
