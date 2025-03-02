import React from "react";
import "../What We do/CSS/WhatHero.css";
import WHero_img from "../../assets/images/What we do.jpg";

const WhatHero = () => {
  return (
    <>
      <div className="WhatHero-img">
        <img src={WHero_img} alt="" />
        <div className="WhatHero-text-container">
          <h2>What We Do?</h2>
        </div>
      </div>
    </>
  );
};

export default WhatHero;
