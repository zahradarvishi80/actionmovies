import MovieItems from "./json/MovieItems";
import React from "react";
import Slider from "react-slick";
import SampleNextArrow from "./components/SampleNextArrow";
import SamplePrevArrow from "./components/SamplePrevArrow";
import { AiOutlineMenu } from "react-icons/ai";
import { RiMovieLine } from "react-icons/ri";
import MusicItems from "./json/MusicItems";
import NewsItems from "./json/NewsItems";
import channelItems from "./json/channelItems";
export default function SimpleSlider1() {
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
    <div className="flex flex-col justify-center justify-items-center items-center">
      <div className="flex max-h-[500px] flex-row">
        <div className="flex absolute flex-row">
          {" "}
          <AiOutlineMenu
            color="white"
            width="20"
            height="20"
            className="absolute ml-5 mt-6"
          />
          <p
            style={{ fontFamily: "Bold" }}
            className="flex absolute text-white text-2xl ml-10 mt-5"
          >
            {" "}
            HOME
          </p>
        </div>

        <p
          style={{ fontFamily: "Bold" }}
          className="flex absolute text-white text-6xl mt-28 ml-10"
        >
          {" "}
          LOGAN{" "}
        </p>
        <div className="flex w-20 h-8 absolute rounded-3xl bg-[#EE0568] mt-[12%] ml-[40px]">
          <p className="flex text-center justify-center items-center justify-items-center ml-3 text-white">
            {" "}
            2h 28m
          </p>
        </div>
        <p
          style={{ fontFamily: "Blacck" }}
          className="absolute text-white text-xl mt-[12%] ml-[130px]"
        >
          Christopher Nolan{" "}
        </p>
        <p
          style={{ fontFamily: "Bold" }}
          className="flex absolute text-white mt-[15%] ml-[100px]"
        >
          2017 . Action , War
        </p>
        <button className="flex w-60 h-8 absolute rounded-3xl bg-[#FF006C] mt-[18%] ml-[40px]">
          <p className="flex text-center justify-center items-center justify-items-center ml-16 mt-1 text-white">
            {" "}
            <RiMovieLine className="flex" />
            WATCH NOW
          </p>
        </button>

        <img
          src="https://lrmonline.com/wp-content/uploads/2021/04/AOTD-TF_R-1536x810.jpg"
          alt="actionMovies"
        ></img>
      </div>
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
      <div className="flex w-[100%] flex-col">
        <div className="flex w-[100%] h-[650px] bg-slate-900 -mt-[69px] flex-row">
          <div className="flex w-[33.3%] h-[550px] justify-between flex-col mt-16">
            <p
              style={{
                fontFamily: "Bold",
                color: "white",
                textAlign: "center",
                fontSize: 30,
              }}
            >
              {" "}
              Music{" "}
            </p>
            {MusicItems.map((item) => {
              return (
                <div className="flex flex-row border-b-2 border-b-[black] w-[100%] h-[15%]">
                  <img
                    src={item.img}
                    alt="adel"
                    className="flex w-[80px] h-[80px] ml-10"
                  ></img>
                  <div className="flex ml-10 flex-col">
                    <p className="text-white text-sm">{item.name} </p>
                    <p className="text-white text-sm mt-5">{item.Songer} </p>
                  </div>
                  <p className="flex ml-[25%] text-white">3:45 </p>
                  {/* <img src={Saat} color="white"></img> */}
                </div>
              );
            })}
            <p className="flex text-center text-[#FF006C]">-----See more </p>
          </div>
          <div className="flex w-[33.3%] h-[550px] justify-between flex-col mt-16">
            <p
              style={{
                fontFamily: "Bold",
                color: "white",
                textAlign: "center",
                fontSize: 30,
              }}
            >
              {" "}
              LIVE CHANNEL{" "}
            </p>
            {channelItems.map((item) => {
              return (
                <div className="flex flex-row border-b-2 border-b-[black] w-[100%] h-[15%]">
                  <img
                    src={item.img}
                    alt="adel"
                    className="flex w-[100px] h-[60px] ml-10"
                  ></img>
                  <div className="flex ml-10 flex-col">
                    <p className="text-white text-sm">{item.name} </p>
                    <p className="text-white text-sm mt-5">{item.country} </p>
                  </div>
                </div>
              );
            })}
            <p className="flex text-[#FF006C]">-----See more</p>
          </div>

          <div className="flex w-[33.3%] h-[550px] justify-between flex-col mt-16">
            <p
              style={{
                fontFamily: "Bold",
                color: "white",
                textAlign: "center",
                fontSize: 30,
              }}
            >
              NEWS
            </p>
            {NewsItems.map((item) => {
              return (
                <div className="flex flex-row border-b-2 border-b-[black] w-[100%] h-[15%]">
                  <img
                    src={item.img}
                    alt="adel"
                    className="flex w-[100px] h-[50px] ml-10"
                  ></img>
                  <div className="flex ml-10 flex-col">
                    <p className="text-white text-lg">{item.name} </p>
                    <p className="text-white text-sm">{item.Songer} </p>
                  </div>
                </div>
              );
            })}

            <p className="flex text-[#FF006C]">-----See more</p>
          </div>
        </div>
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
