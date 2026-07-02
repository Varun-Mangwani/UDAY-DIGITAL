import { motion } from "framer-motion";
import { X, Lock, ShoppingBag, ArrowRight, Menu, MapPin, Phone, Star } from "lucide-react";

interface DemoViewerProps {
  title: string;
  category: string;
  image: string;
  url: string;
  onClose: () => void;
}

export function DemoViewer({ title, category, image, url, onClose }: DemoViewerProps) {
  // Determine layout type based on category
  const isEcommerce = category.toLowerCase().includes("commerce") || category.toLowerCase().includes("shop");
  const isLocal = category.toLowerCase().includes("local") || category.toLowerCase().includes("practice");
  
  return (
    <div className="fixed inset-0 z-[300] flex flex-col bg-black/95 backdrop-blur-md p-2 sm:p-6 overflow-hidden">
      {/* GLOBAL CLOSE BUTTON */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 sm:top-6 sm:right-6 p-2.5 rounded-full bg-white/10 hover:bg-purple-600 text-white border border-white/20 transition-all z-[400] cursor-pointer shadow-xl backdrop-blur-md"
        title="Close Demo"
      >
        <X className="w-6 h-6" />
      </button>

      {/* MOCKED BROWSER WINDOW */}
      <motion.div 
        initial={{ opacity: 0, y: 50, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 50, scale: 0.95 }}
        className="flex-1 flex flex-col w-full max-w-7xl mx-auto bg-white rounded-t-2xl sm:rounded-2xl overflow-hidden shadow-2xl border border-white/10"
      >
        {/* Browser Top Bar */}
        <div className="h-14 bg-[#f1f1f1] border-b border-gray-300 flex items-center px-4 shrink-0 relative z-10">
          {/* Mac OS Window Buttons */}
          <div className="flex items-center gap-2 mr-4">
            <button onClick={onClose} className="w-3.5 h-3.5 rounded-full bg-[#FF5F56] border border-[#E0443E] flex items-center justify-center group cursor-pointer">
              <X className="w-2.5 h-2.5 text-black/50 opacity-0 group-hover:opacity-100 transition-opacity" />
            </button>
            <div className="w-3.5 h-3.5 rounded-full bg-[#FFBD2E] border border-[#DEA123]" />
            <div className="w-3.5 h-3.5 rounded-full bg-[#27C93F] border border-[#1AAB29]" />
          </div>

          {/* URL Bar */}
          <div className="flex-1 max-w-3xl mx-auto flex items-center justify-center">
            <div className="flex items-center gap-2 bg-white px-4 py-1.5 rounded-md text-xs text-gray-600 border border-gray-200 shadow-sm w-full max-w-md overflow-hidden">
              <Lock className="w-3 h-3 text-green-600 shrink-0" />
              <span className="truncate select-all">{url}</span>
            </div>
          </div>
          
          <button onClick={onClose} className="ml-4 text-sm font-bold text-gray-500 hover:text-black transition-colors hidden sm:block">
            Exit Demo
          </button>
        </div>

        {/* Browser Content (Scrollable Mock Website) */}
        <div className="flex-1 overflow-y-auto bg-gray-50 relative">
          
          {/* MOCK WEBSITE NAVIGATION */}
          <nav className="sticky top-0 w-full bg-white/90 backdrop-blur-md border-b border-gray-100 z-50 px-6 py-4 flex items-center justify-between">
            <div className="text-xl font-black text-gray-900 tracking-tight">
              {title.split(' ')[0]}<span className="text-purple-600">.</span>
            </div>
            
            <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
              <span className="hover:text-black cursor-pointer transition-colors">Home</span>
              <span className="hover:text-black cursor-pointer transition-colors">About</span>
              <span className="hover:text-black cursor-pointer transition-colors">Services</span>
              <span className="hover:text-black cursor-pointer transition-colors">Contact</span>
            </div>

            <div className="flex items-center gap-4">
              {isEcommerce && (
                <div className="relative cursor-pointer">
                  <ShoppingBag className="w-5 h-5 text-gray-700" />
                  <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-black text-white text-[8px] flex items-center justify-center rounded-full font-bold">2</span>
                </div>
              )}
              {!isEcommerce && (
                <button className="hidden sm:block px-5 py-2 bg-black text-white text-sm font-semibold rounded-full hover:bg-gray-800 transition-colors">
                  Get Started
                </button>
              )}
              <Menu className="w-6 h-6 text-gray-700 md:hidden" />
            </div>
          </nav>

          {/* MOCK WEBSITE HERO */}
          <section className="relative w-full min-h-[60vh] sm:min-h-[70vh] flex items-center pt-10 pb-20 px-6">
            <div className="absolute inset-0 z-0">
              <img src={image} alt="Hero" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
            </div>

            <div className="relative z-10 max-w-4xl mx-auto w-full text-white">
              {isLocal && (
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/20 backdrop-blur-md rounded-full text-xs font-medium mb-6">
                  <MapPin className="w-3.5 h-3.5 text-white" />
                  <span>Top Rated {category} in City</span>
                </div>
              )}
              
              <h1 className="text-5xl sm:text-7xl font-black leading-tight mb-6 max-w-3xl drop-shadow-lg">
                Premium Design for <br className="hidden sm:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-400">
                  {title}
                </span>
              </h1>
              
              <p className="text-lg sm:text-xl text-gray-200 mb-10 max-w-xl leading-relaxed">
                Experience unparalleled quality and service. This is a fully functional demonstration of the high-converting architectures we build.
              </p>
              
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <button className="w-full sm:w-auto px-8 py-4 bg-white text-black font-bold rounded-full hover:bg-gray-100 transition-colors flex items-center justify-center gap-2">
                  {isEcommerce ? "Shop Collection" : "Book Consultation"} <ArrowRight className="w-4 h-4" />
                </button>
                {isLocal && (
                  <button className="w-full sm:w-auto px-8 py-4 bg-black/40 backdrop-blur-md border border-white/20 text-white font-bold rounded-full hover:bg-black/60 transition-colors flex items-center justify-center gap-2">
                    <Phone className="w-4 h-4" /> Call Now
                  </button>
                )}
              </div>
            </div>
          </section>

          {/* MOCK WEBSITE CONTENT BLOCKS */}
          <section className="py-24 px-6 bg-white text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Trusted by Industry Leaders</h2>
            <p className="text-gray-500 max-w-2xl mx-auto mb-16">Our solutions scale automatically, ensuring seamless user experiences regardless of traffic spikes.</p>
            
            {/* Grid of mock features/products */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {[1, 2, 3].map((item) => (
                <div key={item} className="p-8 rounded-2xl bg-gray-50 border border-gray-100 hover:shadow-xl transition-shadow text-left">
                  <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-xl flex items-center justify-center mb-6">
                    <Star className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Feature {item}</h3>
                  <p className="text-gray-600 leading-relaxed">
                    A beautiful, responsive component designed to maximize user engagement and drive conversions effortlessly.
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* MOCK WEBSITE FOOTER */}
          <footer className="bg-gray-900 text-gray-400 py-12 px-6 text-center">
            <h2 className="text-2xl font-bold text-white mb-6">{title}</h2>
            <p className="mb-8">Powered by Uday Digital Advanced Architecture.</p>
            <div className="w-full h-px bg-white/10 mb-8" />
            <p className="text-sm">© {new Date().getFullYear()} {title}. All rights reserved.</p>
          </footer>

        </div>
      </motion.div>
    </div>
  );
}
