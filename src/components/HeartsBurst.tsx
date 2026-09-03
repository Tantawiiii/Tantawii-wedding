"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState, useCallback, useEffect } from "react";

let idCounter = 0;
const EMOJIS = ["💛", "🤍", "✨", "💫", "🕊️"];

export default function HeartsBurst() {
  const [hearts, setHearts] = useState<
    { id: number; x: number; y: number; emoji: string }[]
  >([]);

  const spawn = useCallback((e: MouseEvent) => {
    const id = idCounter++;
    const emoji = EMOJIS[Math.floor(Math.random() * EMOJIS.length)];
    setHearts((h) => [...h, { id, x: e.clientX, y: e.clientY, emoji }]);
    setTimeout(() => {
      setHearts((h) => h.filter((heart) => heart.id !== id));
    }, 1200);
  }, []);

  useEffect(() => {
    window.addEventListener("click", spawn);
    return () => window.removeEventListener("click", spawn);
  }, [spawn]);

  return (
    <div className="pointer-events-none fixed inset-0 z-40">
      <AnimatePresence>
        {hearts.map((h) => (
          <motion.span
            key={h.id}
            initial={{ opacity: 1, scale: 0.5, x: h.x, y: h.y }}
            animate={{ opacity: 0, scale: 1.4, y: h.y - 120 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="fixed text-2xl"
            style={{ left: 0, top: 0 }}
          >
            {h.emoji}
          </motion.span>
        ))}
      </AnimatePresence>
    </div>
  );
}
