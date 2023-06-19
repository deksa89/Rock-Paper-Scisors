import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Intro from "./components/Intro";
import Game from "./components/Game";
import RulesImage from "./images/image-rules.svg"
import close from './images/icon-close.svg'

import "./App.css";

const App = () => {
  const [score, setScore] = useState(0);
  const [myPick, setMyPick] = useState("");
  const [showRules, setShowRules] = useState(false); // State to track if rules should be displayed

  const toggleRules = () => {
    setShowRules((prevShowRules) => !prevShowRules);
  };

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
        <div className="app_main-footer-rules">
          <button onClick={toggleRules}>Rules</button>
        </div>
      </footer>
      {showRules && (
        <div className="app_main-rules">
          <div className="app_main-header">
            <h3 className="app_main-title">RULES</h3>
            <img className="app_main-close-button" onClick={toggleRules} src={close} alt="close" />
          </div>
          <img className="app_main-rules-image" src={RulesImage} alt="Rules" />
        </div>
      )}
    </div>
  );
};

export default App;
