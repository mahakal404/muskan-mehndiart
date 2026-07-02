"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Eye } from "lucide-react";

const galleryImages = [
  "/Gallery1.webp",
  "/Gallery2.webp",
  "/Gallery3.webp",
  "/Gallery4.webp",
  "/Gallery5.webp",
  "/Gallery6.webp",
  "/Gallery8.webp",
  "/Gallery9.jpg",
  "/Gallery10.webp",
  "/Gallery11.webp"
];

export default function GallerySection() {
  return (
    <section id="gallery" className="py-28 bg-[#0B1120] relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[1px] bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />

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
            Our Portfolio
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-heading text-4xl md:text-5xl font-bold text-white mb-4"
          >
            The{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Gallery
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

        {/* Masonry Grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 lg:gap-6 gap-4">
          {galleryImages.map((src, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.92 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: (index % 3) * 0.1 }}
              className="break-inside-avoid mb-4 sm:mb-6 relative group overflow-hidden rounded-2xl cursor-pointer border border-white/10 shadow-[0_4px_20px_rgba(0,0,0,0.5)] hover:shadow-[0_8px_30px_rgba(34,211,238,0.2)] transition-all duration-500"
            >
              <div className="relative w-full overflow-hidden rounded-2xl">
                <Image
                  src={src}
                  alt={`Muskan Mehndi Art Gallery Image ${index + 1}`}
                  width={500}
                  height={700}
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>

              {/* Glassmorphism Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1120]/80 via-cyan-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                <div className="w-14 h-14 rounded-full bg-black/40 backdrop-blur-sm border border-cyan-500/50 flex items-center justify-center transform scale-75 group-hover:scale-100 transition-transform duration-500 delay-100">
                  <Eye className="w-6 h-6 text-cyan-400" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Instagram CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-14"
        >
          <a
            href="https://instagram.com/muskan_mehndiart19"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-3.5 rounded-full bg-white/5 border border-white/15 text-white font-medium hover:bg-white/10 hover:border-cyan-500/40 hover:shadow-[0_0_20px_rgba(34,211,238,0.2)] transition-all duration-300"
          >
            <svg className="w-5 h-5 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
            </svg>
            View All on Instagram
          </a>
        </motion.div>
      </div>
    </section>
  );
}
