import { useState, useEffect, useCallback } from 'react'
import './App.css'
import StartScreen from './components/StartScreen'
import {wordsList} from './data/words'
import Game from './components/Game'
import GameOver from './components/GameOver'

const stages = [
  {id: 1 , name: 'start'},
  {id: 2 , name: 'game'},
  {id: 3 , name: 'end'},
]

function App() {
  const [gameStage, setGameStage] = useState(stages[0].name)
  const [words] = useState(wordsList)

  const [pickedWord, setPickedWord] = useState('')
  const [pickedCategory, setPickedCategory] = useState ('')
  const [letters, setLetters] = useState ([])

  const [guessedLetters, setGuessedLetters] = useState([])
  const [wrongLetter, setWrongLetters] = useState([])
  const [points, setPoints] = useState(0)
  const [chances, setChances] = useState(5)

  
  const startGame = () =>{
    const {word, category} = getRandomWord() // pega uma palavra aleatória
    
    let wordLetters = word.split('') // separa a palavra em letras
    wordLetters = wordLetters.map((letter) => letter.toLowerCase())
    
    setPickedWord(word)
    setPickedCategory(category)
    setLetters(wordLetters)
    setGameStage(stages[1].name)
  }
  
  //verificar input
  const verifyLetter = () => {
    setGameStage(stages[2].name)
  }
  
  const retry = () => {
    setGameStage(stages[0].name)
  }
  
  const getRandomWord = () => {
    
    const categories = Object.keys(words)
    const category = categories[Math.floor(Math.random() * categories.length)]
    
    const word = words[category][Math.floor(Math.random() * words[category].length)]
    
    return {word, category}
  }
  
  return (
    <>
      <div className='App'>
        {gameStage === 'start' && <StartScreen startGame = {startGame}/>}
        {gameStage === 'game' &&  <Game 
        verifyLetter = {verifyLetter} 
        pickedWord = {pickedWord} 
        pickedCategory = {pickedCategory} 
        letters = {letters} 
        guessedLetters = {guessedLetters}
        wrongLetter = {wrongLetter}
        point = {points} 
        chances = {chances}/>}
        {gameStage === 'end' && <GameOver retry = {retry}/>}
      </div>
    </>
  )
}

export default App
