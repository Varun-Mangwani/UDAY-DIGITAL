import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight, PhoneCall, Sparkles } from "lucide-react";

interface NavbarProps {
  onOpenConsultation: () => void;
  activeSection: string;
  setActiveSection: (sec: string) => void;
}

export function Navbar({ onOpenConsultation, activeSection, setActiveSection }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Home", href: "#home", id: "home" },
    { label: "Services", href: "#services", id: "services" },
    { label: "Our Process", href: "#process", id: "process" },
    { label: "About", href: "#about", id: "about" },
    { label: "Why Us", href: "#why-us", id: "why-us" },
    { label: "Demos", href: "#demos", id: "demos" },
    { label: "Contact", href: "#contact", id: "contact" },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setActiveSection(id);
    const target = document.getElementById(id);
    if (target) {
      const offset = 80; // height of sticky nav
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = target.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
    setMobileMenuOpen(false);
  };

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-[#0c0b10]/75 backdrop-blur-md border-b border-purple-500/15 py-3 shadow-lg shadow-purple-950/20"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Left side Logo */}
            <a
              href="#home"
              onClick={(e) => handleNavClick(e, "home")}
              className="flex items-center gap-2.5 group cursor-pointer"
            >
              <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-tr from-[#6A11CB] to-[#A855F7] p-[1.5px] transition-transform duration-300 group-hover:scale-105 group-hover:rotate-6">
                <div className="w-full h-full bg-[#0c0b10] rounded-[10px] flex items-center justify-center">
                  <span className="font-heading text-lg font-extrabold text-[#A855F7] tracking-tighter">U</span>
                </div>
                {/* Logo glow background */}
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-xl blur opacity-30 group-hover:opacity-75 transition duration-500" />
              </div>
              <div className="flex flex-col">
                <span className="font-heading text-lg md:text-xl font-black tracking-widest text-white leading-none">
                  UDAY <span className="text-[#A855F7] text-glow">DIGITAL</span>
                </span>
                <span className="text-[9px] text-[#A855F7]/80 font-mono-tech tracking-widest uppercase">
                  Growth Studio
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-1 bg-[#121118]/50 border border-purple-500/10 rounded-full px-1.5 py-1 backdrop-blur-sm">
              {navItems.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.id)}
                    className={`relative px-4 py-2 rounded-full text-xs font-medium tracking-wide uppercase transition-all duration-300 ${
                      isActive
                        ? "text-white"
                        : "text-gray-400 hover:text-white"
                    }`}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="navBubble"
                        className="absolute inset-0 bg-gradient-to-r from-purple-900/40 to-indigo-900/40 border border-purple-500/20 rounded-full -z-10"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                    {item.label}
                  </a>
                );
              })}
            </nav>

            {/* Right Side Consultation CTA */}
            <div className="hidden sm:flex items-center gap-4">
              <button
                onClick={onOpenConsultation}
                className="relative group overflow-hidden px-5 py-2.5 rounded-full text-xs font-semibold tracking-wider uppercase text-white bg-gradient-to-r from-[#6A11CB] to-[#A855F7] hover:shadow-[0_0_25px_rgba(168,85,247,0.55)] transition-all duration-300 cursor-pointer"
              >
                <span className="relative z-10 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-purple-200 animate-pulse" />
                  Book Consultation
                  <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-[#A855F7] to-[#6A11CB] opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-0" />
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex lg:hidden items-center gap-3">
              <button
                onClick={onOpenConsultation}
                className="sm:hidden px-3.5 py-2 rounded-full text-[10px] font-bold tracking-wider uppercase text-white bg-purple-600 hover:bg-purple-500 transition-colors"
              >
                Book
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg bg-[#121118] border border-purple-500/20 text-purple-400 hover:text-white focus:outline-none cursor-pointer"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden bg-[#0e0d14]/95 border-b border-purple-500/20 backdrop-blur-lg"
            >
              <div className="px-4 pt-2 pb-6 space-y-2">
                {navItems.map((item) => {
                  const isActive = activeSection === item.id;
                  return (
                    <a
                      key={item.label}
                      href={item.href}
                      onClick={(e) => handleNavClick(e, item.id)}
                      className={`block px-4 py-3 rounded-xl text-sm font-semibold tracking-wider uppercase transition-all ${
                        isActive
                          ? "bg-purple-950/40 text-purple-400 border-l-4 border-purple-500 pl-3"
                          : "text-gray-300 hover:text-white hover:bg-purple-950/20 pl-4"
                      }`}
                    >
                      {item.label}
                    </a>
                  );
                })}
                <div className="pt-4 border-t border-purple-500/15">
                  <button
                    onClick={() => {
                      setMobileMenuOpen(false);
                      onOpenConsultation();
                    }}
                    className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-xs font-bold uppercase text-white bg-gradient-to-r from-purple-600 to-indigo-600 shadow-md shadow-purple-500/10"
                  >
                    <PhoneCall className="w-4 h-4 text-purple-200" />
                    Book Consultation
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
