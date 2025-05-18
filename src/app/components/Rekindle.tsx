"use client";

import { useEffect, useState } from "react";

const FONT_CLASSES = [
  "font-redaction",
  "font-redaction-10",
  "font-redaction-20",
  "font-redaction-35",
  "font-redaction-50",
  "font-redaction-70",
  "font-redaction-100",
];

export default function Rekindle() {
  const [fontClass, setFontClass] = useState(FONT_CLASSES[0]);

  useEffect(() => {
    let frameId: number;

    const handleMouseMove = (e: MouseEvent) => {
      if (frameId) cancelAnimationFrame(frameId);

      frameId = requestAnimationFrame(() => {
        const { clientX: x, clientY: y } = e;
        const centerX = window.innerWidth / 2;
        const centerY = window.innerHeight / 2;
        const dx = x - centerX;
        const dy = y - centerY;
        const distance = Math.hypot(dx, dy);
        const maxDistance = Math.hypot(centerX, centerY);
        const ratio = distance / maxDistance;
        const section = Math.min(
          FONT_CLASSES.length - 1,
          Math.floor(ratio * FONT_CLASSES.length)
        );

        setFontClass(FONT_CLASSES[section]);
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <h1 className={`relative text-8xl scale-50 sm:scale-100 ${fontClass}`}>
      reKindle <span className="text-lg absolute top-1 -right-3">™</span>
    </h1>
  );
}
