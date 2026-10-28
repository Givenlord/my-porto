# My Portfolio

Personal portfolio website of Given Lord, built with Next.js (App Router), React and TypeScript.

**Live website:** https://givenlord.vercel.app/

## Features

- 4 pages: Home, About, Projects, Contact
- A detail page for every project at `/projects/[slug]`
- Typed project and skill data, kept separate from the components
- Responsive layout for phones and laptops
- Dark mode toggle and simple animations

## Data from the API

The Home, Projects, project detail and About pages load their projects and skills from the Part C API (see [`../api`](../api)). If the API cannot be reached, the pages show the local data from `data/` with a short note, so the site never breaks. This is also what happens on the deployed Vercel site.

The API address defaults to `http://localhost:4000` and can be changed with `NEXT_PUBLIC_API_URL` (see `.env.example`).

## Project structure

```
app/          Pages (each folder with a page.tsx is a route)
components/   Reusable UI pieces (Header, Footer, ProjectCard, ...)
lib/          Fetching data from the API, with local fallback
data/         Website content: profile, projects, skills, navigation
types/        TypeScript types (Project, Skill, Profile)
```


