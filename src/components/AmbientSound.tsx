"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { VolumeX, Music } from "lucide-react";
import { getWeddingSong, playWeddingSong, isWeddingSongPlaying } from "@/lib/weddingSong";

export default function AmbientSound() {
  const [isPlaying, setIsPlaying] = useState(true);
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsPlaying(isWeddingSongPlaying());
  }, []);

  const toggleSound = () => {
    const song = getWeddingSong();
    if (isPlaying) {
      song.pause();
      setIsPlaying(false);
    } else {
      playWeddingSong();
      setIsPlaying(true);
    }
  };

  return (
    <div className="fixed bottom-6 left-6 z-50 flex items-center gap-3">
      {/* Track info popup */}
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -10 }}
            className="hidden sm:flex items-center gap-2 rounded-full border border-[#d4af37]/40 bg-[#051e16]/90 px-3.5 py-1.5 text-[11px] font-semibold text-[#f7e7a9] backdrop-blur-md shadow-lg"
          >
            <Music className="h-3.5 w-3.5 text-[#ffd700]" />
            <span>ليلة عمرنا - موسيقى الحفل</span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Luxury Music Button */}
      <motion.button
        onClick={toggleSound}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.94 }}
        aria-label={isPlaying ? "كتم الموسيقى" : "تشغيل الموسيقى"}
        className="gold-glow relative flex h-13 w-13 items-center justify-center rounded-full border border-[#d4af37] bg-gradient-to-br from-[#0b3829] to-[#041a13] text-[#f7e7a9] shadow-xl"
      >
        {/* Equalizer animation bars inside button */}
        {isPlaying ? (
          <div className="flex items-end gap-[3px] h-4">
            <span className="w-[3px] bg-[#ffd700] rounded-full animate-[equalizer_0.8s_ease-in-out_infinite] h-3" />
            <span className="w-[3px] bg-[#ffd700] rounded-full animate-[equalizer_1.1s_ease-in-out_infinite] h-4" />
            <span className="w-[3px] bg-[#ffd700] rounded-full animate-[equalizer_0.7s_ease-in-out_infinite] h-2" />
          </div>
        ) : (
          <VolumeX className="h-5 w-5 text-[#f7e7a9]/70" />
        )}

        {/* Pulse ring when playing */}
        {isPlaying && (
          <span className="absolute -inset-1 rounded-full border border-[#d4af37]/40 animate-ping opacity-25 pointer-events-none" />
        )}
      </motion.button>
    </div>
  );
}
