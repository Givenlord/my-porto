"use client";

import { useState } from "react";

// Tombol salin teks, berguna buat yang ga punya aplikasi email di laptop
export default function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(text);
    } catch {
      // navigator.clipboard cuma ada di https/localhost, jadi pas dibuka lewat
      // IP (http://192.168...) pakai cara lama: textarea tersembunyi + execCommand
      const textarea = document.createElement("textarea");
      textarea.value = text;
      textarea.setAttribute("readonly", "");
      textarea.style.position = "fixed";
      textarea.style.opacity = "0";
      document.body.appendChild(textarea);
      textarea.select();
      const ok = document.execCommand("copy");
      textarea.remove();
      if (!ok) return; // clipboard diblok browser, biarkan user salin manual
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <button
      type="button"
      onClick={copy}
      className="rounded-full border border-border bg-background px-5 py-2.5 text-sm font-medium transition hover:border-accent hover:text-accent"
    >
      <span aria-live="polite">{copied ? "Copied!" : "Copy email"}</span>
    </button>
  );
}
