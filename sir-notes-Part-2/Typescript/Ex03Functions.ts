//Functions in TS has similar syntax as in JS. export functions can be imported into another TS files and consumed.
//export function functionName(parameter1 : dataType, parameter2 : dataType) : returnType {...contents...} 
export function addFunc(a: number, b: number): number {
    return a + b;
}

export function subFunc(a: number, b: number): number {
    return a - b;
}
//Typesafe function to multiply two numbers.
export function multiplyFunc(a: number, b: number): number {
    return a * b;
}
//I should call the functions from another file as the functions are exported.
// let res : number = addFunc(10, 5);
// console.log("Addition Result: " + res);

// res = subFunc(10, 5);
// console.log("Subtraction Result: " + res);

// res = multiplyFunc(10, 5);
// console.log("Multiplication Result: " + res);
