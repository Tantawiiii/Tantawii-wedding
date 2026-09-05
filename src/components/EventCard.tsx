"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import Reveal from "./Reveal";

export default function EventCard({
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
  const rx = useSpring(useTransform(my, [0, 1], [4, -4]), { stiffness: 220, damping: 22 });
  const ry = useSpring(useTransform(mx, [0, 1], [-4, 4]), { stiffness: 220, damping: 22 });

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
    <Reveal className="w-full max-w-md" scale={0.96} y={20}>
      <motion.div
        ref={ref}
        onMouseMove={handleMove}
        onMouseLeave={handleLeave}
        style={{ rotateX: rx, rotateY: ry, perspective: 1200 }}
        whileHover={{ y: -6 }}
        className="tilt-card relative overflow-hidden rounded-[1.75rem] bg-surface shadow-[0_30px_60px_-28px_rgba(32,18,39,0.4)]"
      >
        {/* top accent bar */}
        <div className="h-1.5 w-full" style={{ background: color }} />

        <div className="flex items-stretch">
          {/* date column */}
          <div
            className="flex w-24 flex-shrink-0 flex-col items-center justify-center gap-1 py-8 text-white sm:w-28"
            style={{ background: color }}
          >
            <span className="font-ui num-badge text-4xl font-extrabold leading-none sm:text-5xl">
              {day}
            </span>
            <span className="font-ui text-[11px] opacity-90">{month}</span>
          </div>

          {/* content */}
          <div className="flex flex-1 flex-col justify-center gap-2 px-6 py-7 text-right">
            <span
              className="font-ui text-[11px] font-bold tracking-[0.2em]"
              style={{ color }}
            >
              {eyebrow}
            </span>
            <h3 className="font-display text-2xl text-ink">{title}</h3>
            <p className="font-ui text-xs text-muted">
              {weekday} · {timeLabel}
            </p>
          </div>
        </div>

        <div className="hairline" />

        <div className="flex flex-col gap-4 px-6 py-6 text-right">
          <div>
            <p className="font-ui text-[11px] font-semibold tracking-wide text-muted">
              مكان الحفل
            </p>
            <p className="font-body mt-1 text-lg text-ink">{venue}</p>
          </div>

          <motion.a
            href={mapUrl}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
            className="font-ui inline-flex items-center justify-center gap-2 rounded-xl py-3 text-sm font-bold text-white shadow-md transition-opacity hover:opacity-90"
            style={{ background: color }}
          >
            <span>📍 افتح الموقع على الخريطة</span>
          </motion.a>
        </div>
      </motion.div>
    </Reveal>
  );
}
