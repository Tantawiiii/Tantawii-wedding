"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import Countdown from "@/components/Countdown";
import EventCard from "@/components/EventCard";
import GallerySection from "@/components/GallerySection";
import GuestbookSection from "@/components/GuestbookSection";
import ShareSuite from "@/components/ShareSuite";
import AmbientSound from "@/components/AmbientSound";
import PetalsCanvas from "@/components/PetalsCanvas";
import { Sparkles, Calendar, ShieldCheck } from "lucide-react";

export default function InvitationJourney() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="silk-bg paper-grain relative min-h-screen w-full overflow-hidden"
    >
      {/* 1. Floating Gold Dust & Rose Petals */}
      <PetalsCanvas />

      {/* 2. Floating Navbar */}
      <Navbar />

      {/* 3. Hero Section */}
      <HeroSection />

      {/* 4. Countdown to Big Day */}
      <Countdown />

      {/* 5. Events Section (Dual Occasions) */}
      <section id="events-section" className="relative py-20 px-4">
        <div className="mx-auto max-w-5xl">
          {/* Section Header */}
          <div className="flex flex-col items-center text-center gap-2 mb-14">
            <div className="flex items-center gap-2 text-xs font-bold tracking-widest text-[#ab7f17]">
              <Calendar className="h-4 w-4 text-[#cba135]" />
              <span>تفاصيل ومواعيد الاحتفال</span>
              <Sparkles className="h-4 w-4 text-[#cba135]" />
            </div>
            <h2 className="font-display text-3xl sm:text-5xl font-bold text-[#0b3829]">
              موعدنا مع الفرحة
            </h2>
            <p className="font-ui text-xs sm:text-sm text-[#5e6d64] max-w-md">
              يسعدنا حضوركم في مناسبتي عقد القران وحفل الزفاف
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Event 1: عقد القران */}
            <EventCard
              badge="عقد القران المبارك"
              title="إشهار عقد القران"
              dayNumber="١١"
              monthYear="سبتمبر ٢٠٢٦"
              weekday="يوم الجمعة"
              timeText="بعد صلاة العصر مباشرة"
              prayerNote="مباركة الميثاق الغليظ بحضور الأهل والأحباب"
              venueName="مسجد فجر الإسلام"
              mapUrl="https://maps.app.goo.gl/hKN4xiw5rDgaYSLUA"
              calendarTitle="عقد قران أحمد و ندى 💍"
              calendarDateStart="20260911T133000Z"
              calendarDateEnd="20260911T170000Z"
            />

            {/* Event 2: حفل الزفاف */}
            <EventCard
              badge="حفل الزفاف والبهجة الكبرى"
              title="ليلة العمر الكبرى"
              dayNumber="١٢"
              monthYear="سبتمبر ٢٠٢٦"
              weekday="يوم السبت"
              timeText="بعد صلاة العشاء (الثامنة والنصف مساءً)"
              prayerNote="سهرة ملكية تمتد حتى منتصف الليل بالأفراح"
              venueName="قاعة الياسمين - بهورين"
              mapUrl="https://maps.app.goo.gl/uiuDPHTdJgqz91DL8"
              calendarTitle="حفل زفاف أحمد و ندى 👑"
              calendarDateStart="20260912T173000Z"
              calendarDateEnd="20260912T230000Z"
            />
          </div>

          {/* Etiquette & Dress Code Callout
          <div className="luxury-card mt-12 mx-auto max-w-3xl rounded-2xl p-5 sm:p-6 text-center flex flex-col sm:flex-row items-center justify-center gap-4">
            <div className="flex h-11 w-11 items-center justify-center rounded-full border border-[#d4af37] bg-[#faf6ef] text-[#ab7f17]">
              <ShieldCheck className="h-5 w-5" />
            </div>
            <div className="text-center sm:text-right">
              <span className="font-ui text-xs font-bold text-[#ab7f17] block">
                ملاحظة وضيافة خاصة:
              </span>
              <p className="font-ui text-xs sm:text-sm text-[#5e6d64] mt-0.5">
                الزي الرسمي الفاخر (Formal / Black Tie) · حضوركم ومشاركتكم فرحتنا هي أثمن وأغلى الهدايا لقلوبنا 🤍
              </p>
            </div>
          </div> */}
        </div>
      </section>

      {/* 6. Gallery Section */}
      <GallerySection />

      {/* 7. Guestbook & Wishes Wall */}
      <GuestbookSection />

      {/* 8. Share Suite & Royal Closing */}
      <ShareSuite />

      {/* 9. Floating Music Player */}
      <AmbientSound />
    </motion.main>
  );
}
