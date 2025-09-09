// FILE: src/components/AboutSection.jsx
import React from "react";
import { Link } from "gatsby";
import * as styles from "../styles/about.module.css";
import * as utils from "../styles/utils.module.css";

const AboutSection = () => {
  return (
    <section id="about" className={styles.about} aria-labelledby="about-title">
      <div className={utils.container}>
        <h2 id="about-title" className={utils.sectionTitle}>About</h2>
        <p className={styles.text}>
          I provide pragmatic engineering guidance, from architecture to delivery. This site
          is a clean template you can adapt for a personal consulting portfolio.
        </p>
        <Link to="/about" className={`${utils.btn} ${utils.btnSecondary}`}>Learn more</Link>
      </div>
    </section>
  );
};

export default AboutSection;
