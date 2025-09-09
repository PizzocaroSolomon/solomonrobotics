// FILE: src/pages/contact.jsx
import React from "react";
import Layout from "../components/Layout";
import Seo from "../components/Seo";
import ContactSection from "../components/ContactSection";
import * as utils from "../styles/utils.module.css";

const ContactPage = () => {
  return (
    <Layout>
      <section className={utils.section} aria-labelledby="contact-page-title">
        <div className={utils.container}>
          <h1 id="contact-page-title" className={utils.pageTitle}>Contact</h1>
          <p>Send a short note about your goals and timeline.</p>
        </div>
      </section>
      <ContactSection standalone />
    </Layout>
  );
};

export default ContactPage;

export const Head = () => <Seo title="Contact — Generic Consultant" description="Get in touch." />;
