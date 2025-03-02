import React, { useState } from "react";
import { Link } from "react-router-dom";
import Wrapper from "../../assets/wrappers/Slidebar";
import { FaFacebook, FaLinkedin, FaTwitter, FaTimes } from "react-icons/fa";
import { IoMdArrowDropup, IoMdArrowDropdown } from "react-icons/io";

const Slidebar = ({ isSidebarOpen, closeSidebar }) => {
  const [sidebarsolution, setSidebarsolution] = useState(false);

  return (
    <Wrapper className={isSidebarOpen ? "show-sidebar" : ""}>
      <div className="sidebar">
        <button onClick={closeSidebar} className="close-btn">
          <FaTimes />
        </button>

        <ul className="sidebar-links">
          <li>
            <Link to="/" onClick={closeSidebar}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/what-we-do" onClick={closeSidebar}>
              What we do?
            </Link>
          </li>
          <li>
            <Link to="/why" onClick={closeSidebar}>
              Why
            </Link>
          </li>
          <li>
            <button
              className="slidebar-solutions-btn"
              onClick={() => setSidebarsolution(!sidebarsolution)}
            >
              Solutions{" "}
              {sidebarsolution ? <IoMdArrowDropup /> : <IoMdArrowDropdown />}
            </button>

            <div
              className={`sidebar-solutions ${
                sidebarsolution ? "sidebar-solutions-show" : ""
              }`}
            >
              <ul>
                <li>
                  <Link to="/solutions/individuals" onClick={closeSidebar}>
                    Individuals
                  </Link>
                </li>
                <li>
                  <Link to="/solutions/organizations" onClick={closeSidebar}>
                    Organizations
                  </Link>
                </li>
              </ul>
            </div>
          </li>
          <li>
            <Link to="/contact" onClick={closeSidebar}>
              Contact
            </Link>
          </li>
        </ul>

        <ul className="social-icons">
          <li>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter />
            </a>
          </li>
          <li>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook />
            </a>
          </li>
          <li>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>
          </li>
        </ul>
      </div>
    </Wrapper>
  );
};

export default Slidebar;
