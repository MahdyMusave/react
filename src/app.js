import { useEffect, useState } from "react";
import { BrowserRouter, Router, Routes, Route } from "react-router-dom";
import "./app.css";
import Home from "./page/home";
import Connect from "./page/connect";
import About from "./page/about";

const App = () => {
  return (
    <>
      <div className="router-dom">router</div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/connect" element={<Connect />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
export default App;
