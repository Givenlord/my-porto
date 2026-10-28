"use client";

import { useEffect, useState } from "react";
import { API_URL } from "@/lib/api";

// loading = masih menunggu API, api = data dari API, fallback = API gagal, pakai data lokal
export type DataSource = "loading" | "api" | "fallback";

// Batas waktu menunggu API sebelum menyerah dan memakai data lokal
const TIMEOUT_MS = 3000;

// Ambil data dari API di browser. Selama menunggu atau kalau API gagal,
// yang ditampilkan adalah data lokal (fallback), jadi halaman tidak pernah kosong atau crash.
export function useApiData<T>(path: string, fallback: T, parse: (json: unknown) => T | null) {
  const [state, setState] = useState<{ data: T; source: DataSource }>({ data: fallback, source: "loading" });

  useEffect(() => {
    // cancelled = effect sudah dibersihkan (pindah halaman / StrictMode), abaikan hasilnya
    let cancelled = false;
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), TIMEOUT_MS);

    fetch(`${API_URL}${path}`, { signal: controller.signal })
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return res.json();
      })
      .then((json) => {
        const data = parse(json);
        if (data === null) throw new Error("Unexpected data from API");
        if (!cancelled) setState({ data, source: "api" });
      })
      .catch(() => {
        // API mati, timeout, diblokir CORS, atau datanya aneh
        if (!cancelled) setState({ data: fallback, source: "fallback" });
      })
      .finally(() => clearTimeout(timer));

    return () => {
      cancelled = true;
      clearTimeout(timer);
      controller.abort();
    };
  }, [path, fallback, parse]);

  return state;
}
