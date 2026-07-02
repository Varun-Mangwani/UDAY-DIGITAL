import { useState } from "react";
import { 
  Send, 
  Heart, 
  Check, 
  ShieldCheck 
} from "lucide-react";

export function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
    setTimeout(() => {
      setEmail("");
      setSubscribed(false);
    }, 4000);
  };

  const smoothScrollTo = (id: string) => {
    const target = document.getElementById(id);
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

  return (
    <footer className="relative bg-[#07060a] border-t border-purple-950/60 pt-24 pb-12 overflow-hidden">
      {/* Background Animated Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[70vw] h-[35vh] bg-gradient-to-t from-[#6A11CB]/15 to-[#8B5CF6]/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Upper footer: Brand + Newsletter Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-purple-500/10">
          
          {/* Brand & Tagline Col */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-r from-purple-600 to-indigo-600 flex items-center justify-center font-heading font-black text-white text-sm">
                U
              </div>
              <span className="font-heading text-xl font-black tracking-widest text-white">
                UDAY <span className="text-[#A855F7]">DIGITAL</span>
              </span>
            </div>

            <div className="space-y-2">
              <span className="text-xs text-purple-400 font-mono-tech uppercase tracking-widest block font-bold">
                THE NORTH STAR STATEMENT:
              </span>
              <p className="text-2xl sm:text-3xl font-heading font-black text-white tracking-wide">
                Growth → Continue → Repeat
              </p>
            </div>

            <p className="text-gray-400 text-xs sm:text-sm font-sans-premium max-w-sm leading-relaxed">
              We engineer high-performance React engines, local SEO map dominance structures, and viral social media short video hooks under a unified revenue-focused partnership.
            </p>
          </div>

          {/* Sitemap Navigation links Col */}
          <div className="lg:col-span-3 grid grid-cols-2 gap-8">
            <div className="space-y-4">
              <h4 className="text-[10px] font-mono-tech text-gray-500 uppercase tracking-widest font-bold">
                Navigation
              </h4>
              <ul className="space-y-2.5 text-xs text-gray-400">
                <li>
                  <button onClick={() => smoothScrollTo("home")} className="hover:text-white transition-colors cursor-pointer text-left block">
                    Home
                  </button>
                </li>
                <li>
                  <button onClick={() => smoothScrollTo("services")} className="hover:text-white transition-colors cursor-pointer text-left block">
                    Services
                  </button>
                </li>
                <li>
                  <button onClick={() => smoothScrollTo("process")} className="hover:text-white transition-colors cursor-pointer text-left block">
                    Our Process
                  </button>
                </li>
                <li>
                  <button onClick={() => smoothScrollTo("about")} className="hover:text-white transition-colors cursor-pointer text-left block">
                    About
                  </button>
                </li>
                <li>
                  <button onClick={() => smoothScrollTo("why-us")} className="hover:text-white transition-colors cursor-pointer text-left block">
                    Why Us
                  </button>
                </li>
                <li>
                  <button onClick={() => smoothScrollTo("demos")} className="hover:text-white transition-colors cursor-pointer text-left block">
                    Demos Portal
                  </button>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="text-[10px] font-mono-tech text-gray-500 uppercase tracking-widest font-bold">
                Growth Engines
              </h4>
              <ul className="space-y-2.5 text-xs text-gray-400">
                <li>
                  <button onClick={() => smoothScrollTo("services")} className="hover:text-white transition-colors cursor-pointer text-left block">
                    React Web Development
                  </button>
                </li>
                <li>
                  <button onClick={() => smoothScrollTo("services")} className="hover:text-white transition-colors cursor-pointer text-left block">
                    GMB & Map Ranking
                  </button>
                </li>
                <li>
                  <button onClick={() => smoothScrollTo("services")} className="hover:text-white transition-colors cursor-pointer text-left block">
                    AI Cinematic Ads
                  </button>
                </li>
                <li>
                  <button onClick={() => smoothScrollTo("services")} className="hover:text-white transition-colors cursor-pointer text-left block">
                    Viral Marketing Reels
                  </button>
                </li>
              </ul>
            </div>
          </div>

          {/* Newsletter subscription form */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-[10px] font-mono-tech text-gray-500 uppercase tracking-widest font-bold">
              Join Intelligence Dispatch
            </h4>
            <p className="text-xs text-gray-400 leading-relaxed font-sans-premium">
              Receive actionable SEO secrets, AI prompt frameworks, and conversion optimization checklists. Zero spam.
            </p>

            {subscribed ? (
              <div className="p-4 rounded-xl bg-purple-950/40 border border-purple-500/20 text-purple-300 text-xs flex items-center gap-2 animate-bounce">
                <Check className="w-4 h-4 text-green-400" />
                <span>Subscribed! Check your inbox for the SEO map checklist.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="relative">
                <input 
                  type="email"
                  required
                  placeholder="partner@enterprise.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-black border border-purple-500/10 focus:border-[#8B5CF6] focus:outline-none text-white text-xs"
                />
                <button
                  type="submit"
                  className="absolute right-1.5 top-1.5 p-2 rounded-lg bg-purple-600 hover:bg-purple-500 text-white transition-all cursor-pointer"
                  aria-label="Subscribe"
                >
                  <Send className="w-3.5 h-3.5" />
                </button>
              </form>
            )}

            <div className="flex items-center gap-2 text-[10px] text-gray-500">
              <ShieldCheck className="w-3.5 h-3.5 text-[#A855F7]" />
              <span>Automated GDPR Encryption Active</span>
            </div>
          </div>

        </div>

        {/* Giant Logo Banner styling */}
        <div className="py-12 select-none pointer-events-none text-center relative overflow-hidden">
          <h1 className="text-[64px] sm:text-[110px] lg:text-[160px] font-heading font-black text-[#15131f] tracking-tighter uppercase leading-none">
            UDAY <span className="text-[#1a172c]">DIGITAL</span>
          </h1>
        </div>

        {/* Bottom Credits */}
        <div className="pt-8 border-t border-purple-500/5 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500 gap-4">
          <div className="flex items-center gap-1.5">
            <span>© 2026 Uday Digital Inc. All rights reserved.</span>
            <span>•</span>
            <span className="flex items-center gap-1 text-purple-400">
              Made with <Heart className="w-3 h-3 text-pink-500 fill-current" /> globally
            </span>
          </div>

          <div className="flex gap-4">
            <a href="#privacy" className="hover:text-purple-400 transition-colors">Privacy Policy</a>
            <a href="#terms" className="hover:text-purple-400 transition-colors">Terms of Engagement</a>
            <a href="#mailer-status" className="hover:text-purple-400 transition-colors">PHP Mailer Status</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
