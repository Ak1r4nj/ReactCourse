import React from 'react'

const RenderDesafio = ({nome, idade, profissao}) => {
  return (
    <div>
        <h2>{nome}</h2>
        <p>Idade: {idade}</p>
        <p>Profissão: {profissao}</p>

        {idade >= 18 ? <p>Pode tirar a carteira de motorista</p>: <p>Não pode tirar a carteira de motorista</p>}
    </div>
  )
}

export default RenderDesafio