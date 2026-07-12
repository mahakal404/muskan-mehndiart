"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Globe, Leaf } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="py-24 md:py-32 bg-[#0B1120] relative overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-600/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left Column: Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ type: "spring", stiffness: 60, damping: 15, duration: 0.8 }}
            className="relative"
          >
            {/* Cinematic Image Container */}
            <div className="relative w-full max-w-md mx-auto md:max-w-none aspect-[4/5] rounded-2xl overflow-hidden border border-cyan-500/30 shadow-[0_0_30px_-5px_rgba(34,211,238,0.3)] group">
              <Image
                src="/muskan.webp"
                alt="Muskan - Mehndi Artist"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                priority
              />
              {/* Glassmorphism gradient overlay for elegant blending */}
              <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#0B1120]/80 to-transparent pointer-events-none z-10" />
            </div>
          </motion.div>

          {/* Right Column: Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.2 }}
            transition={{ type: "spring", stiffness: 60, damping: 15, delay: 0.1, duration: 0.8 }}
            className="flex flex-col justify-center"
          >
            <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4 drop-shadow-[0_0_10px_rgba(34,211,238,0.5)]">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Meet Muskan
              </span>
            </h2>
            
            <p className="text-amber-400 text-lg font-medium mb-6 tracking-wider md:tracking-widest uppercase text-sm">
              Turning Passion into Premium Artistry
            </p>
            
            <div className="space-y-6 text-slate-300 leading-relaxed text-base md:text-lg mb-10">
              <p>
                With a deep-rooted love for traditional art and an eye for modern aesthetics, Muskan brings the magic of mehndi to life. Specializing in highly intricate bridal patterns and elegant contemporary designs, she transforms every occasion into an unforgettable celebration.
              </p>
              <p>
                Every stroke is a testament to her dedication to the craft, ensuring that your hands tell a beautiful story. From classic mandalas to bespoke portrait artistry, the journey of henna becomes a luxurious experience under her skilled hands.
              </p>
            </div>

            {/* Premium Badges: Glassmorphism Pills */}
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-3 bg-white/5 backdrop-blur-md border border-white/10 rounded-full px-6 py-3 hover:border-cyan-400/50 hover:-translate-y-1 transition-all duration-300 cursor-default">
                <Globe className="w-5 h-5 text-cyan-400" />
                <span className="text-slate-200 font-medium text-sm">Available Worldwide</span>
              </div>
              
              <div className="flex items-center gap-3 bg-white/5 backdrop-blur-md border border-white/10 rounded-full px-6 py-3 hover:border-cyan-400/50 hover:-translate-y-1 transition-all duration-300 cursor-default">
                <Leaf className="w-5 h-5 text-emerald-400" />
                <span className="text-slate-200 font-medium text-sm">100% Organic Henna</span>
              </div>
            </div>
            
          </motion.div>

        </div>
      </div>
    </section>
  );
}
