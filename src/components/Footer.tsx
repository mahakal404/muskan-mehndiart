"use client";

import { Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-primary text-background pt-16 pb-8 border-t-[6px] border-accent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          {/* Brand */}
          <div className="mb-8 md:mb-0 text-center md:text-left">
            <h2 className="font-heading text-3xl font-bold mb-2">Muskan Mehndi Art</h2>
            <p className="text-background/70 font-light">
              Exquisite Bridal Mehndi & Henna Artistry
            </p>
          </div>

          {/* Social & Contact */}
          <div className="flex flex-col items-center md:items-end space-y-4">
            <a
              href="https://instagram.com/muskan_mehndiart19"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 hover:text-accent transition-colors duration-300"
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
              className="flex items-center space-x-2 hover:text-accent transition-colors duration-300"
            >
              <Phone className="w-5 h-5" />
              <span>+91 9978089491</span>
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-background/20 mb-8"></div>

        {/* Copyright */}
        <div className="text-center text-sm text-background/60">
          <p>&copy; {new Date().getFullYear()} Muskan Mehndi Art. All rights reserved.</p>
          <p className="mt-2 text-accent/80 font-medium">Developed by RNEXT</p>
        </div>
      </div>
    </footer>
  );
}
