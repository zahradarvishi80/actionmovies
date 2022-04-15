import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import "./Css/tailwind.css";
import "./assets/fonts/Blacck.ttf";
import "./assets/fonts/Bold.ttf";
import "./assets/fonts/ExtraBlack.ttf";
import "./assets/fonts/ExtraBold.ttf";
import "./assets/fonts/Light.ttf";
import "./assets/fonts/Medium.ttf";
import "./assets/fonts/Regular.ttf";
import "./assets/fonts/Thin.ttf";
ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
