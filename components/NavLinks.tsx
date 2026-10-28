"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinkClass, navListClass } from "@/components/navStyles";
import { navItems } from "@/data/navigation";

function isActive(pathname: string, href: string) {
  return href === "/" ? pathname === "/" : pathname.startsWith(href);
}

export default function NavLinks() {
  const pathname = usePathname();

  return (
    <ul className={navListClass}>
      {navItems.map((item) => (
        <li key={item.href}>
          <Link
            href={item.href}
            aria-current={isActive(pathname, item.href) ? "page" : undefined}
            className={navLinkClass}
          >
            {item.label}
          </Link>
        </li>
      ))}
    </ul>
  );
}
