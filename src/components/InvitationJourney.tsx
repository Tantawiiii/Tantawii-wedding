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
import BlobField from "@/components/BlobField";

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
      className="relative min-h-screen w-full overflow-hidden bg-bg"
    >
      <ScrollProgress />
      <AmbientSound />

      {/* HERO */}
      <motion.section
        ref={heroRef}
        style={{ y: heroY, opacity: heroOpacity }}
        className="relative flex min-h-screen flex-col items-center justify-center px-6 py-24 text-center"
      >
        <BlobField />

        <Reveal>
          <span className="font-ui inline-block rounded-full bg-ink px-4 py-1.5 text-xs font-bold tracking-widest text-white">
            بسم الله الرحمن الرحيم
          </span>
        </Reveal>

        <Reveal delay={0.1} className="mt-10 max-w-lg">
          <p className="font-body text-lg leading-loose text-ink/80 sm:text-xl">
            ﴿وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُمْ مِنْ أَنْفُسِكُمْ أَزْوَاجًا
            لِتَسْكُنُوا إِلَيْهَا وَجَعَلَ بَيْنَكُمْ مَوَدَّةً وَرَحْمَةً﴾
          </p>
          <p className="font-ui mt-3 text-xs font-semibold text-muted">
            سورة الروم
          </p>
        </Reveal>

        <Reveal delay={0.25} className="mt-14">
          <h1 className="font-display text-6xl leading-none sm:text-8xl">
            <span className="text-ink">أحمد</span>
            <motion.span
              animate={{ rotate: [0, 15, -15, 0], scale: [1, 1.2, 1] }}
              transition={{ duration: 2.4, repeat: Infinity }}
              className="mx-3 inline-block gradient-text"
            >
              &amp;
            </motion.span>
            <span className="text-ink">ندى</span>
          </h1>
        </Reveal>

        <Reveal delay={0.4} className="mt-6">
          <p className="font-ui text-sm font-medium text-muted">
            يتشرفان بدعوتكم لمشاركتهما أجمل لحظات حياتهما 🎉
          </p>
        </Reveal>

        <Reveal delay={0.55} className="mt-20">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.8, repeat: Infinity }}
            className="flex flex-col items-center gap-2"
          >
            <span className="font-ui text-[11px] font-bold tracking-widest text-muted">
              مرر لأسفل
            </span>
            <span className="text-2xl">👇</span>
          </motion.div>
        </Reveal>
      </motion.section>

      {/* COUNTDOWN */}
      <section className="relative flex flex-col items-center justify-center gap-10 px-6 py-28 text-center">
        <BlobField />
        <Reveal>
          <SectionIndex n="01" label="العد التنازلي" color="var(--magenta)" />
          <h2 className="font-display mt-4 text-3xl text-ink">
            بداية حكايتنا 💫
          </h2>
        </Reveal>
        <Reveal delay={0.15}>
          <Countdown />
        </Reveal>
      </section>

      {/* STORY */}
      <section className="relative flex flex-col items-center justify-center gap-8 px-6 py-28 text-center">
        <BlobField />
        <Reveal>
          <SectionIndex n="02" label="كلمة منّا" color="var(--emerald)" />
        </Reveal>
        <Reveal delay={0.15} className="max-w-lg">
          <motion.div
            whileHover={{ rotate: -1, scale: 1.02 }}
            className="rounded-[2rem] bg-surface p-8 shadow-[0_25px_60px_-25px_rgba(32,18,39,0.35)]"
            style={{ border: "3px solid var(--ink)" }}
          >
            <p className="text-4xl">💌</p>
            <p className="font-body mt-4 text-xl leading-relaxed text-ink/85">
              حكايتنا بدأت بابتسامة، وكبرت بالثقة، والآن نكتب أول صفحة من
              كتابنا سويًا — وأنتم جزء لا يكتمل الفرح بدونه.
            </p>
          </motion.div>
        </Reveal>
      </section>

      {/* EVENT 1 */}
      <section className="relative flex flex-col items-center justify-center gap-10 px-6 py-28 text-center">
        <BlobField />
        <Reveal>
          <SectionIndex n="03" label="عقد القران" color="var(--gold-deep)" />
          <h2 className="font-display mt-4 text-3xl text-ink sm:text-4xl">
            إشهار عقد القران
          </h2>
        </Reveal>

        <EventCard
          eyebrow="عقد القران"
          title="ليلة الاشهار"
          day="١١"
          month="سبتمبر ٢٠٢٦"
          weekday="الجمعة"
          timeLabel="بعد صلاة العصر مباشرة"
          venue="مسجد فجر الإسلام"
          mapUrl="https://maps.app.goo.gl/hKN4xiw5rDgaYSLUA"
          color="var(--gold-deep)"
        />
      </section>

      {/* EVENT 2 */}
      <section className="relative flex flex-col items-center justify-center gap-10 px-6 py-28 text-center">
        <BlobField />
        <Reveal>
          <SectionIndex n="04" label="حفل الزفاف" color="var(--magenta)" />
          <h2 className="font-display mt-4 text-3xl text-ink sm:text-4xl">
            ليلة الزفاف
          </h2>
        </Reveal>

        <EventCard
          eyebrow="حفل الزفاف"
          title="ليلة العمر"
          day="١٢"
          month="سبتمبر ٢٠٢٦"
          weekday="السبت"
          timeLabel="بعد صلاة العشاء"
          venue="قاعة الياسمين - بهورين"
          mapUrl="https://maps.app.goo.gl/uiuDPHTdJgqz91DL8"
          color="var(--magenta)"
        />
      </section>

      {/* CLOSING */}
      <section className="relative flex flex-col items-center justify-center gap-8 px-6 py-28 text-center">
        <BlobField />
        <Reveal>
          <SectionIndex n="05" label="بانتظاركم" color="var(--violet)" />
          <h2 className="font-display mt-4 text-3xl text-ink">
            وجودكم هو أجمل هدية 🎊
          </h2>
          <p className="font-ui mx-auto mt-4 max-w-md text-base leading-relaxed text-muted">
            جهزوا رقصاتكم وابتساماتكم، فالفرحة ناقصة إلا بيكم — نراكم على
            أنغام الفرح ولحظات لا تُنسى.
          </p>
        </Reveal>

        <Reveal delay={0.15} className="mt-4">
          <div className="flex flex-wrap items-center justify-center gap-3 text-3xl">
            {["🎊", "💃", "🕺", "🎶", "💐"].map((e, i) => (
              <motion.span
                key={e}
                whileHover={{ scale: 1.4, rotate: 15 }}
                className={i % 2 === 0 ? "float-slow" : "float-slow-2"}
              >
                {e}
              </motion.span>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.3} className="mt-8">
          <MagneticButton className="inline-block cursor-default">
            <p className="font-display gradient-text text-4xl font-bold">
              أحمد &amp; ندى
            </p>
          </MagneticButton>
        </Reveal>
      </section>
    </motion.main>
  );
}
