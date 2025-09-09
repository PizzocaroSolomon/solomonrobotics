// FILE: src/components/Layout.jsx
import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import * as layout from "../styles/layout.module.css";
import * as utils from "../styles/utils.module.css";
import "../styles/globals.module.css";

const Layout = ({ children }) => {
  return (
    <div className={layout.siteWrapper}>
      <a href="#main" className={utils.skipLink}>Skip to content</a>
      <Header />
      <main id="main" className={layout.main}>
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
