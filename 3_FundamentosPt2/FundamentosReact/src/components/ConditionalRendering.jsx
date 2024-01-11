import React, { useState } from 'react'

const ConditionalRendering = () => {

  const [x] = useState(true)

  return (
    <div>
      { x && <h1>Imprimindo pq X é true</h1>}

      { x === true ? (
      <h1>
        Imprimindo pq X é true
      </h1>) : (
      <h1>
        Imprimindo pq X é false
      </h1>
      )}
    </div>
  )
}

export default ConditionalRendering