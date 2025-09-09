// FILE: src/pages/about.jsx
import React from "react";
import Layout from "../components/Layout";
import Seo from "../components/Seo";
import * as utils from "../styles/utils.module.css";

const AboutPage = () => {
  return (
    <Layout>
      <section className={utils.section} aria-labelledby="about-page-title">
        <div className={utils.container}>
          <h1 id="about-page-title" className={utils.pageTitle}>About</h1>
          <p>
            This starter-friendly site provides a simple structure for a personal consulting
            presence. Replace this text with your story, expertise, values, and how you work.
          </p>
          <p>
            Keep it human and outcome-focused. Add a photo, a short timeline, and a clear call
            to action inviting people to get in touch.
          </p>
        </div>
      </section>
    </Layout>
  );
};

export default AboutPage;

export const Head = () => (
  <Seo title="About — Generic Consultant" description="Learn more about this consulting template." />
);
