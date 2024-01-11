import React from 'react'
import { useState } from 'react'

const ManageData = () => {

    const [number, setNumber] = useState(0);

  return (
    <div>
        <p>Valor Data: {number}</p>
        <button onClick={() => setNumber(number + 1)}>Incrementar</button>
    </div>

  )
}

export default ManageData