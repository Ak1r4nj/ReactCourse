import style from "./PrintCar.module.css"

const PrintCar = ({car}) => {
  return (
    <div className={style.print_car}>
        <h2>{car.name}</h2>
        <p>Preço: {car.price}</p>
        <p>Cor: {car.color}</p>
    </div>
  )
}

export default PrintCar