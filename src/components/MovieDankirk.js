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
        className="flex mt-[8%] ml-5 text-[120px] text-white shadow-xl"
        style={{ fontFamily: "Bold" }}
      >
        {" "}
        Dankirk{" "}
      </p>
      <p
        className="flex text-[25px] ml-5 text-white"
        style={{ fontFamily: "Bold" }}
      >
        Lorem Ipsum is Simply dummy text od the printing and typeset- ting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s.
      </p>
      <div className="flex flex-row">
        {" "}
        <div className="flex w-24 h-8 absolute rounded-3xl bg-[#EE0568] mt-5 ml-5">
          <p className="flex text-center justify-center items-center justify-items-center ml-5 text-white">
            {" "}
            2h 28m
          </p>
        </div>
        <p
          style={{ fontFamily: "Blacck" }}
          className="absolute text-white text-xl mt-7 ml-32"
        >
          Christopher Nolan{" "}
        </p>
      </div>
      <p
        style={{ fontFamily: "Bold" }}
        className="flex absolute text-xl text-white mt-[25%] ml-5"
      >
        2017 . Action , War
      </p>
      <p
        style={{ fontFamily: "ExtraBold" }}
        className="flex absolute text-3xl text-[#EE0568] mt-[27%] ml-5"
      >
        Artist
      </p>
      <p
        className="flex mt-[19%] ml-5 text-[25px] text-white"
        style={{ fontFamily: "Bold" }}
      >
        Lorem Ipsum is Simply dummy text od the printing and typeset- ting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s.
      </p>
      <p
        style={{ fontFamily: "ExtraBold" }}
        className="flex absolute text-3xl text-[#EE0568] mt-[35%] ml-5"
      >
        Summary
      </p>
      <p
        className="flex ml-5 mt-[10%] text-[25px] text-white"
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
