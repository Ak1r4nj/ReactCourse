import React from 'react'
import { useEffect } from 'react'
import style from './Game.module.css'

const Game = ({verifyLetter, pickedWord, pickedCategory, letters, guessedLetters, point, chances, wrongLetter}) => {

  
  useEffect(() => {
    console.log(letters)
  }, [letters])
  

  return (

    <div>

      <p className = {style.points}>
        <span>Pontos: {point} </span>
      </p>
      <h1>Adivinhe a palavra!</h1>
      <h3 className = {style.tip}>
        A dica é: <span>{pickedCategory}</span>
      </h3>

      <p>Voce ainda tem {chances} chances</p>

      <div className= {style.wordContainer}>
        {letters.map((letter, i) => (
          guessedLetters.includes(letter) ? <span key = {i} className={style.letter}>{letter}</span> : <span key = {i} className={style.blankSquare}></span>
        ))}
      </div>

      <div className= {style.letterContainer}>
        <p>Adivinhe a letra: </p>
        <form>
          <input type = 'text' name = 'letter' maxlenght = "1" required></input>
          <button>Jogar!</button>
        </form>
      </div>

      <div className= {style.wrongLetterContainer}>
        <p>Letras Utilizadas: </p>
        {wrongLetter.map((letter, i ) => {
          <span key = {i} className={style.wrongLetter}>{letter}, </span>
        })}
      </div>

    </div>
  )
}

export default Game