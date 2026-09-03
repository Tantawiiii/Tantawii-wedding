"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Reveal from "@/components/Reveal";
import SectionIndex from "@/components/SectionIndex";
import Countdown from "@/components/Countdown";
import EventCard from "@/components/EventCard";
import ScrollProgress from "@/components/ScrollProgress";
import AmbientSound from "@/components/AmbientSound";
import MagneticButton from "@/components/MagneticButton";

export default function InvitationJourney() {
  const heroRef = useRef<HTMLElement>(null);

  const { scrollYProgress: heroProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroY = useTransform(heroProgress, [0, 1], [0, 100]);
  const heroOpacity = useTransform(heroProgress, [0, 0.8], [1, 0]);

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="relative min-h-screen w-full bg-bg"
    >
      <ScrollProgress />
      <AmbientSound />

      {/* HERO */}
      <motion.section
        ref={heroRef}
        style={{ y: heroY, opacity: heroOpacity }}
        className="relative flex min-h-screen flex-col items-center justify-center px-6 py-24 text-center"
      >
        <Reveal>
          <span className="font-ui inline-block rounded-full border border-[var(--line)] px-4 py-1.5 text-xs tracking-widest text-muted">
            بسم الله الرحمن الرحيم
          </span>
        </Reveal>

        <Reveal delay={0.1} className="mt-10 max-w-lg">
          <p className="font-body text-lg leading-loose text-ink/80 sm:text-xl">
            ﴿وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُمْ مِنْ أَنْفُسِكُمْ أَزْوَاجًا
            لِتَسْكُنُوا إِلَيْهَا وَجَعَلَ بَيْنَكُمْ مَوَدَّةً وَرَحْمَةً﴾
          </p>
          <p className="font-ui mt-3 text-xs text-muted">
            سورة الروم
          </p>
        </Reveal>

        <Reveal delay={0.25} className="mt-14">
          <h1 className="font-display text-6xl leading-none text-ink sm:text-8xl">
            أحمد
            <span className="heartbeat mx-3 inline-block text-accent">&amp;</span>
            ندى
          </h1>
        </Reveal>

        <Reveal delay={0.4} className="mt-6">
          <p className="font-ui text-sm text-muted">
            يتشرفان بدعوتكم لمشاركتهما أجمل لحظات حياتهما
          </p>
        </Reveal>

        <Reveal delay={0.55} className="mt-20">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.8, repeat: Infinity }}
            className="flex flex-col items-center gap-2 text-muted"
          >
            <span className="font-ui text-[11px] tracking-widest">مرر لأسفل</span>
            <span className="text-accent">↓</span>
          </motion.div>
        </Reveal>
      </motion.section>

      {/* COUNTDOWN */}
      <section className="flex flex-col items-center justify-center gap-10 px-6 py-24 text-center">
        <Reveal>
          <SectionIndex n="01" label="العد التنازلي" />
          <h2 className="font-display mt-4 text-3xl text-ink">
            بداية حكايتنا
          </h2>
        </Reveal>
        <Reveal delay={0.15}>
          <Countdown />
        </Reveal>
      </section>

      {/* STORY */}
      <section className="flex flex-col items-center justify-center gap-8 px-6 py-24 text-center">
        <Reveal>
          <SectionIndex n="02" label="كلمة منّا" />
        </Reveal>
        <Reveal delay={0.15} className="max-w-lg">
          <p className="font-body text-xl leading-relaxed text-ink/85">
            حكايتنا بدأت بابتسامة، وكبرت بالثقة، والآن نكتب أول صفحة من
            كتابنا سويًا — وأنتم جزء لا يكتمل الفرح بدونه.
          </p>
        </Reveal>
      </section>

      {/* EVENT 1 */}
      <section className="flex flex-col items-center justify-center gap-10 px-6 py-24 text-center">
        <Reveal>
          <SectionIndex n="03" label="عقد القران" />
          <h2 className="font-display mt-4 text-3xl text-ink sm:text-4xl">
            إشهار عقد القران
          </h2>
        </Reveal>

        <EventCard
          index="01"
          eyebrow="عقد القران"
          title="ليلة الاشهار"
          day="١١"
          month="سبتمبر ٢٠٢٦"
          weekday="الجمعة"
          timeLabel="بعد صلاة العصر مباشرة"
          venue="مسجد فجر الإسلام"
          mapUrl="https://maps.app.goo.gl/hKN4xiw5rDgaYSLUA"
        />
      </section>

      {/* EVENT 2 */}
      <section className="flex flex-col items-center justify-center gap-10 px-6 py-24 text-center">
        <Reveal>
          <SectionIndex n="04" label="حفل الزفاف" />
          <h2 className="font-display mt-4 text-3xl text-ink sm:text-4xl">
            ليلة الزفاف
          </h2>
        </Reveal>

        <EventCard
          index="02"
          eyebrow="حفل الزفاف"
          title="ليلة العمر"
          day="١٢"
          month="سبتمبر ٢٠٢٦"
          weekday="السبت"
          timeLabel="بعد صلاة العشاء"
          venue="قاعة الياسمين - بهورين"
          mapUrl="https://maps.app.goo.gl/uiuDPHTdJgqz91DL8"
        />
      </section>

      {/* CLOSING */}
      <section className="flex flex-col items-center justify-center gap-8 px-6 py-28 text-center">
        <Reveal>
          <SectionIndex n="05" label="بانتظاركم" />
          <h2 className="font-display mt-4 text-3xl text-ink">
            وجودكم هو أجمل هدية
          </h2>
          <p className="font-ui mx-auto mt-4 max-w-md text-base leading-relaxed text-muted">
            جهزوا رقصاتكم وابتساماتكم، فالفرحة ناقصة إلا بيكم — نراكم على
            أنغام الفرح ولحظات لا تُنسى.
          </p>
        </Reveal>

        <Reveal delay={0.2} className="mt-8">
          <MagneticButton className="inline-block cursor-default">
            <p className="font-display text-3xl text-ink">أحمد &amp; ندى</p>
          </MagneticButton>
        </Reveal>
      </section>
    </motion.main>
  );
}
