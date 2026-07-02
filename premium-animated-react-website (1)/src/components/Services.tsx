import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Globe, 
  Search, 
  Video, 
  Flame, 
  Check, 
  ChevronRight, 
  Zap, 
  Cpu, 
  ArrowRight
} from "lucide-react";

interface ServiceItem {
  id: string;
  title: string;
  description: string;
  badge: string;
  icon: any;
  features: string[];
  color: string;
  glowColor: string;
  metric: string;
  metricLabel: string;
  tech: string[];
}

interface ServicesProps {
  onSelectService: (serviceName: string) => void;
}

export function Services({ onSelectService }: ServicesProps) {
  const [activeService, setActiveService] = useState<string>("web");

  const services: ServiceItem[] = [
    {
      id: "web",
      title: "Website Development",
      badge: "HIGH-PERFORMANCE",
      description: "Build lightning-fast websites and custom headless web engines specifically engineered to transform curious visitors into high-paying, loyal clients.",
      icon: Globe,
      features: [
        "Landing Pages",
        "Business Websites",
        "Ecommerce Platforms",
        "React Applications",
        "Admin Panels"
      ],
      color: "from-purple-600 to-indigo-600",
      glowColor: "rgba(139, 92, 246, 0.4)",
      metric: "99% Mobile Score",
      metricLabel: "Core Web Vitals Performance",
      tech: ["React.js", "Vite", "Tailwind CSS", "Framer Motion", "Headless CMS"]
    },
    {
      id: "seo",
      title: "SEO & GMB",
      badge: "ORGANIC FLOOD",
      description: "Rank higher than your competitors, dominate highly valuable local search intents, and command a steady flow of automated, high-intent client leads.",
      icon: Search,
      features: [
        "GMB Optimization",
        "Local SEO",
        "Technical SEO Auditing",
        "On-page & Off-page SEO",
        "Keyword Conquest Strategy"
      ],
      color: "from-emerald-500 to-teal-600",
      glowColor: "rgba(16, 185, 129, 0.4)",
      metric: "#1 Map Rank",
      metricLabel: "Local Geo-Grid Target",
      tech: ["Google Map API", "Technical Schema", "Geo-Targeting", "Semrush Mastery"]
    },
    {
      id: "ai-video",
      title: "AI Video Production",
      badge: "NEXT-GEN CREATIVE",
      description: "Harness premium custom generative artificial intelligence to produce cinema-grade marketing video promotions, advertisements, and product explainers at scale.",
      icon: Video,
      features: [
        "AI Ads & Promos",
        "Product Videos",
        "Promotional Videos",
        "Explainer Videos"
      ],
      color: "from-pink-500 to-rose-600",
      glowColor: "rgba(236, 72, 153, 0.4)",
      metric: "10x Cheaper",
      metricLabel: "Production Cost Reduced",
      tech: ["ElevenLabs AI", "Midjourney Render", "Stable Diffusion", "CapCut Pro"]
    },
    {
      id: "reels",
      title: "Marketing Reels",
      badge: "ATTENTION MONETIZER",
      description: "Deploy professionally scripted and edited short-form videos tailored to capture rapid attention, boost algorithmic reach, and fuel consistent direct-message leads.",
      icon: Flame,
      features: [
        "Instagram Reels",
        "YouTube Shorts",
        "Facebook Reels",
        "Brand Storytelling Systems"
      ],
      color: "from-amber-500 to-orange-600",
      glowColor: "rgba(245, 158, 11, 0.4)",
      metric: "+450k Avg Views",
      metricLabel: "Attention Algorithmic Retention",
      tech: ["TikTok Algorithm Hooking", "DaVinci Resolve Studio", "Viral Cap Editing"]
    }
  ];

  return (
    <section id="services" className="relative py-24 bg-black/40 scroll-mt-20 overflow-hidden">
      {/* Background orbs */}
      <div className="absolute right-0 top-1/4 w-80 h-80 rounded-full bg-purple-900/10 blur-[100px] pointer-events-none" />
      <div className="absolute left-0 bottom-1/4 w-80 h-80 rounded-full bg-indigo-900/10 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-[10px] font-bold tracking-widest text-[#A855F7] uppercase mb-4">
            <Cpu className="w-3.5 h-3.5 text-[#A855F7] animate-pulse" />
            ENGINEERED GROWTH ECOSYSTEMS
          </div>
          <h2 className="text-4xl sm:text-6xl font-heading font-extrabold text-white tracking-tight leading-none mb-4">
            Our Premium <span className="text-gradient-purple">Growth Services</span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base font-sans-premium max-w-xl mx-auto">
            We don't sell individual tasks. We build continuous growth frameworks that link high-converting code, search visibility, and viral media together.
          </p>

          {/* Quick service selector tags */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {services.map((s) => {
              const Icon = s.icon;
              const isActive = activeService === s.id;
              return (
                <button
                  key={s.id}
                  onClick={() => setActiveService(s.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold tracking-wider uppercase transition-all duration-300 cursor-pointer ${
                    isActive 
                      ? "bg-purple-600 text-white shadow-lg shadow-purple-500/25 border border-purple-400"
                      : "bg-[#121118]/80 text-gray-400 border border-purple-500/10 hover:text-white hover:border-purple-500/30"
                  }`}
                >
                  <Icon className="w-3.5 h-3.5" />
                  {s.title}
                </button>
              );
            })}
          </div>
        </div>

        {/* Dynamic Display Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* LEFT COLUMN: Deep description of active service */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <AnimatePresence mode="wait">
              {services.map((s) => {
                if (s.id !== activeService) return null;
                const Icon = s.icon;
                return (
                  <motion.div
                    key={s.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-6 h-full flex flex-col justify-between"
                  >
                    <div className="space-y-6">
                      <span className="text-[10px] font-mono-tech tracking-widest text-[#A855F7] bg-purple-500/10 border border-purple-500/30 px-3 py-1 rounded-full uppercase inline-block">
                        {s.badge}
                      </span>
                      
                      <div className="flex items-center gap-3">
                        <div className={`p-3 rounded-2xl bg-gradient-to-br ${s.color} text-white`}>
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <h3 className="text-3xl font-heading font-black text-white">
                          {s.title}
                        </h3>
                      </div>

                      <p className="text-gray-300 text-sm sm:text-base leading-relaxed font-sans-premium">
                        {s.description}
                      </p>

                      {/* Technical specifications */}
                      <div className="space-y-2 pt-2">
                        <span className="text-[10px] text-gray-500 font-mono-tech tracking-wider block uppercase">Modern Tech Stack Utilized:</span>
                        <div className="flex flex-wrap gap-1.5">
                          {s.tech.map((t) => (
                            <span key={t} className="px-2 py-0.5 rounded bg-[#15141d] border border-purple-500/10 text-purple-300 text-[10px] font-mono-tech font-medium">
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Highlight stats box */}
                      <div className="p-4 rounded-xl bg-purple-950/20 border border-purple-500/10 flex items-center justify-between mt-4">
                        <div>
                          <span className="text-[9px] text-gray-400 font-mono-tech block uppercase">{s.metricLabel}</span>
                          <span className="text-lg font-bold text-white font-heading">{s.metric}</span>
                        </div>
                        <Zap className="w-5 h-5 text-purple-400 animate-bounce" />
                      </div>
                    </div>

                    <div className="pt-6">
                      <button
                        onClick={() => onSelectService(s.title)}
                        className="w-full sm:w-auto flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-xs font-bold uppercase text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:shadow-lg hover:shadow-purple-500/20 transition-all cursor-pointer group"
                      >
                        Request {s.title} Setup
                        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                      </button>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>

          {/* RIGHT COLUMN: Feature Breakdown & Preview Cards Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {services.map((service) => {
              const sIcon = service.icon;
              const isActive = service.id === activeService;
              return (
                <motion.div
                  key={service.id}
                  onClick={() => setActiveService(service.id)}
                  whileHover={{ scale: 1.01 }}
                  className={`p-6 rounded-2xl cursor-pointer transition-all duration-300 flex flex-col justify-between ${
                    isActive 
                      ? "bg-[#181524]/90 border-2 border-purple-500 shadow-[0_0_30px_rgba(139,92,246,0.15)]"
                      : "bg-[#111016]/90 border border-purple-500/10 hover:border-purple-500/30 hover:bg-[#15131d]/90"
                  }`}
                >
                  <div>
                    {/* Header */}
                    <div className="flex items-center justify-between mb-4">
                      <div className={`p-2 rounded-xl ${isActive ? 'bg-purple-600 text-white' : 'bg-[#1a1921] text-purple-400'}`}>
                        {sIcon && <service.icon className="w-4.5 h-4.5" />}
                      </div>
                      {isActive ? (
                        <span className="text-[9px] bg-purple-500 text-white px-2 py-0.5 rounded-full font-bold uppercase tracking-wider animate-pulse">ACTIVE SERVICE</span>
                      ) : (
                        <ChevronRight className="w-4 h-4 text-gray-500" />
                      )}
                    </div>

                    <h4 className={`text-base font-heading font-bold mb-2 transition-colors ${isActive ? 'text-white' : 'text-gray-300'}`}>
                      {service.title}
                    </h4>

                    {/* Features checklist */}
                    <ul className="space-y-2 mt-4">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs">
                          <span className={`p-0.5 rounded-full mt-0.5 shrink-0 ${isActive ? 'bg-purple-500 text-white' : 'bg-purple-950 text-purple-400'}`}>
                            <Check className="w-3 h-3" />
                          </span>
                          <span className={isActive ? "text-gray-200" : "text-gray-400"}>
                            {feature}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Micro label */}
                  <div className="mt-6 pt-3 border-t border-purple-500/5 flex items-center justify-between text-[10px] text-gray-500 font-mono-tech">
                    <span>{service.features.length} Core Systems</span>
                    <span className="text-[#A855F7]">Explore →</span>
                  </div>
                </motion.div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
