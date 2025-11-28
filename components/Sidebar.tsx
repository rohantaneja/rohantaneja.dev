"use client";

import { useState } from "react";
import Image from "next/image";
import { IoMailOutline, IoPhonePortraitOutline, IoStarOutline, IoLocationOutline, IoChevronDown, IoLogoGithub, IoLogoLinkedin, IoLogoFacebook, IoLogoInstagram, IoLogoWhatsapp } from "react-icons/io5";
import { FaXTwitter } from "react-icons/fa6";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <aside className={`sidebar ${isOpen ? "active" : ""}`}>
      <div className="sidebar-info">
        <figure className="avatar-box">
          <Image
            src="/images/memoji.png"
            alt="Rohan Taneja"
            width={80}
            height={80}
            className="rounded-[20px]"
          />
        </figure>

        <div className="info-content">
          <h1 className="name">Rohan Taneja</h1>
          <p className="title">Software Engineer</p>
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
              <a href="mailto:contact@rohantaneja.dev" className="contact-link">
                contact@rohantaneja.dev
              </a>
            </div>
          </li>

          <li className="contact-item">
            <div className="icon-box">
              <IoPhonePortraitOutline />
            </div>
            <div className="contact-info">
              <p className="contact-title">Phone</p>
              <a href="tel:+919910434623" className="contact-link">
                +91 99104 34623
              </a>
            </div>
          </li>

          <li className="contact-item">
            <div className="icon-box">
              <IoStarOutline />
            </div>
            <div className="contact-info">
              <p className="contact-title">Zodiac</p>
              <time dateTime="1990-03-01">Pisces</time>
            </div>
          </li>

          <li className="contact-item">
            <div className="icon-box">
              <IoLocationOutline />
            </div>
            <div className="contact-info">
              <p className="contact-title">Location</p>
              <address>Dublin, Ireland</address>
            </div>
          </li>
        </ul>

        <div className="separator"></div>

        <ul className="social-list">
          <li className="social-item">
            <a href="https://www.facebook.com/rohantaneja99/" className="social-link">
              <IoLogoFacebook className="text-orange-yellow-crayola text-lg hover:text-light-gray transition-colors" />
            </a>
          </li>
          <li className="social-item">
            <a href="https://www.instagram.com/rohantaneja99/" className="social-link">
              <IoLogoInstagram className="text-orange-yellow-crayola text-lg hover:text-light-gray transition-colors" />
            </a>
          </li>
          <li className="social-item">
            <a href="https://github.com/rohantaneja" className="social-link">
              <IoLogoGithub className="text-orange-yellow-crayola text-lg hover:text-light-gray transition-colors" />
            </a>
          </li>
          <li className="social-item">
            <a href="https://www.linkedin.com/in/rohantaneja-dev/" className="social-link">
              <IoLogoLinkedin className="text-orange-yellow-crayola text-lg hover:text-light-gray transition-colors" />
            </a>
          </li>
          <li className="social-item">
            <a href="https://x.com/rohantaneja99" className="social-link">
              <FaXTwitter className="text-orange-yellow-crayola text-lg hover:text-light-gray transition-colors" />
            </a>
          </li>
          <li className="social-item">
            <a href="https://wa.me/919910434623" className="social-link">
              <IoLogoWhatsapp className="text-orange-yellow-crayola text-lg hover:text-light-gray transition-colors" />
            </a>
          </li>
        </ul>
      </div>
    </aside>
  );
}
