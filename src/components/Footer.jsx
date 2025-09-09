// FILE: src/components/Footer.jsx
import React from "react";
import { Link } from "gatsby";
import * as styles from "../styles/footer.module.css";
import * as utils from "../styles/utils.module.css";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className={styles.footer}>
      <div className={utils.container}>
        <div className={styles.grid}>
          <div>
            <h2 className={styles.h}>Generic Consultant</h2>
            <p>123 Example Street<br />Somewhere, Earth</p>
            <p><a className={utils.link} href="mailto:hello@example.com">hello@example.com</a></p>
          </div>
          <div>
            <h3 className={styles.h}>Explore</h3>
            <ul className={styles.links}>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/portfolio">Portfolio</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className={styles.h}>Legal</h3>
            <ul className={styles.links}>
              <li><a href="#!">Privacy</a></li>
              <li><a href="#!">Terms</a></li>
              <li><a href="#!">Cookies</a></li>
            </ul>
          </div>
        </div>
        <div className={styles.meta}>
          <small>© {year} Generic Consultant. All rights reserved.</small>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
