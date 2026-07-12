"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, MessageCircleQuestion } from "lucide-react";

const faqs = [
  {
    question: "How long does a full premium bridal mehndi application take?",
    answer:
      "A full premium bridal mehndi application typically takes 4 to 6 hours. This ensures immaculate detail and precision for intricate traditional designs covering both hands and feet.",
  },
  {
    question: "Where can I find 100% organic chemical-free bridal henna in Valsad?",
    answer:
      "At Muskan Mehndi Art, we exclusively provide 100% organic, chemical-free bridal henna across Valsad and Pardi. Our henna is freshly mixed with natural essential oils to guarantee a rich, safe, and long-lasting dark stain.",
  },
  {
    question: "What is the duration and fee for a professional bridal mehndi course in Pardi?",
    answer:
      "Our professional basic to bridal mehndi course in Pardi spans 45 days. It covers everything from fundamental patterns to advanced portrait designs. Please contact us directly for the latest fee structure and enrollment details.",
  },
  {
    question: "Does Muskan Mehndi Art travel outside Gujarat for destination weddings?",
    answer:
      "Yes, we specialize in destination weddings! We travel outside Gujarat, nationwide, and internationally to provide luxury bridal henna packages. Travel and accommodation are planned according to your bespoke event requirements.",
  },
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <section id="faq" className="py-24 relative overflow-hidden bg-[#0B1120]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      {/* Background glowing effects */}
      <div className="absolute top-1/4 left-0 w-72 h-72 bg-cyan-900/20 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-900/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-2 text-cyan-400 font-medium tracking-widest uppercase text-sm mb-4">
            <MessageCircleQuestion className="w-5 h-5" />
            <span>Got Questions?</span>
          </div>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-white mb-4">
            Frequently Asked <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Questions</span>
          </h2>
          <div className="w-24 h-[2px] bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full" />
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, amount: 0.1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className={`group border rounded-2xl transition-all duration-500 overflow-hidden ${
                  isOpen
                    ? "bg-[#0f172a]/80 border-cyan-500/50 shadow-[0_0_20px_rgba(34,211,238,0.15)] backdrop-blur-md"
                    : "bg-[#0f172a]/40 border-white/10 hover:border-cyan-500/30 hover:bg-[#0f172a]/60 backdrop-blur-sm"
                }`}
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full text-left px-6 py-5 flex items-center justify-between focus:outline-none"
                >
                  <span
                    className={`font-semibold text-lg transition-colors duration-300 ${
                      isOpen ? "text-cyan-400" : "text-slate-200 group-hover:text-cyan-300"
                    }`}
                  >
                    {faq.question}
                  </span>
                  <div
                    className={`flex-shrink-0 ml-4 p-1.5 rounded-full border transition-all duration-500 ${
                      isOpen
                        ? "bg-cyan-500/20 border-cyan-400 text-cyan-400 rotate-180"
                        : "border-white/10 text-slate-400 group-hover:border-cyan-500/30 group-hover:text-cyan-300"
                    }`}
                  >
                    <ChevronDown className="w-5 h-5 transition-transform duration-500" />
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 text-slate-300 leading-relaxed font-light border-t border-white/5 pt-4">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
