import style from './MyForm.module.css'
import { useState } from 'react'

const MyForm = () => {

  // gerenciando dados 
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')

  const handleName = (e) => {
    setName(e.target.value)
  }

  const handleSubmit = (e) => {
    
  }

  return (
    <div>
      {/* envio de form*/}

        {/* criação de forms */}
        <form onSubmit={handleSubmit}>
            <div className={style.formulario}>
                <label htmlFor='name'>
                    Name: 
                </label>
                <input type = 'text' name = 'name' placeholder='Insira seu nome' onChange={handleName}/>
            </div>

            {/* criação de label com input*/}
            <label>
              <span>
                Email:
              </span>
              <input type = 'email' name = 'email' placeholder='Insira seu email' onChange = {(e) => setEmail(e.target.value)}/>
            </label>
            <input type = 'submit' value = 'Enviar'/>
        </form>
    </div>
  )
}

export default MyForm