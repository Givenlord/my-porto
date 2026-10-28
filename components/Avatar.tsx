import Image from "next/image";
import { profile } from "@/data/profile";

function getInitials(name: string) {
  return name
    .split(" ")
    .map((word) => word[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

// Foto profil dengan bingkai offset, fallback ke inisial kalau belum ada foto
export default function Avatar({ className = "" }: { className?: string }) {
  return (
    <div className={`relative aspect-square ${className}`}>
      <div aria-hidden="true" className="absolute inset-0 translate-x-3 translate-y-3 rounded-2xl border-2 border-accent" />
      <div className="relative h-full overflow-hidden rounded-2xl border border-border bg-card">
        {profile.photo ? (
          <Image
            src={profile.photo}
            alt={`Photo of ${profile.name}`}
            fill
            sizes="(min-width: 640px) 256px, 144px"
            loading="eager"
            fetchPriority="high"
            // foto portrait, geser crop ke atas biar wajah ga kepotong
            className="object-cover object-[center_40%]"
          />
        ) : (
          <div className="bg-grid flex h-full items-center justify-center font-mono text-5xl font-bold text-accent sm:text-7xl">
            {getInitials(profile.name)}
          </div>
        )}
      </div>
    </div>
  );
}
