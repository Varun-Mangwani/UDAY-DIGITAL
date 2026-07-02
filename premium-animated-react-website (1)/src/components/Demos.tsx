import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Globe, 
  Search, 
  Video, 
  Play, 
  Eye, 
  BookOpen, 
  X, 
  Flame, 
  Heart, 
  Share2, 
  MessageSquare, 
  Check, 
  Sparkles
} from "lucide-react";

import { WebsiteProject, websiteProjects } from "../utils/demoData";

interface SEOArticle {
  id: string;
  title: string;
  category: string;
  readTime: string;
  summary: string;
  highlights: string[];
  fullContent: string[];
}

interface AIVideoItem {
  title: string;
  category: string;
  duration: string;
  thumbnail: string;
  youtubeId: string;
  tags: string[];
}

interface ReelItem {
  title: string;
  hook: string;
  views: string;
  likes: string;
  comments: string;
  image: string;
  audioTrack: string;
}

export function Demos() {
  const [activeCategory, setActiveCategory] = useState<"websites" | "seo" | "ai-videos" | "reels">("websites");
  
  // States for SEO hub modal
  const [selectedSEOArticle, setSelectedSEOArticle] = useState<SEOArticle | null>(null);
  
  // State for Website Case Study modal
  const [selectedWebsiteProject, setSelectedWebsiteProject] = useState<WebsiteProject | null>(null);
  
  // State for AI video lightbox
  const [activeVideoUrl, setActiveVideoUrl] = useState<string | null>(null);
  const [videoFilter, setVideoFilter] = useState<string>("All");

  // State for mock site notification demo
  const [demoNotice, setDemoNotice] = useState<string | null>(null);

  // 2. SEO KNOWLEDGE HUB (6 Articles)
  const seoArticles: SEOArticle[] = [
    {
      id: "what-is-seo",
      title: "What is SEO?",
      category: "SEO Foundation",
      readTime: "4 min read",
      summary: "Understanding the compound interest mechanics of Search Engine Optimization and how it outperforms paid ads in the long-term.",
      highlights: ["Search Engine Mechanics", "User Intent Matching", "On-page trust indicators"],
      fullContent: [
        "Search Engine Optimization (SEO) is the scientific art of aligning your website's content, structure, and speed to match Google's search algorithms.",
        "Unlike paid ads which shut down the second you stop spending money, SEO acts like compound interest. Once your content is ranked at the top of Google, it continues to deliver highly qualified leads completely free, 24 hours a day.",
        "Google processes over 8.5 billion searches per day. The businesses occupying the top 3 spots capture over 60% of all user clicks. If your business is on page 2, you are practically invisible."
      ]
    },
    {
      id: "local-seo-guide",
      title: "Local SEO Guide",
      category: "Local Mastery",
      readTime: "6 min read",
      summary: "How to capture local customer intent the exact second they search for high-value services in your regional radius.",
      highlights: ["Geotargeted content structures", "Local citation building", "Localized backlink profiles"],
      fullContent: [
        "Local SEO is a sub-discipline focused exclusively on ranking for search queries that contain geographical modifiers (e.g., 'dentist near me', 'sweet shop in Dallas').",
        "Google displays local results in a special interface called the Local Map Pack. Ranking in this map pack relies heavily on localized schema markup, consistent NAP (Name, Address, Phone) citations, and geotargeted content pages.",
        "We structure secondary local pages on your website that directly address specific neighborhoods and zip codes to maximize regional coverage."
      ]
    },
    {
      id: "gmb-optimization",
      title: "Google My Business Optimization",
      category: "Map Dominance",
      readTime: "5 min read",
      summary: "Step-by-step instructions to convert your Google My Business profile into a lead-generation machine.",
      highlights: ["Map verification blueprint", "Review velocity systems", "Image metadata geotagging"],
      fullContent: [
        "Your Google Business Profile (formerly GMB) is the highest-converting digital real estate your local business owns.",
        "To optimize it for Rank #1, you must maintain a rapid review velocity (receiving fresh reviews weekly), respond to every review within 24 hours, upload high-resolution photos embedded with local coordinate metadata, and continuously post weekly status updates.",
        "Uday Digital sets up custom automation loops that automatically request glowing 5-star reviews from your happy clients right after a transaction."
      ]
    },
    {
      id: "keyword-basics",
      title: "Keyword Research Basics",
      category: "Strategy",
      readTime: "4 min read",
      summary: "How to target transactional keywords instead of generic terms that consume resources but never convert into sales.",
      highlights: ["Transactional intent keywords", "Search volume vs Difficulty", "Long-tail search opportunities"],
      fullContent: [
        "Not all traffic is created equal. Ranking for 'free website tips' brings readers who want things for free. Ranking for 'hire react developer near me' brings active buyers with credit cards ready.",
        "We prioritize high-intent long-tail keywords. These are longer, highly specific phrases that are easier to rank for and convert at triple the rate of generic terms.",
        "Our process involves scanning competitors to steal their highest-value revenue-generating keywords."
      ]
    },
    {
      id: "technical-seo",
      title: "Technical SEO Explained",
      category: "Advanced Code",
      readTime: "5 min read",
      summary: "Why Google penalizes slow, poorly coded websites and how a high-performance React architecture solves it.",
      highlights: ["Lighthouse speed audits", "JSON-LD schema injections", "Mobile responsiveness standards"],
      fullContent: [
        "Google's search bots read code, not aesthetics. If your site has render-blocking javascript, massive uncompressed images, or missing canonical tags, Google will actively push you down the search results.",
        "We inject custom JSON-LD Schema markup directly into your React application's header. This tells Google's spiders exactly who you are, what services you offer, and where you are located.",
        "A fast site is no longer optional. Since Google's Mobile-First Indexing initiative, slow sites are heavily penalized. Our React builds load in under 1 second."
      ]
    },
    {
      id: "seo-vs-ads",
      title: "SEO vs Paid Ads",
      category: "ROI Analysis",
      readTime: "6 min read",
      summary: "A brutally honest comparison of organic positioning versus pay-per-click ad networks.",
      highlights: ["PPC inflation metrics", "Long-term compound ROI", "Omnipresence brand authority"],
      fullContent: [
        "Pay-Per-Click (PPC) ads are fantastic for immediate testing. However, ad platform costs rise by roughly 15% every single year. The moment your budget is exhausted, your leads drop to zero.",
        "SEO, by contrast, requires an upfront investment but becomes exponentially cheaper over time. A single article ranked top of Google can deliver 500 phone calls a month for years without costing a single dime in ad spend.",
        "Ideally, we recommend a hybrid strategy: use SEO for long-term dominance and social reels for viral immediate conversion spikes."
      ]
    }
  ];

  // 3. AI VIDEOS (Video Gallery)
  const aiVideos: AIVideoItem[] = [
    {
      title: "Hyper-Real Synthetic Commercial",
      category: "AI Ads",
      duration: "0:30",
      thumbnail: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=400&q=80",
      youtubeId: "https://www.youtube.com/embed/dQw4w9WgXcQ", // Simulated RickRoll or professional placeholders
      tags: ["AI Spokesperson", "Visual Rendering", "Ad Copy"]
    },
    {
      title: "Next-Gen SaaS Launch Intro",
      category: "Promotional Videos",
      duration: "1:00",
      thumbnail: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=400&q=80",
      youtubeId: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      tags: ["Dynamic UI Demo", "3D Animation", "Voicemail Sync"]
    },
    {
      title: "Automated Product Explainer",
      category: "Explainer Videos",
      duration: "1:30",
      thumbnail: "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&w=400&q=80",
      youtubeId: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      tags: ["SaaS Product Walkthrough", "AI Scripting", "Conversion focus"]
    },
    {
      title: "B2B Executive Brand Trailer",
      category: "Promotional Videos",
      duration: "0:45",
      thumbnail: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=400&q=80",
      youtubeId: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      tags: ["Corporate Brand Trailer", "AI B-roll Synthesis"]
    }
  ];

  // 4. MARKETING REELS (Instagram-style 9:16 showcase)
  const marketingReels: ReelItem[] = [
    {
      title: "Why Your Website is Losing 80% of Visitors",
      hook: "How to fix header layout in 5 seconds",
      views: "245K views",
      likes: "21K",
      comments: "380",
      image: "https://images.unsplash.com/photo-1542744094-3a31f103e35f?auto=format&fit=crop&w=400&q=80",
      audioTrack: "Original Audio — Uday Digital"
    },
    {
      title: "Steal This Hidden Google Maps Hack",
      hook: "Rank in the 3-pack instantly",
      views: "580K views",
      likes: "42K",
      comments: "912",
      image: "https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=400&q=80",
      audioTrack: "Local SEO Secrets — Trending Sound"
    },
    {
      title: "How We Generate $50k with AI Ads",
      hook: "From Midjourney to Facebook ads setup",
      views: "1.2M views",
      likes: "98K",
      comments: "1.4K",
      image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=400&q=80",
      audioTrack: "Viral Marketing Synthwave"
    }
  ];

  // Triggering visual notice simulated live demo
  const triggerDemoSimulator = (title: string) => {
    setDemoNotice(`Simulation Started: Launching sandbox container for "${title}"! In a real environment, this spins up a live preview staging sandbox.`);
    setTimeout(() => {
      setDemoNotice(null);
    }, 5500);
  };

  const filteredVideos = videoFilter === "All" 
    ? aiVideos 
    : aiVideos.filter(v => v.category === videoFilter);

  return (
    <section id="demos" className="relative py-24 bg-black/60 scroll-mt-20 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full bg-purple-500/10 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[10px] font-mono-tech tracking-widest text-[#A855F7] bg-[#8B5CF6]/10 border border-[#8B5CF6]/30 px-3 py-1 rounded-full uppercase inline-block mb-3">
            SANDBOX & PROOF PORTFOLIO
          </span>
          <h2 className="text-4xl sm:text-6xl font-heading font-extrabold text-white tracking-tight leading-none mb-4">
            Explore Our <span className="text-gradient-purple">Digital Demos</span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base font-sans-premium max-w-lg mx-auto">
            Interact with our systems. Browse high-converting websites, read premium SEO checklists, watch cinematic AI marketing ads, and view interactive short reels.
          </p>

          {/* Core categories toggles */}
          <div className="flex flex-wrap items-center justify-center gap-3 mt-10">
            <button
              onClick={() => setActiveCategory("websites")}
              className={`px-5 py-3 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-300 flex items-center gap-2 cursor-pointer ${
                activeCategory === "websites"
                  ? "bg-purple-600 text-white shadow-lg shadow-purple-500/30"
                  : "bg-[#121118] text-gray-400 border border-purple-500/10 hover:text-white hover:border-purple-500/30"
              }`}
            >
              <Globe className="w-4 h-4" />
              Websites Portfolio
            </button>
            <button
              onClick={() => setActiveCategory("seo")}
              className={`px-5 py-3 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-300 flex items-center gap-2 cursor-pointer ${
                activeCategory === "seo"
                  ? "bg-purple-600 text-white shadow-lg shadow-purple-500/30"
                  : "bg-[#121118] text-gray-400 border border-purple-500/10 hover:text-white hover:border-purple-500/30"
              }`}
            >
              <Search className="w-4 h-4" />
              SEO Knowledge Hub
            </button>
            <button
              onClick={() => setActiveCategory("ai-videos")}
              className={`px-5 py-3 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-300 flex items-center gap-2 cursor-pointer ${
                activeCategory === "ai-videos"
                  ? "bg-purple-600 text-white shadow-lg shadow-purple-500/30"
                  : "bg-[#121118] text-gray-400 border border-purple-500/10 hover:text-white hover:border-purple-500/30"
              }`}
            >
              <Video className="w-4 h-4" />
              AI Videos
            </button>
            <button
              onClick={() => setActiveCategory("reels")}
              className={`px-5 py-3 rounded-xl text-xs font-bold uppercase tracking-wider transition-all duration-300 flex items-center gap-2 cursor-pointer ${
                activeCategory === "reels"
                  ? "bg-purple-600 text-white shadow-lg shadow-purple-500/30"
                  : "bg-[#121118] text-gray-400 border border-purple-500/10 hover:text-white hover:border-purple-500/30"
              }`}
            >
              <Flame className="w-4 h-4" />
              Marketing Reels
            </button>
          </div>
        </div>

        {/* Dynamic Staging Notification */}
        <AnimatePresence>
          {demoNotice && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="mb-8 p-4 rounded-xl bg-purple-950/80 border border-purple-500 text-purple-200 text-xs flex items-center gap-3"
            >
              <Sparkles className="w-4 h-4 text-purple-400 animate-spin" />
              <span>{demoNotice}</span>
              <button onClick={() => setDemoNotice(null)} className="ml-auto text-white hover:text-purple-400">
                <X className="w-4 h-4" />
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* CATEGORY WORKSPACE RENDER */}
        <div className="min-h-[400px]">

          {/* 1. WEBSITES PORTFOLIO */}
          {activeCategory === "websites" && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {websiteProjects.map((project, idx) => (
                <div 
                  key={idx}
                  className="group rounded-2xl overflow-hidden bg-[#111016]/90 border border-purple-500/10 hover:border-purple-500/40 transition-all duration-300 flex flex-col justify-between"
                >
                  {/* Image Preview with Zoom Hover and overlay buttons */}
                  <div className="relative h-56 overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    {/* Visual Layer Grid Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                      <p className="text-white text-[11px] font-sans-premium">{project.caseStudy}</p>
                    </div>

                    <span className="absolute top-3 left-3 bg-[#0c0b10]/90 border border-purple-500/25 px-2.5 py-1 rounded text-[10px] font-bold text-purple-300 uppercase tracking-widest">
                      {project.category}
                    </span>
                  </div>

                  {/* Content Info */}
                  <div className="p-6 space-y-4">
                    <h3 className="text-xl font-heading font-black text-white group-hover:text-purple-400 transition-colors">
                      {project.title}
                    </h3>

                    {/* Tech badging */}
                    <div className="flex flex-wrap gap-1">
                      {project.tech.map((t, index) => (
                        <span key={index} className="px-2 py-0.5 rounded bg-purple-950/40 text-purple-300 text-[9px] font-mono-tech border border-purple-500/10">
                          {t}
                        </span>
                      ))}
                    </div>

                    {/* Action buttons */}
                    <div className="grid grid-cols-2 gap-3 pt-2">
                      <a
                        href={`/?demo=${encodeURIComponent(project.title)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-lg bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs uppercase transition-all cursor-pointer shadow-md"
                      >
                        <Globe className="w-3.5 h-3.5" />
                        Live Demo
                      </a>

                      <button
                        onClick={() => setSelectedWebsiteProject(project)}
                        className="flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-lg bg-black/40 border border-purple-500/20 hover:border-purple-500/50 text-gray-300 hover:text-white font-bold text-xs uppercase transition-all cursor-pointer"
                      >
                        <Eye className="w-3.5 h-3.5" />
                        Case Study
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          )}

          {/* 2. SEO KNOWLEDGE HUB (Grid + Modal view) */}
          {activeCategory === "seo" && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="space-y-6"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {seoArticles.map((article) => (
                  <div
                    key={article.id}
                    className="p-6 rounded-2xl bg-[#111016]/90 border border-purple-500/10 hover:border-purple-500/40 transition-all duration-300 flex flex-col justify-between group"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-[10px] font-mono-tech font-bold text-purple-400 bg-purple-950/40 px-2 py-0.5 rounded border border-purple-500/10">
                          {article.category}
                        </span>
                        <span className="text-[10px] text-gray-500 font-sans-premium">
                          {article.readTime}
                        </span>
                      </div>

                      <h3 className="text-lg font-heading font-black text-white group-hover:text-purple-400 transition-colors mb-2">
                        {article.title}
                      </h3>

                      <p className="text-gray-400 text-xs line-clamp-3 leading-relaxed mb-4">
                        {article.summary}
                      </p>

                      {/* Bullets */}
                      <div className="space-y-1.5">
                        {article.highlights.map((h, i) => (
                          <div key={i} className="flex items-center gap-1.5 text-[10px] text-purple-300">
                            <span className="w-1.5 h-1.5 bg-purple-500 rounded-full shrink-0" />
                            <span>{h}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="pt-6 border-t border-purple-500/5 mt-6">
                      <button
                        onClick={() => setSelectedSEOArticle(article)}
                        className="w-full flex items-center justify-center gap-2 px-4 py-2 rounded-xl text-xs font-bold uppercase bg-purple-950/40 text-purple-300 border border-purple-500/20 group-hover:bg-[#8B5CF6] group-hover:text-white transition-all cursor-pointer"
                      >
                        <BookOpen className="w-3.5 h-3.5" />
                        Unlock Article Modal
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {/* 3. AI VIDEOS GALLERY WITH PLAY OVERLAY */}
          {activeCategory === "ai-videos" && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="space-y-8"
            >
              {/* Category sub filters */}
              <div className="flex justify-center gap-2">
                {["All", "AI Ads", "Promotional Videos", "Explainer Videos"].map((category) => (
                  <button
                    key={category}
                    onClick={() => setVideoFilter(category)}
                    className={`px-3 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wider transition-all cursor-pointer ${
                      videoFilter === category
                        ? "bg-purple-600 text-white"
                        : "bg-purple-950/20 text-purple-300 hover:text-white"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>

              {/* Videos Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {filteredVideos.map((video, idx) => (
                  <div 
                    key={idx}
                    className="group glass-panel rounded-3xl overflow-hidden border border-purple-500/10 hover:border-purple-500/30 transition-all flex flex-col justify-between"
                  >
                    {/* Simulated Player Staging */}
                    <div className="relative h-64 overflow-hidden bg-black flex items-center justify-center">
                      <img 
                        src={video.thumbnail} 
                        alt={video.title}
                        className="absolute inset-0 w-full h-full object-cover opacity-70 group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/40 to-black/80" />

                      {/* Floating Play Indicator with Wave ring */}
                      <button
                        onClick={() => setActiveVideoUrl(video.youtubeId)}
                        className="relative z-10 w-16 h-10 rounded-2xl bg-purple-600 hover:bg-purple-500 hover:scale-110 flex items-center justify-center text-white transition-all duration-300 shadow-xl shadow-purple-900/40 cursor-pointer"
                      >
                        <Play className="w-5 h-5 fill-current" />
                      </button>

                      <span className="absolute bottom-3 right-3 bg-black/80 px-2.5 py-1 rounded text-[10px] font-mono-tech font-bold text-white">
                        {video.duration} AI Render
                      </span>
                      
                      <span className="absolute bottom-3 left-3 bg-[#A855F7]/90 px-2 py-0.5 rounded text-[9px] font-mono-tech text-white uppercase tracking-widest">
                        {video.category}
                      </span>
                    </div>

                    {/* Metadata */}
                    <div className="p-6 space-y-3">
                      <h3 className="text-lg font-heading font-black text-white">
                        {video.title}
                      </h3>
                      <div className="flex flex-wrap gap-1.5">
                        {video.tags.map((tag) => (
                          <span key={tag} className="text-[10px] text-gray-400 bg-purple-950/20 px-2 py-0.5 rounded-full border border-purple-500/5">
                            #{tag}
                          </span>
                        ))}
                      </div>
                      <p className="text-xs text-gray-400 pt-2 font-sans-premium">
                        Engineered with advanced temporal voice synth rendering and algorithmic storyboarding parameters.
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {/* 4. MARKETING REELS */}
          {activeCategory === "reels" && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto"
            >
              {marketingReels.map((reel, idx) => (
                <div
                  key={idx}
                  className="group relative rounded-3xl overflow-hidden border border-purple-500/10 hover:border-purple-500/40 transition-all duration-500 bg-[#07060a]"
                >
                  {/* Smartphone aspect frame container (9:16 approx) */}
                  <div className="relative h-[480px] overflow-hidden">
                    <img 
                      src={reel.image} 
                      alt={reel.title}
                      className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700"
                    />
                    
                    {/* Simulated Dark Mobile Glass Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-black/30" />

                    {/* Phone Header Mock */}
                    <div className="absolute top-4 inset-x-4 flex justify-between items-center text-white/70 text-[10px] font-mono-tech z-10">
                      <span className="flex items-center gap-1">
                        <Flame className="w-3.5 h-3.5 text-amber-500 animate-pulse" /> LIVE REEL DEMO
                      </span>
                      <span className="bg-black/40 px-2 py-0.5 rounded">9:16 Feed</span>
                    </div>

                    {/* Center Hover Play button */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <button 
                        onClick={() => triggerDemoSimulator(reel.title)}
                        className="p-4 rounded-full bg-amber-500 text-black font-bold uppercase text-xs tracking-wider flex items-center gap-1.5 shadow-lg transform scale-90 group-hover:scale-100 transition-all cursor-pointer"
                      >
                        <Play className="w-3.5 h-3.5 fill-current" /> Hover Playing
                      </button>
                    </div>

                    {/* Left Sidebar interactive overlay with vertical TikTok actions */}
                    <div className="absolute right-3 bottom-20 flex flex-col gap-4 text-white items-center z-10">
                      <button 
                        onClick={() => setDemoNotice(`Engaged: You Liked the Reel "${reel.title}"`)}
                        className="flex flex-col items-center cursor-pointer hover:text-amber-400 transition-colors"
                      >
                        <div className="p-2.5 rounded-full bg-black/60 border border-white/10 hover:bg-amber-500 hover:text-black transition-all">
                          <Heart className="w-4 h-4 fill-current text-red-500" />
                        </div>
                        <span className="text-[10px] font-mono-tech mt-1">{reel.likes}</span>
                      </button>

                      <button 
                        onClick={() => setDemoNotice(`Comments opened for "${reel.title}". Active Engagement is high!`)}
                        className="flex flex-col items-center cursor-pointer hover:text-amber-400"
                      >
                        <div className="p-2.5 rounded-full bg-black/60 border border-white/10 hover:bg-amber-500 hover:text-black transition-all">
                          <MessageSquare className="w-4 h-4 text-white" />
                        </div>
                        <span className="text-[10px] font-mono-tech mt-1">{reel.comments}</span>
                      </button>

                      <button 
                        onClick={() => triggerDemoSimulator(reel.title)}
                        className="flex flex-col items-center cursor-pointer hover:text-amber-400"
                      >
                        <div className="p-2.5 rounded-full bg-black/60 border border-white/10 hover:bg-amber-500 hover:text-black transition-all">
                          <Share2 className="w-4 h-4 text-white" />
                        </div>
                        <span className="text-[9px] font-mono-tech mt-1">Share</span>
                      </button>
                    </div>

                    {/* Bottom Info details inside Phone frame */}
                    <div className="absolute bottom-4 left-4 right-16 text-white space-y-2 z-10">
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] bg-red-600 px-2 py-0.5 rounded font-bold tracking-widest uppercase">VIRAL</span>
                        <span className="text-[11px] text-gray-300 font-bold font-mono-tech">{reel.views}</span>
                      </div>
                      
                      <h4 className="text-sm font-heading font-extrabold leading-tight text-white line-clamp-2">
                        {reel.title}
                      </h4>
                      
                      <p className="text-[11px] text-amber-300 italic font-sans-premium">
                        Hook: "{reel.hook}"
                      </p>

                      <div className="pt-1.5 flex items-center gap-1.5 text-gray-400 text-[10px] overflow-hidden">
                        <span className="shrink-0 font-mono-tech">🎵</span>
                        <span className="text-gray-300 animate-pulse">{reel.audioTrack}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          )}

        </div>

      </div>

      {/* MODAL WINDOW FOR SEO ARTICLES */}
      <AnimatePresence>
        {selectedSEOArticle && (
          <div className="fixed inset-0 z-100 flex items-center justify-center p-4">
            {/* Backdrop blur */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedSEOArticle(null)}
              className="absolute inset-0 bg-black/85 backdrop-blur-md"
            />

            {/* Modal Body Container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 30 }}
              className="relative w-full max-w-2xl bg-[#0f0e15] border border-purple-500/30 rounded-3xl p-6 sm:p-8 overflow-y-auto max-h-[85vh] shadow-2xl shadow-purple-950/50 z-10"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedSEOArticle(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-purple-950/40 text-gray-400 hover:text-white border border-purple-500/15 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Category, Readtime Header */}
              <div className="flex items-center gap-3 text-[10px] font-mono-tech text-[#A855F7] mb-3">
                <span className="px-2.5 py-0.5 rounded bg-purple-950/60 border border-purple-500/20 uppercase">
                  {selectedSEOArticle.category}
                </span>
                <span>•</span>
                <span>{selectedSEOArticle.readTime}</span>
              </div>

              {/* Title */}
              <h3 className="text-2xl sm:text-3.5xl font-heading font-black text-white leading-tight mb-4">
                {selectedSEOArticle.title}
              </h3>

              {/* Summary italic box */}
              <div className="p-4 rounded-xl bg-purple-950/25 border-l-4 border-l-[#8B5CF6] text-purple-200 text-xs sm:text-sm font-sans-premium mb-6">
                {selectedSEOArticle.summary}
              </div>

              {/* Full Content */}
              <div className="space-y-4 text-gray-300 text-xs sm:text-sm leading-relaxed font-sans-premium mb-6">
                {selectedSEOArticle.fullContent.map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>

              {/* Checklist key takeaway */}
              <div className="p-4 rounded-2xl bg-black/40 border border-purple-500/10 space-y-3">
                <span className="text-[10px] font-mono-tech text-purple-400 uppercase tracking-widest block font-bold">
                  KEY ACTIONABLE CHECKLIST & FORMULA:
                </span>
                <div className="space-y-2">
                  {selectedSEOArticle.highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs">
                      <span className="p-0.5 rounded-full bg-green-500/10 text-green-400 mt-0.5 shrink-0">
                        <Check className="w-3.5 h-3.5" />
                      </span>
                      <span className="text-gray-300">{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button inside Modal */}
              <div className="mt-8 flex items-center justify-between pt-4 border-t border-purple-500/10 text-xs">
                <span className="text-gray-500">Need this ranking system applied to your site?</span>
                <button
                  onClick={() => {
                    setSelectedSEOArticle(null);
                    // Open contact or consulting directly
                    const contactSection = document.getElementById("contact");
                    if (contactSection) {
                      contactSection.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                  className="px-4 py-2 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-bold uppercase tracking-wider text-[10px] cursor-pointer"
                >
                  Deploy this SEO Strategy
                </button>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* LIGHTBOX FOR AI VIDEOS */}
      <AnimatePresence>
        {activeVideoUrl && (
          <div className="fixed inset-0 z-100 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveVideoUrl(null)}
              className="absolute inset-0 bg-black/90 backdrop-blur-md"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-4xl bg-black rounded-3xl overflow-hidden aspect-video border border-purple-500/20 shadow-2xl z-10"
            >
              {/* Close Lightbox */}
              <button
                onClick={() => setActiveVideoUrl(null)}
                className="absolute -top-12 sm:top-4 right-2 sm:right-4 p-2.5 rounded-full bg-black/80 text-white border border-purple-500/20 hover:bg-purple-600 z-20 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="w-full h-full">
                {/* Embedded Video Staging Simulator (YouTube wrapper iframe) */}
                <iframe 
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1" 
                  title="YouTube video player" 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                  allowFullScreen
                />
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* CASE STUDY MODAL */}
      <AnimatePresence>
        {selectedWebsiteProject && (
          <div className="fixed inset-0 z-100 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedWebsiteProject(null)}
              className="absolute inset-0 bg-black/85 backdrop-blur-md"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 30 }}
              className="relative w-full max-w-2xl bg-[#0f0e15] border border-purple-500/30 rounded-3xl overflow-hidden shadow-2xl shadow-purple-950/50 z-10"
            >
              <div className="relative h-64 w-full">
                <img src={selectedWebsiteProject.image} alt={selectedWebsiteProject.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0f0e15] via-transparent to-black/40" />
                <button
                  onClick={() => setSelectedWebsiteProject(null)}
                  className="absolute top-4 right-4 p-2 rounded-full bg-black/50 text-white hover:bg-purple-600 transition-colors z-20 cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="p-6 sm:p-8 -mt-6 relative z-10">
                <div className="flex items-center gap-3 text-[10px] font-mono-tech text-[#A855F7] mb-3">
                  <span className="px-2.5 py-0.5 rounded bg-purple-950/60 border border-purple-500/20 uppercase">
                    {selectedWebsiteProject.category}
                  </span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-heading font-black text-white leading-tight mb-4">
                  {selectedWebsiteProject.title}
                </h3>
                <div className="p-4 rounded-xl bg-purple-950/25 border-l-4 border-l-[#8B5CF6] text-purple-200 text-sm font-sans-premium mb-6">
                  {selectedWebsiteProject.caseStudy}
                </div>
                <div className="mb-6">
                  <span className="text-[10px] font-mono-tech text-gray-500 uppercase tracking-widest block mb-2">Tech Stack Used:</span>
                  <div className="flex flex-wrap gap-2">
                    {selectedWebsiteProject.tech.map((t, i) => (
                      <span key={i} className="px-2.5 py-1 rounded-md bg-[#121118] border border-purple-500/10 text-gray-300 text-[11px] font-mono-tech">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="mt-8 flex items-center justify-end pt-4 border-t border-purple-500/10">
                  <a
                    href={`/?demo=${encodeURIComponent(selectedWebsiteProject.title)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-bold uppercase tracking-wider text-[11px] flex items-center gap-2 transition-all shadow-lg cursor-pointer"
                  >
                    View Live Site <Globe className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
}
