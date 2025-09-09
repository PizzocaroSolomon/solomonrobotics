// FILE: src/pages/services.jsx
import React from "react";
import Layout from "../components/Layout";
import Seo from "../components/Seo";
import ServicesSection from "../components/ServicesSection";
import * as utils from "../styles/utils.module.css";

const ServicesPage = () => {
  return (
    <Layout>
      <section className={utils.section} aria-labelledby="services-page-title">
        <div className={utils.container}>
          <h1 id="services-page-title" className={utils.pageTitle}>Services</h1>
          <p>Clear offerings that help clients understand how you create value.</p>
        </div>
      </section>
      <ServicesSection full />
    </Layout>
  );
};

export default ServicesPage;

export const Head = () => (
  <Seo title="Services — Generic Consultant" description="Consulting services overview." />
);
