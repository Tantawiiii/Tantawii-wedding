"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Reveal from "@/components/Reveal";
import OrnamentDivider from "@/components/OrnamentDivider";
import Countdown from "@/components/Countdown";
import EventCard from "@/components/EventCard";
import HeartsBurst from "@/components/HeartsBurst";
import ScrollProgress from "@/components/ScrollProgress";
import CursorGlow from "@/components/CursorGlow";
import JourneyRail from "@/components/JourneyRail";
import MagneticButton from "@/components/MagneticButton";
import ModernBackground from "@/components/ModernBackground";
import AmbientSound from "@/components/AmbientSound";
import BotanicalDecor from "@/components/BotanicalDecor";

export default function InvitationJourney() {
  const heroRef = useRef<HTMLElement>(null);

  const { scrollYProgress: heroProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroY = useTransform(heroProgress, [0, 1], [0, 160]);
  const heroOpacity = useTransform(heroProgress, [0, 0.8], [1, 0]);
  const heroScale = useTransform(heroProgress, [0, 1], [1, 0.94]);

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="paper-bg grain relative min-h-screen w-full"
    >
      <ScrollProgress />
      <CursorGlow />
      <JourneyRail />
      <HeartsBurst />
      <AmbientSound />
      <ModernBackground />
      <BotanicalDecor />

      {/* floating decorative glyphs across the page */}
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden opacity-60">
        <span className="drift absolute left-[8%] top-[12%] text-2xl opacity-30">
          ✦
        </span>
        <span className="float-slow-2 absolute right-[10%] top-[30%] text-xl text-gold opacity-40">
          ✧
        </span>
        <span className="drift absolute left-[15%] top-[65%] text-xl opacity-30">
          ✦
        </span>
        <span className="float-slow-2 absolute right-[6%] top-[80%] text-2xl text-gold opacity-30">
          ✧
        </span>
      </div>

      {/* HERO / OPENING DUA */}
      <motion.section
        ref={heroRef}
        style={{ y: heroY, opacity: heroOpacity, scale: heroScale }}
        className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 py-24 text-center"
      >
        <Reveal>
          <p className="font-kufi text-xs tracking-[0.35em] text-gold">
            بسم الله الرحمن الرحيم
          </p>
        </Reveal>

        <Reveal delay={0.15} className="mt-8 max-w-xl">
          <p className="font-body text-xl leading-loose text-ink/85 sm:text-2xl">
            ﴿وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُمْ مِنْ أَنْفُسِكُمْ أَزْوَاجًا
            لِتَسْكُنُوا إِلَيْهَا وَجَعَلَ بَيْنَكُمْ مَوَدَّةً وَرَحْمَةً﴾
          </p>
          <p className="font-kufi mt-3 text-sm text-muted">
            صدق الله العظيم - سورة الروم
          </p>
        </Reveal>

        <Reveal delay={0.25}>
          <OrnamentDivider />
        </Reveal>

        <Reveal delay={0.3} className="mt-6">
          <p className="font-body text-lg text-ink/70">
            بكل الحب والسعادة
          </p>
          <p className="font-body mt-2 text-lg text-ink/70">
            نتشرف بدعوتكم لمشاركتنا أجمل لحظات حياتنا
          </p>
        </Reveal>

        <Reveal delay={0.45} scale={0.8} className="mt-12">
          <motion.h1
            animate={{
              textShadow: [
                "0 0 20px rgba(205,164,94,0.15)",
                "0 0 40px rgba(205,164,94,0.35)",
                "0 0 20px rgba(205,164,94,0.15)",
              ],
            }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="font-display shimmer-text text-5xl leading-tight sm:text-7xl"
          >
            أحمد <span className="heartbeat inline-block px-2">♥</span> ندى
          </motion.h1>
        </Reveal>

        <Reveal delay={0.6} className="mt-16">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.8, repeat: Infinity }}
            className="flex flex-col items-center text-muted"
          >
            <span className="font-kufi text-xs">مرر لأسفل لبدء الرحلة</span>
            <span className="mt-2 text-xl text-gold">↓</span>
          </motion.div>
        </Reveal>
      </motion.section>

      {/* COUNTDOWN */}
      <section className="relative z-10 flex flex-col items-center justify-center gap-8 px-6 py-28 text-center">
        <Reveal>
          <p className="font-kufi text-sm tracking-widest text-gold">
            لم يتبقَّ سوى
          </p>
          <h2 className="font-display mt-2 text-3xl text-ink">
            بداية حكايتنا
          </h2>
        </Reveal>
        <Reveal delay={0.2}>
          <Countdown />
        </Reveal>
      </section>

      {/* STORY TEASER - fun creative bit */}
      <section className="relative z-10 flex flex-col items-center justify-center gap-6 px-6 py-24 text-center">
        <Reveal className="max-w-lg" scale={0.9}>
          <motion.div whileHover={{ y: -4 }} className="glass rounded-3xl p-8">
            <motion.p
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
              className="text-3xl"
            >
              💌
            </motion.p>
            <p className="font-body mt-4 text-lg leading-relaxed text-ink/85">
              حكايتنا بدأت بابتسامة، وكبرت بالثقة، والآن... نكتب أول صفحة من
              كتابنا سويًا، وأنتم جزء لا يكتمل الفرح بدونه
            </p>
          </motion.div>
        </Reveal>
      </section>

      {/* EVENT 1 - AKD */}
      <section className="relative z-10 flex flex-col items-center justify-center gap-8 px-6 py-28 text-center">
        <Reveal>
          <h2 className="font-display text-3xl text-ink sm:text-4xl">
            إشهار عقد القران
          </h2>
        </Reveal>

        <EventCard
          icon="📖"
          eyebrow=" إشهار عقد القران"
          title="الاشهار "
          day="١١"
          month="سبتمبر ٢٠٢٦"
          weekday="الجمعة"
          timeLabel="بعد صلاة العصر مباشرة"
          venue="مسجد فجر الإسلام"
          mapUrl="https://maps.app.goo.gl/hKN4xiw5rDgaYSLUA"
          accent="gold"
        />
      </section>

      {/* EVENT 2 - ZAFAF */}
      <section className="relative z-10 flex flex-col items-center justify-center gap-8 px-6 py-28 text-center">
        <Reveal>
          <h2 className="font-display text-3xl text-ink sm:text-4xl">
            ليلة الزفاف
          </h2>
        </Reveal>

        <EventCard
          icon="💍"
          eyebrow="حفل الزفاف"
          title="ليلة العمر"
          day="١٢"
          month="سبتمبر ٢٠٢٦"
          weekday="السبت"
          timeLabel="بعد صلاة العشاء"
          venue="قاعة الياسمين - بهورين"
          mapUrl="https://maps.app.goo.gl/uiuDPHTdJgqz91DL8"
          accent="rose"
        />
      </section>

      {/* FUN CLOSING */}
      <section className="relative z-10 flex flex-col items-center justify-center gap-6 px-6 py-28 text-center">

        <Reveal delay={0.2} className="mt-6">
          <div className="flex flex-wrap items-center justify-center gap-3 text-3xl">
            {["🎊", "💐", "🕺", "💃", "🎶"].map((e, i) => (
              <motion.span
                key={e}
                whileHover={{ scale: 1.4, rotate: 10 }}
                className={i % 2 === 0 ? "float-slow" : "float-slow-2"}
              >
                {e}
              </motion.span>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.35} className="mt-12">
          <MagneticButton className="inline-block cursor-default">
            <p className="font-display shimmer-text text-2xl">أحمد و ندى</p>
          </MagneticButton>
          <p className="font-kufi mt-2 text-xs text-muted">بانتظار شرفكم</p>
        </Reveal>
      </section>
    </motion.main>
  );
}
