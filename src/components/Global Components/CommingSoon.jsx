import React from "react";

import "./CSS/CommingSoon.css";
import img from "../../assets/images/HomePage/Coming Soon Sticker by Lemon Printers.gif";

const CommingSoon = () => {
  return (
    <div className="giphy-container">
      <img src={img} alt="Coming soon..." />
    </div>
  );
};
export default CommingSoon;
