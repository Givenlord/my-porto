import Link from "next/link";
import ProjectCover from "@/components/ProjectCover";
import ProjectGallery from "@/components/ProjectGallery";
import TechList from "@/components/TechList";
import type { Project } from "@/types";

// Isi halaman detail project. Dipakai untuk data lokal maupun data dari API.
export default function ProjectDetail({ project }: { project: Project }) {
  return (
    <article className="flex animate-fade-up flex-col gap-6">
      <Link href="/projects" className="text-sm text-accent hover:underline">
        ← Back to projects
      </Link>
      <header className="flex flex-col gap-2">
        <p className="font-mono text-sm text-muted">{project.year}</p>
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">{project.title}</h1>
        <p className="text-lg text-muted">{project.summary}</p>
      </header>
      <ProjectCover project={project} sizes="(min-width: 896px) 832px, 100vw" />
      <TechList tech={project.tech} />
      <p className="max-w-2xl leading-relaxed">{project.description}</p>
      {project.gallery && project.gallery.length > 0 && <ProjectGallery images={project.gallery} />}
      {(project.repoUrl || project.liveUrl) && (
        <div className="flex flex-col gap-3 sm:flex-row">
          {project.repoUrl && (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-border px-5 py-2.5 text-center text-sm font-medium transition hover:border-accent hover:text-accent"
            >
              View source code
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-accent px-5 py-2.5 text-center text-sm font-medium text-background transition hover:opacity-90"
            >
              Open live demo
            </a>
          )}
        </div>
      )}
    </article>
  );
}
