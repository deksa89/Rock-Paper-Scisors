import React from "react";
import triangle from "../images/bg-triangle.svg";
import papper from "../images/icon-paper.svg";
import scissor from "../images/icon-scissors.svg";
import rock from "../images/icon-rock.svg";

import "./plain_game.css";

const PlainGame = () => {
  return (
    <div className="plain-game">
      <div className="plain-game-buttons">
        <div className="plain-game__triangle">
          <img
            className="plain-game__triangle-img"
            src={triangle}
            alt="triangle"
          />
        </div>
        <div className="plain-game__three-hands">
          <div className="plain-game__paper-outer-circle">
            <div className="plain-game__paper-inner-circle">
              <img className="plain-game__hands" src={papper} alt="papper" />
            </div>
          </div>
          <div className="plain-game__scissor-outer-circle">
            <div className="plain-game__scissor-inner-circle">
              <img className="plain-game__hands" src={scissor} alt="scissor" />
            </div>
          </div>
          <div className="plain-game__rock-outer-circle">
            <div className="plain-game__rock-inner-circle">
              <img className="plain-game__hands" src={rock} alt="rock" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlainGame;
