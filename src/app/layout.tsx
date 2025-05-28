import "./globals.css";
import type { Metadata } from "next";
import localFont from "next/font/local";

const redaction = localFont({
  src: [
    {
      path: "./fonts/redaction/Redaction-Regular.woff2",
      weight: "400",
      style: "normal",
    },
  ],
  variable: "--font-redaction",
  display: "swap",
});

const redaction10 = localFont({
  src: [
    {
      path: "./fonts/redaction/Redaction_10-Regular.woff2",
      weight: "100",
      style: "normal",
    },
  ],
  variable: "--font-redaction-10",
  display: "swap",
});

const redaction20 = localFont({
  src: [
    {
      path: "./fonts/redaction/Redaction_20-Regular.woff2",
      weight: "20",
      style: "normal",
    },
  ],
  variable: "--font-redaction-20",
  display: "swap",
});

const redaction35 = localFont({
  src: [
    {
      path: "./fonts/redaction/Redaction_35-Regular.woff2",
      weight: "35",
      style: "normal",
    },
  ],
  variable: "--font-redaction-35",
  display: "swap",
});

const redaction50 = localFont({
  src: [
    {
      path: "./fonts/redaction/Redaction_50-Regular.woff2",
      weight: "50",
      style: "normal",
    },
  ],
  variable: "--font-redaction-50",
  display: "swap",
});

const redaction70 = localFont({
  src: [
    {
      path: "./fonts/redaction/Redaction_70-Regular.woff2",
      weight: "70",
      style: "normal",
    },
  ],
  variable: "--font-redaction-70",
  display: "swap",
});

const redaction100 = localFont({
  src: [
    {
      path: "./fonts/redaction/Redaction_100-Regular.woff2",
      weight: "100",
      style: "normal",
    },
  ],
  variable: "--font-redaction-100",
  display: "swap",
});

export const metadata: Metadata = {
  title: "reKindle™ | The Growth Accelerator",
  description: "Designed by reKindle™",
  openGraph: {
    images: [
      {
        url: "/images/opengraph-image.webp",
        width: 1200,
        height: 630,
        alt: "Preview of reKindle",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`overflow-hidden ${redaction.variable} ${redaction10.variable} ${redaction20.variable} ${redaction35.variable} ${redaction50.variable} ${redaction70.variable} ${redaction100.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
