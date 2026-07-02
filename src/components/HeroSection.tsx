"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function HeroSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1595922378931-15b026df21b5?q=80&w=2070&auto=format&fit=crop')",
        }}
      />

      {/* Layered Dark Overlays */}
      <div className="absolute inset-0 z-[1] bg-gradient-to-b from-black/75 via-[#0B1120]/70 to-[#0B1120]" />
      <div className="absolute inset-0 z-[2] bg-gradient-to-r from-[#0B1120]/50 via-transparent to-[#0B1120]/50" />

      {/* Animated Ambient glow blobs */}
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.4, 0.7, 0.4],
          x: [0, 20, 0],
          y: [0, -20, 0],
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-900/30 rounded-full blur-[120px] z-[2] pointer-events-none"
      />
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3],
          x: [0, -30, 0],
          y: [0, 30, 0],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-900/30 rounded-full blur-[120px] z-[2] pointer-events-none"
      />

      {/* Content */}
      <motion.div
        className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Badge */}
        <motion.div
          variants={itemVariants}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-cyan-500/30 text-cyan-400 text-sm font-medium mb-8 backdrop-blur-sm"
        >
          <span className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
          Professional Mehndi Artist · Valsad · Available Worldwide
        </motion.div>

        {/* Main Title */}
        <motion.h1
          variants={itemVariants}
          className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-6"
        >
          <span className="block bg-gradient-to-r from-cyan-300 via-blue-400 to-cyan-400 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(34,211,238,0.5)]">
            Exquisite Bridal
          </span>
          <span className="block text-white mt-1 drop-shadow-[0_2px_20px_rgba(0,0,0,0.8)]">
            Mehndi Artistry
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          variants={itemVariants}
          className="text-lg md:text-xl font-light mb-10 max-w-2xl mx-auto text-slate-300 leading-relaxed"
        >
          Where tradition meets artistry. Let Muskan craft the henna story of your most{" "}
          <span className="text-cyan-400 font-medium">unforgettable</span> moments.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="https://wa.me/919978089491?text=Hi%2C%20I%20would%20like%20to%20book%20my%20special%20day%20with%20Muskan%20Mehndi%20Art"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative overflow-hidden px-8 py-3.5 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold hover:from-cyan-400 hover:to-blue-400 hover:shadow-[0_0_25px_rgba(34,211,238,0.5)] transition-all duration-300 w-full sm:w-auto block"
          >
            {/* Shimmer Effect */}
            <motion.div
              className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-12"
              animate={{ x: ["-100%", "200%"] }}
              transition={{
                repeat: Infinity,
                duration: 2.5,
                ease: "linear",
                repeatDelay: 2,
              }}
            />
            <span className="relative z-10">Book Your Special Day</span>
          </a>
          <a
            href="#services"
            className="px-8 py-3.5 rounded-full border border-white/20 text-white/80 font-semibold hover:border-cyan-500/50 hover:text-cyan-400 hover:bg-white/10 hover:backdrop-blur-md transition-all duration-300 w-full sm:w-auto"
          >
            Explore Services
          </a>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1 text-slate-400"
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="w-5 h-5 text-cyan-400" />
        </motion.div>
      </motion.div>
    </section>
  );
}
