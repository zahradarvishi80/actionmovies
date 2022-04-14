import React from "react";
import MovieItems from "../json/MovieItems";
import Slider from "react-slick";
import SampleNextArrow from "./SampleNextArrow";
import SamplePrevArrow from "./SamplePrevArrow";
export default function SlickSlider() {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 7,
    slidesToScroll: 3,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 5000,
    cssEase: "linear",
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <div className="w-[97%] -mt-[140px]">
      <Slider {...settings}>
        {MovieItems.map((item) => {
          return (
            <div className="flex parent  transition hover:-translate-y-1 hover:scale-110  duration-600">
              <img
                src={item.img}
                alt="itemsMovie"
                className="flex w-[80%] rounded h-[200px] transition hover:-translate-y-1 hover:scale-110  duration-600"
              ></img>
            </div>
          );
        })}
      </Slider>
    </div>
  );
}
