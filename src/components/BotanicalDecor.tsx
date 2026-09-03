"use client";

import { motion } from "framer-motion";

function LeafBranch({ className, flip = false }: { className?: string; flip?: boolean }) {
  return (
    <svg
      viewBox="0 0 200 320"
      fill="none"
      className={className}
      style={{ transform: flip ? "scaleX(-1)" : undefined }}
    >
      <path
        d="M20 300C40 220 30 140 60 70C80 25 120 5 150 10"
        stroke="var(--gold)"
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.35"
      />
      {[
        { x: 45, y: 250, r: -30, s: 1 },
        { x: 38, y: 205, r: 20, s: 0.85 },
        { x: 52, y: 165, r: -20, s: 0.95 },
        { x: 60, y: 120, r: 25, s: 0.8 },
        { x: 78, y: 80, r: -15, s: 0.9 },
        { x: 100, y: 45, r: 20, s: 0.75 },
      ].map((leaf, i) => (
        <g key={i} transform={`translate(${leaf.x} ${leaf.y}) rotate(${leaf.r}) scale(${leaf.s})`}>
          <path
            d="M0 0C10 -14 28 -14 32 0C28 14 10 14 0 0Z"
            fill="var(--gold)"
            opacity={0.16 + (i % 3) * 0.05}
          />
        </g>
      ))}
    </svg>
  );
}

export default function BotanicalDecor() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <motion.div
        className="absolute -left-6 top-0 w-28 sm:w-40"
        animate={{ rotate: [0, 1.5, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      >
        <LeafBranch className="w-full" />
      </motion.div>

      <motion.div
        className="absolute -right-6 top-0 w-28 sm:w-40"
        animate={{ rotate: [0, -1.5, 0] }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
      >
        <LeafBranch className="w-full" flip />
      </motion.div>

      <motion.div
        className="absolute -left-8 bottom-0 w-32 rotate-180 sm:w-44"
        animate={{ rotate: [180, 178.5, 180] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      >
        <LeafBranch className="w-full" flip />
      </motion.div>

      <motion.div
        className="absolute -right-8 bottom-0 w-32 rotate-180 sm:w-44"
        animate={{ rotate: [180, 181.5, 180] }}
        transition={{ duration: 13, repeat: Infinity, ease: "easeInOut" }}
      >
        <LeafBranch className="w-full" />
      </motion.div>
    </div>
  );
}
