import React from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import pentagon from "../images/bg-pentagon.svg";
import papper from "../images/icon-paper.svg";
import scissors from "../images/icon-scissors.svg";
import rock from "../images/icon-rock.svg";
import lizard from "../images/icon-lizard.svg";
import spock from "../images/icon-spock.svg";

import "./advanced-intro.css";

const AdvancedIntro = ({ score, setMyPick }) => {
  const handlePick = (e) => {
    setMyPick(e.target.id);
  };

  return (
    <div className="advanced-intro">
      <Header score={score} />
      <div className="advanced-intro-buttons">
        <div className="advanced-intro__pentagon">
          <img
            className="advanced-intro__pentagon-img"
            src={pentagon}
            alt="pentagon"
          />
        </div>
        <div className="advanced-intro__three-hands">
          <Link to="/advanced-game">
            <div
              className="advanced-intro__paper-outer-circle"
              onClick={handlePick}
              id="paper"
            >
              <div className="advanced-intro__paper-inner-circle" id="paper">
                <img
                  className="advanced-intro__hands"
                  src={papper}
                  alt="paper"
                  id="paper"
                />
              </div>
            </div>
          </Link>
          <Link to="/advanced-game">
            <div
              className="advanced-intro__scissors-outer-circle"
              onClick={handlePick}
              id="scissors"
            >
              <div
                className="advanced-intro__scissors-inner-circle"
                id="scissors"
              >
                <img
                  className="advanced-intro__hands"
                  src={scissors}
                  alt="scissors"
                  id="scissors"
                />
              </div>
            </div>
          </Link>
          <Link to="/advanced-game">
            <div
              className="advanced-intro__rock-outer-circle"
              onClick={handlePick}
              id="rock"
            >
              <div className="advanced-intro__rock-inner-circle" id="rock">
                <img
                  className="advanced-intro__hands"
                  src={rock}
                  alt="rock"
                  id="rock"
                />
              </div>
            </div>
          </Link>
          <Link to="/advanced-game">
            <div
              className="advanced-intro__lizard-outer-circle"
              onClick={handlePick}
              id="lizard"
            >
              <div className="advanced-intro__lizard-inner-circle" id="lizard">
                <img
                  className="advanced-intro__hands"
                  src={lizard}
                  alt="lizard"
                  id="lizard"
                />
              </div>
            </div>
          </Link>
          <Link to="/advanced-game">
            <div
              className="advanced-intro__spock-outer-circle"
              onClick={handlePick}
              id="spock"
            >
              <div className="advanced-intro__spock-inner-circle" id="spock">
                <img
                  className="advanced-intro__hands"
                  src={spock}
                  alt="spock"
                  id="spock"
                />
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AdvancedIntro;
