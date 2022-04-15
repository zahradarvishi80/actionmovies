import React from "react";
import { Routes, Route } from "react-router-dom";
import DashBoard from "./DashBoard";
import Logan from "./Logan";
import Dankirk from "./Dankirk";
import Modal from "./Modal";
export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Logan />} />
      <Route path="DashBoard" element={<DashBoard />} />
      <Route path="Dankirk" element={<Dankirk />} />
      <Route path="Modal" element={<Modal  />} />
    </Routes>
  );
}
