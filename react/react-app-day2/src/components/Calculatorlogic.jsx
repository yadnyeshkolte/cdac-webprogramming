
import React, { useState } from "react";

function Calculatorlogic(){
    const [first, setFirst] = useState(0);
    const [operand, setOperand] = useState("+")
    const [second, setSecond] = useState(0);
    const [result, setResult] = useState(0);
    
    const getResult = () =>  {
        switch(operand){
            case '+':
                setResult(first+second);
                break;
            case '-':
                setResult(first-second);
                break;
            case '*':
                setResult(first*second);
                break;
            case '/':
                setResult(first/second)
                break;
            default:
                alert("Invalid Operator");
                break;
        }
    }
    return(
        <>
            <h1>Calculator App</h1>
            <hr />
            <input type="number" placeholder="1st number" name="num1" value={first} onChange={(e) => setFirst(Number(e.target.value))}></input>
            <select value={operand} onChange={(e) => setOperand(e.target.value)}>
                <option>+</option>
                <option>-</option>
                <option>*</option>
                <option>/</option>
            </select>
            <input type="number" placeholder="2nd number" name="num2" value={second} onChange={(e) => setSecond(Number(e.target.value))}></input>
            <button placeholder= "Calculate"style={{backgroundColor: "black"}} onClick={getResult}>=</button>
            <p>{result}</p>

        </>
    )
}

export default Calculatorlogic;