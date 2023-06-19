import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Intro from "./components/Intro";
import Game from "./components/Game";

import "./App.css";

const App = () => {
  const [score, setScore] = useState(0);
  const [myPick, setMyPick] = useState("");

  // console.log("myPick: ", myPick)

  return (
    <div className="app_main">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Intro score={score} setMyPick={setMyPick} />} />
          <Route path="/game" element={<Game myPick={myPick} score={score} setScore={setScore} />} />
        </Routes>
      </BrowserRouter>
      <footer className="app_main-footer">
        <div className="app_main-footer-choose-mode">Mode</div>
        <div className="app_main-footer-rules">Rules</div>
      </footer>
    </div>
  );
};

export default App;
