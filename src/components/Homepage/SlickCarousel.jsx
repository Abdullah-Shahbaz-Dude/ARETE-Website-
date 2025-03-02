import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./CSS/SlickCarousel.css";
import { slider } from "../data";

import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const SlickCarousel = () => {
  var settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500,
    responsive: [
      {
        breakpoint: 768, // When screen width is 768px or smaller
        settings: {
          slidesToShow: 1, // Show only 1 slide
          centerMode: false, // Disable center mode for better mobile view
          centerPadding: "0px", // Remove padding to avoid cut-off edges
        },
      },
    ],
  };

  return (
    <section className="slick-carousel-container">
      <Slider {...settings}>
        {slider.map((slide) => {
          const { id, img, text } = slide;
          return (
            <article className="slides-container" key={id}>
              <div className="slides-content-container">
                <div className="slides-images">
                  <img className="slides-img" src={img} alt="Your Image" />
                </div>
                <div className="slides-text">{text}</div>
                <button className="slick-coursel-btn">Read More</button>
              </div>
            </article>
          );
        })}
      </Slider>
    </section>
  );
};

export default SlickCarousel;
