"use client";

import ApiStatus from "@/components/ApiStatus";
import { skillCategories } from "@/data/skills";
import { parseSkills } from "@/lib/api";
import { useApiData } from "@/lib/useApiData";
import type { Skill } from "@/types";

// Data lokal dari data/skills.ts dipakai kalau API tidak bisa dihubungi
export default function SkillGrid({ fallback }: { fallback: Skill[] }) {
  const { data, source } = useApiData("/skills", fallback, parseSkills);

  return (
    <div className="flex flex-col gap-3">
      <ApiStatus source={source} />
      <div className="grid gap-4 sm:grid-cols-3">
        {skillCategories.map((category) => (
          <div key={category} className="rounded-xl border border-border bg-card p-5">
            <h3 className="mb-3 font-semibold">{category}</h3>
            <ul className="flex flex-col gap-1.5 text-sm text-muted">
              {data
                .filter((skill) => skill.category === category)
                .map((skill) => (
                  <li key={skill.name}>{skill.name}</li>
                ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
