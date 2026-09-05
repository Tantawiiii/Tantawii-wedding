"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const TARGET = new Date("2026-09-11T15:30:00+02:00").getTime();

function getTimeLeft() {
  const now = Date.now();
  const diff = Math.max(0, TARGET - now);
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

const units: { key: keyof ReturnType<typeof getTimeLeft>; label: string; color: string }[] = [
  { key: "days", label: "يوم", color: "var(--magenta)" },
  { key: "hours", label: "ساعة", color: "var(--gold-deep)" },
  { key: "minutes", label: "دقيقة", color: "var(--emerald)" },
  { key: "seconds", label: "ثانية", color: "var(--violet)" },
];

export default function Countdown() {
  const [time, setTime] = useState<ReturnType<typeof getTimeLeft> | null>(
    null
  );

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- initial client-only tick, avoids SSR/client mismatch
    setTime(getTimeLeft());
    const id = setInterval(() => setTime(getTimeLeft()), 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="flex items-center justify-center gap-3 sm:gap-4">
      {units.map((u, i) => (
        <motion.div
          key={u.key}
          animate={{ rotate: [0, i % 2 === 0 ? -2 : 2, 0] }}
          transition={{ duration: 3, repeat: Infinity, delay: i * 0.3 }}
          className="flex w-[4.2rem] flex-col items-center rounded-2xl py-5 text-white shadow-lg sm:w-20"
          style={{ background: u.color }}
        >
          <span className="font-ui num-badge text-3xl font-extrabold sm:text-4xl">
            {time ? String(time[u.key]).padStart(2, "0") : "--"}
          </span>
          <span className="font-ui mt-1 text-[11px] opacity-90">{u.label}</span>
        </motion.div>
      ))}
    </div>
  );
}
