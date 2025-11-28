"use client";

import { useState } from "react";
import Image from "next/image";
import { IoEyeOutline, IoChevronDown } from "react-icons/io5";

const categories = ["All", "Web Design", "Applications", "Web Development"];

const projects = [
  {
    title: "Finance",
    category: "web development",
    image: "/images/project-1.jpg",
  },
  {
    title: "Orizon",
    category: "web development",
    image: "/images/project-2.png",
  },
  {
    title: "Fundo",
    category: "web design",
    image: "/images/project-3.jpg",
  },
  {
    title: "Brawlhalla",
    category: "applications",
    image: "/images/project-4.png",
  },
  {
    title: "DSM.",
    category: "web design",
    image: "/images/project-5.png",
  },
  {
    title: "MetaSpark",
    category: "web design",
    image: "/images/project-6.png",
  },
  {
    title: "Summary",
    category: "web development",
    image: "/images/project-7.png",
  },
  {
    title: "Task Manager",
    category: "applications",
    image: "/images/project-8.jpg",
  },
  {
    title: "Arrival",
    category: "web development",
    image: "/images/project-9.png",
  },
];

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [selectOpen, setSelectOpen] = useState(false);

  const filteredProjects = projects.filter(
    (project) =>
      activeFilter === "all" || project.category === activeFilter.toLowerCase()
  );

  const handleFilterChange = (filter: string) => {
    setActiveFilter(filter.toLowerCase());
    setSelectOpen(false);
  };

  return (
    <article className="portfolio" data-page="portfolio">
      <header>
        <h2 className="article-title">Portfolio</h2>
      </header>

      <section className="projects">
        {/* Desktop Filter */}
        <ul className="filter-list">
          {categories.map((category) => (
            <li key={category} className="filter-item">
              <button
                className={activeFilter === category.toLowerCase() ? "active" : ""}
                onClick={() => handleFilterChange(category)}
              >
                {category}
              </button>
            </li>
          ))}
        </ul>

        {/* Mobile Filter Select */}
        <div className="filter-select-box">
          <button
            className={`filter-select ${selectOpen ? "active" : ""}`}
            onClick={() => setSelectOpen(!selectOpen)}
          >
            <div className="select-value">
              {categories.find((c) => c.toLowerCase() === activeFilter) || "Select category"}
            </div>
            <div className="select-icon">
              <IoChevronDown />
            </div>
          </button>

          <ul className={`select-list ${selectOpen ? "active" : ""}`}>
            {categories.map((category) => (
              <li key={category} className="select-item">
                <button onClick={() => handleFilterChange(category)}>
                  {category}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Projects Grid */}
        <ul className="project-list">
          {filteredProjects.map((project, index) => (
            <li
              key={index}
              className="project-item active"
              data-filter-item
              data-category={project.category}
            >
              <a href="#">
                <figure className="project-img">
                  <div className="project-item-icon-box">
                    <IoEyeOutline />
                  </div>
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </figure>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-category">{project.category}</p>
              </a>
            </li>
          ))}
        </ul>
      </section>
    </article>
  );
}
