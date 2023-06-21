import React from "react";
// import { AnimateSharedLayout, motion } from "framer-motion";

import "./header.css";

const Header = ({ score, changeMode }) => {

  // console.log("change-mode: ", changeMode)

  return (
    <>
      {changeMode === "regular" ? (
        <div className="intro__header">
          <div className="intro__game-name">
            <p className="intro__game-title">ROCK</p>
            <p className="intro__game-title">PAPER</p>
            <p className="intro__game-title">SCISSORS</p>
          </div>
          <div className="intro__results">
            <h2 className="intro__score-title">Score: </h2>
            <h3 className="intro__score-result">{score}</h3>
          </div>
        </div>
      ) : (
        <div className="intro__header-advanced">
          <div className="intro__game-name-advanced">
            <p className="intro__game-title-advanced">ROCK</p>
            <p className="intro__game-title-advanced">PAPER</p>
            <p className="intro__game-title-advanced">SCISSORS</p>
            <p className="intro__game-title-advanced">LIZARD</p>
            <p className="intro__game-title-advanced">SPOCK</p>
          </div>
          <div className="intro__results-advanced">
            <h2 className="intro__score-title-advanced">Score: </h2>
            <h3 className="intro__score-result-advanced">{score}</h3>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
