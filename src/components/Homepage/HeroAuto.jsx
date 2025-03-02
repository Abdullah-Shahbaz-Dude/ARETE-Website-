import React, { useRef, useEffect } from "react";
import Slider from "react-slick";
import img_1 from "../../assets/images/HomePage/IMG_7523.jpg";
import img_2 from "../../assets/images/HomePage/IMG_7551.jpg";
import img_3 from "../../assets/images/HomePage/IMG_8207.jpg";
import "./CSS/HeroAuto.css";
import CommingSoon from "../Global Components/CommingSoon";

const HeroAuto = () => {
  const sliderRef = useRef(null);

  useEffect(() => {
    if (sliderRef.current) {
      sliderRef.current.slickPlay();
    }
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    cssEase: "ease-out",
    autoplaySpeed: 10000,
    fade: true,
    pauseOnHover: false,
    arrows: false,
  };

  return (
    <div className="slider-container">
      <div className="global-overlay">
        <h2>Excellence in Mind, Transformation in Action</h2>
        <p>
          Psychology based Consultancy, Coaching & Mentoring for Organisations
          and Individuals
        </p>
      </div>

      <Slider ref={sliderRef} {...settings}>
        <div>
          <img
            className="HeroAuto-images first-slide"
            src={img_1}
            alt="Nature"
            loading="lazy"
          />
        </div>
        <div>
          <img
            className="HeroAuto-images"
            src={img_2}
            alt="Nature"
            loading="lazy"
          />
        </div>
        <div>
          <img
            className="HeroAuto-images"
            src={img_3}
            alt="Nature"
            loading="lazy"
          />
        </div>
      </Slider>
    </div>
  );
};

export default HeroAuto;
