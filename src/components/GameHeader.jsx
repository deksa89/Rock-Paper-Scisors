import React from "react";
import { AnimateSharedLayout, motion } from "framer-motion";

import "./header.css";

const GameHeader = ({ advanced, score }) => {
  return (
    <div className="plain-game__header">
      <div className="plain-game__game-name">
        <p className="plain-game__game-title">ROCK</p>
        <p className="plain-game__game-title">PAPER</p>
        <p className="plain-game__game-title">SCISSORS</p>
      </div>
      <div className="plain-game__results">
        <h3>Score: </h3>
      </div>
    </div>
  );
};

export default GameHeader;
