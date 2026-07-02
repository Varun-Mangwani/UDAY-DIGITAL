import { motion } from "framer-motion";
import { 
  Boxes, 
  Target, 
  Cpu, 
  Sparkles, 
  Zap, 
  TrendingUp, 
  ArrowUpRight 
} from "lucide-react";

interface Benefit {
  index: string;
  title: string;
  description: string;
  icon: any;
  color: string;
  badge: string;
}

export function WhyUs() {
  const benefits: Benefit[] = [
    {
      index: "01",
      title: "Everything Under One Roof",
      description: "Stop wasting months acting as an intermediary between separate web developers, SEO freelancers, and videographers. We handle your entire technical and media pipeline seamlessly.",
      icon: Boxes,
      color: "text-purple-400 bg-purple-500/10 border-purple-500/20",
      badge: "STREAMLINED COLLABORATION"
    },
    {
      index: "02",
      title: "Growth-Focused Engine",
      description: "We hate 'pretty' websites that fail to convert. Every single button placement, load-speed optimization, map priority, and video script is meticulously built to convert attention into booked phone calls.",
      icon: Target,
      color: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
      badge: "ROI & REVENUE CENTRIC"
    },
    {
      index: "03",
      title: "Modern Tech Architecture",
      description: "We don't do legacy slow systems. Your systems will be built on lightning-fast React, programmatic SEO schemas, automated artificial intelligence rendering models, and responsive layouts.",
      icon: Cpu,
      color: "text-blue-400 bg-blue-500/10 border-blue-500/20",
      badge: "FUTURE-PROOF STACK"
    },
    {
      index: "04",
      title: "High-Caliber Creative Execution",
      description: "Our scripts and edits look like high-budget cinema. We create breathtaking AI promotional videos and high-retention social media Reels tailored to lock client attention on socials.",
      icon: Sparkles,
      color: "text-pink-400 bg-pink-500/10 border-pink-500/20",
      badge: "VIRAL DESIGN LANGUAGE"
    },
    {
      index: "05",
      title: "Elite Turnaround Times",
      description: "We deploy state-of-the-art interactive website concepts, active organic keyword schemas, and ready-to-publish short form Reels inside standard rapid 4-week delivery timelines.",
      icon: Zap,
      color: "text-amber-400 bg-amber-500/10 border-amber-500/20",
      badge: "SPEED TO MARKET"
    },
    {
      index: "06",
      title: "Scalable Growth Solutions",
      description: "Our server architectures and headless web builds grow as your organization scales up. Easily support heavy traffic spikes, multiregional GMB domains, and infinite content libraries.",
      icon: TrendingUp,
      color: "text-indigo-400 bg-indigo-500/10 border-indigo-500/20",
      badge: "EXPANSION-READY"
    }
  ];

  return (
    <section id="why-us" className="relative py-24 bg-black/70 scroll-mt-20 overflow-hidden">
      {/* Background neon elements */}
      <div className="absolute top-1/2 left-0 w-80 h-80 rounded-full bg-[#6A11CB]/5 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-[#8B5CF6]/5 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[10px] font-mono-tech tracking-widest text-[#A855F7] bg-purple-500/10 border border-purple-500/30 px-3 py-1 rounded-full uppercase inline-block mb-3">
            WHY CLIENTS DOMINATE WITH US
          </span>
          <h2 className="text-4xl sm:text-6xl font-heading font-extrabold text-white tracking-tight leading-none mb-4">
            Built Different. <span className="text-gradient-purple">Executed Faster.</span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base font-sans-premium max-w-lg mx-auto">
            Traditional marketing agencies sell hours. We deploy self-reinforcing high-velocity ecosystems where design, code, and content drive actual revenue.
          </p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((b, idx) => {
            const Icon = b.icon;
            return (
              <motion.div
                key={idx}
                whileHover={{ y: -6, scale: 1.015 }}
                transition={{ type: "spring", stiffness: 350, damping: 25 }}
                className="relative p-6 sm:p-8 rounded-2xl bg-[#111016]/90 border border-purple-500/10 hover:border-[#8B5CF6]/40 transition-all duration-300 flex flex-col justify-between group overflow-hidden"
              >
                {/* Micro purple glow inside on card hover */}
                <div className="absolute -right-12 -bottom-12 w-28 h-28 bg-purple-500/5 group-hover:bg-purple-500/15 blur-2xl rounded-full transition-all duration-300 pointer-events-none" />

                <div>
                  {/* Card top */}
                  <div className="flex items-center justify-between mb-6">
                    <div className={`p-3 rounded-xl border ${b.color}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-2xl font-heading font-black text-purple-950 group-hover:text-purple-500/30 transition-colors">
                      {b.index}
                    </span>
                  </div>

                  {/* Badge */}
                  <span className="text-[9px] font-mono-tech tracking-wider text-purple-400 block mb-2 font-semibold">
                    {b.badge}
                  </span>

                  {/* Headline */}
                  <h3 className="text-lg font-heading font-black text-white mb-3 group-hover:text-[#A855F7] transition-colors">
                    {b.title}
                  </h3>

                  {/* Body description */}
                  <p className="text-gray-400 text-xs sm:text-sm font-sans-premium leading-relaxed">
                    {b.description}
                  </p>
                </div>

                {/* Card bottom details */}
                <div className="mt-8 pt-4 border-t border-purple-500/5 flex items-center justify-between text-[10px] text-gray-500 font-mono-tech">
                  <span>Guaranteed Standards</span>
                  <span className="text-white group-hover:text-[#A855F7] flex items-center gap-1">
                    Deploy System <ArrowUpRight className="w-3 h-3 text-purple-400" />
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
