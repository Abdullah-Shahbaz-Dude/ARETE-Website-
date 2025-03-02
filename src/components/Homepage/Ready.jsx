import React from "react";
import "./CSS/Ready.css";
import readyimg from "../../assets/images/HomePage/ready1.svg";

const Ready = () => {
  return (
    <>
      <div className="ready-container">
        <div className="ready-img">
          <img src={readyimg} alt="img" />
        </div>
        <div className="ready-container-text">
          <h2>Are you ready to lead with excellence?</h2>
        </div>
      </div>
    </>
  );
};

export default Ready;
