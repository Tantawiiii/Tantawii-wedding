"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import BlobField from "./BlobField";

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
        <BlobField />

        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: opening ? 0 : 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="font-ui absolute top-10 z-10 rounded-full bg-ink px-4 py-1.5 text-[11px] font-bold tracking-[0.3em] text-white"
        >
          دعوة زفاف ✨
        </motion.p>

        {/* Card */}
        <motion.button
          onClick={handleClick}
          disabled={opening}
          animate={
            opening
              ? { opacity: 0, scale: 0.9, rotate: 6, y: -20 }
              : { opacity: 1, scale: 1, rotate: 0, y: 0 }
          }
          whileHover={opening ? {} : { y: -6, rotate: -1 }}
          whileTap={{ scale: 0.97 }}
          transition={{ duration: 0.7, delay: opening ? 0.4 : 0, ease: [0.65, 0, 0.35, 1] }}
          className="relative z-10 flex aspect-[3/4] w-[19rem] flex-col items-center justify-center gap-5 overflow-hidden rounded-[2rem] bg-surface p-8 text-center shadow-[0_30px_70px_-24px_rgba(32,18,39,0.4)] sm:w-[22rem]"
          style={{ border: "3px solid var(--ink)" }}
        >
          <motion.div
            animate={{ rotate: [0, 8, -8, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="absolute -right-6 -top-6 h-20 w-20 rounded-full opacity-80"
            style={{ background: "var(--gold)" }}
          />
          <motion.div
            animate={{ rotate: [0, -10, 10, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="absolute -bottom-8 -left-8 h-24 w-24 rounded-full opacity-70"
            style={{ background: "var(--emerald)" }}
          />

          {/* seal / monogram */}
          <motion.div
            animate={
              opening
                ? { scale: [1, 1.15, 0], opacity: [1, 1, 0] }
                : { scale: [1, 1.05, 1] }
            }
            transition={
              opening
                ? { duration: 0.45, times: [0, 0.4, 1] }
                : { duration: 2.5, repeat: Infinity }
            }
            className="relative z-10 flex h-24 w-24 items-center justify-center rounded-full shadow-lg"
            style={{
              background: "linear-gradient(135deg, var(--magenta), var(--violet))",
            }}
          >
            <span className="font-display text-3xl leading-none text-white">
              أ&amp;ن
            </span>
          </motion.div>

          <p className="font-display relative z-10 text-2xl text-ink">
            أحمد <span className="gradient-text font-bold">&amp;</span> ندى
          </p>

          <p className="font-ui relative z-10 text-xs text-muted">
            يتشرفان بدعوتكم
          </p>

          {/* tap to open label */}
          <motion.div
            animate={{ opacity: opening ? 0 : 1, y: opening ? 10 : [0, -6, 0] }}
            transition={{
              opacity: { duration: 0.4 },
              y: { duration: 1.6, repeat: opening ? 0 : Infinity },
            }}
            className="relative z-10 mt-2 flex flex-col items-center gap-1.5"
          >
            <span
              className="font-ui inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-xs font-bold text-white shadow-md"
              style={{ background: "var(--ink)" }}
            >
              👆 اضغط للفتح
            </span>
          </motion.div>
        </motion.button>
      </motion.div>
    </AnimatePresence>
  );
}
