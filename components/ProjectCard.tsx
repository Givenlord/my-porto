import Link from "next/link";
import ProjectCover from "@/components/ProjectCover";
import TechList from "@/components/TechList";
import type { Project } from "@/types";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group flex h-full flex-col gap-4 rounded-xl border border-border bg-card p-4 transition hover:-translate-y-1 hover:border-accent hover:shadow-lg"
    >
      <ProjectCover project={project} sizes="(min-width: 640px) 400px, 100vw" />
      <div className="flex items-baseline justify-between gap-2">
        <h3 className="font-semibold group-hover:text-accent">{project.title}</h3>
        <span className="font-mono text-xs text-muted">{project.year}</span>
      </div>
      <p className="flex-1 text-sm text-muted">{project.summary}</p>
      <TechList tech={project.tech} />
    </Link>
  );
}
