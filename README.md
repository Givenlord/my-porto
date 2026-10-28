# My Portfolio

Personal portfolio website of Given Lord, built with Next.js (App Router), React and TypeScript.

**Live website:** https://givenlord.vercel.app/

## Features

- 4 pages: Home, About, Projects, Contact
- A detail page for every project at `/projects/[slug]`
- Typed project and skill data, kept separate from the components
- Responsive layout for phones and laptops
- Dark mode toggle and simple animations

## Project structure

```
app/          Pages (each folder with a page.tsx is a route)
components/   Reusable UI pieces (Header, Footer, ProjectCard, ...)
data/         Website content: profile, projects, skills, navigation
types/        TypeScript types (Project, Skill, Profile)
```


