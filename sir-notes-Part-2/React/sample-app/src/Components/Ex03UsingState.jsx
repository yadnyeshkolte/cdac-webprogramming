//React is a UI library that uses V-DOM to optimize rendering of the UI to the actual DOM.
//React handles all the data binding and updates to the UI efficiently.
//Changes made to the UI(Actual DOM) are reflected in the V-DOM and vice versa using hook called useState.
//React by default does not handle any kind of state management(Saving capability). So we use hooks like useState to manage state in functional components.
//Hook in React is an additional function that provides a way to resolve a specific problem.
//useState is a react hook used to persist the state of the component and refer it b/w the physical DOM and V-DOM.

import { useState } from "react";

//Created a new Component called Ex03UsingState
const Ex03UsingState = () => {
    let [name, setName] = useState("");//U create a variable and tell the React to maintain the state of this variable. every variable shall have a setter function which will be called when the state changes in the Physical DOM. useState takes a default value as argument
    let [age , setAge] = useState(0);//default age is 0...

    function onUpdate(){
        setName("John");
        setAge(34);
    }
    return (
        <>
        <h1>Using useState Hook </h1>
        <hr />
        <p>Name : {name} <button onClick={onUpdate}>Update</button></p>
        <p>Age : {age}</p>
        </>
    )
};

export default Ex03UsingState;