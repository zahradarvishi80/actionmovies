import React from "react";
import FADashboard from "../json/FADashboard";
export default function ButtonFA() {
  return (
    <div className="absolute flex justify-center flex-wrap w-[900px] h-[400px] mt-[10%]">
      {FADashboard.map((item) => {
        return (
          <div className="flex m-2 w-[130px] h-[130px] justify-center justify-items-center items-center rounded bg-white opacity-75 flex-wrap">
            <div className="w-10 h-10 flex ">
              <img alt="icon" src={item.icon}></img>
            </div>
            <p
              style={{ fontFamily: "Bold" }}
              className="text-black text-lg text-center mt-4 w-[130px] h-[130px]"
            >
              {item.Object}
            </p>
          </div>
        );
      })}
    </div>
  );
}
