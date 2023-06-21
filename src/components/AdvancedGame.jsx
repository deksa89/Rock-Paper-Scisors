import React, { useEffect, useState, useCallback } from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import paper from "../images/icon-paper.svg";
import scissors from "../images/icon-scissors.svg";
import rock from "../images/icon-rock.svg";
import lizard from "../images/icon-lizard.svg"
import spock from "../images/icon-spock.svg"

import "./advanced-game.css";

const AdvancedGame = ({ myPick, score, setScore, changeMode }) => {
  const [gamePick, setGamePick] = useState("");
  const [result, setResult] = useState("");

  const getRandomChoice = useCallback(() => {
    const choices = ["paper", "scissors", "rock", "lizard", "spock"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    setGamePick(choices[randomIndex]);
  }, []);

  useEffect(() => {
    getRandomChoice();
  }, [getRandomChoice]);

  useEffect(() => {
    const calculateResult = () => {
      if (myPick === "rock" && gamePick === "scissors") {
        setResult("win");
        setScore((prevScore) => prevScore + 1);
      } else if (myPick === "paper" && gamePick === "rock") {
        setResult("win");
        setScore((prevScore) => prevScore + 1);
      } else if (myPick === "scissors" && gamePick === "paper") {
        setResult("win");
        setScore((prevScore) => prevScore + 1);
      } else if (myPick === "rock" && gamePick === "lizard") {
        setResult("win");
        setScore((prevScore) => prevScore + 1);
      } else if (myPick === "lizard" && gamePick === "spock") {
        setResult("win");
        setScore((prevScore) => prevScore + 1);
      } else if (myPick === "spock" && gamePick === "scissors") {
        setResult("win");
        setScore((prevScore) => prevScore + 1);
      } else if (myPick === "scissors" && gamePick === "lizard") {
        setResult("win");
        setScore((prevScore) => prevScore + 1);
      } else if (myPick === "lizard" && gamePick === "paper") {
        setResult("win");
        setScore((prevScore) => prevScore + 1);
      } else if (myPick === "paper" && gamePick === "spock") {
        setResult("win");
        setScore((prevScore) => prevScore + 1);
      } else if (myPick === "spock" && gamePick === "rock") {
        setResult("win");
        setScore((prevScore) => prevScore + 1);
      } else if (myPick === "scissors" && gamePick === "rock") {
        setResult("lose");
        setScore((prevScore) => prevScore - 1);
      } else if (myPick === "rock" && gamePick === "paper") {
        setResult("lose");
        setScore((prevScore) => prevScore - 1);
      } else if (myPick === "paper" && gamePick === "scissors") {
        setResult("lose");
        setScore((prevScore) => prevScore - 1);
      } else if (myPick === "lizard" && gamePick === "rock") {
        setResult("lose");
        setScore((prevScore) => prevScore - 1);
      } else if (myPick === "spock" && gamePick === "lizard") {
        setResult("lose");
        setScore((prevScore) => prevScore - 1);
      } else if (myPick === "scissors" && gamePick === "spock") {
        setResult("lose");
        setScore((prevScore) => prevScore - 1);
      } else if (myPick === "lizard" && gamePick === "scissors") {
        setResult("lose");
        setScore((prevScore) => prevScore - 1);
      } else if (myPick === "paper" && gamePick === "lizard") {
        setResult("lose");
        setScore((prevScore) => prevScore - 1);
      } else if (myPick === "spock" && gamePick === "paper") {
        setResult("lose");
        setScore((prevScore) => prevScore - 1);
      } else if (myPick === "rock" && gamePick === "spock") {
        setResult("lose");
        setScore((prevScore) => prevScore - 1);
      } else {
        setResult("draw");
      }
    };

    calculateResult();
  }, [gamePick, myPick, setScore]);

  return (
    <div className="advanced-game__game">
      <Header score={score} />
      {result !== 'draw' ? (
        <h1 className="advanced-game__result-title">You {result}</h1>
      ) : (
        <h1 className="advanced-game__result-title">Draw</h1>
      )}
      <div className="advanced-game__result">

        <div className="advanced-game__pick">
          <h1>YOU PICKED</h1>
          <div className={`advanced-game__${myPick}-outer-circle`} >
            <div className= {`advanced-game__${myPick}-inner-circle`}>
              <img className="advanced-game__hands" src={myPick === 'rock' ? rock : myPick === 'scissors' ? scissors : myPick === 'paper' ? paper : myPick === "lizard" ? lizard : spock} alt={myPick}  />
            </div>
          </div>
        </div>

        <div className="advanced-game__pick">
          <h1>HOUSE PICKED</h1>
          <div className={`advanced-game__${gamePick}-outer-circle`} >
            <div className= {`advanced-game__${gamePick}-inner-circle`}>
              <img className="advanced-game__hands" src={gamePick === 'rock' ? rock : gamePick === 'scissors' ? scissors : gamePick === "paper" ? paper : gamePick === "lizard" ? lizard : spock} alt={gamePick}  />
            </div>
          </div>
        </div>
      </div>

      <Link to="/" className="advanced-game__go-back-button">Play Again</Link>
    </div>
  );
};

export default AdvancedGame;


