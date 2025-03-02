import React from "react";
import "./CSS/WhatBanner.css";

const WhatBanner = () => {
  return (
    <section className="arete-container">
      <div className="arete-content">
        <p>
          At Arete, we support individuals and organisations unlock their
          highest potential through psychology-driven interventions that support
          innovation, digital transformation, and personal development.
        </p>
        <p>
          Whether you’re navigating change, overcoming challenges, or striving
          for excellence, we provide the insight, tools, and guidance to help
          you grow, adapt, and achieve. Excellence isn’t just a goal it’s the
          foundation of everything we do.
        </p>
        <h3>Our specialist areas</h3>
        <ul>
          <li>Human Centred AI & Data Transformation</li>
          <li>
            Neuro-diversity awareness in the workplace for strategic advantages
          </li>
          <li>Professional Mentoring & Coaching to support a growth mindset</li>
          <li>Psychological Therapy & Psychoeducation</li>
        </ul>
        <p>
          We can offer our support online / face to face in our offices or
          on-site depending on your preference.
        </p>
      </div>
    </section>
  );
};

export default WhatBanner;
