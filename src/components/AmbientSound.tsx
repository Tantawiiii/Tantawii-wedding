"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

// Gentle generative pad: a slow rotating chord of soft sine/triangle tones
// with long attack/release, plus a subtle shimmer voice — no audio files needed.
function createAmbientEngine() {
  const ctx = new (window.AudioContext ||
    (window as unknown as { webkitAudioContext: typeof AudioContext })
      .webkitAudioContext)();

  const master = ctx.createGain();
  master.gain.value = 0;
  master.connect(ctx.destination);

  const filter = ctx.createBiquadFilter();
  filter.type = "lowpass";
  filter.frequency.value = 1400;
  filter.connect(master);

  // Chord progression (Hz), cycling slowly — warm, consonant, non-intrusive
  const chords = [
    [220.0, 277.18, 329.63], // A3, C#4, E4
    [196.0, 246.94, 293.66], // G3, B3, D4
    [174.61, 220.0, 261.63], // F3, A3, C4
    [196.0, 246.94, 329.63], // G3, B3, E4
  ];

  const oscillators: { osc: OscillatorNode; gain: GainNode }[] = [];
  let chordIndex = 0;
  let timer: ReturnType<typeof setInterval> | null = null;

  function playChord(freqs: number[]) {
    const now = ctx.currentTime;
    const attack = 3;
    const hold = 5;
    const release = 4;

    freqs.forEach((freq, i) => {
      const osc = ctx.createOscillator();
      osc.type = i === 0 ? "sine" : "triangle";
      osc.frequency.value = freq;

      const gain = ctx.createGain();
      gain.gain.value = 0;
      osc.connect(gain);
      gain.connect(filter);

      const peak = 0.05 - i * 0.012;
      gain.gain.linearRampToValueAtTime(peak, now + attack);
      gain.gain.setValueAtTime(peak, now + attack + hold);
      gain.gain.linearRampToValueAtTime(0, now + attack + hold + release);

      osc.start(now);
      osc.stop(now + attack + hold + release + 0.5);

      oscillators.push({ osc, gain });
    });
  }

  return {
    start() {
      playChord(chords[chordIndex]);
      timer = setInterval(() => {
        chordIndex = (chordIndex + 1) % chords.length;
        playChord(chords[chordIndex]);
      }, 9000);
      master.gain.linearRampToValueAtTime(1, ctx.currentTime + 1.5);
    },
    setMuted(muted: boolean) {
      master.gain.linearRampToValueAtTime(
        muted ? 0 : 1,
        ctx.currentTime + 0.6
      );
    },
    dispose() {
      if (timer) clearInterval(timer);
      oscillators.forEach(({ osc }) => {
        try {
          osc.stop();
        } catch {
          // already stopped
        }
      });
      ctx.close();
    },
    get context() {
      return ctx;
    },
  };
}

export default function AmbientSound() {
  const [enabled, setEnabled] = useState(false);
  const engineRef = useRef<ReturnType<typeof createAmbientEngine> | null>(
    null
  );

  useEffect(() => {
    return () => {
      engineRef.current?.dispose();
    };
  }, []);

  const toggle = () => {
    if (!engineRef.current) {
      engineRef.current = createAmbientEngine();
      engineRef.current.start();
      setEnabled(true);
      return;
    }
    const next = !enabled;
    engineRef.current.setMuted(!next);
    if (next && engineRef.current.context.state === "suspended") {
      engineRef.current.context.resume();
    }
    setEnabled(next);
  };

  return (
    <motion.button
      onClick={toggle}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.8, duration: 0.6 }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.92 }}
      aria-label={enabled ? "كتم الموسيقى" : "تشغيل الموسيقى"}
      className="glass fixed bottom-5 left-5 z-50 flex h-12 w-12 items-center justify-center rounded-full text-lg shadow-lg"
    >
      <motion.span
        animate={enabled ? { scale: [1, 1.15, 1] } : { scale: 1 }}
        transition={{ duration: 1.6, repeat: enabled ? Infinity : 0 }}
      >
        {enabled ? "🎵" : "🔇"}
      </motion.span>
    </motion.button>
  );
}
