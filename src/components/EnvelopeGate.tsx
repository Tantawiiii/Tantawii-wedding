"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

function randomPetals() {
  return Array.from({ length: 10 }).map(() => ({
    left: Math.random() * 100,
    delay: Math.random() * 4,
    duration: 6 + Math.random() * 4,
    size: 10 + Math.random() * 10,
  }));
}

function FloralVine({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 400" fill="none" className={className}>
      <path
        d="M60 10C55 60 65 100 58 150C51 200 62 240 56 290C50 340 60 370 58 395"
        stroke="var(--gold)"
        strokeWidth="1.2"
        opacity="0.4"
      />
      {[
        { y: 45, side: 1 },
        { y: 90, side: -1 },
        { y: 135, side: 1 },
        { y: 180, side: -1 },
        { y: 225, side: 1 },
        { y: 270, side: -1 },
        { y: 315, side: 1 },
        { y: 355, side: -1 },
      ].map((leaf, i) => (
        <g
          key={i}
          transform={`translate(60 ${leaf.y}) scale(${leaf.side}, 1) rotate(${leaf.side > 0 ? 25 : -25})`}
        >
          <path
            d="M0 0C8 -10 22 -12 30 -4C22 4 8 8 0 0Z"
            fill="var(--gold)"
            opacity={0.22}
          />
          <circle cx="0" cy="0" r="1.5" fill="var(--gold)" opacity="0.4" />
        </g>
      ))}
      {[70, 190, 310].map((y, i) => (
        <g key={i} transform={`translate(60 ${y})`}>
          {[0, 72, 144, 216, 288].map((angle) => (
            <ellipse
              key={angle}
              cx={0}
              cy={-6}
              rx="3.2"
              ry="5.5"
              fill="var(--rose)"
              opacity="0.28"
              transform={`rotate(${angle})`}
            />
          ))}
          <circle r="2" fill="var(--gold)" opacity="0.5" />
        </g>
      ))}
    </svg>
  );
}

export default function EnvelopeGate({ onOpen }: { onOpen: () => void }) {
  const [opening, setOpening] = useState(false);
  const [petals, setPetals] = useState<ReturnType<typeof randomPetals>>([]);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- random positions must be client-only to avoid SSR/client mismatch
    setPetals(randomPetals());
  }, []);

  const handleClick = () => {
    if (opening) return;
    setOpening(true);
    setTimeout(() => {
      onOpen();
    }, 1500);
  };

  return (
    <AnimatePresence>
      <motion.div
        className="paper-bg grain fixed inset-0 z-50 flex items-center justify-center overflow-hidden p-5"
        exit={{ opacity: 0, transition: { duration: 0.6, ease: "easeInOut" } }}
        style={{ perspective: 1600 }}
      >
        {/* falling petals */}
        <div className="pointer-events-none absolute inset-0 z-[2]">
          {petals.map((p, i) => (
            <motion.span
              key={i}
              className="absolute rounded-full bg-rose/30"
              style={{ left: `${p.left}%`, width: p.size, height: p.size, top: -20 }}
              animate={{ y: ["0vh", "110vh"], rotate: [0, 180] }}
              transition={{
                duration: p.duration,
                delay: p.delay,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: opening ? 0 : 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="font-kufi absolute top-8 z-10 text-[11px] tracking-[0.4em] text-gold"
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
          transition={{ duration: 0.9, delay: opening ? 0.55 : 0, ease: [0.65, 0, 0.35, 1] }}
          className="relative z-10 flex aspect-[3/4] w-[19rem] flex-col items-center overflow-hidden rounded-[1.25rem] border border-gold/25 bg-surface shadow-[0_30px_70px_-20px_rgba(139,105,68,0.35)] sm:w-[22rem]"
        >
          {/* top flap */}
          <motion.div
            className="absolute inset-x-0 top-0 z-20 h-1/2 origin-top"
            style={{ clipPath: "polygon(0 0, 100% 0, 50% 100%)" }}
            animate={opening ? { rotateX: 165 } : { rotateX: 0 }}
            transition={{ duration: 0.9, ease: [0.65, 0, 0.35, 1] }}
          >
            <div className="relative h-full w-full bg-gradient-to-b from-surface to-[var(--bg-2)]">
              <FloralVine className="absolute -left-2 top-0 h-full w-16 opacity-90" />
              <FloralVine className="absolute -right-2 top-0 h-full w-16 scale-x-[-1] opacity-90" />
            </div>
          </motion.div>

          {/* bottom flap (static base) */}
          <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-surface to-[var(--bg-2)]">
            <div className="relative h-full w-full">
              <FloralVine className="absolute -left-2 bottom-0 h-full w-16 rotate-180 opacity-90" />
              <FloralVine className="absolute -right-2 bottom-0 h-full w-16 rotate-180 scale-x-[-1] opacity-90" />
            </div>
          </div>

          {/* wax seal */}
          <motion.div
            animate={
              opening
                ? { scale: [1, 1.15, 0], opacity: [1, 1, 0] }
                : { scale: 1, opacity: 1 }
            }
            transition={{ duration: 0.5, times: [0, 0.4, 1] }}
            className="absolute left-1/2 top-1/2 z-30 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full shadow-lg"
            style={{
              background:
                "radial-gradient(circle at 35% 30%, var(--rose), #8f4d4d 75%)",
            }}
          >
            <span className="font-display text-2xl leading-none text-cream" style={{ color: "#f6e9df" }}>
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
            <span className="text-gold">︿</span>
            <span className="font-kufi text-[10px] tracking-[0.3em] text-muted">
              اضغط للفتح
            </span>
          </motion.div>
        </motion.button>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: opening ? 0 : 1 }}
          transition={{ duration: 0.6 }}
          className="font-body absolute bottom-10 z-10 text-lg text-ink/60"
        >
          أحمد <span className="text-gold">&amp;</span> ندى
        </motion.p>
      </motion.div>
    </AnimatePresence>
  );
}
