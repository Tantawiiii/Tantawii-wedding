"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import BlobField from "./BlobField";
import { getZaffaEngine } from "@/lib/zaffaEngine";

export default function EnvelopeGate({ onOpen }: { onOpen: () => void }) {
  const [opening, setOpening] = useState(false);

  const handleClick = () => {
    if (opening) return;
    setOpening(true);
    getZaffaEngine().start();
    setTimeout(() => {
      onOpen();
    }, 1100);
  };

  return (
    <AnimatePresence>
      <motion.div
        className="mesh-bg grain fixed inset-0 z-50 flex items-center justify-center overflow-hidden p-5"
        exit={{ opacity: 0, transition: { duration: 0.4, ease: "easeInOut" } }}
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

        <button
          onClick={handleClick}
          disabled={opening}
          className="relative z-10 flex aspect-[3/4] w-[19rem] items-center justify-center sm:w-[22rem]"
          style={{ perspective: 1200 }}
        >
          {/* right half */}
          <motion.div
            animate={
              opening
                ? { x: "52%", rotate: 8, opacity: 0 }
                : { x: 0, rotate: 0, opacity: 1 }
            }
            transition={{ duration: 0.85, ease: [0.65, 0, 0.35, 1] }}
            className="absolute inset-0 overflow-hidden bg-surface shadow-[0_30px_70px_-24px_rgba(32,18,39,0.4)]"
            style={{
              clipPath: "inset(0 0 0 50%)",
              border: "3px solid var(--ink)",
            }}
          >
            <CardContent side="right" />
          </motion.div>

          {/* left half */}
          <motion.div
            animate={
              opening
                ? { x: "-52%", rotate: -8, opacity: 0 }
                : { x: 0, rotate: 0, opacity: 1 }
            }
            transition={{ duration: 0.85, ease: [0.65, 0, 0.35, 1] }}
            className="absolute inset-0 overflow-hidden bg-surface shadow-[0_30px_70px_-24px_rgba(32,18,39,0.4)]"
            style={{
              clipPath: "inset(0 50% 0 0)",
              border: "3px solid var(--ink)",
            }}
          >
            <CardContent side="left" />
          </motion.div>

          {/* seam / tear line */}
          <motion.div
            animate={{ opacity: opening ? 0 : 1 }}
            transition={{ duration: 0.3 }}
            className="pointer-events-none absolute inset-y-6 left-1/2 z-20 w-px -translate-x-1/2 border-r border-dashed"
            style={{ borderColor: "var(--ink)", opacity: 0.25 }}
          />

          {/* seal centered on seam */}
          <motion.div
            animate={
              opening
                ? { scale: [1, 1.2, 0], opacity: [1, 1, 0] }
                : { scale: [1, 1.05, 1] }
            }
            transition={
              opening
                ? { duration: 0.4, times: [0, 0.35, 1] }
                : { duration: 2.5, repeat: Infinity }
            }
            className="absolute left-1/2 top-1/2 z-30 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full shadow-lg"
            style={{ background: "linear-gradient(135deg, var(--magenta), var(--violet))" }}
          >
            <span className="font-display text-2xl leading-none text-white">
              أ&amp;ن
            </span>
          </motion.div>

          {/* tap to open label */}
          <motion.div
            animate={{ opacity: opening ? 0 : 1, y: opening ? 10 : [0, -6, 0] }}
            transition={{
              opacity: { duration: 0.3 },
              y: { duration: 1.6, repeat: opening ? 0 : Infinity },
            }}
            className="absolute bottom-10 z-30 flex flex-col items-center gap-1.5"
          >
            <span className="font-ui inline-flex items-center gap-2 rounded-full bg-ink px-5 py-2.5 text-xs font-bold text-white shadow-md">
              👆 اضغط ليتمزّق ويُفتح
            </span>
          </motion.div>
        </button>
      </motion.div>
    </AnimatePresence>
  );
}

function CardContent({ side }: { side: "left" | "right" }) {
  return (
    <div className="relative flex h-full w-full flex-col items-center justify-center gap-4 p-8 text-center">
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

      <p className="font-display relative z-10 text-2xl text-ink">
        {side === "left" ? "أحمد" : "ندى"}
      </p>
      {side === "right" && (
        <p className="font-ui relative z-10 text-xs text-muted">
          يتشرفان بدعوتكم
        </p>
      )}
    </div>
  );
}
