// FILE: src/components/Hero.jsx
import React from "react";
import { Link } from "gatsby";
import * as styles from "../styles/hero.module.css";
import * as utils from "../styles/utils.module.css";

const Hero = () => {
  return (
    <section className={styles.hero} aria-labelledby="hero-title">
      <div className={utils.container}>
        <h1 id="hero-title" className={styles.title}>Building reliable software & systems</h1>
        <p className={styles.subtitle}>
          Independent consultant helping teams ship clear, maintainable solutions.
        </p>
        <div className={styles.ctas}>
          <Link to="/about" className={`${utils.btn} ${utils.btnPrimary}`}>About</Link>
          <Link to="/services" className={`${utils.btn} ${utils.btnSecondary}`}>Services</Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
