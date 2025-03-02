import React from "react";
import "./CSS/LandingPageTexts.css";
import img from "../../assets/images/HomePage/landingPageTextimg1.svg";

const LandingPageTexts = () => {
  return (
    <>
      <div className="LandingPageTexts-container">
        <div className="LandingPageTexts-container-right-left">
          <img src={img} alt="img" />
        </div>
        <div className="LandingPageTexts-container-right">
          <p>
            At Arete, we don’t just help businesses and individuals adapt—we
            help them lead the way.  to unlock your potential, embrace
            transformation, and achieve lasting success, let’s start a
            conversation.
          </p>
        </div>
      </div>
    </>
  );
};

export default LandingPageTexts;
