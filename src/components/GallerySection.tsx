"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Heart } from "lucide-react";

const photos = [
  {
    src: "/images/wedding-session.jpg",
    title: "ضحكة من القلب",
    subtitle: "لقطة من جلسة التصوير في الهواء الطلق",
  },
  {
    src: "/images/wedding-rings.jpg",
    title: "دبلة العمر",
    subtitle: "رباط المحبة والميثاق الغليظ",
  },
  {
    src: "/images/wedding-couple.jpg",
    title: "معاً نبدأ الحكاية",
    subtitle: "أحمد & ندى يشاركانكم فرحة العمر",
  },
];

export default function GallerySection() {
  return (
    <section id="gallery-section" className="relative py-16 px-4">
      <div className="mx-auto max-w-5xl">
        {/* Header - Simple and warm */}
        <div className="flex flex-col items-center text-center gap-2 mb-10">

          <p className="font-ui text-xs sm:text-sm text-[#5e6d64] max-w-md">
            ذكريات تجمعنا وفرحة تكتمل بحضوركم الغالي
          </p>
        </div>

        {/* Photo Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {photos.map((photo, index) => (
            <motion.div
              key={photo.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
              className="luxury-card group relative overflow-hidden rounded-2xl p-2.5 transition-transform hover:-translate-y-1.5"
            >
              {/* Image Frame */}
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl border border-[#d4af37]/30 bg-[#fbf9f5]">
                <Image
                  src={photo.src}
                  alt={photo.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#051e16]/75 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex items-end p-4">
                  <span className="font-ui text-xs font-semibold text-[#f7e7a9] flex items-center gap-1">
                    <Heart className="h-3 w-3 fill-[#ffd700] text-[#ffd700]" />
                    <span>أحمد &amp; ندى</span>
                  </span>
                </div>
              </div>

              {/* Caption */}
              <div className="p-3 text-right">
                <h3 className="font-display text-lg font-bold text-[#0b3829]">
                  {photo.title}
                </h3>
                <p className="font-ui mt-0.5 text-xs text-[#5e6d64]">
                  {photo.subtitle}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
