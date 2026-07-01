"use client";

import { motion } from "framer-motion";
import { MapPin, Calendar, Clock, Gift } from "lucide-react";

export default function AcademySection() {
  const details = [
    { icon: MapPin, label: "Location", value: "Pardi", color: "text-cyan-400" },
    { icon: Calendar, label: "Duration", value: "45 Days", color: "text-blue-400" },
    { icon: Clock, label: "Timing", value: "12:00 PM – 4:00 PM", color: "text-cyan-400" },
    { icon: Gift, label: "Includes", value: "Full Mehndi Kit", color: "text-amber-400" },
  ];

  return (
    <section id="academy" className="py-28 bg-[#080e1a] relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[1px] bg-gradient-to-r from-transparent via-blue-500/30 to-transparent" />
      <div className="absolute top-1/2 -translate-y-1/2 -left-32 w-96 h-96 bg-cyan-500/8 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-1/2 -translate-y-1/2 -right-32 w-96 h-96 bg-blue-600/8 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="relative bg-white/5 backdrop-blur-md rounded-3xl border border-white/10 p-8 md:p-16 overflow-hidden"
        >
          {/* Inner glow border */}
          <div className="absolute inset-0 rounded-3xl border border-cyan-500/20 pointer-events-none" />

          {/* Corner accent glows */}
          <div className="absolute top-0 left-0 w-48 h-48 bg-cyan-500/10 rounded-full blur-[60px] -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
          <div className="absolute bottom-0 right-0 w-48 h-48 bg-blue-600/10 rounded-full blur-[60px] translate-x-1/2 translate-y-1/2 pointer-events-none" />

          <div className="relative z-10 text-center">
            {/* Label */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-cyan-400 font-medium tracking-widest uppercase text-sm mb-4"
            >
              Learn the Art
            </motion.p>

            {/* Title */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="font-heading text-4xl md:text-5xl font-bold text-white mb-3"
            >
              Muskan{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Mehndi Classes
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-xl text-amber-400/90 font-medium mb-12"
            >
              Turn Passion into Profession — Basic to Bridal Course
            </motion.p>

            {/* Details Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-12 max-w-2xl mx-auto text-left">
              {details.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                    className="flex items-center gap-4 bg-white/5 border border-white/10 p-4 rounded-2xl hover:border-cyan-500/30 hover:bg-white/8 transition-all duration-300 group"
                  >
                    <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 group-hover:border-cyan-500/30 transition-colors duration-300">
                      <Icon className={`w-5 h-5 ${item.color}`} />
                    </div>
                    <div>
                      <p className="text-xs text-slate-500 uppercase tracking-wide">{item.label}</p>
                      <p className="font-medium text-white">{item.value}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.9 }}
            >
              <a
                href="https://wa.me/919978089491?text=Hi%2C%20I%20want%20to%20inquire%20about%20the%20Mehndi%20classes"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-10 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold text-lg rounded-full hover:from-cyan-400 hover:to-blue-400 hover:shadow-[0_0_30px_rgba(34,211,238,0.5)] transform hover:-translate-y-1 transition-all duration-300"
              >
                Register for Classes
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
