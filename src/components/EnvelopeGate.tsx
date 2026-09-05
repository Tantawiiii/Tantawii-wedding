"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import confetti from "canvas-confetti";
import { playWeddingSong } from "@/lib/weddingSong";
import { Sparkles, Heart } from "lucide-react";

export default function EnvelopeGate({ onOpen }: { onOpen: () => void }) {
  const [opening, setOpening] = useState(false);

  const handleOpenGate = () => {
    if (opening) return;
    setOpening(true);

    // Play wedding song upon opening gesture
    playWeddingSong();

    // Trigger luxury golden & petal confetti
    confetti({
      particleCount: 65,
      spread: 75,
      origin: { y: 0.55 },
      colors: ["#d4af37", "#f7e7a9", "#c59b27", "#ffffff", "#ffd700"],
    });

    setTimeout(() => {
      onOpen();
    }, 1250);
  };

  return (
    <AnimatePresence>
      <motion.div
        key="gatefold-gate"
        className="silk-bg paper-grain fixed inset-0 z-50 flex items-center justify-center overflow-hidden p-4"
        exit={{ opacity: 0, scale: 1.04, transition: { duration: 0.6, ease: "easeInOut" } }}
      >
        {/* Ambient background glows */}
        <div className="pointer-events-none absolute h-[550px] w-[550px] rounded-full bg-[#cba135]/15 blur-[140px]" />
        <div className="pointer-events-none absolute bottom-12 right-12 h-80 w-80 rounded-full bg-[#0b3829]/15 blur-[100px]" />

        {/* Top Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: opening ? 0 : 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute top-7 z-20 flex flex-col items-center gap-1 text-center"
        >
          <div className="flex items-center gap-2 text-xs font-semibold tracking-widest text-[#ab7f17]">
            <Sparkles className="h-3.5 w-3.5 text-[#cba135]" />
            <span>بِسْمِ اللَّـهِ الرَّحْمَـٰنِ الرَّحِيمِ</span>
            <Sparkles className="h-3.5 w-3.5 text-[#cba135]" />
          </div>
          <p className="font-display text-sm sm:text-base text-[#0b3829]">
            دعوة زفاف أحمد &amp; ندى
          </p>
        </motion.div>

        {/* Gatefold Card Container */}
        <div className="relative z-10 flex flex-col items-center">
          <motion.div
            initial={{ scale: 0.92, opacity: 0, y: 25 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="relative cursor-pointer select-none"
            onClick={handleOpenGate}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && handleOpenGate()}
            style={{ perspective: 1500 }}
          >
            {/* The Main Gatefold Frame */}
            <div className="relative h-[25rem] w-[20rem] sm:h-[28rem] sm:w-[22.5rem] rounded-3xl p-1 shadow-[0_30px_70px_-15px_rgba(5,30,22,0.35),0_12px_25px_-5px_rgba(203,161,53,0.25)] border border-[#d4af37]/50 bg-gradient-to-b from-[#0b3829] to-[#041a13]">
              
              {/* =========================================
                  INNER CARD (Revealed when gates open)
                  ========================================= */}
              <div className="relative flex h-full w-full flex-col items-center justify-between rounded-2xl border border-[#d4af37]/40 bg-gradient-to-b from-[#ffffff] via-[#fcfaf6] to-[#f7f2e7] p-6 text-center shadow-inner overflow-hidden">
                {/* Subtle corner arabesques */}
                <span className="absolute top-3 right-3 text-xs text-[#cba135]/60 select-none">✦</span>
                <span className="absolute top-3 left-3 text-xs text-[#cba135]/60 select-none">✦</span>
                <span className="absolute bottom-3 right-3 text-xs text-[#cba135]/60 select-none">✦</span>
                <span className="absolute bottom-3 left-3 text-xs text-[#cba135]/60 select-none">✦</span>

                {/* Inner Card Top */}
                <div className="mt-2 flex flex-col items-center">
                  <span className="font-ui text-[10px] font-bold tracking-[0.3em] text-[#ab7f17]">
                    ROYAL WEDDING INVITATION
                  </span>
                  <div className="mt-1 h-[1px] w-14 bg-gradient-to-r from-transparent via-[#cba135] to-transparent" />
                </div>

                {/* Inner Card Center Content */}
                <div className="my-auto flex flex-col items-center gap-2 py-2">
                  <p className="font-display text-xs sm:text-sm text-[#5e6d64]">
                    تتشرف عائلتا العروسين بدعوتكم لحضور حفل زفاف
                  </p>

                  <div className="my-1">
                    <h1 className="font-display text-4xl sm:text-5xl font-extrabold tracking-tight">
                      <span className="gold-gradient-text">أحمد</span>
                      <span className="mx-2 text-2xl text-[#0b3829] font-normal">&amp;</span>
                      <span className="gold-gradient-text">ندى</span>
                    </h1>
                  </div>

                  <div className="ornament-line my-1 max-w-[12rem]">
                    <span className="text-xs text-[#cba135]">✦ ✦ ✦</span>
                  </div>

                  <p className="font-ui text-xs font-semibold text-[#0b3829]">
                    الجمعة ١١ سبتمبر (عقد القران)
                  </p>
                  <p className="font-ui text-xs font-semibold text-[#0b3829]">
                    السبت ١٢ سبتمبر (حفل الزفاف) ٢٠٢٦
                  </p>
                </div>

                {/* Inner Card Bottom */}
                <div className="mb-2 flex items-center gap-1.5 text-[11px] font-medium text-[#ab7f17]">
                  <span>فرحتنا تكتمل بتشريفكم الكريم</span>
                  <Heart className="h-3 w-3 fill-[#7d1128] text-[#7d1128]" />
                </div>
              </div>

              {/* =========================================
                  GATEFOLD DOORS (Left and Right Doors)
                  ========================================= */}
              
              {/* LEFT DOOR */}
              <motion.div
                animate={
                  opening
                    ? { rotateY: -115, opacity: 0.05 }
                    : { rotateY: 0, opacity: 1 }
                }
                transition={{ duration: 0.95, ease: [0.65, 0, 0.35, 1] }}
                style={{
                  transformOrigin: "left center",
                  transformStyle: "preserve-3d",
                }}
                className="absolute inset-y-1 left-1 right-1/2 z-20 rounded-r-none rounded-l-2xl border-r border-[#d4af37]/60 bg-gradient-to-br from-[#0e3b2c] via-[#0b3829] to-[#051e16] p-5 shadow-2xl flex flex-col justify-between items-start text-right overflow-hidden"
              >
                {/* Gold door inner border line */}
                <div className="absolute inset-1.5 rounded-l-xl border-l border-t border-b border-[#d4af37]/35 pointer-events-none" />

                {/* Top Corner Decor */}
                <span className="font-display text-xs text-[#ffd700]/70">✦</span>

                {/* Left Door Content */}
                <div className="my-auto pr-1">
                  <span className="font-ui text-[10px] font-semibold tracking-widest text-[#ffd700]/80 block">
                    دعوة زفاف
                  </span>
                  <p className="font-display text-2xl font-bold text-[#f7e7a9] mt-1">
                    أحمد
                  </p>
                </div>

                {/* Bottom Corner Decor */}
                <span className="font-display text-xs text-[#ffd700]/70">✦</span>
              </motion.div>

              {/* RIGHT DOOR */}
              <motion.div
                animate={
                  opening
                    ? { rotateY: 115, opacity: 0.05 }
                    : { rotateY: 0, opacity: 1 }
                }
                transition={{ duration: 0.95, ease: [0.65, 0, 0.35, 1] }}
                style={{
                  transformOrigin: "right center",
                  transformStyle: "preserve-3d",
                }}
                className="absolute inset-y-1 right-1 left-1/2 z-20 rounded-l-none rounded-r-2xl border-l border-[#d4af37]/60 bg-gradient-to-bl from-[#0e3b2c] via-[#0b3829] to-[#051e16] p-5 shadow-2xl flex flex-col justify-between items-end text-left overflow-hidden"
              >
                {/* Gold door inner border line */}
                <div className="absolute inset-1.5 rounded-r-xl border-r border-t border-b border-[#d4af37]/35 pointer-events-none" />

                {/* Top Corner Decor */}
                <span className="font-display text-xs text-[#ffd700]/70">✦</span>

                {/* Right Door Content */}
                <div className="my-auto pl-1">
                  <span className="font-ui text-[10px] font-semibold tracking-widest text-[#ffd700]/80 block">
                    ليلة العمر
                  </span>
                  <p className="font-display text-2xl font-bold text-[#f7e7a9] mt-1">
                    ندى
                  </p>
                </div>

                {/* Bottom Corner Decor */}
                <span className="font-display text-xs text-[#ffd700]/70">✦</span>
              </motion.div>

              {/* =========================================
                  HORIZONTAL GOLD BELLY BAND (Shimmer Ribbon)
                  ========================================= */}
              <motion.div
                animate={
                  opening
                    ? { scaleY: 0, opacity: 0 }
                    : { scaleY: 1, opacity: 1 }
                }
                transition={{ duration: 0.45, ease: "easeOut" }}
                className="pointer-events-none absolute inset-x-0 top-1/2 -translate-y-1/2 z-30 h-14 border-y border-[#ffd700]/60 bg-gradient-to-r from-[#ab7f17] via-[#f7e7a9] to-[#ab7f17] shadow-[0_4px_16px_rgba(0,0,0,0.35)] flex items-center justify-between px-4"
              >
                <span className="text-[10px] font-bold tracking-widest text-[#051e16]/80 hidden sm:inline">
                  أحمد &amp; ندى
                </span>
                <span className="text-[10px] font-bold tracking-widest text-[#051e16]/80 hidden sm:inline">
                  ٢٠٢٦
                </span>
              </motion.div>

              {/* =========================================
                  3D BURGUNDY-GOLD WAX SEAL STAMP
                  ========================================= */}
              <motion.div
                animate={
                  opening
                    ? { scale: [1, 1.35, 0], opacity: [1, 1, 0], rotate: 45 }
                    : { scale: [1, 1.04, 1] }
                }
                transition={
                  opening
                    ? { duration: 0.5, ease: "easeOut" }
                    : { duration: 2.8, repeat: Infinity, ease: "easeInOut" }
                }
                className="wax-seal-btn absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-40 flex h-22 w-22 sm:h-24 sm:w-24 items-center justify-center rounded-full"
              >
                {/* Gold-Rimmed Inner Wax Core */}
                <div className="flex h-18 w-18 sm:h-20 sm:w-20 items-center justify-center rounded-full border border-[#f5e4a8]/60 bg-gradient-to-br from-[#8e142f] via-[#6d0d21] to-[#450714] shadow-inner">
                  <div className="flex flex-col items-center justify-center text-center">
                    <span className="font-display text-2xl sm:text-3xl font-extrabold text-[#f9e79f] drop-shadow-[0_2px_4px_rgba(0,0,0,0.6)]">
                      أ &amp; ن
                    </span>
                    <span className="font-ui text-[9px] font-bold tracking-[0.2em] text-[#ffd700]">
                      ٢٠٢٦
                    </span>
                  </div>
                </div>

                {/* Outer Seal Glow Ring */}
                <div className="pointer-events-none absolute -inset-1 rounded-full border border-[#ffd700]/40 opacity-80" />
              </motion.div>
            </div>
          </motion.div>

          {/* Interactive Tap Prompt */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{
              opacity: opening ? 0 : 1,
              y: opening ? 15 : [0, -5, 0],
            }}
            transition={{
              opacity: { duration: 0.3 },
              y: { duration: 2, repeat: opening ? 0 : Infinity, ease: "easeInOut" },
            }}
            className="mt-7 flex flex-col items-center gap-2"
          >
            <button
              onClick={handleOpenGate}
              disabled={opening}
              className="gold-glow group flex items-center gap-2 rounded-full border border-[#d4af37] bg-gradient-to-r from-[#0b3829] via-[#06231a] to-[#0b3829] px-7 py-3 text-xs sm:text-sm font-bold text-[#f7e7a9] shadow-xl transition-transform hover:scale-105 active:scale-95"
            >
              <Sparkles className="h-4 w-4 text-[#ffd700] group-hover:rotate-12 transition-transform" />
              <span>اضغط لفضّ الختم وفتح بوابات الدعوة ✦</span>
            </button>
            <span className="font-ui text-[11px] text-[#5e6d64]">
              (تتضمن الدعوة مقطوعة موسيقية رومانسية 🎶)
            </span>
          </motion.div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
