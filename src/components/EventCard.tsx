"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import Reveal from "./Reveal";

export default function EventCard({
  icon,
  eyebrow,
  title,
  day,
  month,
  weekday,
  timeLabel,
  venue,
  mapUrl,
  color,
}: {
  icon: string;
  eyebrow: string;
  title: string;
  day: string;
  month: string;
  weekday: string;
  timeLabel: string;
  venue: string;
  mapUrl: string;
  color: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0.5);
  const my = useMotionValue(0.5);
  const rx = useSpring(useTransform(my, [0, 1], [6, -6]), { stiffness: 200, damping: 20 });
  const ry = useSpring(useTransform(mx, [0, 1], [-6, 6]), { stiffness: 200, damping: 20 });

  const handleMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    mx.set((e.clientX - rect.left) / rect.width);
    my.set((e.clientY - rect.top) / rect.height);
  };
  const handleLeave = () => {
    mx.set(0.5);
    my.set(0.5);
  };

  return (
    <Reveal className="w-full max-w-sm" scale={0.94}>
      <motion.div
        ref={ref}
        onMouseMove={handleMove}
        onMouseLeave={handleLeave}
        style={{ rotateX: rx, rotateY: ry, perspective: 1000 }}
        whileHover={{ y: -8 }}
        className="tilt-card relative overflow-hidden rounded-[2rem] bg-surface p-1.5 shadow-[0_25px_60px_-25px_rgba(32,18,39,0.45)]"
      >
        <div
          className="absolute inset-0 rounded-[2rem] opacity-90"
          style={{ background: `linear-gradient(135deg, ${color}, transparent 55%)` }}
        />

        <div className="relative overflow-hidden rounded-[1.6rem] bg-surface p-7 text-center">
          {/* floating icon badge */}
          <motion.div
            animate={{ rotate: [0, -6, 6, 0] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="wiggle mx-auto -mt-14 mb-3 flex h-16 w-16 items-center justify-center rounded-2xl text-3xl text-white shadow-lg"
            style={{ background: color }}
          >
            {icon}
          </motion.div>

          <span
            className="font-ui inline-block rounded-full px-3 py-1 text-[11px] font-bold tracking-widest text-white"
            style={{ background: color }}
          >
            {eyebrow}
          </span>

          <h3 className="font-display mt-3 text-3xl text-ink">{title}</h3>

          <div className="mt-4 flex items-center justify-center gap-4">
            <div className="flex flex-col items-center">
              <span className="font-ui num-badge text-3xl font-extrabold" style={{ color }}>
                {day}
              </span>
              <span className="font-ui text-[11px] text-muted">{month}</span>
            </div>
            <span className="h-9 w-px bg-[var(--line)]" />
            <div className="text-right">
              <p className="font-ui text-sm font-semibold text-ink">{weekday}</p>
              <p className="font-ui text-xs text-muted">{timeLabel}</p>
            </div>
          </div>

          <div className="hairline my-5" />

          <p className="font-body text-xl text-ink">{venue}</p>

          <motion.a
            href={mapUrl}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.06, rotate: -1 }}
            whileTap={{ scale: 0.95 }}
            className="font-ui mt-6 inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-bold text-white shadow-md"
            style={{ background: color }}
          >
            <span>📍 شوف الموقع على الخريطة</span>
          </motion.a>
        </div>
      </motion.div>
    </Reveal>
  );
}
