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
  accent = "gold",
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
  accent?: "gold" | "rose";
}) {
  const accentColor = accent === "rose" ? "var(--rose)" : "var(--gold)";
  const accentText = accent === "rose" ? "var(--rose)" : "var(--gold-dim)";
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
    <Reveal className="w-full max-w-sm" scale={0.95}>
      <motion.div
        ref={ref}
        onMouseMove={handleMove}
        onMouseLeave={handleLeave}
        style={{ rotateX: rx, rotateY: ry, perspective: 1200 }}
        whileHover={{ y: -6 }}
        className="tilt-card relative overflow-hidden rounded-[1.75rem] border border-black/5 bg-surface text-center shadow-[0_1px_2px_rgba(61,50,38,0.06),0_20px_45px_-24px_rgba(61,50,38,0.35)]"
      >
        {/* header band */}
        <div
          className="relative flex flex-col items-center gap-3 px-8 pb-8 pt-9"
          style={{ background: `linear-gradient(180deg, ${accentColor}0f, transparent)` }}
        >
          <span
            className="flex h-11 w-11 items-center justify-center rounded-full text-lg"
            style={{ background: `${accentColor}16`, color: accentText }}
          >
            {icon}
          </span>
          <span
            className="font-kufi text-[11px] font-medium tracking-[0.25em]"
            style={{ color: accentText }}
          >
            {eyebrow}
          </span>
          <h3 className="font-display text-[1.7rem] leading-none text-ink">{title}</h3>
        </div>

        <div className="h-px w-full" style={{ background: "var(--line)" }} />

        {/* body */}
        <div className="flex flex-col items-center gap-5 px-8 py-8">
          <div className="flex items-center gap-4">
            <div className="text-left">
              <p className="font-display text-2xl leading-none text-ink">{day}</p>
              <p className="font-kufi mt-1 text-[11px] text-muted">{month}</p>
            </div>
            <span className="h-8 w-px" style={{ background: "var(--line)" }} />
            <div className="text-right">
              <p className="font-kufi text-sm text-ink/80">{weekday}</p>
              <p className="font-kufi mt-1 text-xs text-muted">{timeLabel}</p>
            </div>
          </div>

          <p className="font-body text-lg text-ink">{venue}</p>

          <motion.a
            href={mapUrl}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="font-kufi mt-1 inline-flex items-center gap-2 rounded-full border px-6 py-3 text-sm transition-colors"
            style={{
              borderColor: `${accentColor}45`,
              color: accentText,
              background: `${accentColor}0a`,
            }}
          >
            <span>📍 افتح الموقع على الخريطة</span>
          </motion.a>
        </div>
      </motion.div>
    </Reveal>
  );
}
