import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import localFont from "next/font/local";

const redaction10 = localFont({
  src: [{ path: "./fonts/redaction/Redaction_10-Regular.woff2", weight: "100", style: "normal" }],
  variable: "--font-redaction-10",
  display: "swap",
});

const redaction20 = localFont({
  src: [{ path: "./fonts/redaction/Redaction_20-Regular.woff2", weight: "20", style: "normal" }],
  variable: "--font-redaction-20",
  display: "swap",
});


const redaction35 = localFont({
  src: [{ path: "./fonts/redaction/Redaction_35-Regular.woff2", weight: "35", style: "normal" }],
  variable: "--font-redaction-35",
  display: "swap",
});

const redaction50 = localFont({
  src: [{ path: "./fonts/redaction/Redaction_50-Regular.woff2", weight: "50", style: "normal" }],
  variable: "--font-redaction-50",
  display: "swap",
});

const redaction70 = localFont({
  src: [{ path: "./fonts/redaction/Redaction_70-Regular.woff2", weight: "70", style: "normal" }],
  variable: "--font-redaction-70",
  display: "swap",
});

const redaction100 = localFont({
  src: [{ path: "./fonts/redaction/Redaction_100-Regular.woff2", weight: "100", style: "normal" }],
  variable: "--font-redaction-100",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "reKindle",
  description: "Design",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${redaction10.variable} ${redaction20.variable} ${redaction35.variable} ${redaction50.variable} ${redaction70.variable} ${redaction100.variable}`}>
      <body>{children}</body>
    </html>
  );
}
