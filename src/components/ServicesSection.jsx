// FILE: src/components/ServicesSection.jsx
import React from "react";
import { Link } from "gatsby";
import services from "../data/servicesData";
import * as styles from "../styles/services.module.css";
import * as utils from "../styles/utils.module.css";

const ServicesSection = ({ full = false }) => {
  return (
    <section id="services" className={styles.services} aria-labelledby="services-title">
      <div className={utils.container}>
        <h2 id="services-title" className={utils.sectionTitle}>Services</h2>
        <div className={utils.grid}>
          {services.map((s) => (
            <article key={s.slug} className={styles.card}>
              <h3 className={styles.cardTitle}>{s.title}</h3>
              <p className={styles.cardBody}>{full ? s.description : s.excerpt}</p>
              <div className={styles.cardActions}>
                <Link to="/services" className={utils.link}>Read more</Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
