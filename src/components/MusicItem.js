import React from "react";
import MusicItems from "../json/MusicItems";
export default function MusicItem() {
  return (
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
          <div className="flex flex-row border-b-2 border-b-[white] w-[100%] h-[15%]">
            <img
              src={item.img}
              alt="Music"
              className="flex w-[80px] h-[80px] ml-10"
            ></img>
            <div className="flex ml-10 flex-col">
              <p className="text-white text-sm">{item.name} </p>
              <p className="text-white text-sm mt-5">{item.Songer} </p>
            </div>
            <p className="flex ml-[25%] text-white">3:45 </p>
       
          </div>
        );
      })}
      {/* <p className="flex text-center text-[#FF006C]">-----See more </p> */}
    </div>
  );
}
