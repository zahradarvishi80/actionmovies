import MovieItems from "./json/MovieItems";
import React from "react";
import Slider from "react-slick";
import SampleNextArrow from "./components/SampleNextArrow";
import SamplePrevArrow from "./components/SamplePrevArrow";
export default function SimpleSlider1() {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 10,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 5000,
    cssEase: "linear",
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <div className="flex flex-col justify-center justify-items-center items-center">
      <div className="flex max-h-[500px] ">
        <img
          src="https://lrmonline.com/wp-content/uploads/2021/04/AOTD-TF_R-1536x810.jpg"
          alt="actionMovies"
        ></img>
      </div>
      <div className="w-[98%] -mt-[150px] h-screen">
        <Slider {...settings}>
          {MovieItems.map((item) => {
            return (
              <div className="flex parent  transition hover:-translate-y-1 hover:scale-110  duration-1600">
                <img
                  src={item.img}
                  alt="itemsMovie"
                  className="flex w-[95%] rounded h-[180px] transition hover:-translate-y-10 hover:scale-110  duration-1600"
                ></img>
              </div>
            );
          })}
        </Slider>
      </div>
      <style jsx>
        {`
          .parent:hover .child {
            position: absolute;
            display: flex;
          }
        `}
      </style>
    </div>
  );
}
