import React, { useEffect, useState } from 'react'

import './game.css'
import { Link } from 'react-router-dom'

const Game = ({myPick, score, setScore}) => {
  
  const [gamePick, setGamePick] = useState("")
  const [result, setResult] = useState("")

  const getRandomChoice = () => {
    const choices = ["paper", "scissors", "rock"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    setGamePick(choices[randomIndex]);
  }

  useEffect(() => {
    getRandomChoice()
  }, [])

  const Result = () => {
    if (myPick === "rock" && gamePick === "scissors") {
      setResult("win")
      setScore(score + 1)
    } else if (myPick === "paper" && gamePick === "rock") {
      setResult("win")
      setScore(score + 1)
    } else if (myPick === "scissors" && gamePick === "paper") {
      setResult("win")
      setScore(score + 1)
    } else if (myPick === "scissors" && gamePick === "rock") {
      setResult("lose")
      setScore(score - 1)
    } else if (myPick === "rock" && gamePick === "paper") {
      setResult("lose")
      setScore(score - 1)
    } else if (myPick === "paper" && gamePick === "scissors") {
      setResult("lose")
      setScore(score - 1)
    } else {
      setResult("draw")
    }
  }

  useEffect(() => {
    Result()
  }, [gamePick])


  return (
    <div>
      <h3>JA: {myPick}</h3>
      <p>-------------</p>
      <h3>IGRA: {gamePick}</h3>
      <p>-------------</p>
      <h3>{result}</h3>
      <p>-------------</p>
      <h3>{score}</h3>
      <p>-------------</p>
      <Link to="/">
        Play Again
      </Link>
    </div>
  )
}

export default Game