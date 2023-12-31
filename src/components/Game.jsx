import React, { useEffect, useState, useCallback } from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import paper from "../images/icon-paper.svg";
import scissors from "../images/icon-scissors.svg";
import rock from "../images/icon-rock.svg";

import "./game.css";

const Game = ({ myPick, score, setScore, changeMode }) => {
  const [gamePick, setGamePick] = useState("");
  const [result, setResult] = useState("");

  const getRandomChoice = useCallback(() => {
    const choices = ["paper", "scissors", "rock"];
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
      } else if (myPick === "scissors" && gamePick === "rock") {
        setResult("lose");
        setScore((prevScore) => prevScore - 1);
      } else if (myPick === "rock" && gamePick === "paper") {
        setResult("lose");
        setScore((prevScore) => prevScore - 1);
      } else if (myPick === "paper" && gamePick === "scissors") {
        setResult("lose");
        setScore((prevScore) => prevScore - 1);
      } else {
        setResult("draw");
      }
    };

    calculateResult();
  }, [gamePick, myPick, setScore]);

  return (
    <div className="game__game">
      <Header score={score} changeMode={changeMode} />
      {result !== 'draw' ? (
        <h1 className="game__result-title">You {result}</h1>
      ) : (
        <h1 className="game__result-title">Draw</h1>
      )}
      <div className="game__result">

        <div className="game__pick">
          <h1>YOU PICKED</h1>
          <div className={`game__${myPick}-outer-circle`} >
            <div className= {`game__${myPick}-inner-circle`}>
              <img className="game__hands" src={myPick === 'rock' ? rock : myPick === 'scissors' ? scissors : paper} alt={myPick}  />
            </div>
          </div>
        </div>

        <div className="game__pick">
          <h1>HOUSE PICKED</h1>
          <div className={`game__${gamePick}-outer-circle`} >
            <div className= {`game__${gamePick}-inner-circle`}>
              <img className="game__hands" src={gamePick === 'rock' ? rock : gamePick === 'scissors' ? scissors : paper} alt={gamePick}  />
            </div>
          </div>
        </div>
      </div>

      <Link to="/Rock-Paper-Scisors" className="game__go-back-button">Play Again</Link>
    </div>
  );
};

export default Game;


