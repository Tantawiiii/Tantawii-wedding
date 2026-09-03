"use client";

import { motion } from "framer-motion";
import Reveal from "./Reveal";

export default function EventCard({
  index,
  eyebrow,
  title,
  day,
  month,
  weekday,
  timeLabel,
  venue,
  mapUrl,
}: {
  index: string;
  eyebrow: string;
  title: string;
  day: string;
  month: string;
  weekday: string;
  timeLabel: string;
  venue: string;
  mapUrl: string;
}) {
  return (
    <Reveal className="w-full max-w-xl" scale={0.97} y={24}>
      <div className="grid overflow-hidden rounded-2xl border border-[var(--line)] bg-surface sm:grid-cols-[9rem_1fr]">
        {/* date block */}
        <div className="flex flex-row items-center justify-between gap-2 border-b border-[var(--line)] bg-accent-soft px-6 py-6 sm:flex-col sm:justify-center sm:border-b-0 sm:border-l sm:px-4">
          <span className="font-ui num-badge text-4xl font-semibold text-ink sm:text-5xl">
            {day}
          </span>
          <div className="text-left sm:mt-1 sm:text-center">
            <p className="font-ui text-xs text-muted">{month}</p>
            <p className="font-ui text-xs text-muted">{weekday}</p>
          </div>
        </div>

        {/* content */}
        <div className="flex flex-col justify-center gap-3 px-7 py-7 text-right">
          <div className="flex items-center justify-between">
            <span className="font-ui text-xs tracking-widest text-accent">
              {eyebrow}
            </span>
            <span className="font-ui num-badge text-xs text-muted">{index}</span>
          </div>

          <h3 className="font-display text-2xl text-ink">{title}</h3>
          <p className="font-ui text-sm text-muted">{timeLabel}</p>

          <div className="hairline my-1" />

          <p className="font-ui text-base text-ink">{venue}</p>

          <motion.a
            href={mapUrl}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ x: -3 }}
            whileTap={{ scale: 0.97 }}
            className="font-ui mt-2 inline-flex w-fit items-center gap-2 self-end rounded-full bg-ink px-5 py-2.5 text-sm text-white transition-colors hover:bg-accent"
          >
            <span>الموقع على الخريطة</span>
            <span>←</span>
          </motion.a>
        </div>
      </div>
    </Reveal>
  );
}
