import { useState } from "react";

//UI Components created in react is one way. data is rendered to the UI or DOM, but changes to the physical DOM is not refected to the virtual DOM. 
export default function Ex04CalcApp() {
    //Above it, implement the logic. 
    //4 variables to be created. Two for input values, one for operator and one for result.
    //////////////////////////////////Try this Example to understand how event handling is done////////////////////
    // const first =15;
    // const second =20;
    // const operator ='-';
    // const result = first + second;
    // //handle the events appropriately.   
    ////////////////////////Try this example for handling useState hook for DOM manipulations and statemanagement within the Component. 
    const [first, setFirst] = useState(0.0);
    const [second, setSecond] = useState(0.0);
    const [operand, setOperand] = useState("+");//For arithematic operations. 
    const [result, setResult] = useState(0.0);
    const getResult = () => {
        debugger;
        switch(operand){
            case '+': setResult(first + second); break;
            case '-': setResult(first - second); break;
            case '*': setResult(first * second); break;
            case '/': setResult(first / second);break;
            default:alert('Invalid Operator'); break;
        }
    }
//implement the UI which should be under return block
 return(
    <>
        <h2>Simple Calculator</h2>
        <hr />
        <div>
            <input onChange={(e) => {debugger; setFirst(e.target.value)}} type="number" placeholder="Enter the First value" value={first}/>
            <select onChange={(e) => setOperand(e.target.value)} value={operand}>
                <option>+</option>
                <option>-</option>
                <option>*</option>
                <option>/</option>
            </select>
            <input type="number" placeholder="Enter the Second value" onChange={(e) => setSecond(e.target.value)} value={second}/>
            <button onClick={getResult}>=</button>
            <span>{result}</span>
        </div>
    </>
 )
}
