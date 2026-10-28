import type { Project, Skill } from "@/types";

// Alamat API (Part C). Bisa diganti lewat NEXT_PUBLIC_API_URL di .env.local
export const API_URL = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:4000";

// API memakai "id", website memakai "slug". Isinya sama.
// Field yang dipakai komponen dicek dulu supaya data aneh tidak membuat halaman crash.
export function parseProject(item: unknown): Project | null {
  if (typeof item !== "object" || item === null) return null;
  const { id, ...rest } = item as Record<string, unknown>;
  if (typeof id !== "string" || typeof rest.title !== "string" || !Array.isArray(rest.tech)) return null;
  return { ...(rest as Omit<Project, "slug">), slug: id };
}

export function parseProjects(json: unknown): Project[] | null {
  if (!Array.isArray(json)) return null;
  return json.map(parseProject).filter((project): project is Project => project !== null);
}

export function parseSkills(json: unknown): Skill[] | null {
  if (!Array.isArray(json)) return null;
  return json.filter(
    (skill): skill is Skill => typeof skill?.name === "string" && typeof skill?.category === "string"
  );
}
