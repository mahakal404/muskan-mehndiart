"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    
    // Update glassmorphism state
    setScrolled(latest > 20);

    // Smart sticky logic
    if (latest > previous && latest > 50) {
      // Scrolling down and past threshold
      setHidden(true);
      if (isOpen) setIsOpen(false); // Close mobile menu when hiding
    } else {
      // Scrolling up or at the top
      setHidden(false);
    }
  });

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "Meet Muskan", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Academy", href: "#academy" },
    { name: "Gallery", href: "#gallery" },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    
    // Extract ID from href
    const targetId = href.replace(/.*\#/, "");
    const elem = document.getElementById(targetId);
    
    if (elem) {
      elem.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: hidden ? "-100%" : 0 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      className="fixed top-0 left-0 right-0 z-50 px-4 pt-4"
    >
      <div
        className={`max-w-7xl mx-auto rounded-2xl border transition-all duration-500 ${
          scrolled
            ? "bg-[#0B1120]/80 backdrop-blur-xl border-white/15 shadow-[0_8px_32px_rgba(0,0,0,0.4)]"
            : "bg-white/5 backdrop-blur-md border-white/10"
        }`}
      >
        <div className="px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            {/* Logo */}
            <a href="#home" onClick={(e) => handleNavClick(e, "#home")} className="flex items-center gap-3 group">
              <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-cyan-400/50 group-hover:border-cyan-400 group-hover:shadow-[0_0_10px_rgba(34,211,238,0.4)] transition-all duration-300">
                <Image
                  src="/mushkan.jpg"
                  alt="Muskan Mehndi Art Logo"
                  fill
                  sizes="56px"
                  priority
                  className="object-cover"
                />
              </div>
              <span className="font-heading text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent group-hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.6)] transition-all duration-300">
                Muskan Mehndi Art
              </span>
            </a>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="relative px-4 py-2 text-slate-300 hover:text-cyan-400 transition-colors duration-300 font-medium text-sm group"
                >
                  {link.name}
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full group-hover:w-3/4 transition-all duration-300 ease-out" />
                </a>
              ))}
              <a
                href="https://wa.me/919978089491?text=Hi%2C%20I%20would%20like%20to%20book%20an%20appointment"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-4 px-5 py-2 rounded-full border border-cyan-500/50 text-cyan-400 font-semibold text-sm hover:bg-cyan-500/10 hover:border-cyan-400 hover:shadow-[0_0_15px_rgba(34,211,238,0.4)] transition-all duration-300"
              >
                Book Now
              </a>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-cyan-400 focus:outline-none p-1"
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden border-t border-white/10 overflow-hidden rounded-b-2xl"
            >
              <div className="px-4 py-4 space-y-1 bg-[#0B1120]/95">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="block px-4 py-3 text-base font-medium text-slate-300 hover:text-cyan-400 hover:bg-cyan-500/5 rounded-xl transition-all duration-200"
                  >
                    {link.name}
                  </a>
                ))}
                <a
                  href="https://wa.me/919978089491?text=Hi%2C%20I%20would%20like%20to%20book%20an%20appointment"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsOpen(false)}
                  className="block mt-2 px-4 py-3 text-center font-semibold text-cyan-400 border border-cyan-500/40 rounded-xl hover:bg-cyan-500/10 transition-all duration-200"
                >
                  Book Now
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}
