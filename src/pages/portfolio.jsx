// FILE: src/pages/portfolio.jsx
import React from "react";
import Layout from "../components/Layout";
import Seo from "../components/Seo";
import PortfolioSection from "../components/PortfolioSection";
import * as utils from "../styles/utils.module.css";

const PortfolioPage = () => {
  return (
    <Layout>
      <section className={utils.section} aria-labelledby="portfolio-page-title">
        <div className={utils.container}>
          <h1 id="portfolio-page-title" className={utils.pageTitle}>Portfolio</h1>
          <p>Selected projects that illustrate scope, style, and outcomes.</p>
        </div>
      </section>
      <PortfolioSection full />
    </Layout>
  );
};

export default PortfolioPage;

export const Head = () => (
  <Seo title="Portfolio — Generic Consultant" description="Sample project highlights." />
);
