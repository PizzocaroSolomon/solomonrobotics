// FILE: src/components/PortfolioSection.jsx
import React from "react";
import { Link } from "gatsby";
import items from "../data/portfolioData";
import * as styles from "../styles/portfolio.module.css";
import * as utils from "../styles/utils.module.css";

const PortfolioSection = ({ full = false }) => {
  return (
    <section id="portfolio" className={styles.portfolio} aria-labelledby="portfolio-title">
      <div className={utils.container}>
        <h2 id="portfolio-title" className={utils.sectionTitle}>Portfolio</h2>
        <div className={utils.grid}>
          {items.map((p) => (
            <article key={p.slug} className={styles.card}>
              <div className={styles.thumbWrap}>
                <img className={styles.thumb} src={p.image} alt={p.alt} loading="lazy" />
              </div>
              <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>{p.title}</h3>
                <p className={styles.cardBody}>{full ? p.description : p.excerpt}</p>
                <div className={styles.cardActions}>
                  <Link to="/portfolio" className={utils.link}>Read more</Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
