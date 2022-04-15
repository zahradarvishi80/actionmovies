import React from "react";
import { MdPersonSearch } from "react-icons/md";
import "./Css/Modal.css";
import images from "./assets/imgback.jpg";
export default function Modal(props) {
  return (
    <div className="modal">
      <div className="flex w-[370px] flex-col h-[400px] bg-white  rounded-lg">
        <div className="flex w-[370px]  justify-center  h-[150px]">
          <img
            className="flex w-[370px]"
            src="https://wallpapercave.com/uwp/uwp2030797.jpeg"
          />
          <p
            style={{ fontFamily: "Bold" }}
            className="flex  absolute text-white mt-10"
          >
            {" "}
            LOGIN
          </p>
          <p
            style={{ fontFamily: "Bold" }}
            className="flex  absolute text-white mt-16"
          >
            {" "}
            please insert username and password
          </p>
        </div>
        <div className="flex w-[370px] flex-col justify-items-center  items-center h-[250px]">
          <input
            placeholder="  UserName"
            type="text"
            className="flex w-[320px] mt-2 h-[40px] rounded-full border-2 border-gray-400"
          />
          <input
            placeholder="  Password"
            type="password"
            className="flex w-[320px] mt-2 h-[40px] rounded-full border-2 border-gray-400"
          />
        </div>
        <div className="flex w-[370px] flex-col justify-items-center  items-center h-[250px]">
          <button
            onClick={props.hide}
            className="flex w-[320px] flex-row mt-2 h-[40px] rounded-full bg-[#EE0568]"
          >
            <MdPersonSearch size={30} color="white" className="ml-32" />
            <p
              style={{ fontFamily: "Bold" }}
              className="text-white text-lg mt-1"
            >
              {" "}
              Login
            </p>
          </button>{" "}
        </div>
        {/* */}

        <div className="flex flex-row mb-7">
          {" "}
          <MdPersonSearch size={30} color="black" className="ml-28" />
          <p style={{ fontFamily: "Bold" }} className="text-base mt-2">
            {" "}
            create new account{" "}
          </p>
        </div>
      </div>
    </div>
  );
}
