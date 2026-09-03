import type { Metadata } from "next";
import { Amiri, Aref_Ruqaa, Cairo, Reem_Kufi } from "next/font/google";
import "./globals.css";

const amiri = Amiri({
  variable: "--font-amiri",
  subsets: ["arabic"],
  weight: ["400", "700"],
});

const arefRuqaa = Aref_Ruqaa({
  variable: "--font-aref",
  subsets: ["arabic"],
  weight: ["400", "700"],
});

const reemKufi = Reem_Kufi({
  variable: "--font-reem",
  subsets: ["arabic"],
  weight: ["400", "500", "700"],
});

const cairo = Cairo({
  variable: "--font-cairo",
  subsets: ["arabic"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "أحمد و ندى | دعوة زفاف",
  description: "يتشرف أحمد وندى بدعوتكم للاحتفال معهما بمناسبة زواجهما",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="ar"
      dir="rtl"
      className={`${amiri.variable} ${arefRuqaa.variable} ${reemKufi.variable} ${cairo.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col overflow-x-hidden">{children}</body>
    </html>
  );
}
