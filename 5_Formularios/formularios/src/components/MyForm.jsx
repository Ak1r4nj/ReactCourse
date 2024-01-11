import style from './MyForm.module.css'
import { useState } from 'react'

const MyForm = ({user}) => {

  //controlled inputs 

  // gerenciando dados 
  const [name, setName] = useState(user ? user.name : '')
  const [email, setEmail] = useState(user ? user.email : '')

  const [bio, setBio] = useState(user ? user.bio : '')
  const [role, setRole] = useState(user ? user.role : '')

  const handleName = (e) => {
    setName(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault ()
    console.log("EnviandoForm")

    // limpar forms 
    setName('')
    setEmail('')
    setBio('')
    setRole('')
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
                <input type = 'text' name = 'name' placeholder='Insira seu nome' onChange={handleName} value = {name}/>

            {/* criação de label com input*/}
            <label>
              <span>
                Email:
              </span>
              <input type = 'email' name = 'email' placeholder='Insira seu email' onChange = {(e) => setEmail(e.target.value)} value = {email}/>
            </label>

            {/* criação de textarea */}
            <label>
              <span>Descrição: </span>
              <textarea name = 'bio' placeholder = 'Insira a Descrição' onChange = {(e) => setBio(e.target.value)} value = {bio}></textarea>
            </label>

            {/* criação de Select*/}
            <label>
              <span>Função Select</span>
              <select name = 'role' onChange={(e) => setRole(e.target.value)}>
                <option value = 'user'>Usuário</option>
                <option value = 'dev'>Developer</option>
                <option value = 'teacher'>Professor</option>
              </select>
            </label>
            </div>
            <input type = 'submit' value = 'Enviar'/>
        </form>
    </div>
  )
}

export default MyForm