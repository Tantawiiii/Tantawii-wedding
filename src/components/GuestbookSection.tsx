"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquareHeart, Heart, Sparkles, Send, User } from "lucide-react";

interface WishMessage {
  id: string;
  name: string;
  relation?: string;
  message: string;
  date: string;
  likes: number;
}

const initialWishes: WishMessage[] = [
  {
    id: "1",
    name: "عائلة العريس والعروس",
    relation: "الأهل الكرام",
    message: "بارك الله لكما وبارك عليكما وجمع بينكما في خير وسعادة وسرور دائم.. قرة أعيننا وأغلى ما في قلوبنا.",
    date: "أمس",
    likes: 24,
  },
  {
    id: "2",
    name: "د. محمود والأسرة",
    relation: "صديق العائلة",
    message: "ألف مليون مبروك لأخي وحبيبي أحمد وللعروس المصونة ندى.. جعل الله بيتكما عامراً بالمودة والسكينة والبركة.",
    date: "اليوم",
    likes: 18,
  },
  {
    id: "3",
    name: "سارة ومريم",
    relation: "صديقات العروس",
    message: "أجمل وأرق عروسة في الكون! ربنا يسعد قلبك الطيب ويتمم لكم على ألف خير يا ندى يا قمر.",
    date: "اليوم",
    likes: 31,
  },
];

export default function GuestbookSection() {
  const [wishes, setWishes] = useState<WishMessage[]>(initialWishes);
  const [newName, setNewName] = useState("");
  const [newMessage, setNewMessage] = useState("");
  const [likedIds, setLikedIds] = useState<Set<string>>(new Set());

  useEffect(() => {
    try {
      const stored = localStorage.getItem("wedding_guestbook_messages");
      if (stored) {
        const parsed = JSON.parse(stored);
        if (Array.isArray(parsed) && parsed.length > 0) {
          // eslint-disable-next-line react-hooks/set-state-in-effect
          setWishes([...parsed, ...initialWishes]);
        }
      }
    } catch {
      // ignore
    }
  }, []);

  const handleLike = (id: string) => {
    if (likedIds.has(id)) return;
    setLikedIds((prev) => new Set(prev).add(id));
    setWishes((prev) =>
      prev.map((w) => (w.id === id ? { ...w, likes: w.likes + 1 } : w))
    );
  };

  const handleAddWish = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newName.trim() || !newMessage.trim()) return;

    const created: WishMessage = {
      id: Date.now().toString(),
      name: newName.trim(),
      relation: "ضيف عزيز",
      message: newMessage.trim(),
      date: "الآن",
      likes: 1,
    };

    const updated = [created, ...wishes];
    setWishes(updated);
    setLikedIds((prev) => new Set(prev).add(created.id));

    try {
      const userSaved = updated.filter((w) => !initialWishes.some((init) => init.id === w.id));
      localStorage.setItem("wedding_guestbook_messages", JSON.stringify(userSaved));
    } catch {
      // ignore
    }

    setNewName("");
    setNewMessage("");
  };

  return (
    <section id="guestbook-section" className="relative py-20 px-4">
      <div className="mx-auto max-w-3xl">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center gap-2 mb-12">
          <div className="flex items-center gap-2 text-xs font-bold tracking-widest text-[#ab7f17]">
            <MessageSquareHeart className="h-4 w-4 text-[#cba135]" />
            <span>سجل التهاني والمباركات</span>
            <Sparkles className="h-4 w-4 text-[#cba135]" />
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#0b3829]">
            كلماتكم تسعد قلوبنا
          </h2>
          <p className="font-ui text-xs sm:text-sm text-[#5e6d64] max-w-md">
            شاركوا العروسين أحمد &amp; ندى بأرق كلمات المحبة والدعوات الصالحة
          </p>
        </div>

        {/* Add Wish Form */}
        <div className="luxury-card mb-10 overflow-hidden rounded-3xl p-6 sm:p-8">
          <form onSubmit={handleAddWish} className="flex flex-col gap-4 text-right">
            <h3 className="font-display text-lg font-bold text-[#0b3829]">
              اترك تهنئة للعروسين ✍️
            </h3>

            <div className="flex flex-col sm:flex-row gap-3">
              <div className="relative flex-1">
                <input
                  type="text"
                  required
                  value={newName}
                  onChange={(e) => setNewName(e.target.value)}
                  placeholder="اسمك الكريم..."
                  className="w-full rounded-xl border border-[#d4af37]/40 bg-[#fbf9f5] px-4 py-2.5 text-xs sm:text-sm text-[#1b2820] placeholder:text-[#5e6d64]/60 focus:border-[#d4af37] focus:bg-white focus:outline-none"
                />
              </div>
            </div>

            <div className="relative">
              <textarea
                required
                rows={2}
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                placeholder="اكتب دعاءك وتهنئتك لأحمد وندى..."
                className="w-full rounded-xl border border-[#d4af37]/40 bg-[#fbf9f5] px-4 py-2.5 text-xs sm:text-sm text-[#1b2820] placeholder:text-[#5e6d64]/60 focus:border-[#d4af37] focus:bg-white focus:outline-none resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={!newName.trim() || !newMessage.trim()}
              className="self-end flex items-center gap-1.5 rounded-xl border border-[#d4af37] bg-gradient-to-r from-[#0b3829] to-[#051e16] px-5 py-2.5 text-xs sm:text-sm font-bold text-[#f7e7a9] shadow-sm hover:scale-[1.02] active:scale-95 disabled:opacity-40 disabled:cursor-not-allowed transition-transform"
            >
              <Send className="h-3.5 w-3.5 text-[#ffd700]" />
              <span>نشر التهنئة</span>
            </button>
          </form>
        </div>

        {/* Wishes Cards Feed */}
        <div className="flex flex-col gap-4">
          <AnimatePresence initial={false}>
            {wishes.map((w) => {
              const isLiked = likedIds.has(w.id);
              return (
                <motion.div
                  key={w.id}
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  className="luxury-card relative overflow-hidden rounded-2xl p-5 text-right transition-all hover:border-[#d4af37]/60"
                >
                  <div className="flex items-start justify-between gap-4">
                    {/* Like heart button */}
                    <button
                      onClick={() => handleLike(w.id)}
                      className={`flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-bold transition-all ${
                        isLiked
                          ? "border-[#7d1128] bg-[#7d1128]/10 text-[#7d1128]"
                          : "border-[#d4af37]/30 bg-[#faf6ef] text-[#5e6d64] hover:text-[#7d1128]"
                      }`}
                    >
                      <Heart
                        className={`h-3.5 w-3.5 ${
                          isLiked ? "fill-[#7d1128] text-[#7d1128]" : ""
                        }`}
                      />
                      <span>{w.likes}</span>
                    </button>

                    {/* Author & date */}
                    <div className="flex items-center gap-2">
                      <div className="text-right">
                        <span className="font-display text-base font-bold text-[#0b3829] block">
                          {w.name}
                        </span>
                        {w.relation && (
                          <span className="font-ui text-[10px] text-[#ab7f17]">
                            {w.relation} · {w.date}
                          </span>
                        )}
                      </div>
                      <div className="flex h-9 w-9 items-center justify-center rounded-full border border-[#d4af37]/40 bg-[#fbf9f5] text-[#ab7f17]">
                        <User className="h-4 w-4" />
                      </div>
                    </div>
                  </div>

                  {/* Message body */}
                  <p className="font-body mt-3 text-base sm:text-lg text-[#1b2820]/90 leading-relaxed">
                    «{w.message}»
                  </p>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
