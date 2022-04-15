import React from "react";
import JokerMovies from "../json/JokerMovies";
import DanMovies from "../json/DanMovies";
export default function Serial() {
  return (
    <div className="flex flex-col w-[60%] h-[100%] justify-end flex-wrap ">
      <div className="flex w-[100%] h-[60%] flex-row  flex-wrap">
        <div className="flex w-[60%]  justify-center justify-items-center items-center h-[100%] flex-wrap">
          {DanMovies.map((item) => {
            return (
              <div className="flex w-[45%] h-[43%]">
                <img
                  alt="No enternet"
                  className="flex rounded-lg m-5 shadow-2xl"
                  src={item.img}
                ></img>
              </div>
            );
          })}
        </div>
        <div className="flex w-[40%]  justify-center justify-items-center items-center h-[100%] flex-wrap">
          {JokerMovies.map((item) => {
            return (
              <div className="flex w-[40%] h-[50%]">
                <img
                  alt="No enternet"
                  className="flex  rounded-lg shadow-3xl"
                  src={item.img}
                ></img>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
