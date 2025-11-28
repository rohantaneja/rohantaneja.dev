"use client";

import { useState, useEffect } from "react";
import Loader from "@/components/Loader";
import Sidebar from "@/components/Sidebar";
import Navbar from "@/components/Navbar";
import About from "@/components/About";
import Resume from "@/components/Resume";
import Contact from "@/components/Contact";
import ThemeToggle from "@/components/ThemeToggle";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [activePage, setActivePage] = useState("about");
  const [isDark, setIsDark] = useState(true);

  // Initialize theme on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    let initialTheme: boolean;

    if (savedTheme) {
      initialTheme = savedTheme === "dark";
    } else {
      initialTheme = window.matchMedia("(prefers-color-scheme: dark)").matches;
    }

    setIsDark(initialTheme);
    document.documentElement.setAttribute("data-theme", initialTheme ? "dark" : "light");

    const favicon = document.querySelector("link[rel='icon']") as HTMLLinkElement;
    if (favicon) {
      favicon.href = initialTheme ? "/favicon-dark.png" : "/favicon-light.png";
    }
  }, []);

  // Update theme when isDark changes
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", isDark ? "dark" : "light");
    localStorage.setItem("theme", isDark ? "dark" : "light");

    const favicon = document.querySelector("link[rel='icon']") as HTMLLinkElement;
    if (favicon) {
      favicon.href = isDark ? "/favicon-dark.png" : "/favicon-light.png";
    }
  }, [isDark]);

  // Handle body class for loading state
  useEffect(() => {
    if (isLoading) {
      document.body.classList.add("loading");
    } else {
      document.body.classList.remove("loading");
    }
  }, [isLoading]);

  // Scrolling title effect
  useEffect(() => {
    const title = "rohantaneja - cto/founding-engineer@mesolab.ai | minimalist.geek.tinkerer - ";
    let position = 0;

    const scrollTitle = () => {
      document.title = title.substring(position) + title.substring(0, position);
      position = (position + 1) % title.length;
    };

    const interval = setInterval(scrollTitle, 200);
    return () => clearInterval(interval);
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
  };

  return (
    <>
      {isLoading && <Loader finishLoading={() => setIsLoading(false)} />}

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
