import type { Metadata } from "next";
import ApiProjectDetail from "@/components/ApiProjectDetail";
import ProjectDetail from "@/components/ProjectDetail";
import { getProjectBySlug, projects } from "@/data/projects";

// Bikin halaman detail untuk tiap project
export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: PageProps<"/projects/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  return project ? { title: project.title, description: project.summary } : {};
}

export default async function ProjectDetailPage({ params }: PageProps<"/projects/[slug]">) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  // Tidak ada di data lokal: mungkin project baru di API, jadi ambil dari browser
  if (!project) {
    return <ApiProjectDetail slug={slug} />;
  }

  return <ProjectDetail project={project} />;
}
