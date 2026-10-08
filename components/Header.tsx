"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { NAV } from "@/lib/data";

export default function Header() {
  const path = usePathname();
  const [open, setOpen] = useState(false);
  useEffect(() => setOpen(false), [path]);

  const active = (href: string) =>
    href === "/" ? path === "/" : path.startsWith(href);

  return (
    <header className="header">
      <div className="header-inner">
        <Link href="/" className="logo" aria-label="Paradise Spa home">
          <span className="logo-mark">🌿</span>
          <span className="logo-text">
            Paradise<em>Spa</em>
          </span>
        </Link>
        <nav className={`nav ${open ? "open" : ""}`}>
          {NAV.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              className={active(n.href) ? "active" : ""}
            >
              {n.label}
            </Link>
          ))}
          <Link href="/booking" className="btn btn-primary nav-cta">
            Book an appointment
          </Link>
        </nav>
        <button
          className="burger"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}
