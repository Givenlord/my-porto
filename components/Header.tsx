import Link from "next/link";
import { Suspense } from "react";
import NavLinks from "@/components/NavLinks";
import ThemeToggle from "@/components/ThemeToggle";
import { navLinkClass, navListClass } from "@/components/navStyles";
import { navItems } from "@/data/navigation";
import { profile } from "@/data/profile";

// Navbar sementara sebelum NavLinks selesai load
function NavFallback() {
  return (
    <ul className={navListClass}>
      {navItems.map((item) => (
        <li key={item.href}>
          <Link href={item.href} className={navLinkClass}>
            {item.label}
          </Link>
        </li>
      ))}
    </ul>
  );
}

// HP: baris 1 logo + tombol tema, baris 2 menu (selalu, biar konsisten di semua halaman)
// Laptop: semuanya satu baris
export default function Header() {
  return (
    <header className="sticky top-0 z-10 border-b border-border bg-background/80 backdrop-blur">
      <nav className="mx-auto flex max-w-4xl flex-wrap items-center justify-between gap-y-3 px-4 py-3 sm:flex-nowrap sm:gap-x-3 sm:px-6">
        <Link href="/" className="order-1 font-mono text-sm font-semibold">
          <span className="text-accent">~/</span>
          {profile.name.toLowerCase().replace(/\s+/g, "")}
        </Link>
        <div className="order-3 w-full sm:order-2 sm:ml-auto sm:w-auto">
          <Suspense fallback={<NavFallback />}>
            <NavLinks />
          </Suspense>
        </div>
        <div className="order-2 sm:order-3">
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
