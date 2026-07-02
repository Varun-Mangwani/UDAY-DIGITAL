import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote, Star, CheckCircle } from "lucide-react";

interface Testimonial {
  name: string;
  business: string;
  feedback: string;
  rating: number;
  image: string;
  growthMetric: string;
}

export function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);

  const list: Testimonial[] = [
    {
      name: "Arthur Pendelton",
      business: "Apex Legal Counselors",
      feedback: "Uday Digital completely overhauled our ancient local GMB listing and rebuilt our booking pipeline in React. Within 60 days, our website traffic grew by 240% and our intake staff were fully booked with premium, pre-qualified regional cases.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=300&q=80",
      growthMetric: "+240% Legal Leads Index"
    },
    {
      name: "Sarah Chen",
      business: "Veloce Streetwear",
      feedback: "We were working with three different agencies and getting nowhere. Rohan's AI video ads and short Reels went viral on TikTok, garnering 1.8M combined views. Coupled with Elena's lightning checkout speed, our sales shot up 300% in a single month.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=300&q=80",
      growthMetric: "3.2x Return On Ad Spend"
    },
    {
      name: "Dr. Marcus Vance",
      business: "Vance Dental Group",
      feedback: "The level of engineering this team brings is unparalleled. They didn't just build us a dentist site; they constructed a comprehensive geo-targeted local authority system. We now rank #1 on maps for all dental search intents within a 15-mile radius.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=300&q=80",
      growthMetric: "+84 Booked Patients Monthly"
    },
    {
      name: "Marcus & Luciana",
      business: "Sweet Tooth Delights",
      feedback: "Our artisanal bakery and sweet shop needed a modern digital face. Uday Digital integrated a sensory online ordering system that links direct-delivery channels straight to our kitchen's WhatsApp. Our sales have doubled and customer feedback is flawless.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=300&q=80",
      growthMetric: "2x Delivery Revenue"
    }
  ];

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? list.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === list.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="relative py-24 bg-black/40 overflow-hidden">
      {/* Background glow orb */}
      <div className="absolute right-10 bottom-10 w-96 h-96 rounded-full bg-purple-900/10 blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-[10px] font-mono-tech tracking-widest text-[#A855F7] bg-purple-500/10 border border-purple-500/30 px-3 py-1 rounded-full uppercase inline-block mb-3">
            VERIFIED ROI TESTIMONIALS
          </span>
          <h2 className="text-3xl sm:text-5xl font-heading font-extrabold text-white tracking-tight">
            Client Partners <span className="text-gradient-purple">Sovereignty</span>
          </h2>
          <p className="text-gray-400 text-xs sm:text-sm mt-3 font-sans-premium">
            We don't talk about impressions. We talk about raw revenue, geographic domination, and scalable business results.
          </p>
        </div>

        {/* Testimonials Slider Area */}
        <div className="relative">
          
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#111016]/90 border border-purple-500/10 p-6 sm:p-10 rounded-3xl relative overflow-hidden"
            >
              {/* Floating Quote Icon */}
              <div className="absolute top-6 right-6 text-purple-500/10 pointer-events-none">
                <Quote className="w-24 h-24 stroke-[1.5]" />
              </div>

              {/* Left Column: Image, Metric and verified seal */}
              <div className="lg:col-span-4 flex flex-col items-center text-center space-y-4">
                <div className="relative">
                  <img
                    src={list[activeIndex].image}
                    alt={list[activeIndex].name}
                    className="w-28 h-28 sm:w-36 sm:h-36 object-cover rounded-2xl border-2 border-[#8B5CF6] shadow-xl"
                  />
                  <span className="absolute -bottom-2 -right-2 p-1.5 rounded-full bg-green-500 text-white shadow-lg flex items-center justify-center">
                    <CheckCircle className="w-4.5 h-4.5" />
                  </span>
                </div>

                <div>
                  <h4 className="font-heading text-lg font-bold text-white">
                    {list[activeIndex].name}
                  </h4>
                  <p className="text-xs text-[#A855F7] font-mono-tech tracking-wider uppercase mt-0.5">
                    {list[activeIndex].business}
                  </p>
                </div>

                <div className="px-3.5 py-1.5 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-[10px] font-mono-tech font-bold uppercase tracking-wider">
                  {list[activeIndex].growthMetric}
                </div>
              </div>

              {/* Right Column: Feedback content */}
              <div className="lg:col-span-8 space-y-6 flex flex-col justify-between h-full">
                
                {/* Stars ratings */}
                <div className="flex items-center gap-1">
                  {[...Array(list[activeIndex].rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400 text-glow" />
                  ))}
                  <span className="text-[11px] text-gray-500 font-mono-tech ml-2">VERIFIED 5.0 OUTCOME</span>
                </div>

                {/* Testimonial Core text */}
                <p className="text-gray-200 text-sm sm:text-base lg:text-lg font-sans-premium leading-relaxed italic">
                  “ {list[activeIndex].feedback} ”
                </p>

                {/* Bottom author and seal */}
                <div className="pt-4 border-t border-purple-500/15 flex items-center justify-between text-xs text-gray-500">
                  <span>Authorized Release</span>
                  <span className="text-emerald-400 font-semibold flex items-center gap-1">
                    <CheckCircle className="w-3.5 h-3.5" /> Checked & Authenticated
                  </span>
                </div>

              </div>

            </motion.div>
          </AnimatePresence>

          {/* Navigation Controls */}
          <div className="flex items-center justify-between mt-8">
            {/* Index Tracker */}
            <div className="flex gap-1.5">
              {list.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveIndex(i)}
                  className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                    activeIndex === i ? "w-8 bg-[#A855F7]" : "w-2 bg-purple-950/80"
                  }`}
                  aria-label={`Slide ${i + 1}`}
                />
              ))}
            </div>

            {/* Prev/Next arrows */}
            <div className="flex gap-2">
              <button
                onClick={handlePrev}
                className="p-3 rounded-xl bg-[#121118] border border-purple-500/10 hover:border-purple-500/40 text-purple-400 hover:text-white transition-all cursor-pointer"
                aria-label="Previous Testimonial"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={handleNext}
                className="p-3 rounded-xl bg-purple-600 hover:bg-purple-500 text-white transition-all cursor-pointer"
                aria-label="Next Testimonial"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
