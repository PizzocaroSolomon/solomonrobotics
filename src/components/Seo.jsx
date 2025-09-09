// FILE: src/components/Seo.jsx
import React from "react";

/**
 * Gatsby v5 Head-friendly SEO component.
 * No external deps; simply returns tags for use inside page Head exports.
 */
const Seo = ({
  title = "Generic Consultant",
  description = "Simple consulting & portfolio website.",
}) => (
  <>
    <title>{title}</title>
    <meta name="description" content={description} />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
  </>
);

export default Seo;
