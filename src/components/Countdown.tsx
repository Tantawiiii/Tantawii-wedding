"use client";

import { useEffect, useState } from "react";

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

const units: { key: keyof ReturnType<typeof getTimeLeft>; label: string }[] = [
  { key: "days", label: "يوم" },
  { key: "hours", label: "ساعة" },
  { key: "minutes", label: "دقيقة" },
  { key: "seconds", label: "ثانية" },
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
    <div className="flex items-stretch justify-center divide-x divide-x-reverse divide-[var(--line)] rounded-2xl border border-[var(--line)] bg-surface">
      {units.map((u) => (
        <div key={u.key} className="flex w-20 flex-col items-center py-6 sm:w-24">
          <span className="font-ui num-badge text-3xl font-semibold text-ink sm:text-4xl">
            {time ? String(time[u.key]).padStart(2, "0") : "--"}
          </span>
          <span className="font-ui mt-2 text-[11px] text-muted">{u.label}</span>
        </div>
      ))}
    </div>
  );
}
