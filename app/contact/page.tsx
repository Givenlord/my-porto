import type { Metadata } from "next";
import CopyButton from "@/components/CopyButton";
import SocialIcon from "@/components/SocialIcon";
import { profile } from "@/data/profile";

export const metadata: Metadata = {
  title: "Contact",
};

function displayHref(href: string) {
  return href.replace(/^mailto:|^https:\/\/(www\.)?/, "").replace(/\/$/, "");
}

export default function ContactPage() {
  const email = profile.socials.find((social) => social.icon === "email");
  const others = profile.socials.filter((social) => social.icon !== "email");

  return (
    <div className="flex flex-col gap-10">
      <section className="flex animate-fade-up flex-col gap-3">
        <p className="font-mono text-sm text-accent">&gt; ping {profile.name.toLowerCase().replace(/\s+/g, "")}</p>
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Let&apos;s talk.</h1>
        <p className="max-w-2xl leading-relaxed text-muted">
          Want to collaborate, ask about a project, or just say hi? My inbox is always open.
        </p>
      </section>

      {email && (
        <section className="relative isolate flex animate-fade-up flex-col gap-6 overflow-hidden rounded-2xl border border-border bg-card p-6 [animation-delay:150ms] sm:flex-row sm:items-center sm:justify-between sm:p-8">
          <div
            aria-hidden="true"
            className="bg-grid absolute inset-0 -z-10 [mask-image:linear-gradient(to_left,black,transparent_70%)]"
          />
          <div className="flex items-center gap-4">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent-soft text-accent">
              <SocialIcon name="email" className="h-6 w-6" />
            </span>
            <div className="flex min-w-0 flex-col">
              <h2 className="font-semibold">Email me</h2>
              <span className="break-all font-mono text-sm text-muted">{displayHref(email.href)}</span>
            </div>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <a
              href={email.href}
              className="rounded-full bg-accent px-5 py-2.5 text-center text-sm font-medium text-background transition hover:opacity-90"
            >
              Send email
            </a>
            <CopyButton text={displayHref(email.href)} />
          </div>
        </section>
      )}

      <ul className="grid animate-fade-up gap-4 [animation-delay:300ms] sm:grid-cols-2">
        {others.map((social) => (
          // min-w-0 biar URL panjang kepotong (truncate), bukan bikin halaman melebar di HP
          <li key={social.label} className="min-w-0">
            <a
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 rounded-xl border border-border bg-card p-5 transition hover:-translate-y-1 hover:border-accent"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent-soft text-accent">
                <SocialIcon name={social.icon} />
              </span>
              <span className="flex min-w-0 flex-1 flex-col">
                <span className="font-semibold">{social.label}</span>
                <span className="truncate font-mono text-xs text-muted">{displayHref(social.href)}</span>
              </span>
              <svg
                className="h-5 w-5 shrink-0 text-muted transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M7 7h10v10M7 17 17 7" />
              </svg>
            </a>
          </li>
        ))}
      </ul>

      <p className="flex animate-fade-up items-center gap-2 text-sm text-muted [animation-delay:450ms]">
        <svg className="h-4 w-4 text-accent" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
          <circle cx="12" cy="10" r="3" />
        </svg>
        Based in {profile.location}
      </p>
    </div>
  );
}
