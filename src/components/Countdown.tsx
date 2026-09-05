"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Clock, Sparkles } from "lucide-react";

// Target date: Friday September 11, 2026 at 16:30 (Ceremony start)
const TARGET_DATE = new Date("2026-09-11T16:30:00+02:00").getTime();

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

function calculateTimeLeft(): TimeLeft {
  const diff = Math.max(0, TARGET_DATE - Date.now());
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft | null>(null);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setTimeLeft(calculateTimeLeft());
    const interval = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const items = [
    { label: "يـوم", value: timeLeft ? timeLeft.days : 0 },
    { label: "ساعـة", value: timeLeft ? timeLeft.hours : 0 },
    { label: "دقيقـة", value: timeLeft ? timeLeft.minutes : 0 },
    { label: "ثانيـة", value: timeLeft ? timeLeft.seconds : 0 },
  ];

  return (
    <section id="countdown-section" className="relative py-16 px-4 text-center">
      {/* Section Header */}
      <div className="flex flex-col items-center gap-2 mb-10">
        <div className="flex items-center gap-2 text-xs font-bold tracking-widest text-[#ab7f17]">
          <Clock className="h-4 w-4 text-[#cba135]" />
          <span>العد التنازلي لليلة العمر</span>
          <Sparkles className="h-4 w-4 text-[#cba135]" />
        </div>
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#0b3829]">
          نعد الأيام واللحظات لنلقاكم
        </h2>
        <p className="font-ui text-xs sm:text-sm text-[#5e6d64] max-w-md">
          كل ثانية تقربنا من أسعد ليالي العمر بحضوركم العطر
        </p>
      </div>

      {/* Luxury Timer Grid */}
      <div className="mx-auto flex max-w-2xl items-center justify-center gap-2.5 sm:gap-5">
        {items.map((item, index) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="flex flex-col items-center"
          >
            {/* The Gilded Card */}
            <div className="relative flex h-24 w-18 sm:h-32 sm:w-28 flex-col items-center justify-center rounded-2xl border border-[#d4af37]/40 bg-gradient-to-b from-[#0b3829] to-[#041a13] shadow-[0_12px_28px_-8px_rgba(5,30,22,0.4),0_0_20px_rgba(203,161,53,0.12)]">
              {/* Gold Top Accent Line */}
              <div className="absolute top-0 inset-x-3 h-[2px] bg-gradient-to-r from-transparent via-[#ffd700] to-transparent" />

              {/* Number with Gold Foil Text */}
              <span className="font-ui text-3xl sm:text-5xl font-extrabold tracking-tight text-[#f7e7a9] tabular-nums drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)]">
                {timeLeft ? String(item.value).padStart(2, "0") : "--"}
              </span>

              {/* Divider Wire in the middle for split-flap luxury clock feel */}
              <div className="absolute inset-x-0 top-1/2 h-[1px] bg-[#d4af37]/20" />
            </div>

            {/* Label Below */}
            <span className="font-ui mt-2.5 text-xs sm:text-sm font-bold text-[#0b3829]">
              {item.label}
            </span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
