import React, { useState } from "react";

import { AiOutlineMenu } from "react-icons/ai";
import { RiMovieLine } from "react-icons/ri";
import MusicItem from "./components/MusicItem";
import ChannelItem from "./components/ChannelItem";
import NewItem from "./components/NewItem";
import SlickSlider from "./components/SlickSlider";
import { Link } from "react-router-dom";
import Modal from "./Modal";

export default function Logan({hide}) {
  const [show,setShow]=useState(false)
 
  const ShowModal=()=>{
    setShow(true)
  }
  return (
    <div className="flex flex-col justify-center justify-items-center items-center">
      <div className="flex max-h-[500px] flex-row">
        <div id="Logan" className="flex absolute flex-row">
    
            <AiOutlineMenu
            onClick={ShowModal}
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
          </p>{" "}
        
        </div>
        {show &&(
          <Modal hide={hide} />
        )}
        <nav>
          <Link to="/Dankirk">
            <p
              style={{ fontFamily: "Bold" }}
              className="flex absolute text-white text-6xl mt-28 ml-10"
            >
              {" "}
              LOGAN{" "}
            </p>{" "}
          </Link>
        </nav>
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
        <nav>
          <Link to="DashBoard">
            <button className="flex w-60 h-8 absolute rounded-3xl bg-[#FF006C] mt-[18%] ml-[40px]">
              <p className="flex text-center justify-center items-center justify-items-center ml-16 mt-1 text-white">
                <RiMovieLine className="flex" />
                WATCH NOW
              </p>
            </button>{" "}
          </Link>
        </nav>
        <img
          src="https://lrmonline.com/wp-content/uploads/2021/04/AOTD-TF_R-1536x810.jpg"
          alt="actionMovies"
        ></img>
      </div>
      <SlickSlider />
      <div className="flex w-[100%] flex-col">
        <div className="flex w-[100%] h-[650px] bg-black -mt-[69px] flex-row">
          <MusicItem />
          <ChannelItem />
          <NewItem />
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
