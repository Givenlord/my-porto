import Image from "next/image";
import type { Project } from "@/types";

// Gambar project, fallback ke cover grid + tech utama kalau belum ada screenshot
export default function ProjectCover({ project, sizes }: { project: Project; sizes: string }) {
  return (
    <div className="relative aspect-video overflow-hidden rounded-lg border border-border bg-background">
      {project.image ? (
        <Image src={project.image} alt={`Screenshot of ${project.title}`} fill sizes={sizes} className="object-cover" />
      ) : (
        <div className="bg-grid flex h-full items-center justify-center font-mono text-2xl font-bold text-accent">
          {project.tech[0]}
        </div>
      )}
    </div>
  );
}
