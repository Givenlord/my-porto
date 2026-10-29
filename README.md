# My Portfolio

Website portfolio pribadi Given Lord, dibuat dengan Next.js (App Router), React, dan TypeScript.

**Website:** https://given-lord.vercel.app/

## Fitur

- 4 halaman: Home, About, Projects, Contact
- Halaman detail untuk setiap project di `/projects/[slug]`
- Data project dan skill punya tipe, dan dipisah dari komponen
- Tampilan responsif untuk HP dan laptop
- Tombol dark mode dan animasi sederhana

## Data dari API

Halaman Home, Projects, detail project, dan About mengambil projects dan skills dari API Part C (folder `api` di repo tugas magang). Kalau API tidak bisa dihubungi, halaman menampilkan data lokal dari `data/` disertai catatan singkat, jadi website tidak pernah rusak. Ini juga yang terjadi di website Vercel.

Alamat API bawaannya `http://localhost:4000` dan bisa diganti lewat `NEXT_PUBLIC_API_URL` (lihat `.env.example`).

## Menjalankan

```bash
npm install
npm run dev
```

Lalu buka http://localhost:3000.

## Struktur folder

```
app/          halaman (setiap folder yang punya page.tsx adalah satu route)
components/   bagian UI yang dipakai ulang (Header, Footer, ProjectCard, ...)
lib/          mengambil data dari API, dengan data lokal sebagai cadangan
data/         isi website: profil, projects, skills, navigasi
types/        tipe TypeScript (Project, Skill, Profile)
```
