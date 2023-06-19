import React from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import triangle from "../images/bg-triangle.svg";
import papper from "../images/icon-paper.svg";
import scissor from "../images/icon-scissors.svg";
import rock from "../images/icon-rock.svg";

import "./plain_game.css";

const Intro = ({ score, setMyPick }) => {

  const handlePick = (e) => {
    // console.log("e: ", e.target.id)
    setMyPick(e.target.id)
  }

  return (
    <div className="plain-game">
      <Header score={score} />
      <div className="plain-game-buttons">
        <div className="plain-game__triangle">
          <img
            className="plain-game__triangle-img"
            src={triangle}
            alt="triangle"
          />
        </div>
        <div className="plain-game__three-hands">
          <Link to="/game">
            <div 
              className="plain-game__paper-outer-circle" 
              onClick={handlePick}
              id="paper"
            >
              <div className="plain-game__paper-inner-circle" id="paper">
                <img 
                  className="plain-game__hands" 
                  src={papper} 
                  alt="paper"
                  id="paper"
                />
              </div>
            </div>
          </Link>
          <Link to="/game">
            <div
              className="plain-game__scissor-outer-circle"
              onClick={handlePick}
              id="scissors"
            >
              <div className="plain-game__scissor-inner-circle" id="scissors">
                <img
                  className="plain-game__hands"
                  src={scissor}
                  alt="scissor"
                  id="scissors"
                />
              </div>
            </div>
          </Link>
          <Link to="/game">
            <div 
              className="plain-game__rock-outer-circle" 
              onClick={handlePick}
              id="rock"
            >
              <div className="plain-game__rock-inner-circle" id="rock">
                <img 
                  className="plain-game__hands" 
                  src={rock} 
                  alt="rock" 
                  id="rock"
                />
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Intro;
