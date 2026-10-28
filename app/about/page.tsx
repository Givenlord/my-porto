import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";
import { profile } from "@/data/profile";
import { skillCategories, skills } from "@/data/skills";

export const metadata: Metadata = {
  title: "About",
};

export default function AboutPage() {
  return (
    <div className="flex flex-col gap-14">
      <section className="flex animate-fade-up flex-col gap-10">
        <div className="flex flex-col gap-4">
          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">About me</h1>
          <p className="max-w-2xl text-lg leading-relaxed sm:text-xl">{profile.aboutLead}</p>
        </div>

        {/* Label di kiri, cerita di kanan; di HP labelnya pindah ke atas */}
        <dl className="divide-y divide-border border-y border-border">
          {profile.about.map((block) => (
            <div key={block.label} className="grid gap-2 py-6 sm:grid-cols-[13rem_1fr] sm:gap-8">
              <dt className="font-mono text-sm text-accent sm:pt-0.5">{block.label}</dt>
              <dd className="max-w-2xl leading-relaxed text-muted">{block.text}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="flex animate-fade-up flex-col gap-6 [animation-delay:150ms]">
        <SectionHeading index="01" title="Skills" />
        <div className="grid gap-4 sm:grid-cols-3">
          {skillCategories.map((category) => (
            <div key={category} className="rounded-xl border border-border bg-card p-5">
              <h3 className="mb-3 font-semibold">{category}</h3>
              <ul className="flex flex-col gap-1.5 text-sm text-muted">
                {skills
                  .filter((skill) => skill.category === category)
                  .map((skill) => (
                    <li key={skill.name}>{skill.name}</li>
                  ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
