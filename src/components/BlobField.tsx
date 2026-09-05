"use client";

import { motion } from "framer-motion";

const BLOBS = [
  { color: "var(--magenta)", size: 300, top: "0%", left: "-10%", dur: 12, op: 0.45 },
  { color: "var(--gold)", size: 240, top: "15%", left: "80%", dur: 15, op: 0.5 },
  { color: "var(--emerald)", size: 280, top: "58%", left: "-12%", dur: 14, op: 0.4 },
  { color: "var(--violet)", size: 220, top: "68%", left: "85%", dur: 17, op: 0.4 },
  { color: "var(--gold)", size: 190, top: "90%", left: "8%", dur: 13, op: 0.35 },
  { color: "var(--magenta)", size: 210, top: "35%", left: "48%", dur: 19, op: 0.22 },
  { color: "var(--emerald)", size: 170, top: "10%", left: "42%", dur: 16, op: 0.2 },
];

export default function BlobField() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      {BLOBS.map((b, i) => (
        <motion.div
          key={i}
          className="blob absolute blur-3xl mix-blend-multiply"
          style={{
            width: b.size,
            height: b.size,
            top: b.top,
            left: b.left,
            background: b.color,
            opacity: b.op,
            animationDelay: `${i * 0.7}s`,
          }}
          animate={{ x: [0, 24, -18, 0], y: [0, -20, 16, 0] }}
          transition={{ duration: b.dur, repeat: Infinity, ease: "easeInOut" }}
        />
      ))}
    </div>
  );
}
