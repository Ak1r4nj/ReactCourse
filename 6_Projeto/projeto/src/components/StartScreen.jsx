import style from './StartScreen.module.css'
import React from 'react'

const StartScreen = ({startGame}) => {
  return (
    <div className= {style.start}>
      <h1>Adivinhe a Palavra!</h1>
      <p>Clique para iniciar</p>
      <button onClick = {startGame} >Começar!</button>
    </div>
  )
}

export default StartScreen