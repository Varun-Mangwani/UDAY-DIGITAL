import { motion } from "framer-motion";
import { 
  Terminal, 
  TrendingUp, 
  Video, 
  Flame, 
  Sparkles, 
  Search, 
  Layers, 
  ArrowRight,
  Eye,
  Heart,
  Play,
  CheckCircle2,
  Tv
} from "lucide-react";

interface HeroProps {
  onExploreServices: () => void;
  onViewDemos: () => void;
}

export function Hero({ onExploreServices, onViewDemos }: HeroProps) {
  // Animation presets
  const containerVariants: any = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants: any = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 20 },
    },
  };

  return (
    <section 
      id="home" 
      className="relative min-h-screen pt-32 pb-16 flex items-center justify-center overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* LEFT SIDE: Heading, Tag, Description, Buttons */}
          <motion.div 
            className="lg:col-span-7 space-y-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Tag / Chip */}
            <motion.div variants={itemVariants} className="inline-flex items-center">
              <span className="relative flex h-3 w-3 mr-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#A855F7] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-[#8B5CF6]"></span>
              </span>
              <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#8B5CF6]/10 border border-[#8B5CF6]/30 text-xs font-semibold tracking-widest text-[#A855F7] uppercase font-mono-tech">
                <Sparkles className="w-3.5 h-3.5 text-[#A855F7] animate-pulse" />
                DIGITAL GROWTH PARTNER
              </span>
            </motion.div>

            {/* Main Headline */}
            <div className="space-y-2">
              <motion.h1 
                variants={itemVariants}
                className="text-5xl sm:text-7xl lg:text-[85px] font-heading font-black leading-none tracking-tight"
              >
                <span className="block text-white transition-all duration-300 hover:text-[#A855F7] cursor-default">
                  Scale.
                </span>
                <span className="block text-gradient-purple font-extrabold transition-all duration-300 hover:text-white cursor-default">
                  Grow.
                </span>
                <span className="block text-white relative inline-block transition-all duration-300 hover:text-[#8B5CF6] cursor-default">
                  Dominate.
                  <span className="absolute -bottom-2 left-0 w-1/3 h-1.5 bg-gradient-to-r from-[#6A11CB] to-[#A855F7] rounded-full" />
                </span>
              </motion.h1>
            </div>

            {/* Subheadline */}
            <motion.p 
              variants={itemVariants}
              className="text-gray-300 text-base sm:text-lg lg:text-xl font-normal max-w-xl leading-relaxed font-sans-premium"
            >
              Custom Websites, High-Rank SEO, AI-Generated Videos & Short-form Content Strategies designed to turn businesses into absolute market leaders.
            </motion.p>

            {/* Buttons */}
            <motion.div 
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2"
            >
              <button
                onClick={onExploreServices}
                className="group relative px-8 py-4 rounded-xl font-bold tracking-wider text-sm uppercase text-white bg-gradient-to-r from-[#6A11CB] to-[#8B5CF6] hover:shadow-[0_0_30px_rgba(139,92,246,0.5)] transition-all duration-300 cursor-pointer flex items-center justify-center gap-2"
              >
                Explore Services
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5" />
              </button>

              <button
                onClick={onViewDemos}
                className="px-8 py-4 rounded-xl font-bold tracking-wider text-sm uppercase text-gray-300 hover:text-white bg-[#121118]/70 border border-purple-500/20 hover:border-purple-500/50 backdrop-blur-md transition-all duration-300 flex items-center justify-center gap-2"
              >
                <span>View Demos</span>
                <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-ping" />
              </button>
            </motion.div>

            {/* Mini Trust Badges */}
            <motion.div 
              variants={itemVariants}
              className="pt-6 border-t border-purple-950/40 flex flex-wrap items-center gap-6 text-gray-400 text-xs"
            >
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#A855F7]" />
                <span>Next-Gen React Architecture</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#A855F7]" />
                <span>AI-Driven Production workflows</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#A855F7]" />
                <span>ROI-First Framework</span>
              </div>
            </motion.div>

          </motion.div>

          {/* RIGHT SIDE: Interactive 3D Showcase Floating Cards */}
          <div className="lg:col-span-5 relative min-h-[500px] flex items-center justify-center mt-12 lg:mt-0">
            {/* Ambient Background Glow for Right Side */}
            <div className="absolute w-72 h-72 bg-gradient-to-tr from-[#6A11CB] to-[#A855F7] rounded-full blur-[90px] opacity-20 -z-10" />

            {/* Container holding the floating deck */}
            <div className="relative w-full max-w-[400px] h-[460px] flex items-center justify-center">

              {/* Card 1: Web Development Card */}
              <motion.div
                animate={{
                  y: [0, -15, 0],
                  rotate: [-3, -1, -3],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                whileHover={{ scale: 1.06, zIndex: 30, rotate: 1 }}
                className="absolute top-0 left-2 w-[280px] glass-panel p-4 rounded-2xl border-l-4 border-l-[#A855F7] shadow-xl cursor-grab active:cursor-grabbing z-20"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <div className="p-1.5 rounded-lg bg-purple-500/10 text-[#A855F7]">
                      <Terminal className="w-4 h-4" />
                    </div>
                    <span className="font-mono-tech text-[10px] uppercase tracking-wider text-purple-300">Development</span>
                  </div>
                  <div className="flex gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
                    <span className="w-1.5 h-1.5 rounded-full bg-yellow-500" />
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
                  </div>
                </div>

                <h4 className="font-heading text-sm font-bold text-white mb-1">Web Applications</h4>
                <p className="text-[11px] text-gray-400 mb-3">Lightning fast headless React engines built for maximum conversion</p>
                
                {/* Simulated interactive mini code block */}
                <div className="bg-[#070609] rounded-lg p-2.5 font-mono text-[9px] text-purple-200 border border-purple-500/10">
                  <span className="text-pink-400">const</span> <span className="text-blue-400">udayDigital</span> = <span className="text-yellow-400">useGrowth</span>()
                  <br />
                  udayDigital.<span className="text-[#A855F7]">scaleRevenue</span>() <span className="text-gray-500">// 10x</span>
                </div>

                <div className="mt-3 flex items-center justify-between text-[9px] text-gray-400 pt-2 border-t border-purple-500/10">
                  <span className="flex items-center gap-1"><Layers className="w-3 h-3 text-[#A855F7]" /> Core Web Vitals 100</span>
                  <span className="text-[#A855F7] font-semibold">Ready</span>
                </div>
              </motion.div>

              {/* Card 2: SEO & GMB Card */}
              <motion.div
                animate={{
                  y: [10, -10, 10],
                  rotate: [6, 4, 6],
                }}
                transition={{
                  duration: 7,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1.2
                }}
                whileHover={{ scale: 1.06, zIndex: 30, rotate: 1 }}
                className="absolute top-28 right-0 w-[270px] glass-panel p-4 rounded-2xl border-l-4 border-l-[#8B5CF6] shadow-xl cursor-grab active:cursor-grabbing z-10"
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <div className="p-1.5 rounded-lg bg-[#8B5CF6]/10 text-[#8B5CF6]">
                      <Search className="w-4 h-4" />
                    </div>
                    <span className="font-mono-tech text-[10px] uppercase tracking-wider text-[#8B5CF6]">SEO Engine</span>
                  </div>
                  <span className="px-2 py-0.5 rounded-full bg-green-500/10 text-green-400 text-[8px] font-bold">Rank #1</span>
                </div>

                <h4 className="font-heading text-sm font-bold text-white mb-1">GMB & Rank Mastery</h4>
                <p className="text-[11px] text-gray-400 mb-2">Dominate high-value intent keywords organically.</p>

                {/* Simulated growth graph */}
                <div className="bg-[#070609]/90 rounded-lg p-2 border border-[#8B5CF6]/10 flex items-center gap-3">
                  <div className="flex-1 flex flex-col">
                    <span className="text-[8px] text-gray-500 uppercase">Monthly Traffic</span>
                    <span className="text-xs font-bold text-white flex items-center gap-1">
                      +185.4%
                      <TrendingUp className="w-3 h-3 text-green-400" />
                    </span>
                  </div>
                  <div className="flex items-end gap-1 h-8">
                    <span className="w-1.5 bg-purple-900/60 h-2 rounded-t" />
                    <span className="w-1.5 bg-purple-800/80 h-4 rounded-t" />
                    <span className="w-1.5 bg-purple-600 h-6 rounded-t" />
                    <span className="w-1.5 bg-purple-400 h-8 rounded-t animate-pulse" />
                  </div>
                </div>

                <div className="mt-2.5 text-[9px] text-gray-500 flex justify-between">
                  <span>Google Map Pack</span>
                  <span className="text-white font-semibold">Active Optimization</span>
                </div>
              </motion.div>

              {/* Card 3: AI Video Production Card */}
              <motion.div
                animate={{
                  y: [-10, 10, -10],
                  rotate: [-8, -5, -8],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 2.5
                }}
                whileHover={{ scale: 1.06, zIndex: 30, rotate: 0 }}
                className="absolute bottom-16 left-0 w-[265px] glass-panel p-4 rounded-2xl border-l-4 border-l-pink-500 shadow-xl cursor-grab active:cursor-grabbing z-15"
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-1.5">
                    <Video className="w-3.5 h-3.5 text-pink-400" />
                    <span className="font-mono-tech text-[9px] uppercase tracking-wider text-pink-400">AI Ads Engine</span>
                  </div>
                  <div className="flex items-center gap-1 text-[8px] bg-pink-500/10 text-pink-400 px-1.5 py-0.5 rounded">
                    <Tv className="w-2.5 h-2.5" /> Generative AI
                  </div>
                </div>

                <h4 className="font-heading text-sm font-bold text-white mb-0.5">AI Video Production</h4>
                <p className="text-[11px] text-gray-400 mb-2">Scale commercial ads and brand storytelling in seconds.</p>

                {/* Mini video timeline view */}
                <div className="relative h-14 rounded-lg overflow-hidden bg-cover bg-center border border-pink-500/20 flex items-center justify-center group/vid bg-[url('https://images.unsplash.com/photo-1536240478700-b869070f9279?auto=format&fit=crop&w=400&q=80')]">
                  <div className="absolute inset-0 bg-black/60 group-hover/vid:bg-black/40 transition-colors" />
                  <div className="relative z-10 w-7 h-7 rounded-full bg-pink-500 flex items-center justify-center text-white shadow-lg animate-pulse">
                    <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
                  </div>
                  <span className="absolute bottom-1 right-1 text-[8px] bg-black/75 px-1 py-0.5 rounded text-white font-mono-tech">0:15 AI Draft</span>
                </div>
              </motion.div>

              {/* Card 4: Marketing Reels Card */}
              <motion.div
                animate={{
                  y: [12, -12, 12],
                  rotate: [1, -2, 1],
                }}
                transition={{
                  duration: 6.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5
                }}
                whileHover={{ scale: 1.06, zIndex: 30, rotate: 2 }}
                className="absolute bottom-0 right-4 w-[250px] glass-panel p-4 rounded-2xl border-l-4 border-l-amber-500 shadow-xl cursor-grab active:cursor-grabbing z-10"
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-1.5">
                    <Flame className="w-3.5 h-3.5 text-amber-500" />
                    <span className="font-mono-tech text-[9px] uppercase tracking-wider text-amber-500">Short-Form Content</span>
                  </div>
                  <span className="text-[8px] bg-amber-500/10 text-amber-500 font-bold px-1.5 py-0.5 rounded animate-pulse">VIRAL</span>
                </div>

                <h4 className="font-heading text-sm font-bold text-white mb-0.5">Marketing Reels</h4>
                <p className="text-[11px] text-gray-400 mb-2">Instagram, TikTok & Shorts engineered to captivate attention.</p>

                {/* Reels simulator statistics */}
                <div className="bg-[#0c0b10] rounded-lg p-2 border border-amber-500/10">
                  <div className="flex justify-between items-center text-[9px] text-gray-400 mb-1">
                    <span>Average Views</span>
                    <span className="text-white font-bold">450,000+</span>
                  </div>
                  <div className="flex gap-2 items-center">
                    <span className="flex items-center gap-0.5 text-[8px] text-red-400"><Heart className="w-2.5 h-2.5 fill-current" /> 42k</span>
                    <span className="flex items-center gap-0.5 text-[8px] text-blue-400"><Eye className="w-2.5 h-2.5" /> 680 Shares</span>
                    <span className="text-[8.5px] text-amber-400 ml-auto">98% Engagement</span>
                  </div>
                </div>
              </motion.div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
