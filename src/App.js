import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Intro from "./components/Intro";
import Game from "./components/Game";
import AdvancedGame from "./components/AdvancedGame";
import AdvancedIntro from "./components/AdvancedIntro";
import RulesImage from "./images/image-rules.svg";
import close from "./images/icon-close.svg";

import "./App.css";

const App = () => {
  const [score, setScore] = useState(0);
  const [myPick, setMyPick] = useState("");
  const [showRules, setShowRules] = useState(false);
  const [changeMode, setChangeMode] = useState("regular");

  const toggleRules = () => {
    setShowRules((prevShowRules) => !prevShowRules);
  };

  const toggleMode = () => {
    setChangeMode((prevMode) =>
      prevMode === "regular" ? "advanced" : "regular"
    );
  };

  return (
    <div className="app_main">
      <BrowserRouter>
        <Routes>
          {changeMode === "regular" ? (
            <>
              <Route
                path="/"
                element={<Intro score={score} setMyPick={setMyPick} />}
              />
              <Route
                path="/game"
                element={
                  <Game myPick={myPick} score={score} setScore={setScore} />
                }
              />
            </>
          ) : (
            <>
              <Route
                path="/"
                element={<AdvancedIntro score={score} setMyPick={setMyPick} />}
              />
              <Route
                path="/advanced-game"
                element={
                  <AdvancedGame myPick={myPick} score={score} setScore={setScore} />
                }
              />
            </>
          )}
        </Routes>
      </BrowserRouter>
      <footer className="app_main-footer">
        <div className="app_main-footer-choose-mode" onClick={toggleMode}>
          {changeMode}
        </div>
        <div className="app_main-footer-rules">
          <button onClick={toggleRules}>RULES</button>
        </div>
      </footer>
      {showRules && (
        <div className="app_main-rules">
          <div className="app_main-header">
            <h3 className="app_main-title">RULES</h3>
            <img
              className="app_main-close-button"
              onClick={toggleRules}
              src={close}
              alt="close"
            />
          </div>
          <img className="app_main-rules-image" src={RulesImage} alt="Rules" />
        </div>
      )}
    </div>
  );
};

export default App;
