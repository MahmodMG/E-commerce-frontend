import React, { useEffect, useState } from "react";
import axios from "axios";
import { baseUrl } from "../../utils/baseUrl";
import Slider from "react-slick";

export default function CategorySlider() {
  const [categories, setCategories] = useState([]);
  const getAllCategories = async () => {
    let { data } = await axios.get(`${baseUrl}/category`);
    // console.log(data);
    setCategories(data.result);
  };

  useEffect(() => {
    getAllCategories();
  }, []);
  let settings = {
    // dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 5,
    slidesToScroll: 5,
    arrows: false,
    autoplay: true,
  };
  return (
    <>
      <div className="my-5 container">
        <h3>shop popular categories</h3>
        <Slider {...settings} autoplaySpeed={3000}>
          {categories.map((item) => {
            return (
              <div key={item._id}>
                <img src={item.image} className="w-100" alt="" />
                <h6>{item.name}</h6>
              </div>
            );
          })}
        </Slider>
      </div>
    </>
  );
}
