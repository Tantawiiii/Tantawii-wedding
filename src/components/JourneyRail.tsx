"use client";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const STEPS = ["🕊️", "⏳", "💌", "📖", "💍", "🎉"];

function RailDot({
  emoji,
  progress,
  index,
  total,
}: {
  emoji: string;
  progress: ReturnType<typeof useSpring>;
  index: number;
  total: number;
}) {
  const threshold = index / (total - 1);
  const opacity = useTransform(
    progress,
    [Math.max(0, threshold - 0.12), threshold],
    [0.3, 1]
  );
  const scale = useTransform(
    progress,
    [Math.max(0, threshold - 0.12), threshold],
    [0.85, 1.15]
  );

  return (
    <motion.div
      style={{ opacity, scale }}
      className="relative flex h-8 w-8 items-center justify-center rounded-full border border-gold/25 bg-bg text-sm"
    >
      {emoji}
    </motion.div>
  );
}

export default function JourneyRail() {
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 26,
  });

  return (
    <div className="pointer-events-none fixed inset-y-0 right-4 z-40 hidden flex-col items-center justify-center gap-5 md:flex">
      <div className="relative flex flex-col items-center gap-7">
        <div className="absolute inset-y-0 w-px bg-gold/15" />
        {STEPS.map((s, i) => (
          <RailDot
            key={i}
            emoji={s}
            progress={progress}
            index={i}
            total={STEPS.length}
          />
        ))}
      </div>
    </div>
  );
}
