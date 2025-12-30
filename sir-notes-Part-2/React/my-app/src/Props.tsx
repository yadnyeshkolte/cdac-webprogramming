//Props or Properties in React are used to pass data from one component to another.
//They are read only and cannot be modified inside the component which is receiving them.
//When U want data to be passed from Parent component to child component, we use Props.
//Use the short cut rfcp to create template of React Functional Component with PropTypes.
//props is more like an object which contains key value pairs. The keys are the names of the props and the values are the values passed to the props.

import React from 'react'

export default function Props(props : {name: string, age: number, isStudent : boolean} | null) {
  //define UR fields here
  const name : string = props ? props.name : "Guest";
  const age : number = props ? props.age : 0; //shorter form of ternary operator. 
  const isStudent : boolean = props ? props.isStudent : false;
 
  return (
    <div className='container'>
        <p>Name : {name}</p>
        <p>Age : {age}</p>
        <p>Student : {isStudent ? "Yes" : "No"}</p> 
    </div>
  )
}

//Provide default values if not provided by the parent...
Props.defaultProps = {
    name : "Guest",
    age : 0,
    isStudent : false
}