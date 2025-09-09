// FILE: src/pages/index.jsx
import React from "react";
import Layout from "../components/Layout";
import Seo from "../components/Seo";
import Hero from "../components/Hero";
import AboutSection from "../components/AboutSection";
import ServicesSection from "../components/ServicesSection";
import PortfolioSection from "../components/PortfolioSection";
import ContactSection from "../components/ContactSection";

const IndexPage = () => (
  <Layout>
    <Hero />
    <AboutSection />
    <ServicesSection />
    <PortfolioSection />
    <ContactSection />
  </Layout>
);

export default IndexPage;

export const Head = () => (
  <Seo
    title="Generic Consultant — Software & Systems"
    description="A minimal consulting/portfolio homepage template built with Gatsby."
  />
);
