import React, {useState} from "react";

const Challenge = () => {

    const [firstNumber, setFirstNumber] = useState(0); 
    const [secondNumber, setSecondNumber] = useState(0);
    const [sumNumbers, setSumNumbers] = useState(0);

    const RaiseNumberCount  = (x) => {
        return x + 1;
    }

    const handlePlusFirst = () => {
        setFirstNumber(RaiseNumberCount(firstNumber));
        calculateSum();
    }

    const handlePlusSecond = () => {
        setSecondNumber(RaiseNumberCount(secondNumber));
        calculateSum();
    }   

    const calculateSum = () => {
        setSumNumbers(firstNumber + secondNumber);
    }

    return (
        <div className="sum">
            <button onClick = {handlePlusFirst}> Plus First</button>
            <button onClick = {handlePlusSecond}> Plus Second</button>
            
            <h1>Sum: {sumNumbers}</h1>
        </div>
    )



}

export default Challenge;