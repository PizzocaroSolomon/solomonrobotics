// FILE: src/components/ContactSection.jsx
import React, { useState } from "react";
import * as styles from "../styles/contact.module.css";
import * as utils from "../styles/utils.module.css";

const initial = { name: "", email: "", message: "" };

const ContactSection = ({ standalone = false }) => {
  const [form, setForm] = useState(initial);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const e = {};
    if (!form.name.trim()) e.name = "Please enter your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Enter a valid email.";
    if (!form.message.trim()) e.message = "Please add a message.";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const onSubmit = (evt) => {
    evt.preventDefault();
    if (!validate()) return;
    // In a real app you'd post to an API; here we log the payload.
    // eslint-disable-next-line no-console
    console.log("Contact form submission:", form);
    setForm(initial);
    alert("Thanks! This demo logs your message to the console.");
  };

  return (
    <section id="contact" className={styles.contact} aria-labelledby="contact-title">
      <div className={utils.container}>
        <h2 id="contact-title" className={utils.sectionTitle}>
          {standalone ? "Contact" : "Get in touch"}
        </h2>
        <form className={styles.form} onSubmit={onSubmit} noValidate>
          <div className={styles.field}>
            <label htmlFor="name">Name</label>
            <input
              id="name"
              name="name"
              type="text"
              autoComplete="name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              aria-invalid={errors.name ? "true" : "false"}
              required
            />
            {errors.name && <span className={styles.error}>{errors.name}</span>}
          </div>

          <div className={styles.field}>
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              aria-invalid={errors.email ? "true" : "false"}
              required
            />
            {errors.email && <span className={styles.error}>{errors.email}</span>}
          </div>

          <div className={styles.field}>
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows="6"
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              aria-invalid={errors.message ? "true" : "false"}
              required
            />
            {errors.message && <span className={styles.error}>{errors.message}</span>}
          </div>

          <div className={styles.actions}>
            <button className={`${utils.btn} ${utils.btnPrimary}`} type="submit">Send</button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
