"use client";

import { motion } from "framer-motion";
import { Sparkles, HeartHandshake, Gem, Flower2 } from "lucide-react";

const services = [
  {
    title: "Arabic Mehandi",
    description: "Elegant, flowing designs with bold outlines and intricate floral motifs.",
    icon: Flower2,
  },
  {
    title: "Bridal Mehandi",
    description: "Detailed, full-coverage traditional designs to make your special day unforgettable.",
    icon: Gem,
  },
  {
    title: "Traditional Mehandi",
    description: "Classic Indian designs featuring paisleys, mandalas, and intricate netting.",
    icon: HeartHandshake,
  },
  {
    title: "Simple Mehandi",
    description: "Minimalist and stylish patterns perfect for festivals and small gatherings.",
    icon: Sparkles,
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-24 bg-background relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-heading text-4xl md:text-5xl font-bold text-primary mb-4"
          >
            Our Services
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-24 h-1 bg-accent mx-auto rounded-full"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-white p-8 rounded-2xl shadow-lg border border-primary/5 group transition-all duration-300 hover:shadow-xl hover:border-accent/30 flex flex-col items-center text-center"
              >
                <div className="w-16 h-16 bg-primary/5 rounded-full flex items-center justify-center mb-6 group-hover:bg-primary/10 transition-colors duration-300">
                  <Icon className="w-8 h-8 text-primary group-hover:text-accent transition-colors duration-300" />
                </div>
                <h3 className="font-heading text-xl font-bold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-foreground/70 leading-relaxed text-sm">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
