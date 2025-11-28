"use client";

import { IoSunnyOutline, IoMoonOutline } from "react-icons/io5";

interface ThemeToggleProps {
  isDark: boolean;
  onToggle: () => void;
}

export default function ThemeToggle({ isDark, onToggle }: ThemeToggleProps) {
  return (
    <button
      className="theme-toggle"
      onClick={onToggle}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
    >
      {isDark ? <IoSunnyOutline /> : <IoMoonOutline />}
    </button>
  );
}
