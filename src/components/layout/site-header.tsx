"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const LINKS = [
  { href: "/", label: "Home" },
  { href: "/ask", label: "Ask" },
  { href: "/library", label: "Library" },
];

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="site-header">
      <Link className="brand" href="/">
        <span className="brand-mark">GS</span>
        <div>
          <strong>GyaanSetu</strong>
          <small>Teaching-first</small>
        </div>
      </Link>
      <nav className="nav">
        {LINKS.map((link) => {
          const active = pathname === link.href;
          return (
            <Link key={link.href} className={active ? "nav-link active" : "nav-link"} href={link.href}>
              {link.label}
            </Link>
          );
        })}
      </nav>
      <Link className="nav-cta" href="/ask">
        Start a lesson
      </Link>
    </header>
  );
}
