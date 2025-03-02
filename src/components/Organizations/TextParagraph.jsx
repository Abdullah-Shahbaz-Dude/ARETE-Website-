import React from "react";
import "./CSS/TextParagraph.css";

const TextParagraph = ({ text, paragraph }) => {
  return (
    <>
      <div className="text-paragraph-container">
        <div className="text-paragraph-left">
          <h2>{text}</h2>
        </div>
        <div className="text-paragraph-right">{paragraph}</div>
      </div>
    </>
  );
};

export default TextParagraph;
