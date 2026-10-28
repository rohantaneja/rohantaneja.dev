"use client";

import { useEffect, useRef, useState } from "react";
import { IoBookOutline, IoBriefcaseOutline, IoDownloadOutline } from "react-icons/io5";
import { profile } from "@/data/profile";
import { education, experience, skills } from "@/data/resume";
import { trackContactIntent } from "@/lib/analytics";

export default function Resume() {
  const skillsRef = useRef<HTMLUListElement>(null);
  const [skillsVisible, setSkillsVisible] = useState(false);

  // Animate the skill bars the first time the list scrolls into view.
  useEffect(() => {
    const node = skillsRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setSkillsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <article className="resume" data-page="resume">
      <header className="resume-header">
        <h2 className="article-title">Resume</h2>
        <a
          href={profile.resumeUrl}
          download
          className="download-cv-btn"
          onClick={() => trackContactIntent("cv_download")}
        >
          <IoDownloadOutline />
          <span>Download CV</span>
        </a>
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
        <ul ref={skillsRef} className="skills-list content-card">
          {skills.map((skill, index) => (
            <li key={index} className="skills-item">
              <div className="title-wrapper">
                <h5 className="h5">{skill.name}</h5>
                <data value={skill.percentage}>{skill.percentage}%</data>
              </div>
              <div className="skill-progress-bg">
                <div
                  className="skill-progress-fill"
                  style={{ width: skillsVisible ? `${skill.percentage}%` : "0%" }}
                ></div>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </article>
  );
}
