import type { DataSource } from "@/lib/useApiData";

const TEXT: Record<DataSource, string> = {
  loading: "Loading data from the API…",
  api: "Live data from the API",
  fallback: "The API is unreachable right now, so this shows saved data.",
};

const DOT: Record<DataSource, string> = {
  loading: "bg-muted",
  api: "bg-accent",
  fallback: "bg-amber-500",
};

// Keterangan kecil dari mana data di halaman berasal
export default function ApiStatus({ source }: { source: DataSource }) {
  return (
    <p role="status" className="flex items-center gap-2 font-mono text-xs text-muted">
      <span aria-hidden="true" className={`h-2 w-2 shrink-0 rounded-full ${DOT[source]}`} />
      {TEXT[source]}
    </p>
  );
}
