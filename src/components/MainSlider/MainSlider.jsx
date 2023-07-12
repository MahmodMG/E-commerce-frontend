import React from "react";
import Slider from "react-slick";
import Slide1 from "../../images/grocery-banner-2.jpeg";
import Slide2 from "../../images/slider-2.jpeg";
import Slide3 from "../../images/grocery-banner.png";

export default function MainSlider() {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };
  return (
    <>
      <div className="my-3">
        <Slider {...settings}>
          <img src={Slide1} alt="" />
          <img src={Slide2} alt="" />
          <img src={Slide3} alt="" />
        </Slider>
      </div>
    </>
  );
}
