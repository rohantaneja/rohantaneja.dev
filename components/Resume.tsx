"use client";

import { IoBookOutline } from "react-icons/io5";
import { IoBriefcaseOutline } from "react-icons/io5";

const education = [
  {
    title: "Trinity College Dublin",
    period: "2017 — 2021",
    description: "Bachelor of Engineering - BE, Computer Engineering",
  },
  {
    title: "Blue Bells Model School",
    period: "2015 — 2017",
    description: "AISSCE - Physics, Chemistry, Maths, Computer Science",
  },
];

const experience = [
  {
    title: "Research Fellow",
    company: "ADAPT Centre",
    period: "Jul 2025 — Present",
    description: "Conducting research in AI-driven solutions, focusing on responsible AI and scalable systems at Trinity College Dublin.",
  },
  {
    title: "Senior Consultant",
    company: "Deloitte",
    period: "Aug 2024 — Aug 2025",
    description: "Led full-stack .NET development, integrated AI models for document identification & fraud detection (reducing manual effort by 34%), and mentored junior developers.",
  },
  {
    title: "Visiting Research Fellow",
    company: "Trinity College Dublin",
    period: "May 2025 — Jul 2025",
    description: "Developed GenAI model for adaptive lesson planning, enabling 140% faster content generation. Led research on responsible AI and GDPR-compliant frameworks.",
  },
  {
    title: "Consultant",
    company: "Deloitte",
    period: "Aug 2023 — Aug 2024",
    description: "Focused on .NET Core, cloud development, and Azure security. Certified Azure Developer Associate.",
  },
  {
    title: "Analyst",
    company: "Deloitte",
    period: "Sep 2021 — Aug 2023",
    description: "Full-Stack .NET Developer delivering high-quality solutions. Implemented robust testing with NUnit and SpecFlow, managed CI/CD with Azure DevOps.",
  },
  {
    title: "Software Engineer Intern",
    company: "Fonz Music",
    period: "Jun 2021 — Sep 2021",
    description: "Worked with TypeScript, Node.js, and AWS to build music platform features.",
  },
];

const skills = [
  { name: ".NET / C#", percentage: 95 },
  { name: "Cloud (Azure / AWS)", percentage: 90 },
  { name: "AI / Machine Learning", percentage: 85 },
  { name: "TypeScript / JavaScript", percentage: 90 },
  { name: "Python", percentage: 80 },
  { name: "DevOps / CI/CD", percentage: 85 },
];

export default function Resume() {
  return (
    <article className="resume" data-page="resume">
      <header>
        <h2 className="article-title">Resume</h2>
      </header>

      {/* Experience */}
      <section className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <IoBriefcaseOutline />
          </div>
          <h3 className="h3">Experience</h3>
        </div>

        <ol className="timeline-list">
          {experience.map((item, index) => (
            <li key={index} className="timeline-item">
              <h4 className="timeline-item-title">{item.title}</h4>
              <span className="timeline-company">{item.company}</span>
              <span>{item.period}</span>
              <p className="timeline-text">{item.description}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* Education */}
      <section className="timeline">
        <div className="title-wrapper">
          <div className="icon-box">
            <IoBookOutline />
          </div>
          <h3 className="h3">Education</h3>
        </div>

        <ol className="timeline-list">
          {education.map((item, index) => (
            <li key={index} className="timeline-item">
              <h4 className="timeline-item-title">{item.title}</h4>
              <span>{item.period}</span>
              <p className="timeline-text">{item.description}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* Skills */}
      <section className="skill">
        <h3 className="skills-title">My Skills</h3>
        <ul className="skills-list content-card">
          {skills.map((skill, index) => (
            <li key={index} className="skills-item">
              <div className="title-wrapper">
                <h5 className="h5">{skill.name}</h5>
                <data value={skill.percentage}>{skill.percentage}%</data>
              </div>
              <div className="skill-progress-bg">
                <div
                  className="skill-progress-fill"
                  style={{ width: `${skill.percentage}%` }}
                ></div>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </article>
  );
}
