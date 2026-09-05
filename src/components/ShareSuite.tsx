"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Share2, MessageCircle, Copy, Check, Calendar, Heart, Sparkles } from "lucide-react";

export default function ShareSuite() {
  const [copied, setCopied] = useState(false);

  const getShareText = () => {
    const url = typeof window !== "undefined" ? window.location.origin : "";
    return `بِسْمِ اللَّـهِ الرَّحْمَـٰنِ الرَّحِيمِ 🌸\nيتشرف أحمد وندى بدعوتكم الكريمة لحضور حفل زفافهما المبارك.\nالجمعة ١١ سبتمبر (عقد القران) والسبت ١٢ سبتمبر (حفل الزفاف) ٢٠٢٦.\nلمشاهدة بطاقة الدعوة وتفاصيل الموقع وتأكيد الحضور:\n${url}`;
  };

  const handleWhatsApp = () => {
    const text = encodeURIComponent(getShareText());
    window.open(`https://api.whatsapp.com/send?text=${text}`, "_blank");
  };

  const handleCopyLink = () => {
    const url = typeof window !== "undefined" ? window.location.href : "";
    navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  // Download ICS File for iPhone / Outlook / Calendar
  const handleDownloadIcs = () => {
    const icsData = [
      "BEGIN:VCALENDAR",
      "VERSION:2.0",
      "PRODID:-//Ahmed & Nada Wedding//AR",
      "CALSCALE:GREGORIAN",
      "METHOD:PUBLISH",
      "BEGIN:VEVENT",
      "SUMMARY:حفل زفاف أحمد و ندى 💍",
      "DESCRIPTION:يسعدنا ويشرفنا حضوركم لمشاركتنا فرحة العمر في قاعة الياسمين - بهورين.",
      "LOCATION:قاعة الياسمين - بهورين",
      "DTSTART:20260912T170000Z",
      "DTEND:20260912T230000Z",
      "STATUS:CONFIRMED",
      "END:VEVENT",
      "END:VCALENDAR",
    ].join("\r\n");

    const blob = new Blob([icsData], { type: "text/calendar;charset=utf-8" });
    const link = document.createElement("a");
    link.href = window.URL.createObjectURL(blob);
    link.setAttribute("download", "ahmed-nada-wedding.ics");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="relative py-20 px-4 text-center">
      <div className="mx-auto max-w-2xl">
        {/* Header */}
        <div className="flex flex-col items-center gap-2 mb-8">
          <div className="flex items-center gap-2 text-xs font-bold tracking-widest text-[#ab7f17]">
            <Share2 className="h-4 w-4 text-[#cba135]" />
            <span>مشاركة بطاقة الدعوة</span>
            <Sparkles className="h-4 w-4 text-[#cba135]" />
          </div>
          <h2 className="font-display text-3xl font-bold text-[#0b3829]">
            شاركوا أحبابكم فرحتنا
          </h2>
          <p className="font-ui text-xs sm:text-sm text-[#5e6d64]">
            يمكنكم إرسال الدعوة للأهل والأصدقاء عبر واتساب أو حفظ الموعد في هاتفكم
          </p>
        </div>

        {/* Buttons Grid */}
        <div className="flex flex-wrap items-center justify-center gap-3">
          {/* WhatsApp */}
          <button
            onClick={handleWhatsApp}
            className="flex items-center gap-2 rounded-2xl border border-emerald-600/40 bg-emerald-700 hover:bg-emerald-800 text-white px-5 py-3 text-xs sm:text-sm font-bold shadow-md transition-all hover:scale-105 active:scale-95"
          >
            <MessageCircle className="h-4 w-4 text-emerald-200" />
            <span>إرسال عبر واتساب</span>
          </button>

          {/* Copy Link */}
          <button
            onClick={handleCopyLink}
            className="flex items-center gap-2 rounded-2xl border border-[#d4af37]/40 bg-white px-5 py-3 text-xs sm:text-sm font-bold text-[#0b3829] shadow-sm hover:bg-[#faf6ef] transition-all hover:scale-105 active:scale-95"
          >
            {copied ? (
              <>
                <Check className="h-4 w-4 text-emerald-600" />
                <span>تم نسخ الرابط!</span>
              </>
            ) : (
              <>
                <Copy className="h-4 w-4 text-[#ab7f17]" />
                <span>نسخ رابط الدعوة</span>
              </>
            )}
          </button>

          {/* Download ICS */}
          <button
            onClick={handleDownloadIcs}
            className="flex items-center gap-2 rounded-2xl border border-[#d4af37] bg-gradient-to-r from-[#0b3829] to-[#051e16] px-5 py-3 text-xs sm:text-sm font-bold text-[#f7e7a9] shadow-md transition-all hover:scale-105 active:scale-95"
          >
            <Calendar className="h-4 w-4 text-[#ffd700]" />
            <span>حفظ الموعد بالتقويم (.ics)</span>
          </button>
        </div>

        {/* Royal Closing Signoff */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-20 flex flex-col items-center gap-3 pt-12 border-t border-[#d4af37]/30"
        >
          <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#d4af37] bg-gradient-to-br from-[#0b3829] to-[#051e16] text-[#ffd700] shadow-md">
            <Heart className="h-5 w-5 fill-[#ffd700]" />
          </div>

          <p className="font-display text-2xl sm:text-3xl font-bold text-[#0b3829]">
            بانتظار تشريفكم الكريم بكل حب وشوق
          </p>
          <p className="font-display text-4xl sm:text-5xl font-extrabold gold-gradient-text mt-1">
            أحمد &amp; ندى
          </p>
          <p className="font-ui text-xs text-[#ab7f17] mt-1 tracking-widest">
            سبتمبر ٢٠٢٦ م · ربيع الأول ١٤٤٨ هـ
          </p>
        </motion.div>
      </div>
    </section>
  );
}
