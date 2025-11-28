"use client";

import { useState, FormEvent } from "react";
import { IoPaperPlane } from "react-icons/io5";

export default function Contact() {
  const [formData, setFormData] = useState({
    fullname: "",
    message: "",
  });
  const [isValid, setIsValid] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    const newFormData = { ...formData, [name]: value };
    setFormData(newFormData);

    // Check if required fields are filled
    const allFilled =
      newFormData.fullname.trim() !== "" &&
      newFormData.message.trim() !== "";
    setIsValid(allFilled);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!isValid) return;

    // Create mailto link with form data
    const subject = encodeURIComponent(`Hi Rohan!`);
    const body = encodeURIComponent(formData.message);

    // Open user's email client
    window.location.href = `mailto:contact@rohantaneja.dev?subject=${subject}&body=${body}`;
  };

  return (
    <article className="contact" data-page="contact">
      <header>
        <h2 className="article-title">Contact</h2>
      </header>

      <section className="mapbox">
        <figure>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d152515.98633028045!2d-6.385785743164092!3d53.32444313819669!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48670e80ea27ac2f%3A0xa00c7a9973171a0!2sDublin%2C%20Ireland!5e0!3m2!1sen!2sie!4v1700000000000!5m2!1sen!2sie"
            width="400"
            height="300"
            loading="lazy"
            title="Google Maps"
          ></iframe>
        </figure>
      </section>

      <section className="contact-form">
        <h3 className="form-title">Contact Form</h3>

        <form className="form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="fullname"
            className="form-input"
            placeholder="Your name"
            required
            value={formData.fullname}
            onChange={handleInputChange}
          />

          <textarea
            name="message"
            className="form-input"
            placeholder="Your Message"
            required
            value={formData.message}
            onChange={handleInputChange}
          ></textarea>

          <button className="form-btn" type="submit" disabled={!isValid}>
            <IoPaperPlane />
            <span>Send Message</span>
          </button>
        </form>
      </section>
    </article>
  );
}
