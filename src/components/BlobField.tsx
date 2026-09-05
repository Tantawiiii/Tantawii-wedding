"use client";

import { motion } from "framer-motion";

const BLOBS = [
  { color: "var(--magenta)", size: 280, top: "4%", left: "-8%", dur: 13, op: 0.5 },
  { color: "var(--gold)", size: 220, top: "18%", left: "78%", dur: 16, op: 0.55 },
  { color: "var(--emerald)", size: 260, top: "55%", left: "-10%", dur: 15, op: 0.45 },
  { color: "var(--violet)", size: 200, top: "70%", left: "82%", dur: 18, op: 0.4 },
  { color: "var(--gold)", size: 180, top: "88%", left: "10%", dur: 14, op: 0.4 },
  { color: "var(--magenta)", size: 200, top: "38%", left: "45%", dur: 20, op: 0.25 },
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
