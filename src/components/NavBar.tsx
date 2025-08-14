"use client";
import React from "react";

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#education", label: "Education" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export default function NavBar() {
  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 backdrop-blur-md bg-white/5 border border-white/10 rounded-full pl-10 pr-20 py-4 shadow-lg shadow-black/40">
      <ul className="flex items-center gap-12 text-2xl font-extrabold tracking-wide">
        <li className="flex-shrink-0">
          <img
            src="/Avatar.png"
            alt="Avatar icon"
            className="w-12 h-12 rounded-full object-cover border-2 border-white/40 shadow-lg"
          />
        </li>
        {links.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              className="transition-colors text-white/80 hover:text-[var(--accent-lilac)]"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
