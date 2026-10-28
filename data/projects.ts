import type { Project } from "@/types";

// slug dipakai buat URL /projects/<slug>, jadi harus unik
export const projects: Project[] = [
  {
    slug: "portfolio-website",
    title: "Portfolio Website",
    summary: "The website you are looking at right now.",
    description:
      "A personal portfolio built with the Next.js App Router, React and TypeScript in strict mode. It has typed project data kept separate from the components, a dynamic detail page for every project, dark mode, and a responsive layout for phones and laptops. It is deployed on Vercel.",
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    year: 2026,
    repoUrl: "https://github.com/Givenlord/my-porto",
    liveUrl: "https://my-porto-sepia-gamma.vercel.app",
    featured: true,
  },
  {
    slug: "robotics-basic-training",
    title: "KPP Pelatdas Robotik",
    summary: "My final task for a robotics basic training program: robot pathfinding with BFS.",
    description:
      "My final task (KPP) for a robotics basic training program. The program reads a grid map and uses Breadth-First Search (BFS) to find the shortest path for a robot. At every step it checks the four cells around it (up, down, left, right) and avoids obstacles marked as walls. The mission has two stages: from the start point to a flag, then from the flag back to the base. The program prints each move the robot takes and the total number of moves, or reports that no path is available when obstacles block the way.",
    tech: ["C++"],
    year: 2026,
    repoUrl: "https://github.com/Givenlord/KPP-Robotic",
    featured: true,
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}
