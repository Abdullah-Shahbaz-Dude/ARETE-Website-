import React from "react";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "../Organizations/CSS/ScrollOrganization.css";

const ScrollOrganization = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const sections = [
    {
      id: 1,
      title: "First Benefit",
      text: "Description of first benefit",
      img: "image1.jpg",
    },
    {
      id: 2,
      title: "Second Benefit",
      text: "Description of second benefit",
      img: "image2.jpg",
    },
    {
      id: 3,
      title: "Third Benefit",
      text: "Description of third benefit",
      img: "image3.jpg",
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const sectionHeight = window.innerHeight * 0.8; // Adjust threshold as needed

      const newIndex = Math.min(
        Math.floor(scrollY / sectionHeight),
        sections.length - 1
      );

      setActiveIndex(newIndex);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="scroll-container">
      {sections.map((section, index) => (
        <motion.div
          key={section.id}
          initial={{ opacity: 0, y: 50 }}
          animate={{
            opacity: activeIndex >= index ? 1 : 0.2,
            y: activeIndex >= index ? 0 : 50,
          }}
          transition={{ duration: 0.5 }}
          className="scroll-section"
        >
          <div className="text-content">
            <h2>{section.title}</h2>
            <p>{section.text}</p>
          </div>
          <div className="image-content">
            <img src={section.img} alt={section.title} />
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default ScrollOrganization;
