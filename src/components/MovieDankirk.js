import React from "react";

import { AiOutlineMenu } from "react-icons/ai";
// import { GiAlliedStar } from "react-icons/gi";
export default function MovieDankirk() {
  return (
    <div className="flex flex-col  w-[40%] h-[100%]">
      <AiOutlineMenu color="white" size={40} className="absolute ml-5 mt-6" />
      <p
        style={{ fontFamily: "Bold" }}
        className="flex ml-16 mt-8 text-4xl text-white"
      >
        {" "}
        Movie Details
      </p>
      <p
        className="flex mt-[7%] ml-5 text-[100px] text-white shadow-xl"
        style={{ fontFamily: "Bold" }}
      >
        {" "}
        Dankirk{" "}
      </p>
      <p
        className="flex text-[18px] ml-5 -mt-10 text-white"
        style={{ fontFamily: "Bold" }}
      >
        Lorem Ipsum is Simply dummy text od the printing and typeset- ting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s.
      </p>
      <div className="flex flex-row">
        {" "}
        <div className="flex w-24 h-8 absolute rounded-3xl bg-[#EE0568] mt-2 ml-5">
          <p className="flex text-center justify-center items-center justify-items-center ml-5 text-white">
            {" "}
            2h 28m
          </p>
        </div>
        <p
          style={{ fontFamily: "Bold" }}
          className="absolute text-white text-sm mt-6 ml-32"
        >
          Christopher Nolan{" "}
        </p>
      </div>
      <p
        style={{ fontFamily: "Bold" }}
        className="flex absolute text-md text-white mt-[23.5%] ml-5"
      >
        2017 . Action , War
      </p>
      <p
        style={{ fontFamily: "Bold" }}
        className="flex absolute text-2xl text-[#EE0568] mt-[25.6%] ml-5"
      >
        Artist
      </p>
      <p
        className="flex mt-[19%] ml-5 text-[18px] text-white"
        style={{ fontFamily: "Bold" }}
      >
        Lorem Ipsum is Simply dummy text od the printing and typeset- ting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s.
      </p>
      <p
        style={{ fontFamily: "Bold" }}
        className="flex absolute text-2xl text-[#EE0568] mt-[34%] ml-5"
      >
        Summary
      </p>
      <p
        className="flex ml-5 mt-[8%] text-[18px] text-white"
        style={{ fontFamily: "Bold" }}
      >
        {" "}
        Lorem Ipsum is Simply dummy text od the printing and typeset- ting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s. Lorem Ipsum is Simply dummy text od the printing and
        typeset- ting industry. Lorem Ipsum has been the industry's standard
        dummy text ever since the 1500s.
      </p>
    </div>
  );
}
