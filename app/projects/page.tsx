import type { Metadata } from "next";
import ProjectGrid from "@/components/ProjectGrid";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Projects",
};

export default function ProjectsPage() {
  return (
    <div className="flex flex-col gap-8">
      <section className="flex animate-fade-up flex-col gap-3">
        <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">Projects</h1>
        <p className="max-w-2xl text-muted">Things I have built while learning. Click a project to see the details.</p>
      </section>
      <ProjectGrid fallback={projects} className="animate-fade-up [animation-delay:150ms]" />
    </div>
  );
}
