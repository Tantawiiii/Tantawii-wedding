"use client";

import { motion } from "framer-motion";
import { Sparkles, Heart, ChevronDown, Calendar, MessageSquareHeart } from "lucide-react";

export default function HeroSection() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative flex min-h-[92vh] flex-col items-center justify-center px-4 pt-28 pb-16 text-center">
      {/* Background Soft Glow Accents */}
      <div className="pointer-events-none absolute top-12 h-96 w-96 rounded-full bg-[#cba135]/12 blur-[130px]" />
      <div className="pointer-events-none absolute bottom-12 h-96 w-96 rounded-full bg-[#0b3829]/10 blur-[130px]" />

      {/* 1. Classical Bismillah Cartouche */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="inline-flex items-center gap-2 rounded-full border border-[#d4af37]/40 bg-[#ffffff]/80 px-5 py-2 shadow-sm backdrop-blur-sm"
      >
        <Sparkles className="h-3.5 w-3.5 text-[#ab7f17]" />
        <span className="font-display text-sm sm:text-base font-semibold text-[#0b3829]">
          بِسْمِ اللَّـهِ الرَّحْمَـٰنِ الرَّحِيمِ
        </span>
        <Sparkles className="h-3.5 w-3.5 text-[#ab7f17]" />
      </motion.div>

      {/* 2. Quranic Ayah with Ornate Golden Frame */}
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.9, delay: 0.2 }}
        className="relative mt-8 max-w-2xl px-6 py-6 rounded-2xl border border-[#d4af37]/25 bg-gradient-to-b from-[#ffffff]/70 to-[#faf6ef]/70 backdrop-blur-md shadow-[0_10px_30px_-10px_rgba(203,161,53,0.15)]"
      >
        <div className="ornament-line mb-3">
          <span className="text-[#cba135] text-xs">✦ ✦ ✦</span>
        </div>
        <p className="font-body text-lg sm:text-2xl leading-relaxed text-[#1b2820]/90">
          ﴿وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُم مِّنْ أَنفُسِكُمْ أَزْوَاجًا لِّتَسْكُنُوا إِلَيْهَا وَجَعَلَ بَيْنَكُم مَّوَدَّةً وَرَحْمَةً﴾
        </p>
        <p className="font-ui mt-2 text-xs font-semibold tracking-wider text-[#ab7f17]">
          — سورة الروم
        </p>
      </motion.div>

      {/* 3. The Royal Couple Names */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, delay: 0.4 }}
        className="mt-12 flex flex-col items-center"
      >
        <p className="font-ui text-xs sm:text-sm font-semibold tracking-[0.25em] text-[#5e6d64]">
          تتشرف عائلتا العروسين بدعوتكم لحفل زفاف
        </p>

        <h1 className="font-amiri mt-4 text-5xl sm:text-7xl md:text-8xl font-bold py-1">
          <span className="gold-gradient-text drop-shadow-[0_2px_12px_rgba(203,161,53,0.3)]">
            أحمد
          </span>
          <motion.span
            animate={{ scale: [1, 1.15, 1], rotate: [0, 5, -5, 0] }}
            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
            className="mx-3 inline-block text-3xl sm:text-5xl text-[#0b3829]"
          >
            &amp;
          </motion.span>
          <span className="gold-gradient-text drop-shadow-[0_2px_12px_rgba(203,161,53,0.3)]">
            ندى
          </span>
        </h1>

        <div className="mt-3 flex items-center justify-center gap-2 text-xs sm:text-sm font-semibold text-[#0b3829]">
          <span>رباط مقدس وميثاق غليظ</span>
          <Heart className="h-4 w-4 fill-[#7d1128] text-[#7d1128] animate-pulse" />
          <span>ليلة العمر تكتمل بوجودكم</span>
        </div>
      </motion.div>

      {/* 4. Action Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="mt-10 flex flex-wrap items-center justify-center gap-3.5"
      >
        <button
          onClick={() => scrollTo("events-section")}
          className="gold-glow flex items-center gap-2 rounded-full border border-[#d4af37] bg-gradient-to-r from-[#0b3829] via-[#082a1f] to-[#0b3829] px-7 py-3 text-sm font-bold text-[#f7e7a9] shadow-lg transition-transform hover:scale-105 active:scale-95"
        >
          <Calendar className="h-4 w-4 text-[#ffd700]" />
          <span>تفاصيل الحفل والموقع</span>
        </button>

        <button
          onClick={() => scrollTo("guestbook-section")}
          className="flex items-center gap-2 rounded-full border border-[#d4af37]/50 bg-white/90 px-6 py-3 text-sm font-bold text-[#0b3829] shadow-sm backdrop-blur-sm transition-all hover:bg-[#faf6ef] hover:border-[#d4af37]"
        >
          <MessageSquareHeart className="h-4 w-4 text-[#ab7f17]" />
          <span>تهنئة العروسين</span>
        </button>
      </motion.div>

      {/* 5. Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="mt-16 flex flex-col items-center gap-1 cursor-pointer"
        onClick={() => scrollTo("countdown-section")}
      >
        <span className="font-ui text-[11px] font-bold tracking-widest text-[#ab7f17]">
          اكتشف تفاصيل ليلة العمر
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="h-5 w-5 text-[#cba135]" />
        </motion.div>
      </motion.div>
    </section>
  );
}
