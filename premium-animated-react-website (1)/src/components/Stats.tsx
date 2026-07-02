import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Globe, Search, Play, Users2, ArrowUpRight } from "lucide-react";

interface StatItem {
  id: number;
  label: string;
  target: number;
  suffix: string;
  sub: string;
  icon: any;
  color: string;
}

export function Stats() {
  const statsData: StatItem[] = [
    {
      id: 1,
      label: "Websites Delivered",
      target: 124,
      suffix: "+",
      sub: "High conversion React/Vite platforms",
      icon: Globe,
      color: "from-[#6A11CB] to-[#8B5CF6]",
    },
    {
      id: 2,
      label: "Businesses Ranked",
      target: 88,
      suffix: "%",
      sub: "First page Google & Map pack dominance",
      icon: Search,
      color: "from-[#8B5CF6] to-[#A855F7]",
    },
    {
      id: 3,
      label: "AI Videos Created",
      target: 520,
      suffix: "+",
      sub: "Ultra-high quality synthetic media",
      icon: Play,
      color: "from-pink-500 to-[#A855F7]",
    },
    {
      id: 4,
      label: "Leads Generated",
      target: 14200,
      suffix: "+",
      sub: "Consistent sales inquiries & calls booked",
      icon: Users2,
      color: "from-blue-500 to-[#6A11CB]",
    },
  ];

  return (
    <section className="relative py-12 bg-black/60 border-y border-purple-500/10 overflow-hidden">
      {/* Background radial highlight */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(139,92,246,0.05),transparent_60%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {statsData.map((stat) => (
            <StatCard key={stat.id} stat={stat} />
          ))}
        </div>
      </div>
    </section>
  );
}

function StatCard({ stat }: { stat: StatItem }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = stat.target;
    if (end === 0) return;

    // Adjust step and speed based on the size of the target
    const duration = 2000; // ms
    const increment = Math.ceil(end / (duration / 16)); // ~60fps
    
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 16);

    return () => clearInterval(timer);
  }, [stat.target]);

  const IconComponent = stat.icon;

  return (
    <motion.div
      whileHover={{ y: -5, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="relative overflow-hidden rounded-2xl glass-panel p-6 border border-purple-500/10 flex flex-col justify-between"
    >
      {/* Absolute background color hint */}
      <div className="absolute -right-6 -bottom-6 w-24 h-24 rounded-full bg-purple-500/5 blur-xl pointer-events-none" />

      <div>
        {/* Card Header (Icon and small arrow) */}
        <div className="flex items-center justify-between mb-4">
          <div className={`p-2.5 rounded-xl bg-gradient-to-br ${stat.color} text-white shadow-md`}>
            <IconComponent className="w-5 h-5 text-white" />
          </div>
          <span className="text-[10px] text-gray-500 font-mono-tech flex items-center gap-1 uppercase">
            LIVE METRIC <ArrowUpRight className="w-3 h-3 text-purple-400" />
          </span>
        </div>

        {/* Big Number */}
        <div className="flex items-baseline mb-2">
          <span className="text-4xl lg:text-5xl font-heading font-black text-white tracking-tight text-glow">
            {count.toLocaleString()}
          </span>
          <span className="text-2xl lg:text-3xl font-heading font-extrabold text-[#A855F7] ml-0.5">
            {stat.suffix}
          </span>
        </div>

        {/* Labels and Sub */}
        <h4 className="text-sm font-bold text-gray-200 tracking-wide uppercase mb-1">
          {stat.label}
        </h4>
        <p className="text-xs text-gray-400 font-sans-premium leading-snug">
          {stat.sub}
        </p>
      </div>

      {/* Decorative interactive progress indicator */}
      <div className="mt-4 w-full bg-[#121118] h-1 rounded-full overflow-hidden">
        <motion.div 
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 2.2, ease: "easeOut" }}
          className={`h-full bg-gradient-to-r ${stat.color}`}
        />
      </div>
    </motion.div>
  );
}
