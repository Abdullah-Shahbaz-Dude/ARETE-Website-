import React from "react";
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import "./CSS/Footer.css";

const Fotter = () => {
  return (
    <div className="footer">
      <div className="sub_footer section_padding">
        <div className="sub_footer-links">
          <div className="sub_footer-links-div">
            <h1>Adress</h1>
            <p>+XX (X)XXX-XXX-XXX hi@abcdfghijkl.com</p>
          </div>
          <div className="sub_footer-links-div">
            <h1>Address</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Id labore
              iure quidem tempora animi fugiat perspiciatis facilis,
            </p>
          </div>
          <div className="sub_footer-links-div">
            <h1>Contact</h1>
            <div className="socialmedia">
              <p>
                <img src={<FaFacebook />} alt="facebook" />
              </p>
              <p>
                <img src={<FaSquareXTwitter />} alt="X" />
              </p>
              <p>
                <img src={<FaLinkedin />} alt="Linkdin" />
              </p>
            </div>
          </div>
          <div className="sub_footer-below">
            <div className="sub_footer-copyright">
              <p>@{new Date().getFullYear()}codeInn. All right reserved</p>
            </div>
            <div className="sub_footer-below-links">
              <a href="/terms">
                <div>
                  <p>Terms & Conditions</p>
                </div>
              </a>
              <a href="/privacy">
                <div>
                  <p>Privacy Policy</p>
                </div>
              </a>
              <a href="/security">
                <div>
                  <p>Sequirity</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fotter;
