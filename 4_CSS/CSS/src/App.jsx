import { useState } from 'react'
import './App.css'
import MyComponent from './components/MyComponent'
import Title from './components/Title';

function App() {
  const [count, setCount] = useState(0)

  const redTitle = true;

  return (
    <>
      <div className='App'>

        {/* CSS GLOBAL */}
        <h1>CSS</h1>

        {/* CSS Component */}
        <MyComponent />

        {/* CSS INLINE */}
        <p style = {{color: "cyan", fontSize: 20, borderTop: "3px solid white"}}>Elemento com Css Inline</p>

        {/* CSS INLINE Dinamico*/}
        <button onClick = {() => setCount(count + 1)}>Clique aqui</button>
        <h2 style = {count > 10 ? ({color: "black"}) : ({color: "white"}) }>Elemento com Css Dinâmico</h2>

        {/* CSS Clase Dinamica*/}
        <h3 className = {redTitle ? "red-title" : "title"}>Elemento com Classe Dinâmica</h3>

        {/* CSS Modules*/}
        <Title />
      
      </div>
    </>
  )
}

export default App
