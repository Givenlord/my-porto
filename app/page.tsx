import Link from "next/link";
import Avatar from "@/components/Avatar";
import ProjectGrid from "@/components/ProjectGrid";
import SectionHeading from "@/components/SectionHeading";
import TypingText from "@/components/TypingText";
import { profile } from "@/data/profile";
import { projects } from "@/data/projects";

export default function Home() {
  return (
    <div className="flex flex-col gap-24">
      <section className="relative isolate grid animate-fade-up items-center gap-10 pt-6 sm:grid-cols-[1fr_auto] sm:pt-12">
        {/* Latar grid, terinspirasi peta BFS di project robotik */}
        <div
          aria-hidden="true"
          className="bg-grid absolute -inset-x-4 -top-16 -bottom-8 -z-10 [mask-image:radial-gradient(ellipse_at_70%_30%,black_10%,transparent_70%)] sm:-inset-x-6"
        />
        <Avatar className="w-36 sm:order-2 sm:w-64" />
        <div className="flex flex-col gap-6 sm:order-1">
          <TypingText text="hello, world. I'm" className="font-mono text-sm text-accent" />
          <h1 className="text-5xl font-bold tracking-tight sm:text-7xl">{profile.name}</h1>
          <p className="text-xl text-muted sm:text-2xl">{profile.role}</p>
          <p className="max-w-xl leading-relaxed text-muted">{profile.intro}</p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link
              href="/projects"
              className="rounded-full bg-accent px-6 py-3 text-center font-medium text-background transition hover:opacity-90"
            >
              See my projects
            </Link>
            <Link
              href="/contact"
              className="rounded-full border border-border bg-background px-6 py-3 text-center font-medium transition hover:border-accent hover:text-accent"
            >
              Contact me
            </Link>
          </div>
        </div>
      </section>

      <section className="flex animate-fade-up flex-col gap-6 [animation-delay:150ms]">
        <SectionHeading index="01" title="Currently" />
        <ul className="grid gap-4 sm:grid-cols-3">
          {profile.focus.map((item) => (
            <li key={item.title} className="flex flex-col gap-2 rounded-xl border border-border bg-card p-5">
              <h3 className="font-semibold">{item.title}</h3>
              <p className="text-sm leading-relaxed text-muted">{item.description}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="flex animate-fade-up flex-col gap-6 [animation-delay:300ms]">
        <div className="flex items-baseline justify-between">
          <SectionHeading index="02" title="Featured projects" />
          <Link href="/projects" className="text-sm text-accent hover:underline">
            View all →
          </Link>
        </div>
        <ProjectGrid fallback={projects} featuredOnly />
      </section>
    </div>
  );
}
