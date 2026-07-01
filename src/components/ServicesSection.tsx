"use client";

import { motion, type Variants } from "framer-motion";
import { Sparkles, HeartHandshake, Gem, Flower2 } from "lucide-react";

const services = [
  {
    title: "Arabic Mehandi",
    description:
      "Elegant, flowing designs with bold outlines and intricate floral motifs — a perfect blend of grace and geometry.",
    icon: Flower2,
    gradient: "from-cyan-400 to-teal-400",
    glow: "rgba(34,211,238,0.2)",
  },
  {
    title: "Bridal Mehandi",
    description:
      "Detailed, full-coverage traditional designs to make your wedding day truly unforgettable and radiant.",
    icon: Gem,
    gradient: "from-blue-400 to-cyan-400",
    glow: "rgba(59,130,246,0.2)",
  },
  {
    title: "Traditional Mehandi",
    description:
      "Classic Indian designs featuring paisleys, mandalas, and intricate netting passed down through generations.",
    icon: HeartHandshake,
    gradient: "from-cyan-400 to-blue-500",
    glow: "rgba(34,211,238,0.2)",
  },
  {
    title: "Simple Mehandi",
    description:
      "Minimalist and stylish patterns — perfect for festivals, casual occasions, and small gatherings.",
    icon: Sparkles,
    gradient: "from-amber-400 to-orange-400",
    glow: "rgba(251,191,36,0.2)",
  },
];

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" as const } },
};

export default function ServicesSection() {
  return (
    <section id="services" className="py-28 bg-[#0B1120] relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[1px] bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />
      <div className="absolute top-1/2 left-0 w-72 h-72 bg-cyan-500/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-blue-600/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Heading */}
        <div className="text-center mb-16">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-cyan-400 font-medium tracking-widest uppercase text-sm mb-3"
          >
            What We Offer
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-heading text-4xl md:text-5xl font-bold text-white mb-4"
          >
            Our{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Services
            </span>
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            whileInView={{ opacity: 1, scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="w-24 h-[2px] bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full"
          />
        </div>

        {/* Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                variants={cardVariants}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="group relative bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 flex flex-col items-center text-center cursor-default transition-all duration-300 hover:border-cyan-500/40 hover:bg-white/8"
                style={{
                  ["--glow-color" as string]: service.glow,
                }}
              >
                {/* Hover glow backdrop */}
                <div
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    boxShadow: `0 0 30px ${service.glow}, inset 0 0 30px ${service.glow}`,
                  }}
                />

                {/* Icon */}
                <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:border-cyan-500/30 group-hover:bg-cyan-500/10 transition-all duration-300">
                  <Icon className="w-8 h-8 text-cyan-400 group-hover:text-cyan-300 group-hover:scale-110 transition-all duration-300" />
                </div>

                {/* Text */}
                <h3 className="font-heading text-xl font-bold text-white mb-3 group-hover:text-cyan-50 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-slate-400 leading-relaxed text-sm group-hover:text-slate-300 transition-colors duration-300">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
