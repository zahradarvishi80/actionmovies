import React, { useState } from "react";
import ButtonFA from "./components/ButtonFA";
import ButtonEN from "./components/ButtonEN";

export default function DashBoard() {
  const [background1, setbackground1] = useState("white");
  const [background2, setbackground2] = useState("black");
  const [touch, setTouch] = useState(1);
  const onPress1 = () => {
    setTouch(0);
    setbackground1("white");
    setbackground2("black");
  };
  const onPress2 = () => {
    setTouch(1);
    setbackground1("black");
    setbackground2("white");
  };
  return (
    <div className="flex justify-center">
      <img
        className="flex w-[100%] h-screen"
        alt="background"
        src="https://as2.ftcdn.net/v2/jpg/04/38/61/23/1000_F_438612360_b4DYsqenyTUmkjrbMqakC75fEpI6X5Az.jpg"
      ></img>

      <div className="w-[30%] h-[7%] flex absolute flex-row mt-[5%] shadow-xl">
        <button
          onClick={() => onPress1()}
          style={{ backgroundColor: background1 }}
          className="w-[50%] h-[100%] rounded flex opacity-60 justify-center items-center justify-items-center"
        >
          <p
            style={{
              fontFamily: "ExtraBold",
              fontSize: 25,
              textAlign: "center",
              color: background2,
            }}
          >
            FA
          </p>
        </button>
        <button
          onClick={() => onPress2()}
          style={{ backgroundColor: background2 }}
          className="w-[50%] h-[100%] rounded opacity-60 flex justify-center items-center justify-items-center"
        >
          <p
            style={{
              fontFamily: "ExtraBold",
              fontSize: 25,
              textAlign: "center",
              color: background1,
            }}
          >
            EN
          </p>
        </button>
      </div>
      {touch === 0 ? <ButtonFA /> : <ButtonEN />}
    </div>
  );
}
