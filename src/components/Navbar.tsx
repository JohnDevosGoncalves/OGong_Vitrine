"use client";

import { useState, useEffect } from "react";

const links = [
  { label: "Formats", href: "#formats" },
  { label: "Fonctionnement", href: "#comment" },
  { label: "Tarifs", href: "#tarifs" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-surface/90 backdrop-blur-xl border-b border-border shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2.5">
          <OgongMark />
          <span className="text-lg font-bold tracking-tight text-foreground">
            ogong
          </span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-muted hover:text-foreground transition-colors"
            >
              {l.label}
            </a>
          ))}
        </div>

        <a
          href="#contact"
          className="text-sm font-medium text-primary hover:text-primary-dark transition-colors"
        >
          Demander une démo
        </a>
      </div>
    </nav>
  );
}

function OgongMark() {
  const colors = ["#FF8C42", "#FFB347", "#4A3AFF", "#7B6FFF", "#FF6B6B", "#FF8C42"];
  return (
    <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
      {colors.map((c, i) => {
        const angle = (i * 60 * Math.PI) / 180;
        return (
          <circle
            key={i}
            cx={16 + 11 * Math.cos(angle)}
            cy={16 + 11 * Math.sin(angle)}
            r={2.2}
            fill={c}
          />
        );
      })}
    </svg>
  );
}
