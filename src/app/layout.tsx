import type { Metadata } from "next";
import { Amiri, Aref_Ruqaa, Cairo, Alexandria } from "next/font/google";
import "./globals.css";

const amiri = Amiri({
  variable: "--font-amiri",
  subsets: ["arabic"],
  weight: ["400", "700"],
  display: "swap",
});

const arefRuqaa = Aref_Ruqaa({
  variable: "--font-aref",
  subsets: ["arabic"],
  weight: ["400", "700"],
  display: "swap",
});

const cairo = Cairo({
  variable: "--font-cairo",
  subsets: ["arabic"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const alexandria = Alexandria({
  variable: "--font-alexandria",
  subsets: ["arabic"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "أحمد & ندى | دعوة زفاف ملكية",
  description: "يتشرف أحمد وندى بدعوتكم لمشاركتهما فرحة العمر في ليلة من ليالي ألف ليلة وليلة",
  openGraph: {
    title: "أحمد & ندى | دعوة زفاف ملكية",
    description: "يتشرف أحمد وندى بدعوتكم لمشاركتهما فرحة العمر في ليلة من ليالي ألف ليلة وليلة",
    type: "website",
    locale: "ar_EG",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="ar"
      dir="rtl"
      className={`${amiri.variable} ${arefRuqaa.variable} ${cairo.variable} ${alexandria.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col overflow-x-hidden selection:bg-[#cba135]/25 selection:text-[#0b3829]">
        {children}
      </body>
    </html>
  );
}
