import Image from "next/image";
import type { GalleryImage } from "@/types";

// Screenshot tambahan di halaman detail. object-contain supaya screenshot HP yang tinggi tidak terpotong.
export default function ProjectGallery({ images }: { images: GalleryImage[] }) {
  return (
    <section className="flex flex-col gap-4">
      <h2 className="text-xl font-semibold tracking-tight">Screenshots</h2>
      <div className="grid gap-4 sm:grid-cols-3">
        {images.map((image) => (
          <figure key={image.src} className="flex flex-col gap-2">
            <a
              href={image.src}
              target="_blank"
              rel="noopener noreferrer"
              className="relative block aspect-[3/4] overflow-hidden rounded-lg border border-border bg-background transition hover:border-accent"
            >
              <Image
                src={image.src}
                alt={image.caption}
                fill
                sizes="(min-width: 896px) 272px, (min-width: 640px) 33vw, 100vw"
                className="object-contain"
              />
            </a>
            <figcaption className="text-sm text-muted">{image.caption}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
