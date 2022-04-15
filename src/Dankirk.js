import React from "react";
import MovieDankirk from "./components/MovieDankirk";
import Serial from "./components/Serial";
export default function Dankirk() {
  return (
    <div className="flex flex-row  w-max-[700px] h-screen justify-center items-center">
      <img
        className="w-[100%] h-[100%]"
        alt="war"
        src="https://media.glamour.com/photos/5e86230e6ad35c0008cb76fc/master/w_1600%2Cc_limit/MCDMAMA_EC193.jpg"
      />
      <div className="flex flex-row w-[100%] h-[100%] absolute ">
        <MovieDankirk />
        <Serial />
      </div>
    </div>
  );
}
