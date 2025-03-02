import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { solutions } from "../data"; // Import your solutions array
import "./CSS/Dropdown.css";

const Dropdown = ({ closeDropDown }) => {
  useEffect(() => {
    const handleScroll = () => {
      closeDropDown(); // Close dropdown when scrolling
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [closeDropDown]);

  return (
    <ul className="dropdown-container" onMouseLeave={closeDropDown}>
      {solutions.map(({ id, title, path, cName }) => (
        <li key={id}>
          <Link to={path} className={cName}>
            {title}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Dropdown;
