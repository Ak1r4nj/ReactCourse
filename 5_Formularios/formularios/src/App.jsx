import './App.css'
import MyForm from './components/MyForm'

function App() {

  return (
    <>
      <div className="App">
        <h2>
          Forms
        </h2>
        <MyForm user = {{name:"Cristohper", email: "falala@gmail.com", bio: "Descrição inserida pelo usuário", role: 'Developer'}}/>
      </div>
    </>
  )
}

export default App
