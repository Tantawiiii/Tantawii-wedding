"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

export default function Reveal({
  children,
  delay = 0,
  y = 40,
  scale = 0.96,
  blur = true,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  scale?: number;
  blur?: boolean;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y, scale, filter: blur ? "blur(6px)" : "blur(0px)" }}
      whileInView={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
