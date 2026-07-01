"use client";

import { motion } from "framer-motion";

const galleryImages = [
  "https://images.unsplash.com/photo-1595922378931-15b026df21b5?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1582236814271-469b823e5900?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1621252179027-94459d278660?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1596700812739-16e78e22543d?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1583089892943-e02e52f1e679?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1597816053351-e408ecbb7e37?q=80&w=2070&auto=format&fit=crop",
];

export default function GallerySection() {
  return (
    <section id="gallery" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="font-heading text-4xl md:text-5xl font-bold text-primary mb-4"
          >
            Our Gallery
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-24 h-1 bg-accent mx-auto rounded-full"
          />
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {galleryImages.map((src, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="break-inside-avoid relative overflow-hidden rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 group"
            >
              <img
                src={src}
                alt={`Mehndi Design ${index + 1}`}
                className="w-full h-auto object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
