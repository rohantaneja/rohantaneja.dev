"use client";

import Image from "next/image";

const services = [
  {
    icon: "/images/icon-ai.svg",
    title: "AI & Machine Learning",
    description: "Integrating AI models for document processing, fraud detection, and personalization.",
  },
  {
    icon: "/images/icon-dev.svg",
    title: "Full-Stack Development",
    description: "Building scalable .NET platforms with responsive UIs and robust backend systems.",
  },
  {
    icon: "/images/icon-bulb.svg",
    title: "Research & Innovation",
    description: "Leading research in responsible AI, GDPR compliance, and ethical AI frameworks.",
  },
  {
    icon: "/images/icon-cloud.svg",
    title: "Cloud & DevOps",
    description: "Architecting secure cloud solutions on Azure and AWS with CI/CD pipelines.",
  },
];

export default function About() {
  return (
    <article className="about active" data-page="about">
      <header>
        <h2 className="article-title">About me</h2>
      </header>

      <section className="about-text">
        <p>
          I&apos;m a Research Fellow at ADAPT Centre with over 7 years of experience in full-stack software development,
          cloud infrastructure, and AI-driven solutions. Currently, I&apos;m also the CTO and Technical Founder at MESO,
          where we&apos;re building adaptive learning platforms for education.
        </p>
        <p>
          My career has been defined by a passion for building impactful systems that are scalable, secure, and user-centric.
          From leading .NET development at Deloitte to integrating AI for accessibility, I&apos;ve consistently delivered
          solutions that align with business goals while prioritizing ethical standards like GDPR compliance.
        </p>
        <p>
          What excites me most is the potential of technology to create positive change. I&apos;m deeply passionate about
          leveraging AI for good—whether through accessibility tools that empower individuals or personalization platforms
          that adapt to users&apos; unique needs while promoting safety and trust.
        </p>
      </section>

      {/* Services */}
      <section className="service">
        <h3 className="service-title">What I&apos;m Doing</h3>
        <ul className="service-list">
          {services.map((service, index) => (
            <li key={index} className="service-item">
              <div className="service-icon-box">
                <Image src={service.icon} alt={service.title} width={40} height={40} />
              </div>
              <div className="service-content-box">
                <h4 className="service-item-title">{service.title}</h4>
                <p className="service-item-text">{service.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </article>
  );
}
