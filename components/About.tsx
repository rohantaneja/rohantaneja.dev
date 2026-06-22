"use client";

import Image from "next/image";
import { aboutText } from "@/data/profile";
import { services } from "@/data/services";

export default function About() {
  return (
    <article className="about active" data-page="about">
      <header>
        <h2 className="article-title">About me</h2>
      </header>

      <section className="about-text">
        {aboutText.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
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
