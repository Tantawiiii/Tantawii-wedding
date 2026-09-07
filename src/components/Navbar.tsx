"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Calendar, MessageSquareHeart, Camera } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 120);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 inset-x-0 z-40 transition-all duration-500 ${
        scrolled
          ? "bg-[#faf6ef]/90 backdrop-blur-md border-b border-[#d4af37]/30 shadow-md py-2.5"
          : "bg-transparent py-4"
      }`}
    >
      <div className="mx-auto flex max-w-5xl items-center justify-between px-4 sm:px-6">
        {/* Monogram Brand */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex items-center gap-2 text-right group"
        >
          <div className="flex h-9 w-9 items-center justify-center rounded-full border border-[#d4af37] bg-gradient-to-br from-[#0b3829] to-[#051e16] text-[#f7e7a9] shadow-sm">
            <span className="font-display text-sm font-bold">أ&amp;ن</span>
          </div>
          <div className="hidden sm:flex flex-col">
            <span className="font-amiri text-base font-bold text-[#0b3829]">
              أحمد &amp; ندى
            </span>
            <span className="font-ui text-[10px] text-[#ab7f17] tracking-wider">
              دعوة زفاف ملكية
            </span>
          </div>
        </button>

        {/* Navigation Quick Links */}
        <nav className="flex items-center gap-1.5 sm:gap-3">
          <button
            onClick={() => scrollTo("events-section")}
            className="flex items-center gap-1 rounded-full px-2.5 py-1.5 text-xs font-semibold text-[#1b2820] hover:bg-[#cba135]/15 transition-colors"
          >
            <Calendar className="h-3.5 w-3.5 text-[#ab7f17]" />
            <span>المواعيد والموقع</span>
          </button>

          <button
            onClick={() => scrollTo("gallery-section")}
            className="flex items-center gap-1 rounded-full px-2.5 py-1.5 text-xs font-semibold text-[#1b2820] hover:bg-[#cba135]/15 transition-colors"
          >
            <Camera className="h-3.5 w-3.5 text-[#ab7f17]" />
            <span>السيشن</span>
          </button>

          <button
            onClick={() => scrollTo("guestbook-section")}
            className="flex items-center gap-1.5 rounded-full border border-[#d4af37] bg-gradient-to-r from-[#0b3829] to-[#051e16] px-3.5 py-1.5 text-xs font-bold text-[#f7e7a9] shadow-sm hover:scale-105 transition-transform"
          >
            <MessageSquareHeart className="h-3.5 w-3.5 text-[#ffd700]" />
            <span>سجل التهاني</span>
          </button>
        </nav>
      </div>
    </motion.header>
  );
}
