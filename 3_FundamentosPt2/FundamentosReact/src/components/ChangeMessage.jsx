import React from 'react'

const ChangeMessage = ({handleMessage}) => {

    const messages = ["Mensagem 1", "Mensagem 2", "Mensagem 3", "Mensagem 4", "Mensagem 5"]
  return (
    <div>
        <button onClick={() => handleMessage(messages[0])}> 1</button>
        <button onClick={() => handleMessage(messages[1])}> 2</button>
        <button onClick={() => handleMessage(messages[2])}> 3</button>
        <button onClick={() => handleMessage(messages[3])}> 4</button>
        <button onClick={() => handleMessage(messages[4])}> 5</button>
    </div>
  )
}

export default ChangeMessage