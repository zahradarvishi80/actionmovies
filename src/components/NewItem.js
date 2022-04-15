import React from "react";
import NewsItems from "../json/NewsItems";
export default function NewItem() {
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
      News{" "}
      </p>
      {NewsItems.map((item) => {
        return (
          <div className="flex flex-row border-b-2 border-b-[white] w-[100%] h-[15%]">
            <img
              src={item.img}
              alt="channel"
              className="flex w-[100px] h-[60px] ml-10"
            ></img>
            <div className="flex ml-10 flex-col">
              <p className="text-white text-sm">{item.name} </p>
              <p className="text-white text-sm mt-5">{item.country} </p>
            </div>
          </div>
        );
      })}
      {/* <p className="flex text-[#FF006C]">See more</p> */}
    </div>
  );
}
