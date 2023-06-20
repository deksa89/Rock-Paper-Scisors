import React from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import triangle from "../images/bg-triangle.svg";
import papper from "../images/icon-paper.svg";
import scissors from "../images/icon-scissors.svg";
import rock from "../images/icon-rock.svg";

import "./intro.css";

const Intro = ({ score, setMyPick, changeMode }) => {
  const handlePick = (e) => {
    setMyPick(e.target.id);
  };

  return (
    <div className="intro">
      <Header score={score} changeMode={changeMode} />
      <div className="intro-buttons">
        <div className="intro__triangle">
          <img
            className="intro__triangle-img"
            src={triangle}
            alt="triangle"
          />
        </div>
        <div className="intro__three-hands">
          <Link to="/game">
            <div
              className="intro__paper-outer-circle"
              onClick={handlePick}
              id="paper"
            >
              <div className="intro__paper-inner-circle" id="paper">
                <img
                  className="intro__hands"
                  src={papper}
                  alt="paper"
                  id="paper"
                />
              </div>
            </div>
          </Link>
          <Link to="/game">
            <div
              className="intro__scissors-outer-circle"
              onClick={handlePick}
              id="scissors"
            >
              <div className="intro__scissors-inner-circle" id="scissors">
                <img
                  className="intro__hands"
                  src={scissors}
                  alt="scissors"
                  id="scissors"
                />
              </div>
            </div>
          </Link>
          <Link to="/game">
            <div
              className="intro__rock-outer-circle"
              onClick={handlePick}
              id="rock"
            >
              <div className="intro__rock-inner-circle" id="rock">
                <img
                  className="intro__hands"
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
