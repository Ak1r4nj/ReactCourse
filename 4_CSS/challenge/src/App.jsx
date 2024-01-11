import './App.css'
import PrintCar from './components/PrintCar'

function App() {

  const car = [
    {id:1, name:"Fiat", price:10000, color: "red"},
    {id:2, name:"Ford", price:20000, color: "blue"},
    {id:3, name:"Renault", price:30000, color: "green"},
    {id:4, name:"Chevrolet", price:40000, color: "yellow"},
    {id:5, name:"Peugeot", price:50000, color: "black"},
    {id:6, name:"Citroen", price:60000, color: "white"},
  ]



  return (
    <>
      <div className="App">
        <h1>Catálogo</h1>
        <div className = 'catalog' >
          {car.map ((auto) => ( 
            <PrintCar key = {auto.id} car ={auto}/>  // imprimir o carro
          ))}
        </div>
      </div>
    </>
  )
}

export default App
