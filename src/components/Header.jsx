// FILE: src/components/Header.jsx
import React from "react";
import { Link } from "gatsby";
import * as styles from "../styles/header.module.css";
import * as utils from "../styles/utils.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={utils.container}>
        <div className={styles.bar}>
          <div className={styles.brand}>
            <Link to="/" className={styles.logo}>Generic Consultant</Link>
          </div>

          {/* Desktop nav */}
          <nav className={styles.nav} aria-label="Primary">
            <ul>
              <li><Link activeClassName={styles.active} to="/">Home</Link></li>
              <li><Link activeClassName={styles.active} to="/services">Services</Link></li>
              <li><Link activeClassName={styles.active} to="/portfolio">Portfolio</Link></li>
              <li><Link activeClassName={styles.active} to="/about">About</Link></li>
              <li><Link activeClassName={styles.active} to="/contact">Contact</Link></li>
            </ul>
          </nav>

          {/* Mobile nav */}
          <details className={styles.mobileNav}>
            <summary aria-label="Open menu" className={styles.menuButton}>
              <span className={utils.visuallyHidden}>Menu</span>
              ☰
            </summary>
            <nav aria-label="Mobile">
              <ul>
                <li><Link to="/" activeClassName={styles.active}>Home</Link></li>
                <li><Link to="/services" activeClassName={styles.active}>Services</Link></li>
                <li><Link to="/portfolio" activeClassName={styles.active}>Portfolio</Link></li>
                <li><Link to="/about" activeClassName={styles.active}>About</Link></li>
                <li><Link to="/contact" activeClassName={styles.active}>Contact</Link></li>
              </ul>
            </nav>
          </details>
        </div>
      </div>
    </header>
  );
};

export default Header;
