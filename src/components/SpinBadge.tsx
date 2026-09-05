"use client";

import { motion } from "framer-motion";

export default function SpinBadge({
  text,
  color = "var(--magenta)",
  emoji = "✦",
  size = 90,
}: {
  text: string;
  color?: string;
  emoji?: string;
  size?: number;
}) {
  return (
    <div
      className="relative flex items-center justify-center"
      style={{ width: size, height: size }}
    >
      <motion.svg
        viewBox="0 0 100 100"
        className="spin-slow absolute inset-0"
        style={{ color }}
      >
        <path
          id="circlePath"
          d="M 50, 50 m -38, 0 a 38,38 0 1,1 76,0 a 38,38 0 1,1 -76,0"
          fill="none"
        />
        <text fontSize="9.5" fontWeight="700" letterSpacing="2" fill="currentColor">
          <textPath href="#circlePath" startOffset="0%">
            {text} • {text} •{" "}
          </textPath>
        </text>
      </motion.svg>
      <span
        className="flex h-1/2 w-1/2 items-center justify-center rounded-full text-lg"
        style={{ background: color }}
      >
        {emoji}
      </span>
    </div>
  );
}
