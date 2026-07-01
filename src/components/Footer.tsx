"use client";

import { Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#070b14] border-t border-white/10 pt-14 pb-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top section */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-8">
          {/* Brand */}
          <div className="text-center md:text-left">
            <h2 className="font-heading text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-2">
              Muskan Mehndi Art
            </h2>
            <p className="text-slate-400 font-light">
              Exquisite Bridal Mehndi &amp; Henna Artistry
            </p>
          </div>

          {/* Social & Contact */}
          <div className="flex flex-col items-center md:items-end space-y-4">
            <a
              href="https://instagram.com/muskan_mehndiart19"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-slate-400 hover:text-cyan-400 hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.6)] transition-all duration-300"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-5 h-5"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
              <span>@muskan_mehndiart19</span>
            </a>
            <a
              href="tel:+919978089491"
              className="flex items-center space-x-2 text-slate-400 hover:text-cyan-400 hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.6)] transition-all duration-300"
            >
              <Phone className="w-5 h-5" />
              <span>+91 9978089491</span>
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-0" />
      </div>

      {/* RNEXT Signature Footer — exact JSX as specified */}
      <div className="flex flex-col items-center justify-center py-8 bg-[#070b14] text-slate-400 border-t border-white/10">
        <div className="flex items-center mb-2">
          <p className="text-sm">© 2026 Muskan Mehndi Art. All rights reserved.</p>
        </div>

        <div className="flex items-center">
          <span className="hidden md:block mx-2 text-slate-500">•</span>
          <p className="text-sm font-medium flex items-center gap-1.5">
            Built by
            <span className="relative group cursor-pointer ml-1">
              {/* Text with Neon Glow on Hover */}
              <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 tracking-wider transition-all duration-500 group-hover:from-cyan-300 group-hover:to-blue-400 group-hover:drop-shadow-[0_0_12px_rgba(34,211,238,0.8)]">
                RNEXT.in
              </span>

              {/* Expanding Line with Electric Neon Shadow */}
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-gradient-to-r from-cyan-400 to-blue-500 transition-all duration-500 ease-out group-hover:w-full rounded-full group-hover:shadow-[0_0_10px_2px_rgba(34,211,238,0.6)] group-hover:h-[3px]"></span>
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}
