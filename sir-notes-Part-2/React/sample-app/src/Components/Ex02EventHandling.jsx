import React from 'react'

// Define the Ex02EventHandling component like a function of JS
const Ex02EventHandling = () => {
  // Event handler function 
  const handleClick = () => {
    alert('Button was clicked!')
    }
    const handleAddFunc = () => {
        const first = parseFloat(prompt("Enter first number: "))
        const second = parseFloat(prompt("Enter second number: "))
        alert(`The sum is: ${first + second}`)
    }

    const handleSubFunc = () => {
        const first = parseFloat(prompt("Enter first number: "))//All inputs are string by default. For computing + operation, we need to convert them to numbers. parseInt and parseFloat are used for that.
        const second = parseFloat(prompt("Enter second number: "))
        alert(`The difference is: ${first - second}`)
    }

    const handleMulFunc = () => {
        const first = parseFloat(prompt("Enter first number: "))
        const second = parseFloat(prompt("Enter second number: "))
        alert(`The product is: ${first * second}`)
    }

    const handleDivFunc = () => {
        const first = parseFloat(prompt("Enter first number: "))
        const second = parseFloat(prompt("Enter second number: "))
        alert(`The quotient is: ${first / second}`)
    }
    return (
        <>
            <button onClick={handleClick}>Click Me!</button>
            <button onClick={handleAddFunc}>Add</button>
            <button onClick={handleSubFunc}>Subtract</button>
            <button onClick={handleMulFunc}>Multiply</button>
            <button onClick={handleDivFunc}>Divide</button>
        </>
    )
}

export default Ex02EventHandling