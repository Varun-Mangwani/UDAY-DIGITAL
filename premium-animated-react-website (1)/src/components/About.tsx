import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Terminal, 
  Search, 
  Cpu, 
  Video, 
  TrendingUp, 
  ArrowUpRight, 
  Users2,
  Award
} from "lucide-react";

interface TeamMember {
  name: string;
  role: string;
  avatar: string;
  bio: string;
  skills: { label: string; val: number }[];
  socials: { linkedin: string; twitter: string; github?: string };
}

export function About() {
  const [selectedMember, setSelectedMember] = useState<number>(0);

  const team: TeamMember[] = [
    {
      name: "Varun",
      role: "CEO & Founder",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
      bio: "The visionary force behind the agency. Specializes in comprehensive SEO strategies, Google My Business (GMB) optimization, and crafting high-converting website architectures to drive unprecedented growth.",
      skills: [
        { label: "SEO Strategies", val: 98 },
        { label: "GMB Optimization", val: 96 },
        { label: "Website Development", val: 94 }
      ],
      socials: {
        linkedin: "#",
        twitter: "#",
        github: "#"
      }
    },
    {
      name: "Amy",
      role: "Top Level Website Developer",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80",
      bio: "A strict perfectionist who converts heavy design concepts into lightweight, lightning-fast web platforms. Ensures zero bugs, pixel-perfect responsiveness, and top-tier performance.",
      skills: [
        { label: "Frontend Architecture", val: 99 },
        { label: "React & Modern Web", val: 97 },
        { label: "Performance Optimization", val: 95 }
      ],
      socials: {
        linkedin: "#",
        twitter: "#",
        github: "#"
      }
    },
    {
      name: "Uday",
      role: "SEO, AI Video & Marketing Expert",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80",
      bio: "Master of multi-channel marketing and AI video engineering. He scripts viral hooks, automates cinematic video nodes, and dominates organic search rankings to build massive digital authority.",
      skills: [
        { label: "SEO Dominance", val: 96 },
        { label: "AI Video Automation", val: 95 },
        { label: "Growth Marketing", val: 94 }
      ],
      socials: {
        linkedin: "#",
        twitter: "#",
        github: "#"
      }
    }
  ];

  const valueOfferings = [
    { label: "Web Development", desc: "Interactive react frameworks", icon: Terminal },
    { label: "SEO Optimization", desc: "First page organic index", icon: Search },
    { label: "AI Content Generation", desc: "High scale synthetic posts", icon: Cpu },
    { label: "Video Production", desc: "Cinema advertising reels", icon: Video },
    { label: "Lead Generation", desc: "Automatic booked sales calls", icon: TrendingUp },
  ];

  return (
    <section id="about" className="relative py-24 bg-black/50 scroll-mt-20 overflow-hidden">
      {/* Background aesthetics */}
      <div className="absolute top-0 right-1/4 w-96 h-96 rounded-full bg-indigo-900/10 blur-[130px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 rounded-full bg-purple-900/10 blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
          
          {/* LEFT SIDE: Brand Mission */}
          <div className="lg:col-span-6 space-y-8">
            <div>
              <span className="text-[10px] font-mono-tech tracking-widest text-[#A855F7] bg-[#8B5CF6]/10 border border-[#8B5CF6]/30 px-3 py-1 rounded-full uppercase inline-block mb-3">
                MISSION STATEMENT & CORE
              </span>
              <h2 className="text-3xl sm:text-5xl font-heading font-black text-white leading-tight mb-6">
                Building Digital Ecosystems, <span className="text-gradient-purple">Not Just Websites.</span>
              </h2>
              
              <div className="space-y-4 text-gray-300 font-sans-premium text-sm sm:text-base leading-relaxed">
                <p>
                  At <strong className="text-white">Uday Digital</strong>, we combine technology, creativity, and marketing to help businesses unlock their maximum growth potential.
                </p>
                <p>
                  Our mission is to provide ambitious businesses with everything they need under one roof:
                </p>
              </div>
            </div>

            {/* List of offerings under one roof */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {valueOfferings.map((offering, idx) => {
                const Icon = offering.icon;
                return (
                  <div key={idx} className="p-3.5 rounded-xl bg-[#121118]/80 border border-purple-500/10 flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-[#8B5CF6]/10 text-[#A855F7]">
                      <Icon className="w-4.5 h-4.5" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-white uppercase tracking-wider">{offering.label}</h4>
                      <p className="text-[10px] text-gray-400">{offering.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Crucial tagline */}
            <div className="relative p-6 rounded-2xl bg-gradient-to-r from-purple-950/40 to-indigo-950/40 border border-purple-500/20 overflow-hidden">
              <div className="absolute right-3 bottom-3 text-purple-500/10">
                <Award className="w-20 h-20" />
              </div>
              <span className="font-heading text-xl sm:text-2xl font-black text-white block">
                “We don't sell services.
                <br />
                We build <span className="text-[#A855F7]">growth systems.</span>”
              </span>
              <p className="text-xs text-gray-400 mt-2 font-mono-tech tracking-wide uppercase">
                Uday Digital — Continued Evolution
              </p>
            </div>
          </div>

          {/* RIGHT SIDE: Animated Team Showcase */}
          <div className="lg:col-span-6">
            <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-purple-500/20 relative">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                  <Users2 className="w-5 h-5 text-purple-400" />
                  <span className="font-heading text-lg font-bold text-white">Meet the Minds</span>
                </div>
                <span className="text-[10px] font-mono-tech text-gray-500 uppercase tracking-widest">
                  Click a founder to read bio
                </span>
              </div>

              {/* Team Selector Avatars */}
              <div className="flex gap-3 mb-8">
                {team.map((member, idx) => (
                  <button
                    key={member.name}
                    onClick={() => setSelectedMember(idx)}
                    className={`relative p-1 rounded-2xl overflow-hidden transition-all duration-300 cursor-pointer ${
                      selectedMember === idx 
                        ? "bg-gradient-to-tr from-purple-500 to-[#A855F7] scale-105 shadow-md shadow-purple-500/20"
                        : "bg-[#111016] border border-purple-500/10 grayscale opacity-60 hover:grayscale-0 hover:opacity-100"
                    }`}
                  >
                    <img 
                      src={member.avatar} 
                      alt={member.name} 
                      className="w-14 h-14 object-cover rounded-xl"
                    />
                    {selectedMember === idx && (
                      <span className="absolute bottom-1 right-1 w-2.5 h-2.5 bg-green-400 border border-black rounded-full" />
                    )}
                  </button>
                ))}
              </div>

              {/* Detailed Member Presentation */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedMember}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -15 }}
                  transition={{ duration: 0.25 }}
                  className="space-y-6"
                >
                  <div>
                    <h3 className="text-2xl font-heading font-black text-white flex items-center gap-2">
                      {team[selectedMember].name}
                      <span className="text-xs font-mono-tech px-2 py-0.5 rounded bg-purple-950 text-[#A855F7] border border-purple-500/25">
                        Active
                      </span>
                    </h3>
                    <p className="text-xs text-[#A855F7] font-mono-tech font-bold uppercase tracking-widest mt-1">
                      {team[selectedMember].role}
                    </p>
                  </div>

                  <p className="text-gray-300 text-xs sm:text-sm font-sans-premium leading-relaxed">
                    {team[selectedMember].bio}
                  </p>

                  {/* Skills Metrics */}
                  <div className="space-y-3 pt-2">
                    <span className="text-[10px] text-gray-500 font-mono-tech tracking-wider block uppercase">Execution Specialties:</span>
                    <div className="space-y-2">
                      {team[selectedMember].skills.map((skill) => (
                        <div key={skill.label} className="space-y-1">
                          <div className="flex justify-between text-[11px]">
                            <span className="text-gray-300 font-medium">{skill.label}</span>
                            <span className="text-purple-400 font-bold">{skill.val}%</span>
                          </div>
                          <div className="h-1 bg-black/60 rounded-full overflow-hidden">
                            <motion.div 
                              initial={{ width: 0 }}
                              animate={{ width: `${skill.val}%` }}
                              transition={{ duration: 1.2, ease: "easeOut" }}
                              className="h-full bg-gradient-to-r from-purple-600 to-[#A855F7]"
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Social links */}
                  <div className="pt-4 border-t border-purple-500/10 flex items-center justify-between">
                    <div className="flex items-center gap-2 text-gray-400">
                      <a href={team[selectedMember].socials.linkedin} className="p-2 rounded-lg bg-black/40 border border-purple-500/10 hover:text-white hover:border-purple-500/30 transition-colors" aria-label="LinkedIn">
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                      </a>
                      <a href={team[selectedMember].socials.twitter} className="p-2 rounded-lg bg-black/40 border border-purple-500/10 hover:text-white hover:border-purple-500/30 transition-colors" aria-label="Twitter">
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.534 1.798-1.5 2.165-2.658-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
                      </a>
                      {team[selectedMember].socials.github && (
                        <a href={team[selectedMember].socials.github} className="p-2 rounded-lg bg-black/40 border border-purple-500/10 hover:text-white hover:border-purple-500/30 transition-colors" aria-label="GitHub">
                          <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.18-1.305.473-1.605-2.67-.3-5.462-1.335-5.462-5.924 0-1.309.468-2.38 1.235-3.22-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.22 0 4.601-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                        </a>
                      )}
                    </div>

                    <span className="text-[10px] text-purple-400/80 font-mono-tech flex items-center gap-1">
                      Direct Communication Active <ArrowUpRight className="w-3.5 h-3.5" />
                    </span>
                  </div>

                </motion.div>
              </AnimatePresence>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
