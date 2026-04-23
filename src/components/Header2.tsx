"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import React from "react";

const Header2: React.FC = () => {
  const pathname = usePathname() ?? "";

  return (
    <header className="site-header-shell">
      <div className="site-header-bar">
        <Link href="/" className="site-brand">Salaah Times</Link>
        <nav className="site-header-links" aria-label="Main navigation">
          <Link
            href="/"
            className={`site-nav-link${pathname === "/" ? " is-active" : ""}`}
          >
            Home
          </Link>
          <Link
            href="/privacypolicy"
            className={`site-nav-link${pathname === "/privacypolicy" ? " is-active" : ""}`}
          >
            Privacy
          </Link>
          <a href="https://www.apple.com/app-store/" className="site-nav-link" target="_blank" rel="noopener noreferrer">iOS</a>
          <a href="https://play.google.com/store" className="site-nav-link" target="_blank" rel="noopener noreferrer">Android</a>
        </nav>
      </div>
    </header>
  );
};

export { Header2 };
