"use client";

import { motion } from "framer-motion";
import { CheckCircle2, MapPin, Calendar, Clock, Gift } from "lucide-react";

export default function AcademySection() {
  const details = [
    { icon: MapPin, text: "Location: Pardi" },
    { icon: Calendar, text: "Duration: 45 Days" },
    { icon: Clock, text: "Timing: 12:00 PM to 4:00 PM" },
    { icon: Gift, text: "Includes: Full Mehndi Kit" },
  ];

  return (
    <section id="academy" className="py-24 bg-primary/5 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-white rounded-3xl shadow-2xl p-8 md:p-16 border-[8px] border-primary/10 relative overflow-hidden"
        >
          {/* Decorative Elements */}
          <div className="absolute top-0 left-0 w-32 h-32 bg-accent/20 rounded-br-full -z-0"></div>
          <div className="absolute bottom-0 right-0 w-32 h-32 bg-primary/10 rounded-tl-full -z-0"></div>
          
          <div className="relative z-10 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="font-heading text-4xl md:text-5xl font-bold text-primary mb-2">
                Muskan Mehndi Classes
              </h2>
              <p className="text-xl md:text-2xl text-accent font-medium mb-10">
                Turn Passion into Profession - Basic to Bridal Course
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12 max-w-2xl mx-auto text-left">
              {details.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.text}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                    className="flex items-center space-x-3 bg-background p-4 rounded-xl shadow-sm border border-primary/5"
                  >
                    <Icon className="w-6 h-6 text-accent flex-shrink-0" />
                    <span className="font-medium text-foreground text-lg">{item.text}</span>
                  </motion.div>
                );
              })}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <a
                href="https://wa.me/919978089491?text=Hi%2C%20I%20want%20to%20inquire%20about%20the%20Mehndi%20classes%20starting%20from%2015%20June"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-10 py-4 bg-primary text-background font-bold text-lg rounded-full hover:bg-primary/90 transition-all duration-300 shadow-[0_4px_20px_rgba(128,0,0,0.4)] hover:shadow-[0_6px_25px_rgba(128,0,0,0.5)] transform hover:-translate-y-1"
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
