"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, Clock, Navigation, Check, Sparkles } from "lucide-react";

interface EventCardProps {
  badge: string;
  title: string;
  dayNumber: string;
  monthYear: string;
  weekday: string;
  timeText: string;
  prayerNote: string;
  venueName: string;
  venueDetails: string;
  mapUrl: string;
  calendarTitle: string;
  calendarDateStart: string; // ISO string e.g. "20260911T143000Z"
  calendarDateEnd: string;
}

export default function EventCard({
  badge,
  title,
  dayNumber,
  monthYear,
  weekday,
  timeText,
  prayerNote,
  venueName,
  venueDetails,
  mapUrl,
  calendarTitle,
  calendarDateStart,
  calendarDateEnd,
}: EventCardProps) {
  const [copied, setCopied] = useState(false);

  // Direct Google Calendar Add Link
  const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
    calendarTitle
  )}&dates=${calendarDateStart}/${calendarDateEnd}&details=${encodeURIComponent(
    `حفل زفاف أحمد وندى في ${venueName}. نتشرف بحضوركم الكريم.`
  )}&location=${encodeURIComponent(venueName)}`;

  const handleCopyVenue = () => {
    navigator.clipboard.writeText(venueName);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="luxury-card relative flex flex-col justify-between overflow-hidden rounded-3xl p-6 sm:p-8 text-right transition-all hover:shadow-[0_25px_60px_-15px_rgba(203,161,53,0.25)] hover:border-[#d4af37]/60"
    >
      {/* Top Gilded Accent Bar */}
      <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-[#0b3829] via-[#d4af37] to-[#0b3829]" />

      <div>
        {/* Badge & Occasion */}
        <div className="flex items-center justify-between gap-2">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-[#d4af37]/40 bg-[#cba135]/15 px-3.5 py-1 text-xs font-bold text-[#ab7f17]">
            <Sparkles className="h-3 w-3 text-[#cba135]" />
            {badge}
          </span>
          <span className="font-ui text-xs font-semibold text-[#5e6d64]">
            {weekday}
          </span>
        </div>

        {/* Title */}
        <h3 className="font-display mt-4 text-2xl sm:text-3xl font-bold text-[#0b3829]">
          {title}
        </h3>

        {/* Date & Time Container */}
        <div className="mt-5 flex items-stretch gap-4 rounded-2xl border border-[#d4af37]/20 bg-[#fbf9f5] p-4">
          {/* Day Big Badge */}
          <div className="flex w-20 flex-shrink-0 flex-col items-center justify-center rounded-xl border border-[#d4af37]/40 bg-gradient-to-b from-[#0b3829] to-[#051e16] p-2 text-center text-white shadow-sm">
            <span className="font-ui text-3xl sm:text-4xl font-extrabold text-[#f7e7a9] leading-none">
              {dayNumber}
            </span>
            <span className="font-ui mt-1 text-[10px] font-medium text-[#ffd700]/90">
              {monthYear}
            </span>
          </div>

          {/* Time & Prayer Schedule */}
          <div className="flex flex-1 flex-col justify-center">
            <div className="flex items-center gap-1.5 text-sm font-bold text-[#1b2820]">
              <Clock className="h-4 w-4 text-[#ab7f17]" />
              <span>{timeText}</span>
            </div>
            <p className="font-ui mt-1 text-xs font-semibold text-[#ab7f17]">
              {prayerNote}
            </p>
          </div>
        </div>

        {/* Venue Information */}
        <div className="mt-6 flex flex-col gap-1.5">
          <div className="flex items-center justify-between">
            <span className="font-ui text-xs font-semibold text-[#5e6d64]">
              مكان الحفل
            </span>
            <button
              onClick={handleCopyVenue}
              className="text-[11px] font-semibold text-[#ab7f17] hover:underline flex items-center gap-1"
            >
              {copied ? (
                <>
                  <Check className="h-3 w-3 text-emerald-600" />
                  <span>تم نسخ الاسم</span>
                </>
              ) : (
                <span>نسخ اسم المكان</span>
              )}
            </button>
          </div>

          <p className="font-display text-xl sm:text-2xl font-bold text-[#0b3829]">
            {venueName}
          </p>
          <p className="font-ui text-xs text-[#5e6d64] leading-relaxed">
            {venueDetails}
          </p>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="mt-8 flex flex-col sm:flex-row items-center gap-3">
        {/* Google Maps Button */}
        <a
          href={mapUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex w-full flex-1 items-center justify-center gap-2 rounded-xl border border-[#d4af37] bg-gradient-to-r from-[#0b3829] to-[#051e16] py-3 px-4 text-xs sm:text-sm font-bold text-[#f7e7a9] shadow-md transition-transform hover:scale-[1.02] active:scale-[0.98]"
        >
          <Navigation className="h-4 w-4 text-[#ffd700]" />
          <span>الموقع على خرائط Google</span>
        </a>

        {/* Add to Calendar Button */}
        <a
          href={googleCalendarUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex w-full sm:w-auto items-center justify-center gap-1.5 rounded-xl border border-[#d4af37]/40 bg-white px-4 py-3 text-xs sm:text-sm font-bold text-[#0b3829] shadow-sm hover:bg-[#faf6ef] transition-colors"
          title="حفظ الموعد في تقويم Google"
        >
          <Calendar className="h-4 w-4 text-[#ab7f17]" />
          <span>حفظ الموعد</span>
        </a>
      </div>
    </motion.div>
  );
}
