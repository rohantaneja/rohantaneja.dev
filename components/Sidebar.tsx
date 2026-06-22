"use client";

import { useState } from "react";
import Image from "next/image";
import { IoMailOutline, IoStarOutline, IoLocationOutline, IoChevronDown } from "react-icons/io5";
import { profile } from "@/data/profile";
import { socials } from "@/data/socials";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <aside className={`sidebar ${isOpen ? "active" : ""}`}>
      <div className="sidebar-info">
        <figure className="avatar-box">
          <Image
            src={profile.avatar}
            alt={profile.name}
            width={300}
            height={300}
            quality={90}
            priority
            className="rounded-[20px]"
          />
        </figure>

        <div className="info-content">
          <h1 className="name">{profile.name}</h1>
          <p className="title">{profile.title}</p>
        </div>

        <button
          className="info_more-btn"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span>Show Contacts</span>
          <IoChevronDown className="text-orange-yellow-crayola" />
        </button>
      </div>

      <div className="sidebar-info_more">
        <div className="separator"></div>

        <ul className="contacts-list">
          <li className="contact-item">
            <div className="icon-box">
              <IoMailOutline />
            </div>
            <div className="contact-info">
              <p className="contact-title">Email</p>
              <a href={`mailto:${profile.email}`} className="contact-link">
                {profile.email}
              </a>
            </div>
          </li>

          <li className="contact-item">
            <div className="icon-box">
              <IoStarOutline />
            </div>
            <div className="contact-info">
              <p className="contact-title">Zodiac</p>
              <time dateTime={profile.zodiacDate}>{profile.zodiac}</time>
            </div>
          </li>

          <li className="contact-item">
            <div className="icon-box">
              <IoLocationOutline />
            </div>
            <div className="contact-info">
              <p className="contact-title">Location</p>
              <address>{profile.location}</address>
            </div>
          </li>
        </ul>

        <div className="separator"></div>

        <ul className="social-list">
          {socials.map((social) => (
            <li key={social.label} className="social-item">
              <a
                href={social.url}
                className="social-link"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
              >
                <social.icon className="text-orange-yellow-crayola text-lg hover:text-light-gray transition-colors" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}
