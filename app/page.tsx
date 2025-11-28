"use client";

import { useState, useEffect } from "react";
import Loader from "@/components/Loader";
import Sidebar from "@/components/Sidebar";
import Navbar from "@/components/Navbar";
import About from "@/components/About";
import Resume from "@/components/Resume";
import Contact from "@/components/Contact";
import ThemeToggle from "@/components/ThemeToggle";

// Get initial theme from system preference (runs before hydration)
const getInitialTheme = (): boolean => {
  if (typeof window === "undefined") return true; // SSR default

  // Check for saved preference first
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme) {
    return savedTheme === "dark";
  }

  // Fall back to system preference
  return window.matchMedia("(prefers-color-scheme: dark)").matches;
};

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [activePage, setActivePage] = useState("about");
  const [isDark, setIsDark] = useState(true);
  const [pendingTheme, setPendingTheme] = useState<boolean | null>(null);

  useEffect(() => {
    // Initialize theme from saved preference or system setting
    const initialTheme = getInitialTheme();
    setIsDark(initialTheme);
    document.documentElement.setAttribute("data-theme", initialTheme ? "dark" : "light");

    // Update favicon immediately
    const favicon = document.querySelector("link[rel='icon']") as HTMLLinkElement;
    if (favicon) {
      favicon.href = initialTheme ? "/favicon-dark.png" : "/favicon-light.png";
    }
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", isDark ? "dark" : "light");
    localStorage.setItem("theme", isDark ? "dark" : "light");

    // Update favicon based on theme
    const favicon = document.querySelector("link[rel='icon']") as HTMLLinkElement;
    if (favicon) {
      favicon.href = isDark ? "/favicon-dark.png" : "/favicon-light.png";
    }
  }, [isDark]);

  useEffect(() => {
    if (isLoading) {
      document.body.classList.add("loading");
    } else {
      document.body.classList.remove("loading");
    }
  }, [isLoading]);

  const toggleTheme = () => {
    const newTheme = !isDark;
    setPendingTheme(newTheme);
    // Apply theme immediately so CSS is ready before loader finishes
    document.documentElement.setAttribute("data-theme", newTheme ? "dark" : "light");
    setIsLoading(true);
  };

  const handleLoaderFinish = () => {
    if (pendingTheme !== null) {
      setIsDark(pendingTheme);
      setPendingTheme(null);
    }
    setIsLoading(false);
  };

  return (
    <>
      {isLoading && <Loader finishLoading={handleLoaderFinish} isDark={pendingTheme !== null ? pendingTheme : isDark} />}

      <main className={`main ${isLoading ? "hidden" : ""}`}>
        <Sidebar />

        <div className="main-content">
          <Navbar activePage={activePage} onPageChange={setActivePage} />
          <ThemeToggle isDark={isDark} onToggle={toggleTheme} />

          {activePage === "about" && <About />}
          {activePage === "resume" && <Resume />}
          {activePage === "contact" && <Contact />}
        </div>
      </main>
    </>
  );
}
