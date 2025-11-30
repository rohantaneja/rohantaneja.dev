"use client";

import { IoSunnyOutline, IoMoonOutline } from "react-icons/io5";

interface NavbarProps {
  activePage: string;
  onPageChange: (page: string) => void;
  isDark: boolean;
  onThemeToggle: () => void;
}

const pages = ["About", "Resume", "Contact"];

export default function Navbar({ activePage, onPageChange, isDark, onThemeToggle }: NavbarProps) {
  return (
    <nav className="navbar">
      <ul className="navbar-list">
        {pages.map((page) => (
          <li key={page} className="navbar-item">
            <button
              className={`navbar-link ${activePage === page.toLowerCase() ? "active" : ""}`}
              onClick={() => onPageChange(page.toLowerCase())}
            >
              {page}
            </button>
          </li>
        ))}
        <li className="navbar-item theme-toggle-mobile">
          <button
            className="navbar-link theme-btn"
            onClick={onThemeToggle}
            aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
          >
            {isDark ? <IoSunnyOutline /> : <IoMoonOutline />}
          </button>
        </li>
      </ul>
    </nav>
  );
}
