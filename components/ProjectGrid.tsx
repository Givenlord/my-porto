"use client";

import ApiStatus from "@/components/ApiStatus";
import ProjectCard from "@/components/ProjectCard";
import { parseProjects } from "@/lib/api";
import { useApiData } from "@/lib/useApiData";
import type { Project } from "@/types";

type Props = {
  // Data lokal dari data/projects.ts, dipakai kalau API tidak bisa dihubungi
  fallback: Project[];
  featuredOnly?: boolean;
  className?: string;
};

export default function ProjectGrid({ fallback, featuredOnly = false, className = "" }: Props) {
  const { data, source } = useApiData("/projects", fallback, parseProjects);
  const shown = featuredOnly ? data.filter((project) => project.featured) : data;

  return (
    <div className={`flex flex-col gap-3 ${className}`}>
      <ApiStatus source={source} />
      <div className="grid gap-4 sm:grid-cols-2">
        {shown.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </div>
  );
}
