"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import ProjectDetail from "@/components/ProjectDetail";
import { API_URL, parseProject } from "@/lib/api";
import type { Project } from "@/types";

type State =
  | { status: "loading" }
  | { status: "found"; project: Project }
  | { status: "not-found" }
  | { status: "unreachable" };

const MESSAGE = {
  loading: "Loading project from the API…",
  "not-found": "This project does not exist.",
  unreachable: "This project could not be loaded because the API is unreachable right now.",
};

// Untuk project yang tidak ada di data lokal, misalnya yang baru ditambah lewat POST /projects
export default function ApiProjectDetail({ slug }: { slug: string }) {
  const [state, setState] = useState<State>({ status: "loading" });

  useEffect(() => {
    let cancelled = false;
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), 3000);

    fetch(`${API_URL}/projects/${encodeURIComponent(slug)}`, { signal: controller.signal })
      .then(async (res) => {
        if (cancelled) return;
        if (res.status === 404) return setState({ status: "not-found" });
        const project = res.ok ? parseProject(await res.json()) : null;
        if (!cancelled) setState(project ? { status: "found", project } : { status: "unreachable" });
      })
      .catch(() => {
        if (!cancelled) setState({ status: "unreachable" });
      })
      .finally(() => clearTimeout(timer));

    return () => {
      cancelled = true;
      clearTimeout(timer);
      controller.abort();
    };
  }, [slug]);

  if (state.status === "found") return <ProjectDetail project={state.project} />;

  return (
    <div className="flex flex-col items-start gap-4">
      <p role="status" className="text-muted">
        {MESSAGE[state.status]}
      </p>
      <Link href="/projects" className="text-sm text-accent hover:underline">
        ← Back to projects
      </Link>
    </div>
  );
}
