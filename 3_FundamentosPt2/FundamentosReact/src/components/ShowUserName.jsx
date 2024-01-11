import React from 'react'

const ShowUserName = ({ name, age, job}) => {
  return (
    <div>
        <h2>
            {name}
        </h2>

        <p>Idade : {age} Profissão: {job}</p>
    </div>
  )
}

export default ShowUserName