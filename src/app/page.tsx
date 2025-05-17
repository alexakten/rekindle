"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [fontClass, setFontClass] = useState("font-redaction");

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = e.clientX;
      const y = e.clientY;
      const screenWidth = window.innerWidth;
      const screenHeight = window.innerHeight;

      const centerX = screenWidth / 2;
      const centerY = screenHeight / 2;
      const dx = x - centerX;
      const dy = y - centerY;
      const distance = Math.sqrt(dx * dx + dy * dy);
      const maxDistance = Math.sqrt(centerX * centerX + centerY * centerY);
      const ratio = distance / maxDistance;
      const section = Math.min(6, Math.floor(ratio * 7)); // clamp to 0–6

      const classMap = [
        "font-redaction",
        "font-redaction-10",
        "font-redaction-20",
        "font-redaction-35",
        "font-redaction-50",
        "font-redaction-70",
        "font-redaction-100",
      ];

      setFontClass(classMap[section]);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <main className="flex bg-[#fafafa] select-none h-[100svh] w-screen items-center justify-center overflow-hidden">
      <h1 className={`relative text-8xl scale-75 sm:scale-100 ${fontClass}`}>
        reKindle <span className="text-lg absolute top-1 -right-3">™</span>
      </h1>
    </main>
  );
}
