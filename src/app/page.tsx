"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [fontClass, setFontClass] = useState("font-redaction");

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const y = e.clientY;
      const screenHeight = window.innerHeight;
      const section = Math.floor((y / screenHeight) * 7); // 0-6

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
    <main className="flex h-screen w-screen items-center justify-center">
      <h1 className={`relative text-8xl ${fontClass}`}>
        reKindle{" "}
        <span className="text-xs absolute top-1 -right-3">
          TM
        </span>
      </h1>
    </main>
  );
}
