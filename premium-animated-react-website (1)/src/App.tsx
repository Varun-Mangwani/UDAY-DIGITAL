import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sparkles,
  X,
  Calendar,
  Clock,
  ShieldCheck,
  PhoneCall,
  Volume2,
  VolumeX
} from "lucide-react";

// Component imports
import { ParticleBackground } from "./components/ParticleBackground";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Stats } from "./components/Stats";
import { Services } from "./components/Services";
import { Process } from "./components/Process";
import { About } from "./components/About";
import { WhyUs } from "./components/WhyUs";
import { Demos } from "./components/Demos";
import { Testimonials } from "./components/Testimonials";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { DemoViewer } from "./components/DemoViewer";
import { websiteProjects } from "./utils/demoData";

export default function App() {
  // Check for standalone demo mode (opened in new tab)
  const params = new URLSearchParams(window.location.search);
  const demoParam = params.get("demo");
  const demoProject = demoParam ? websiteProjects.find(p => p.title === demoParam) : null;

  if (demoProject) {
    return (
      <DemoViewer
        title={demoProject.title}
        category={demoProject.category}
        image={demoProject.image}
        url={demoProject.liveUrl}
        onClose={() => window.close()}
      />
    );
  }

  const [loading, setLoading] = useState(true);
  const [loadingText, setLoadingText] = useState("Loading Experience...");
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [prefilledService, setPrefilledService] = useState("");
  const [activeSection, setActiveSection] = useState("home");

  // Custom audio feedback option for premium feel
  const [audioFeedback, setAudioFeedback] = useState(false);

  // Cycle loading messages for professional experience
  useEffect(() => {
    const messages = [
      "Loading Experience...",
      "Preparing Digital Environment...",
      "Optimizing Assets...",
      "Ready."
    ];

    let currentMsgIndex = 0;
    const msgInterval = setInterval(() => {
      if (currentMsgIndex < messages.length - 1) {
        currentMsgIndex++;
        setLoadingText(messages[currentMsgIndex]);
      }
    }, 500);

    const finishTimer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => {
      clearInterval(msgInterval);
      clearTimeout(finishTimer);
    };
  }, []);

  // Track scroll position to update active nav section highlights
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "services", "process", "about", "why-us", "demos", "contact"];
      const scrollPos = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handlers
  const handleOpenConsultation = () => {
    setIsConsultationOpen(true);
    if (audioFeedback) {
      try {
        const context = new (window.AudioContext || (window as any).webkitAudioContext)();
        const osc = context.createOscillator();
        const gain = context.createGain();
        osc.connect(gain);
        gain.connect(context.destination);
        osc.type = "sine";
        osc.frequency.setValueAtTime(650, context.currentTime);
        gain.gain.setValueAtTime(0.08, context.currentTime);
        osc.start();
        osc.stop(context.currentTime + 0.12);
      } catch (e) {
        // audio context blocked by browser policy
      }
    }
  };

  const handlePrefillService = (serviceName: string) => {
    setPrefilledService(serviceName);
    // Smooth scroll down to contact section
    const target = document.getElementById("contact");
    if (target) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = target.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  const handleConsultationSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Inquiry Sent! Uday Digital will coordinate a video callback on Google Meet within 24 hours.");
    setIsConsultationOpen(false);
  };

  return (
    <div className="relative min-h-screen text-white bg-[#0c0b10] overflow-x-hidden noise-bg selection:bg-purple-600 selection:text-white">

      {/* 1. PROFESSIONAL LOADING SCREEN */}
      <AnimatePresence>
        {loading && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="fixed inset-0 z-[200] bg-[#0c0b10] flex flex-col items-center justify-center p-4"
          >
            <div className="absolute w-[500px] h-[500px] rounded-full bg-purple-600/5 blur-[120px] animate-pulse" />

            <div className="space-y-8 text-center z-10 max-w-md flex flex-col items-center">
              {/* Professional Rotating Loader */}
              <div className="relative flex items-center justify-center w-20 h-20 mx-auto">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 rounded-full border-[3px] border-transparent border-t-purple-500 border-r-purple-500/30 shadow-[0_0_15px_rgba(168,85,247,0.2)]"
                />
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-2 rounded-full border-[3px] border-transparent border-b-indigo-500 border-l-indigo-500/30"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" />
                </div>
              </div>

              <div className="space-y-4">
                {/* Brand title */}
                <motion.h2
                  initial={{ y: 10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                  className="font-heading text-2xl sm:text-3xl font-black tracking-widest text-white"
                >
                  UDAY <span className="text-purple-500">DIGITAL</span>
                </motion.h2>

                {/* Subtle progress line */}
                <div className="w-48 bg-gray-800 h-[2px] rounded-full mx-auto overflow-hidden relative">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 1.8, ease: "easeInOut" }}
                    className="absolute top-0 left-0 h-full bg-purple-500 shadow-[0_0_10px_rgba(168,85,247,0.8)]"
                  />
                </div>

                {/* Professional text ticker */}
                <p className="text-xs text-gray-400 tracking-widest uppercase font-medium">
                  {loadingText}
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 2. ADVANCED INTERACTIVE 3D & CONNECTED BACKGROUND */}
      <ParticleBackground />

      {/* 3. STICKY GLASSMORPHISM NAVBAR */}
      <Navbar
        onOpenConsultation={handleOpenConsultation}
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />

      {/* 4. MAIN WORKSPACE */}
      <main className="relative z-10">

        {/* Floating Quick CTA widget */}
        <div className="fixed bottom-6 left-6 z-40 hidden md:block">
          <div className="glass-panel p-3.5 rounded-2xl border border-purple-500/20 max-w-[240px] flex items-center gap-3 shadow-lg shadow-black/60">
            <span className="flex h-2.5 w-2.5 shrink-0">
              <span className="animate-ping absolute inline-flex h-2.5 w-2.5 rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
            </span>
            <div className="text-[11px]">
              <span className="font-bold text-white block">Consultation slots open today</span>
              <button
                onClick={handleOpenConsultation}
                className="text-purple-400 hover:text-white underline font-semibold transition-colors mt-0.5 block text-left"
              >
                Claim yours now →
              </button>
            </div>
          </div>
        </div>

        {/* Floating Audio Feedback and Back-to-top Controls */}
        <div className="fixed bottom-6 right-6 z-40 flex items-center gap-2">
          {/* Audio Feedback state */}
          <button
            onClick={() => setAudioFeedback(!audioFeedback)}
            className="p-2.5 rounded-xl bg-[#121118]/80 border border-purple-500/10 text-gray-400 hover:text-white transition-colors cursor-pointer"
            title={audioFeedback ? "Sound indicators active" : "Sound indicators muted"}
          >
            {audioFeedback ? <Volume2 className="w-4 h-4 text-purple-400" /> : <VolumeX className="w-4 h-4" />}
          </button>

          {/* Quick Consultation Trigger */}
          <button
            onClick={handleOpenConsultation}
            className="p-3 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-bold shadow-lg hover:shadow-purple-500/30 hover:scale-105 transition-all flex items-center justify-center cursor-pointer"
            title="Book Immediate Consultation"
          >
            <PhoneCall className="w-4.5 h-4.5" />
          </button>
        </div>

        {/* SECTION 1: HERO */}
        <Hero
          onExploreServices={() => {
            const el = document.getElementById("services");
            if (el) el.scrollIntoView({ behavior: "smooth" });
          }}
          onViewDemos={() => {
            const el = document.getElementById("demos");
            if (el) el.scrollIntoView({ behavior: "smooth" });
          }}
        />

        {/* SECTION 2: STATS */}
        <Stats />

        {/* SECTION 3: SERVICES */}
        <Services onSelectService={handlePrefillService} />

        {/* SECTION 4: OUR WAY OF WORKING */}
        <Process />

        {/* SECTION 5: ABOUT */}
        <About />

        {/* SECTION 6: WHY US */}
        <WhyUs />

        {/* SECTION 7: DEMOS PORTAL */}
        <Demos />

        {/* SECTION 8: TESTIMONIALS */}
        <Testimonials />

        {/* SECTION 9: CONTACT */}
        <Contact prefilledService={prefilledService} />

      </main>

      {/* 5. FOOTER */}
      <Footer />

      {/* 6. BOOK CONSULTATION FLOATING POPUP MODAL */}
      <AnimatePresence>
        {isConsultationOpen && (
          <div className="fixed inset-0 z-100 flex items-center justify-center p-4">
            {/* Backdrop blur */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsConsultationOpen(false)}
              className="absolute inset-0 bg-black/85 backdrop-blur-sm"
            />

            {/* Modal Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-md bg-[#0f0e15] border border-purple-500/30 rounded-3xl p-6 overflow-hidden shadow-2xl shadow-purple-950/60 z-10 text-left"
            >
              {/* Close button */}
              <button
                onClick={() => setIsConsultationOpen(false)}
                className="absolute top-4 right-4 p-2 rounded-full bg-purple-950/40 text-gray-400 hover:text-white border border-purple-500/15 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="space-y-4">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-[9px] font-bold tracking-widest text-[#A855F7] uppercase">
                  <Calendar className="w-3.5 h-3.5" />
                  GOOGLE MEET SECURED SLOT
                </div>

                <div>
                  <h3 className="text-xl sm:text-2xl font-heading font-black text-white">
                    Book Growth Consultation
                  </h3>
                  <p className="text-xs text-gray-400 font-sans-premium">
                    Coordinate a direct 15-minute diagnostic screen share with Uday Shah and our lead technical architects.
                  </p>
                </div>

                {/* Form fields inside Modal */}
                <form onSubmit={handleConsultationSubmit} className="space-y-3.5 pt-2">
                  <div className="space-y-1">
                    <label className="text-[9px] font-mono-tech text-gray-400 uppercase tracking-widest block">Your Name</label>
                    <input
                      type="text"
                      required
                      placeholder="Uday Shah"
                      className="w-full px-3 py-2 text-xs rounded-xl bg-black border border-purple-500/15 text-white focus:outline-none focus:border-purple-500"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-[9px] font-mono-tech text-gray-400 uppercase tracking-widest block">Corporate Email</label>
                    <input
                      type="email"
                      required
                      placeholder="uday@enterprise.com"
                      className="w-full px-3 py-2 text-xs rounded-xl bg-black border border-purple-500/15 text-white focus:outline-none focus:border-purple-500"
                    />
                  </div>

                  {/* Date Pickers Simulation */}
                  <div className="grid grid-cols-2 gap-3">
                    <div className="space-y-1">
                      <label className="text-[9px] font-mono-tech text-gray-400 uppercase tracking-widest block">Preferred Day</label>
                      <select className="w-full px-3 py-2 text-xs rounded-xl bg-black border border-purple-500/15 text-white focus:outline-none focus:border-purple-500">
                        <option value="Monday">Monday (Next)</option>
                        <option value="Tuesday">Tuesday</option>
                        <option value="Wednesday">Wednesday</option>
                        <option value="Thursday">Thursday</option>
                        <option value="Friday">Friday</option>
                      </select>
                    </div>

                    <div className="space-y-1">
                      <label className="text-[9px] font-mono-tech text-gray-400 uppercase tracking-widest block">Best Time Frame</label>
                      <select className="w-full px-3 py-2 text-xs rounded-xl bg-black border border-purple-500/15 text-white focus:outline-none focus:border-purple-500">
                        <option value="Morning">Morning (9AM - 12PM)</option>
                        <option value="Afternoon">Afternoon (1PM - 4PM)</option>
                        <option value="Evening">Evening (5PM - 7PM)</option>
                      </select>
                    </div>
                  </div>

                  <div className="p-3.5 rounded-xl bg-purple-950/20 border border-purple-500/10 text-[10px] text-purple-300 space-y-1">
                    <div className="font-bold flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-purple-400" />
                      <span>Live Diagnostic Deliverables:</span>
                    </div>
                    <p>• Competitor SEO keyword positioning report</p>
                    <p>• User conversion friction website scan</p>
                    <p>• Video attention-hook blueprint</p>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:shadow-lg hover:shadow-purple-500/25 text-white font-bold text-xs uppercase tracking-wider transition-all cursor-pointer flex items-center justify-center gap-2"
                  >
                    <span>Secure Booking Token</span>
                    <Sparkles className="w-4 h-4 text-purple-200 animate-spin" />
                  </button>
                </form>

                <div className="flex items-center justify-center gap-2 text-[9px] text-gray-500 pt-1">
                  <ShieldCheck className="w-4 h-4 text-purple-500" />
                  <span>No obligation diagnostic. GDPR encrypted.</span>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}
