import Fragment from './components/Fragment';
import './App.css'
import Designer from "./assets/Yohji.jpg";
import ConditionalRendering from './components/ConditionalRendering';
import List from './components/List';
import ManageData from './components/ManageData';
import ShowUserName from './components/ShowUserName';
import Container from './components/Container';
import ExecuteFunction from './components/ExecuteFunction';
import { useState } from 'react';
import PrintMessage from './components/PrintMessage';
import ChangeMessage from './components/ChangeMessage';
import RenderDesafio from './components/RenderDesafio';

function App() {

  function Mensagem(){
    console.log("Apareceu Mensagem")
  }

  const [message, setMessage] = useState("")

  const handleMessage = (msg) => {
    setMessage(msg)
  }

  const worker = [
    {id: 1, name: "Akira", age: 21, job: "Dev"},
    {id: 2, name: "Yohji", age: 21, job: "Designer"},
    {id: 3, name: "Yuki", age: 21, job: "Dev"},
    {id: 4, name: "Toshi", age: 16, job: "Dev"}
  ]

  return (
    <>
      <div className='App'> 
        <h1> Seção 3 </h1>

        
        {worker.map ((person) => (
          <RenderDesafio key = {person.id} nome={person.name} idade={person.age} profissao={person.job}/>
        ))}

        <PrintMessage message={message}/>
        <ChangeMessage handleMessage = {handleMessage}/>

        <ExecuteFunction execute={Mensagem}/>

        <Container>
          <h1>Conteúdo</h1>
        </Container>

        {worker.map ((individual) => (
          <ShowUserName key = {individual.id} name={individual.name} age={individual.age} job={individual.job} />
        ))}

        <ManageData />

        <List />

        <ConditionalRendering/>

        <Fragment />
      </div>

      {/*Imagem em Public*/}

      <div>
        <img src = "/MinhaFoto.jpeg" alt = "Minha Foto" />
      </div>

      {/*Imagem em Assets*/}

      <div>
        <img src = {Designer} alt = "Designer"/>
      </div>
    </>
  )
}

export default App
