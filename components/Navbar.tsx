"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Icon } from "@/components/Icons";
import { navigation, siteConfig } from "@/data/site";

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="siteHeader">
      <div className="container navInner">
        <Link href="/" className="brand" onClick={() => setOpen(false)}>
          <span className="brandMark"><Icon name="brain" /></span>
          <span>{siteConfig.name}</span>
        </Link>

        <button
          type="button"
          className="navToggle"
          onClick={() => setOpen((value) => !value)}
          aria-label={open ? "Close navigation" : "Open navigation"}
          aria-expanded={open}
        >
          <Icon name={open ? "close" : "menu"} />
        </button>

        <nav className={`navLinks ${open ? "navOpen" : ""}`} aria-label="Primary navigation">
          {navigation.map((item) => {
            const active = item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={active ? "active" : ""}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            );
          })}
          <Link href="/contact" className="button buttonSmall" onClick={() => setOpen(false)}>
            Let&apos;s Work Together
          </Link>
        </nav>
      </div>
    </header>
  );
}
