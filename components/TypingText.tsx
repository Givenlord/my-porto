"use client";

import { useEffect, useState } from "react";

type Props = {
  text: string;
  className?: string;
};

// Efek mesin ketik: ketik -> diam sebentar -> hapus -> ulang lagi
export default function TypingText({ text, className }: Props) {
  const [length, setLength] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    // Hormati setting "kurangi animasi", langsung tampilkan teks penuh
    const reduceMotion = matchMedia("(prefers-reduced-motion: reduce)").matches;

    let delay = deleting ? 50 : 100;
    if (!deleting && length === text.length) delay = 2000;
    if (deleting && length === 0) delay = 500;
    if (reduceMotion) delay = 0;

    const timer = setTimeout(() => {
      if (reduceMotion) {
        setLength(text.length);
      } else if (!deleting && length === text.length) {
        setDeleting(true);
      } else if (deleting && length === 0) {
        setDeleting(false);
      } else {
        setLength(length + (deleting ? -1 : 1));
      }
    }, delay);

    return () => clearTimeout(timer);
  }, [length, deleting, text]);

  // Kayak terminal: kursor nyala terus pas ngetik/hapus, baru kedip pas diam
  const idle = (!deleting && length === text.length) || (deleting && length === 0);

  return (
    <p className={className} aria-label={`> ${text}`}>
      <span aria-hidden="true">
        &gt; {text.slice(0, length)}
        <span className={`ml-0.5 inline-block w-[1ch] bg-current ${idle ? "animate-blink" : ""}`}>&nbsp;</span>
      </span>
    </p>
  );
}
