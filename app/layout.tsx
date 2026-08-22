import type { Metadata } from "next";
import { Noto_Sans } from "next/font/google";
import "./globals.css";

// Variable font, so no explicit `weight` list — the full 100–900 axis ships.
const notoSans = Noto_Sans({
  variable: "--font-noto-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Deep-ICD",
  description:
    "A research project using AI to improve ICD eligibility screening through ECG analysis.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${notoSans.variable} antialiased`}>
      <body>{children}</body>
    </html>
  );
}
