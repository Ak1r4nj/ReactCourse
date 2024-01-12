import React from 'react'

const GameOver = ({retry}) => {
  return (
    <div>
      <p>Recomeçar</p>
      <button onClick = {retry} >Recomeçar!</button>
    </div>
  )
}

export default GameOver