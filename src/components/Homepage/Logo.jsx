import React, { useState } from "react";
import logo from "../../assets/images/logo transperent.png";
import "./CSS/logo.css";
const Logo = () => {
  return (
    <>
      <div className="logo-container">
        <div className="logo-text">
          <div className="logo-text-left">
            <h2> Organisations we have worked with </h2>
          </div>
        </div>
        <div className="logo-images">
          <div className="logo-img1 logoIMG">
            <button>
              <img src={logo} alt="" />
            </button>
            <h1>Logo</h1>
          </div>
          <div className="logo-img2 logoIMG">
            <button>
              <img src={logo} alt="" />
            </button>
            <h1>Logo</h1>
          </div>
          <div className="logo-img3 logoIMG">
            <button>
              <img src={logo} alt="" />
            </button>
            <h1>Logo</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Logo;
