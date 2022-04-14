import React from "react";
import channelItems from "../json/channelItems";
export default function ChannelItem() {
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
        LIVE CHANNEL
      </p>
      {channelItems.map((item) => {
        return (
          <div className="flex flex-row border-b-2 border-b-[black] w-[100%] h-[15%]">
            <img
              src={item.img}
              alt="News"
              className="flex w-[100px] h-[50px] ml-10"
            ></img>
            <div className="flex ml-10 flex-col">
              <p className="text-white text-lg">{item.name} </p>
              <p className="text-white text-sm">{item.Songer} </p>
            </div>
          </div>
        );
      })}

    
    </div>
  );
}
