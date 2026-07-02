"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Calendar, Clock, Gift, Users, ChevronRight } from "lucide-react";
import Image from "next/image";

const images = [
  "/class1.webp",
  "/class2.webp",
  "/class3.webp",
  "/class4.webp"
];

export default function AcademySection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000); // Auto-cycles every 4 seconds
    return () => clearInterval(timer);
  }, []);

  const details = [
    { icon: MapPin, label: "Location", value: "Pardi", color: "text-cyan-400" },
    { icon: Calendar, label: "Duration", value: "45 Days", color: "text-cyan-400" },
    { icon: Clock, label: "Timing", value: "12:00 PM – 4:00 PM", color: "text-cyan-400" },
    { icon: Gift, label: "Includes", value: "Full Mehndi Kit", color: "text-cyan-400" },
  ];

  return (
    <section id="academy" className="py-28 bg-[#080e1a] relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[1px] bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />
      <div className="absolute top-1/2 -translate-y-1/2 -left-32 w-96 h-96 bg-cyan-500/8 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 -translate-y-1/2 -right-32 w-96 h-96 bg-blue-600/8 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16 flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2 text-cyan-400 font-medium tracking-widest uppercase text-sm mb-4 px-4 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10"
          >
            <Users className="w-4 h-4" /> Proven Expertise: Over 50+ Students Trained
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-heading text-4xl md:text-5xl font-bold text-white mb-4"
          >
            Muskan{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(34,211,238,0.3)]">
              Mehndi Classes
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-amber-400 text-lg font-medium tracking-wide"
          >
            Turn Passion into Profession — Basic to Bridal Course
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left Column: Carousel */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden border border-cyan-500/30 shadow-[0_0_40px_-10px_rgba(34,211,238,0.25)] group"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1, ease: "easeInOut" }}
                className="absolute inset-0"
              >
                <Image
                  src={images[currentIndex]}
                  alt={`Batch student photo ${currentIndex + 1}`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </motion.div>
            </AnimatePresence>
            {/* Glassmorphism gradient overlay */}
            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#0B1120] to-transparent pointer-events-none z-10" />
            
            {/* Carousel Indicators */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20">
              {images.map((_, i) => (
                <div
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  className={`h-1.5 rounded-full cursor-pointer transition-all duration-500 ${
                    i === currentIndex ? "w-8 bg-cyan-400" : "w-2 bg-white/40 hover:bg-white/70"
                  }`}
                />
              ))}
            </div>
          </motion.div>

          {/* Right Column: Details & CTA */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col justify-center"
          >
            <h3 className="text-2xl font-semibold text-white mb-8 border-b border-white/10 pb-4">
              Course Highlights
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-10">
              {details.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                    className="flex items-center gap-4 bg-white/5 backdrop-blur-sm border border-white/10 p-5 rounded-2xl hover:border-cyan-500/40 hover:bg-white/10 hover:shadow-[0_0_20px_rgba(34,211,238,0.1)] transition-all duration-300 group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center flex-shrink-0 group-hover:bg-cyan-500/20 group-hover:border-cyan-400/50 transition-all duration-300">
                      <Icon className={`w-6 h-6 ${item.color} group-hover:scale-110 transition-transform duration-300`} />
                    </div>
                    <div>
                      <p className="text-xs text-slate-400 uppercase tracking-wider mb-1 font-medium">{item.label}</p>
                      <p className="font-semibold text-slate-200">{item.value}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Pulsing CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="mt-2"
            >
              <motion.a
                href="https://wa.me/919978089491?text=Hi%2C%20I%20want%20to%20inquire%20about%20the%20Mehndi%20classes"
                target="_blank"
                rel="noopener noreferrer"
                animate={{ scale: [1, 1.03, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="inline-flex items-center justify-center w-full sm:w-max gap-2 px-10 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold text-lg rounded-full shadow-[0_0_20px_rgba(34,211,238,0.3)] hover:shadow-[0_0_40px_rgba(34,211,238,0.6)] border border-cyan-400/30 transition-all duration-300 group"
              >
                Register for Classes 
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
