"use client";

import { motion } from "framer-motion";
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
  return (
    <Reveal className="w-full max-w-sm" scale={0.96} y={20}>
      <div
        className="relative bg-surface px-8 py-10 text-center shadow-[0_20px_50px_-25px_rgba(32,18,39,0.35)]"
        style={{ border: `1px solid ${color}55` }}
      >
        {/* outer hairline frame */}
        <div
          className="pointer-events-none absolute inset-2 border"
          style={{ borderColor: `${color}35` }}
        />

        {/* corner flourishes */}
        {[
          "-left-0 -top-0",
          "-right-0 -top-0 scale-x-[-1]",
          "-left-0 -bottom-0 scale-y-[-1]",
          "-right-0 -bottom-0 scale-x-[-1] scale-y-[-1]",
        ].map((pos, i) => (
          <svg
            key={i}
            viewBox="0 0 40 40"
            className={`absolute h-8 w-8 ${pos}`}
            style={{ color }}
          >
            <path
              d="M2 2 L2 16 M2 2 L16 2 M2 10 Q2 2 10 2"
              stroke="currentColor"
              strokeWidth="1.4"
              fill="none"
            />
          </svg>
        ))}

        <p
          className="font-ui relative z-10 text-[11px] tracking-[0.35em]"
          style={{ color }}
        >
          {eyebrow}
        </p>

        <h3 className="font-display relative z-10 mt-3 text-3xl text-ink">
          {title}
        </h3>

        <div className="relative z-10 mx-auto mt-6 h-px w-12" style={{ background: color }} />

        <div className="relative z-10 mt-6 flex items-baseline justify-center gap-2">
          <span className="font-display num-badge text-4xl text-ink">{day}</span>
          <span className="font-ui text-sm text-muted">{month}</span>
        </div>
        <p className="font-ui relative z-10 mt-1 text-sm text-muted">
          {weekday} · {timeLabel}
        </p>

        <div className="relative z-10 mx-auto mt-6 h-px w-12" style={{ background: color }} />

        <p className="font-body relative z-10 mt-6 text-xl text-ink">{venue}</p>

        <motion.a
          href={mapUrl}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          className="font-ui relative z-10 mt-7 inline-flex items-center gap-2 border px-6 py-2.5 text-xs tracking-widest transition-colors"
          style={{ borderColor: color, color }}
        >
          <span>الموقع على الخريطة</span>
        </motion.a>
      </div>
    </Reveal>
  );
}
