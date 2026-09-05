"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { getZaffaEngine } from "@/lib/zaffaEngine";

export default function AmbientSound() {
  const [enabled, setEnabled] = useState(true);

  useEffect(() => {
    const engine = getZaffaEngine();
    engine.start();
    engine.resume();
    engine.setMuted(false);

    return () => {
      // keep playing across re-renders of this component; only real unmount
      // of the whole app would call dispose, which we don't need here.
    };
  }, []);

  const toggle = () => {
    const engine = getZaffaEngine();
    const next = !enabled;
    engine.setMuted(!next);
    if (next) engine.resume();
    setEnabled(next);
  };

  return (
    <motion.button
      onClick={toggle}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.5, duration: 0.6 }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.92 }}
      aria-label={enabled ? "كتم الموسيقى" : "تشغيل الموسيقى"}
      className="fixed bottom-5 left-5 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-ink text-lg text-white shadow-lg"
    >
      <motion.span
        animate={enabled ? { scale: [1, 1.15, 1] } : { scale: 1 }}
        transition={{ duration: 1.6, repeat: enabled ? Infinity : 0 }}
      >
        {enabled ? "🎶" : "🔇"}
      </motion.span>
    </motion.button>
  );
}
