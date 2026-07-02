import { useState } from "react";
import { motion } from "framer-motion";
import { 
  Compass, 
  Milestone, 
  Code, 
  Rocket, 
  LineChart, 
  Clock, 
  ChevronRight,
  CheckSquare
} from "lucide-react";

interface Step {
  number: string;
  title: string;
  tagline: string;
  description: string;
  icon: any;
  duration: string;
  deliverables: string[];
  metric: string;
}

export function Process() {
  const [activeStep, setActiveStep] = useState<number>(0);

  const steps: Step[] = [
    {
      number: "01",
      title: "Discover",
      tagline: "Deep Business Extraction",
      description: "We dive straight into your current business bottlenecks, audit your local search presence, spy on competitor keywords, and extract your ideal customer profiles.",
      icon: Compass,
      duration: "Days 1 - 3",
      deliverables: ["Competitor Gap Audit", "Keyword Potential Index", "Video Creative Hook Roadmap"],
      metric: "Alignment Check: 100%"
    },
    {
      number: "02",
      title: "Strategy",
      tagline: "Architecting the Growth Blueprint",
      description: "No guessing allowed. We engineer a bespoke roadmap of exact landing pages, GMB map priorities, scripted video scripts, and custom automation requirements.",
      icon: Milestone,
      duration: "Days 4 - 7",
      deliverables: ["Wireframe Blueprints", "SEO Local Dominance Map", "Script Storyboards"],
      metric: "ROI Forecast Drafted"
    },
    {
      number: "03",
      title: "Build",
      tagline: "Premium Coding & Production",
      description: "Our engineers craft high-fidelity React code while our video department records or generates premium cinematic ads and short-form video content simultaneously.",
      icon: Code,
      duration: "Weeks 2 - 3",
      deliverables: ["Headless Web Engine", "AI Prompt Render", "Interactive Schema Integration"],
      metric: "95+ Lighthouse Score"
    },
    {
      number: "04",
      title: "Launch",
      tagline: "Absolute Market Deployment",
      description: "We deploy with extreme optimization. Your high-speed website goes live, Google Schema is indexed, and optimized videos are scheduled on priority socials.",
      icon: Rocket,
      duration: "Week 4",
      deliverables: ["CDN Deployment", "Google Search Console Sync", "Campaign Activation"],
      metric: "Zero Downtime Launch"
    },
    {
      number: "05",
      title: "Scale",
      tagline: "Iterative Dominance Phase",
      description: "We continuously look at traffic flow, click-through-rates, form conversions, and video watch-time to double down on what generates maximum revenue for you.",
      icon: LineChart,
      duration: "Ongoing Partnership",
      deliverables: ["Bi-weekly Insights", "Iterative Conversion Optimization", "Viral Hook Refinements"],
      metric: "Monthly Compound Growth"
    },
  ];

  return (
    <section id="process" className="relative py-24 bg-black/70 scroll-mt-20 overflow-hidden">
      {/* Background visual graphics */}
      <div className="absolute inset-0 bg-perspective-grid opacity-15 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70vw] h-[30vh] bg-[#A855F7]/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <div className="max-w-xl">
            <span className="text-[10px] font-mono-tech tracking-widest text-[#A855F7] bg-purple-500/10 border border-purple-500/30 px-3 py-1 rounded-full uppercase inline-block mb-3">
              THE WORKFLOW ENGINE
            </span>
            <h2 className="text-4xl sm:text-6xl font-heading font-extrabold text-white tracking-tight leading-none">
              Our Way of <span className="text-gradient-purple">Working</span>
            </h2>
          </div>
          <p className="text-gray-400 text-sm max-w-sm font-sans-premium leading-relaxed">
            We follow a structured, rapid, high-impact growth methodology. No guesswork. Just raw data, professional execution, and continuous optimization.
          </p>
        </div>

        {/* Horizontal Timeline Tracker for Desktop */}
        <div className="hidden lg:block relative mb-12">
          {/* Timeline Line */}
          <div className="absolute top-12 left-[10%] right-[10%] h-[2px] bg-purple-900/40" />
          {/* Active indicator progress bar */}
          <motion.div 
            className="absolute top-12 left-[10%] h-[2px] bg-gradient-to-r from-purple-500 to-[#A855F7]"
            initial={{ width: "0%" }}
            animate={{ width: `${(activeStep / (steps.length - 1)) * 80}%` }}
            transition={{ duration: 0.5 }}
          />

          <div className="grid grid-cols-5 gap-4">
            {steps.map((step, idx) => {
              const isPassed = idx <= activeStep;
              const isActive = idx === activeStep;

              return (
                <div key={idx} className="relative text-center">
                  {/* Timeline node */}
                  <button
                    onClick={() => setActiveStep(idx)}
                    className="relative z-15 mx-auto w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 focus:outline-none cursor-pointer"
                    style={{
                      background: isActive 
                        ? "#8B5CF6" 
                        : isPassed 
                        ? "#3b1e6e" 
                        : "#121118",
                      border: isActive 
                        ? "4px solid #ffffff" 
                        : isPassed 
                        ? "2px solid #8B5CF6" 
                        : "2px solid rgba(139, 92, 246, 0.2)"
                    }}
                  >
                    <span className={`text-[10px] font-bold ${isActive ? 'text-black' : 'text-gray-400'}`}>
                      {step.number}
                    </span>
                  </button>

                  <div className="mt-4">
                    <span className={`text-[9px] font-mono-tech uppercase tracking-widest block transition-colors duration-300 ${
                      isActive ? 'text-[#A855F7]' : 'text-gray-500'
                    }`}>
                      {step.duration}
                    </span>
                    <h4 
                      onClick={() => setActiveStep(idx)}
                      className={`text-lg font-heading font-extrabold cursor-pointer mt-1 hover:text-white transition-colors ${
                        isActive ? 'text-white' : 'text-gray-400'
                      }`}
                    >
                      {step.title}
                    </h4>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Step Detail Card (Dynamic display of active timeline milestone) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left panel: Active Step Info */}
          <div className="lg:col-span-7">
            <div className="glass-panel p-8 rounded-3xl border border-purple-500/20 relative overflow-hidden h-full flex flex-col justify-between">
              
              {/* background designator number */}
              <div className="absolute right-0 top-0 text-[180px] font-heading font-black text-purple-500/[0.04] leading-none pointer-events-none select-none">
                {steps[activeStep].number}
              </div>

              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 rounded-2xl bg-purple-600/20 text-[#A855F7] border border-purple-500/20">
                    {(() => {
                      const ActiveIcon = steps[activeStep].icon;
                      return <ActiveIcon className="w-6 h-6" />;
                    })()}
                  </div>
                  <div>
                    <span className="text-[10px] font-mono-tech text-[#A855F7] uppercase tracking-wider block">
                      STAGE {steps[activeStep].number} — {steps[activeStep].duration}
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-heading font-black text-white">
                      {steps[activeStep].title}: <span className="text-gray-300 font-bold">{steps[activeStep].tagline}</span>
                    </h3>
                  </div>
                </div>

                <p className="text-gray-300 text-sm sm:text-base leading-relaxed font-sans-premium mb-8 max-w-2xl">
                  {steps[activeStep].description}
                </p>

                {/* Deliverables checklist */}
                <div className="space-y-3">
                  <span className="text-[10px] font-mono-tech text-gray-400 uppercase tracking-widest block">
                    STAGE DELIVERABLES & OUTCOMES:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {steps[activeStep].deliverables.map((item, id) => (
                      <div key={id} className="p-3 rounded-xl bg-black/50 border border-purple-500/10 flex items-center gap-2">
                        <CheckSquare className="w-4 h-4 text-green-400 shrink-0" />
                        <span className="text-[11px] text-gray-300 font-sans-premium font-medium">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-6 border-t border-purple-500/10 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-2 text-xs text-purple-300 font-mono-tech">
                  <Clock className="w-3.5 h-3.5 text-purple-400" />
                  <span>Timeline Metric: </span>
                  <span className="text-white font-bold">{steps[activeStep].metric}</span>
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => setActiveStep((prev) => (prev > 0 ? prev - 1 : steps.length - 1))}
                    className="px-3.5 py-1.5 rounded-lg text-[10px] font-bold uppercase tracking-wider bg-purple-950/40 border border-purple-500/20 text-purple-300 hover:text-white hover:bg-purple-900/40 cursor-pointer"
                  >
                    Prev Stage
                  </button>
                  <button
                    onClick={() => setActiveStep((prev) => (prev < steps.length - 1 ? prev + 1 : 0))}
                    className="px-3.5 py-1.5 rounded-lg text-[10px] font-bold uppercase tracking-wider bg-[#8B5CF6] text-white hover:bg-[#A855F7] cursor-pointer flex items-center gap-1"
                  >
                    Next Stage <ChevronRight className="w-3 h-3" />
                  </button>
                </div>
              </div>

            </div>
          </div>

          {/* Right panel: Timeline fast index view */}
          <div className="lg:col-span-5 space-y-3">
            {steps.map((step, idx) => {
              const stepActive = idx === activeStep;
              return (
                <div
                  key={idx}
                  onClick={() => setActiveStep(idx)}
                  className={`p-4 rounded-xl cursor-pointer transition-all duration-300 border flex items-center justify-between ${
                    stepActive 
                      ? "bg-gradient-to-r from-purple-950/40 to-indigo-950/40 border-[#8B5CF6] shadow-md shadow-purple-500/5"
                      : "bg-[#111016]/80 border-purple-500/5 hover:border-purple-500/20 hover:bg-[#15141c]/80"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className={`font-mono-tech text-xs font-bold ${stepActive ? 'text-[#8B5CF6]' : 'text-gray-500'}`}>
                      {step.number}
                    </span>
                    <div>
                      <h4 className={`text-sm font-heading font-bold ${stepActive ? 'text-white' : 'text-gray-400'}`}>
                        {step.title}
                      </h4>
                      <span className="text-[10px] text-gray-500 font-sans-premium block">{step.duration}</span>
                    </div>
                  </div>
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded uppercase ${
                    stepActive ? 'bg-purple-600/20 text-purple-400' : 'text-gray-600'
                  }`}>
                    {stepActive ? "Active" : "View"}
                  </span>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
