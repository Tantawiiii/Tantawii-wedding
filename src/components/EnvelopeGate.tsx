"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

function FloralVine({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 400" fill="none" className={className}>
      <path
        d="M60 10C55 60 65 100 58 150C51 200 62 240 56 290C50 340 60 370 58 395"
        stroke="var(--accent)"
        strokeWidth="1.2"
        opacity="0.3"
      />
      {[45, 90, 135, 180, 225, 270, 315, 355].map((y, i) => (
        <g
          key={y}
          transform={`translate(60 ${y}) scale(${i % 2 === 0 ? 1 : -1}, 1) rotate(${i % 2 === 0 ? 25 : -25})`}
        >
          <path
            d="M0 0C8 -10 22 -12 30 -4C22 4 8 8 0 0Z"
            fill="var(--accent)"
            opacity={0.18}
          />
        </g>
      ))}
    </svg>
  );
}

export default function EnvelopeGate({ onOpen }: { onOpen: () => void }) {
  const [opening, setOpening] = useState(false);

  const handleClick = () => {
    if (opening) return;
    setOpening(true);
    setTimeout(() => {
      onOpen();
    }, 1400);
  };

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden bg-bg p-5"
        exit={{ opacity: 0, transition: { duration: 0.5, ease: "easeInOut" } }}
        style={{ perspective: 1600 }}
      >
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: opening ? 0 : 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="font-ui absolute top-10 z-10 text-[11px] tracking-[0.4em] text-muted"
        >
          دعوة زفاف
        </motion.p>

        {/* Envelope */}
        <motion.button
          onClick={handleClick}
          disabled={opening}
          animate={
            opening
              ? { opacity: 0, scale: 0.94, y: -10 }
              : { opacity: 1, scale: 1, y: 0 }
          }
          whileHover={opening ? {} : { y: -4 }}
          whileTap={{ scale: 0.98 }}
          transition={{ duration: 0.8, delay: opening ? 0.5 : 0, ease: [0.65, 0, 0.35, 1] }}
          className="relative z-10 flex aspect-[3/4] w-[19rem] flex-col items-center overflow-hidden rounded-2xl border border-[var(--line)] bg-surface shadow-[0_20px_50px_-24px_rgba(33,32,29,0.25)] sm:w-[22rem]"
        >
          {/* top flap */}
          <motion.div
            className="absolute inset-x-0 top-0 z-20 h-1/2 origin-top"
            style={{ clipPath: "polygon(0 0, 100% 0, 50% 100%)" }}
            animate={opening ? { rotateX: 165 } : { rotateX: 0 }}
            transition={{ duration: 0.85, ease: [0.65, 0, 0.35, 1] }}
          >
            <div className="relative h-full w-full bg-surface">
              <FloralVine className="absolute -left-2 top-0 h-full w-14" />
              <FloralVine className="absolute -right-2 top-0 h-full w-14 scale-x-[-1]" />
            </div>
          </motion.div>

          {/* bottom flap (static base) */}
          <div className="absolute inset-x-0 bottom-0 h-1/2 bg-bg">
            <div className="relative h-full w-full">
              <FloralVine className="absolute -left-2 bottom-0 h-full w-14 rotate-180" />
              <FloralVine className="absolute -right-2 bottom-0 h-full w-14 rotate-180 scale-x-[-1]" />
            </div>
          </div>

          {/* seal */}
          <motion.div
            animate={
              opening
                ? { scale: [1, 1.1, 0], opacity: [1, 1, 0] }
                : { scale: 1, opacity: 1 }
            }
            transition={{ duration: 0.45, times: [0, 0.4, 1] }}
            className="absolute left-1/2 top-1/2 z-30 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-ink shadow-lg"
          >
            <span className="font-display text-2xl leading-none text-bg">
              أ&amp;ن
            </span>
          </motion.div>

          {/* tap to open label */}
          <motion.div
            animate={{ opacity: opening ? 0 : 1, y: opening ? 10 : [0, -5, 0] }}
            transition={{
              opacity: { duration: 0.4 },
              y: { duration: 1.8, repeat: opening ? 0 : Infinity },
            }}
            className="absolute bottom-10 z-20 flex flex-col items-center gap-1.5"
          >
            <span className="text-accent">︿</span>
            <span className="font-ui text-[10px] tracking-[0.3em] text-muted">
              اضغط للفتح
            </span>
          </motion.div>
        </motion.button>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: opening ? 0 : 1 }}
          transition={{ duration: 0.6 }}
          className="font-display absolute bottom-10 z-10 text-lg text-ink/70"
        >
          أحمد <span className="text-accent">&amp;</span> ندى
        </motion.p>
      </motion.div>
    </AnimatePresence>
  );
}
